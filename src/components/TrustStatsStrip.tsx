import React from 'react';

export const TrustStatsStrip: React.FC = () => {
  const pillars = [
    {
      icon: 'corporate_fare',
      label: 'Đơn vị tư nhân độc lập',
      desc: 'Không phải cơ quan Chính phủ hay Đại sứ quán',
    },
    {
      icon: 'receipt_long',
      label: 'Minh bạch mọi khoản phí',
      desc: 'Tách bạch phí tư vấn & lệ phí chính thức',
    },
    {
      icon: 'fact_check',
      label: 'Rà soát thông tin nhất quán',
      desc: 'Hướng dẫn chuẩn bị theo mục đích chuyến đi',
    },
    {
      icon: 'public',
      label: 'Đối chiếu nguồn chính thức',
      desc: 'Cung cấp link cổng thông tin từng quốc gia',
    },
  ];

  return (
    <section className="w-full bg-white py-6 sm:py-8 border-y border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]"
            >
              <div className="w-11 h-11 rounded-lg bg-[#002552] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#002552] leading-snug">
                  {item.label}
                </span>
                <span className="text-[12px] text-[#64748b] leading-snug mt-0.5">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
