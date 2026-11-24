import React, { useState, useEffect } from 'react';
import './index.css';

// Barcha kategoriyalar uchun maxsus sahifa bannerlari va ma'lumotlari
const categoryDetails = {
  'Hammasi': {
    title: 'BARCHA BMW SERIYALARI KATALOGI',
    subtitle: 'Raqamli seriyalardan tortib X-seriya krossoverlari, M Power poyga bolidlari, i-seriya elektromobillari va Z-seriya rodsterlarigacha.',
    bannerImg: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920',
    badge: 'TO‘LIQ AVTOPARK',
    highlight: '21 ta rasmiy model'
  },
  'Raqamli seriyalar': {
    title: '1-SERIYADAN 8-SERIYAGACHA — SEDAN & COUPÉ',
    subtitle: 'Ixcham shahar xetchbeklaridan tortib, biznes-klass va prezidentlik darajasidagi VIP flagman sedanlargacha.',
    bannerImg: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=1920',
    badge: 'CLASSIC & LUXURY',
    highlight: '1, 2, 3, 4, 5, 6, 7, 8-seriyalar'
  },
  'X-seriya (SUV)': {
    title: 'BMW X-SERIYA — KROSSOVERLAR VA YO‘LTANLAMASLAR',
    subtitle: 'X1 dan X7 gacha. Intellektual xDrive 4x4 tizimi, keng oilaviy salon va har qanday yo‘lda hukmronlik.',
    bannerImg: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=1920',
    badge: 'SAV & SAC (xDrive)',
    highlight: 'X1 dan X7 gacha to‘liq qator'
  },
  'M-seriya (M Power)': {
    title: 'BMW ///M — POYGA VA SUPERKARLAR',
    subtitle: 'M2, M3, M4, M5, M8 va XM. Trassa uchun yaratilgan o‘ta kuchli dvigatellar va murosasiz tezlik.',
    bannerImg: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1920',
    badge: 'HIGH PERFORMANCE ///M',
    highlight: '748 ot kuchigacha'
  },
  'i-seriya (Electric)': {
    title: 'BMW i — 100% ELEKTR KELAJAK',
    subtitle: 'iX1, i4, i5, i7 va iX. Nol chiqindi, bir zumda tezlanish va sun’iy intellektga asoslangan kokpit.',
    bannerImg: 'https://www.topgear.com/sites/default/files/images/news-article/2021/03/34a1af485c9c373303ccc3cb258bcb15/p90416001_highres.jpg',
    badge: '100% ELECTRIC MOBILITY',
    highlight: '625 km gacha yurish zaxirasi'
  },
  'Z-seriya (Rodster)': {
    title: 'BMW Z-SERIYA — OCHIQ TOMLI SPORTKARLAR',
    subtitle: 'Klassik 2 o‘rinli rodster. Ochiq osmon ostida shamol va sof haydash zavqini his qiling.',
    bannerImg: 'https://encarrus.ru/encar-photo/carpicture/carpicture05/pic4125/41252454_023.jpg?impolicy=heightRate&rh=1320&cw=2200&ch=1320&cg=Center',
    badge: 'OPEN-TOP ROADSTER',
    highlight: '10 soniyada ochiluvchi tom'
  }
};

