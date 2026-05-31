// ==========================================
// 1. DEFAULT IMAGES CONFIGURATION (FALLBACKS)
// ==========================================
const defaultImages = {
    restaurant: "restaurant imgs/main-food.jpg",
    service: "services imgs/services4.jpg",
    hotel: "hotel imgs/hotel-hero-section.jpg"
};

// ==========================================
// 2. ΤΑ ΔΕΔΟΜΕΝΑ ΤΩΝ TEMPLATES (ΠΛΗΡΗ SECTIONS)
// ==========================================
const templates = {
    restaurant: `
        <div class="custom-page restaurant-layout active">
            <header class="rest-nav">
                <div class="rest-logo"><span class="logo-icon"></span> Craving</div>
                <nav class="rest-links">
                    <a href="#">All Pages ▾</a>
                    <a href="#">About Us</a>
                    <a href="#">Menu</a>
                    <a href="#">Blog</a>
                </nav>
                <button class="nav-story-btn">About Our Story</button>
            </header>
        
            <div class="rest-hero-container">
                <div class="rest-col-left">
                    <h1 class="biz-title">Make a Moment with Craving</h1>
                    <p class="biz-description">Embark on a gastronomic journey with Craving. Our curated selection of international flavors will tantalize your taste transport.</p>
                    <button class="cta-btn">Book a Moment</button>
                </div>
                <div class="rest-col-middle">
                    <div class="oval-image-container">
                        <img src="${defaultImages.restaurant}" alt="Delicious Food" class="hero-target-img">
                    </div>
                </div>
                <div class="rest-col-right">
                    <div class="testimonial-box">
                        <span class="quote-mark">“</span>
                        <p class="quote-text">“I've been coming to Craving for years, and I've never been disappointed. The food is always fresh and flavorful, and the service.”</p>
                    </div>
                    <div class="chef-image-container">
                        <img src="restaurant imgs/chef.jpg" alt="Our Chef">
                    </div>
                </div>
            </div>
        
            <section class="rest-menu-section">
                <div class="section-title-wrapper">
                    <h2>Our Signature Dishes</h2>
                    <p>A handpicked selection of our guest favorites</p>
                </div>
                <div class="menu-cards-grid">
                    <div class="menu-card">
                        <div class="card-img-holder"><img src="restaurant imgs/food1.jpg" alt="Menu Item"></div>
                        <div class="card-info">
                            <div class="card-header"><h3>Smash Burger Ultra</h3><span class="card-price">$14.50</span></div>
                            <p>Double dry-aged beef patty, cheddar, secret craving sauce, brioche bun.</p>
                        </div>
                    </div>
                    <div class="menu-card">
                        <div class="card-img-holder"><img src="restaurant imgs/food2.jpg" alt="Menu Item"></div>
                        <div class="card-info">
                            <div class="card-header"><h3>Craving Salmon Salad</h3><span class="card-price">$18.00</span></div>
                            <p>Fresh Atlantic salmon, organic greens, avocado, citrus dressing.</p>
                        </div>
                    </div>
                    <div class="menu-card">
                        <div class="card-img-holder"><img src="restaurant imgs/food3.jpg" alt="Menu Item"></div>
                        <div class="card-info">
                            <div class="card-header"><h3>Truffle Fusion Pizza</h3><span class="card-price">$21.00</span></div>
                            <p>Wild mushrooms, fresh black truffle, mozzarella, extra virgin olive oil.</p>
                        </div>
                    </div>
                </div>
            </section>
        
            <section class="rest-about-section">
                <div class="about-oval-img img-left"><img src="restaurant imgs/restaurant-interior.jpg" alt="Restaurant Interior"></div>
                <div class="about-center-content">
                    <span class="subtitle">OUR STORY</span>
                    <h2>Crafting Culinary Memories Since 2018</h2>
                    <p>We believe that food is an art form and a way to bring people together. Every ingredient is locally sourced, and every recipe is crafted with passion and precision to give you an unforgettable experience.</p>
                    <button class="cta-btn">Discover Our Kitchen</button>
                </div>
                <div class="about-oval-img img-right"><img src="restaurant imgs/chef.jpg" alt="Chef Cooking"></div>
            </section>
        
            <footer class="rest-footer">
                <div class="r-footer-top">
                    <div class="r-footer-brand"><h2>CRAVING</h2><p>Flavors that linger, moments that stay.</p></div>
                    <div class="r-footer-links">
                        <div class="r-footer-col"><h4>Explore</h4><a href="#">Menu</a><a href="#">Our Story</a><a href="#">Reservations</a></div>
                        <div class="r-footer-col"><h4>Contact</h4><p>+30 210 1234567</p><p>hello@craving.com</p><p>Foodies Street 12, Athens</p></div>
                    </div>
                </div>
                <div class="r-footer-bottom"><h1 class="biz-title">CRAVING</h1></div>
            </footer>
        </div>
    `,
    service: `
        <div class="custom-page service-layout active">
            <header class="serv-nav">
                <div class="serv-logo"><span></span> Handyman</div>
                <nav class="serv-links">
                    <a href="#">Home</a><a href="#">About</a><a href="#">Blog</a><a href="#">Services</a><a href="#">Contact</a>
                </nav>
                <button class="nav-template-btn">Get template</button>
            </header>
        
            <div class="serv-hero-container hero-target-bg" style="background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${defaultImages.service}');">
                <div class="serv-hero-text">
                    <h1 class="biz-title">Your Partner For Home Repairs</h1>
                    <p class="biz-description">Your go-to partner for all your home improvement needs.</p>
                    <div class="serv-hero-badges"><span class="badge-item"> (959) 555-0123</span><span class="badge-item"> Available 24/7</span></div>
                </div>
                <div class="serv-hero-form">
                    <h3>Request Your Free Call</h3>
                    <form onsubmit="event.preventDefault();">
                        <input type="text" placeholder="Name"><input type="email" placeholder="Email"><input type="text" placeholder="Number">
                        <select><option>Select your service...</option><option>Plumbing</option><option>Electrical</option><option>General Repairs</option></select>
                        <button type="submit" class="form-submit-btn">Request Call</button>
                    </form>
                </div>
            </div>
        
            <div class="serv-ratings-bar">
                <p class="ratings-lead">Our company is a top-rated service provider</p>
                <div class="stars-grid">
                    <div class="star-col">⭐ 4.6 on Trustpilot</div><div class="star-col">⭐ 4.85 on Yelp</div><div class="star-col">⭐ 4.9 on Google</div>
                </div>
            </div>
        
            <section class="serv-features-section">
                <div class="features-images-grid">
                    <div class="feat-img img-wide"><img src="services imgs/services1.jpg" alt="Renovation"></div>
                    <div class="feat-img"><img src="services imgs/services2.jpg" alt="Worker"></div>
                    <div class="feat-img"><img src="services imgs/services3.jpg" alt="Tools"></div>
                </div>
                <div class="features-text-content">
                    <h2>Get Professional Handyman Services</h2>
                    <p>Our team of skilled and dedicated handymen is ready to tackle any project, big or small, to enhance the comfort and functionality of your living spaces. From fixing a leaky faucet to remodeling your entire kitchen, you're covered.</p>
                </div>
            </section>
        
            <section class="serv-workflow-section">
                <h2>How Does It Work?</h2>
                <div class="workflow-split-container">
                    <div class="accordion-holder">
                        <div class="accordion-item active">
                            <div class="accordion-header"><span>Are your handymen licensed?</span><span>▼</span></div>
                            <div class="accordion-body"><p>Yes, all our handymen are licensed and insured professionals with extensive experience.</p></div>
                        </div>
                    </div>
                    <div class="workflow-image-holder"><img src="services imgs/services-hero.jpg" ></div>
                </div>
            </section>
        
            <footer class="serv-footer">
                <div class="s-footer-content">
                    <div class="s-footer-brand"><h3>🏠 Handyman</h3><p>Your trusted home improvement companion.</p></div>
                    <div class="s-footer-row-links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
                </div>
            </footer>
        </div>
    `,
    hotel: `
        <div class="custom-page hotel-layout active">
            <nav class="hotel-nav">
                <div class="hotel-logo">HOTEL</div>
                <div class="hotel-menu-btn"><span class="menu-dot"></span><span class="menu-text">Menu</span></div>
            </nav>
        
            <div class="hotel-hero hero-target-bg" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${defaultImages.hotel}');">
                <div class="hotel-meta">
                    <p class="biz-description">A boutique hotel designed for slow living</p>
                    <p class="hotel-tagline">Life, Unhurried</p>
                </div>
                <h1 class="biz-title">HOTEL</h1>
            </div>
        
            <div class="hotel-wine-dine">
                <div class="wd-header">
                    <h2>WINE & DINE</h2>
                    <p>Whether you're settling into Ember for an evening cocktail or sitting down to a full dinner at Grove & Grain, every visit is an occasion worth savouring.</p>
                </div>
                <div class="wd-grid">
                    <div class="wd-card card-bar" style="background-image: url('hotel imgs/hotel-drinks.jpg');">
                        <div class="wd-card-content"><h3>BAR MENU</h3><p>Ember</p></div>
                    </div>
                    <div class="wd-card card-restaurant" style="background-image: url('hotel imgs/hotel-food.jpg');">
                        <div class="wd-card-content"><h3>RESTAURANT MENU</h3><p>Grove & Grain</p></div>
                    </div>
                </div>
            </div>
        
            <footer class="hotel-footer">
                <div class="footer-top">
                    <div class="footer-statement"><p>THOUGHTFULLY CRAFTED SPACES WHERE EVERY DETAIL INVITES YOU TO SLOW DOWN.</p></div>
                    <div class="footer-links-grid">
                        <div class="footer-column"><a href="#">Home</a><a href="#">Rooms</a><a href="#">Wine & Dine</a></div>
                    </div>
                </div>
                <div class="footer-bottom"><h1 class="biz-title">HOTEL</h1></div>
            </footer>
        </div>
    `
};

