/* ==========================================================================
   طراحی سیستم رنگی گرم لوکس و اشتهاآور - فاقد رنگ سفید مطلق
   ========================================================================== */
:root {
    --bg-espresso: #1B120E;     /* قهوه‌ای عمیق اسپرسو - ایجاد حس گرمای محیط */
    --bg-smoke: #0E0E0E;        /* مشکی دودی سینمایی پس‌زمینه */
    --accent-caramel: #C08A5B;  /* کاراملی گرم برای دکمه‌ها و جلب توجه */
    --accent-cream: #F5E6D3;    /* کرم ملایم برای متون اصلی با کنتراست بالا */
    --accent-gold: #D4AF37;     /* طلایی لوکس مات برای جزئیات وی‌آی‌پی */
    --text-muted: #A39382;      /* کرم تیره مات برای توضیحات فرعی */
    
    --glass-surface: rgba(27, 18, 14, 0.7);
    --border-subtle: rgba(192, 138, 91, 0.15);
    --shadow-premium: 0 30px 60px rgba(0, 0, 0, 0.6);
    --transition-cinema: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    --font-primary: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* ساختار ریست و جهت‌دهی فارسی */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: var(--bg-smoke);
}

body {
    background-color: var(--bg-smoke);
    color: var(--accent-cream);
    font-family: var(--font-primary);
    line-height: 1.65;
    overflow-x: hidden;
    text-align: right;
}

.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.max-width-md { max-width: 800px; }
.max-width-sm { max-width: 650px; }
.text-gold { color: var(--accent-gold); }
.gold-text { color: var(--accent-gold); }
.mt-24 { margin-top: 24px; }

/* موتور نورپردازی و افکت ذرات شناور سینمایی */
.cinematic-ambience {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0; left: 0; z-index: -1;
    pointer-events: none;
    overflow: hidden;
}
.warm-glow-orb {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(192, 138, 91, 0.06) 0%, transparent 70%);
    top: 20%; right: -10%;
    filter: blur(80px);
}
.steam-particle {
    position: absolute;
    background: rgba(245, 230, 211, 0.15);
    border-radius: 50%;
    filter: blur(4px);
}
.particle-1 { width: 80px; height: 80px; top: 70%; left: 10%; animation: floatSteam 12s infinite linear; }
.particle-2 { width: 120px; height: 120px; top: 40%; right: 15%; animation: floatSteam 18s infinite linear reverse; }
@keyframes floatSteam {
    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.2; }
    50% { transform: translateY(-40px) scale(1.1) rotate(180deg); opacity: 0.4; }
    100% { transform: translateY(0) scale(1) rotate(360deg); opacity: 0.2; }
}

