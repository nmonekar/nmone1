/**
 * AUREUM - پورتفولیو فرانت‌اند فوقِ لوکس بهینه‌سازی‌شده برای موبایل
 */

const premiumProducts = [
    {
        id: 1,
        title: "اوروم تایتان پرو (نسخه امپریال)",
        category: "smartphones",
        price: "۱۴۵,۰۰۰,۰۰۰",
        discount: "نسخه شماره‌دار انحصاری",
        rating: 5,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        desc: "نهایتِ مهندسی ابزارهای لوکس. مجهز به شاسی تقویت‌شده از تیتانیوم گرید ۵ و آبکاری طلای ۲۴ عیار به ضخامت ۷ میکرون. پنل پشتی با چرم تمساح طبیعی بافت‌دار تزیین شده است تا هر بار لمس آن، حس بی‌بدیل قدرت را تداعی کند.",
        specs: { "متریال بدنه": "طلای خالص ۲۴ عیار و تیتانیوم زرهی", "پیکربندی هسته": "۱ ترابایت حافظه / ۲۴ گیگابایت رم", "امنیتی": "تراشه رمزنگاری کوانتومی بیومتریک" }
    },
    {
        id: 2,
        title: "زمان‌سنج هوشمند کرونوس گلد",
        category: "watches",
        price: "۹۸,۰۰۰,۰۰۰",
        discount: "کالکشن اشرافی ۲۰۲۶",
        rating: 5,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600",
        desc: "تلاقی اصالتِ موتورهای مکانیکی سوئیسی و هوشمندی تکرارناپذیر مانیتورینگ بیومتریک مدرن. قاب دور این شاهکار از طلای ۱۸ عیار رزگلد مات صیقل خورده و بند چرمی آن هنر دست استادکاران فلورانس ایتالیاست.",
        specs: { "جنس شاسی": "طلا ۱۸ عیار رزگلد با پولیش الماسه", "پوشش نمایشگر": "بلور یاقوت کبود ضد خش", "سنسور انحصاری": "آنالیز آنی پالس‌های قلبی" }
    },
    {
        id: 3,
        title: "هدست آکوستیک مجستیک ANC",
        category: "headphones",
        price: "۵۴,۰۰۰,۰۰۰",
        discount: "سفارشی استودیو پلاتین",
        rating: 5,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600",
        desc: "برای کسانی که کمال فرکانس‌های صدا را به شکل یک ارکستر خصوصی می‌طلبند. بالشتک‌های ارگونومیک پوشانده شده از چمر گوسفندی نرم نپا و درایورهای توسعه‌یافته از متریال گران‌بهای برلیوم برای خلوص بی‌نقص فرکانس‌ها.",
        specs: { "نوع درایور": "۵۰ میلی‌متری مگنتیک سفارشی", "فناوری ایزولاسیون": "Active Noise Cancellation", "مفصل‌ها": "فولاد ضد زنگ با روکش پلاتینیم" }
    },
    {
        id: 4,
        title: "منبع انرژی والت اکستریم",
        category: "accessories",
        price: "۱۸,۵۰۰,۰۰۰",
        discount: "تعداد محدود",
        rating: 4,
        image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&q=80&w=600",
        desc: "پاوربانک خاص با معماری خازن‌های متراکم گرافنی جهت شارژ پایدار و ایمن ابزارهای هوشمند شما بر روی میزهای مدیریت. پوشش بدنه با فینیش مخملی مشکی و رگه‌های طلای برس‌خورده مزین شده است.",
        specs: { "ظرفیت اسمی": "۳۵,۰۰۰ میلی‌آمپر بر پایه گرافن", "توان خروجی": "۱۴۰ وات پروتکل PD 3.1", "امنیت حرارتی": "سیستم پایش دما مدار" }
    },
    {
        id: 5,
        title: "داک مغناطیسی هایپرفلاکس",
        category: "accessories",
        price: "۱۲,۰۰۰,۰۰۰",
        discount: "موجود در عمارت",
        rating: 5,
        image: "https://images.unsplash.com/photo-1622445262973-ac56bd986872?auto=format&fit=crop&q=80&w=600",
        desc: "پایه شارژ بی‌سیم مگ‌سیف با جاذبه فوق‌العاده پایدار مغناطیسی. تلفیقی چشم‌نواز از ساختار سنگین برنج سنتی صیقل‌خورده و سطح بالایی از چرم دباغی‌شده توسکانی.",
        specs: { "استاندارد فرستنده": "نسل دوم پروتکل Qi2", "خروجی بی‌سیم": "۲۵ وات پایدار بدون افت توان", "جنس پایه": "برنج جامد صیقلی" }
    },
    {
        id: 6,
        title: "اوروم سولیس فولد",
        category: "smartphones",
        price: "۲۱۰,۰۰۰,۰۰۰",
        discount: "شاهکار کلکسیونی",
        rating: 5,
        image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?auto=format&fit=crop&q=80&w=600",
        desc: "بی‌نظیرترین دستاورد مهندسی مواد در قرن حاضر. تلفن هوشمندی که مانند یک دیوان چرمی اصیل باز شده و نمایشگر بدون مرز الترا آمولد ۸.۱ اینچی را در برابر چشمان شما می‌گستراند.",
        specs: { "مکانیزم بازشو": "لولای هیدرولیک طلای مایع", "پنل اصلی": "۸.۱ اینچ اینفینیتی فولد", "حافظه و پردازش": "۳۲ گیگابایت رم DDR5X" }
    }
];

