import React, { useState } from 'react';
import { COUNTRIES, LEGAL_DISCLAIMER } from '../data/visaData';

interface FinalCtaSectionProps {
  onOpenPrivacy: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenPrivacy }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [purpose, setPurpose] = useState('du-lich');
  const [expectedDate, setExpectedDate] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setCountry('');
      setPurpose('du-lich');
      setExpectedDate('');
    }, 1000);
  };

  return (
    <section className="w-full bg-[#002552] text-white py-16 lg:py-24 relative overflow-hidden" id="lien-he">
      {/* Ambient glowing graphics */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#0060aa]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ea580c]/15 blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#002552]">
              <span className="material-symbols-outlined text-[18px] text-[#0060aa]">support_agent</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002552]">
                DỊCH VỤ TƯ VẤN ĐỘC LẬP
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                Trao đổi nhu cầu chuẩn bị hồ sơ của bạn cùng VISA5S
              </h2>
              <p className="text-[16px] text-white/85 max-w-xl leading-relaxed">
                Gửi thông tin cơ bản để chuyên viên VISA5S liên hệ tư vấn về phạm vi hỗ trợ, giải thích quy trình chính thức và thông báo chi phí dịch vụ tư vấn minh bạch.
              </p>
            </div>

            {/* Legal Notice Card near Form */}
            <div className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm space-y-2 text-[13px] text-white/90 leading-relaxed">
              <p className="font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#ea580c]">gavel</span>
                {LEGAL_DISCLAIMER.title}
              </p>
              {LEGAL_DISCLAIMER.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href="tel:0911909686"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[14px] backdrop-blur-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-[#ea580c]">phone_in_talk</span>
                <span>Hotline: 0911.909.686</span>
              </a>
              <a
                href="mailto:info@visa5s.com.vn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[14px] backdrop-blur-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-[#61a9fd]">mail</span>
                <span>info@visa5s.com.vn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Form Card */}
          <div className="lg:col-span-5 bg-white text-[#0b1c30] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] font-bold text-[#002552]">Nhận Tư Vấn Ban Đầu</h3>
              <p className="text-[13px] text-[#64748b]">
                Điền thông tin để chuyên viên VISA5S liên hệ trao đổi phạm vi tư vấn và chi phí liên quan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-[12.5px] font-semibold text-[#1e293b] block mb-1" htmlFor="cta_name">
                  Họ và tên <span className="text-[#ba1a1a]">*</span>
                </label>
                <input
                  id="cta_name"
                  type="text"
                  required
                  placeholder="Họ và tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-3.5 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                />
              </div>

              <div>
                <label className="text-[12.5px] font-semibold text-[#1e293b] block mb-1" htmlFor="cta_phone">
                  Số điện thoại hoặc Zalo <span className="text-[#ba1a1a]">*</span>
                </label>
                <input
                  id="cta_phone"
                  type="tel"
                  required
                  placeholder="Số điện thoại hoặc Zalo"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                />
              </div>

              <div>
                <label className="text-[12.5px] font-semibold text-[#1e293b] block mb-1" htmlFor="cta_country">
                  Quốc gia dự định đến <span className="text-[#ba1a1a]">*</span>
                </label>
                <select
                  id="cta_country"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-11 px-3.5 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                >
                  <option value="" disabled>Chọn quốc gia dự định đến</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                  <option value="khac">Quốc gia khác...</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[12.5px] font-semibold text-[#1e293b] block mb-1" htmlFor="cta_purpose">
                    Mục đích chuyến đi
                  </label>
                  <select
                    id="cta_purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full h-11 px-3 bg-[#f8f9ff] text-[#1e293b] text-[13.5px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                  >
                    <option value="du-lich">Du lịch</option>
                    <option value="cong-tac">Công tác / TM</option>
                    <option value="tham-than">Thăm thân nhân</option>
                    <option value="dinh-cu-du-hoc">Du học / Khác</option>
                  </select>
                </div>

                <div>
                  <label className="text-[12.5px] font-semibold text-[#1e293b] block mb-1" htmlFor="cta_expected">
                    Thời gian dự kiến
                  </label>
                  <input
                    id="cta_expected"
                    type="text"
                    placeholder="VD: Tháng 07/2025"
                    value={expectedDate}
                    onChange={(e) => setExpectedDate(e.target.value)}
                    className="w-full h-11 px-3.5 bg-[#f8f9ff] text-[#1e293b] text-[13.5px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-bold text-[14px] shadow-md transition-all active:scale-95 cursor-pointer mt-1"
              >
                <span>Gửi yêu cầu tư vấn</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#d3e4fe] text-[#002552] flex items-center gap-2 animate-in fade-in">
                  <span className="material-symbols-outlined text-[#16a34a] text-[20px]">check_circle</span>
                  <span className="text-[13px] font-medium">
                    Đã tiếp nhận thông tin! Chuyên viên VISA5S sẽ liên hệ tư vấn cho bạn.
                  </span>
                </div>
              )}

              <div className="p-3 rounded-lg bg-[#f8f9ff] border border-[#e2e8f0] text-[12px] text-[#434750] leading-relaxed">
                <p>{LEGAL_DISCLAIMER.formNotice}</p>
                <p className="mt-1">
                  Xem{' '}
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

            <a
              href="https://zalo.me/0911909686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0060aa] text-[13px] font-bold transition-colors border border-[#d3e4fe]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Trao đổi qua Zalo: 0911 909 686</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