/* دکمه‌های پرمیوم و بهینه‌سازی شده سیستم */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-family: var(--font-primary);
    font-weight: 700;
    text-decoration: none;
    border-radius: 12px;
    transition: var(--transition-cinema);
    cursor: pointer;
    border: none;
    font-size: 0.95rem;
}
.btn-caramel {
    background: linear-gradient(135deg, var(--accent-caramel), #A06D42);
    color: var(--bg-smoke);
    padding: 16px 36px;
    box-shadow: 0 10px 30px rgba(192, 138, 91, 0.2);
}
.btn-caramel:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(192, 138, 91, 0.35);
}
.btn-outline {
    background: transparent;
    color: var(--accent-cream);
    border: 1px solid rgba(245, 230, 211, 0.2);
    padding: 16px 36px;
}
.btn-outline:hover {
    background: rgba(245, 230, 211, 0.04);
    border-color: var(--accent-caramel);
    color: var(--accent-caramel);
    transform: translateY(-2px);
}
.btn-gold {
    background: linear-gradient(135deg, var(--accent-gold), #B5932A);
    color: var(--bg-smoke);
    padding: 14px 28px;
}
.btn-sm { font-size: 0.85rem; border-radius: 8px; padding: 10px 20px; }
.btn-full { width: 100%; }

/* هدر لوکس با شیشه معلق مدرن */
.main-header {
    position: fixed;
    top: 0; left: 0; width: 100%; z-index: 1000;
    background: rgba(14, 14, 14, 0.8);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(192, 138, 91, 0.1);
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
}
.restaurant-logo {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    line-height: 1;
}
.logo-accent { font-size: 1.4rem; font-weight: 900; letter-spacing: 0.05em; color: var(--accent-cream); }
.logo-sub { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.3em; color: var(--accent-caramel); margin-top: 4px; }

.nav-container {
    position: fixed;
    top: 90px; right: -100%;
    width: 100%; height: calc(100vh - 90px);
    background: var(--bg-smoke);
    padding: 40px 24px;
    transition: var(--transition-cinema);
}
.nav-container.active { right: 0; }
.nav-menu { list-style: none; display: flex; flex-direction: column; gap: 32px; }
.nav-link { text-decoration: none; color: var(--text-muted); font-weight: 600; font-size: 1.2rem; transition: var(--transition-cinema); }
.nav-link:hover, .nav-link.active { color: var(--accent-caramel); padding-right: 6px; }

.menu-hamburger {
    background: transparent; border: none; cursor: pointer;
    display: flex; flex-direction: column; gap: 8px;
}
.menu-hamburger .line { width: 28px; height: 2px; background-color: var(--accent-caramel); border-radius: 2px; transition: var(--transition-cinema); }
.menu-hamburger.active .line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
.menu-hamburger.active .line:nth-child(2) { transform: translateY(-5px) rotate(-45deg); }
.desktop-only { display: none; }

/* بخش هیرو سینمایی باشکوه */
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 20px 60px;
    overflow: hidden;
}
.hero-parallax-bg {
    position: absolute;
    inset: 0; z-index: -1;
}
.hero-img {
    width: 100%; height: 100%; object-fit: cover;
    transform: scale(1.05);
    filter: brightness(45%) contrast(105%);
}
.hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, var(--bg-smoke) 5%, transparent 60%);
}
.hero-contentcontainer { max-width: 700px; margin: 0 auto; text-align: center; }
.premium-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(192, 138, 91, 0.1);
    border: 1px solid var(--border-subtle);
    padding: 6px 16px;
    border-radius: 99px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-caramel);
    margin-bottom: 24px;
}
.hero-title { font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 900; line-height: 1.25; margin-bottom: 24px; }
.hero-subtitle { color: var(--text-muted); font-size: clamp(1rem, 2.5vw, 1.25rem); margin-bottom: 40px; }
.hero-cta-group { display: flex; flex-direction: column; gap: 16px; justify-content: center; }

.scroll-indicator {
    position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 0.75rem; color: var(--text-muted);
}
.mouse-wheel {
    width: 20px; height: 35px; border: 2px solid var(--border-subtle); border-radius: 10px; position: relative;
}
.mouse-wheel::before {
    content: ''; position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
    width: 4px; height: 8px; background-color: var(--accent-caramel); border-radius: 2px;
    animation: scrollMouse 1.5s infinite;
}
@keyframes scrollMouse { 0% { opacity: 1; top: 6px; } 100% { opacity: 0; top: 18px; } }

/* سرفصل‌های هماهنگ ساختار */
.section-title-wrapper { margin-bottom: 40px; }
.section-title-wrapper-center { text-align: center; margin-bottom: 48px; }
.sub-title { font-size: 0.85rem; font-weight: 800; color: var(--accent-caramel); display: block; margin-bottom: 8px; letter-spacing: 0.05em; }
.main-title { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; }

/* بخش منو داستانی مبتنی بر تب */
.menu-section { padding: 100px 0; }
.menu-tabs {
    display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 40px;
    border-bottom: 1px solid rgba(192, 138, 91, 0.1); padding-bottom: 16px;
}
.tab-btn {
    background: transparent; border: none; color: var(--text-muted);
    padding: 10px 20px; font-family: var(--font-primary); font-size: 0.95rem;
    font-weight: 700; cursor: pointer; transition: var(--transition-cinema);
    border-radius: 8px;
}
.tab-btn:hover, .tab-btn.active { color: var(--accent-caramel); background: rgba(192, 138, 91, 0.05); }