// Barcha 5 ta seriya bo'yicha to'liq modellar ro'yxati
const modelsData = [
  // ================= 1. RAQAMLI SERIYALAR (1-8) =================
  {
    id: 101,
    name: 'BMW 118i M Sport (1-seriya)',
    category: 'Raqamli seriyalar',
    power: '140 ot kuchi',
    acceleration: '8.5 soniya',
    topSpeed: '213 km/s',
    engine: '1.5L TwinPower Turbo',
    price: '$34,500',
    image: 'https://img.autotrader.co.za/46550068/Crop800x600',
    desc: 'Kompakt xetchbek. Shahar ko‘chalarida chaqqon harakatlanish uchun yaratilgan yoshlarbop model.'
  },
  {
    id: 102,
    name: 'BMW 220i Gran Coupé (2-seriya)',
    category: 'Raqamli seriyalar',
    power: '178 ot kuchi',
    acceleration: '7.1 soniya',
    topSpeed: '238 km/s',
    engine: '2.0L TwinPower Turbo',
    price: '$39,800',
    image: 'https://umbraco.prod.vwfsds.co.uk/media/_imported/e5cd0e82-14a0-4e09-b65d-53da750f6e34/BMW_220_Gran_Coupe_Fire_Red-014.jpg',
    desc: 'Romsiz eshiklarga ega 4 eshikli kompakt sport kupe.'
  },
  {
    id: 103,
    name: 'BMW 330i xDrive (3-seriya)',
    category: 'Raqamli seriyalar',
    power: '255 ot kuchi',
    acceleration: '5.6 soniya',
    topSpeed: '250 km/s',
    engine: '2.0L TwinPower Turbo',
    price: '$46,500',
    image: 'https://media.ed.edmunds-media.com/bmw/3-series/2026/oem/2026_bmw_3-series_sedan_330i_fq_oem_1_600.jpg',
    desc: 'Afsonaviy 3-seriya. Har bir burilishda mukammal muvozanat va sport ruhiyati.'
  },
  {
    id: 104,
    name: 'BMW 430i Coupé (4-seriya)',
    category: 'Raqamli seriyalar',
    power: '255 ot kuchi',
    acceleration: '5.5 soniya',
    topSpeed: '250 km/s',
    engine: '2.0L TwinPower Turbo',
    price: '$51,200',
    image: 'https://di-uploads-pod37.dealerinspire.com/bmwoflafayette/uploads/2022/09/2023-BMW-4-Series.jpg',
    desc: 'Agresiv radiator panjarasi va nafis 2 eshikli kupe silueti.'
  },
  {
    id: 105,
    name: 'BMW 530i M Sport (5-seriya)',
    category: 'Raqamli seriyalar',
    power: '258 ot kuchi',
    acceleration: '6.2 soniya',
    topSpeed: '250 km/s',
    engine: '2.0L Mild-Hybrid Turbo',
    price: '$57,900',
    image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/106091/left-front-three-quarter0.jpeg?isig=0&q=80',
    desc: 'Biznes-klass etaloni. Interaction Bar yoritish tizimi va yuqori darajadagi komfort.'
  },
  {
    id: 106,
    name: 'BMW 630i Gran Turismo (6-seriya)',
    category: 'Raqamli seriyalar',
    power: '258 ot kuchi',
    acceleration: '6.3 soniya',
    topSpeed: '250 km/s',
    engine: '2.0L TwinPower Turbo',
    price: '$68,400',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4ZG-pIq5vBGY0lnq738Hc_d2VeWUacHSlU8SGfT32q66xPY_lO2c05U&s=10',
    desc: 'Uzoq safarlar uchun mo‘ljallangan keng yukxona va pnevmatik podveskali liftbek.'
  },
  {
    id: 107,
    name: 'BMW 760i xDrive (7-seriya)',
    category: 'Raqamli seriyalar',
    power: '544 ot kuchi',
    acceleration: '4.2 soniya',
    topSpeed: '250 km/s',
    engine: '4.4L V8 TwinPower Turbo',
    price: '$121,300',
    image: 'https://strg1.nm.kz/neofiles/serve-image/677bbd6c0038ff0007ce912e/1190x500/q90',
    desc: 'Prezidentlik darajasidagi flagman sedan. Avtomatik ochiluvchi eshiklar va VIP salon.'
  },
  {
    id: 108,
    name: 'BMW 840i Gran Coupé (8-seriya)',
    category: 'Raqamli seriyalar',
    power: '335 ot kuchi',
    acceleration: '4.9 soniya',
    topSpeed: '250 km/s',
    engine: '3.0L Inline-6 Turbo',
    price: '$90,800',
    image: 'https://di-uploads-pod16.dealerinspire.com/bmwofridgefield/uploads/2019/06/2020-bmw-8-series-gran-coupe-101-1560875701.jpg',
    desc: 'Hashamatli sport kupe san’ati. Merino charm va kristall uzatmalar qutisi dastagi.'
  },

  // ================= 2. X-SERIYA (SUV) =================
  {
    id: 201,
    name: 'BMW X1 xDrive28i',
    category: 'X-seriya (SUV)',
    power: '241 ot kuchi',
    acceleration: '6.2 soniya',
    topSpeed: '240 km/s',
    engine: '2.0L TwinPower Turbo AWD',
    price: '$40,500',
    image: 'https://di-uploads-pod21.dealerinspire.com/bmwofnorthwestarkansas/uploads/2023/05/2023-bmw-ix-rocks.jpg',
    desc: 'Ixcham, zamonaviy va tejamkor shahar krossoveri.'
  },
  {
    id: 202,
    name: 'BMW X3 M40i',
    category: 'X-seriya (SUV)',
    power: '382 ot kuchi',
    acceleration: '4.4 soniya',
    topSpeed: '250 km/s',
    engine: '3.0L M TwinPower Turbo',
    price: '$61,900',
    image: 'https://s3.amazonaws.com/s3.bimmerfile.com/wp-content/uploads/2018/09/X3_3289.jpg',
    desc: 'O‘rta o‘lchamli dinamik krossover. Oilaviy qulaylik va sport tezligi birgalikda.'
  },
  {
    id: 203,
    name: 'BMW X5 M60i',
    category: 'X-seriya (SUV)',
    power: '530 ot kuchi',
    acceleration: '4.3 soniya',
    topSpeed: '250 km/s',
    engine: '4.4L V8 Mild-Hybrid',
    price: '$89,300',
    image: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-performance-automobile/x5-m60i-xdrive/bmw-x5-m60i-xdrive-stage-teaser-02.png',
    desc: 'Dunyoga mashhur afsonaviy krossover. Har qanday yo‘l sharoitida mutlaq ustunlik.'
  },
  {
    id: 204,
    name: 'BMW X6 xDrive40i',
    category: 'X-seriya (SUV)',
    power: '375 ot kuchi',
    acceleration: '5.2 soniya',
    topSpeed: '250 km/s',
    engine: '3.0L Inline-6 Turbo',
    price: '$74,500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AyDEGmKWGJ8Gz5UcjiVov72IrQCCnhRi1A35nKeizxGH0zzKWJLQtw8&s=10',
    desc: 'Sport kupe va qudratli yo‘ltanlamas uyg‘unligi (SAC). Yoritiluvchi Iconic Glow panjara.'
  },
  {
    id: 205,
    name: 'BMW X7 xDrive40i',
    category: 'X-seriya (SUV)',
    power: '381 ot kuchi',
    acceleration: '5.8 soniya',
    topSpeed: '250 km/s',
    engine: '3.0L Inline-6 Turbo',
    price: '$81,900',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2023-bmw-x7-xdrive-40i147-641c6122ed260.jpg?crop=0.743xw:0.742xh;0.0646xw,0.168xh&resize=640:*',
    desc: '7 o‘rinli ulug‘vor flagman krossover. Swarovski kristall faralar va pnevmatik podveska.'
  },

  // ================= 3. M-SERIYA (M POWER) =================
  {
    id: 301,
    name: 'BMW M2 Coupé',
    category: 'M-seriya (M Power)',
    power: '460 ot kuchi',
    acceleration: '4.1 soniya',
    topSpeed: '285 km/s',
    engine: '3.0L M TwinPower Turbo',
    price: '$63,200',
    image: 'https://bmw.scene7.com/is/image/BMW/g87_cs_dynamics_fb?qlt=80&wid=1024&fmt=webp',
    desc: 'Orqa g‘ildirakdan tortuvchi sof drift va poyga mashinasi.'
  },
  {
    id: 302,
    name: 'BMW M3 Competition',
    category: 'M-seriya (M Power)',
    power: '510 ot kuchi',
    acceleration: '3.5 soniya',
    topSpeed: '290 km/s',
    engine: '3.0L 6-silindrli Bi-Turbo',
    price: '$84,300',
    image: 'https://www.autonext.co/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzmtsqtky%2Fimage%2Fupload%2Fv1790973066%2Fo9cg6fve8kandni75mat.jpg&w=1920&q=50',
    desc: 'To‘rt eshikli poyga afsonasi. M xDrive tizimi va karbon sport o‘rindiqlari.'
  },
  {
    id: 303,
    name: 'BMW M4 Competition',
    category: 'M-seriya (M Power)',
    power: '510 ot kuchi',
    acceleration: '3.5 soniya',
    topSpeed: '290 km/s',
    engine: '3.0L M TwinPower Turbo',
    price: '$86,400',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1200',
    desc: 'Trassa qiroli. Uglerod tolali tom va M Drift Analyzer tizimi.'
  },
  {
    id: 304,
    name: 'BMW M5 Competition',
    category: 'M-seriya (M Power)',
    power: '625 ot kuchi',
    acceleration: '3.3 soniya',
    topSpeed: '305 km/s',
    engine: '4.4L V8 M TwinPower Turbo',
    price: '$111,800',
    image: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&q=80&w=1200',
    desc: 'Kostyum kiygan superkar. Biznes-sedan qulayligi va V8 motorning dahshatli kuchi.'
  },
  {
    id: 305,
    name: 'BMW XM Label Red',
    category: 'M-seriya (M Power)',
    power: '748 ot kuchi',
    acceleration: '3.8 soniya',
    topSpeed: '290 km/s',
    engine: '4.4L V8 Plug-in Hybrid',
    price: '$185,000',
    image: 'https://images.carexpert.com.au/resize/960/-/cms/v1/media/2023-04-2024-bmw-xm-label-red-edition-30.jpg',
    desc: 'BMW tarixidagi eng kuchli seriyali model. Eksklyuziv gibrid super-krossover.'
  },

  // ================= 4. i-SERIYA (ELECTRIC) =================
  {
    id: 401,
    name: 'BMW i4 M50',
    category: 'i-seriya (Electric)',
    power: '544 ot kuchi',
    acceleration: '3.9 soniya',
    topSpeed: '225 km/s',
    engine: 'Dual Electric (510 km zaxira)',
    price: '$69,700',
    image: 'https://hips.hearstapps.com/hmg-prod/images/dsc-0468-1654004395.jpg',
    desc: 'M bo‘limining birinchi to‘liq elektr Gran Kupesi. Hans Zimmer yaratgan maxsus ovoz.'
  },
  {
    id: 402,
    name: 'BMW i5 M60 xDrive',
    category: 'i-seriya (Electric)',
    power: '601 ot kuchi',
    acceleration: '3.8 soniya',
    topSpeed: '230 km/s',
    engine: 'Dual Electric (516 km zaxira)',
    price: '$84,100',
    image: 'https://www.completecar.ie/img/testdrives/13335_large.jpg',
    desc: 'Yangi avlod biznes-klass elektr sedani. AirConsole o‘yin platformasi bilan.'
  },
  {
    id: 403,
    name: 'BMW i7 xDrive60',
    category: 'i-seriya (Electric)',
    power: '544 ot kuchi',
    acceleration: '4.7 soniya',
    topSpeed: '240 km/s',
    engine: 'Dual Electric (625 km zaxira)',
    price: '$124,200',
    image: 'https://ev-database.org/img/auto/BMW_i7_2022/BMW_i7_2022-01@2x.jpg',
    desc: 'Elektr flagman sedan. Orqa o‘rindiqda 31 dyuymli 8K kinoteatr ekrani.'
  },
  {
    id: 404,
    name: 'BMW iX M60',
    category: 'i-seriya (Electric)',
    power: '619 ot kuchi',
    acceleration: '3.8 soniya',
    topSpeed: '250 km/s',
    engine: 'Dual Electric (566 km zaxira)',
    price: '$111,500',
    image: 'https://di-uploads-pod21.dealerinspire.com/bmwofnorthwestarkansas/uploads/2023/06/2024-BMW-iX-water.jpg',
    desc: 'Futuristik elektr krossover. Kristall boshqaruv elementlari va Shy Tech texnologiyasi.'
  },

  // ================= 5. Z-SERIYA (RODSTER) =================
  {
    id: 501,
    name: 'BMW Z4 M40i Roadster',
    category: 'Z-seriya (Rodster)',
    power: '382 ot kuchi',
    acceleration: '4.1 soniya',
    topSpeed: '250 km/s',
    engine: '3.0L M TwinPower Turbo',
    price: '$66,300',
    image: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2025/bmw-z4-final-edition/bmw-z4-m40i-final-edition-g29-01-16x9.jpg',
    desc: 'Klassik 2 o‘rinli ochiq tomli sport rodster. Tomi 50 km/s tezlikda ham 10 soniyada ochiladi.'
  },
  {
    id: 502,
    name: 'BMW Z4 sDrive30i',
    category: 'Z-seriya (Rodster)',
    power: '255 ot kuchi',
    acceleration: '5.2 soniya',
    topSpeed: '250 km/s',
    engine: '2.0L TwinPower Turbo',
    price: '$53,600',
    image: 'https://www.slashgear.com/img/gallery/2019-bmw-z4-sdrive30i-review-the-surprising-benefits-of-restraint/2019-bmw-z4-sdrive30i-2-1244x800.jpg',
    desc: 'Yengil vazn, mukammal 50:50 og‘irlik taqsimoti va ochiq osmon ostidagi erkinlik.'
  }
];