// DOM Elements
const bizTypeSelect = document.getElementById('biz-type');
const previewSection = document.getElementById('preview-section');
const bizNameInput = document.getElementById('biz-name');
const bizDescInput = document.getElementById('biz-desc');
const heroUploadInput = document.getElementById('hero-upload');
const downloadBtn = document.getElementById('download-btn');

// ==========================================
// 3. LOCALSTORAGE STATE MANAGEMENT
// ==========================================
function saveProject() {
    if (!bizTypeSelect) return;
    const projectState = {
        type: bizTypeSelect.value,
        name: bizNameInput ? bizNameInput.value : "",
        desc: bizDescInput ? bizDescInput.value : "",
        customHeroImg: heroUploadInput ? (heroUploadInput.dataset.base64 || "") : ""
    };
    localStorage.setItem('smart_landing_project', JSON.stringify(projectState));
}

function loadProject() {
    const savedData = localStorage.getItem('smart_landing_project');
    if (!savedData) {
        renderTemplate(bizTypeSelect ? bizTypeSelect.value : 'restaurant');
        return;
    }

    const projectState = JSON.parse(savedData);

    if (bizTypeSelect) bizTypeSelect.value = projectState.type;
    if (bizNameInput) bizNameInput.value = projectState.name;
    if (bizDescInput) bizDescInput.value = projectState.desc;

    if (heroUploadInput) {
        heroUploadInput.dataset.base64 = projectState.customHeroImg || "";
    }

    renderTemplate(projectState.type);
}