.tab-content-panel { display: none; }
.tab-content-panel.active { display: block; animation: fadeInTab 0.5s ease-in-out forwards; }
@keyframes fadeInTab { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.dishes-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }

/* کارت‌های غذا با استایل شیشه‌ای لوکس (Glass UI) */
.glass-glow-card {
    background: rgba(27, 18, 14, 0.4);
    border: 1px solid var(--border-subtle);
    border-radius: 24px;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: var(--transition-cinema);
}
.glass-glow-card:hover {
    border-color: var(--accent-caramel);
    box-shadow: 0 15px 40px rgba(192, 138, 91, 0.15);
    transform: translateY(-4px);
}
.dish-img-box { position: relative; width: 100%; height: 220px; overflow: hidden; }
.dish-img-box img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition-cinema); }
.glass-glow-card:hover .dish-img-box img { transform: scale(1.04); }

.dish-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.dish-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 10px; }
.dish-header h3 { font-size: 1.25rem; font-weight: 800; color: var(--accent-cream); }
.dish-price { color: var(--accent-caramel); font-weight: 900; font-size: 1.15rem; white-space: nowrap; }
.dish-desc { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px; flex: 1; }
.btn-order {
    background: transparent; border: 1px solid rgba(192, 138, 91, 0.3);
    color: var(--accent-cream); padding: 12px; border-radius: 12px;
    font-family: var(--font-primary); font-weight: 700; cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: var(--transition-cinema);
}
.glass-glow-card:hover .btn-order {
    background: var(--accent-caramel); color: var(--bg-smoke); border-color: var(--accent-caramel);
}

/* بخش شاهکارهای سرآشپز (کاروسل اختصاصی) */
.signature-section { padding: 100px 0; background-color: rgba(14, 14, 14, 0.5); }
.carousel-container { position: relative; overflow: hidden; padding: 20px 4px; }
.carousel-track { display: flex; gap: 20px; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); will-change: transform; }
.carousel-item {
    flex: 0 0 280px; background: var(--bg-espresso); border-radius: 24px; overflow: hidden;
    box-shadow: var(--shadow-premium); position: relative; height: 380px;
}
.carousel-item img { width: 100%; height: 100%; object-fit: cover; filter: brightness(75%); transition: var(--transition-cinema); }
.carousel-item:hover img { transform: scale(1.03); filter: brightness(85%); }
.carousel-info { position: absolute; bottom: 0; right: 0; width: 100%; padding: 24px; background: linear-gradient(to top, rgba(14,14,14,0.95), transparent); }
.carousel-info h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 6px; }
.carousel-info p { color: var(--text-muted); font-size: 0.85rem; }

.carousel-nav { display: flex; justify-content: center; gap: 16px; margin-top: 32px; }
.nav-arrow {
    width: 50px; height: 50px; border-radius: 50%; background: var(--bg-espresso);
    border: 1px solid var(--border-subtle); color: var(--accent-cream); cursor: pointer;
    display: flex; align-items: center; justify-content: center; font-size: 1rem;
    transition: var(--transition-cinema);
}
.nav-arrow:hover { background: var(--accent-caramel); color: var(--bg-smoke); border-color: var(--accent-caramel); }

/* بخش فلسفه و اصالت آشپزخانه مینو */
.philosophy-section { padding: 100px 0; }
.philosophy-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
.philosophy-desc { color: var(--text-muted); margin-bottom: 32px; text-align: justify; }
.chef-signature-box { display: flex; align-items: center; gap: 16px; }
.chef-avatar { width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 2px solid var(--accent-caramel); }
.chef-avatar img { width: 100%; height: 100%; object-fit: cover; }
.chef-signature-box h4 { font-size: 1.05rem; font-weight: 800; }
.chef-signature-box p { font-size: 0.85rem; color: var(--accent-caramel); }

.visual-wrapper { position: relative; border-radius: 28px; overflow: hidden; height: 320px; box-shadow: var(--shadow-premium); }
.visual-wrapper img { width: 100%; height: 100%; object-fit: cover; }
.floating-badge-experience {
    position: absolute; bottom: 24px; right: 24px; left: 24px;
    background: rgba(27, 18, 14, 0.85); backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); border: 1px solid var(--border-subtle);
    padding: 16px 24px; border-radius: 16px; display: flex; align-items: center; gap: 16px;
}
.floating-badge-experience .num { font-size: 2.2rem; font-weight: 900; color: var(--accent-gold); line-height: 1; }
.floating-badge-experience .lbl { font-size: 0.85rem; font-weight: 700; color: var(--accent-cream); }