let cart = [];
let wishlistCountValue = 0;
let displayedProducts = [...premiumProducts];

const elements = {
    loader: document.getElementById('loader'),
    productsGrid: document.getElementById('productsGrid'),
    categories: document.querySelectorAll('.category-card'),
    searchInput: document.getElementById('searchInput'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    cartToggleBtn: document.getElementById('cartToggleBtn'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartCount: document.getElementById('cartCount'),
    wishlistCount: document.getElementById('wishlistCount'),
    mobileToggle: document.getElementById('mobileToggle'),
    navMenu: document.getElementById('navMenu'),
    productModal: document.getElementById('productModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalBody: document.getElementById('modalBody'),
    newsletterForm: document.getElementById('newsletterForm'),
    checkoutBtn: document.getElementById('checkoutBtn')
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if(elements.loader) {
            elements.loader.style.opacity = '0';
            setTimeout(() => elements.loader.style.display = 'none', 500);
        }
    }, 1000);

    renderProducts(displayedProducts);
});

function renderProducts(productsList) {
    if (!elements.productsGrid) return;
    elements.productsGrid.innerHTML = '';
    
    if (productsList.length === 0) {
        elements.productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 50px 0;">
                هیچ اثر فناوری خاصی منطبق با فیلتر شما یافت نشد.
            </div>`;
        return;
    }

    productsList.forEach(product => {
        const stars = Array(5).fill('').map((_, idx) => 
            `<i class="${idx < product.rating ? 'fas' : 'far'} fa-star"></i>`
        ).join('');

        const badgeHTML = product.discount ? `<span class="badge-discount">${product.discount}</span>` : '';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-box">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-overlay-actions">
                    <div class="action-btn quick-view-btn" data-id="${product.id}"><i class="fas fa-eye"></i></div>
                    <div class="action-btn fav-btn"><i class="far fa-heart"></i></div>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">${stars}</div>
                <div class="product-price-row">
                    <span class="product-price">${product.price} تومان</span>
                    <button class="btn-add-cart" data-id="${product.id}">تصاحب اثر</button>
                </div>
            </div>
        `;
        elements.productsGrid.appendChild(card);
    });

    bindCardEvents();
}

function bindCardEvents() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        });
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const currentTarget = e.target.closest('.quick-view-btn');
            const id = parseInt(currentTarget.getAttribute('data-id'));
            showProductModalDetails(id);
        });
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const heartIcon = e.target.closest('.fav-btn').querySelector('i');
            if(heartIcon.classList.contains('far')) {
                heartIcon.className = 'fas fa-heart';
                heartIcon.style.color = 'var(--primary-gold)';
                wishlistCountValue++;
            } else {
                heartIcon.className = 'far fa-heart';
                heartIcon.style.color = '';
                wishlistCountValue--;
            }
            if(elements.wishlistCount) elements.wishlistCount.textContent = wishlistCountValue;
        });
    });
}

