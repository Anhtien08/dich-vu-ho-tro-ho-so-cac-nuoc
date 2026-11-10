import React, { useState } from 'react';
import { CountryVisa } from '../data/visaData';

interface CountryDetailModalProps {
  country: CountryVisa | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (countryId: string) => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  isOpen,
  onClose,
  onApply,
}) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'notes' | 'costs'>('requirements');

  if (!isOpen || !country) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#002552]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Header with country image banner */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#002552]">
          <img
            src={country.heroImage}
            alt={`Thông tin tham khảo ${country.name}`}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002552] via-[#002552]/55 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Country Title & Reference Tag */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1.5 text-white">
            <div className="flex items-center flex-wrap gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white">
                {country.continentLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#0060aa] text-[11px] font-bold text-white">
                Thông tin tham khảo
              </span>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-white leading-tight">
              Hồ Sơ Quốc Gia: {country.name}
            </h3>
            <p className="text-[13px] text-white/90 line-clamp-1">{country.badgeInfo}</p>
          </div>
        </div>

        {/* Modal Quick Reference Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#f8f9ff] border-b border-[#e2e8f0] px-6 py-3 text-center">
          <div className="p-1">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Xử lý tham khảo</span>
            <span className="text-[12px] font-bold text-[#002552] leading-snug block">{country.processingTimeRef}</span>
          </div>
          <div className="p-1 border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Thời hạn tham khảo</span>
            <span className="text-[12px] font-bold text-[#002552] leading-snug block">{country.validityRef}</span>
          </div>
          <div className="p-1 border-t sm:border-t-0 sm:border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Lưu trú tham khảo</span>
            <span className="text-[12px] font-bold text-[#002552] leading-snug block">{country.stayDurationRef}</span>
          </div>
          <div className="p-1 border-t sm:border-t-0 sm:border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Mức độ chuẩn bị</span>
            <span className="text-[12px] font-bold text-[#ea580c] leading-snug block">{country.preparationLevel}</span>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-[#e2e8f0] px-4 sm:px-6 bg-white shrink-0 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('requirements')}
            className={`py-3 px-3 sm:px-4 font-semibold text-[13px] sm:text-[14px] border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'requirements'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Giấy tờ thường yêu cầu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`py-3 px-3 sm:px-4 font-semibold text-[13px] sm:text-[14px] border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'notes'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Lưu ý & Nguồn chính thức
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('costs')}
            className={`py-3 px-3 sm:px-4 font-semibold text-[13px] sm:text-[14px] border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'costs'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Mục đích & Minh bạch chi phí
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'requirements' && (
            <div className="space-y-4">
              <p className="text-[13.5px] text-[#64748b] leading-relaxed">
                {country.shortDesc} Dưới đây là các nhóm giấy tờ thường được yêu cầu mang tính chất tham khảo (yêu cầu cụ thể có thể thay đổi tùy quy định hiện hành của cơ quan có thẩm quyền):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Nhân thân */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">badge</span>
                    <span>1. Nhóm giấy tờ nhân thân</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.personal.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Công việc */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">work</span>
                    <span>2. Nhóm chứng từ công việc</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.employment.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Tài chính */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">account_balance</span>
                    <span>3. Nhóm chứng từ tài chính</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.financial.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Chuyến đi */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">flight</span>
                    <span>4. Thông tin chuyến đi dự kiến</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.trip.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <h4 className="text-[15px] font-bold text-[#002552]">Những điểm cần lưu ý khi chuẩn bị hồ sơ</h4>
              <div className="space-y-2">
                {country.preparationNotes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#eff4ff] border border-[#d3e4fe]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px] shrink-0 mt-0.5">info</span>
                    <span className="text-[13px] font-medium text-[#002552] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#cbd5e1] space-y-2.5">
                <h5 className="text-[14px] font-bold text-[#002552] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#0060aa] text-[18px]">public</span>
                  Website chính thức của cơ quan có thẩm quyền
                </h5>
                <p className="text-[12.5px] text-[#64748b]">
                  Khách hàng cần tự kiểm tra yêu cầu hồ sơ, lệ phí và quy trình mới nhất tại cổng thông tin chính thức dưới đây:
                </p>
                <div className="flex flex-col gap-2">
                  {country.officialSources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-[#d3e4fe] text-[#0060aa] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors"
                    >
                      <span>{src.label}</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'costs' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[15px] font-bold text-[#002552] mb-2">Mục đích chuyến đi & Thông tin tham khảo</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {country.visaTypes.map((type, i) => (
                    <div key={i} className="p-3 rounded-lg border border-[#e2e8f0] bg-white flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#0060aa] text-[18px] shrink-0">description</span>
                      <span className="text-[13px] font-semibold text-[#1e293b]">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-[15px] font-bold text-[#002552]">Phân tách các khoản chi phí liên quan</h4>
                <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0] text-[13px] space-y-2">
                  <div>
                    <strong className="text-[#002552]">1. Phí dịch vụ tư vấn của VISA5S: </strong>
                    <span className="text-[#434750]">{country.feeTransparency.consultingFee}</span>
                  </div>
                  <div>
                    <strong className="text-[#002552]">2. Lệ phí chính thức của cơ quan có thẩm quyền: </strong>
                    <span className="text-[#434750]">{country.feeTransparency.officialFee}</span>
                  </div>
                  <div>
                    <strong className="text-[#002552]">3. Chi phí bên thứ ba (nếu phát sinh): </strong>
                    <span className="text-[#434750]">{country.feeTransparency.thirdPartyFee}</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#64748b] leading-relaxed">
                  Lưu ý: Khách hàng có thể tự tìm hiểu quy định và tự thực hiện nộp hồ sơ trực tiếp tại cơ quan chính thức mà không cần sử dụng dịch vụ tư vấn có tính phí của VISA5S.
                </p>
              </div>
            </div>
          )}

          {/* Persistent Legal Notice */}
          <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-[#e2e8f0] text-[12px] text-[#434750] leading-relaxed">
            <strong className="text-[#002552]">Lưu ý pháp lý:</strong> VISA5S là doanh nghiệp tư nhân cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ; không phải cơ quan Chính phủ, Đại sứ quán hay Lãnh sự quán và không có thẩm quyền quyết định kết quả xét duyệt.
          </div>
        </div>

        {/* Modal Footer with Action */}
        <div className="px-6 py-4 bg-[#f8f9ff] border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[13px] text-[#64748b]">
            <span>Cần trao đổi thông tin tham khảo? Hotline: </span>
            <a href="tel:0911909686" className="font-bold text-[#0060aa] hover:underline">
              0911.909.686
            </a>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-[#cbd5e1] text-[#434750] text-[14px] font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onApply(country.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-[14px] font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Tư vấn hồ sơ ({country.name})</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