/* فریم پیشرفته رزرواسیون VIP */
.booking-section { padding: 100px 0; background: radial-gradient(circle at center, #231813 0%, var(--bg-smoke) 70%); }
.glass-booking-card {
    background: rgba(14, 14, 14, 0.6); backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); border: 1px solid var(--border-subtle);
    padding: 32px 20px; border-radius: 32px; box-shadow: var(--shadow-premium);
}
.booking-header { text-align: center; margin-bottom: 32px; }
.booking-header h2 { font-size: 1.8rem; font-weight: 900; margin-top: 6px; margin-bottom: 12px; }
.booking-header p { color: var(--text-muted); font-size: 0.9rem; }

.form-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 0.85rem; font-weight: 700; color: var(--accent-cream); }
.input-wrapper { position: relative; display: flex; align-items: center; }
.input-wrapper i { position: absolute; right: 16px; color: var(--accent-caramel); font-size: 1.05rem; pointer-events: none; }
.input-wrapper input, .input-wrapper select {
    width: 100%; background: #17100D; border: 1px solid rgba(192, 138, 91, 0.1);
    padding: 14px 44px 14px 16px; border-radius: 12px; color: var(--accent-cream);
    font-family: var(--font-primary); font-size: 0.95rem; outline: none;
    transition: var(--transition-cinema);
}
.input-wrapper input:focus, .input-wrapper select:focus {
    border-color: var(--accent-caramel); background: #231813;
    box-shadow: 0 0 15px rgba(192, 138, 91, 0.1);
}

/* بخش نظرات کارشناسان طعم */
.testimonials-section { padding: 100px 0; }
.stack-wrapper { position: relative; margin-top: 32px; }
.testi-card {
    background: var(--bg-espresso); border: 1px solid var(--border-subtle);
    padding: 32px 24px; border-radius: 24px; box-shadow: var(--shadow-premium);
}
.rating-stars { color: var(--accent-gold); font-size: 0.85rem; margin-bottom: 16px; }
.testi-text { font-size: 1.05rem; font-style: italic; color: var(--accent-cream); line-height: 1.8; margin-bottom: 20px; }
.testi-user { font-size: 0.85rem; font-weight: 700; color: var(--accent-caramel); display: block; }

/* بخش موقعیت مکانی ماتریکس */
.location-section { padding: 100px 0; }
.location-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
.map-placeholder { height: 300px; border-radius: 28px; overflow: hidden; border: 1px solid var(--border-subtle); }
.dark-map-ui {
    width: 100%; height: 100%; background: #130D0B; display: flex;
    flex-direction: column; align-items: center; justify-content: center;
    padding: 24px; text-align: center; color: var(--text-muted); gap: 16px;
}
.map-pin {
    font-size: 2.5rem; color: var(--accent-caramel);
    animation: bouncePin 2s infinite ease-in-out;
}
@keyframes bouncePin { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.location-info-side { display: flex; flex-direction: column; justify-content: center; }
.address-text { font-size: 1.1rem; font-weight: 600; margin-bottom: 24px; display: flex; gap: 12px; align-items: flex-start; }
.working-hours-box { background: var(--bg-espresso); border-radius: 20px; padding: 24px; margin-bottom: 32px; border: 1px solid var(--border-subtle); }
.working-hours-box h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 16px; }
.hours-row { display: flex; justify-content: space-between; font-size: 0.9rem; padding: 8px 0; border-bottom: 1px solid rgba(192, 138, 91, 0.05); }
.hours-row:last-child { border-bottom: none; }

