import React, { useState } from 'react';
import { COUNTRIES, LEGAL_DISCLAIMER } from '../data/visaData';

interface HeroSectionProps {
  onSuccessSubmit?: (data: {
    name: string;
    phone: string;
    country: string;
    purpose: string;
    expectedDate: string;
  }) => void;
  onOpenPrivacy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessSubmit, onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    destinationCountry: '',
    purpose: 'du-lich',
    expectedDate: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit({
          name: formData.fullName,
          phone: formData.phoneNumber,
          country: formData.destinationCountry,
          purpose: formData.purpose,
          expectedDate: formData.expectedDate,
        });
      }
      setFormData({
        fullName: '',
        phoneNumber: '',
        destinationCountry: '',
        purpose: 'du-lich',
        expectedDate: '',
      });
    }, 500);
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] pb-14 lg:pb-20 pt-8 lg:pt-12">
      {/* Ambient layered backdrop glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#61a9fd]/15 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 right-[-15%] h-[500px] w-[500px] rounded-full bg-[#103b73]/10 blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-5 pt-2">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#002552] border border-[#d3e4fe] shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-[#0060aa]">business</span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#002552]">
                DOANH NGHIỆP TƯ NHÂN ĐỘC LẬP • TƯ VẤN HỒ SƠ
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#002552] tracking-tight leading-[1.15]">
                Đồng Hành Tư Vấn <br />
                <span className="text-[#ea580c]">Hồ Sơ Xuất Nhập Cảnh Quốc Tế</span>
              </h1>
              <p className="text-[16px] lg:text-[17px] text-[#434750] max-w-2xl leading-relaxed">
                VISA5S cung cấp dịch vụ tư vấn thông tin, đánh giá sơ bộ và hướng dẫn chuẩn bị hồ sơ theo yêu cầu của từng quốc gia.
              </p>
            </div>

            {/* 5 Core Neutral Consulting Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs border border-[#e2e8f0]/80">
                <div className="w-9 h-9 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-[#1e293b]">
                    Tư vấn thông tin hồ sơ theo mục đích chuyến đi
                  </span>
                  <span className="text-[12.5px] text-[#64748b] mt-0.5">
                    Du lịch, công tác, thăm thân hoặc học tập ngắn/dài hạn.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs border border-[#e2e8f0]/80">
                <div className="w-9 h-9 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">folder_open</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-[#1e293b]">
                    Hướng dẫn chuẩn bị giấy tờ cần thiết
                  </span>
                  <span className="text-[12.5px] text-[#64748b] mt-0.5">
                    Giải thích các nhóm giấy tờ nhân thân, công việc, tài chính.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs border border-[#e2e8f0]/80">
                <div className="w-9 h-9 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-[#1e293b]">
                    Giải thích quy trình và các khoản chi phí liên quan
                  </span>
                  <span className="text-[12.5px] text-[#64748b] mt-0.5">
                    Tách bạch phí tư vấn VISA5S và lệ phí cơ quan có thẩm quyền.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs border border-[#e2e8f0]/80">
                <div className="w-9 h-9 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">fact_check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-[#1e293b]">
                    Hỗ trợ rà soát tính đầy đủ và nhất quán của thông tin
                  </span>
                  <span className="text-[12.5px] text-[#64748b] mt-0.5">
                    Kiểm tra đối chiếu thông tin giữa các chứng từ trước khi thực hiện.
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs border border-[#e2e8f0]/80">
                <div className="w-9 h-9 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-[#1e293b]">
                    Cập nhật thông tin tham khảo từ nguồn chính thức
                  </span>
                  <span className="text-[12.5px] text-[#64748b] mt-0.5">
                    Cung cấp liên kết cổng thông tin chính thức của cơ quan có thẩm quyền để khách hàng chủ động đối chiếu quy định mới nhất.
                  </span>
                </div>
              </div>
            </div>

            {/* Clear Independent Status Notice near Hero */}
            <div className="p-4 rounded-xl bg-white border border-[#cbd5e1] shadow-xs flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0060aa] text-[22px] shrink-0 mt-0.5">info</span>
              <div className="text-[12.5px] text-[#434750] leading-relaxed">
                <strong className="text-[#002552]">{LEGAL_DISCLAIMER.title}: </strong>
                VISA5S là doanh nghiệp tư nhân độc lập, <strong>không phải</strong> cơ quan Chính phủ, Đại sứ quán hay Lãnh sự quán. VISA5S không trực tiếp cấp phép và không có quyền quyết định kết quả xét duyệt hồ sơ xuất nhập cảnh.
              </div>
            </div>
          </div>

          {/* Right Column: Hero Consult Form Card */}
          <div className="lg:col-span-5" id="tu-van">
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-xl border border-[#e2e8f0] flex flex-col gap-4">
              <div className="flex flex-col gap-1 pb-1">
                <div className="inline-flex items-center gap-1.5 text-[#0060aa] text-[11px] font-bold uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[16px]">support_agent</span>
                  <span>Dịch vụ tư vấn thương mại độc lập</span>
                </div>
                <h2 className="text-[21px] font-bold text-[#002552] tracking-tight">
                  Nhận Tư Vấn Ban Đầu
                </h2>
                <p className="text-[13px] text-[#64748b]">
                  Trao đổi thông tin tham khảo và hướng dẫn chuẩn bị giấy tờ theo mục đích chuyến đi.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Full name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_fullname">
                    Họ và tên <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      person
                    </span>
                    <input
                      id="hero_fullname"
                      type="text"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_phone">
                    Số điện thoại hoặc Zalo <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      call
                    </span>
                    <input
                      id="hero_phone"
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại hoặc Zalo"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                    />
                  </div>
                </div>

                {/* Country dropdown */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_country">
                    Quốc gia dự định đến <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      public
                    </span>
                    <select
                      id="hero_country"
                      required
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full h-11 pl-10 pr-10 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Chọn quốc gia dự định đến</option>
                      {COUNTRIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                      <option value="khac">Quốc gia khác...</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 text-[#64748b] text-[20px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Purpose radio options */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1e293b]">Mục đích chuyến đi</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'du-lich' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="du-lich"
                        checked={formData.purpose === 'du-lich'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Du lịch</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'cong-tac' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="cong-tac"
                        checked={formData.purpose === 'cong-tac'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Công tác / TM</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'tham-than' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="tham-than"
                        checked={formData.purpose === 'tham-than'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Thăm thân nhân</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'dinh-cu-du-hoc' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="dinh-cu-du-hoc"
                        checked={formData.purpose === 'dinh-cu-du-hoc'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Du học / Khác</span>
                    </label>
                  </div>
                </div>

                {/* Expected time */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_expected_date">
                    Thời gian dự kiến
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      calendar_month
                    </span>
                    <input
                      id="hero_expected_date"
                      type="text"
                      placeholder="Ví dụ: Tháng 06/2025 hoặc trong 2 tháng tới"
                      value={formData.expectedDate}
                      onChange={(e) => setFormData({ ...formData, expectedDate: e.target.value })}
                      className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full h-12 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-bold text-[14px] shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 cursor-pointer disabled:opacity-75"
                >
                  <span>{isSubmitting ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu tư vấn'}</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                {/* Success feedback */}
                {isSubmitted && (
                  <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#d3e4fe] text-[#002552] flex items-center gap-2.5 animate-in fade-in">
                    <span className="material-symbols-outlined text-[#16a34a] text-[22px]">check_circle</span>
                    <span className="text-[13px] font-medium">
                      Đã ghi nhận thông tin liên hệ. Chuyên viên tư vấn VISA5S sẽ trao đổi với bạn về phạm vi hỗ trợ và chi phí liên quan.
                    </span>
                  </div>
                )}

                {/* Mandatory form notice + working Privacy Policy link */}
                <div className="p-3 rounded-lg bg-[#f8f9ff] border border-[#e2e8f0] text-[12px] text-[#434750] leading-relaxed">
                  <p>{LEGAL_DISCLAIMER.formNotice}</p>
                  <p className="mt-1.5">
                    Xem chi tiết{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-[#0060aa] font-semibold underline hover:text-[#002552] cursor-pointer"
                    >
                      Chính sách bảo mật
                    </button>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
