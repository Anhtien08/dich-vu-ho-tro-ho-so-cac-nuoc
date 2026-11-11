import React from 'react';
import { LEGAL_DISCLAIMER, OFFICE_LOCATIONS } from '../data/visaData';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegalDoc: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalDoc }) => {
  return (
    <footer className="w-full bg-white border-t border-[#e2e8f0] pb-24 sm:pb-12">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#e2e8f0]">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Image_6_5c5c9cf5.png"
                alt="Logo doanh nghiệp tư nhân VISA5S"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-center text-[22px] font-extrabold tracking-tight">
                  <span className="text-[#192a72]">VISA</span>
                  <span className="text-[#E51923]">5S</span>
                  <span className="text-[10px] text-[#192a72] align-top ml-0.5 font-bold">®</span>
                </div>
                <span className="text-[11px] italic text-[#192a72] font-semibold tracking-wide mt-0.5">
                  “Hãy Đến Nơi Nào Bạn Muốn”
                </span>
              </div>
            </div>

            <p className="text-[14px] font-bold text-[#1e293b]">
              Công ty TNHH Tư vấn Đầu tư Asia Blue Sky
            </p>
            <p className="text-[13px] text-[#64748b] leading-relaxed">
              Doanh nghiệp tư nhân độc lập, chuyên cung cấp dịch vụ tư vấn thông tin, đánh giá sơ bộ và hướng dẫn chuẩn bị hồ sơ xuất nhập cảnh quốc tế.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#eff4ff] text-[#002552] text-[11px] font-bold border border-[#d3e4fe]">
                DOANH NGHIỆP TƯ NHÂN ĐỘC LẬP
              </span>
            </div>
          </div>

          {/* Column 2: Offices */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0060aa] text-[20px]">apartment</span>
              Địa điểm văn phòng
            </h4>
            <div className="flex flex-col gap-2.5">
              {OFFICE_LOCATIONS.map((loc, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px]">
                  <span className="material-symbols-outlined text-[#0060aa] text-[18px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-[#1e293b]">
                      {loc.title} <span className="text-[11px] font-semibold text-[#0060aa]">({loc.city})</span>
                    </p>
                    <p className="text-[#64748b]">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0060aa] text-[20px]">contact_phone</span>
              Thông tin liên hệ
            </h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <div className="flex items-center gap-2 text-[#1e293b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">call</span>
                <a href="tel:0911909686" className="font-bold hover:text-[#0060aa]">
                  0911.909.686
                </a>
                <span className="text-[#64748b]">/</span>
                <a href="tel:0967686101" className="font-bold hover:text-[#0060aa]">
                  0967.686.101
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#1e293b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">mail</span>
                <a href="mailto:info@visa5s.com.vn" className="hover:text-[#0060aa] transition-colors">
                  info@visa5s.com.vn
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#64748b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">schedule</span>
                <span>Thứ 2 - Thứ 7: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-[#64748b]">
                <span className="material-symbols-outlined text-[#16a34a] text-[18px]">chat</span>
                <a
                  href="https://zalo.me/0911909686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0060aa] transition-colors"
                >
                  Hỗ trợ tư vấn qua Zalo
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Useful Links (100% functional) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552]">Thông tin & Chính sách</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-[#64748b] items-start">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalDoc('privacy')}
                  className="hover:text-[#0060aa] transition-colors cursor-pointer text-left"
                >
                  Chính sách bảo mật
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalDoc('terms')}
                  className="hover:text-[#0060aa] transition-colors cursor-pointer text-left"
                >
                  Điều khoản dịch vụ
                </button>
              </li>
              <li>
                <a href="#minh-bach" className="hover:text-[#0060aa] transition-colors">
                  Minh bạch chi phí
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalDoc('feedback')}
                  className="hover:text-[#0060aa] transition-colors cursor-pointer text-left"
                >
                  Tiếp nhận phản hồi
                </button>
              </li>
              <li>
                <a href="#quy-trinh" className="hover:text-[#0060aa] transition-colors">
                  Quy trình tư vấn 4 bước
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Full Legal Disclaimer Block */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#F5F7FA] border border-[#cbd5e1] mt-8 text-[13px] text-[#434750] leading-relaxed space-y-2">
          <h4 className="text-[14px] font-bold text-[#002552] uppercase tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0060aa] text-[18px]">gavel</span>
            <span>{LEGAL_DISCLAIMER.title}</span>
          </h4>
          {LEGAL_DISCLAIMER.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#64748b] text-[13px]">
          <p>© 2026 VISA5S • Công ty TNHH Tư vấn Đầu tư Asia Blue Sky (Doanh nghiệp tư nhân độc lập).</p>
          <div className="flex items-center gap-2 text-[#0060aa] font-medium">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Dịch vụ tư vấn thương mại độc lập</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
