export interface OfficialSource {
  label: string;
  url: string;
}

export interface CountryVisa {
  id: string;
  name: string;
  continent: 'asia' | 'europe' | 'america' | 'australia';
  continentLabel: string;
  badgeInfo: string;
  heroImage: string;
  shortDesc: string;
  tags: string[];
  purposes: string[];
  visaTypes: string[];
  processingTimeRef: string;
  validityRef: string;
  stayDurationRef: string;
  preparationLevel: 'Cơ bản' | 'Trung bình' | 'Cần chuẩn bị kỹ' | 'Có phỏng vấn';
  requirements: {
    personal: string[];
    employment: string[];
    financial: string[];
    trip: string[];
  };
  preparationNotes: string[];
  feeTransparency: {
    consultingFee: string;
    officialFee: string;
    thirdPartyFee: string;
  };
  officialSources: OfficialSource[];
}

export const LEGAL_DISCLAIMER = {
  title: 'THÔNG TIN PHÁP LÝ',
  paragraphs: [
    'VISA5S là doanh nghiệp tư nhân cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ xuất nhập cảnh quốc tế.',
    'VISA5S không phải cơ quan Chính phủ, Đại sứ quán hoặc Lãnh sự quán; không trực tiếp cấp phép nhập cảnh và không có thẩm quyền quyết định kết quả xét duyệt hồ sơ.',
    'Quyết định chấp thuận hoặc từ chối hồ sơ nhập cảnh thuộc cơ quan có thẩm quyền của quốc gia tiếp nhận. Khách hàng cần kiểm tra các yêu cầu, lệ phí và quy trình mới nhất tại website chính thức của cơ quan có thẩm quyền.',
    'Phí dịch vụ tư vấn của VISA5S là khoản phí độc lập với lệ phí do cơ quan nhà nước hoặc đơn vị tiếp nhận chính thức quy định.',
  ],
  formNotice:
    'Thông tin được sử dụng để VISA5S liên hệ tư vấn về dịch vụ. Việc gửi thông tin không đồng nghĩa với việc đã nộp hồ sơ xin phép nhập cảnh cho cơ quan có thẩm quyền.',
};

