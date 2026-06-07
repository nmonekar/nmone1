/**
 * هسته بهینه‌سازی تعاملات زنده و سیستم نوری ماتریس ۲۰۲۶
 * بدون نیاز به فریم‌ورک‌های کامپوننت سنگین فرانت‌اند
 */

document.addEventListener('DOMContentLoaded', () => {

    // ۱. سیستم ردیابی نور گرم روی کارت‌های شیشه‌ای (Mouse tracking glow interaction)
    // این اثر لوکس در دسکتاپ فعال شده و افکت بوکه پویا تولید می‌کند.
    const cards = document.querySelectorAll('.glass-dish-card');
    
    if (window.innerWidth > 768) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // ۲. سیستم فیلترینگ اینتراکتیو دسته‌بندی منو بدون ریلود صفحه
    const categoryPills = document.querySelectorAll('.category-pill');
    
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            const selectedCategory = pill.getAttribute('data-cat');
            
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                    // اعمال انیمیشن لود مینی‌مال لحظه‌ای روی کارت آشکار شده
                    card.style.animation = 'fadeInTab 0.4s ease-in-out forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ۳. آبزرور پیشرفته اسکرول برای انیمیشن‌های ورود عمیق صفحه (Scroll Reveal System)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // خروج المان از چرخه پایش برای پرفورمنس حداکثری
            }
        });
    }, observerOptions);

    revealElements.forEach(el => elementObserver.observe(el));

    // ۴. مدیریت بومی رزرواسیون لوکس و رفتارهای دکمه صادرکننده توکن
    const luxuryForm = document.getElementById('luxuryForm');
    if (luxuryForm) {
        luxuryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const customerName = document.getElementById('cust-name').value.trim();
            const customerPhone = document.getElementById('cust-phone').value.trim();
            
            if (customerName && customerPhone) {
                alert(`جناب آقای / سرکار خانم ${customerName} گرامی، \nدرخواست صندلی وی‌آی‌پـی شما پردازش گردید. کد ردیابی اختصاصی تا چند لحظه دیگر پیامک خواهد شد.`);
                luxuryForm.reset();
            }
        });
    }
});