const categoriesList = [
  'Hammasi',
  'Raqamli seriyalar',
  'X-seriya (SUV)',
  'M-seriya (M Power)',
  'i-seriya (Electric)',
  'Z-seriya (Rodster)'
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Hammasi');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [activeModalCar, setActiveModalCar] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [testDriveForm, setTestDriveForm] = useState({ name: '', phone: '', model: 'BMW M4 Competition' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const modelsEl = document.getElementById('models');
    if (modelsEl) {
      modelsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtrlash va saralash
  const filteredModels = modelsData
    .filter(car => {
      const matchesCategory = selectedCategory === 'Hammasi' || car.category === selectedCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') {
        return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
      }
      if (sortBy === 'price-desc') {
        return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
      }
      if (sortBy === 'power') {
        return parseInt(b.power) - parseInt(a.power);
      }
      return 0;
    });

  const getCategoryCount = (cat) => {
    if (cat === 'Hammasi') return modelsData.length;
    return modelsData.filter(car => car.category === cat).length;
  };

  const currentCatInfo = categoryDetails[selectedCategory];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!testDriveForm.name || !testDriveForm.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTestDriveForm({ name: '', phone: '', model: 'BMW M4 Competition' });
    }, 4000);
  };

  return (
    <div className="bmw-app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-box" onClick={() => handleCategorySelect('Hammasi')} style={{ cursor: 'pointer' }}>
             <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/500px-BMW.svg.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="img" width={45} />
            <span className="brand-text">BMW <span className="m-stripes">///UZB</span></span>
          </div>

          <ul className="nav-links">
            <li><a href="#models" onClick={() => setSelectedCategory('Raqamli seriyalar')}>1–8 Seriyalar</a></li>
            <li><a href="#models" onClick={() => setSelectedCategory('X-seriya (SUV)')}>X-Seriya</a></li>
            <li><a href="#models" onClick={() => setSelectedCategory('M-seriya (M Power)')}>M-Seriya</a></li>
            <li><a href="#models" onClick={() => setSelectedCategory('i-seriya (Electric)')}>i-Seriya</a></li>
            <li><a href="#models" onClick={() => setSelectedCategory('Z-seriya (Rodster)')}>Z-Seriya</a></li>
          </ul>

          <a href="#test-drive" className="nav-cta">Test-Drayv</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="m-badge">
            <span className="stripe s1"></span>
            <span className="stripe s2"></span>
            <span className="stripe s3"></span>
            <span>SHEER DRIVING PLEASURE</span>
          </div>
          <h1 className="hero-title">
            BARCHA BMW <br />
            <span className="highlight-blue">SERIYALARI BIR JOYDA</span>
          </h1>
          <p className="hero-subtitle">
            1-seriyadan 8-seriyagacha, X-seriya krossoverlari, M Power poyga bolidlari, 
            i-seriya elektromobillari va Z-seriya rodsterlari.
          </p>
          <div className="hero-buttons">
            <a href="#models" className="btn-primary">Katalogni ochish</a>
            <a href="#test-drive" className="btn-secondary">Test-drayvga yozilish</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>5 Seriya</h3>
              <p>Asosiy yo‘nalishlar</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>{modelsData.length} Model</h3>
              <p>To‘liq avtopark</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>748 HP</h3>
              <p>Maksimal quvvat</p>
            </div>
          </div>
        </div>
      </header>

      {/* KATEGORIYA SAHIFALARI VA AVTOPARK */}
      <section id="models" className="models-section">
        {/* KATEGORIYA TUGMALARI */}
        <div className="category-nav-bar">
          {categoriesList.map(category => (
            <button
              key={category}
              className={`cat-page-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="cat-tab-name">{category}</span>
              <span className="cat-tab-count">{getCategoryCount(category)}</span>
            </button>
          ))}
        </div>

        {/* TANLANGAN KATEGORIYANING MAXSUS SAHIFA BANNERI */}
        <div 
          className="category-hero-card"
          style={{ backgroundImage: `url(${currentCatInfo.bannerImg})` }}
        >
          <div className="category-hero-overlay"></div>
          <div className="category-hero-content">
            <div className="cat-hero-badges">
              <span className="cat-tag-pill">{currentCatInfo.badge}</span>
              <span className="cat-highlight-pill">⚡ {currentCatInfo.highlight}</span>
            </div>
            <h2>{currentCatInfo.title}</h2>
            <p>{currentCatInfo.subtitle}</p>
          </div>
        </div>

        {/* QIDIRUV VA SARALASH */}
        <div className="toolbar-panel">
          <div className="search-box">
            <input
              type="text"
              placeholder={`${selectedCategory} ichidan model qidirish (masalan: X5, M3, Z4, 760i)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          <div className="sort-box">
            <label>Saralash:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Seriya tartibida</option>
              <option value="power">Eng kuchli dvigatel (HP)</option>
              <option value="price-asc">Narx: Arzonroqdan</option>
              <option value="price-desc">Narx: Qimmatroqdan</option>
            </select>
          </div>
        </div>

        {/* MASHINALAR KARTALARI */}
        {filteredModels.length === 0 ? (
          <div className="empty-state">
            <h3>"{searchQuery}" bo‘yicha model topilmadi</h3>
            <p>Qidiruv so‘zini o‘zgartiring yoki barcha modellarni ko‘ring.</p>
            <button 
              className="btn-primary" 
              onClick={() => { setSelectedCategory('Hammasi'); setSearchQuery(''); }}
            >
              Barcha modellarga qaytish
            </button>
          </div>
        ) : (
          <div className="models-grid">
            {filteredModels.map(car => (
              <div key={car.id} className="car-card fade-in-card">
                <div className="car-image-wrapper" onClick={() => setActiveModalCar(car)}>
                  <span className="car-badge">{car.category}</span>
                  <span className="car-price-tag">{car.price}</span>
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-engine-sub">{car.engine}</p>
                  
                  <div className="car-specs-mini">
                    <div>
                      <span>Quvvat</span>
                      <strong>{car.power}</strong>
                    </div>
                    <div>
                      <span>0-100 km/s</span>
                      <strong>{car.acceleration}</strong>
                    </div>
                    <div>
                      <span>Maks. tezlik</span>
                      <strong>{car.topSpeed}</strong>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button 
                      className="btn-details"
                      onClick={() => setActiveModalCar(car)}
                    >
                      Batafsil
                    </button>
                    <a 
                      href="#test-drive"
                      className="btn-order-mini"
                      onClick={() => setTestDriveForm({...testDriveForm, model: car.name})}
                    >
                      Test-drayv
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* TECHNOLOGY BANNER */}
      <section id="technology" className="tech-section">
        <div className="tech-container">
          <div className="tech-text">
            <span className="section-tag">INNOVATSIYA VA KOKPIT</span>
            <h2>BMW iDrive 8.5 & Egri Displey</h2>
            <p>
              Haydovchiga yo‘naltirilgan raqamli kokpit. Sun’iy intellektga asoslangan ovozli yordamchi, 
              kengaytirilgan reallik (AR) navigatsiyasi va har bir detalda nemis sifati.
            </p>
            <ul className="tech-list">
              <li>✦ 14.9 dyuymli sensorli egri boshqaruv ekrani</li>
              <li>✦ Bowers & Wilkins Diamond 4D Surround audio tizimi</li>
              <li>✦ Avtonom haydash yordamchisi (Driving Assistant Professional)</li>
            </ul>
          </div>
          <div className="tech-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCxnMRv9GAGhRSa3JYQfy0wa64oa1kLJEK8-ZlPHZaLmKgYgXtaJaPDoT&s=10" 
              alt="BMW Interior" 
            />
          </div>
        </div>
      </section>

      {/* TEST DRIVE FORM */}
      <section id="test-drive" className="test-drive-section">
        <div className="form-wrapper">
          <div className="form-info">
            <span className="section-tag">SHAXSIY TAJRIBA</span>
            <h2>TEST-DRAYVGA YOZILING</h2>
            <p>
              O‘zingiz tanlagan BMW ruliga o‘tiring va haqiqiy dinamikani his qiling. 
              Menejerlarimiz 15 daqiqa ichida siz bilan bog‘lanishadi.
            </p>
          </div>

          <form className="bmw-form" onSubmit={handleFormSubmit}>
            {submitted ? (
              <div className="success-message">
                <h3>✓ Arizangiz muvaffaqiyatli yuborildi!</h3>
                <p>Tanlangan model: <strong>{testDriveForm.model}</strong>. Tez orada aloqaga chiqamiz.</p>
              </div>
            ) : (
              <>
                <div className="input-group">
                  <label>Ismingiz</label>
                  <input 
                    type="text" 
                    placeholder="Masalan: Sardor" 
                    required
                    value={testDriveForm.name}
                    onChange={(e) => setTestDriveForm({...testDriveForm, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Telefon raqamingiz</label>
                  <input 
                    type="tel" 
                    placeholder="+998 90 123 45 67" 
                    required
                    value={testDriveForm.phone}
                    onChange={(e) => setTestDriveForm({...testDriveForm, phone: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Modelni tanlang</label>
                  <select 
                    value={testDriveForm.model}
                    onChange={(e) => setTestDriveForm({...testDriveForm, model: e.target.value})}
                  >
                    {modelsData.map(m => (
                      <option key={m.id} value={m.name}>{m.name} — {m.category}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-submit">So‘rov yuborish</button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>BMW UZBEKISTAN</h3>
            <p>Bayerische Motoren Werke AG — Barcha seriyalar ko‘rgazma portali.</p>
          </div>
          <div className="footer-links">
            {categoriesList.map(cat => (
              <a 
                key={cat} 
                href="#models" 
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BMW Showcase. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>

      {/* MODAL WINDOW FOR CAR DETAILS */}
      {activeModalCar && (
        <div className="modal-backdrop" onClick={() => setActiveModalCar(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalCar(null)}>✕</button>
            <img src={activeModalCar.image} alt={activeModalCar.name} className="modal-img" />
            <div className="modal-body">
              <div className="modal-top-tags">
                <span className="car-badge static">{activeModalCar.category}</span>
                <span className="modal-engine">{activeModalCar.engine}</span>
              </div>
              <h2>{activeModalCar.name}</h2>
              <p className="modal-desc">{activeModalCar.desc}</p>
              
              <div className="modal-specs-grid">
                <div className="spec-box">
                  <span>Dvigatel quvvati</span>
                  <strong>{activeModalCar.power}</strong>
                </div>
                <div className="spec-box">
                  <span>0-100 km/s tezlanish</span>
                  <strong>{activeModalCar.acceleration}</strong>
                </div>
                <div className="spec-box">
                  <span>Maksimal tezlik</span>
                  <strong>{activeModalCar.topSpeed}</strong>
                </div>
                <div className="spec-box">
                  <span>Boshlang‘ich narx</span>
                  <strong>{activeModalCar.price}</strong>
                </div>
              </div>

              <a 
                href="#test-drive" 
                className="btn-primary modal-cta"
                onClick={() => {
                  setTestDriveForm({...testDriveForm, model: activeModalCar.name});
                  setActiveModalCar(null);
                }}
              >
                Ushbu modelni test-drayv qilish
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;