// ==========================================
// 4. DYNAMIC RENDERING ENGINE & FALLBACKS
// ==========================================
function renderTemplate(type) {
    if (!previewSection || !templates[type]) return;

    previewSection.setAttribute('data-theme', type);
    previewSection.innerHTML = templates[type];

    document.querySelectorAll('.biz-title, .biz-description').forEach(el => {
        el.setAttribute('data-original', el.textContent);
    });

    applySavedValuesToUI();
}

function applySavedValuesToUI() {
    const currentTheme = bizTypeSelect ? bizTypeSelect.value : 'restaurant';

    if (bizNameInput && bizNameInput.value) {
        document.querySelectorAll('.biz-title').forEach(title => title.textContent = bizNameInput.value);
    }
    if (bizDescInput && bizDescInput.value) {
        document.querySelectorAll('.biz-description').forEach(desc => desc.textContent = bizDescInput.value);
    }

    const savedImg = heroUploadInput ? heroUploadInput.dataset.base64 : "";
    if (savedImg && savedImg.trim() !== "") {
        applyImageToHero(savedImg, currentTheme);
    } else {
        applyImageToHero(defaultImages[currentTheme], currentTheme);
    }
}

function applyImageToHero(imageSrc, theme) {
    if (theme === 'restaurant') {
        const restImg = document.querySelector('.hero-target-img');
        if (restImg) restImg.src = imageSrc;
    } else {
        const bgHero = document.querySelector('.hero-target-bg');
        if (bgHero) {
            bgHero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${imageSrc}')`;
        }
    }
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================
if (bizTypeSelect) {
    bizTypeSelect.addEventListener('change', (e) => {
        renderTemplate(e.target.value);
        saveProject();
    });
}

if (bizNameInput) {
    bizNameInput.addEventListener('input', function () {
        document.querySelectorAll('.biz-title').forEach(title => {
            title.textContent = this.value || title.getAttribute('data-original');
        });
        saveProject();
    });
}

if (bizDescInput) {
    bizDescInput.addEventListener('input', function () {
        document.querySelectorAll('.biz-description').forEach(desc => {
            desc.textContent = this.value || desc.getAttribute('data-original');
        });
        saveProject();
    });
}

if (heroUploadInput) {
    heroUploadInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64Image = e.target.result;
                heroUploadInput.dataset.base64 = base64Image;
                applyImageToHero(base64Image, bizTypeSelect.value);
                saveProject();
            };
            reader.readAsDataURL(file);
        } else {
            heroUploadInput.dataset.base64 = "";
            applyImageToHero(defaultImages[bizTypeSelect.value], bizTypeSelect.value);
            saveProject();
        }
    });
}

if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
        const activePage = document.querySelector('.custom-page.active');
        if (!activePage) return;

        const cleanHTML = activePage.outerHTML;
        let cssStyles = "";
        try {
            const styleSheets = document.styleSheets;
            for (let i = 0; i < styleSheets.length; i++) {
                try {
                    const rules = styleSheets[i].cssRules || styleSheets[i].rules;
                    if (rules) {
                        for (let j = 0; j < rules.length; j++) {
                            cssStyles += rules[j].cssText + "\n";
                        }
                    }
                } catch (e) { }
            }
        } catch (e) { }

        const finalDocument = `<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Exported Website</title>
    <style>body { margin:0; padding:0; font-family:sans-serif; }\n${cssStyles}\n.custom-page { display: block !important; }</style>
</head>
<body>${cleanHTML}</body>
</html>`;

        const blob = new Blob([finalDocument], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'exported-landing-page.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Εκκίνηση
loadProject();