import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            PHẠM VI TƯ VẤN ĐỘC LẬP
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Giá Trị Hỗ Trợ Thực Tế Tại VISA5S
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            Đồng hành cung cấp thông tin, hướng dẫn chuẩn bị giấy tờ rõ ràng và tôn trọng hoàn toàn thẩm quyền của cơ quan tiếp nhận chính thức.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">psychology</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Đánh Giá Sơ Bộ & Tư Vấn Thông Tin
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Trao đổi theo từng hoàn cảnh công việc, tài chính và mục đích chuyến đi để giúp khách hàng nắm rõ các yêu cầu tham khảo từ quốc gia dự định đến.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">fact_check</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Rà Soát Tính Đầy Đủ & Nhất Quán
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Hỗ trợ kiểm tra đối chiếu thông tin giữa các chứng từ nhân thân, công việc, lịch trình và hướng dẫn chuẩn bị giấy tờ dịch thuật khi có yêu cầu.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">price_check</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Tách Bạch Phí Tư Vấn & Lệ Phí
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Thông báo rõ ràng phạm vi công việc, phí dịch vụ tư vấn độc lập của VISA5S và các khoản lệ phí chính thức khách hàng thanh toán cho cơ quan có thẩm quyền.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">public</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Hướng Dẫn Theo Nguồn Chính Thức
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Cung cấp thông tin tham khảo về địa điểm tiếp nhận, phương thức đặt lịch và liên kết website chính thức để khách hàng chủ động thực hiện đúng quy định.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