elements.categories.forEach(tab => {
    tab.addEventListener('click', () => {
        elements.categories.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');

        const cat = tab.getAttribute('data-category');
        displayedProducts = cat === 'all' ? [...premiumProducts] : premiumProducts.filter(p => p.category === cat);
        renderProducts(displayedProducts);
    });
});

// همگام‌سازی تابع سرچ برای هر دو نسخه اینپوت دسکتاپ و موبایل
const handleSearch = (e) => {
    const value = e.target.value.toLowerCase().trim();
    const activeCat = document.querySelector('.category-card.active').getAttribute('data-category');
    
    let targetScope = premiumProducts;
    if(activeCat !== 'all') {
        targetScope = premiumProducts.filter(p => p.category === activeCat);
    }

    const filtered = targetScope.filter(p => 
        p.title.toLowerCase().includes(value) || 
        p.desc.toLowerCase().includes(value)
    );
    renderProducts(filtered);
};

if(elements.searchInput) elements.searchInput.addEventListener('input', handleSearch);
if(elements.mobileSearchInput) elements.mobileSearchInput.addEventListener('input', handleSearch);

function addToCart(prodId, count = 1) {
    const foundIdx = cart.findIndex(c => c.id === prodId);
    if(foundIdx > -1) {
        cart[foundIdx].qty += count;
    } else {
        const originalItem = premiumProducts.find(p => p.id === prodId);
        cart.push({ ...originalItem, qty: count });
    }
    syncCartUI();
    toggleCartDrawer(true);
}

