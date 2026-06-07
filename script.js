/**
 * موتور انیمیشن و تعامل سینمایی سال ۲۰۲۶ - عمارت مینو
 * فرانت‌اند کاملاً بهینه بدون استفاده از فریم‌ورک کامپوننت سنگین
 */

document.addEventListener('DOMContentLoaded', () => {

    // ۱. مدیریت منوی موبایل و هدر معلق
    const menuHamburger = document.getElementById('menu-hamburger');
    const navContainer = document.getElementById('nav-container');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuHamburger) {
        menuHamburger.addEventListener('click', () => {
            const isMenuOpen = navContainer.classList.toggle('active');
            menuHamburger.classList.toggle('active');
            document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuHamburger.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflowY = 'auto';
        });
    });

    // ۲. سیستم تغییر لایه‌های تب کارت منو داستانی
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ۳. موتور کاروسل اختصاصی اینرسی شاهکارهای سرآشپز
    const track = document.getElementById('carousel-track');
    const nextBtn = document.getElementById('carousel-next');
    const prevBtn = document.getElementById('carousel-prev');
    
    if (track && nextBtn && prevBtn) {
        let currentIndex = 0;

        function getSlideWidth() {
            const item = track.querySelector('.carousel-item');
            return item ? item.offsetWidth + 20 : 360; // پهنا به همراه گپ ۲۰ پیکسلی
        }

        function updateCarouselPosition() {
            const slideWidth = getSlideWidth();
            const maxScrollIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / slideWidth);
            
            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex > maxScrollIndex) currentIndex = maxScrollIndex;

            // اعمال حرکت راست‌چین جابجایی
            track.style.transform = `translateX(${currentIndex * slideWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarouselPosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarouselPosition();
        });

        window.addEventListener('resize', updateCarouselPosition);
    }

    // ۴. اینترسکشن آبزرور پیشرفته جهت آشکارسازی المان‌ها هنگام اسکرول (Scroll Reveal)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => scrollObserver.observe(el));

    // ۵. شبیه‌سازی افکت پارالاکس ملایم در پس‌زمینه هیرو هنگام اسکرول صفحه
    const heroImg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
        if (heroImg && window.innerWidth > 768) {
            const scrollValue = window.scrollY;
            heroImg.style.transform = `scale(1.05) translateY(${scrollValue * 0.15}px)`;
        }
    });
});
