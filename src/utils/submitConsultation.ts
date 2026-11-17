import { COUNTRIES } from '../data/visaData';

export interface ConsultationPayload {
  fullName: string;
  phoneNumber: string;
  countryId: string;
  purposeId: string;
  expectedDate: string;
  sourceForm: 'Form đầu trang' | 'Form cuối trang' | 'Popup tư vấn';
}

const DESTINATION_EMAIL = 'visa5giay@gmail.com';
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`;

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
  const countryLabel = resolveCountryLabel(payload.countryId);
  const purposeLabel = PURPOSE_LABELS[payload.purposeId] || payload.purposeId;
  const submittedAt = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  const response = await fetch(FORMSUBMIT_AJAX_URL, {
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

  if (!response.ok) {
    throw new Error(
      'Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau hoặc gọi Hotline 0911.909.686.'
    );
  }

  const data = (await response.json()) as {
    success?: boolean | string;
    message?: string;
  };

  if (data.success !== true && data.success !== 'true') {
    if (data.message && data.message.toLowerCase().includes('activat')) {
      throw new Error(
        'Email tiếp nhận (visa5giay@gmail.com) cần xác nhận kích hoạt lần đầu trong hộp thư đến trước khi nhận form tự động.'
      );
    }
    throw new Error(
      data.message ||
        'Gửi yêu cầu chưa thành công. Vui lòng thử lại hoặc gọi Hotline 0911.909.686.'
    );
  }
}
