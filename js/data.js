/**
 * ==============================================================================
 * DỮ LIỆU PORTFOLIO - NGUYỄN THẾ THU HƯỜNG
 * ==============================================================================
 * Cập nhật thông tin theo hồ sơ năng lực thực tế của Nguyễn Thế Thu Hường
 */

const PORTFOLIO_DATA = {
    // THÔNG TIN CÁ NHÂN
    profile: {
        name: "Nguyễn Thế Thu Hường",
        roleVi: "Sinh viên Marketing | Thành viên Ban Sự Kiện",
        roleEn: "Marketing Student | Event Organizer",
        titlesVi: [
            "Sinh viên Marketing",
            "Thành viên Ban Sự Kiện",
            "Người Tổ Chức Sự Kiện",
            "Chuyên viên Sự Kiện Tương Lai"
        ],
        titlesEn: [
            "Marketing Student",
            "Event Organizer",
            "Event Coordinator",
            "Future Event Specialist"
        ],
        statusVi: "🟢 Sẵn sàng nhận cơ hội thực tập & cộng tác",
        statusEn: "🟢 Open to internship & collaboration opportunities",
        bioVi: "Sinh viên chuyên ngành Marketing tại Học viện Công nghệ Bưu chính Viễn thông, sinh ngày 14/01/2005, hiện sinh sống và làm việc tại Hà Nội. Có kinh nghiệm thực tế trong tổ chức sự kiện qua nhiều vai trò từ CTV Ban Sự kiện đến Thành viên Ban Tổ chức các chương trình lớn như Marketing Big Day 2023, 2024, 2025, Vietnam Youth Debate Tournament và Lễ hội Văn hóa Nhật Bản Japanwave. Mục tiêu trở thành Chuyên viên Sự kiện / Đạo diễn Sự kiện chuyên nghiệp.",
        bioEn: "Marketing student at Posts and Telecommunications Institute of Technology (PTIT), born 14/01/2005, living and working in Hanoi. Hands-on experience in event organization through various roles from event volunteer to organizing committee member at major events including Marketing Big Day 2023/2024/2025, Vietnam Youth Debate Tournament, and Japanwave Japanese Cultural Festival. Aspiring to become a professional Event Specialist / Event Director.",
        avatar: "assets/images/avatar.jpg",
        email: "huongnguyenthethu@gmail.com",
        phone: "0961407619",
        locationVi: "Hà Nội, Việt Nam",
        locationEn: "Hanoi, Vietnam",
        socials: {
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
            behance: "https://behance.net",
            instagram: "https://instagram.com"
        },
        cvDownloadUrl: "#download-cv"
    },

    // BỘ ĐẾM CHỈ SỐ NỔI BẬT
    stats: [
        {
            number: 2,
            suffix: "+",
            labelVi: "Năm Kinh Nghiệm SK",
            labelEn: "Years Event Experience",
            icon: "calendar"
        },
        {
            number: 5,
            suffix: "+",
            labelVi: "Sự Kiện Tham Gia",
            labelEn: "Events Participated",
            icon: "award"
        },
        {
            number: 3,
            suffix: "K+",
            labelVi: "Khán Giả Tiếp Cận",
            labelEn: "Attendees Reached",
            icon: "users"
        },
        {
            number: 2,
            suffix: "",
            labelVi: "Chứng Chỉ Ngoại Ngữ",
            labelEn: "Language Certificates",
            icon: "heart"
        }
    ],

    // NHÓM KỸ NĂNG CHUYÊN MÔN
    skillCategories: [
        {
            id: "language",
            nameVi: "Ngôn Ngữ",
            nameEn: "Languages",
            icon: "globe",
            skills: [
                { name: "Tiếng Anh (CEFR B2 - Aptis ESOL)", level: 72, color: "#6366f1" },
                { name: "Tiếng Trung (HSK4)", level: 65, color: "#8b5cf6" },
                { name: "Tiếng Việt", level: 100, color: "#a78bfa" }
            ]
        },
        {
            id: "office",
            nameVi: "Tin Học Văn Phòng",
            nameEn: "Office Skills",
            icon: "monitor",
            skills: [
                { name: "Microsoft Word", level: 90, color: "#06b6d4" },
                { name: "Microsoft Excel", level: 85, color: "#0ea5e9" },
                { name: "Microsoft PowerPoint", level: 90, color: "#38bdf8" }
            ]
        },
        {
            id: "creative",
            nameVi: "Kỹ Năng Sáng Tạo",
            nameEn: "Creative Skills",
            icon: "pen-tool",
            skills: [
                { name: "Thiết kế Canva", level: 80, color: "#f59e0b" },
                { name: "Chỉnh sửa video Capcut", level: 75, color: "#f97316" }
            ]
        },
        {
            id: "soft",
            nameVi: "Kỹ Năng Mềm",
            nameEn: "Soft Skills",
            icon: "users",
            skills: [
                { name: "Giao tiếp & Làm việc nhóm", level: 92, color: "#10b981" },
                { name: "Tư duy logic & Sắp xếp", level: 85, color: "#34d399" },
                { name: "Lập kế hoạch", level: 88, color: "#6ee7b7" },
                { name: "Quản lý thời gian", level: 85, color: "#059669" }
            ]
        }
    ],

    // DỰ ÁN / SỰ KIỆN NỔI BẬT
    projects: [
        {
            id: "marketing-bigday-2025",
            titleVi: "Marketing Big Day 2025",
            titleEn: "Marketing Big Day 2025",
            categoryVi: "Sự Kiện Sinh Viên",
            categoryEn: "Student Event",
            roleVi: "Takecare MC | Ban Tổ Chức",
            roleEn: "MC Handler | Organizing Committee",
            year: "2025",
            statusVi: "Hoàn thành",
            statusEn: "Completed",
            descVi: "Đảm nhận vai trò Takecare MC tại Marketing Big Day 2025 - sự kiện Marketing lớn nhất của PTIT. Công việc bao gồm: viết và chỉnh sửa kịch bản theo yêu cầu của BTC và MC, giữ đồ cá nhân cho MC, nhận lệnh từ BTC để chuẩn bị và dẫn dắt MC ra sân khấu, truyền đạt mong muốn của BTC đến MC và ngược lại.",
            descEn: "Served as MC Handler at Marketing Big Day 2025, PTIT's largest Marketing event. Responsibilities included writing and revising show scripts per BTC and MC requirements, managing MC personal items, relaying BTC cues for MC stage timing, and bridging communication between BTC and MC.",
            image: "assets/images/event_festival.jpg",
            tags: ["Event", "MC Management", "Script Writing", "Coordination"]
        },
        {
            id: "vietnam-debate-2024",
            titleVi: "Vietnam Youth Debate Tournament",
            titleEn: "Vietnam Youth Debate Tournament",
            categoryVi: "Sự Kiện Quốc Tế",
            categoryEn: "International Event",
            roleVi: "CTV Hậu Cần",
            roleEn: "Logistics Volunteer",
            year: "2024",
            statusVi: "Hoàn thành",
            statusEn: "Completed",
            descVi: "Tham gia với vai trò CTV Hậu cần (16/04/2024 - 30/04/2024). Công việc: lên danh sách và khảo giá, deal giá với nhà cung cấp; chuẩn bị và set-up đồ dùng cho BTC; hỗ trợ các công tác liên quan đến backstage và điều phối; giám sát tiến trình sự kiện, chuẩn bị ánh sáng, kỹ thuật, đạo cụ, ghế ngồi, an ninh.",
            descEn: "Logistics volunteer (Apr 16–30, 2024). Responsibilities: vendor sourcing, price negotiation; organizing committee setup and preparation; backstage support and coordination; event progress monitoring, lighting, technical, props, seating, security oversight.",
            image: "assets/images/event_summit.jpg",
            tags: ["Logistics", "Backstage", "Vendor Management", "Event Monitoring"]
        },
        {
            id: "japanwave-2024",
            titleVi: "Lễ Hội Văn Hóa Nhật Bản - Japanwave",
            titleEn: "Japanese Cultural Festival - Japanwave",
            categoryVi: "Lễ Hội Văn Hóa",
            categoryEn: "Cultural Festival",
            roleVi: "CTV Bảo An",
            roleEn: "Security Volunteer",
            year: "2024",
            statusVi: "Hoàn thành",
            statusEn: "Completed",
            descVi: "Tham gia với vai trò CTV Bảo an (01/07/2024 - 30/07/2024) tại Lễ hội Văn hóa Nhật Bản Japanwave - một trong những lễ hội văn hóa lớn tại Hà Nội, thu hút đông đảo khán giả tham dự.",
            descEn: "Security volunteer (Jul 1–30, 2024) at the Japanwave Japanese Cultural Festival - one of Hanoi's largest cultural festivals attracting large audiences.",
            image: "assets/images/event_launch.jpg",
            tags: ["Security", "Cultural Event", "Festival", "Crowd Management"]
        },
        {
            id: "marketing-bigday-2023-2024",
            titleVi: "Marketing Big Day 2023 & 2024",
            titleEn: "Marketing Big Day 2023 & 2024",
            categoryVi: "Sự Kiện Sinh Viên",
            categoryEn: "Student Event",
            roleVi: "Thành viên Ban Sự Kiện",
            roleEn: "Event Committee Member",
            year: "2023-2024",
            statusVi: "Hoàn thành",
            statusEn: "Completed",
            descVi: "Thành viên Ban Sự kiện tại Marketing Big Day 2023 & 2024 (từ 03/10/2023 đến nay). Công việc: hỗ trợ viết Mail & Form cho cuộc thi; lên danh sách và khảo giá các đồ dùng liên quan đến Teabreak; chuẩn bị backdrop, standee, dụng cụ cần thiết; hỗ trợ set-up bàn Teabreak; tham gia điều phối sự kiện, takecare đội thi.",
            descEn: "Event committee member at Marketing Big Day 2023 & 2024 (Oct 2023–present). Tasks: drafting competition emails and forms; sourcing and pricing Teabreak supplies; preparing backdrops, standees, and equipment; setting up Teabreak tables; event coordination and team care.",
            image: "assets/images/event_gala.jpg",
            tags: ["Event Planning", "Coordination", "Setup", "Team Management"]
        },
        {
            id: "marketing-mix-2023",
            titleVi: "Marketing Mix - Chào EMS",
            titleEn: "Marketing Mix - Welcome to EMS",
            categoryVi: "Sự Kiện Tân Sinh Viên",
            categoryEn: "Orientation Event",
            roleVi: "CTV Ban Sự Kiện",
            roleEn: "Event Volunteer",
            year: "2023",
            statusVi: "Hoàn thành",
            statusEn: "Completed",
            descVi: "Tham gia với vai trò CTV Ban sự kiện (01/09/2023 - 02/10/2023) tại sự kiện chào đón tân sinh viên Marketing. Công việc: làm PG cho sự kiện; hỗ trợ bảo an đón khách và điều phối khách mời.",
            descEn: "Event volunteer (Sep 1 – Oct 2, 2023) at the Marketing freshmen orientation event. Duties: PG role at the event; security support for guest reception and guest coordination.",
            image: "assets/images/event_concert.jpg",
            tags: ["PG", "Guest Reception", "Security Support", "Orientation"]
        }
    ],

    // ĐƯỜNG DẪN SỰ NGHIỆP (TIMELINE)
    timeline: {
        experience: [
            {
                period: "2025",
                roleVi: "Takecare MC | Ban Tổ Chức",
                roleEn: "MC Handler | Organizing Committee",
                company: "Marketing Big Day 2025",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Viết kịch bản và thay đổi kịch bản theo yêu cầu của BTC và MC.",
                    "Giữ các vật dụng cá nhân cho MC (điện thoại, ví, túi xách).",
                    "Nhận lệnh từ BTC để báo cho MC biết khi nào cần chuẩn bị và khi nào bước ra sân khấu.",
                    "Truyền đạt mong muốn của BTC đến MC và ngược lại."
                ],
                pointsEn: [
                    "Wrote and revised show scripts based on BTC and MC requirements.",
                    "Managed MC's personal belongings (phone, wallet, bag).",
                    "Received BTC instructions to cue MC for preparation and stage entry.",
                    "Communicated BTC's expectations to MC and vice versa."
                ]
            },
            {
                period: "16/04/2024 - 30/04/2024",
                roleVi: "CTV Hậu Cần",
                roleEn: "Logistics Volunteer",
                company: "Vietnam Youth Debate Tournament",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Lên danh sách, khảo giá, deal giá với nhà cung cấp.",
                    "Chuẩn bị, set-up đồ dùng cho BTC.",
                    "Hỗ trợ các công tác liên quan đến backstage, điều phối.",
                    "Giám sát tiến trình sự kiện, chuẩn bị ánh sáng, kỹ thuật, đạo cụ, ghế ngồi, an ninh."
                ],
                pointsEn: [
                    "Created supplier lists, price surveys, and negotiated deals.",
                    "Prepared and set up equipment for the organizing committee.",
                    "Supported backstage operations and event coordination.",
                    "Monitored event progress; managed lighting, technical, props, seating, and security."
                ]
            },
            {
                period: "01/07/2024 - 30/07/2024",
                roleVi: "CTV Bảo An",
                roleEn: "Security Volunteer",
                company: "Lễ Hội Văn Hóa Nhật Bản Japanwave",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Tham gia đảm bảo an ninh và điều phối khán giả tại lễ hội.",
                    "Hỗ trợ tổ chức không gian và quản lý dòng người tham dự."
                ],
                pointsEn: [
                    "Ensured security and audience coordination at the festival.",
                    "Assisted in space organization and crowd management."
                ]
            },
            {
                period: "03/10/2023 - nay",
                roleVi: "Thành viên Ban Sự Kiện",
                roleEn: "Event Committee Member",
                company: "Marketing Big Day 2023 & 2024",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Hỗ trợ viết Mail & Form cho cuộc thi.",
                    "Lên danh sách và khảo giá các đồ dùng liên quan đến Teabreak dựa trên kinh phí của Ban Điều Hành.",
                    "Chuẩn bị backdrop, standee, dụng cụ cần thiết.",
                    "Hỗ trợ set-up bàn Teabreak.",
                    "Tham gia điều phối sự kiện, takecare đội thi."
                ],
                pointsEn: [
                    "Drafted and sent competition emails and forms.",
                    "Sourced and priced Teabreak supplies within the committee's budget.",
                    "Prepared backdrops, standees, and required equipment.",
                    "Set up Teabreak tables.",
                    "Participated in event coordination and competition team care."
                ]
            },
            {
                period: "01/09/2023 - 02/10/2023",
                roleVi: "CTV Ban Sự Kiện",
                roleEn: "Event Volunteer",
                company: "Marketing Mix - Chào EMS",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Làm PG cho sự kiện chào đón tân sinh viên Marketing.",
                    "Hỗ trợ bảo an đón khách và điều phối khách mời."
                ],
                pointsEn: [
                    "Served as PG at the Marketing freshmen orientation event.",
                    "Supported security in guest reception and guest coordination."
                ]
            }
        ],
        education: [
            {
                period: "2023 - nay",
                roleVi: "Sinh viên Chuyên ngành Marketing",
                roleEn: "Marketing Student",
                company: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Theo học chuyên ngành Marketing tại Học viện Công nghệ Bưu chính Viễn thông.",
                    "Tích cực tham gia các hoạt động ngoại khóa và sự kiện của khoa."
                ],
                pointsEn: [
                    "Studying Marketing at Posts and Telecommunications Institute of Technology.",
                    "Actively participating in extracurricular activities and faculty events."
                ]
            },
            {
                period: "2020 - 2023",
                roleVi: "Tốt nghiệp THPT bằng Giỏi",
                roleEn: "High School Diploma - Excellent",
                company: "Trường THPT Tân Lập",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Tốt nghiệp THPT bằng Giỏi tại trường THPT Tân Lập.",
                    "Từng đạt giải Nhì cấp huyện môn Ngữ Văn (Kì thi HSG THCS)."
                ],
                pointsEn: [
                    "Graduated with Excellence from Tan Lap High School.",
                    "Won 2nd Prize at district-level Literature HSG competition (middle school)."
                ]
            },
            {
                period: "07/2024",
                roleVi: "Chứng Chỉ Tiếng Anh CEFR B2",
                roleEn: "English Certificate CEFR B2",
                company: "British Council - Aptis ESOL (ESOL-0229057)",
                locationVi: "Việt Nam",
                locationEn: "Vietnam",
                pointsVi: [
                    "Đạt chứng chỉ Aptis ESOL International Certificate với mức CEFR B2.",
                    "Ngày thi: 20/07/2024."
                ],
                pointsEn: [
                    "Achieved Aptis ESOL International Certificate at CEFR B2 level.",
                    "Test date: July 20, 2024."
                ]
            },
            {
                period: "2020",
                roleVi: "Chứng Chỉ Tiếng Trung HSK4",
                roleEn: "Chinese Proficiency Certificate HSK Level 4",
                company: "Center for Language Education - China",
                locationVi: "Hà Nội, Việt Nam",
                locationEn: "Hanoi, Vietnam",
                pointsVi: [
                    "Đạt chứng chỉ Tiếng Trung HSK cấp độ 4 (四级).",
                    "Sử dụng Tiếng Trung trung cấp trong giao tiếp và làm việc."
                ],
                pointsEn: [
                    "Achieved HSK Level 4 Chinese Proficiency Certificate.",
                    "Uses intermediate Chinese in communication and professional contexts."
                ]
            }
        ]
    },

    // ĐÁNH GIÁ TỪ ĐỐI TÁC & KHÁCH HÀNG (TESTIMONIALS)
    testimonials: [
        {
            quoteVi: "Thu Hường là một thành viên Ban Sự kiện rất nhiệt tình và có trách nhiệm. Bạn ấy luôn hoàn thành công việc đúng hạn và sẵn sàng hỗ trợ các thành viên khác trong nhóm.",
            quoteEn: "Thu Huong is a very enthusiastic and responsible event committee member. She always completes tasks on time and is ready to support other team members.",
            author: "Ban Tổ Chức",
            titleVi: "Marketing Big Day 2024",
            titleEn: "Marketing Big Day 2024",
            avatar: "assets/images/event_launch.jpg",
            rating: 5
        },
        {
            quoteVi: "Với vai trò Takecare MC tại Marketing Big Day 2025, Thu Hường đã thể hiện khả năng xử lý tình huống nhanh nhạy, giao tiếp tốt và đảm bảo mọi thứ diễn ra suôn sẻ.",
            quoteEn: "As MC Handler at Marketing Big Day 2025, Thu Huong demonstrated quick situational awareness, excellent communication, and ensured everything ran smoothly.",
            author: "BTC Marketing Big Day",
            titleVi: "Thành viên Ban Tổ Chức",
            titleEn: "Organizing Committee Member",
            avatar: "assets/images/event_festival.jpg",
            rating: 5
        },
        {
            quoteVi: "Tham gia với tư cách CTV tại Vietnam Youth Debate Tournament, Thu Hường đã cho thấy khả năng làm việc độc lập, chủ động và linh hoạt trong mọi tình huống.",
            quoteEn: "As a volunteer at Vietnam Youth Debate Tournament, Thu Huong showed independent working ability, initiative, and flexibility in every situation.",
            author: "Ban Tổ Chức VYDT",
            titleVi: "Vietnam Youth Debate Tournament 2024",
            titleEn: "Vietnam Youth Debate Tournament 2024",
            avatar: "assets/images/event_summit.jpg",
            rating: 5
        }
    ],

    // DỊCH VỤ CUNG CẤP (SERVICES OFFERED)
    services: [
        {
            icon: "sparkles",
            titleVi: "Tổ Chức & Hỗ Trợ Sự Kiện",
            titleEn: "Event Organization & Support",
            descVi: "Kinh nghiệm thực tế trong tổ chức, chuẩn bị và điều phối các sự kiện từ nhỏ đến lớn, bao gồm set-up không gian, quản lý đồ dùng và hậu cần.",
            descEn: "Hands-on experience in organizing, preparing, and coordinating events of all scales, including space setup, equipment management, and logistics."
        },
        {
            icon: "users",
            titleVi: "Điều Phối & Takecare MC",
            titleEn: "Coordination & MC Handler",
            descVi: "Hỗ trợ MC trong suốt chương trình, viết và chỉnh sửa kịch bản, truyền đạt thông tin giữa BTC và MC một cách chuyên nghiệp và kịp thời.",
            descEn: "Supporting MC throughout the program, writing and revising scripts, and professionally relaying information between the organizing committee and MC."
        },
        {
            icon: "trending-up",
            titleVi: "Thiết Kế & Sáng Tạo Nội Dung",
            titleEn: "Design & Content Creation",
            descVi: "Thiết kế cơ bản bằng Canva, chỉnh sửa video bằng Capcut cho các tài liệu, social media và ấn phẩm truyền thông của sự kiện.",
            descEn: "Basic design with Canva, video editing with Capcut for event materials, social media content, and promotional collateral."
        },
        {
            icon: "target",
            titleVi: "Quản Lý Hậu Cần & Nhà Cung Cấp",
            titleEn: "Logistics & Vendor Management",
            descVi: "Khảo sát giá, đàm phán với nhà cung cấp, lập kế hoạch mua sắm đồ dùng phù hợp với ngân sách và yêu cầu của sự kiện.",
            descEn: "Price surveys, supplier negotiations, and purchase planning aligned with event budget and requirements."
        }
    ]
};