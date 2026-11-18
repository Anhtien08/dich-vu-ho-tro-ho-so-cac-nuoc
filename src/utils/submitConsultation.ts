import { COUNTRIES } from '../data/visaData';

export interface ConsultationPayload {
  fullName: string;
  phoneNumber: string;
  countryId: string;
  purposeId: string;
  expectedDate: string;
  sourceForm: 'Form đầu trang' | 'Form cuối trang' | 'Popup tư vấn';
}

const DEFAULT_FORMSUBMIT_RECIPIENT = 'tatien08102004@gmail.com';

/**
 * Hỗ trợ cấu hình mã endpoint FormSubmit riêng (lấy từ email xác nhận FormSubmit):
 * - Có thể đặt qua biến môi trường VITE_FORMSUBMIT_ENDPOINT (VD: https://formsubmit.co/abc123... hoặc chỉ mã abc123...)
 * - Hoặc thay trực tiếp giá trị trong FORMSUBMIT_CUSTOM_ENDPOINT bên dưới.
 * Nếu chưa điền mã riêng, hệ thống dùng mặc định email tiếp nhận: tatien08102004@gmail.com.
 */
const FORMSUBMIT_CUSTOM_ENDPOINT = '';

function resolveFormSubmitAjaxUrl(): string {
  const envEndpoint =
    (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
      ?.VITE_FORMSUBMIT_ENDPOINT?.trim() || '';
  const raw = (envEndpoint || FORMSUBMIT_CUSTOM_ENDPOINT || DEFAULT_FORMSUBMIT_RECIPIENT).trim();

  if (!raw || raw.includes('MÃ_FORM_SUBMIT_CỦA_TÔI')) {
    return `https://formsubmit.co/ajax/${DEFAULT_FORMSUBMIT_RECIPIENT}`;
  }

  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    const cleaned = raw.replace(/\/+$/, '');
    if (cleaned.includes('/ajax/')) {
      return cleaned;
    }
    return cleaned.replace(/^https?:\/\/formsubmit\.co\//i, 'https://formsubmit.co/ajax/');
  }

  return `https://formsubmit.co/ajax/${raw.replace(/^\/+/, '')}`;
}

const PURPOSE_LABELS: Record<string, string> = {
  'du-lich': 'Du lịch',
  'cong-tac': 'Công tác / Thương mại',
  'tham-than': 'Thăm thân nhân',
  'dinh-cu-du-hoc': 'Du học / Khác',
};

function resolveCountryLabel(countryId: string): string {
  if (countryId === 'khac') return 'Quốc gia khác';
  const matched = COUNTRIES.find((c) => c.id === countryId);
  return matched ? matched.name : countryId;
}

export async function submitConsultationToEmail(
  payload: ConsultationPayload,
  signal?: AbortSignal
): Promise<void> {
  const endpointUrl = resolveFormSubmitAjaxUrl();
  const countryLabel = resolveCountryLabel(payload.countryId);
  const purposeLabel = PURPOSE_LABELS[payload.purposeId] || payload.purposeId;
  const submittedAt = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  let response: Response;
  try {
    response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal,
      body: JSON.stringify({
        _subject: `[VISA5S] Yêu cầu tư vấn mới - ${countryLabel} (${payload.fullName})`,
        _template: 'table',
        _captcha: 'false',
        'Họ và tên': payload.fullName,
        'Số điện thoại / Zalo': payload.phoneNumber,
        'Quốc gia dự định đến': countryLabel,
        'Mục đích chuyến đi': purposeLabel,
        'Thời gian dự kiến': payload.expectedDate || 'Chưa cung cấp',
        'Nguồn gửi': payload.sourceForm,
        'Thời điểm gửi': submittedAt,
      }),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }
    throw new Error(
      'Không thể kết nối máy chủ gửi email. Vui lòng kiểm tra mạng và thử lại hoặc gọi Hotline 0911.909.686.'
    );
  }

  let data: { success?: boolean | string; message?: string } | null = null;
  try {
    data = (await response.json()) as {
      success?: boolean | string;
      message?: string;
    };
  } catch {
    data = null;
  }

  if (data?.message && data.message.toLowerCase().includes('activat')) {
    throw new Error(
      'Endpoint FormSubmit cần được bấm xác nhận kích hoạt trong email của tatien08102004@gmail.com trước khi nhận dữ liệu.'
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        'Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau hoặc gọi Hotline 0911.909.686.'
    );
  }

  if (!data || (data.success !== true && data.success !== 'true')) {
    throw new Error(
      data?.message ||
        'Gửi yêu cầu chưa nhận được xác nhận từ FormSubmit. Vui lòng thử lại hoặc gọi Hotline 0911.909.686.'
    );
  }
}