/* دکمه‌های چسبان و شناور پایین (موبایل بهینه) */
.sticky-action-bar {
    position: fixed; bottom: 0; left: 0; width: 100%; height: 65px;
    display: flex; z-index: 999; box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
}
.sticky-btn {
    flex: 1; display: flex; align-items: center; justify-content: center;
    gap: 10px; color: var(--bg-smoke); text-decoration: none; font-weight: 800; font-size: 0.9rem;
}
.whatsapp-color { background-color: #25D366; color: #fff; }
.reserve-color { background-color: var(--accent-caramel); color: var(--bg-smoke); }
.sticky-lbl { display: inline; }

/* فوتر باشکوه رستوران */
.luxury-footer { background: #080504; border-top: 1px solid var(--border-subtle); padding: 60px 0 30px; }
.footer-layout { display: grid; grid-template-columns: 1fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid rgba(192, 138, 91, 0.05); }
.footer-brand-column h3 { font-size: 1.6rem; font-weight: 900; color: var(--accent-cream); margin-bottom: 16px; }
.footer-brand-column p { color: var(--text-muted); font-size: 0.9rem; max-width: 320px; margin-bottom: 20px; }
.social-medias { display: flex; gap: 16px; }
.social-medias a { color: var(--accent-caramel); font-size: 1.2rem; transition: var(--transition-cinema); }
.social-medias a:hover { color: var(--accent-cream); transform: translateY(-3px); }

.footer-links-column h4, .footer-contact-column h4 { font-size: 1.05rem; font-weight: 800; color: var(--accent-caramel); margin-bottom: 20px; }
.footer-links-column ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.footer-links-column a { text-decoration: none; color: var(--accent-cream); font-size: 0.9rem; transition: var(--transition-cinema); }
.footer-links-column a:hover { color: var(--accent-caramel); padding-right: 4px; }
.footer-contact-column p { font-size: 0.9rem; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }

.footer-bottom { padding-top: 24px; text-align: center; font-size: 0.8rem; color: var(--text-muted); }

/* کلاس انیمیشن آشکارسازی اسکرول */
.scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal.revealed { opacity: 1; transform: translateY(0); }

/* ==========================================================================
   مدیریت رسپانسیو کاملاً بهینه‌سازی شده برای تمام ابعاد و پلتفرم‌ها
   ========================================================================== */
@media (min-width: 425px) {
    .hero-cta-group { flex-direction: row; }
    .hero-cta-group .btn { flex: 1; }
}

@media (min-width: 768px) {
    body { padding-bottom: 0; } /* حذف فضای خالی پایین در دسکتاپ */
    .sticky-action-bar {
        position: fixed; bottom: 30px; left: 30px; width: auto; height: auto;
        flex-direction: column; gap: 12px; background: transparent; box-shadow: none;
    }
    .sticky-btn {
        width: 55px; height: 55px; border-radius: 50%; box-shadow: var(--shadow-premium);
    }
    .sticky-lbl { display: none; } /* پنهان کردن متن و نمایش آیکونی در دسکتاپ */
    .whatsapp-color { color: #fff; }

    .desktop-only { display: inline-flex; }
    .menu-hamburger { display: none; }
    .nav-container { position: static; width: auto; height: auto; background: transparent; padding: 0; }
    .nav-menu { flex-direction: row; gap: 24px; }
    .nav-link { font-size: 0.95rem; }
    .nav-link:hover, .nav-link.active { padding-right: 0; border-bottom: 1px solid var(--accent-caramel); }

    .hero-cta-group .btn { flex: initial; }
    .dishes-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
    .carousel-item { flex: 0 0 340px; height: 420px; }
    .philosophy-grid { grid-template-columns: 1.1fr 0.9fr; gap: 48px; }
    .visual-wrapper { height: 400px; }
    .form-grid { grid-template-columns: repeat(2, 1fr); }
    .full-width { grid-column: span 2; }
    .location-grid { grid-template-columns: 1.1fr 0.9fr; gap: 48px; }
    .map-placeholder { height: auto; min-height: 380px; }
    .footer-layout { grid-template-columns: 1.5fr 1fr 1fr; }
}

@media (min-width: 1024px) {
    .nav-menu { gap: 36px; }
    .dishes-grid { grid-template-columns: repeat(3, 1fr); }
    .carousel-item { flex: 0 0 380px; height: 460px; }
}
