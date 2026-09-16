/**
 * ==============================================================================
 * MAIN LOGIC & INTERACTION CONTROLLER
 * ==============================================================================
 */

// Application State
const AppState = {
    theme: localStorage.getItem('portfolio_theme') || 'dark',
    lang: localStorage.getItem('portfolio_lang') || 'vi',
    currentSkillCategory: 'event',
    currentProjectFilter: 'all',
    currentTimelineTab: 'experience'
};

// UI Translations dictionary for static elements
const UI_TEXT = {
    vi: {
        navAbout: "Giới thiệu",
        navServices: "Dịch vụ",
        navSkills: "Kỹ năng",
        navProjects: "Dự án",
        navTimeline: "Lộ trình",
        navContact: "Liên hệ",
        btnResume: "Tải Portfolio Deck",
        viewProjects: "Khám Phá Dự Án",
        contactMe: "Tư Vấn Sự Kiện",
        followMe: "Mạng xã hội:",
        sectionAboutTag: "Hồ Sơ Năng Lực",
        sectionAboutTitle: "Định Hình Trải Nghiệm & <span>Thương Hiệu</span>",
        sectionAboutSub: "Kết hợp tư duy thẩm mỹ nghệ thuật cùng khả năng quản trị vận hành chính xác.",
        sectionSkillsTag: "Năng Lực Cốt Lõi",
        sectionSkillsTitle: "Kỹ Năng & <span>Chuyên Môn</span>",
        sectionSkillsSub: "Hệ sinh thái kỹ năng toàn diện từ sáng tạo concept đến điều phối kỹ thuật sân khấu.",
        sectionProjectsTag: "Dự Án Tiêu Biểu",
        sectionProjectsTitle: "Case Studies & <span>Sự Kiện Thực Chiến</span>",
        sectionProjectsSub: "Các dấu ấn sự kiện đỉnh cao và chiến dịch truyền thông đa kênh đã thực hiện.",
        filterAll: "Tất cả",
        filterCorporate: "Hội nghị & B2B",
        filterFestival: "Lễ hội & Festival",
        filterLaunch: "Ra mắt Sản phẩm",
        filterCampaign: "Chiến dịch IMC",
        viewDetails: "Xem chi tiết dự án ➔",
        sectionTimelineTag: "Hành Trình Sự Nghiệp",
        sectionTimelineTitle: "Kinh Nghiệm & <span>Học Vấn</span>",
        tabExperience: "Kinh Nghiệm Thực Chiến",
        tabEducation: "Học Vấn & Chứng Chỉ",
        sectionTestimonialsTag: "Đối Tác Nói Gì",
        sectionTestimonialsTitle: "Nhận Xét Từ <span>Khách Hàng & Đối Tác</span>",
        sectionContactTag: "Hợp Tác Phát Triển",
        sectionContactTitle: "Sẵn Sàng Cho <span>Sự Kiện Tiếp Theo?</span>",
        contactHeading: "Hãy Cùng Tạo Nên Khoảnh Khắc Đột Phá",
        contactDesc: "Bạn đang ấp ủ một sự kiện hoành tráng hoặc chiến dịch marketing lan tỏa? Hãy gửi thông tin để cùng thảo luận ý tưởng concept và báo giá chi tiết.",
        formName: "Họ và tên của bạn",
        formEmail: "Địa chỉ Email",
        formPhone: "Số điện thoại liên hệ",
        formType: "Loại hình dịch vụ quan tâm",
        formTypeSelect: "-- Chọn dịch vụ --",
        formTypeOpt1: "Tổ chức Mega Event / Festival",
        formTypeOpt2: "Hội nghị Quốc tế / B2B Summit",
        formTypeOpt3: "Lễ ra mắt sản phẩm / Activation",
        formTypeOpt4: "Chiến dịch IMC & Booking KOL",
        formMessage: "Chia sẻ ngắn gọn về mục tiêu sự kiện / ngân sách dự kiến",
        formSubmit: "Gửi Yêu Cầu Tư Vấn ➔",
        toastSuccess: "Cảm ơn bạn! Thông tin đã được gửi. Tôi sẽ liên hệ lại trong vòng 24h.",
        toastCopy: "Đã sao chép vào bộ nhớ tạm!"
    },
    en: {
        navAbout: "About",
        navServices: "Services",
        navSkills: "Skills",
        navProjects: "Projects",
        navTimeline: "Career",
        navContact: "Contact",
        btnResume: "Download Deck",
        viewProjects: "Explore Projects",
        contactMe: "Book Consultation",
        followMe: "Follow Me:",
        sectionAboutTag: "Capabilities",
        sectionAboutTitle: "Crafting Experiences & <span>Iconic Brands</span>",
        sectionAboutSub: "Harmonizing creative storytelling with pinpoint stage execution and governance.",
        sectionSkillsTag: "Core Expertise",
        sectionSkillsTitle: "Skills & <span>Proficiencies</span>",
        sectionSkillsSub: "Holistic capabilities from strategic concepts to complex AV stage management.",
        sectionProjectsTag: "Featured Portfolio",
        sectionProjectsTitle: "Case Studies & <span>Live Events</span>",
        sectionProjectsSub: "Landmark celebrations, conferences, and viral integrated campaigns.",
        filterAll: "All",
        filterCorporate: "Conferences & B2B",
        filterFestival: "Festivals & Concerts",
        filterLaunch: "Product Launches",
        filterCampaign: "IMC Campaigns",
        viewDetails: "Explore Case Study ➔",
        sectionTimelineTag: "Career Pathway",
        sectionTimelineTitle: "Experience & <span>Education</span>",
        tabExperience: "Work Experience",
        tabEducation: "Education & Credentials",
        sectionTestimonialsTag: "Client Feedback",
        sectionTestimonialsTitle: "Testimonials From <span>Industry Leaders</span>",
        sectionContactTag: "Let's Connect",
        sectionContactTitle: "Ready For Your <span>Next Big Stage?</span>",
        contactHeading: "Let's Co-create Unforgettable Milestones",
        contactDesc: "Envisioning an iconic live experience or integrated campaign? Share your vision for bespoke concepts and strategic proposals.",
        formName: "Your Full Name",
        formEmail: "Email Address",
        formPhone: "Contact Phone Number",
        formType: "Service Interested In",
        formTypeSelect: "-- Select a Service --",
        formTypeOpt1: "Mega Event & Festival Production",
        formTypeOpt2: "Corporate Summit & B2B Conference",
        formTypeOpt3: "Product Launch & Activation",
        formTypeOpt4: "Integrated IMC & KOL Strategy",
        formMessage: "Tell me briefly about your event goals and target timeline",
        formSubmit: "Send Consultation Request ➔",
        toastSuccess: "Thank you! Your request has been sent. I will be in touch within 24 hours.",
        toastCopy: "Copied to clipboard!"
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(AppState.theme);
    initLanguage();
    renderHero();
    renderStats();
    renderServices();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderTestimonials();
    renderContactInfo();
    setupEventListeners();
    setupScrollReveal();
    setupTypewriter();
});