function syncCartUI() {
    if(!elements.cartItemsContainer) return;
    elements.cartItemsContainer.innerHTML = '';
    let totalSarmaye = 0;
    let itemsCount = 0;

    cart.forEach(item => {
        const purePriceNum = parseInt(item.price.replace(/,/g, ''));
        totalSarmaye += (purePriceNum * item.qty);
        itemsCount += item.qty;

        const cartRow = document.createElement('div');
        cartRow.className = 'cart-item';
        cartRow.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${(purePriceNum * item.qty).toLocaleString('fa-IR')} تومان</div>
                <div class="cart-item-ctrl">
                    <div class="ctrl-btn dec-item" data-id="${item.id}"><i class="fas fa-minus"></i></div>
                    <span style="font-weight:700;">${item.qty}</span>
                    <div class="ctrl-btn inc-item" data-id="${item.id}"><i class="fas fa-plus"></i></div>
                </div>
            </div>
            <i class="far fa-trash-alt cart-item-remove" data-id="${item.id}"></i>
        `;
        elements.cartItemsContainer.appendChild(cartRow);
    });

    if(elements.cartSubtotal) elements.cartSubtotal.textContent = `${totalSarmaye.toLocaleString('fa-IR')} تومان`;
    if(elements.cartCount) elements.cartCount.textContent = itemsCount;

    bindCartModifiers();
}

function bindCartModifiers() {
    document.querySelectorAll('.inc-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.inc-item').getAttribute('data-id'));
            const target = cart.find(c => c.id === id);
            target.qty++;
            syncCartUI();
        });
    });

    document.querySelectorAll('.dec-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.dec-item').getAttribute('data-id'));
            const target = cart.find(c => c.id === id);
            if(target.qty > 1) {
                target.qty--;
            } else {
                cart = cart.filter(c => c.id !== id);
            }
            syncCartUI();
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            cart = cart.filter(c => c.id !== id);
            syncCartUI();
        });
    });
}

function toggleCartDrawer(open) {
    if(open) {
        elements.cartDrawer.classList.add('active');
        elements.drawerOverlay.classList.add('active');
    } else {
        elements.cartDrawer.classList.remove('active');
        elements.drawerOverlay.classList.remove('active');
    }
}

if(elements.cartToggleBtn) elements.cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
if(elements.cartCloseBtn) elements.cartCloseBtn.addEventListener('click', () => toggleCartDrawer(false));
if(elements.drawerOverlay) elements.drawerOverlay.addEventListener('click', () => toggleCartDrawer(false));

function showProductModalDetails(id) {
    const item = premiumProducts.find(p => p.id === id);
    if(!item || !elements.modalBody) return;

    let specRowsHtml = '';
    for(const [sKey, sVal] of Object.entries(item.specs)) {
        specRowsHtml += `<div class="specs-item"><span>${sKey}</span><span>${sVal}</span></div>`;
    }

    elements.modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="main-modal-img">
                <img src="${item.image}" alt="${item.title}" id="modalMainImage">
            </div>
            <div class="thumb-gallery">
                <img src="${item.image}" class="thumb-img active" alt="نمای اصلی">
                <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=200" class="thumb-img" alt="زاویه مهندسی">
            </div>
        </div>
        <div>
            <h2 class="modal-info-title">${item.title}</h2>
            <div class="modal-info-price">${item.price} تومان</div>
            <p class="modal-info-desc">${item.desc}</p>
            
            <div class="specs-list">
                <h4 style="margin-bottom: 12px; color: var(--primary-gold); font-size:1rem;">شناسنامه متریال و گرید ساختار</h4>
                ${specRowsHtml}
            </div>

            <div class="qty-row">
                <div class="qty-selector">
                    <div class="ctrl-btn" id="modalMinus"><i class="fas fa-minus"></i></div>
                    <input type="text" class="qty-input" id="modalQty" value="1" readonly>
                    <div class="ctrl-btn" id="modalPlus"><i class="fas fa-plus"></i></div>
                </div>
                <button class="btn btn-primary" id="modalAddToCart" data-id="${item.id}">درخواست تملک شاهکار</button>
            </div>
        </div>
        <div class="reviews-section">
            <h3 class="reviews-header">گواهی و بازخورد کلکسیونرهای رسمی</h3>
            <div class="review-card">
                <div class="review-meta">
                    <span class="reviewer-name">مهندس سهراب راد</span>
                    <span style="color: var(--primary-gold); font-size: 0.8rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                </div>
                <p class="review-text">"کیفیت پرداخت و جزییات پولیش الماس روی لبه‌های شاسی حیرت‌انگیز است."</p>
            </div>
        </div>
    `;

    const modalQtyInput = document.getElementById('modalQty');
    document.getElementById('modalPlus').addEventListener('click', () => {
        modalQtyInput.value = parseInt(modalQtyInput.value) + 1;
    });
    document.getElementById('modalMinus').addEventListener('click', () => {
        let cv = parseInt(modalQtyInput.value);
        if(cv > 1) modalQtyInput.value = cv - 1;
    });

    document.getElementById('modalAddToCart').addEventListener('click', () => {
        addToCart(item.id, parseInt(modalQtyInput.value));
        elements.productModal.classList.remove('active');
    });

    document.querySelectorAll('.thumb-img').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById('modalMainImage').src = e.target.src;
        });
    });

    elements.productModal.classList.add('active');
}

if(elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', () => elements.productModal.classList.remove('active'));
}
if(elements.productModal) {
    elements.productModal.addEventListener('click', (e) => { if(e.target === elements.productModal) elements.productModal.classList.remove('active'); });
}

if(elements.mobileToggle && elements.navMenu) {
    elements.mobileToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        const icon = elements.mobileToggle.querySelector('i');
        icon.className = elements.navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
        e.target.classList.add('active');
        if(elements.navMenu) elements.navMenu.classList.remove('active');
        if(elements.mobileToggle) elements.mobileToggle.querySelector('i').className = 'fas fa-bars';
    });
});

if(elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mail = elements.newsletterForm.querySelector('input').value;
        alert(`دعوت‌نامه با موفقیت به آدرس ایمیل ${mail} ارسال شد.`);
        elements.newsletterForm.querySelector('input').value = '';
    });
}

if(elements.checkoutBtn) {
    elements.checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            alert("صندوق جاری شما خالی است.");
            return;
        }
        alert("در حال اتصال امن به درگاه پرداخت شتاب...");
        cart = [];
        syncCartUI();
        toggleCartDrawer(false);
    });
}