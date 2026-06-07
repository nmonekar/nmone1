/**
 * مینی‌مال اسکریپت تخصصی ررزواسیون عمارت مینو
 * سبک، بدون پیچیدگی و متمرکز بر هندلینگ سریع منطق فرانت‌اند
 */
document.addEventListener('DOMContentLoaded', () => {
    
    const bookingForm = document.getElementById('pureBookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // دریافت مقادیر ورودی جهت ارسال به سرور یا پنل پیامکی مدیریت
            const name = document.getElementById('res-name').value.trim();
            const phone = document.getElementById('res-phone').value.trim();
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;

            if (name && phone && date && time) {
                // شبیه‌سازی الرت لودینگ لوکس و تاییدیه سریع
                alert(`با تشکر از شما میهمان گرامی، جناب آقای/سرکار خانم ${name} \nدرخواست صندلی شما برای تاریخ ${date} ثبت اولیه شد. توکن پیگیری تا چند لحظه دیگر پیامک خواهد شد.`);
                bookingForm.reset();
            } else {
                alert('لطفاً تمامی فیلدهای فرم ررزواسیون را با دقت تکمیل نمایید.');
            }
        });
    }
});
