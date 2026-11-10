import React, { useState } from 'react';
import { COUNTRIES, PROCESS_STEPS } from '../data/visaData';

interface ProcessTimelineProps {
  onOpenConsult: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsult }) => {
  const [checklistOpen, setChecklistOpen] = useState(false);
  const [selectedCountryId, setSelectedCountryId] = useState('schengen');
  const [selectedJobType, setSelectedJobType] = useState('contract');

  const selectedCountry = COUNTRIES.find((c) => c.id === selectedCountryId) || COUNTRIES[0];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#e2e8f0]" id="quy-trinh">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            QUY TRÌNH TƯ VẤN 4 BƯỚC
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Quy Trình Hỗ Trợ Rõ Ràng & Minh Bạch
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            VISA5S thực hiện đúng phạm vi tư vấn thông tin, hướng dẫn chuẩn bị giấy tờ và cung cấp thông tin quy trình chính thức để khách hàng chủ động thực hiện.
          </p>
        </div>

        {/* Desktop 4-step row / Mobile vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="flex flex-col gap-3 relative">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full font-extrabold text-[18px] flex items-center justify-center shadow-md ${
                    step.step === '04'
                      ? 'bg-[#ea580c] text-white'
                      : 'bg-[#002552] text-white'
                  }`}
                >
                  {step.step}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block h-0.5 flex-1 bg-[#d3e4fe]"></div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-[17px] font-bold text-[#002552]">
                  Bước {Number(step.step)}: {step.title}
                </h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
                <span className="text-[12px] font-semibold text-[#0060aa] mt-1">
                  Phạm vi: {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Document Checklist Tool (Non-misleading interactive helper) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#f8f9ff] border border-[#d3e4fe]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0060aa] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">checklist</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#002552]">
                  Tra cứu nhanh nhóm giấy tờ tham khảo theo quốc gia
                </h4>
                <p className="text-[13px] text-[#64748b]">
                  Xem trước danh mục giấy tờ thường gặp và liên kết website chính thức để đối chiếu quy định mới nhất.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setChecklistOpen(!checklistOpen)}
              className="self-start sm:self-auto px-4 py-2 rounded-lg bg-white border border-[#cbd5e1] text-[#0060aa] text-[13px] font-bold hover:bg-[#eff4ff] transition-colors cursor-pointer"
            >
              {checklistOpen ? 'Thu gọn danh mục' : 'Xem danh mục tham khảo'}
            </button>
          </div>

          {checklistOpen && (
            <div className="pt-4 space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                    Quốc gia dự định đến:
                  </label>
                  <select
                    value={selectedCountryId}
                    onChange={(e) => setSelectedCountryId(e.target.value)}
                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                    Nhóm hồ sơ công việc hiện tại:
                  </label>
                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                  >
                    <option value="contract">Người lao động có hợp đồng / xác nhận công tác</option>
                    <option value="business">Chủ doanh nghiệp / hộ kinh doanh</option>
                    <option value="other">Nghỉ hưu / học sinh - sinh viên / lao động tự do</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d3e4fe] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[14px] font-bold text-[#002552]">
                    Nhóm giấy tờ tham khảo ({selectedCountry.name})
                  </span>
                  {selectedCountry.officialSources[0] && (
                    <a
                      href={selectedCountry.officialSources[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#0060aa] hover:underline"
                    >
                      <span>{selectedCountry.officialSources[0].label}</span>
                      <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12.5px] text-[#434750]">
                  <div>
                    <strong className="text-[#1e293b] block mb-1">Giấy tờ nhân thân & chuyến đi:</strong>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {selectedCountry.requirements.personal.slice(0, 2).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                      {selectedCountry.requirements.trip.slice(0, 1).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-[#1e293b] block mb-1">Chứng từ công việc & tài chính tham khảo:</strong>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {selectedJobType === 'business' ? (
                        <li>Giấy phép đăng ký kinh doanh, chứng từ hoạt động và nghĩa vụ thuế (nếu có).</li>
                      ) : selectedJobType === 'other' ? (
                        <li>Giấy tờ xác nhận tình trạng hiện tại (quyết định hưu trí, thẻ sinh viên hoặc giải trình thu nhập hợp pháp).</li>
                      ) : (
                        <li>Hợp đồng lao động, bảng lương/sao kê lương và đơn xin nghỉ phép có xác nhận.</li>
                      )}
                      {selectedCountry.requirements.financial.slice(0, 1).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#f1f5f9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[12px] text-[#64748b]">
                    Lưu ý: Danh mục trên chỉ mang tính tham khảo; khách hàng cần kiểm tra quy định cập nhật tại nguồn chính thức.
                  </span>
                  <button
                    type="button"
                    onClick={onOpenConsult}
                    className="px-4 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-[13px] font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    Gửi yêu cầu tư vấn
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Consultation Trigger banner */}
        <div className="p-6 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#0060aa] flex items-center justify-center shrink-0 shadow-xs border border-[#e2e8f0]">
              <span className="material-symbols-outlined text-[28px]">contact_support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold text-[#002552]">
                Cần trao đổi về tình trạng hỗ trợ hoặc quy trình chuẩn bị hồ sơ?
              </span>
              <span className="text-[13px] text-[#64748b]">
                Liên hệ chuyên viên VISA5S để được tư vấn ban đầu và giải thích chi phí liên quan trước khi sử dụng dịch vụ.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsult}
            className="px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-[14px] transition-all shadow-sm active:scale-95 shrink-0 cursor-pointer"
          >
            Trao đổi tình trạng hỗ trợ
          </button>
        </div>
      </div>
    </section>
  );
};