export const COUNTRIES: CountryVisa[] = [
  {
    id: 'han-quoc',
    name: 'Hàn Quốc',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeInfo: 'Tham khảo: Du lịch, Công tác, Thăm thân',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzl8odmLqTLx7i8lwdElucttF8Ubd3nu73YoBePHxQBv8T79k4cfu4oMymZa9plAXGJo8pVs0piGqwZO4gcUzbR8HWf80ePySlfTzHuhHux04lp2NBnkihZSdfSDaIuqDxckGYGyTzSezqbWguXjCx5iZ2itwSONihMzwit9U8qPGiBH9H49d9qDfI4Xr-b4Uv7IlUqd43PTo2Y0kflQlW8EtAsAlto4hMI4dGWqwRaqlQg7HXflB',
    shortDesc:
      'Tư vấn thông tin chuẩn bị hồ sơ theo diện ngắn hạn (du lịch, công tác, thăm thân) dựa trên quy định tham khảo của Hàn Quốc.',
    tags: ['Tư vấn giấy tờ', 'Thông tin tham khảo'],
    purposes: ['Du lịch ngắn hạn', 'Công tác / Thương mại', 'Thăm thân nhân'],
    visaTypes: [
      'C-3-9 Du lịch ngắn hạn (tham khảo)',
      'C-3-4 Thương mại ngắn hạn (tham khảo)',
      'C-3-1 Thăm thân (tham khảo)',
      'Diện nhập cảnh nhiều lần theo điều kiện quy định',
    ],
    processingTimeRef: 'Tham khảo theo lịch tiếp nhận của cơ quan lãnh sự / KVAC',
    validityRef: 'Theo quyết định của cơ quan có thẩm quyền Hàn Quốc',
    stayDurationRef: 'Theo quyết định của cơ quan lãnh sự và hải quan nhập cảnh',
    preparationLevel: 'Trung bình',
    requirements: {
      personal: [
        'Hộ chiếu bản gốc còn hạn theo quy định hiện hành',
        'Giấy tờ tùy thân (CCCD) và thông tin nhân thân',
        'Ảnh thẻ đúng kích thước và quy chuẩn nền trắng',
        'Giấy tờ chứng minh quan hệ gia đình (nếu đi cùng người thân)',
      ],
      employment: [
        'Hợp đồng lao động hoặc quyết định bổ nhiệm',
        'Bảng lương hoặc sao kê tài khoản nhận lương gần nhất',
        'Đơn xin nghỉ phép có xác nhận của đơn vị công tác',
        'Giấy phép đăng ký kinh doanh & chứng từ thuế (nếu là chủ doanh nghiệp)',
      ],
      financial: [
        'Giấy tờ chứng minh số dư tiết kiệm hoặc sao kê tài khoản ngân hàng',
        'Giấy tờ chứng minh tài sản hợp pháp khác (nếu thuộc diện cần bổ sung)',
      ],
      trip: [
        'Lịch trình chuyến đi dự kiến theo từng ngày',
        'Thông tin đặt vé máy bay và lưu trú dự kiến phục vụ đối chiếu',
      ],
    },
    preparationNotes: [
      'Kiểm tra khu vực tiếp nhận hồ sơ theo nơi cư trú/hộ khẩu trước khi chuẩn bị giấy tờ.',
      'Thông tin trên tờ khai, công việc và lịch trình cần đồng nhất, trung thực.',
      'Khách hàng có thể tự tra cứu điều kiện miễn chứng minh tài chính (nếu thuộc đối tượng áp dụng) và tự đặt lịch nộp trực tiếp tại cổng chính thức.',
    ],
    feeTransparency: {
      consultingFee: 'Báo giá minh bạch theo phạm vi tư vấn, đánh giá và hướng dẫn rà soát hồ sơ của VISA5S.',
      officialFee: 'Lệ phí xét duyệt hồ sơ và phí trung tâm tiếp nhận (nếu có) thanh toán trực tiếp theo biểu phí chính thức.',
      thirdPartyFee: 'Phí dịch thuật, công chứng hoặc chụp ảnh do đơn vị cung cấp bên thứ ba thu theo thực tế (nếu khách hàng cần).',
    },
    officialSources: [
      { label: 'Cổng thông tin Nhập cảnh Hàn Quốc (Korea Visa Portal)', url: 'https://www.visa.go.kr/' },
    ],
  },
  {
    id: 'nhat-ban',
    name: 'Nhật Bản',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeInfo: 'Tham khảo: Du lịch, Thương mại, Thăm thân',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqZ6YwlbasMm7-b1gUZOZDsdysQI1ZvoPh7nyzoYIanux9wiCPeOChGFd_Io7X67cbBoMhr9Ko3bc-VFp36rfdm0dfOtomYS40lrd9tcnT9HSi2-1R3IyICFyIo5dVdn4ATSzLSQNtdni0GcGx8mOJBehlgbzPdta5N6CNrAYqgJUjGlZIGtJjEkNpPRtZy0RhiHVHwbsyEtnmB5oqT5DLUuROWoPmtCt1ktpSpUxnlAFgZLio3vSk',
    shortDesc:
      'Hướng dẫn tìm hiểu danh mục giấy tờ, cách lập lịch trình và chuẩn bị thông tin hồ sơ nhập cảnh Nhật Bản theo mục đích chuyến đi.',
    tags: ['Hướng dẫn hồ sơ', 'Rà soát thông tin'],
    purposes: ['Du lịch tự túc', 'Công tác ngắn hạn', 'Thăm người thân'],
    visaTypes: [
      'Du lịch ngắn hạn một lần (tham khảo)',
      'Thương mại ngắn hạn (tham khảo)',
      'Thăm người thân (tham khảo)',
      'Nhập cảnh nhiều lần theo điều kiện của cơ quan lãnh sự',
    ],
    processingTimeRef: 'Phụ thuộc lịch xét duyệt của Đại sứ quán / Tổng Lãnh sự quán Nhật Bản',
    validityRef: 'Do cơ quan lãnh sự Nhật Bản quyết định theo từng hồ sơ',
    stayDurationRef: 'Do cơ quan lãnh sự và cơ quan nhập cảnh Nhật Bản quyết định',
    preparationLevel: 'Trung bình',
    requirements: {
      personal: [
        'Hộ chiếu bản gốc còn thời hạn phù hợp',
        'Tờ khai theo mẫu hiện hành và ảnh thẻ chuẩn kích thước',
        'Giấy tờ tùy thân, thông tin cư trú theo yêu cầu địa bàn nộp',
      ],
      employment: [
        'Hợp đồng lao động hoặc giấy xác nhận công tác',
        'Sao kê tài khoản nhận lương trong các tháng gần nhất',
        'Giấy phép đăng ký kinh doanh (đối với chủ doanh nghiệp)',
      ],
      financial: [
        'Giấy xác nhận số dư hoặc sao kê tài khoản ngân hàng thể hiện khả năng chi trả',
        'Chứng từ thu nhập hoặc tài sản bổ sung (nếu cần giải trình)',
      ],
      trip: [
        'Lịch trình lưu trú chi tiết theo mẫu tham khảo',
        'Xác nhận đặt vé máy bay và chỗ ở dự kiến',
      ],
    },
    preparationNotes: [
      'Yêu cầu giấy tờ có thể khác nhau tùy theo mục đích chuyến đi và địa bàn tiếp nhận (Hà Nội / TP.HCM / Đà Nẵng).',
      'Cần đối chiếu kỹ lịch trình chuyến đi với thời gian nghỉ phép và khả năng tài chính.',
      'Khách hàng cần kiểm tra thông tin cập nhật mới nhất về đơn vị tiếp nhận được chỉ định trên website chính thức của Đại sứ quán Nhật Bản.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin và rà soát hồ sơ độc lập của VISA5S được thông báo rõ trước khi thực hiện.',
      officialFee: 'Lệ phí xét duyệt hồ sơ quy định bởi cơ quan đại diện ngoại giao Nhật Bản.',
      thirdPartyFee: 'Chi phí dịch thuật, công chứng hoặc phí tiếp nhận của đơn vị được chỉ định (nếu có).',
    },
    officialSources: [
      { label: 'Bộ Ngoại giao Nhật Bản (MOFA)', url: 'https://www.mofa.go.jp/j_info/visit/visa/index.html' },
      { label: 'Đại sứ quán Nhật Bản tại Việt Nam', url: 'https://www.vn.emb-japan.go.jp/' },
    ],
  },
  {
    id: 'trung-quoc',
    name: 'Trung Quốc',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeInfo: 'Tham khảo: Du lịch (L), Thương mại (M)',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-uyDIcJzYbzvn01iLt-C6ZMJyk3eQCzxXJKoCpdDkbozcUolWZNC1aTHcyPfxGYOcXpyofxJvE3kAaWSDs-TOb1V3NwngTdKXlndUOBcU5Z0AXw6vQL9x7wtO_B8eHkMlkAVq83LzSk3TWD4vIxlidZ9SILNfiFggYp0vPkjAro7uZqRVbrVD91WhL5_iCaxLo0wvSCjy4ingOYyYB6KzBwPkC0Vd-ZKFrF3RGxvSG-7jcV4XaH4g',
    shortDesc:
      'Tư vấn chuẩn bị thông tin tờ khai và các nhóm giấy tờ cần lưu ý cho chuyến đi du lịch, hội chợ, thương mại hoặc thăm thân tại Trung Quốc.',
    tags: ['Rà soát tờ khai', 'Chuẩn bị giấy tờ'],
    purposes: ['Du lịch (L)', 'Thương mại / Hội chợ (M)', 'Thăm thân (Q1/Q2)'],
    visaTypes: [
      'Diện Du lịch L (tham khảo)',
      'Diện Thương mại M (tham khảo)',
      'Diện Thăm thân Q1 / Q2 (tham khảo)',
    ],
    processingTimeRef: 'Theo thời gian xử lý công bố của Trung tâm Tiếp nhận Hồ sơ / Lãnh sự',
    validityRef: 'Tùy diện hồ sơ và quyết định của cơ quan lãnh sự',
    stayDurationRef: 'Theo thời hạn ghi trên giấy phép nhập cảnh được cấp (nếu được chấp thuận)',
    preparationLevel: 'Cơ bản',
    requirements: {
      personal: [
        'Hộ chiếu bản gốc còn hạn và còn trang trống theo quy định',
        'Ảnh chân dung đúng chuẩn kích thước và nền trắng',
        'Tờ khai thông tin trực tuyến theo hướng dẫn hiện hành',
      ],
      employment: [
        'Quyết định cử đi công tác hoặc giấy xác nhận công việc (đối với diện thương mại)',
        'Thư mời từ đối tác hoặc người thân tại Trung Quốc (nếu thuộc diện cần thư mời)',
      ],
      financial: [
        'Xác nhận số dư hoặc sao kê tài khoản ngân hàng (tùy trường hợp yêu cầu)',
      ],
      trip: [
        'Thông tin lịch trình di chuyển, đặt vé khứ hồi và khách sạn dự kiến',
      ],
    },
    preparationNotes: [
      'Thông tin trên tờ khai trực tuyến cần trùng khớp hoàn toàn với hộ chiếu và thư mời (nếu có).',
      'Quy định về lấy dấu vân tay hoặc miễn lấy dấu vân tay phụ thuộc vào thông báo từng thời điểm của cơ quan lãnh sự.',
      'Khách hàng tự kiểm tra biểu phí và lịch hẹn trực tiếp tại cổng thông tin của trung tâm tiếp nhận chính thức.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin và rà soát giấy tờ của VISA5S được thỏa thuận trước.',
      officialFee: 'Lệ phí xét duyệt hồ sơ và phí trung tâm tiếp nhận chính thức theo quy định hiện hành.',
      thirdPartyFee: 'Phí chụp ảnh, dịch thuật công chứng hoặc phát sinh bên thứ ba (nếu có).',
    },
    officialSources: [
      { label: 'Cổng Trung tâm Tiếp nhận Hồ sơ Trung Quốc (CVASC)', url: 'https://www.visaforchina.cn/' },
    ],
  },
  {
    id: 'uc',
    name: 'Úc (Australia)',
    continent: 'australia',
    continentLabel: 'CHÂU ÚC',
    badgeInfo: 'Tham khảo: Visitor (Subclass 600)',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDL_8D6m12yiIE45p_6C33XtOg0y5Yrz8YBq7lV-i7izS_PgEcakLERkz8tYxVc672PDbEZ-dhJj3bCjBAglF6iBVRje5jCjZW53UXsZdoUTCwhehSd53wLKX4ncqC36NeYSyXD6pFTSaTi0vRtADSQ2kHRO7fJ7FXtTYxegDcXJyyjvR2ojmpnrTLZkiXjbxijWkWiR2udaLsMk5DPl_HFuZKcMyLjedN2eGuHbTYhfa4O-z1TfXM',
    shortDesc:
      'Tư vấn thông tin tham khảo về hồ sơ Visitor (Subclass 600) và hướng dẫn sắp xếp chứng từ nhân thân, công việc, tài chính logic.',
    tags: ['Đánh giá sơ bộ', 'Nguồn chính thức'],
    purposes: ['Du lịch (Tourist)', 'Công tác (Business Visitor)', 'Thăm người thân'],
    visaTypes: [
      'Visitor (Subclass 600) - Tourist stream (tham khảo)',
      'Visitor (Subclass 600) - Business Visitor stream (tham khảo)',
      'Visitor (Subclass 600) - Sponsored Family stream (tham khảo)',
    ],
    processingTimeRef: 'Thay đổi theo từng thời điểm, xem công cụ ước tính của Bộ Nội vụ Úc',
    validityRef: 'Do Bộ Nội vụ Úc (Department of Home Affairs) quyết định',
    stayDurationRef: 'Theo điều kiện cấp phép của cơ quan có thẩm quyền Úc',
    preparationLevel: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: [
        'Bản sao/scan hộ chiếu, giấy khai sinh, CCCD và giấy tờ hộ tịch liên quan',
        'Thông tin chi tiết về thành viên gia đình theo yêu cầu khai báo',
      ],
      employment: [
        'Hợp đồng lao động, bảng lương, xác nhận nghỉ phép hoặc hồ sơ doanh nghiệp',
        'Giấy tờ hưu trí (nếu đã nghỉ hưu)',
      ],
      financial: [
        'Sao kê tài khoản ngân hàng, xác nhận số dư tiết kiệm',
        'Chứng từ chứng minh nguồn thu nhập và tài sản hợp pháp',
      ],
      trip: [
        'Kế hoạch chuyến đi chi tiết và thư mời (nếu đi công tác hoặc thăm thân)',
      ],
    },
    preparationNotes: [
      'Mọi tài liệu tiếng Việt thường cần kèm bản dịch tiếng Anh theo quy định.',
      'Thông tin về công việc, thu nhập và kế hoạch chuyến đi cần minh bạch, có chứng từ đối chiếu.',
      'Khách hàng có thể tự tạo tài khoản và tìm hiểu biểu phí mới nhất trực tiếp trên website của Bộ Nội vụ Úc.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn, hướng dẫn sắp xếp và rà soát thông tin hồ sơ của VISA5S.',
      officialFee: 'Lệ phí nộp đơn (Visa Application Charge) và phí sinh trắc học theo quy định của Chính phủ Úc.',
      thirdPartyFee: 'Phí dịch thuật công chứng tiếng Anh, bảo hiểm du lịch (nếu có).',
    },
    officialSources: [
      { label: 'Bộ Nội vụ Úc (Department of Home Affairs)', url: 'https://immi.homeaffairs.gov.au/' },
    ],
  },
  {
    id: 'my',
    name: 'Mỹ (Hoa Kỳ)',
    continent: 'america',
    continentLabel: 'CHÂU MỸ',
    badgeInfo: 'Tham khảo: Diện không định cư B1/B2',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4iRmFDApOjRCBS9-FR1agtVjxDpx5TtNbD8jfnrUJKtWaV1onfAJf_T8BdRz8Dq3Bc3Fl51wVph5phhHCkFfFTgeajTCHcSIgaml0jdCQzVUv2uBDOB5m1_lUqZ0HshPXiz3GlIs9XY2Bw4W7X8YSyEjIXMd62bc2OFnXIzfrwB-F880M_KlD5hgH9C0aBQFyvrYj04VLh2Y1tY-TtSzbmr7ykTQbO7rUIrXHrv5nNbUV-uDscZMX',
    shortDesc:
      'Tư vấn thông tin chuẩn bị khai báo hồ sơ B1/B2 tham khảo, rà soát tính nhất quán thông tin cá nhân và giải thích quy trình phỏng vấn chính thức.',
    tags: ['Rà soát thông tin', 'Giải thích quy trình'],
    purposes: ['Công tác / Hội nghị (B1)', 'Du lịch / Thăm thân (B2)', 'Kết hợp B1/B2'],
    visaTypes: [
      'Diện không định cư B1 (Công tác - tham khảo)',
      'Diện không định cư B2 (Du lịch, thăm thân - tham khảo)',
      'Gia hạn qua đường bưu điện (nếu đủ điều kiện theo quy định)',
    ],
    processingTimeRef: 'Phụ thuộc lịch hẹn phỏng vấn và quy trình xử lý của Lãnh sự quán Hoa Kỳ',
    validityRef: 'Do viên chức lãnh sự Hoa Kỳ quyết định',
    stayDurationRef: 'Do cơ quan Hải quan và Bảo vệ Biên giới Hoa Kỳ quyết định khi nhập cảnh',
    preparationLevel: 'Có phỏng vấn',
    requirements: {
      personal: [
        'Hộ chiếu còn hiệu lực theo quy định',
        'Thông tin để hoàn thành tờ khai DS-160 chính xác, trung thực',
        'Ảnh thẻ theo đúng quy chuẩn kỹ thuật của Bộ Ngoại giao Hoa Kỳ',
      ],
      employment: [
        'Thông tin và chứng từ chứng minh công việc, chức vụ, thu nhập hiện tại',
      ],
      financial: [
        'Thông tin về nguồn tài chính chi trả cho chuyến đi và sự ràng buộc tại Việt Nam',
      ],
      trip: [
        'Mục đích chuyến đi, thời gian dự kiến và thông tin liên hệ tại Hoa Kỳ (nếu có)',
      ],
    },
    preparationNotes: [
      'Độ chính xác và tính trung thực của thông tin trên tờ khai DS-160 là yếu tố rất quan trọng.',
      'Lịch hẹn phỏng vấn và thời gian chờ phụ thuộc hoàn toàn vào hệ thống chính thức của cơ quan lãnh sự Hoa Kỳ.',
      'VISA5S chỉ hỗ trợ tư vấn thông tin và rà soát tính nhất quán; không can thiệp vào lịch hẹn hay kết quả phỏng vấn.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin và rà soát hồ sơ độc lập của VISA5S.',
      officialFee: 'Lệ phí xét đơn không hoàn lại (MRV fee) theo biểu phí công bố trên cổng thông tin chính thức của Hoa Kỳ.',
      thirdPartyFee: 'Phí chụp ảnh chuẩn quy định hoặc chuyển phát giấy tờ (nếu có).',
    },
    officialSources: [
      { label: 'Bộ Ngoại giao Hoa Kỳ (U.S. Visas)', url: 'https://travel.state.gov/content/travel/en/us-visas.html' },
      { label: 'Phái bộ Ngoại giao Hoa Kỳ tại Việt Nam', url: 'https://vn.usembassy.gov/visas/' },
    ],
  },
  {
    id: 'schengen',
    name: 'Châu Âu (Schengen)',
    continent: 'europe',
    continentLabel: 'CHÂU ÂU',
    badgeInfo: 'Tham khảo: Diện ngắn hạn Type C',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhf6CcIAyaGRuRxkVPjdp8a9QnC-DsCcrCuBCEOZKp4t3Nwm7ZUlLWqAqg4D91bcrHClXzFJAJ-wDaSEkFPFXNoVoMzqhJPMJtUj9lnMC9aCtZwr8iBb34clgAGRJIyUvLGjrAevZbun9wwR3tJ0ARF3_YCuU8-NTndCtx7Y_pUDLiS-ZwB9pHRrROtKyvSZzzhS6Z_YPLeUjuxGADgnZCp9w1sS1oOKOtRNSRdGYebP3Txn_m1WEa',
    shortDesc:
      'Hướng dẫn tìm hiểu quy định xác định quốc gia tiếp nhận chính, chuẩn bị lịch trình, bảo hiểm và danh mục chứng từ khối Schengen.',
    tags: ['Lịch trình tham khảo', 'Nguồn chính thức'],
    purposes: ['Du lịch ngắn hạn', 'Công tác / Hội thảo', 'Thăm thân nhân'],
    visaTypes: [
      'Diện ngắn hạn Schengen Type C (tham khảo)',
      'Diện Công tác / Thương mại (tham khảo)',
      'Diện Thăm thân có giấy bảo lãnh (tham khảo)',
    ],
    processingTimeRef: 'Theo quy định xét duyệt của Đại sứ quán / Lãnh sự quán nước thành viên tiếp nhận',
    validityRef: 'Do cơ quan lãnh sự quốc gia thành viên Schengen cấp phép',
    stayDurationRef: 'Theo quy định khối Schengen và thời hạn ghi trên giấy phép nhập cảnh (nếu được cấp)',
    preparationLevel: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: [
        'Hộ chiếu còn hạn theo quy định sau ngày rời khối Schengen',
        'Ảnh thẻ chuẩn sinh trắc học, giấy tờ nhân thân và hộ tịch',
      ],
      employment: [
        'Hợp đồng lao động, sao kê lương, đơn xin nghỉ phép hoặc hồ sơ doanh nghiệp',
        'Thông tin đóng bảo hiểm xã hội (nếu được yêu cầu)',
      ],
      financial: [
        'Sao kê tài khoản ngân hàng, xác nhận số dư và chứng từ tài sản hợp pháp',
      ],
      trip: [
        'Lịch trình di chuyển chi tiết giữa các quốc gia trong khối',
        'Thông tin đặt vé khứ hồi, lưu trú và bảo hiểm du lịch quốc tế đúng hạn mức quy định',
      ],
    },
    preparationNotes: [
      'Cần xác định đúng quốc gia có thẩm quyền tiếp nhận (nơi lưu trú chính hoặc điểm nhập cảnh đầu tiên theo quy tắc Schengen).',
      'Bảo hiểm du lịch quốc tế phải đáp ứng mức chi trả y tế tối thiểu theo quy định của khối.',
      'Khách hàng cần kiểm tra checklist chi tiết trên website Đại sứ quán của quốc gia thành viên dự định nộp.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin, rà soát lịch trình và danh mục hồ sơ của VISA5S.',
      officialFee: 'Lệ phí xét duyệt hồ sơ Schengen và phí dịch vụ trung tâm tiếp nhận chính thức (nếu áp dụng).',
      thirdPartyFee: 'Phí bảo hiểm du lịch quốc tế, dịch thuật công chứng tiếng Anh/ngôn ngữ đích.',
    },
    officialSources: [
      {
        label: 'Ủy ban Châu Âu - Chính sách Nhập cảnh Schengen',
        url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en',
      },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    continent: 'america',
    continentLabel: 'CHÂU MỸ',
    badgeInfo: 'Tham khảo: Visitor / Super Visa',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARjmEQb6PfnIdUFnUdnd0cm2Ajszg7qwbHgXFVmfvBl4Zg2V1yNXOQQCj4FmRWdNEJJTwNOyo9D0lKYChlc4PaSh_mEWkHaYmBIkSCCoQMnjg5ruWMbLDmVL6nFJjYy8n5vHbkdJ41JH5ShQixioYT2Jgjz1_PxImsMIQV_0JC_dwKmXesEkzqniGlHmyc3onhwCBWPIhR-FHWgFYruYhlGhR2BO9E6KyEEWKBnoWqVL--lszMjaUo',
    shortDesc:
      'Tư vấn thông tin chuẩn bị hồ sơ du lịch, công tác hoặc thăm thân tại Canada theo danh mục tham khảo của IRCC.',
    tags: ['Hướng dẫn chứng từ', 'Thông tin IRCC'],
    purposes: ['Du lịch tự túc', 'Công tác ngắn hạn', 'Thăm thân nhân'],
    visaTypes: [
      'Visitor Visa (tham khảo)',
      'Super Visa cho Cha Mẹ / Ông Bà (tham khảo)',
      'Business Visitor (tham khảo)',
    ],
    processingTimeRef: 'Thay đổi liên tục, tra cứu trực tiếp trên công cụ thời gian xử lý của IRCC',
    validityRef: 'Do cơ quan Di trú, Tị nạn và Quốc tịch Canada (IRCC) quyết định',
    stayDurationRef: 'Do cơ quan nhập cảnh Canada quyết định theo từng lần nhập cảnh',
    preparationLevel: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: [
        'Hộ chiếu còn hạn và bản sao các trang có dấu xuất nhập cảnh trước đây',
        'Thông tin gia đình và các biểu mẫu khai báo theo quy định của IRCC',
      ],
      employment: [
        'Chứng từ công việc, thu nhập hoặc hồ sơ đăng ký kinh doanh và nghĩa vụ thuế',
      ],
      financial: [
        'Sao kê tài khoản ngân hàng, chứng từ tiết kiệm và tài sản hợp pháp tại Việt Nam',
      ],
      trip: [
        'Mục đích chuyến đi, lịch trình dự kiến và thư mời (nếu thăm thân hoặc công tác)',
      ],
    },
    preparationNotes: [
      'Hồ sơ cần thể hiện rõ nguồn tài chính minh bạch và các mối liên hệ ràng buộc tại Việt Nam.',
      'Việc cung cấp sinh trắc học (biometrics) được thực hiện theo thư yêu cầu và lịch hẹn tại đơn vị tiếp nhận chính thức.',
      'Khách hàng có thể tự tìm hiểu quy trình và nộp trực tiếp thông qua cổng thông tin Chính phủ Canada.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin và hỗ trợ rà soát hồ sơ độc lập của VISA5S.',
      officialFee: 'Lệ phí xét duyệt và phí sinh trắc học do Chính phủ Canada quy định.',
      thirdPartyFee: 'Phí dịch thuật công chứng sang tiếng Anh/Pháp (nếu cần).',
    },
    officialSources: [
      {
        label: 'Chính phủ Canada (IRCC - Visit Canada)',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
      },
    ],
  },
  {
    id: 'anh-quoc',
    name: 'Anh Quốc (UK)',
    continent: 'europe',
    continentLabel: 'CHÂU ÂU',
    badgeInfo: 'Tham khảo: Standard Visitor',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQY0ImeJejOLiQwNWXpJTTYwZDDoQdF8e8bW6rlMwWzFmYd520PKzqVAELB9DUUMT_zR2mmDRItRjIC3wFHfaxfnUYQUno0DWJgLlkac2QVvRHdtFeu_wJsVVlFD1-S-cAMqFNZy4kqfatVgH6wn11PDLK_cwVAFQ1j_QBHxo6JiK3rY7gat_VFWhoO-zlueijsTgKuCbS4nluZmcLg9voJP80Nvyixk3CcWNTFmQXi9YGEsuzNBuF',
    shortDesc:
      'Tư vấn thông tin chuẩn bị chứng từ tài chính, sao kê thu nhập và giải thích quy trình tham khảo cho diện Standard Visitor Vương quốc Anh.',
    tags: ['Rà soát chứng từ', 'Nguồn GOV.UK'],
    purposes: ['Du lịch', 'Công tác ngắn hạn', 'Thăm gia đình'],
    visaTypes: [
      'Standard Visitor (6 tháng / dài hạn - tham khảo)',
      'Business Visit (tham khảo)',
      'Family Visit (tham khảo)',
    ],
    processingTimeRef: 'Theo thời gian xử lý công bố của Cơ quan Di trú và Nhập cảnh Anh (UKVI)',
    validityRef: 'Do UKVI quyết định dựa trên đơn đăng ký và thẩm định thực tế',
    stayDurationRef: 'Theo quy định của Standard Visitor được cấp (nếu được chấp thuận)',
    preparationLevel: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: [
        'Hộ chiếu còn trang trống và giấy tờ tùy thân hợp lệ',
        'Thông tin khai báo theo biểu mẫu trực tuyến UKVI',
      ],
      employment: [
        'Hợp đồng lao động, xác nhận công tác và sao kê tài khoản nhận lương',
      ],
      financial: [
        'Sao kê tài khoản thể hiện dòng tiền, nguồn thu nhập và tiết kiệm rõ ràng',
      ],
      trip: [
        'Kế hoạch dự kiến tại Anh, thông tin lưu trú và thư mời (nếu có)',
      ],
    },
    preparationNotes: [
      'Cần chú trọng tính khớp nhau giữa thu nhập khai báo và dòng tiền thể hiện trên sao kê ngân hàng.',
      'Toàn bộ tài liệu không phải tiếng Anh cần kèm bản dịch đạt chuẩn theo hướng dẫn của UKVI.',
      'Khách hàng tham khảo mức phí và quy định trực tiếp trên cổng GOV.UK.',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn và rà soát tính đầy đủ thông tin hồ sơ của VISA5S.',
      officialFee: 'Lệ phí xét duyệt hồ sơ do Chính phủ Anh (UKVI) quy định trên GOV.UK.',
      thirdPartyFee: 'Phí dịch thuật công chứng tiếng Anh và các dịch vụ tùy chọn tại trung tâm tiếp nhận (nếu chọn).',
    },
    officialSources: [
      { label: 'Chính phủ Anh (GOV.UK - Standard Visitor)', url: 'https://www.gov.uk/standard-visitor' },
    ],
  },
  {
    id: 'dai-loan',
    name: 'Đài Loan',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeInfo: 'Tham khảo: Du lịch, Công tác, Thăm thân',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBANmPRWk-CRQf-VGBpQn74qFHRYpMdGlY5JJmH3vHXT4hejjCB6Kf7xqgVEYt8ZuLsFNj6jwoUaEYRWzrAkqLar2G0dXgMinUm3VUiRwJWPmRNZRvh9uZVbvPTonvUDqcSzh6cjWaKkm6c8Z1YQxabpImK1NHDnOq6_f5hcZjfnpPH0bxGNjBaHFh_mFjTV2YU5nCr7vyiBc7fr10jeEPhPaQU8J4QUjtZqtqH85UrJ9Th2EC0jTz2',
    shortDesc:
      'Hướng dẫn kiểm tra thông tin điều kiện tham khảo về giấy tờ nhập cảnh Đài Loan, bao gồm diện thông thường và các trường hợp đặc thù.',
    tags: ['Thông tin điều kiện', 'Chuẩn bị giấy tờ'],
    purposes: ['Du lịch tự túc', 'Công tác / Thương mại', 'Thăm thân'],
    visaTypes: [
      'Chứng nhận cho phép nhập cảnh có điều kiện (tham khảo quy định Đài Loan)',
      'Diện Du lịch / Công tác / Thăm thân thông thường (tham khảo)',
    ],
    processingTimeRef: 'Theo thông báo của Văn phòng Kinh tế và Văn hóa Đài Bắc',
    validityRef: 'Do cơ quan có thẩm quyền Đài Loan quyết định',
    stayDurationRef: 'Theo thời hạn được cấp phép khi nhập cảnh',
    preparationLevel: 'Cơ bản',
    requirements: {
      personal: [
        'Hộ chiếu bản gốc còn hạn theo quy định',
        'Ảnh thẻ nền trắng đúng kích thước và giấy tờ tùy thân',
      ],
      employment: [
        'Hợp đồng lao động, thông tin bảo hiểm xã hội hoặc giấy phép kinh doanh',
      ],
      financial: [
        'Chứng từ chứng minh tài chính hoặc giấy tờ thuộc diện được miễn theo quy định hiện hành (nếu áp dụng)',
      ],
      trip: [
        'Thông tin chuyến bay và lịch trình tham quan dự kiến',
      ],
    },
    preparationNotes: [
      'Cần kiểm tra kỹ điều kiện áp dụng đối với từng loại giấy tờ trước khi tự đăng ký trực tuyến hoặc chuẩn bị hồ sơ giấy.',
      'Thông tin khai báo sai lệch có thể ảnh hưởng đến việc nhập cảnh tại cửa khẩu.',
      'Khách hàng có thể kiểm tra trực tiếp quy định mới nhất tại Cục Lãnh sự (BOCA).',
    ],
    feeTransparency: {
      consultingFee: 'Phí dịch vụ tư vấn thông tin và hướng dẫn chuẩn bị giấy tờ của VISA5S.',
      officialFee: 'Lệ phí do Văn phòng Kinh tế và Văn hóa Đài Bắc quy định (nếu thuộc diện nộp hồ sơ giấy có thu phí).',
      thirdPartyFee: 'Phí dịch thuật hoặc chụp ảnh theo thực tế (nếu phát sinh).',
    },
    officialSources: [
      { label: 'Cục Lãnh sự Đài Loan (BOCA)', url: 'https://www.boca.gov.tw/' },
    ],
  },
];