// Theme Management
function applyTheme(theme) {
    AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Switch to Dark mode');
    }
}

// Language Management
function initLanguage() {
    updateStaticTranslations();
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.textContent = AppState.lang === 'vi' ? '🇻🇳 VN' : '🇬🇧 EN';
    }
}

function switchLanguage() {
    AppState.lang = AppState.lang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('portfolio_lang', AppState.lang);
    initLanguage();
    renderHero();
    renderStats();
    renderServices();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderTestimonials();
    renderContactInfo();
    restartTypewriter();
}

function updateStaticTranslations() {
    const t = UI_TEXT[AppState.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

// Render Hero Section
function renderHero() {
    const isVi = AppState.lang === 'vi';
    const profile = PORTFOLIO_DATA.profile;

    const statusEl = document.getElementById('hero-status-text');
    if (statusEl) statusEl.textContent = isVi ? profile.statusVi : profile.statusEn;

    const nameEl = document.getElementById('hero-profile-name');
    if (nameEl) nameEl.textContent = profile.name;

    const bioEl = document.getElementById('hero-bio');
    if (bioEl) bioEl.textContent = isVi ? profile.bioVi : profile.bioEn;

    const avatarEl = document.getElementById('hero-avatar-img');
    if (avatarEl) avatarEl.src = profile.avatar;
}

// Typewriter Effect
let typewriterTimeout = null;
let currentTitleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function setupTypewriter() {
    typewrite();
}

function restartTypewriter() {
    clearTimeout(typewriterTimeout);
    currentTitleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typewrite();
}

function typewrite() {
    const isVi = AppState.lang === 'vi';
    const titles = isVi ? PORTFOLIO_DATA.profile.titlesVi : PORTFOLIO_DATA.profile.titlesEn;
    const targetElement = document.getElementById('hero-rotator-text');
    if (!targetElement) return;

    const currentTitle = titles[currentTitleIndex];

    if (isDeleting) {
        charIndex--;
        targetElement.textContent = currentTitle.substring(0, charIndex);
    } else {
        charIndex++;
        targetElement.textContent = currentTitle.substring(0, charIndex);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2200; // Pause at end of text
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        speed = 500;
    }

    typewriterTimeout = setTimeout(typewrite, speed);
}

// Render Stats
function renderStats() {
    const isVi = AppState.lang === 'vi';
    const container = document.getElementById('stats-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.stats.map(s => `
        <div class="stat-card">
            <div class="stat-icon">★</div>
            <div class="stat-number-wrap">
                <span class="stat-number" data-target="${s.number}">${s.number}</span>
                <span class="stat-suffix">${s.suffix}</span>
            </div>
            <div class="stat-label">${isVi ? s.labelVi : s.labelEn}</div>
        </div>
    `).join('');
}

// Render Services
function renderServices() {
    const isVi = AppState.lang === 'vi';
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.services.map(srv => `
        <div class="service-card">
            <div class="service-icon-box">⚡</div>
            <div class="service-info">
                <h3>${isVi ? srv.titleVi : srv.titleEn}</h3>
                <p>${isVi ? srv.descVi : srv.descEn}</p>
            </div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const isVi = AppState.lang === 'vi';
    const navContainer = document.getElementById('skills-tab-nav');
    const contentContainer = document.getElementById('skills-content-container');
    if (!navContainer || !contentContainer) return;

    // Render category buttons
    navContainer.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
        <button class="skill-tab-btn ${cat.id === AppState.currentSkillCategory ? 'active' : ''}" 
                onclick="switchSkillCategory('${cat.id}')">
            ${isVi ? cat.nameVi : cat.nameEn}
        </button>
    `).join('');

    // Find active category
    const activeCategory = PORTFOLIO_DATA.skillCategories.find(c => c.id === AppState.currentSkillCategory) || PORTFOLIO_DATA.skillCategories[0];

    contentContainer.innerHTML = activeCategory.skills.map(sk => `
        <div class="skill-card">
            <div class="skill-header">
                <span class="skill-name">${sk.name}</span>
                <span class="skill-percentage">${sk.level}%</span>
            </div>
            <div class="skill-track">
                <div class="skill-fill" style="width: ${sk.level}%"></div>
            </div>
        </div>
    `).join('');
}

window.switchSkillCategory = function (catId) {
    AppState.currentSkillCategory = catId;
    renderSkills();
};

// Render Projects
function renderProjects() {
    const isVi = AppState.lang === 'vi';
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const filtered = AppState.currentProjectFilter === 'all'
        ? PORTFOLIO_DATA.projects
        : PORTFOLIO_DATA.projects.filter(p => p.category === AppState.currentProjectFilter);

    container.innerHTML = filtered.map(p => `
        <div class="project-card">
            <div class="project-thumbnail">
                <img src="${p.image}" alt="${isVi ? p.titleVi : p.titleEn}" loading="lazy">
                <div class="project-category-badge">${isVi ? p.tagVi : p.tagEn}</div>
            </div>
            <div class="project-details-wrap">
                <div class="project-client-tag">${p.client}</div>
                <h3 class="project-title">${isVi ? p.titleVi : p.titleEn}</h3>
                <p class="project-summary">${isVi ? p.summaryVi : p.summaryEn}</p>
                
                <div class="project-metrics-row">
                    ${p.metrics.slice(0, 2).map(m => `
                        <div class="metric-item">
                            <span class="metric-value">${m.value}</span>
                            <span class="metric-label">${isVi ? m.labelVi : m.labelEn}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="project-card-actions">
                    <button class="btn-detail-view" onclick="openProjectModal('${p.id}')">
                        ${isVi ? 'Xem Case Study Chi Tiết ➔' : 'Explore Case Study ➔'}
                    </button>
                    <span style="font-size:0.85rem; color:var(--text-dim); font-weight:600;">
                        ${isVi ? p.roleVi : p.roleEn}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

window.filterProjects = function (category, btnElement) {
    AppState.currentProjectFilter = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderProjects();
};

// Project Details Modal
window.openProjectModal = function (projectId) {
    const isVi = AppState.lang === 'vi';
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-dynamic-content');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${isVi ? project.titleVi : project.titleEn}" class="modal-banner-img">
        <div class="modal-body">
            <div class="modal-tag">${isVi ? project.tagVi : project.tagEn}</div>
            <h2 class="modal-title">${isVi ? project.titleVi : project.titleEn}</h2>
            <div class="modal-client">🏢 ${project.client} • 👤 ${isVi ? project.roleVi : project.roleEn}</div>
            
            <h4 class="modal-section-heading">🎯 ${isVi ? 'Thách Thức Đặt Ra' : 'The Challenge'}</h4>
            <p style="color:var(--text-muted); font-size:0.95rem;">${isVi ? project.challengeVi : project.challengeEn}</p>
            
            <h4 class="modal-section-heading">💡 ${isVi ? 'Giải Pháp Đột Phá' : 'The Solution'}</h4>
            <p style="color:var(--text-muted); font-size:0.95rem;">${isVi ? project.solutionVi : project.solutionEn}</p>

            <h4 class="modal-section-heading">📊 ${isVi ? 'Chỉ Số Thành Tựu' : 'Key Results'}</h4>
            <div class="project-metrics-row" style="margin-top:10px;">
                ${project.metrics.map(m => `
                    <div class="metric-item">
                        <span class="metric-value">${m.value}</span>
                        <span class="metric-label">${isVi ? m.labelVi : m.labelEn}</span>
                    </div>
                `).join('')}
            </div>

            <h4 class="modal-section-heading">📋 ${isVi ? 'Hạng Mục Thực Thi Chính' : 'Key Deliverables'}</h4>
            <ul class="modal-deliverables-list">
                ${(isVi ? project.deliverablesVi : project.deliverablesEn).map(d => `
                    <li>✓ ${d}</li>
                `).join('')}
            </ul>

            <div style="margin-top: 32px; display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="#contact" class="btn btn-primary" onclick="closeProjectModal()">
                    ${isVi ? 'Tư Vấn Sự Kiện Tương Tự' : 'Book Similar Production'}
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Render Timeline
function renderTimeline() {
    const isVi = AppState.lang === 'vi';
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const items = AppState.currentTimelineTab === 'experience'
        ? PORTFOLIO_DATA.timeline.experience
        : PORTFOLIO_DATA.timeline.education;

    container.innerHTML = items.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-box">
                <div class="timeline-header">
                    <span class="timeline-period">${item.period}</span>
                    <span style="font-size:0.85rem; color:var(--text-dim);">${item.locationVi ? (isVi ? item.locationVi : item.locationEn) : ''}</span>
                </div>
                <h3 class="timeline-role">${isVi ? item.roleVi : item.roleEn}</h3>
                <div class="timeline-company">🏢 ${item.company}</div>
                <ul class="timeline-points">
                    ${(isVi ? item.pointsVi : item.pointsEn).map(pt => `
                        <li>${pt}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

window.switchTimelineTab = function (tabType, btnElement) {
    AppState.currentTimelineTab = tabType;
    document.querySelectorAll('.timeline-tab-toggle .btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderTimeline();
};

// Render Testimonials
function renderTestimonials() {
    const isVi = AppState.lang === 'vi';
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
        <div class="testimonial-card">
            <div>
                <div class="stars-rating">★★★★★</div>
                <p class="testimonial-quote">"${isVi ? t.quoteVi : t.quoteEn}"</p>
            </div>
            <div class="testimonial-author-wrap">
                <img src="${t.avatar}" alt="${t.author}" class="author-avatar">
                <div>
                    <div class="author-name">${t.author}</div>
                    <div class="author-title">${isVi ? t.titleVi : t.titleEn}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Contact Info
function renderContactInfo() {
    const isVi = AppState.lang === 'vi';
    const profile = PORTFOLIO_DATA.profile;

    const emailEl = document.getElementById('contact-email-val');
    if (emailEl) emailEl.textContent = profile.email;

    const phoneEl = document.getElementById('contact-phone-val');
    if (phoneEl) phoneEl.textContent = profile.phone;

    const locationEl = document.getElementById('contact-location-val');
    if (locationEl) locationEl.textContent = isVi ? profile.locationVi : profile.locationEn;
}

// Event Listeners Setup
function setupEventListeners() {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // Language Toggle
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', switchLanguage);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close on nav link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar Scroll Effect & Back To Top
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Modal click outside to close & Escape key
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳ Đang gửi...';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                contactForm.reset();
                showToast(UI_TEXT[AppState.lang].toastSuccess);
            }, 800);
        });
    }
}

// Copy to Clipboard
window.copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(UI_TEXT[AppState.lang].toastCopy);
    });
};

// Toast Notification
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutToast 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// Scroll Reveal
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
}
