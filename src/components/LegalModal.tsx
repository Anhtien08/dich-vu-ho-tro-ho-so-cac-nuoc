import React from 'react';
import { LEGAL_DISCLAIMER } from '../data/visaData';

export type LegalDocType = 'privacy' | 'terms' | 'feedback' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  const titles: Record<Exclude<LegalDocType, null>, string> = {
    privacy: 'Chính Sách Bảo Mật Thông Tin',
    terms: 'Điều Khoản Cung Cấp Dịch Vụ Tư Vấn',
    feedback: 'Tiếp Nhận Phản Hồi & Giải Quyết Khiếu Nại',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-[#002552]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden z-10 max-h-[88vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8f9ff]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#0060aa] text-[22px]">policy</span>
            <h3 id="legal-modal-title" className="text-[18px] font-bold text-[#002552]">
              {titles[docType]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="w-9 h-9 rounded-full bg-white border border-[#e2e8f0] hover:bg-[#e5eeff] flex items-center justify-center text-[#64748b] hover:text-[#002552] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-[14px] text-[#1e293b] leading-relaxed">
          {docType === 'privacy' && (
            <>
              <p>
                <strong>1. Đơn vị tiếp nhận thông tin:</strong> Công ty TNHH Tư vấn Đầu tư Asia Blue Sky (thương hiệu VISA5S) là doanh nghiệp tư nhân độc lập.
              </p>
              <p>
                <strong>2. Mục đích thu thập thông tin:</strong> Họ tên, số điện thoại/Zalo, quốc gia dự định đến, mục đích chuyến đi và thời gian dự kiến chỉ được sử dụng để chuyên viên VISA5S liên hệ tư vấn thông tin, đánh giá sơ bộ và trao đổi phạm vi hỗ trợ chuẩn bị hồ sơ theo yêu cầu của khách hàng.
              </p>
              <p>
                <strong>3. Lưu ý quan trọng:</strong> Việc gửi thông tin trên website này <strong>không đồng nghĩa</strong> với việc đã nộp hồ sơ xin thị thực cho cơ quan Chính phủ, Đại sứ quán hay Lãnh sự quán.
              </p>
              <p>
                <strong>4. Phạm vi chia sẻ & bảo mật:</strong> Thông tin liên hệ không được bán, trao đổi hoặc cung cấp cho bên thứ ba ngoài phạm vi tư vấn khi chưa có sự đồng ý của khách hàng, trừ trường hợp theo yêu cầu hợp pháp của cơ quan nhà nước có thẩm quyền.
              </p>
              <p>
                <strong>5. Quyền của khách hàng:</strong> Quý khách có quyền yêu cầu kiểm tra, chỉnh sửa hoặc xóa thông tin liên hệ đã gửi bất kỳ lúc nào qua email{' '}
                <a href="mailto:info@visa5s.com.vn" className="text-[#0060aa] font-semibold hover:underline">
                  info@visa5s.com.vn
                </a>{' '}
                hoặc hotline{' '}
                <a href="tel:0911909686" className="text-[#0060aa] font-semibold hover:underline">
                  0911.909.686
                </a>.
              </p>
            </>
          )}

          {docType === 'terms' && (
            <>
              <p>
                <strong>1. Tư cách doanh nghiệp & phạm vi dịch vụ:</strong> VISA5S cung cấp dịch vụ tư vấn thông tin, đánh giá sơ bộ và hướng dẫn chuẩn bị giấy tờ xuất nhập cảnh, thị thực quốc tế trên cơ sở thỏa thuận dịch vụ thương mại độc lập.
              </p>
              <p>
                <strong>2. Phân tách thẩm quyền:</strong> VISA5S không phải cơ quan Chính phủ, Đại sứ quán, Lãnh sự quán hoặc cơ quan cấp thị thực. Quyết định chấp thuận, yêu cầu bổ sung hay từ chối thị thực thuộc hoàn toàn thẩm quyền của cơ quan có thẩm quyền thuộc quốc gia tiếp nhận.
              </p>
              <p>
                <strong>3. Minh bạch chi phí:</strong> Phí dịch vụ tư vấn của VISA5S độc lập với lệ phí chính thức do cơ quan nhà nước hoặc đơn vị tiếp nhận quy định và độc lập với chi phí bên thứ ba (dịch thuật, công chứng, bảo hiểm... nếu phát sinh). Khách hàng luôn được báo giá rõ ràng trước khi thỏa thuận sử dụng dịch vụ.
              </p>
              <p>
                <strong>4. Trách nhiệm cung cấp thông tin:</strong> Khách hàng có trách nhiệm cung cấp thông tin, tài liệu trung thực, chính xác và tự kiểm tra các quy định cập nhật tại website chính thức của cơ quan có thẩm quyền.
              </p>
            </>
          )}

          {docType === 'feedback' && (
            <>
              <p>
                <strong>1. Kênh tiếp nhận phản hồi:</strong> Mọi góp ý, thắc mắc về chất lượng tư vấn, minh bạch chi phí hoặc yêu cầu hỗ trợ sau tư vấn, quý khách vui lòng liên hệ trực tiếp qua:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Hotline tiếp nhận:{' '}
                  <a href="tel:0911909686" className="text-[#0060aa] font-semibold hover:underline">
                    0911 909 686
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a href="mailto:info@visa5s.com.vn" className="text-[#0060aa] font-semibold hover:underline">
                    info@visa5s.com.vn
                  </a>
                </li>
                <li>Trực tiếp tại văn phòng giao dịch trong giờ hành chính (Thứ 2 - Thứ 7: 08:00 - 18:00).</li>
              </ul>
              <p>
                <strong>2. Nguyên tắc xử lý:</strong> VISA5S tiếp nhận, xác minh thông tin đối chiếu với thỏa thuận dịch vụ đã thống nhất giữa hai bên và phản hồi phương án giải quyết minh bạch, kịp thời.
              </p>
            </>
          )}

          <div className="p-4 rounded-xl bg-[#f5f7fa] border border-[#e2e8f0] text-[12.5px] text-[#434750] space-y-1.5">
            <p className="font-bold text-[#002552] uppercase tracking-wide">{LEGAL_DISCLAIMER.title}</p>
            {LEGAL_DISCLAIMER.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="px-6 py-3.5 bg-[#f8f9ff] border-t border-[#e2e8f0] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#002552] hover:bg-[#103b73] text-white text-[13px] font-bold transition-colors cursor-pointer"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
