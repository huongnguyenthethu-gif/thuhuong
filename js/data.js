/**
 * ==============================================================================
 * DỮ LIỆU MẪU CHUYÊN NGHIỆP - MARKETING & EVENT PORTFOLIO
 * ==============================================================================
 * Bạn có thể dễ dàng chỉnh sửa hoặc bổ sung thông tin cá nhân, dự án, kỹ năng
 * và kinh nghiệm tại file này. Mọi thay đổi sẽ tự động cập nhật lên giao diện!
 */

const PORTFOLIO_DATA = {
    // THÔNG TIN CÁ NHÂN
    profile: {
        name: "Nguyễn Mai Phương",
        roleVi: "Senior Event Producer & Brand Marketing Lead",
        roleEn: "Senior Event Producer & Brand Marketing Lead",
        titlesVi: [
            "Senior Event Producer",
            "Brand Marketing Lead",
            "Creative Campaign Director",
            "Experiential Marketing Specialist"
        ],
        titlesEn: [
            "Senior Event Producer",
            "Brand Marketing Lead",
            "Creative Campaign Director",
            "Experiential Marketing Specialist"
        ],
        statusVi: "🟢 Sẵn sàng nhận dự án & tư vấn chiến dịch",
        statusEn: "🟢 Open for projects & strategic consulting",
        bioVi: "Chuyên gia với hơn 6 năm kinh nghiệm trong lĩnh vực tổ chức sự kiện quy mô lớn, hoạch định chiến lược tiếp thị tích hợp (IMC) và sản xuất nội dung sáng tạo. Từng dẫn dắt thành công hơn 85 sự kiện từ mega-concert, hội nghị thượng đỉnh quốc tế đến các chiến dịch kích hoạt thương hiệu viral hàng triệu lượt tiếp cận.",
        bioEn: "Specialist with 6+ years of proven expertise in large-scale event production, integrated marketing communications (IMC), and creative content direction. Successfully led 85+ high-profile events ranging from mega-concerts and international summits to brand activations reaching millions of audiences.",
        avatar: "assets/images/avatar.jpg",
        email: "phuong.nguyen.events@gmail.com",
        phone: "+84 987 654 321",
        locationVi: "Hà Nội / TP. Hồ Chí Minh, Việt Nam",
        locationEn: "Hanoi / Ho Chi Minh City, Vietnam",
        socials: {
            linkedin: "https://linkedin.com/in/phuongnguyen-event",
            facebook: "https://facebook.com",
            behance: "https://behance.net",
            instagram: "https://instagram.com"
        },
        cvDownloadUrl: "#download-cv"
    },

    // BỘ ĐẾM CHỈ SỐ NỔI BẬT
    stats: [
        {
            number: 6,
            suffix: "+",
            labelVi: "Năm Kinh Nghiệm",
            labelEn: "Years Experience",
            icon: "calendar"
        },
        {
            number: 85,
            suffix: "+",
            labelVi: "Sự Kiện & Chiến Dịch",
            labelEn: "Events & Campaigns",
            icon: "award"
        },
        {
            number: 150,
            suffix: "K+",
            labelVi: "Khách Tiếp Cận",
            labelEn: "Attendees Reached",
            icon: "users"
        },
        {
            number: 99,
            suffix: "%",
            labelVi: "Độ Hài Lòng Đối Tác",
            labelEn: "Client Satisfaction",
            icon: "heart"
        }
    ],

    // NHÓM KỸ NĂNG CHUYÊN MÔN
    skillCategories: [
        {
            id: "event",
            nameVi: "Sản Xuất & Quản Lý Sự Kiện",
            nameEn: "Event Production & Execution",
            skills: [
                { name: "Mega Event & Festival Direction", level: 95 },
                { name: "Corporate Summits & B2B Conferences", level: 92 },
                { name: "Product Launch & Brand Activation", level: 96 },
                { name: "Stage Management & Show Running", level: 90 },
                { name: "Risk Management & Crisis Handling", level: 88 },
                { name: "Budgeting & Vendor Negotiation", level: 94 }
            ]
        },
        {
            id: "marketing",
            nameVi: "Chiến Lược Marketing & Brand",
            nameEn: "Brand Strategy & Marketing",
            skills: [
                { name: "Integrated Marketing Communications (IMC)", level: 92 },
                { name: "Brand Positioning & Storytelling", level: 95 },
                { name: "Social Media & Viral Campaigns", level: 90 },
                { name: "PR, Media & Press Relations", level: 87 },
                { name: "Performance & Growth Marketing", level: 85 },
                { name: "Data Analytics & Event ROI Measurement", level: 89 }
            ]
        },
        {
            id: "creative",
            nameVi: "Sáng Tạo & Đạo Diễn Nội Dung",
            nameEn: "Creative & Art Direction",
            skills: [
                { name: "Event Concept & Key Visual (KV) Ideation", level: 96 },
                { name: "Scriptwriting & Show Flow Architecture", level: 94 },
                { name: "3D Spatial & Experiential Booth Design", level: 88 },
                { name: "TVC, Promo Video & Motion Graphics Directing", level: 86 }
            ]
        },
        {
            id: "partnership",
            nameVi: "Quan Hệ Đối Tác & Tài Trợ",
            nameEn: "Partnership & Talent Management",
            skills: [
                { name: "Sponsorship Deck & Pitching", level: 93 },
                { name: "Celebrity & Key Opinion Leader (KOL/KOC) Booking", level: 95 },
                { name: "Strategic Media Alliances", level: 91 },
                { name: "Cross-Industry Co-Branding", level: 89 }
            ]
        }
    ],

    // DANH SÁCH DỰ ÁN TIÊU BIỂU (CASE STUDIES)
    projects: [
        {
            id: "global-tech-summit",
            category: "corporate",
            titleVi: "Hội Nghị Đổi Mới Công Nghệ Toàn Cầu 2024",
            titleEn: "Global Tech Innovation Summit 2024",
            tagVi: "Hội nghị Quốc tế",
            tagEn: "International Summit",
            client: "Global Tech Alliance & Partners",
            roleVi: "Head of Event Production & Media Lead",
            roleEn: "Head of Event Production & Media Lead",
            image: "assets/images/event_summit.jpg",
            summaryVi: "Chỉ đạo sản xuất hội nghị quy tụ hơn 5.000 chuyên gia công nghệ, 45 diễn giả quốc tế với sân khấu màn hình LED cong 8K ấn tượng và không gian kết nối giao thương B2B cao cấp.",
            summaryEn: "Led end-to-end event production for 5,000+ tech executives and 45 global keynote speakers featuring an immersive curved 8K LED stage and dynamic B2B matchmaking lounges.",
            metrics: [
                { value: "5.200+", labelVi: "Khách mời trực tiếp", labelEn: "On-site Attendees" },
                { value: "45+", labelVi: "Diễn giả Quốc tế", labelEn: "Global Speakers" },
                { value: "35M+", labelVi: "Lượt hiển thị truyền thông", labelEn: "Media Impressions" },
                { value: "100%", labelVi: "Đạt chỉ tiêu tài trợ", labelEn: "Sponsorship Target" }
            ],
            challengeVi: "Cần tích hợp đồng bộ công nghệ phiên dịch đa ngôn ngữ AI trực tiếp, hệ thống check-in FaceID tự động và kịch bản kết nối truyền hình trực tiếp cho 12 đài truyền hình.",
            challengeEn: "Requirement to seamlessly integrate real-time AI simultaneous translation, frictionless FaceID check-in for 5,000+ guests, and live broadcast feeds to 12 major media outlets.",
            solutionVi: "Thiết kế luồng trải nghiệm khách mời 3 giai đoạn (Pre - In - Post Event), tối ưu hóa hệ thống sân khấu hybrid và điều phối đội ngũ hơn 120 nhân sự vận hành không một lỗi phát sinh.",
            solutionEn: "Architected a unified 3-stage attendee journey, calibrated redundant high-grade AV staging, and orchestrated a synchronized crew of 120+ members flawlessly.",
            deliverablesVi: [
                "Ý tưởng Concept & Bộ nhận diện Key Visual toàn diện",
                "Quản lý sân khấu, ánh sáng biểu diễn và visual 3D",
                "Hệ sinh thái kết nối nhà tài trợ công nghệ cao cấp",
                "Chiến dịch truyền thông báo chí phủ sóng 40+ đầu báo lớn"
            ],
            deliverablesEn: [
                "Full Creative Concept & Spatial Key Visuals",
                "Curved LED Stage Management & 3D Visual Assets",
                "Elite Tech Sponsorship Packaging & Execution",
                "Press & Media Blitz spanning 40+ top publications"
            ]
        },
        {
            id: "neon-pulse-music-festival",
            category: "festival",
            titleVi: "Đại Nhạc Hội & Kích Hoạt Thương Hiệu 'Neon Wave'",
            titleEn: "'Neon Wave' Mega Music Fest & Activation",
            tagVi: "Lễ hội Âm nhạc & Activation",
            tagEn: "Music Festival & Activation",
            client: "Revive Beverage Group",
            roleVi: "Show Director & Brand Activation Lead",
            roleEn: "Show Director & Brand Activation Lead",
            image: "assets/images/event_festival.jpg",
            summaryVi: "Sáng tạo lễ hội âm nhạc ngoài trời kết hợp khu trải nghiệm tương tác thương hiệu đa giác quan, thu hút 25.000 khán giả Gen Z và tạo trào lưu viral trên TikTok.",
            summaryEn: "Spearheaded an outdoor music festival fused with immersive sensory brand activation zones, drawing 25,000 Gen Z attendees and dominating social trends on TikTok.",
            metrics: [
                { value: "25.000+", labelVi: "Khán giả tham dự", labelEn: "Festival Attendees" },
                { value: "18.5M+", labelVi: "Lượt xem hashtag TikTok", labelEn: "TikTok Views" },
                { value: "4.8/5", labelVi: "Chỉ số trải nghiệm", labelEn: "Experience Score" },
                { value: "+38%", labelVi: "Tăng trưởng doanh số nhãn", labelEn: "Brand Sales Uplift" }
            ],
            challengeVi: "Thương hiệu nước uống thế hệ mới cần tiếp cận đối tượng Gen Z một cách tự nhiên, tránh cảm giác quảng cáo nhàm chán.",
            challengeEn: "The youth beverage brand required an authentic, non-intrusive experiential touchpoint to captivate Gen Z crowds.",
            solutionVi: "Xây dựng 'Cyber Oasis' với đường hầm ánh sáng laser, trạm pha chế cocktail tương tác nhận diện cảm xúc và mời 8 nghệ sĩ Headliner hàng đầu V-Pop.",
            solutionEn: "Created 'Cyber Oasis' featuring interactive laser tunnels, mood-detecting cocktail stations, and a blockbuster lineup of 8 top headlining music artists.",
            deliverablesVi: [
                "Concept đạo diễn sân khấu và hiệu ứng pháo hoa laser",
                "Gian hàng trải nghiệm tương tác AR & chụp ảnh bullet-time",
                "Hợp tác với 35 KOLs/KOCs sáng tạo nội dung tại chỗ",
                "Hệ thống an ninh, y tế và điều phối đám đông chuẩn quốc tế"
            ],
            deliverablesEn: [
                "Show Directing, Laser Mapping & Pyrotechnics",
                "Interactive AR & Bullet-Time Photo Experiences",
                "Influencer Campaign with 35 on-site Content Creators",
                "Crowd Safety, Crowd Control & Medical Operations"
            ]
        },
        {
            id: "flagship-product-launch",
            category: "launch",
            titleVi: "Lễ Ra Mắt Siêu Phẩm Công Nghệ 'Future Is Now'",
            titleEn: "'Future Is Now' Flagship Device Launch",
            tagVi: "Lễ ra mắt Sản phẩm",
            tagEn: "Product Launch",
            client: "NextGen Electronics Vietnam",
            roleVi: "Lead Producer & Creative Strategist",
            roleEn: "Lead Producer & Creative Strategist",
            image: "assets/images/event_launch.jpg",
            summaryVi: "Sự kiện ra mắt sản phẩm chuẩn công nghệ tương lai với hiệu ứng trình chiếu 3D Hologram, kết hợp trải nghiệm trên tay độc quyền cho 300 khách VIP & Báo chí.",
            summaryEn: "Futuristic flagship hardware launch powered by 3D holographic mapping and hands-on discovery zones for 300 VIP guests and key tech press.",
            metrics: [
                { value: "300+", labelVi: "KOL & Nhà báo công nghệ", labelEn: "VIP & Tech Press" },
                { value: "1.8M+", labelVi: "Lượt xem Livestream", labelEn: "Livestream Views" },
                { value: "100%", labelVi: "Kín chỗ đăng ký đặt trước", labelEn: "Pre-order Sold Out" },
                { value: "80+", labelVi: "Bài viết chuyên sâu", labelEn: "Feature Articles" }
            ],
            challengeVi: "Tạo sự bất ngờ vượt trội so với các sự kiện ra mắt điện thoại truyền thống của các đối thủ lớn trên thị trường.",
            challengeEn: "Create unmatched cinematic excitement that surpasses conventional smartphone launch keynotes.",
            solutionVi: "Biến toàn bộ khán phòng thành tàu không gian du hành thời gian với màn hình sàn tương tác và khoảnh khắc unveil thiết bị bay lơ lửng bằng từ tính.",
            solutionEn: "Transformed the venue into a time-travel spacecraft with reactive floor screens and a magnetic levitation reveal moment.",
            deliverablesVi: [
                "Kịch bản thuyết trình & chỉ đạo diễn thuyết cho Ban giám đốc",
                "Khu vực trải nghiệm camera thiếu sáng chuyên biệt",
                "Gói quà tặng VIP độc quyền cá nhân hóa bằng khắc laser",
                "Chiến dịch đếm ngược viral trên mạng xã hội trước sự kiện"
            ],
            deliverablesEn: [
                "Keynote Coaching & Executive Scriptwriting",
                "Dark-Room Studio Experience for Camera Testing",
                "Bespoke Laser-Engraved VIP Media Kits",
                "Pre-Event Social Teaser & Countdown Blitz"
            ]
        },
        {
            id: "eco-life-campaign",
            category: "campaign",
            titleVi: "Chiến Dịch IMC 'Sống Xanh Từng Khoảnh Khắc'",
            titleEn: "'Green Living Moments' Integrated Campaign",
            tagVi: "Chiến dịch Thương hiệu (IMC)",
            tagEn: "Brand Campaign (IMC)",
            client: "EcoLife FMCG Vietnam",
            roleVi: "Campaign Director & PR Lead",
            roleEn: "Campaign Director & PR Lead",
            image: "assets/images/event_expo.jpg",
            summaryVi: "Chiến dịch truyền thông tích hợp kéo dài 3 tháng kết hợp chuỗi sự kiện pop-up 'Trạm Đổi Rác Nhựa Lấy Cây Xanh' tại các trường đại học và trung tâm thương mại lớn.",
            summaryEn: "A 3-month comprehensive IMC campaign featuring pop-up experiential recycling stations at top universities and premier shopping malls.",
            metrics: [
                { value: "12 Tấn", labelVi: "Rác nhựa tái chế thành công", labelEn: "Plastic Recycled" },
                { value: "45.000+", labelVi: "Cây xanh được trao tặng", labelEn: "Trees Distributed" },
                { value: "9.2M+", labelVi: "Lượt tương tác đa kênh", labelEn: "Omnichannel Engagements" },
                { value: "Gold", labelVi: "Giải thưởng MMA SMARTIES 2023", labelEn: "MMA SMARTIES Award" }
            ],
            challengeVi: "Biến thông điệp bảo vệ môi trường vốn quen thuộc thành hành động cụ thể, vui vẻ và lan tỏa tự nhiên.",
            challengeEn: "Turn standard CSR environmental messaging into an engaging, participatory social movement.",
            solutionVi: "Ứng dụng cơ chế Gamification: Mỗi món đồ nhựa mang đến được quét mã tích điểm đổi quà thương hiệu xanh, kích thích giới trẻ check-in.",
            solutionEn: "Gamified recycling booths where participants scan plastic items to earn eco-points for trendy sustainable merchandise.",
            deliverablesVi: [
                "Chuỗi 15 sự kiện Pop-up tương tác tại HN & TP.HCM",
                "Viral Video ca nhạc kết hợp đại sứ thương hiệu nghệ sĩ",
                "Hợp tác truyền thông với các tổ chức thanh niên và đài truyền hình",
                "Báo cáo đo lường tác động xã hội (Social Impact Report)"
            ],
            deliverablesEn: [
                "15 Interactive Pop-up Experiences in HN & HCMC",
                "Viral Music Video starring Eco Brand Ambassadors",
                "Strategic Media Tie-ups with TV & Youth NGOs",
                "Comprehensive Social Impact & ROI Whitepaper"
            ]
        }
    ],

    // DÒNG THỜI GIAN KINH NGHIỆM & HỌC VẤN
    timeline: {
        experience: [
            {
                period: "2022 - HIỆN TẠI",
                roleVi: "Senior Event & Marketing Lead",
                roleEn: "Senior Event & Marketing Lead",
                company: "Horizon Media & Entertainment",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Chịu trách nhiệm toàn diện về ngân sách (tổng quy mô > 30 tỷ VNĐ/năm) cho các sự kiện thương hiệu lớn và chiến dịch tích hợp.",
                    "Lãnh đạo trực tiếp đội ngũ 15 chuyên viên sáng tạo, thiết kế 3D, sản xuất kỹ thuật và truyền thông PR.",
                    "Duy trì quan hệ đối tác chiến lược với hơn 50 thương hiệu Fortune 500 và các đối tác tài trợ hàng đầu.",
                    "Chuẩn hóa quy trình vận hành sự kiện giúp giảm 20% chi phí rủi ro và tăng 35% mức độ hài lòng của khách hàng."
                ],
                pointsEn: [
                    "Full P&L responsibility for major brand events and IMC campaigns with budgets exceeding $1.2M+ USD annually.",
                    "Directly manage a high-performing squad of 15 creative strategists, 3D spatial designers, technical producers, and PR leads.",
                    "Cultivated and nurtured strategic partnerships with 50+ blue-chip clients and prime sponsors.",
                    "Streamlined event risk SOPs, reducing contingency budget expenditure by 20% while elevating CSAT by 35%."
                ]
            },
            {
                period: "2020 - 2022",
                roleVi: "Brand Campaign & Activation Manager",
                roleEn: "Brand Campaign & Activation Manager",
                company: "BlueSky Communications Agency",
                locationVi: "TP. Hồ Chí Minh, Việt Nam",
                locationEn: "Ho Chi Minh City, Vietnam",
                pointsVi: [
                    "Hoạch định và thực thi 28 chiến dịch Brand Activation và Roadshow tương tác toàn quốc.",
                    "Phối hợp với các nền tảng số (Meta, TikTok, Google) để tối đa hóa hiệu ứng viral đa kênh từ sự kiện thực tế.",
                    "Đạt giải Bạc Chiến Dịch Tiếp Thị Trải Nghiệm Xuất Sắc Nhất năm 2021 do Hiệp hội Tiếp thị bình chọn."
                ],
                pointsEn: [
                    "Planned and executed 28 brand activations and multi-city roadshow campaigns across Vietnam.",
                    "Integrated real-world event touchpoints with digital channels (TikTok, Meta) to amplify viral ripple effects.",
                    "Secured Silver Award for Best Experiential Campaign at the Vietnam Marketing Excellence Awards 2021."
                ]
            },
            {
                period: "2018 - 2020",
                roleVi: "Event Executive & Creative Planner",
                roleEn: "Event Executive & Creative Planner",
                company: "Elite Events & MICE Vietnam",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Lập kế hoạch chi tiết, kịch bản chương trình và điều phối hậu cần cho hơn 40 hội nghị khách hàng, gala dinner và lễ khánh thành.",
                    "Đàm phán và quản lý mạng lưới nhà thầu âm thanh ánh sáng, sân khấu, in ấn và địa điểm tổ chức.",
                    "Xây dựng hồ sơ đấu thầu (Pitching Proposal) với tỷ lệ thắng thầu đạt 78%."
                ],
                pointsEn: [
                    "Authored show flow scripts, logistics run sheets, and on-site coordination for 40+ conferences, gala dinners, and ceremonies.",
                    "Negotiated and inspected vendor contracts covering stagecraft, AV production, venues, and hospitality.",
                    "Formulated compelling pitch decks, yielding a 78% competitive pitch win rate."
                ]
            }
        ],
        education: [
            {
                period: "2014 - 2018",
                roleVi: "Cử Nhân Quản Trị Kinh Doanh & Tiếp Thị (Loại Giỏi)",
                roleEn: "Bachelor of Business Administration & Marketing (Honors)",
                company: "Đại học Kinh tế Quốc dân (NEU) / RMIT Vietnam",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Tốt nghiệp Thủ khoa chuyên ngành Tiếp thị Thương mại với GPA 3.8/4.0.",
                    "Chủ tịch Câu lạc bộ Sự kiện & Truyền thông Sinh viên, tổ chức chuỗi sự kiện chào tân sinh viên 3.000 khán giả."
                ],
                pointsEn: [
                    "Graduated Top 5% in Commercial Marketing with a 3.8/4.0 GPA.",
                    "President of the Student Event & Media Club, orchestrating annual orientation concerts for 3,000+ attendees."
                ]
            },
            {
                period: "2021",
                roleVi: "Chứng Chỉ Chuyên Gia Tổ Chức Sự Kiện Quốc Tế (CMP)",
                roleEn: "Certified Meeting Professional (CMP) Accreditation",
                company: "Events Industry Council (EIC)",
                locationVi: "Hoa Kỳ / Trực tuyến",
                locationEn: "USA / Online",
                pointsVi: [
                    "Chứng chỉ tiêu chuẩn vàng toàn cầu về quản trị rủi ro, vận hành sự kiện bền vững và chiến lược tài chính sự kiện."
                ],
                pointsEn: [
                    "Global gold standard certification in event risk governance, sustainable operations, and event financial strategy."
                ]
            }
        ]
    },

    // ĐÁNH GIÁ TỪ ĐỐI TÁC & KHÁCH HÀNG (TESTIMONIALS)
    testimonials: [
        {
            quoteVi: "Mai Phương là một trong những Event Producer xuất sắc và chỉn chu nhất mà tôi từng làm việc cùng. Khả năng bình tĩnh xử lý các tình huống phát sinh trên sân khấu trực tiếp và tư duy thẩm mỹ cao đã giúp Hội nghị Công nghệ của chúng tôi đạt thành công vang dội.",
            quoteEn: "Mai Phuong is one of the most exceptional and meticulous Event Producers I have collaborated with. Her poise under live stage pressure coupled with top-tier aesthetic acumen made our Tech Summit an unforgettable triumph.",
            author: "Trần Hoàng Nam",
            titleVi: "Giám Đốc Tiếp Thị Vùng, NextGen Electronics",
            titleEn: "Regional Marketing Director, NextGen Electronics",
            avatar: "assets/images/event_launch.jpg",
            rating: 5
        },
        {
            quoteVi: "Chiến dịch âm nhạc 'Neon Wave' đã vượt 140% KPI ban đầu của chúng tôi. Mai Phương không chỉ hiểu rõ insight của Gen Z mà còn có khả năng kết nối thương hiệu với âm nhạc một cách cực kỳ tự nhiên, đầy cảm xúc.",
            quoteEn: "The 'Neon Wave' festival shattered our initial KPIs by 140%. Phuong not only decodes Gen Z insights effortlessly but weaves brand storytelling into live entertainment with authentic emotional resonance.",
            author: "Lê Thu Thảo",
            titleVi: "Brand Manager, Revive Beverage Group",
            titleEn: "Brand Manager, Revive Beverage Group",
            avatar: "assets/images/event_festival.jpg",
            rating: 5
        },
        {
            quoteVi: "Tính kỷ luật, sự minh bạch trong ngân sách và khả năng dẫn dắt đội ngũ lớn là điểm cộng tuyệt đối của Phương. Mọi deadline và yêu cầu kỹ thuật khắt khe đều được cô ấy hoàn thành xuất sắc.",
            quoteEn: "Her uncompromising discipline, financial transparency, and charismatic leadership of large crews are unparalleled. Every demanding deadline and complex technical brief was executed with perfection.",
            author: "David Miller",
            titleVi: "Managing Director, Global Summit Network APAC",
            titleEn: "Managing Director, Global Summit Network APAC",
            avatar: "assets/images/event_summit.jpg",
            rating: 5
        }
    ],

    // DỊCH VỤ CUNG CẤP (SERVICES OFFERED)
    services: [
        {
            icon: "sparkles",
            titleVi: "Tổ Chức Sự Kiện Trọn Gói",
            titleEn: "End-to-End Event Production",
            descVi: "Từ ý tưởng sáng tạo concept, thiết kế không gian 3D, xin cấp phép, đạo diễn sân khấu đến điều phối vận hành thực tế.",
            descEn: "From initial concept ideation, 3D spatial layout, legal permits, stage direction to seamless live execution."
        },
        {
            icon: "trending-up",
            titleVi: "Chiến Lược Tiếp Thị Tích Hợp (IMC)",
            titleEn: "Integrated Marketing Campaigns",
            descVi: "Xây dựng chiến dịch truyền thông đa kênh đồng bộ, tối ưu hóa điểm chạm khách hàng và đo lường ROI chuyển đổi rõ ràng.",
            descEn: "Unified multi-channel media campaigns, touchpoint optimization, and quantifiable conversion ROI reporting."
        },
        {
            icon: "users",
            titleVi: "Booking & Quản Lý KOL/KOC",
            titleEn: "Talent & Influencer Management",
            descVi: "Mạng lưới kết nối sâu rộng với nghệ sĩ, diễn giả, MC và influencers hàng đầu, tối ưu chi phí và định hướng nội dung phù hợp.",
            descEn: "Extensive network of top artists, keynote speakers, MCs, and creators with cost efficiency and content alignment."
        },
        {
            icon: "target",
            titleVi: "Tư Vấn & Đào Tạo Marketing Thực Chiến",
            titleEn: "Consulting & Event Training",
            descVi: "Đào tạo đội ngũ in-house của doanh nghiệp về quy trình quản trị sự kiện chuyên nghiệp và chuẩn hóa an toàn vận hành.",
            descEn: "Upskilling corporate in-house marketing teams on professional event SOPs and risk governance standards."
        }
    ]
};
