import React from 'react';
import { TRANSPARENCY_PILLARS } from '../data/visaData';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9ff] py-16 lg:py-24 border-t border-[#e2e8f0]" id="minh-bach">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            MINH BẠCH DỊCH VỤ & CHI PHÍ
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Nguyên Tắc Hoạt Động & Phân Tách Chi Phí
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            VISA5S công khai rõ ràng tư cách doanh nghiệp tư nhân độc lập, phạm vi hỗ trợ và từng nhóm chi phí để khách hàng chủ động cân nhắc lựa chọn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSPARENCY_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e2e8f0] flex flex-col gap-4 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
                  {item.subtitle}
                </span>
                <h3 className="text-[17px] font-bold text-[#002552] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#434750] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear 3-Group Cost Breakdown Box */}
        <div className="bg-white rounded-2xl border border-[#cbd5e1] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col gap-2 pb-5 border-b border-[#e2e8f0]">
            <h3 className="text-[20px] font-bold text-[#002552]">
              Phân Biệt 3 Nhóm Chi Phí Khi Chuẩn Bị Hồ Sơ
            </h3>
            <p className="text-[13.5px] text-[#64748b]">
              Khách hàng có thể tự thực hiện các bước tìm hiểu và nộp trực tiếp tại cơ quan có thẩm quyền (chỉ đóng lệ phí chính thức theo quy định) hoặc lựa chọn dịch vụ tư vấn có tính phí của VISA5S.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <span className="text-[12px] font-bold text-[#ea580c] uppercase">Khoản phí 1</span>
              <h4 className="text-[15px] font-bold text-[#002552] mt-1">Phí dịch vụ tư vấn của VISA5S</h4>
              <p className="text-[13px] text-[#434750] mt-1.5 leading-relaxed">
                Là khoản phí thương mại độc lập cho việc tư vấn thông tin, đánh giá sơ bộ và hướng dẫn rà soát giấy tờ. Mức phí được báo giá cụ thể theo nhu cầu trước khi khách hàng đồng ý sử dụng.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <span className="text-[12px] font-bold text-[#0060aa] uppercase">Khoản phí 2</span>
              <h4 className="text-[15px] font-bold text-[#002552] mt-1">Lệ phí do cơ quan có thẩm quyền quy định</h4>
              <p className="text-[13px] text-[#434750] mt-1.5 leading-relaxed">
                Là lệ phí xét duyệt thị thực hoặc phí dịch vụ của trung tâm tiếp nhận chính thức do quốc gia tiếp nhận quy định. Khách hàng xem biểu phí cập nhật trực tiếp tại website chính thức của cơ quan có thẩm quyền.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <span className="text-[12px] font-bold text-[#64748b] uppercase">Khoản phí 3 (nếu có)</span>
              <h4 className="text-[15px] font-bold text-[#002552] mt-1">Phí dịch thuật, công chứng & bên thứ ba</h4>
              <p className="text-[13px] text-[#434750] mt-1.5 leading-relaxed">
                Bao gồm chi phí dịch thuật, công chứng, bảo hiểm du lịch quốc tế hoặc chuyển phát do các đơn vị cung cấp bên thứ ba thu theo thực tế phát sinh (nếu hồ sơ yêu cầu).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