export const VISA_PURPOSES = [
  {
    id: 'du-lich',
    title: 'Hồ Sơ Du Lịch',
    subtitle: 'Tư vấn thông tin chuẩn bị giấy tờ nhân thân, công việc, tài chính và lịch trình cho chuyến đi tự túc hoặc gia đình.',
    icon: 'luggage',
    checklist: [
      'Rà soát lịch trình & thông tin lưu trú dự kiến',
      'Hướng dẫn sắp xếp chứng từ công việc & nghỉ phép',
      'Kiểm tra tính nhất quán của chứng từ tài chính',
    ],
  },
  {
    id: 'cong-tac',
    title: 'Hồ Sơ Công Tác & TM',
    subtitle: 'Hướng dẫn các nhóm tài liệu doanh nghiệp, thư mời đối tác và chứng từ chứng minh mục đích thương mại.',
    icon: 'business_center',
    checklist: [
      'Kiểm tra nội dung thư mời công tác từ đối tác',
      'Hướng dẫn hồ sơ pháp nhân & quyết định cử đi công tác',
      'Đối chiếu thông tin lịch trình làm việc',
    ],
  },
  {
    id: 'tham-than',
    title: 'Hồ Sơ Thăm Thân Nhân',
    subtitle: 'Tư vấn danh mục giấy tờ chứng minh quan hệ gia đình, thư mời và giấy tờ tư cách lưu trú của người mời.',
    icon: 'diversity_1',
    checklist: [
      'Kiểm tra thông tin thư mời / bảo lãnh tham khảo',
      'Hướng dẫn giấy tờ hộ tịch chứng minh quan hệ',
      'Rà soát giấy tờ nhân thân và tài chính liên quan',
    ],
  },
  {
    id: 'dinh-cu-du-hoc',
    title: 'Hồ Sơ Du Học & Đào Tạo',
    subtitle: 'Hỗ trợ giải thích quy trình và hướng dẫn sắp xếp giấy tờ học tập, tài chính theo yêu cầu từng quốc gia.',
    icon: 'school',
    checklist: [
      'Kiểm tra thư chấp thuận nhập học tham khảo',
      'Hướng dẫn hệ thống hóa chứng từ tài chính người bảo trợ',
      'Gợi ý cấu trúc kế hoạch học tập rõ ràng',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tiếp Nhận Nhu Cầu Tư Vấn',
    description:
      'Khách hàng cung cấp thông tin cơ bản về quốc gia dự định đến, mục đích chuyến đi và thời gian dự kiến.',
    duration: 'Trao đổi ban đầu',
  },
  {
    step: '02',
    title: 'Đánh Giá Sơ Bộ & Tư Vấn',
    description:
      'Chuyên viên trao đổi về yêu cầu hồ sơ tham khảo, các khoản chi phí liên quan và những điểm cần lưu ý.',
    duration: 'Theo phạm vi tư vấn',
  },
  {
    step: '03',
    title: 'Hướng Dẫn Chuẩn Bị Hồ Sơ',
    description:
      'VISA5S hướng dẫn khách hàng rà soát tính đầy đủ, nhất quán của thông tin và chuẩn bị giấy tờ theo phạm vi dịch vụ đã thỏa thuận.',
    duration: 'Phối hợp cùng khách hàng',
  },
  {
    step: '04',
    title: 'Hướng Dẫn Quy Trình Chính Thức',
    description:
      'Cung cấp thông tin về cơ quan tiếp nhận, phương thức đặt lịch, địa điểm và nguồn thông tin chính thức để khách hàng thực hiện theo quy định.',
    duration: 'Khách hàng chủ động thực hiện',
  },
];

export const TRANSPARENCY_PILLARS = [
  {
    icon: 'corporate_fare',
    title: 'Doanh Nghiệp Tư Nhân Độc Lập',
    subtitle: 'Tư cách pháp nhân rõ ràng',
    description:
      'VISA5S hoạt động độc lập, không phải cơ quan Chính phủ, Đại sứ quán hay Lãnh sự quán; luôn truyền đạt trung thực phạm vi hỗ trợ.',
  },
  {
    icon: 'receipt_long',
    title: 'Tách Bạch 3 Nhóm Chi Phí',
    subtitle: 'Báo giá trước khi sử dụng',
    description:
      'Phân biệt rõ phí dịch vụ tư vấn của VISA5S, lệ phí chính thức của cơ quan có thẩm quyền và chi phí bên thứ ba (dịch thuật, công chứng nếu có).',
  },
  {
    icon: 'verified_user',
    title: 'Không Cam Kết Kết Quả Sai Sự Thật',
    subtitle: 'Tôn trọng thẩm quyền xét duyệt',
    description:
      'Quyết định chấp thuận hay từ chối hồ sơ nhập cảnh thuộc hoàn toàn cơ quan có thẩm quyền của quốc gia tiếp nhận. Chúng tôi tập trung rà soát thông tin đầy đủ và nhất quán.',
  },
  {
    icon: 'public',
    title: 'Khuyến Khích Kiểm Tra Nguồn Chính Thức',
    subtitle: 'Minh bạch quyền lựa chọn',
    description:
      'Khách hàng có thể tự tìm hiểu và nộp trực tiếp tại cơ quan chính thức với mức lệ phí quy định, hoặc sử dụng dịch vụ tư vấn hướng dẫn của VISA5S.',
  },
];

export const FAQS = [
  {
    question: 'VISA5S có phải cơ quan Chính phủ, Đại sứ quán hay đơn vị được ủy quyền cấp phép nhập cảnh không?',
    answer:
      'Không. VISA5S là doanh nghiệp tư nhân độc lập (thuộc Công ty TNHH Tư vấn Đầu tư Asia Blue Sky), chuyên cung cấp dịch vụ tư vấn thông tin, đánh giá sơ bộ và hướng dẫn chuẩn bị hồ sơ xuất nhập cảnh quốc tế. VISA5S không phải cơ quan Chính phủ, Đại sứ quán hoặc Lãnh sự quán và không có thẩm quyền quyết định kết quả xét duyệt.',
  },
  {
    question: 'Chi phí dịch vụ tư vấn của VISA5S và lệ phí chính thức khác nhau như thế nào?',
    answer:
      'Phí dịch vụ tư vấn của VISA5S là khoản phí thương mại độc lập chi trả cho hoạt động tư vấn thông tin, rà soát và hướng dẫn chuẩn bị giấy tờ. Khoản phí này tách biệt hoàn toàn với lệ phí xét duyệt hồ sơ hoặc phí tiếp nhận do cơ quan có thẩm quyền / đơn vị tiếp nhận chính thức quy định. Nếu có nhu cầu dịch thuật, công chứng hoặc dịch vụ bên thứ ba, các khoản phí đó cũng được tách bạch rõ.',
  },
  {
    question: 'Khách hàng có thể tự tìm hiểu và tự nộp hồ sơ mà không qua VISA5S không?',
    answer:
      'Hoàn toàn có thể. Khách hàng luôn có quyền tự tra cứu yêu cầu, tải biểu mẫu, đặt lịch hẹn và nộp hồ sơ trực tiếp tại website hoặc trung tâm tiếp nhận chính thức của cơ quan có thẩm quyền (chỉ đóng lệ phí chính thức theo quy định, không mất phí tư vấn thương mại). Dịch vụ của VISA5S phù hợp với những khách hàng muốn có chuyên viên đồng hành giải thích quy trình và rà soát tính đầy đủ của thông tin.',
  },
  {
    question: 'VISA5S có bảo đảm hoặc cam kết tỷ lệ đạt kết quả không?',
    answer:
      'Không. Theo thông lệ quốc tế, quyền xem xét, yêu cầu bổ sung, phỏng vấn và quyết định chấp thuận hay từ chối hồ sơ nhập cảnh thuộc hoàn toàn cơ quan có thẩm quyền của quốc gia tiếp nhận. VISA5S cam kết tư vấn trung thực, hướng dẫn chuẩn bị giấy tờ đầy đủ và nhất quán trong phạm vi thỏa thuận, không đưa ra cam kết về kết quả xét duyệt.',
  },
  {
    question: 'Việc gửi thông tin trên form website có đồng nghĩa đã nộp hồ sơ xin phép nhập cảnh chưa?',
    answer:
      'Chưa. Thông tin khách hàng gửi qua biểu mẫu trên website chỉ được sử dụng để chuyên viên VISA5S liên hệ tư vấn ban đầu về dịch vụ. Việc gửi thông tin này không đồng nghĩa với việc đã nộp hồ sơ xin phép nhập cảnh cho bất kỳ cơ quan có thẩm quyền nào.',
  },
];

export const OFFICE_LOCATIONS = [
  {
    title: 'Trụ sở chính',
    city: 'TP.HCM',
    address: '370 Đường 3/2, P. Hòa Hưng, TP.HCM',
    phone: '0911 909 686',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
  {
    title: 'VP Chi nhánh',
    city: 'TP.HCM',
    address: '16 Trần Đại Nghĩa, P. Đông Hòa, TPHCM',
    phone: '0967 686 101',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
  {
    title: 'VP Hà Nội',
    city: 'Hà Nội',
    address: '59 Vương Thừa Vũ, Q. Thanh Xuân, Hà Nội',
    phone: '0911 909 686',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
];
