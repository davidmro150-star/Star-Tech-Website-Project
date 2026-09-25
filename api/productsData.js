const productsData = [
  // =========================
  // BATCH 1 — PRODUCTS 1-50
  // =========================

  {
    id: 1,
    title: "ASUS Vivobook 15 X1504",
    subtitle: "15.6-inch Everyday Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "A reliable everyday laptop for students, professionals, office work, browsing and entertainment.",
    information: {
      brand: "ASUS",
      processor: "Intel Core i5-1335U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel Iris Xe",
      warranty: "2 Years"
    },
    price: 78500,
    image: "/images/products/asus-vivobook-15.jpg",
    rating: 4.6,
    stock: 18,
    size: "15.6-inch"
  },

  {
    id: 2,
    title: "Lenovo IdeaPad Slim 3",
    subtitle: "15.6-inch Performance Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "Slim and practical laptop designed for office work, education, programming and everyday productivity.",
    information: {
      brand: "Lenovo",
      processor: "AMD Ryzen 5 7520U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "AMD Radeon Graphics",
      warranty: "2 Years"
    },
    price: 69500,
    image: "/images/products/lenovo-ideapad-slim-3.jpg",
    rating: 4.5,
    stock: 25,
    size: "15.6-inch"
  },

  {
    id: 3,
    title: "HP Victus 15",
    subtitle: "Gaming Performance Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "Powerful gaming laptop suitable for gaming, programming, creative work and demanding applications.",
    information: {
      brand: "HP",
      processor: "Intel Core i5-13420H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4050 6GB",
      warranty: "2 Years"
    },
    price: 118000,
    image: "/images/products/hp-victus-15.jpg",
    rating: 4.7,
    stock: 12,
    size: "15.6-inch"
  },

  {
    id: 4,
    title: "Lenovo LOQ 15",
    subtitle: "High Performance Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "High-performance gaming laptop with dedicated graphics and high refresh rate display.",
    information: {
      brand: "Lenovo",
      processor: "Intel Core i7-13650HX",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4060 8GB",
      warranty: "2 Years"
    },
    price: 158000,
    image: "/images/products/lenovo-loq-15.jpg",
    rating: 4.8,
    stock: 9,
    size: "15.6-inch"
  },

  {
    id: 5,
    title: "Dell Inspiron 15 3530",
    subtitle: "Professional Everyday Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "Versatile laptop for office work, study, programming, browsing and multimedia.",
    information: {
      brand: "Dell",
      processor: "Intel Core i5-1334U",
      ram: "8GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel Iris Xe",
      warranty: "1 Year"
    },
    price: 72500,
    image: "/images/products/dell-inspiron-15.jpg",
    rating: 4.4,
    stock: 21,
    size: "15.6-inch"
  },

  {
    id: 6,
    title: "Acer Aspire 5 A515",
    subtitle: "Slim Productivity Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "Affordable productivity laptop for students, office users and everyday computing.",
    information: {
      brand: "Acer",
      processor: "Intel Core i5-1240P",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD IPS",
      graphics: "Intel Iris Xe",
      warranty: "2 Years"
    },
    price: 73500,
    image: "/images/products/acer-aspire-5.jpg",
    rating: 4.5,
    stock: 16,
    size: "15.6-inch"
  },

  {
    id: 7,
    title: "MSI Thin 15",
    subtitle: "Entry Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "Slim gaming laptop offering dedicated graphics performance for modern games and creative applications.",
    information: {
      brand: "MSI",
      processor: "Intel Core i5-13420H",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4050 6GB",
      warranty: "2 Years"
    },
    price: 112000,
    image: "/images/products/msi-thin-15.jpg",
    rating: 4.6,
    stock: 11,
    size: "15.6-inch"
  },

  {
    id: 8,
    title: "ASUS TUF Gaming A15",
    subtitle: "Durable Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "Durable gaming notebook with powerful processor, dedicated graphics and fast display.",
    information: {
      brand: "ASUS",
      processor: "AMD Ryzen 7 7735HS",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4060 8GB",
      warranty: "2 Years"
    },
    price: 149000,
    image: "/images/products/asus-tuf-a15.jpg",
    rating: 4.8,
    stock: 8,
    size: "15.6-inch"
  },

  {
    id: 9,
    title: "HP Pavilion Aero 13",
    subtitle: "Lightweight Premium Laptop",
    category: "Laptop",
    subcategory: "Ultrabook",
    descriptions: "Lightweight premium laptop designed for professionals who need portability and performance.",
    information: {
      brand: "HP",
      processor: "AMD Ryzen 7 7735U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.3-inch WUXGA",
      graphics: "AMD Radeon",
      warranty: "2 Years"
    },
    price: 108000,
    image: "/images/products/hp-pavilion-aero-13.jpg",
    rating: 4.7,
    stock: 10,
    size: "13.3-inch"
  },

  {
    id: 10,
    title: "Apple MacBook Air M3",
    subtitle: "13.6-inch Premium Laptop",
    category: "Laptop",
    subcategory: "Ultrabook",
    descriptions: "Premium lightweight laptop with efficient Apple silicon performance for work and creative tasks.",
    information: {
      brand: "Apple",
      processor: "Apple M3",
      ram: "8GB",
      storage: "256GB SSD",
      display: "13.6-inch Liquid Retina",
      graphics: "Integrated",
      warranty: "1 Year"
    },
    price: 132000,
    image: "/images/products/macbook-air-m3.jpg",
    rating: 4.9,
    stock: 7,
    size: "13.6-inch"
  },

  {
    id: 11,
    title: "Dell Latitude 5440",
    subtitle: "Professional Business Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "Professional business laptop designed for productivity, meetings, office applications and mobility.",
    information: {
      brand: "Dell",
      processor: "Intel Core i5-1345U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel Iris Xe",
      warranty: "3 Years"
    },
    price: 118000,
    image: "/images/products/dell-latitude-5440.jpg",
    rating: 4.7,
    stock: 13,
    size: "14-inch"
  },

  {
    id: 12,
    title: "Lenovo ThinkPad E14",
    subtitle: "Business Productivity Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    descriptions: "Business-focused laptop offering a comfortable keyboard, dependable performance and strong productivity features.",
    information: {
      brand: "Lenovo",
      processor: "Intel Core i5-1335U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel Iris Xe",
      warranty: "3 Years"
    },
    price: 102000,
    image: "/images/products/thinkpad-e14.jpg",
    rating: 4.7,
    stock: 15,
    size: "14-inch"
  },

  {
    id: 13,
    title: "ASUS Zenbook 14 OLED",
    subtitle: "Premium OLED Ultrabook",
    category: "Laptop",
    subcategory: "Ultrabook",
    descriptions: "Premium ultrabook with OLED display, lightweight construction and excellent everyday performance.",
    information: {
      brand: "ASUS",
      processor: "Intel Core Ultra 7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "14-inch 2.8K OLED",
      graphics: "Intel Arc",
      warranty: "2 Years"
    },
    price: 145000,
    image: "/images/products/asus-zenbook-14.jpg",
    rating: 4.9,
    stock: 6,
    size: "14-inch"
  },

  {
    id: 14,
    title: "Acer Nitro V 15",
    subtitle: "RTX Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "Gaming laptop built for modern gaming with dedicated NVIDIA graphics and a fast refresh rate.",
    information: {
      brand: "Acer",
      processor: "Intel Core i5-13420H",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4050 6GB",
      warranty: "2 Years"
    },
    price: 109000,
    image: "/images/products/acer-nitro-v15.jpg",
    rating: 4.6,
    stock: 14,
    size: "15.6-inch"
  },

  {
    id: 15,
    title: "MSI Katana 15",
    subtitle: "Performance Gaming Notebook",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    descriptions: "Performance-focused gaming notebook with powerful CPU and dedicated RTX graphics.",
    information: {
      brand: "MSI",
      processor: "Intel Core i7-13620H",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "RTX 4060 8GB",
      warranty: "2 Years"
    },
    price: 142000,
    image: "/images/products/msi-katana-15.jpg",
    rating: 4.7,
    stock: 8,
    size: "15.6-inch"
  },

  {
    id: 16,
    title: "Dell OptiPlex 7010",
    subtitle: "Professional Office Desktop",
    category: "Desktop PC",
    subcategory: "Office PC",
    descriptions: "Reliable business desktop designed for office applications, accounting, browsing and productivity.",
    information: {
      brand: "Dell",
      processor: "Intel Core i5-13500",
      ram: "16GB",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 11 Pro",
      warranty: "3 Years"
    },
    price: 82000,
    image: "/images/products/dell-optiplex-7010.jpg",
    rating: 4.6,
    stock: 12,
    size: "Mid Tower"
  },

  {
    id: 17,
    title: "HP Pro Tower 290",
    subtitle: "Business Desktop Computer",
    category: "Desktop PC",
    subcategory: "Office PC",
    descriptions: "Business desktop for office applications, data management, browsing and professional workloads.",
    information: {
      brand: "HP",
      processor: "Intel Core i5-13500",
      ram: "16GB",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 11 Pro",
      warranty: "3 Years"
    },
    price: 79500,
    image: "/images/products/hp-pro-tower-290.jpg",
    rating: 4.5,
    stock: 17,
    size: "Mid Tower"
  },

  {
    id: 18,
    title: "Ryzen 5 Gaming PC",
    subtitle: "Affordable Gaming Desktop",
    category: "Desktop PC",
    subcategory: "Gaming PC",
    descriptions: "Custom gaming desktop suitable for 1080p gaming, streaming, programming and general productivity.",
    information: {
      brand: "Custom Build",
      processor: "AMD Ryzen 5 5600",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      graphics: "RTX 3060 12GB",
      powerSupply: "650W",
      warranty: "1 Year"
    },
    price: 89500,
    image: "/images/products/ryzen-5-gaming-pc.jpg",
    rating: 4.7,
    stock: 10,
    size: "Mid Tower"
  },

  {
    id: 19,
    title: "Core i7 Gaming PC",
    subtitle: "High Performance Gaming Desktop",
    category: "Desktop PC",
    subcategory: "Gaming PC",
    descriptions: "Powerful desktop computer for gaming, video editing, rendering and demanding applications.",
    information: {
      brand: "Custom Build",
      processor: "Intel Core i7-14700F",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      graphics: "RTX 4070 Super 12GB",
      powerSupply: "750W",
      warranty: "1 Year"
    },
    price: 185000,
    image: "/images/products/core-i7-gaming-pc.jpg",
    rating: 4.9,
    stock: 5,
    size: "Mid Tower"
  },

  {
    id: 20,
    title: "Ryzen 7 Creator PC",
    subtitle: "Content Creation Desktop",
    category: "Desktop PC",
    subcategory: "Workstation PC",
    descriptions: "High-performance desktop designed for video editing, graphic design, rendering and professional workloads.",
    information: {
      brand: "Custom Build",
      processor: "AMD Ryzen 7 7700",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      graphics: "RTX 4070 12GB",
      powerSupply: "750W",
      warranty: "1 Year"
    },
    price: 172000,
    image: "/images/products/ryzen-7-creator-pc.jpg",
    rating: 4.8,
    stock: 6,
    size: "Mid Tower"
  },

  {
    id: 21,
    title: "AOC 24G2SP",
    subtitle: "24-inch 165Hz Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "Fast IPS gaming monitor with high refresh rate for smooth gaming and responsive gameplay.",
    information: {
      brand: "AOC",
      resolution: "1920 x 1080",
      panel: "IPS",
      refreshRate: "165Hz",
      responseTime: "1ms",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 22500,
    image: "/images/products/aoc-24g2sp.jpg",
    rating: 4.7,
    stock: 22,
    size: "24-inch"
  },

  {
    id: 22,
    title: "MSI G274F",
    subtitle: "27-inch Rapid IPS Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "High refresh rate gaming monitor with rapid IPS panel for smooth gaming and multimedia.",
    information: {
      brand: "MSI",
      resolution: "1920 x 1080",
      panel: "Rapid IPS",
      refreshRate: "180Hz",
      responseTime: "1ms",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 33500,
    image: "/images/products/msi-g274f.jpg",
    rating: 4.8,
    stock: 14,
    size: "27-inch"
  },

  {
    id: 23,
    title: "LG UltraGear 27GR75Q",
    subtitle: "27-inch QHD Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "QHD gaming monitor with high refresh rate and fast response time for competitive gaming.",
    information: {
      brand: "LG",
      resolution: "2560 x 1440",
      panel: "IPS",
      refreshRate: "165Hz",
      responseTime: "1ms",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 46500,
    image: "/images/products/lg-ultragear-27.jpg",
    rating: 4.8,
    stock: 11,
    size: "27-inch"
  },

  {
    id: 24,
    title: "Dell SE2422H",
    subtitle: "24-inch Full HD Monitor",
    category: "Monitor",
    subcategory: "Office Monitor",
    descriptions: "Affordable Full HD monitor for office work, study, browsing and everyday computing.",
    information: {
      brand: "Dell",
      resolution: "1920 x 1080",
      panel: "VA",
      refreshRate: "75Hz",
      responseTime: "5ms",
      ports: "HDMI, VGA",
      warranty: "3 Years"
    },
    price: 17500,
    image: "/images/products/dell-se2422h.jpg",
    rating: 4.5,
    stock: 30,
    size: "24-inch"
  },

  {
    id: 25,
    title: "Samsung ViewFinity S7",
    subtitle: "32-inch 4K Professional Monitor",
    category: "Monitor",
    subcategory: "Professional Monitor",
    descriptions: "Large 4K monitor designed for productivity, content creation, design and professional workflows.",
    information: {
      brand: "Samsung",
      resolution: "3840 x 2160",
      panel: "IPS",
      refreshRate: "60Hz",
      responseTime: "5ms",
      ports: "HDMI, DisplayPort, USB-C",
      warranty: "3 Years"
    },
    price: 62000,
    image: "/images/products/samsung-viewfinity-s7.jpg",
    rating: 4.8,
    stock: 8,
    size: "32-inch"
  },

  {
    id: 26,
    title: "Samsung Galaxy A55",
    subtitle: "Premium Midrange Smartphone",
    category: "Smartphone",
    subcategory: "Android Phone",
    descriptions: "Premium midrange smartphone with bright display, capable camera system and long battery life.",
    information: {
      brand: "Samsung",
      processor: "Exynos 1480",
      ram: "8GB",
      storage: "128GB",
      display: "6.6-inch Super AMOLED",
      camera: "50MP Triple Camera",
      battery: "5000mAh",
      warranty: "1 Year"
    },
    price: 45500,
    image: "/images/products/samsung-galaxy-a55.jpg",
    rating: 4.7,
    stock: 25,
    size: "6.6-inch"
  },

  {
    id: 27,
    title: "Xiaomi Redmi Note 13",
    subtitle: "Value Performance Smartphone",
    category: "Smartphone",
    subcategory: "Budget Phone",
    descriptions: "Feature-rich smartphone offering an AMOLED display, capable camera and dependable daily performance.",
    information: {
      brand: "Xiaomi",
      processor: "Snapdragon 685",
      ram: "8GB",
      storage: "256GB",
      display: "6.67-inch AMOLED",
      camera: "108MP Triple Camera",
      battery: "5000mAh",
      warranty: "1 Year"
    },
    price: 24500,
    image: "/images/products/redmi-note-13.jpg",
    rating: 4.5,
    stock: 35,
    size: "6.67-inch"
  },

  {
    id: 28,
    title: "OnePlus Nord CE 4",
    subtitle: "Fast Charging 5G Smartphone",
    category: "Smartphone",
    subcategory: "Android Phone",
    descriptions: "Modern 5G smartphone with fast charging, smooth display and strong everyday performance.",
    information: {
      brand: "OnePlus",
      processor: "Snapdragon 7 Gen 3",
      ram: "8GB",
      storage: "128GB",
      display: "6.7-inch AMOLED 120Hz",
      camera: "50MP Dual Camera",
      battery: "5500mAh",
      warranty: "1 Year"
    },
    price: 38500,
    image: "/images/products/oneplus-nord-ce4.jpg",
    rating: 4.7,
    stock: 18,
    size: "6.7-inch"
  },

  {
    id: 29,
    title: "Google Pixel 8",
    subtitle: "AI Powered Camera Smartphone",
    category: "Smartphone",
    subcategory: "Flagship Phone",
    descriptions: "Premium Google smartphone featuring advanced camera processing, clean Android and AI-powered features.",
    information: {
      brand: "Google",
      processor: "Google Tensor G3",
      ram: "8GB",
      storage: "128GB",
      display: "6.2-inch OLED 120Hz",
      camera: "50MP Dual Camera",
      battery: "4575mAh",
      warranty: "1 Year"
    },
    price: 72000,
    image: "/images/products/google-pixel-8.jpg",
    rating: 4.8,
    stock: 8,
    size: "6.2-inch"
  },

  {
    id: 30,
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "Premium Flagship Smartphone",
    category: "Smartphone",
    subcategory: "Flagship Phone",
    descriptions: "Premium flagship smartphone with advanced cameras, powerful processor, S Pen and high-quality display.",
    information: {
      brand: "Samsung",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      display: "6.8-inch Dynamic AMOLED 2X",
      camera: "200MP Quad Camera",
      battery: "5000mAh",
      warranty: "1 Year"
    },
    price: 145000,
    image: "/images/products/galaxy-s24-ultra.jpg",
    rating: 4.9,
    stock: 6,
    size: "6.8-inch"
  },

  {
    id: 31,
    title: "Samsung Galaxy Tab S9 FE",
    subtitle: "10.9-inch Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    descriptions: "Versatile Android tablet suitable for education, entertainment, note-taking and productivity.",
    information: {
      brand: "Samsung",
      processor: "Exynos 1380",
      ram: "6GB",
      storage: "128GB",
      display: "10.9-inch LCD",
      battery: "8000mAh",
      connectivity: "WiFi",
      warranty: "1 Year"
    },
    price: 52000,
    image: "/images/products/galaxy-tab-s9-fe.jpg",
    rating: 4.7,
    stock: 14,
    size: "10.9-inch"
  },

  {
    id: 32,
    title: "Xiaomi Pad 6",
    subtitle: "11-inch Performance Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    descriptions: "Powerful Android tablet with high refresh rate display for entertainment, study and productivity.",
    information: {
      brand: "Xiaomi",
      processor: "Snapdragon 870",
      ram: "8GB",
      storage: "256GB",
      display: "11-inch 144Hz",
      battery: "8840mAh",
      connectivity: "WiFi",
      warranty: "1 Year"
    },
    price: 42000,
    image: "/images/products/xiaomi-pad-6.jpg",
    rating: 4.8,
    stock: 17,
    size: "11-inch"
  },

  {
    id: 33,
    title: "Apple iPad Air M2",
    subtitle: "11-inch Performance Tablet",
    category: "Tablet",
    subcategory: "Productivity Tablet",
    descriptions: "Powerful and portable tablet for creative work, study, entertainment and professional productivity.",
    information: {
      brand: "Apple",
      processor: "Apple M2",
      ram: "8GB",
      storage: "128GB",
      display: "11-inch Liquid Retina",
      battery: "Up to 10 Hours",
      connectivity: "WiFi",
      warranty: "1 Year"
    },
    price: 78000,
    image: "/images/products/ipad-air-m2.jpg",
    rating: 4.9,
    stock: 9,
    size: "11-inch"
  },

  {
    id: 34,
    title: "Lenovo Tab M11",
    subtitle: "11-inch Family Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    descriptions: "Affordable family tablet suitable for education, streaming, browsing and everyday entertainment.",
    information: {
      brand: "Lenovo",
      processor: "MediaTek Helio G88",
      ram: "8GB",
      storage: "128GB",
      display: "11-inch 90Hz",
      battery: "7040mAh",
      connectivity: "WiFi",
      warranty: "1 Year"
    },
    price: 28500,
    image: "/images/products/lenovo-tab-m11.jpg",
    rating: 4.4,
    stock: 20,
    size: "11-inch"
  },

  {
    id: 35,
    title: "NVIDIA RTX 4060",
    subtitle: "8GB Gaming Graphics Card",
    category: "Graphics Card",
    subcategory: "NVIDIA GPU",
    descriptions: "Modern gaming graphics card designed for smooth 1080p and entry-level 1440p gaming.",
    information: {
      brand: "NVIDIA",
      chipset: "GeForce RTX 4060",
      memory: "8GB GDDR6",
      memoryBus: "128-bit",
      interface: "PCI Express 4.0",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 42000,
    image: "/images/products/rtx-4060.jpg",
    rating: 4.7,
    stock: 13,
    size: null
  },

  {
    id: 36,
    title: "NVIDIA RTX 4060 Ti",
    subtitle: "8GB High Performance GPU",
    category: "Graphics Card",
    subcategory: "NVIDIA GPU",
    descriptions: "High-performance graphics card for gaming, streaming, content creation and GPU acceleration.",
    information: {
      brand: "NVIDIA",
      chipset: "GeForce RTX 4060 Ti",
      memory: "8GB GDDR6",
      memoryBus: "128-bit",
      interface: "PCI Express 4.0",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 57000,
    image: "/images/products/rtx-4060-ti.jpg",
    rating: 4.8,
    stock: 9,
    size: null
  },

  {
    id: 37,
    title: "Gigabyte RTX 4070 Super",
    subtitle: "12GB Advanced Gaming GPU",
    category: "Graphics Card",
    subcategory: "NVIDIA GPU",
    descriptions: "Powerful GPU designed for high-refresh-rate 1440p gaming and demanding creative workloads.",
    information: {
      brand: "Gigabyte",
      chipset: "GeForce RTX 4070 Super",
      memory: "12GB GDDR6X",
      memoryBus: "192-bit",
      interface: "PCI Express 4.0",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 92000,
    image: "/images/products/rtx-4070-super.jpg",
    rating: 4.9,
    stock: 6,
    size: null
  },

  {
    id: 38,
    title: "AMD Radeon RX 7600",
    subtitle: "8GB Gaming Graphics Card",
    category: "Graphics Card",
    subcategory: "AMD GPU",
    descriptions: "Affordable modern graphics card for smooth 1080p gaming and everyday GPU workloads.",
    information: {
      brand: "AMD",
      chipset: "Radeon RX 7600",
      memory: "8GB GDDR6",
      memoryBus: "128-bit",
      interface: "PCI Express 4.0",
      ports: "HDMI, DisplayPort",
      warranty: "3 Years"
    },
    price: 39000,
    image: "/images/products/radeon-rx-7600.jpg",
    rating: 4.6,
    stock: 12,
    size: null
  },

  {
    id: 39,
    title: "Intel Core i5 14400",
    subtitle: "10-Core Desktop Processor",
    category: "Processor",
    subcategory: "Intel Processor",
    descriptions: "Balanced desktop processor for gaming, productivity, programming and everyday professional workloads.",
    information: {
      brand: "Intel",
      socket: "LGA1700",
      cores: "10",
      threads: "16",
      baseClock: "2.5GHz",
      boostClock: "4.7GHz",
      cache: "20MB",
      warranty: "3 Years"
    },
    price: 28500,
    image: "/images/products/core-i5-14400.jpg",
    rating: 4.8,
    stock: 18,
    size: null
  },

  {
    id: 40,
    title: "Intel Core i7 14700K",
    subtitle: "High Performance Desktop CPU",
    category: "Processor",
    subcategory: "Intel Processor",
    descriptions: "High-performance processor for gaming, rendering, development, editing and demanding applications.",
    information: {
      brand: "Intel",
      socket: "LGA1700",
      cores: "20",
      threads: "28",
      baseClock: "3.4GHz",
      boostClock: "5.6GHz",
      cache: "33MB",
      warranty: "3 Years"
    },
    price: 52000,
    image: "/images/products/core-i7-14700k.jpg",
    rating: 4.9,
    stock: 8,
    size: null
  },

  {
    id: 41,
    title: "AMD Ryzen 5 7600",
    subtitle: "AM5 Desktop Processor",
    category: "Processor",
    subcategory: "AMD Processor",
    descriptions: "Efficient modern AMD processor for gaming, programming and general high-performance desktop computing.",
    information: {
      brand: "AMD",
      socket: "AM5",
      cores: "6",
      threads: "12",
      baseClock: "3.8GHz",
      boostClock: "5.1GHz",
      cache: "38MB",
      warranty: "3 Years"
    },
    price: 23500,
    image: "/images/products/ryzen-5-7600.jpg",
    rating: 4.8,
    stock: 15,
    size: null
  },

  {
    id: 42,
    title: "AMD Ryzen 7 7800X3D",
    subtitle: "Ultimate Gaming Processor",
    category: "Processor",
    subcategory: "AMD Processor",
    descriptions: "High-end gaming processor featuring large 3D cache for excellent gaming performance.",
    information: {
      brand: "AMD",
      socket: "AM5",
      cores: "8",
      threads: "16",
      baseClock: "4.2GHz",
      boostClock: "5.0GHz",
      cache: "104MB",
      warranty: "3 Years"
    },
    price: 52000,
    image: "/images/products/ryzen-7-7800x3d.jpg",
    rating: 4.9,
    stock: 7,
    size: null
  },

  {
    id: 43,
    title: "MSI PRO B760M-A",
    subtitle: "DDR5 Intel Motherboard",
    category: "Motherboard",
    subcategory: "Intel Motherboard",
    descriptions: "Feature-rich motherboard for modern Intel desktop processors and DDR5 memory.",
    information: {
      brand: "MSI",
      chipset: "B760",
      socket: "LGA1700",
      memory: "DDR5",
      memorySlots: "4",
      expansion: "PCIe 4.0",
      warranty: "3 Years"
    },
    price: 18500,
    image: "/images/products/msi-pro-b760m.jpg",
    rating: 4.7,
    stock: 16,
    size: "Micro ATX"
  },

  {
    id: 44,
    title: "ASUS TUF Gaming B650",
    subtitle: "AM5 DDR5 Gaming Motherboard",
    category: "Motherboard",
    subcategory: "AMD Motherboard",
    descriptions: "Durable AM5 motherboard designed for modern Ryzen processors and high-performance gaming systems.",
    information: {
      brand: "ASUS",
      chipset: "B650",
      socket: "AM5",
      memory: "DDR5",
      memorySlots: "4",
      expansion: "PCIe 4.0",
      warranty: "3 Years"
    },
    price: 24500,
    image: "/images/products/asus-tuf-b650.jpg",
    rating: 4.8,
    stock: 11,
    size: "ATX"
  },

  {
    id: 45,
    title: "Corsair Vengeance 16GB",
    subtitle: "DDR4 Desktop RAM",
    category: "RAM",
    subcategory: "DDR4 RAM",
    descriptions: "Reliable high-performance DDR4 memory suitable for gaming, productivity and everyday desktop systems.",
    information: {
      brand: "Corsair",
      capacity: "16GB",
      type: "DDR4",
      speed: "3200MHz",
      configuration: "2 x 8GB",
      voltage: "1.35V",
      warranty: "Lifetime"
    },
    price: 5200,
    image: "/images/products/corsair-vengeance-16gb.jpg",
    rating: 4.8,
    stock: 35,
    size: null
  },

  {
    id: 46,
    title: "Kingston Fury Beast 32GB",
    subtitle: "DDR5 High Speed RAM",
    category: "RAM",
    subcategory: "DDR5 RAM",
    descriptions: "High-speed DDR5 memory designed for modern gaming PCs, workstations and productivity systems.",
    information: {
      brand: "Kingston",
      capacity: "32GB",
      type: "DDR5",
      speed: "6000MHz",
      configuration: "2 x 16GB",
      voltage: "1.35V",
      warranty: "Lifetime"
    },
    price: 12500,
    image: "/images/products/kingston-fury-beast-32gb.jpg",
    rating: 4.9,
    stock: 20,
    size: null
  },

  {
    id: 47,
    title: "Samsung 990 EVO 1TB",
    subtitle: "High Speed NVMe SSD",
    category: "Storage",
    subcategory: "NVMe SSD",
    descriptions: "Fast NVMe solid-state drive for operating systems, applications, gaming and professional workloads.",
    information: {
      brand: "Samsung",
      capacity: "1TB",
      interface: "PCIe 5.0 x2 / PCIe 4.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "5000MB/s",
      writeSpeed: "4200MB/s",
      warranty: "5 Years"
    },
    price: 11500,
    image: "/images/products/samsung-990-evo-1tb.jpg",
    rating: 4.9,
    stock: 28,
    size: "M.2 2280"
  },

  {
    id: 48,
    title: "WD Black SN770 1TB",
    subtitle: "Gaming NVMe SSD",
    category: "Storage",
    subcategory: "NVMe SSD",
    descriptions: "High-performance NVMe SSD designed for gaming, applications and fast system storage.",
    information: {
      brand: "Western Digital",
      capacity: "1TB",
      interface: "PCIe Gen4",
      formFactor: "M.2 2280",
      readSpeed: "5150MB/s",
      writeSpeed: "4900MB/s",
      warranty: "5 Years"
    },
    price: 10500,
    image: "/images/products/wd-black-sn770-1tb.jpg",
    rating: 4.8,
    stock: 24,
    size: "M.2 2280"
  },

  {
    id: 49,
    title: "Seagate Barracuda 2TB",
    subtitle: "Desktop Internal Hard Drive",
    category: "Storage",
    subcategory: "Hard Drive",
    descriptions: "Large-capacity internal hard drive suitable for documents, media, backups and general storage.",
    information: {
      brand: "Seagate",
      capacity: "2TB",
      interface: "SATA 6Gb/s",
      rotationSpeed: "7200RPM",
      cache: "256MB",
      formFactor: "3.5-inch",
      warranty: "2 Years"
    },
    price: 7200,
    image: "/images/products/seagate-barracuda-2tb.jpg",
    rating: 4.6,
    stock: 30,
    size: "3.5-inch"
  },

  {
    id: 50,
    title: "DeepCool CC560",
    subtitle: "Airflow Mid Tower Gaming Case",
    category: "PC Casing",
    subcategory: "Mid Tower Case",
    descriptions: "Modern airflow-focused PC case with spacious internal layout and support for gaming components.",
    information: {
      brand: "DeepCool",
      motherboardSupport: "ATX / Micro ATX / Mini ITX",
      fanSupport: "Up to 6 Fans",
      gpuLength: "370mm",
      radiatorSupport: "Up to 360mm",
      frontPanel: "USB 3.0, Audio",
      warranty: "1 Year"
    },
    price: 6500,
    image: "/images/products/deepcool-cc560.jpg",
    rating: 4.7,
    stock: 19,
    size: "Mid Tower"
  },
    // =========================
  // BATCH 2 — PRODUCTS 51-100
  // =========================

  {
    id: 51,
    title: "Cooler Master MWE 650 Bronze",
    subtitle: "650W 80 Plus Bronze Power Supply",
    category: "Power Supply",
    subcategory: "80 Plus PSU",
    descriptions: "Reliable power supply designed for mainstream gaming and productivity desktop computers.",
    information: {
      brand: "Cooler Master",
      wattage: "650W",
      efficiency: "80 Plus Bronze",
      modular: "Non-Modular",
      fanSize: "120mm",
      protection: "OVP / OPP / SCP",
      warranty: "5 Years"
    },
    price: 7200,
    image: "/images/products/cooler-master-mwe-650.jpg",
    rating: 4.6,
    stock: 24,
    size: "650W"
  },

  {
    id: 52,
    title: "Corsair CX750",
    subtitle: "750W Bronze Gaming Power Supply",
    category: "Power Supply",
    subcategory: "80 Plus PSU",
    descriptions: "Dependable 750W power supply suitable for gaming PCs and systems with dedicated graphics cards.",
    information: {
      brand: "Corsair",
      wattage: "750W",
      efficiency: "80 Plus Bronze",
      modular: "Non-Modular",
      fanSize: "120mm",
      protection: "OVP / OPP / SCP",
      warranty: "5 Years"
    },
    price: 8500,
    image: "/images/products/corsair-cx750.jpg",
    rating: 4.7,
    stock: 18,
    size: "750W"
  },

  {
    id: 53,
    title: "DeepCool PK750D",
    subtitle: "750W 80 Plus Bronze PSU",
    category: "Power Supply",
    subcategory: "80 Plus PSU",
    descriptions: "Efficient power supply for gaming and workstation systems requiring dependable power delivery.",
    information: {
      brand: "DeepCool",
      wattage: "750W",
      efficiency: "80 Plus Bronze",
      modular: "Non-Modular",
      fanSize: "120mm",
      protection: "OVP / OPP / SCP",
      warranty: "5 Years"
    },
    price: 7800,
    image: "/images/products/deepcool-pk750d.jpg",
    rating: 4.5,
    stock: 21,
    size: "750W"
  },

  {
    id: 54,
    title: "Antec CSK 550",
    subtitle: "550W Bronze Power Supply",
    category: "Power Supply",
    subcategory: "80 Plus PSU",
    descriptions: "Affordable and reliable PSU for office computers and entry-level gaming systems.",
    information: {
      brand: "Antec",
      wattage: "550W",
      efficiency: "80 Plus Bronze",
      modular: "Non-Modular",
      fanSize: "120mm",
      protection: "OVP / OPP / SCP",
      warranty: "5 Years"
    },
    price: 5800,
    image: "/images/products/antec-csk-550.jpg",
    rating: 4.5,
    stock: 27,
    size: "550W"
  },

  {
    id: 55,
    title: "Thermaltake Toughpower GF A3",
    subtitle: "850W Gold Modular PSU",
    category: "Power Supply",
    subcategory: "80 Plus PSU",
    descriptions: "High-quality modular power supply designed for powerful gaming and workstation PCs.",
    information: {
      brand: "Thermaltake",
      wattage: "850W",
      efficiency: "80 Plus Gold",
      modular: "Fully Modular",
      fanSize: "140mm",
      protection: "OVP / OPP / SCP / OTP",
      warranty: "10 Years"
    },
    price: 15500,
    image: "/images/products/thermaltake-gf-a3.jpg",
    rating: 4.9,
    stock: 8,
    size: "850W"
  },

  {
    id: 56,
    title: "DeepCool AK400",
    subtitle: "High Performance CPU Air Cooler",
    category: "CPU Cooler",
    subcategory: "Air Cooler",
    descriptions: "Compact tower air cooler providing efficient cooling for mainstream desktop processors.",
    information: {
      brand: "DeepCool",
      coolerType: "Air Cooler",
      fanSize: "120mm",
      heatPipes: "4",
      tdp: "220W",
      socket: "Intel / AMD",
      warranty: "3 Years"
    },
    price: 3600,
    image: "/images/products/deepcool-ak400.jpg",
    rating: 4.8,
    stock: 30,
    size: "120mm"
  },

  {
    id: 57,
    title: "Thermalright Assassin X 120",
    subtitle: "120mm Tower CPU Cooler",
    category: "CPU Cooler",
    subcategory: "Air Cooler",
    descriptions: "Efficient tower cooler with low noise and strong thermal performance for desktop CPUs.",
    information: {
      brand: "Thermalright",
      coolerType: "Air Cooler",
      fanSize: "120mm",
      heatPipes: "4",
      tdp: "180W",
      socket: "Intel / AMD",
      warranty: "1 Year"
    },
    price: 3200,
    image: "/images/products/thermalright-assassin-x.jpg",
    rating: 4.7,
    stock: 19,
    size: "120mm"
  },

  {
    id: 58,
    title: "Cooler Master Hyper 212",
    subtitle: "Popular Tower CPU Cooler",
    category: "CPU Cooler",
    subcategory: "Air Cooler",
    descriptions: "Popular CPU tower cooler offering balanced cooling performance for gaming and productivity PCs.",
    information: {
      brand: "Cooler Master",
      coolerType: "Air Cooler",
      fanSize: "120mm",
      heatPipes: "4",
      tdp: "180W",
      socket: "Intel / AMD",
      warranty: "2 Years"
    },
    price: 4500,
    image: "/images/products/hyper-212.jpg",
    rating: 4.6,
    stock: 22,
    size: "120mm"
  },

  {
    id: 59,
    title: "DeepCool LS520 SE",
    subtitle: "240mm Liquid CPU Cooler",
    category: "CPU Cooler",
    subcategory: "Liquid Cooler",
    descriptions: "240mm all-in-one liquid cooler designed for powerful gaming processors and high-performance systems.",
    information: {
      brand: "DeepCool",
      coolerType: "Liquid Cooler",
      radiator: "240mm",
      fans: "2 x 120mm",
      pumpSpeed: "3100 RPM",
      socket: "Intel / AMD",
      warranty: "3 Years"
    },
    price: 8500,
    image: "/images/products/deepcool-ls520.jpg",
    rating: 4.8,
    stock: 10,
    size: "240mm"
  },

  {
    id: 60,
    title: "Corsair H100 RGB",
    subtitle: "240mm Performance Liquid Cooler",
    category: "CPU Cooler",
    subcategory: "Liquid Cooler",
    descriptions: "Premium 240mm liquid cooling solution for high-performance gaming and workstation processors.",
    information: {
      brand: "Corsair",
      coolerType: "Liquid Cooler",
      radiator: "240mm",
      fans: "2 x 120mm",
      lighting: "RGB",
      socket: "Intel / AMD",
      warranty: "5 Years"
    },
    price: 12500,
    image: "/images/products/corsair-h100.jpg",
    rating: 4.8,
    stock: 7,
    size: "240mm"
  },

  {
    id: 61,
    title: "Fantech Maxfit61",
    subtitle: "Compact Mechanical Gaming Keyboard",
    category: "Keyboard",
    subcategory: "Mechanical Keyboard",
    descriptions: "Compact mechanical keyboard designed for gaming, programming and daily desktop use.",
    information: {
      brand: "Fantech",
      switch: "Mechanical",
      layout: "60%",
      connection: "USB / Wireless",
      lighting: "RGB",
      keycaps: "Double Shot",
      warranty: "1 Year"
    },
    price: 4800,
    image: "/images/products/fantech-maxfit61.jpg",
    rating: 4.7,
    stock: 25,
    size: "60%"
  },

  {
    id: 62,
    title: "Redragon K552 Kumara",
    subtitle: "87-Key Mechanical Gaming Keyboard",
    category: "Keyboard",
    subcategory: "Mechanical Keyboard",
    descriptions: "Durable mechanical gaming keyboard with compact tenkeyless layout and RGB lighting.",
    information: {
      brand: "Redragon",
      switch: "Outemu Mechanical",
      layout: "TKL",
      connection: "USB",
      lighting: "RGB",
      keyCount: "87 Keys",
      warranty: "1 Year"
    },
    price: 3500,
    image: "/images/products/redragon-k552.jpg",
    rating: 4.6,
    stock: 32,
    size: "TKL"
  },

  {
    id: 63,
    title: "Keychron K2",
    subtitle: "Wireless Mechanical Keyboard",
    category: "Keyboard",
    subcategory: "Mechanical Keyboard",
    descriptions: "Wireless mechanical keyboard suitable for programming, office work and multi-device setups.",
    information: {
      brand: "Keychron",
      switch: "Mechanical",
      layout: "75%",
      connection: "Bluetooth / USB-C",
      lighting: "RGB",
      battery: "4000mAh",
      warranty: "1 Year"
    },
    price: 8500,
    image: "/images/products/keychron-k2.jpg",
    rating: 4.8,
    stock: 11,
    size: "75%"
  },

  {
    id: 64,
    title: "Logitech K120",
    subtitle: "USB Office Keyboard",
    category: "Keyboard",
    subcategory: "Office Keyboard",
    descriptions: "Simple and reliable wired keyboard for office computers, education and everyday typing.",
    information: {
      brand: "Logitech",
      switch: "Membrane",
      layout: "Full Size",
      connection: "USB",
      keyCount: "104 Keys",
      spillResistance: "Yes",
      warranty: "1 Year"
    },
    price: 950,
    image: "/images/products/logitech-k120.jpg",
    rating: 4.5,
    stock: 50,
    size: "Full Size"
  },

  {
    id: 65,
    title: "A4Tech Bloody B160N",
    subtitle: "Gaming Keyboard and Mouse Combo",
    category: "Keyboard",
    subcategory: "Gaming Keyboard",
    descriptions: "Affordable gaming keyboard designed for beginners and everyday gamers.",
    information: {
      brand: "A4Tech",
      switch: "Membrane",
      connection: "USB",
      lighting: "RGB",
      layout: "Full Size",
      warranty: "1 Year"
    },
    price: 2200,
    image: "/images/products/bloody-b160n.jpg",
    rating: 4.4,
    stock: 28,
    size: "Full Size"
  },

  {
    id: 66,
    title: "Logitech G102 Lightsync",
    subtitle: "RGB Gaming Mouse",
    category: "Mouse",
    subcategory: "Gaming Mouse",
    descriptions: "Lightweight gaming mouse with accurate sensor and customizable RGB lighting.",
    information: {
      brand: "Logitech",
      sensor: "8000 DPI",
      buttons: "6",
      connection: "USB",
      lighting: "RGB",
      pollingRate: "1000Hz",
      warranty: "1 Year"
    },
    price: 2200,
    image: "/images/products/logitech-g102.jpg",
    rating: 4.8,
    stock: 45,
    size: "Standard"
  },

  {
    id: 67,
    title: "Razer DeathAdder Essential",
    subtitle: "Ergonomic Gaming Mouse",
    category: "Mouse",
    subcategory: "Gaming Mouse",
    descriptions: "Ergonomic gaming mouse designed for comfortable long gaming sessions and accurate tracking.",
    information: {
      brand: "Razer",
      sensor: "6400 DPI",
      buttons: "5",
      connection: "USB",
      lighting: "Green",
      pollingRate: "1000Hz",
      warranty: "1 Year"
    },
    price: 2600,
    image: "/images/products/razer-deathadder-essential.jpg",
    rating: 4.7,
    stock: 21,
    size: "Standard"
  },

  {
    id: 68,
    title: "Fantech Crypto VX7",
    subtitle: "Lightweight Wireless Gaming Mouse",
    category: "Mouse",
    subcategory: "Gaming Mouse",
    descriptions: "Lightweight wireless gaming mouse with high precision sensor and responsive performance.",
    information: {
      brand: "Fantech",
      sensor: "12000 DPI",
      buttons: "6",
      connection: "Wireless / USB",
      battery: "Rechargeable",
      pollingRate: "1000Hz",
      warranty: "1 Year"
    },
    price: 3200,
    image: "/images/products/fantech-crypto-vx7.jpg",
    rating: 4.7,
    stock: 18,
    size: "Standard"
  },

  {
    id: 69,
    title: "Logitech M185",
    subtitle: "Wireless Office Mouse",
    category: "Mouse",
    subcategory: "Office Mouse",
    descriptions: "Compact wireless mouse designed for office work, laptops and everyday browsing.",
    information: {
      brand: "Logitech",
      sensor: "1000 DPI",
      buttons: "3",
      connection: "2.4GHz Wireless",
      battery: "1 x AA",
      range: "10m",
      warranty: "1 Year"
    },
    price: 1100,
    image: "/images/products/logitech-m185.jpg",
    rating: 4.5,
    stock: 55,
    size: "Compact"
  },

  {
    id: 70,
    title: "Rapoo N200",
    subtitle: "USB Optical Office Mouse",
    category: "Mouse",
    subcategory: "Office Mouse",
    descriptions: "Simple wired optical mouse for desktop computers, office applications and daily use.",
    information: {
      brand: "Rapoo",
      sensor: "1000 DPI",
      buttons: "3",
      connection: "USB",
      cableLength: "1.2m",
      sensorType: "Optical",
      warranty: "1 Year"
    },
    price: 550,
    image: "/images/products/rapoo-n200.jpg",
    rating: 4.4,
    stock: 70,
    size: "Standard"
  },

  {
    id: 71,
    title: "HyperX Cloud III",
    subtitle: "Wired Gaming Headset",
    category: "Headphone",
    subcategory: "Gaming Headset",
    descriptions: "Comfortable gaming headset with clear audio, microphone and long-session comfort.",
    information: {
      brand: "HyperX",
      driver: "53mm",
      connection: "3.5mm / USB",
      microphone: "Detachable",
      surround: "DTS Headphone:X",
      compatibility: "PC / Console",
      warranty: "2 Years"
    },
    price: 11500,
    image: "/images/products/hyperx-cloud-iii.jpg",
    rating: 4.8,
    stock: 13,
    size: "Over Ear"
  },

  {
    id: 72,
    title: "Razer BlackShark V2",
    subtitle: "Esports Gaming Headset",
    category: "Headphone",
    subcategory: "Gaming Headset",
    descriptions: "Gaming headset designed for competitive gaming with detailed audio and clear voice communication.",
    information: {
      brand: "Razer",
      driver: "50mm",
      connection: "3.5mm",
      microphone: "Detachable",
      surround: "7.1 Surround",
      compatibility: "PC / Console",
      warranty: "1 Year"
    },
    price: 9500,
    image: "/images/products/razer-blackshark-v2.jpg",
    rating: 4.7,
    stock: 10,
    size: "Over Ear"
  },

  {
    id: 73,
    title: "Sony WH-CH520",
    subtitle: "Wireless On-Ear Headphone",
    category: "Headphone",
    subcategory: "Wireless Headphone",
    descriptions: "Lightweight wireless headphone with long battery life for music, calls and everyday entertainment.",
    information: {
      brand: "Sony",
      connection: "Bluetooth 5.2",
      battery: "Up to 50 Hours",
      microphone: "Built-in",
      charging: "USB-C",
      audio: "Stereo",
      warranty: "1 Year"
    },
    price: 4500,
    image: "/images/products/sony-wh-ch520.jpg",
    rating: 4.7,
    stock: 24,
    size: "On Ear"
  },

  {
    id: 74,
    title: "JBL Tune 760NC",
    subtitle: "Wireless Noise Cancelling Headphone",
    category: "Headphone",
    subcategory: "Wireless Headphone",
    descriptions: "Wireless over-ear headphone featuring active noise cancellation and long battery life.",
    information: {
      brand: "JBL",
      connection: "Bluetooth 5.0",
      battery: "Up to 50 Hours",
      noiseCancellation: "Active ANC",
      microphone: "Built-in",
      charging: "USB-C",
      warranty: "1 Year"
    },
    price: 8500,
    image: "/images/products/jbl-tune-760nc.jpg",
    rating: 4.6,
    stock: 15,
    size: "Over Ear"
  },

  {
    id: 75,
    title: "Anker Soundcore Q20i",
    subtitle: "Hybrid Noise Cancelling Headphone",
    category: "Headphone",
    subcategory: "Wireless Headphone",
    descriptions: "Comfortable wireless headphone with hybrid active noise cancellation and extended battery life.",
    information: {
      brand: "Anker",
      connection: "Bluetooth 5.0",
      battery: "40 Hours ANC",
      noiseCancellation: "Hybrid ANC",
      microphone: "Built-in",
      charging: "USB-C",
      warranty: "18 Months"
    },
    price: 5200,
    image: "/images/products/soundcore-q20i.jpg",
    rating: 4.7,
    stock: 19,
    size: "Over Ear"
  },

  {
    id: 76,
    title: "TP-Link Archer C6",
    subtitle: "AC1200 Dual Band WiFi Router",
    category: "Networking",
    subcategory: "WiFi Router",
    descriptions: "Dual-band wireless router suitable for home internet, streaming, browsing and small offices.",
    information: {
      brand: "TP-Link",
      wirelessSpeed: "1200Mbps",
      bands: "2.4GHz + 5GHz",
      ports: "4 x LAN",
      antennas: "4 External",
      security: "WPA/WPA2",
      warranty: "1 Year"
    },
    price: 3200,
    image: "/images/products/tp-link-archer-c6.jpg",
    rating: 4.7,
    stock: 40,
    size: "AC1200"
  },

  {
    id: 77,
    title: "TP-Link Archer AX23",
    subtitle: "AX1800 WiFi 6 Router",
    category: "Networking",
    subcategory: "WiFi Router",
    descriptions: "Modern WiFi 6 router offering fast wireless connectivity for homes and small offices.",
    information: {
      brand: "TP-Link",
      wirelessSpeed: "1800Mbps",
      standard: "WiFi 6",
      bands: "2.4GHz + 5GHz",
      ports: "4 x Gigabit LAN",
      antennas: "4 External",
      warranty: "1 Year"
    },
    price: 5800,
    image: "/images/products/tp-link-archer-ax23.jpg",
    rating: 4.8,
    stock: 22,
    size: "AX1800"
  },

  {
    id: 78,
    title: "Tenda AC10",
    subtitle: "AC1200 Smart Dual Band Router",
    category: "Networking",
    subcategory: "WiFi Router",
    descriptions: "Affordable dual-band router for home internet, streaming and connected devices.",
    information: {
      brand: "Tenda",
      wirelessSpeed: "1200Mbps",
      bands: "2.4GHz + 5GHz",
      ports: "3 x LAN",
      antennas: "4 External",
      security: "WPA/WPA2",
      warranty: "1 Year"
    },
    price: 2850,
    image: "/images/products/tenda-ac10.jpg",
    rating: 4.5,
    stock: 34,
    size: "AC1200"
  },

  {
    id: 79,
    title: "Mercusys MR70X",
    subtitle: "AX1800 WiFi 6 Router",
    category: "Networking",
    subcategory: "WiFi Router",
    descriptions: "Affordable WiFi 6 router designed for fast home networking and multiple connected devices.",
    information: {
      brand: "Mercusys",
      wirelessSpeed: "1800Mbps",
      standard: "WiFi 6",
      bands: "2.4GHz + 5GHz",
      ports: "3 x Gigabit",
      antennas: "4 External",
      warranty: "1 Year"
    },
    price: 4100,
    image: "/images/products/mercusys-mr70x.jpg",
    rating: 4.6,
    stock: 26,
    size: "AX1800"
  },

  {
    id: 80,
    title: "D-Link DGS-108",
    subtitle: "8-Port Gigabit Network Switch",
    category: "Networking",
    subcategory: "Network Switch",
    descriptions: "Compact unmanaged Gigabit switch for expanding wired network connections at home or office.",
    information: {
      brand: "D-Link",
      ports: "8 x Gigabit",
      switchingCapacity: "16Gbps",
      management: "Unmanaged",
      installation: "Plug and Play",
      power: "External Adapter",
      warranty: "1 Year"
    },
    price: 2800,
    image: "/images/products/dlink-dgs-108.jpg",
    rating: 4.7,
    stock: 31,
    size: "8 Port"
  },

  {
    id: 81,
    title: "Epson EcoTank L3250",
    subtitle: "All-in-One Ink Tank Printer",
    category: "Printer",
    subcategory: "Ink Tank Printer",
    descriptions: "All-in-one ink tank printer for home, school and small office printing, scanning and copying.",
    information: {
      brand: "Epson",
      printerType: "Ink Tank",
      functions: "Print / Scan / Copy",
      connectivity: "USB / WiFi",
      printSpeed: "Black 10 ipm",
      paperSize: "A4",
      warranty: "1 Year"
    },
    price: 20500,
    image: "/images/products/epson-l3250.jpg",
    rating: 4.8,
    stock: 15,
    size: "A4"
  },

  {
    id: 82,
    title: "Canon PIXMA G3010",
    subtitle: "Wireless Ink Tank Printer",
    category: "Printer",
    subcategory: "Ink Tank Printer",
    descriptions: "Wireless multifunction printer with refillable ink tanks for economical home and office printing.",
    information: {
      brand: "Canon",
      printerType: "Ink Tank",
      functions: "Print / Scan / Copy",
      connectivity: "USB / WiFi",
      printSpeed: "Black 8.8 ipm",
      paperSize: "A4",
      warranty: "1 Year"
    },
    price: 18500,
    image: "/images/products/canon-g3010.jpg",
    rating: 4.6,
    stock: 17,
    size: "A4"
  },

  {
    id: 83,
    title: "HP Smart Tank 580",
    subtitle: "Wireless All-in-One Printer",
    category: "Printer",
    subcategory: "Ink Tank Printer",
    descriptions: "High-yield ink tank printer designed for economical home, education and small office printing.",
    information: {
      brand: "HP",
      printerType: "Ink Tank",
      functions: "Print / Scan / Copy",
      connectivity: "USB / WiFi",
      mobilePrinting: "HP Smart App",
      paperSize: "A4",
      warranty: "1 Year"
    },
    price: 22000,
    image: "/images/products/hp-smart-tank-580.jpg",
    rating: 4.7,
    stock: 12,
    size: "A4"
  },

  {
    id: 84,
    title: "Brother DCP-T420W",
    subtitle: "Wireless Ink Tank Multifunction Printer",
    category: "Printer",
    subcategory: "Ink Tank Printer",
    descriptions: "Economical wireless ink tank printer for home and small office document printing.",
    information: {
      brand: "Brother",
      printerType: "Ink Tank",
      functions: "Print / Scan / Copy",
      connectivity: "USB / WiFi",
      paperSize: "A4",
      mobilePrinting: "Brother Mobile Connect",
      warranty: "1 Year"
    },
    price: 19500,
    image: "/images/products/brother-dcp-t420w.jpg",
    rating: 4.6,
    stock: 10,
    size: "A4"
  },

  {
    id: 85,
    title: "HP LaserJet M111w",
    subtitle: "Compact Wireless Laser Printer",
    category: "Printer",
    subcategory: "Laser Printer",
    descriptions: "Compact monochrome laser printer designed for fast and efficient document printing.",
    information: {
      brand: "HP",
      printerType: "Monochrome Laser",
      functions: "Print",
      connectivity: "USB / WiFi",
      printSpeed: "20 ppm",
      paperSize: "A4",
      warranty: "1 Year"
    },
    price: 16500,
    image: "/images/products/hp-laserjet-m111w.jpg",
    rating: 4.5,
    stock: 9,
    size: "A4"
  },

  {
    id: 86,
    title: "Canon EOS R50",
    subtitle: "24MP Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Compact mirrorless camera suitable for photography, content creation and beginner videography.",
    information: {
      brand: "Canon",
      sensor: "24.2MP APS-C",
      lensMount: "RF Mount",
      video: "4K",
      autofocus: "Dual Pixel CMOS AF",
      connectivity: "WiFi / Bluetooth",
      warranty: "1 Year"
    },
    price: 92000,
    image: "/images/products/canon-eos-r50.jpg",
    rating: 4.8,
    stock: 5,
    size: "APS-C"
  },

  {
    id: 87,
    title: "Sony Alpha ZV-E10",
    subtitle: "Content Creator Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Compact interchangeable-lens camera designed for vloggers, creators and photography enthusiasts.",
    information: {
      brand: "Sony",
      sensor: "24.2MP APS-C",
      lensMount: "E Mount",
      video: "4K",
      autofocus: "Real-time Tracking",
      connectivity: "WiFi / Bluetooth",
      warranty: "1 Year"
    },
    price: 88000,
    image: "/images/products/sony-zv-e10.jpg",
    rating: 4.8,
    stock: 6,
    size: "APS-C"
  },

  {
    id: 88,
    title: "Nikon Z30",
    subtitle: "Vlogging Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Compact mirrorless camera designed for vlogging, social media content and everyday photography.",
    information: {
      brand: "Nikon",
      sensor: "20.9MP APS-C",
      lensMount: "Z Mount",
      video: "4K UHD",
      autofocus: "Eye Detection",
      connectivity: "WiFi / Bluetooth",
      warranty: "1 Year"
    },
    price: 85000,
    image: "/images/products/nikon-z30.jpg",
    rating: 4.7,
    stock: 7,
    size: "APS-C"
  },

  {
    id: 89,
    title: "GoPro HERO12 Black",
    subtitle: "5.3K Action Camera",
    category: "Camera",
    subcategory: "Action Camera",
    descriptions: "Rugged action camera designed for travel, sports, adventure recording and outdoor content.",
    information: {
      brand: "GoPro",
      sensor: "1/1.9-inch",
      video: "5.3K 60fps",
      stabilization: "HyperSmooth 6.0",
      waterproof: "10m",
      connectivity: "WiFi / Bluetooth",
      warranty: "1 Year"
    },
    price: 52000,
    image: "/images/products/gopro-hero12.jpg",
    rating: 4.8,
    stock: 8,
    size: "Action Camera"
  },

  {
    id: 90,
    title: "DJI Osmo Action 4",
    subtitle: "4K Adventure Action Camera",
    category: "Camera",
    subcategory: "Action Camera",
    descriptions: "Durable action camera with strong low-light performance and stabilization for adventure recording.",
    information: {
      brand: "DJI",
      sensor: "1/1.3-inch",
      video: "4K 120fps",
      stabilization: "RockSteady 3.0",
      waterproof: "18m",
      connectivity: "WiFi / Bluetooth",
      warranty: "1 Year"
    },
    price: 48000,
    image: "/images/products/dji-osmo-action-4.jpg",
    rating: 4.8,
    stock: 6,
    size: "Action Camera"
  },

  {
    id: 91,
    title: "PlayStation 5 Slim",
    subtitle: "Next Generation Gaming Console",
    category: "Gaming",
    subcategory: "Gaming Console",
    descriptions: "Powerful gaming console offering high-quality graphics, fast loading and a large game library.",
    information: {
      brand: "Sony",
      storage: "1TB SSD",
      resolution: "Up to 4K",
      frameRate: "Up to 120fps",
      connectivity: "WiFi / Bluetooth",
      opticalDrive: "Blu-ray",
      warranty: "1 Year"
    },
    price: 78000,
    image: "/images/products/ps5-slim.jpg",
    rating: 4.9,
    stock: 7,
    size: "Slim"
  },

  {
    id: 92,
    title: "Xbox Series X",
    subtitle: "4K Gaming Console",
    category: "Gaming",
    subcategory: "Gaming Console",
    descriptions: "High-performance gaming console designed for 4K gaming and fast loading experiences.",
    information: {
      brand: "Microsoft",
      storage: "1TB SSD",
      resolution: "Up to 4K",
      frameRate: "Up to 120fps",
      connectivity: "WiFi / Bluetooth",
      opticalDrive: "4K UHD Blu-ray",
      warranty: "1 Year"
    },
    price: 72000,
    image: "/images/products/xbox-series-x.jpg",
    rating: 4.8,
    stock: 5,
    size: "Standard"
  },

  {
    id: 93,
    title: "Nintendo Switch OLED",
    subtitle: "Hybrid Gaming Console",
    category: "Gaming",
    subcategory: "Gaming Console",
    descriptions: "Flexible hybrid console that can be used as a handheld device or connected to a television.",
    information: {
      brand: "Nintendo",
      storage: "64GB",
      display: "7-inch OLED",
      resolution: "720p Handheld",
      connectivity: "WiFi / Bluetooth",
      battery: "4.5-9 Hours",
      warranty: "1 Year"
    },
    price: 48000,
    image: "/images/products/nintendo-switch-oled.jpg",
    rating: 4.8,
    stock: 8,
    size: "7-inch"
  },

  {
    id: 94,
    title: "ASUS ROG Ally",
    subtitle: "Portable Windows Gaming Console",
    category: "Gaming",
    subcategory: "Gaming Console",
    descriptions: "Portable Windows gaming device for playing PC games on the go.",
    information: {
      brand: "ASUS",
      processor: "AMD Ryzen Z1 Extreme",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "7-inch 120Hz",
      battery: "40Wh",
      warranty: "1 Year"
    },
    price: 68000,
    image: "/images/products/asus-rog-ally.jpg",
    rating: 4.7,
    stock: 6,
    size: "7-inch"
  },

  {
    id: 95,
    title: "8BitDo Ultimate Controller",
    subtitle: "Wireless Gaming Controller",
    category: "Gaming",
    subcategory: "Gaming Accessory",
    descriptions: "Wireless gaming controller designed for PC, Switch and compatible gaming platforms.",
    information: {
      brand: "8BitDo",
      connection: "Bluetooth / 2.4GHz",
      battery: "Rechargeable",
      vibration: "Dual Vibration",
      compatibility: "PC / Switch",
      charging: "USB-C",
      warranty: "1 Year"
    },
    price: 6200,
    image: "/images/products/8bitdo-ultimate.jpg",
    rating: 4.8,
    stock: 14,
    size: "Standard"
  },

  {
    id: 96,
    title: "JBL Flip 6",
    subtitle: "Portable Bluetooth Speaker",
    category: "Speaker",
    subcategory: "Bluetooth Speaker",
    descriptions: "Portable waterproof Bluetooth speaker with powerful sound for indoor and outdoor listening.",
    information: {
      brand: "JBL",
      output: "30W",
      connectivity: "Bluetooth 5.1",
      battery: "Up to 12 Hours",
      waterproof: "IP67",
      charging: "USB-C",
      warranty: "1 Year"
    },
    price: 10500,
    image: "/images/products/jbl-flip-6.jpg",
    rating: 4.8,
    stock: 18,
    size: "Portable"
  },

  {
    id: 97,
    title: "Anker Soundcore 3",
    subtitle: "Portable Wireless Speaker",
    category: "Speaker",
    subcategory: "Bluetooth Speaker",
    descriptions: "Compact Bluetooth speaker with strong battery life and balanced sound for everyday listening.",
    information: {
      brand: "Anker",
      output: "16W",
      connectivity: "Bluetooth 5.0",
      battery: "Up to 24 Hours",
      waterproof: "IPX7",
      charging: "USB-C",
      warranty: "18 Months"
    },
    price: 6200,
    image: "/images/products/soundcore-3.jpg",
    rating: 4.7,
    stock: 25,
    size: "Portable"
  },

  {
    id: 98,
    title: "Edifier R1280DB",
    subtitle: "Bluetooth Bookshelf Speaker",
    category: "Speaker",
    subcategory: "Desktop Speaker",
    descriptions: "Powered bookshelf speaker system suitable for computers, televisions, music and home entertainment.",
    information: {
      brand: "Edifier",
      output: "42W RMS",
      connectivity: "Bluetooth / Optical / RCA",
      drivers: "4-inch Woofer",
      remote: "Wireless Remote",
      enclosure: "Wood",
      warranty: "1 Year"
    },
    price: 11500,
    image: "/images/products/edifier-r1280db.jpg",
    rating: 4.8,
    stock: 11,
    size: "Bookshelf"
  },

  {
    id: 99,
    title: "Creative Pebble V3",
    subtitle: "Compact USB Desktop Speaker",
    category: "Speaker",
    subcategory: "Desktop Speaker",
    descriptions: "Compact desktop speakers designed for computers, laptops and small workspaces.",
    information: {
      brand: "Creative",
      output: "8W RMS",
      connectivity: "USB-C / Bluetooth",
      drivers: "2.25-inch",
      power: "USB",
      controls: "Front Volume",
      warranty: "1 Year"
    },
    price: 4200,
    image: "/images/products/creative-pebble-v3.jpg",
    rating: 4.6,
    stock: 20,
    size: "Compact"
  },

  {
    id: 100,
    title: "F&D A180X",
    subtitle: "2.1 Channel Multimedia Speaker",
    category: "Speaker",
    subcategory: "Desktop Speaker",
    descriptions: "2.1 channel multimedia speaker system designed for computers, movies, music and gaming.",
    information: {
      brand: "F&D",
      output: "42W RMS",
      connectivity: "Bluetooth / USB / AUX",
      channels: "2.1",
      subwoofer: "4-inch",
      remote: "Wireless Remote",
      warranty: "1 Year"
    },
    price: 4800,
    image: "/images/products/fd-a180x.jpg",
    rating: 4.5,
    stock: 16,
    size: "2.1 Channel"
  },
  // =========================
  // BATCH 3 — PRODUCTS 101-150
  // =========================

  {
    id: 101,
    title: "Samsung 870 EVO 500GB SATA SSD",
    subtitle: "500GB 2.5-inch SATA III SSD",
    category: "Storage",
    subcategory: "SATA SSD",
    descriptions: "Reliable SATA SSD designed for faster boot times, application loading and everyday computing.",
    information: {
      brand: "Samsung",
      capacity: "500GB",
      interface: "SATA III 6Gb/s",
      formFactor: "2.5-inch",
      readSpeed: "Up to 560MB/s",
      writeSpeed: "Up to 530MB/s",
      warranty: "5 Years"
    },
    price: 6200,
    image: "/images/products/samsung-870-evo-500gb.jpg",
    rating: 4.8,
    stock: 18,
    size: "2.5-inch"
  },

  {
    id: 102,
    title: "Crucial BX500 1TB SATA SSD",
    subtitle: "1TB 2.5-inch SATA SSD",
    category: "Storage",
    subcategory: "SATA SSD",
    descriptions: "Affordable 1TB SATA SSD suitable for desktop and laptop upgrades.",
    information: {
      brand: "Crucial",
      capacity: "1TB",
      interface: "SATA III",
      formFactor: "2.5-inch",
      readSpeed: "Up to 540MB/s",
      writeSpeed: "Up to 500MB/s",
      warranty: "3 Years"
    },
    price: 8200,
    image: "/images/products/crucial-bx500-1tb.jpg",
    rating: 4.6,
    stock: 25,
    size: "2.5-inch"
  },

  {
    id: 103,
    title: "WD Blue SN580 1TB NVMe SSD",
    subtitle: "1TB PCIe Gen4 NVMe SSD",
    category: "Storage",
    subcategory: "NVMe SSD",
    descriptions: "High-speed PCIe Gen4 NVMe SSD designed for gaming, productivity and content creation.",
    information: {
      brand: "Western Digital",
      capacity: "1TB",
      interface: "PCIe Gen4 x4",
      formFactor: "M.2 2280",
      readSpeed: "Up to 4150MB/s",
      writeSpeed: "Up to 4150MB/s",
      warranty: "5 Years"
    },
    price: 8500,
    image: "/images/products/wd-blue-sn580-1tb.jpg",
    rating: 4.8,
    stock: 20,
    size: "M.2 2280"
  },

  {
    id: 104,
    title: "Kingston NV2 1TB NVMe SSD",
    subtitle: "1TB PCIe 4.0 NVMe SSD",
    category: "Storage",
    subcategory: "NVMe SSD",
    descriptions: "Compact and fast NVMe storage solution for modern desktops and laptops.",
    information: {
      brand: "Kingston",
      capacity: "1TB",
      interface: "PCIe 4.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "Up to 3500MB/s",
      writeSpeed: "Up to 2100MB/s",
      warranty: "3 Years"
    },
    price: 7800,
    image: "/images/products/kingston-nv2-1tb.jpg",
    rating: 4.6,
    stock: 30,
    size: "M.2 2280"
  },

  {
    id: 105,
    title: "Lexar NM790 2TB NVMe SSD",
    subtitle: "2TB PCIe Gen4 Performance SSD",
    category: "Storage",
    subcategory: "NVMe SSD",
    descriptions: "High-capacity high-performance NVMe SSD suitable for gaming and professional workloads.",
    information: {
      brand: "Lexar",
      capacity: "2TB",
      interface: "PCIe Gen4 x4",
      formFactor: "M.2 2280",
      readSpeed: "Up to 7400MB/s",
      writeSpeed: "Up to 6500MB/s",
      warranty: "5 Years"
    },
    price: 18500,
    image: "/images/products/lexar-nm790-2tb.jpg",
    rating: 4.9,
    stock: 10,
    size: "M.2 2280"
  },

  {
    id: 106,
    title: "Samsung T7 1TB Portable SSD",
    subtitle: "USB 3.2 Gen2 Portable SSD",
    category: "Storage",
    subcategory: "External SSD",
    descriptions: "Compact portable SSD with fast transfer speeds for backup and mobile storage.",
    information: {
      brand: "Samsung",
      capacity: "1TB",
      interface: "USB 3.2 Gen2",
      readSpeed: "Up to 1050MB/s",
      writeSpeed: "Up to 1000MB/s",
      encryption: "AES 256-bit",
      warranty: "3 Years"
    },
    price: 13500,
    image: "/images/products/samsung-t7-1tb.jpg",
    rating: 4.8,
    stock: 14,
    size: "Compact"
  },

  {
    id: 107,
    title: "SanDisk Extreme Portable SSD 1TB",
    subtitle: "USB-C Rugged Portable SSD",
    category: "Storage",
    subcategory: "External SSD",
    descriptions: "Durable portable SSD designed for fast file transfers and outdoor use.",
    information: {
      brand: "SanDisk",
      capacity: "1TB",
      interface: "USB-C",
      readSpeed: "Up to 1050MB/s",
      writeSpeed: "Up to 1000MB/s",
      protection: "IP65",
      warranty: "5 Years"
    },
    price: 14500,
    image: "/images/products/sandisk-extreme-1tb.jpg",
    rating: 4.8,
    stock: 12,
    size: "Compact"
  },

  {
    id: 108,
    title: "Seagate Expansion 2TB External HDD",
    subtitle: "USB 3.0 Portable External Hard Drive",
    category: "Storage",
    subcategory: "External HDD",
    descriptions: "Portable 2TB external hard drive for backup, media storage and everyday file management.",
    information: {
      brand: "Seagate",
      capacity: "2TB",
      interface: "USB 3.0",
      RPM: "5400 RPM",
      compatibility: "Windows, macOS",
      warranty: "2 Years"
    },
    price: 6800,
    image: "/images/products/seagate-expansion-2tb.jpg",
    rating: 4.6,
    stock: 22,
    size: "2.5-inch"
  },

  {
    id: 109,
    title: "WD Purple 4TB Surveillance HDD",
    subtitle: "4TB SATA Surveillance Hard Drive",
    category: "Storage",
    subcategory: "HDD",
    descriptions: "Surveillance-grade hard drive designed for continuous video recording systems.",
    information: {
      brand: "Western Digital",
      capacity: "4TB",
      interface: "SATA III",
      RPM: "5400 RPM",
      cache: "256MB",
      workload: "180TB/year",
      warranty: "3 Years"
    },
    price: 10500,
    image: "/images/products/wd-purple-4tb.jpg",
    rating: 4.7,
    stock: 16,
    size: "3.5-inch"
  },

  {
    id: 110,
    title: "Toshiba P300 2TB HDD",
    subtitle: "2TB 7200RPM Desktop Hard Drive",
    category: "Storage",
    subcategory: "HDD",
    descriptions: "High-capacity desktop hard drive suitable for storage, media and general computing.",
    information: {
      brand: "Toshiba",
      capacity: "2TB",
      interface: "SATA III",
      RPM: "7200 RPM",
      cache: "64MB",
      formFactor: "3.5-inch",
      warranty: "2 Years"
    },
    price: 7200,
    image: "/images/products/toshiba-p300-2tb.jpg",
    rating: 4.5,
    stock: 24,
    size: "3.5-inch"
  },

  {
    id: 111,
    title: "ASUS PRIME B760M-A WIFI",
    subtitle: "Intel B760 DDR5 Micro ATX Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    descriptions: "Feature-rich Intel motherboard with DDR5 memory and integrated wireless connectivity.",
    information: {
      brand: "ASUS",
      chipset: "Intel B760",
      socket: "LGA1700",
      memory: "DDR5",
      maxMemory: "128GB",
      wireless: "Wi-Fi 6",
      formFactor: "Micro ATX"
    },
    price: 18500,
    image: "/images/products/asus-prime-b760m-a-wifi.jpg",
    rating: 4.8,
    stock: 9,
    size: "Micro ATX"
  },

  {
    id: 112,
    title: "MSI MAG B650 Tomahawk WIFI",
    subtitle: "AMD B650 AM5 DDR5 Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    descriptions: "Powerful AM5 motherboard designed for Ryzen processors and high-performance gaming systems.",
    information: {
      brand: "MSI",
      chipset: "AMD B650",
      socket: "AM5",
      memory: "DDR5",
      maxMemory: "128GB",
      wireless: "Wi-Fi 6E",
      formFactor: "ATX"
    },
    price: 24500,
    image: "/images/products/msi-b650-tomahawk.jpg",
    rating: 4.9,
    stock: 7,
    size: "ATX"
  },

  {
    id: 113,
    title: "Gigabyte B650M DS3H",
    subtitle: "AMD B650 Micro ATX Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    descriptions: "Affordable AM5 motherboard for Ryzen processors with DDR5 memory support.",
    information: {
      brand: "Gigabyte",
      chipset: "AMD B650",
      socket: "AM5",
      memory: "DDR5",
      maxMemory: "128GB",
      storage: "PCIe 4.0 M.2",
      formFactor: "Micro ATX"
    },
    price: 16500,
    image: "/images/products/gigabyte-b650m-ds3h.jpg",
    rating: 4.7,
    stock: 12,
    size: "Micro ATX"
  },

  {
    id: 114,
    title: "ASRock B760M Pro RS",
    subtitle: "Intel B760 DDR5 Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    descriptions: "Modern Intel motherboard offering DDR5 support and multiple expansion options.",
    information: {
      brand: "ASRock",
      chipset: "Intel B760",
      socket: "LGA1700",
      memory: "DDR5",
      maxMemory: "192GB",
      storage: "PCIe 4.0 M.2",
      formFactor: "Micro ATX"
    },
    price: 15800,
    image: "/images/products/asrock-b760m-pro-rs.jpg",
    rating: 4.6,
    stock: 11,
    size: "Micro ATX"
  },

  {
    id: 115,
    title: "Corsair Vengeance RGB 32GB DDR5",
    subtitle: "32GB 6000MHz DDR5 Gaming RAM",
    category: "Components",
    subcategory: "RAM",
    descriptions: "High-speed RGB DDR5 memory kit designed for gaming and performance desktops.",
    information: {
      brand: "Corsair",
      capacity: "32GB",
      kit: "2 x 16GB",
      speed: "6000MHz",
      type: "DDR5",
      latency: "CL36",
      warranty: "Lifetime"
    },
    price: 12500,
    image: "/images/products/corsair-vengeance-rgb-32gb.jpg",
    rating: 4.9,
    stock: 15,
    size: "2 x 16GB"
  },

  {
    id: 116,
    title: "G.Skill Ripjaws S5 32GB DDR5",
    subtitle: "32GB 6000MHz DDR5 Memory Kit",
    category: "Components",
    subcategory: "RAM",
    descriptions: "Low-profile DDR5 memory kit designed for high-performance desktop systems.",
    information: {
      brand: "G.Skill",
      capacity: "32GB",
      kit: "2 x 16GB",
      speed: "6000MHz",
      type: "DDR5",
      latency: "CL36",
      warranty: "Lifetime"
    },
    price: 11800,
    image: "/images/products/gskill-ripjaws-s5-32gb.jpg",
    rating: 4.8,
    stock: 17,
    size: "2 x 16GB"
  },

  {
    id: 117,
    title: "Kingston Fury Beast 16GB DDR4",
    subtitle: "16GB 3200MHz DDR4 Desktop RAM",
    category: "Components",
    subcategory: "RAM",
    descriptions: "Reliable DDR4 desktop memory suitable for gaming and everyday performance.",
    information: {
      brand: "Kingston",
      capacity: "16GB",
      kit: "1 x 16GB",
      speed: "3200MHz",
      type: "DDR4",
      latency: "CL16",
      warranty: "Lifetime"
    },
    price: 4200,
    image: "/images/products/kingston-fury-beast-16gb.jpg",
    rating: 4.7,
    stock: 28,
    size: "16GB"
  },

  {
    id: 118,
    title: "Team T-Force Vulcan Z 16GB",
    subtitle: "16GB 3200MHz DDR4 Gaming RAM",
    category: "Components",
    subcategory: "RAM",
    descriptions: "Affordable performance RAM for gaming and productivity desktops.",
    information: {
      brand: "TeamGroup",
      capacity: "16GB",
      kit: "1 x 16GB",
      speed: "3200MHz",
      type: "DDR4",
      latency: "CL16",
      warranty: "Lifetime"
    },
    price: 3900,
    image: "/images/products/team-tforce-vulcan-z-16gb.jpg",
    rating: 4.6,
    stock: 32,
    size: "16GB"
  },

  {
    id: 119,
    title: "NZXT H5 Flow",
    subtitle: "Mid Tower ATX Gaming PC Case",
    category: "Components",
    subcategory: "PC Casing",
    descriptions: "Airflow-focused gaming case with a clean modern design and flexible component support.",
    information: {
      brand: "NZXT",
      motherboard: "ATX, Micro ATX, Mini ITX",
      GPUClearance: "365mm",
      CPULimit: "165mm",
      fans: "2 Included",
      frontPanel: "USB Type-C",
      warranty: "2 Years"
    },
    price: 11500,
    image: "/images/products/nzxt-h5-flow.jpg",
    rating: 4.8,
    stock: 10,
    size: "Mid Tower"
  },

  {
    id: 120,
    title: "Montech Air 100 ARGB",
    subtitle: "Micro ATX Gaming Case",
    category: "Components",
    subcategory: "PC Casing",
    descriptions: "Compact gaming case featuring mesh airflow and pre-installed ARGB fans.",
    information: {
      brand: "Montech",
      motherboard: "Micro ATX, Mini ITX",
      GPUClearance: "330mm",
      fans: "4 ARGB Fans",
      frontPanel: "USB 3.0",
      sidePanel: "Tempered Glass",
      warranty: "1 Year"
    },
    price: 7800,
    image: "/images/products/montech-air-100-argb.jpg",
    rating: 4.7,
    stock: 13,
    size: "Micro ATX"
  },

  {
    id: 121,
    title: "Lian Li Lancool 216",
    subtitle: "High Airflow ATX Gaming Case",
    category: "Components",
    subcategory: "PC Casing",
    descriptions: "Premium airflow-focused gaming chassis with large front intake fans.",
    information: {
      brand: "Lian Li",
      motherboard: "ATX, Micro ATX, Mini ITX",
      GPUClearance: "392mm",
      CPULimit: "180mm",
      fans: "2 x 160mm Front",
      sidePanel: "Tempered Glass",
      warranty: "2 Years"
    },
    price: 14500,
    image: "/images/products/lian-li-lancool-216.jpg",
    rating: 4.9,
    stock: 8,
    size: "Mid Tower"
  },

  {
    id: 122,
    title: "Cooler Master TD500 Mesh V2",
    subtitle: "ARGB Mid Tower Gaming Case",
    category: "Components",
    subcategory: "PC Casing",
    descriptions: "Stylish mesh gaming case with excellent airflow and ARGB lighting.",
    information: {
      brand: "Cooler Master",
      motherboard: "ATX, Micro ATX, Mini ITX",
      GPUClearance: "410mm",
      CPULimit: "165mm",
      fans: "3 ARGB Fans",
      sidePanel: "Tempered Glass",
      warranty: "2 Years"
    },
    price: 12500,
    image: "/images/products/cooler-master-td500.jpg",
    rating: 4.8,
    stock: 11,
    size: "Mid Tower"
  },

  {
    id: 123,
    title: "ASUS TUF Gaming VG249Q3A",
    subtitle: "23.8-inch 180Hz Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "Fast IPS gaming monitor with high refresh rate and smooth gaming performance.",
    information: {
      brand: "ASUS",
      display: "23.8-inch",
      resolution: "1920 x 1080",
      panel: "Fast IPS",
      refreshRate: "180Hz",
      responseTime: "1ms",
      ports: "HDMI, DisplayPort"
    },
    price: 21500,
    image: "/images/products/asus-tuf-vg249q3a.jpg",
    rating: 4.8,
    stock: 9,
    size: "23.8-inch"
  },

  {
    id: 124,
    title: "Gigabyte G24F 2",
    subtitle: "23.8-inch 180Hz Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "Full HD gaming monitor featuring a fast IPS panel and high refresh rate.",
    information: {
      brand: "Gigabyte",
      display: "23.8-inch",
      resolution: "1920 x 1080",
      panel: "SS IPS",
      refreshRate: "180Hz",
      responseTime: "1ms",
      ports: "HDMI, DisplayPort"
    },
    price: 20500,
    image: "/images/products/gigabyte-g24f-2.jpg",
    rating: 4.7,
    stock: 12,
    size: "23.8-inch"
  },

  {
    id: 125,
    title: "Samsung Odyssey G5 32",
    subtitle: "32-inch QHD 165Hz Curved Gaming Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    descriptions: "Large curved gaming display with QHD resolution and high refresh rate.",
    information: {
      brand: "Samsung",
      display: "32-inch",
      resolution: "2560 x 1440",
      panel: "VA",
      refreshRate: "165Hz",
      responseTime: "1ms",
      curvature: "1000R"
    },
    price: 36000,
    image: "/images/products/samsung-odyssey-g5-32.jpg",
    rating: 4.8,
    stock: 6,
    size: "32-inch"
  },

  {
    id: 126,
    title: "Dell P2425H",
    subtitle: "24-inch Full HD Professional Monitor",
    category: "Monitor",
    subcategory: "Office Monitor",
    descriptions: "Professional productivity monitor designed for comfortable office and business use.",
    information: {
      brand: "Dell",
      display: "23.8-inch",
      resolution: "1920 x 1080",
      panel: "IPS",
      refreshRate: "100Hz",
      responseTime: "5ms",
      ports: "HDMI, DisplayPort"
    },
    price: 24500,
    image: "/images/products/dell-p2425h.jpg",
    rating: 4.8,
    stock: 10,
    size: "23.8-inch"
  },

  {
    id: 127,
    title: "TP-Link Archer AX55",
    subtitle: "AX3000 Dual Band Wi-Fi 6 Router",
    category: "Networking",
    subcategory: "Wi-Fi Router",
    descriptions: "High-speed Wi-Fi 6 router suitable for home, office and streaming environments.",
    information: {
      brand: "TP-Link",
      wireless: "Wi-Fi 6",
      speed: "AX3000",
      bands: "Dual Band",
      ethernet: "Gigabit",
      antennas: "4 External",
      security: "WPA3"
    },
    price: 10500,
    image: "/images/products/tp-link-archer-ax55.jpg",
    rating: 4.8,
    stock: 18,
    size: "Standard"
  },

  {
    id: 128,
    title: "TP-Link Deco X20",
    subtitle: "AX1800 Whole Home Mesh Wi-Fi System",
    category: "Networking",
    subcategory: "Mesh Wi-Fi",
    descriptions: "Whole-home mesh networking system designed to provide stable wireless coverage.",
    information: {
      brand: "TP-Link",
      wireless: "Wi-Fi 6",
      speed: "AX1800",
      coverage: "Up to 5800 sq.ft",
      units: "3 Pack",
      ethernet: "Gigabit",
      security: "WPA3"
    },
    price: 23500,
    image: "/images/products/tp-link-deco-x20.jpg",
    rating: 4.8,
    stock: 7,
    size: "3 Pack"
  },

  {
    id: 129,
    title: "Tenda RX9 Pro",
    subtitle: "AX3000 Wi-Fi 6 Gigabit Router",
    category: "Networking",
    subcategory: "Wi-Fi Router",
    descriptions: "Affordable Wi-Fi 6 router designed for fast wireless connectivity and gaming.",
    information: {
      brand: "Tenda",
      wireless: "Wi-Fi 6",
      speed: "AX3000",
      bands: "Dual Band",
      ethernet: "Gigabit",
      antennas: "4 External",
      security: "WPA3"
    },
    price: 7200,
    image: "/images/products/tenda-rx9-pro.jpg",
    rating: 4.6,
    stock: 21,
    size: "Standard"
  },

  {
    id: 130,
    title: "TP-Link TL-SG1016D",
    subtitle: "16-Port Gigabit Desktop/Rack Switch",
    category: "Networking",
    subcategory: "Network Switch",
    descriptions: "16-port unmanaged gigabit switch suitable for offices and larger networks.",
    information: {
      brand: "TP-Link",
      ports: "16 x Gigabit",
      speed: "10/100/1000Mbps",
      switchingCapacity: "32Gbps",
      management: "Unmanaged",
      installation: "Desktop/Rack"
    },
    price: 8200,
    image: "/images/products/tp-link-tl-sg1016d.jpg",
    rating: 4.7,
    stock: 14,
    size: "16-Port"
  },

  {
    id: 131,
    title: "Logitech C920 HD Pro",
    subtitle: "Full HD 1080p USB Webcam",
    category: "Accessories",
    subcategory: "Webcam",
    descriptions: "Full HD webcam suitable for video meetings, online classes and streaming.",
    information: {
      brand: "Logitech",
      resolution: "1080p",
      frameRate: "30 FPS",
      microphone: "Stereo",
      connection: "USB-A",
      autofocus: "Yes",
      compatibility: "Windows, macOS"
    },
    price: 7800,
    image: "/images/products/logitech-c920.jpg",
    rating: 4.8,
    stock: 16,
    size: "Standard"
  },

  {
    id: 132,
    title: "A4Tech PK-910H",
    subtitle: "Full HD 1080p USB Webcam",
    category: "Accessories",
    subcategory: "Webcam",
    descriptions: "Affordable Full HD webcam for online meetings, classes and video calls.",
    information: {
      brand: "A4Tech",
      resolution: "1080p",
      frameRate: "30 FPS",
      microphone: "Built-in",
      connection: "USB",
      focus: "Manual",
      compatibility: "Windows"
    },
    price: 3200,
    image: "/images/products/a4tech-pk-910h.jpg",
    rating: 4.5,
    stock: 25,
    size: "Standard"
  },

  {
    id: 133,
    title: "Rapoo C260",
    subtitle: "Full HD USB Webcam with Microphone",
    category: "Accessories",
    subcategory: "Webcam",
    descriptions: "Compact Full HD webcam designed for meetings, online learning and video calls.",
    information: {
      brand: "Rapoo",
      resolution: "1080p",
      frameRate: "30 FPS",
      microphone: "Built-in",
      connection: "USB",
      lens: "Wide Angle",
      compatibility: "Windows, macOS"
    },
    price: 2900,
    image: "/images/products/rapoo-c260.jpg",
    rating: 4.5,
    stock: 30,
    size: "Standard"
  },

  {
    id: 134,
    title: "APC Easy UPS 650VA",
    subtitle: "650VA Line Interactive UPS",
    category: "Power",
    subcategory: "UPS",
    descriptions: "Compact UPS designed to provide backup power and surge protection for computers.",
    information: {
      brand: "APC",
      capacity: "650VA",
      outputPower: "360W",
      battery: "12V 7Ah",
      topology: "Line Interactive",
      outlets: "4",
      warranty: "2 Years"
    },
    price: 6500,
    image: "/images/products/apc-easy-ups-650va.jpg",
    rating: 4.7,
    stock: 18,
    size: "650VA"
  },

  {
    id: 135,
    title: "MaxGreen 1200VA UPS",
    subtitle: "1200VA Line Interactive UPS",
    category: "Power",
    subcategory: "UPS",
    descriptions: "High-capacity UPS suitable for desktop computers, networking equipment and office systems.",
    information: {
      brand: "MaxGreen",
      capacity: "1200VA",
      outputPower: "720W",
      battery: "2 x 12V",
      topology: "Line Interactive",
      display: "LCD",
      warranty: "1 Year"
    },
    price: 9800,
    image: "/images/products/maxgreen-1200va-ups.jpg",
    rating: 4.5,
    stock: 12,
    size: "1200VA"
  },

  {
    id: 136,
    title: "Power Guard 1000VA UPS",
    subtitle: "1000VA Computer Backup UPS",
    category: "Power",
    subcategory: "UPS",
    descriptions: "Reliable backup power solution for computers and small office equipment.",
    information: {
      brand: "Power Guard",
      capacity: "1000VA",
      outputPower: "600W",
      battery: "12V",
      protection: "Overload and Short Circuit",
      outlets: "4",
      warranty: "1 Year"
    },
    price: 8200,
    image: "/images/products/power-guard-1000va.jpg",
    rating: 4.4,
    stock: 15,
    size: "1000VA"
  },

  {
    id: 137,
    title: "UGREEN 7-in-1 USB-C Hub",
    subtitle: "USB-C Hub with HDMI and Card Reader",
    category: "Accessories",
    subcategory: "USB Hub",
    descriptions: "Multi-port USB-C hub designed to expand connectivity on modern laptops.",
    information: {
      brand: "UGREEN",
      ports: "7-in-1",
      HDMI: "4K",
      USB: "USB 3.0",
      cardReader: "SD + MicroSD",
      powerDelivery: "100W",
      connection: "USB-C"
    },
    price: 6200,
    image: "/images/products/ugreen-7-in-1-hub.jpg",
    rating: 4.8,
    stock: 14,
    size: "Compact"
  },

  {
    id: 138,
    title: "Baseus Metal Gleam Series 6-in-1 Hub",
    subtitle: "USB-C Multiport Adapter",
    category: "Accessories",
    subcategory: "USB Hub",
    descriptions: "Compact aluminum USB-C adapter providing multiple connectivity options for laptops.",
    information: {
      brand: "Baseus",
      ports: "6-in-1",
      HDMI: "4K",
      USB: "USB 3.0",
      cardReader: "SD + TF",
      charging: "100W PD",
      connection: "USB-C"
    },
    price: 4800,
    image: "/images/products/baseus-metal-gleam-hub.jpg",
    rating: 4.7,
    stock: 19,
    size: "Compact"
  },

  {
    id: 139,
    title: "Anker 555 USB-C Hub",
    subtitle: "8-in-1 USB-C Hub",
    category: "Accessories",
    subcategory: "USB Hub",
    descriptions: "Premium multi-port hub for laptops requiring HDMI, Ethernet, USB and card reader connectivity.",
    information: {
      brand: "Anker",
      ports: "8-in-1",
      HDMI: "4K 60Hz",
      Ethernet: "Gigabit",
      USB: "USB 3.2",
      cardReader: "SD + MicroSD",
      powerDelivery: "100W"
    },
    price: 9800,
    image: "/images/products/anker-555-hub.jpg",
    rating: 4.9,
    stock: 8,
    size: "Compact"
  },

  {
    id: 140,
    title: "Samsung Galaxy Watch6 44mm",
    subtitle: "AMOLED Bluetooth Smartwatch",
    category: "Wearables",
    subcategory: "Smartwatch",
    descriptions: "Modern smartwatch featuring AMOLED display, health tracking and smart notifications.",
    information: {
      brand: "Samsung",
      display: "1.5-inch Super AMOLED",
      connectivity: "Bluetooth",
      sensors: "Heart Rate, SpO2",
      GPS: "Built-in",
      waterResistance: "5ATM",
      battery: "Up to 40 Hours"
    },
    price: 26500,
    image: "/images/products/samsung-galaxy-watch6.jpg",
    rating: 4.8,
    stock: 9,
    size: "44mm"
  },

  {
    id: 141,
    title: "Xiaomi Redmi Watch 4",
    subtitle: "1.97-inch AMOLED Smartwatch",
    category: "Wearables",
    subcategory: "Smartwatch",
    descriptions: "Large AMOLED smartwatch with health tracking, GPS and long battery life.",
    information: {
      brand: "Xiaomi",
      display: "1.97-inch AMOLED",
      connectivity: "Bluetooth",
      sensors: "Heart Rate, SpO2",
      GPS: "Built-in",
      waterResistance: "5ATM",
      battery: "Up to 20 Days"
    },
    price: 9500,
    image: "/images/products/redmi-watch-4.jpg",
    rating: 4.7,
    stock: 16,
    size: "1.97-inch"
  },

  {
    id: 142,
    title: "Amazfit GTR Mini",
    subtitle: "1.28-inch AMOLED Smartwatch",
    category: "Wearables",
    subcategory: "Smartwatch",
    descriptions: "Slim AMOLED smartwatch with health monitoring, sports modes and GPS.",
    information: {
      brand: "Amazfit",
      display: "1.28-inch AMOLED",
      connectivity: "Bluetooth",
      sensors: "Heart Rate, SpO2",
      GPS: "Built-in",
      waterResistance: "5ATM",
      battery: "Up to 14 Days"
    },
    price: 11500,
    image: "/images/products/amazfit-gtr-mini.jpg",
    rating: 4.6,
    stock: 13,
    size: "43mm"
  },

  {
    id: 143,
    title: "Redmi Buds 5",
    subtitle: "Wireless ANC Earbuds",
    category: "Audio",
    subcategory: "Earbuds",
    descriptions: "Wireless earbuds with active noise cancellation and long battery life.",
    information: {
      brand: "Xiaomi",
      connectivity: "Bluetooth 5.3",
      ANC: "Yes",
      microphone: "Dual",
      battery: "Up to 40 Hours",
      charging: "USB-C",
      waterResistance: "IP54"
    },
    price: 4200,
    image: "/images/products/redmi-buds-5.jpg",
    rating: 4.6,
    stock: 24,
    size: "In-Ear"
  },

  {
    id: 144,
    title: "OnePlus Buds 3",
    subtitle: "Wireless ANC Bluetooth Earbuds",
    category: "Audio",
    subcategory: "Earbuds",
    descriptions: "Premium wireless earbuds offering active noise cancellation and high-quality sound.",
    information: {
      brand: "OnePlus",
      connectivity: "Bluetooth 5.3",
      ANC: "Yes",
      driver: "10mm + 6mm Dual Driver",
      battery: "Up to 44 Hours",
      charging: "USB-C",
      waterResistance: "IP55"
    },
    price: 7200,
    image: "/images/products/oneplus-buds-3.jpg",
    rating: 4.8,
    stock: 18,
    size: "In-Ear"
  },

  {
    id: 145,
    title: "JBL Wave Beam",
    subtitle: "True Wireless In-Ear Earbuds",
    category: "Audio",
    subcategory: "Earbuds",
    descriptions: "Comfortable wireless earbuds with deep bass and long-lasting battery life.",
    information: {
      brand: "JBL",
      connectivity: "Bluetooth 5.2",
      driver: "8.0mm",
      microphone: "Built-in",
      battery: "Up to 32 Hours",
      charging: "USB-C",
      waterResistance: "IP54"
    },
    price: 3900,
    image: "/images/products/jbl-wave-beam.jpg",
    rating: 4.5,
    stock: 26,
    size: "In-Ear"
  },

  {
    id: 146,
    title: "ViewSonic PA503W Projector",
    subtitle: "WXGA Business and Education Projector",
    category: "Office Equipment",
    subcategory: "Projector",
    descriptions: "Bright projector designed for classrooms, offices and presentations.",
    information: {
      brand: "ViewSonic",
      resolution: "1280 x 800",
      brightness: "3800 ANSI Lumens",
      contrast: "22000:1",
      projectionSize: "30-300 inch",
      connectivity: "HDMI, VGA",
      lampLife: "Up to 15000 Hours"
    },
    price: 62000,
    image: "/images/products/viewsonic-pa503w.jpg",
    rating: 4.7,
    stock: 5,
    size: "Compact"
  },

  {
    id: 147,
    title: "Epson CO-W01 Projector",
    subtitle: "WXGA 3000 Lumens Projector",
    category: "Office Equipment",
    subcategory: "Projector",
    descriptions: "Compact projector suitable for presentations, education and home entertainment.",
    information: {
      brand: "Epson",
      resolution: "1280 x 800",
      brightness: "3000 Lumens",
      contrast: "16000:1",
      projectionSize: "33-378 inch",
      connectivity: "HDMI, USB",
      lampLife: "Up to 12000 Hours"
    },
    price: 55000,
    image: "/images/products/epson-co-w01.jpg",
    rating: 4.6,
    stock: 6,
    size: "Compact"
  },

  {
    id: 148,
    title: "Canon imageFORMULA R40",
    subtitle: "High Speed Document Scanner",
    category: "Office Equipment",
    subcategory: "Scanner",
    descriptions: "Desktop document scanner designed for offices and high-volume document processing.",
    information: {
      brand: "Canon",
      scannerType: "Document Scanner",
      resolution: "600 dpi",
      speed: "40 ppm",
      feeder: "60 Sheets",
      duplex: "Yes",
      connection: "USB"
    },
    price: 48000,
    image: "/images/products/canon-imageformula-r40.jpg",
    rating: 4.7,
    stock: 4,
    size: "Desktop"
  },

  {
    id: 149,
    title: "Logitech MX Keys S",
    subtitle: "Wireless Illuminated Productivity Keyboard",
    category: "Accessories",
    subcategory: "Keyboard",
    descriptions: "Premium wireless keyboard designed for comfortable typing and professional productivity.",
    information: {
      brand: "Logitech",
      connection: "Bluetooth + USB Receiver",
      layout: "Full Size",
      backlight: "Smart Illumination",
      battery: "Up to 5 Months",
      compatibility: "Windows, macOS, Linux",
      charging: "USB-C"
    },
    price: 12500,
    image: "/images/products/logitech-mx-keys-s.jpg",
    rating: 4.9,
    stock: 10,
    size: "Full Size"
  },

  {
    id: 150,
    title: "Logitech MX Master 3S",
    subtitle: "Wireless Performance Mouse",
    category: "Accessories",
    subcategory: "Mouse",
    descriptions: "Premium wireless productivity mouse with high-precision tracking and quiet clicks.",
    information: {
      brand: "Logitech",
      connection: "Bluetooth + USB Receiver",
      sensor: "8000 DPI",
      buttons: "7",
      battery: "Up to 70 Days",
      charging: "USB-C",
      compatibility: "Windows, macOS, Linux"
    },
    price: 11500,
    image: "/images/products/logitech-mx-master-3s.jpg",
    rating: 4.9,
    stock: 12,
    size: "Standard"
  },
  // =========================
  // BATCH 4 — PRODUCTS 151-200
  // CAMERA, NETWORKING & SECURITY
  // =========================

  {
    id: 151,
    title: "Canon EOS R10",
    subtitle: "24.2MP APS-C Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Compact mirrorless camera designed for photography, video production and content creation.",
    information: {
      brand: "Canon",
      sensor: "24.2MP APS-C CMOS",
      processor: "DIGIC X",
      video: "4K 30fps",
      autofocus: "Dual Pixel CMOS AF II",
      connectivity: "Wi-Fi, Bluetooth",
      lensMount: "RF Mount",
      warranty: "1 Year"
    },
    price: 118000,
    image: "/images/products/canon-eos-r10.jpg",
    rating: 4.8,
    stock: 5,
    size: "APS-C"
  },

  {
    id: 152,
    title: "Sony Alpha A6400",
    subtitle: "24.2MP APS-C Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Fast autofocus mirrorless camera suitable for photography, travel and video content.",
    information: {
      brand: "Sony",
      sensor: "24.2MP APS-C CMOS",
      processor: "BIONZ X",
      video: "4K 30fps",
      autofocus: "425-Point Phase Detection",
      connectivity: "Wi-Fi, Bluetooth",
      lensMount: "Sony E Mount",
      warranty: "1 Year"
    },
    price: 112000,
    image: "/images/products/sony-a6400.jpg",
    rating: 4.8,
    stock: 6,
    size: "APS-C"
  },

  {
    id: 153,
    title: "Nikon Z50",
    subtitle: "20.9MP DX Format Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Lightweight DX mirrorless camera offering excellent image quality and 4K video recording.",
    information: {
      brand: "Nikon",
      sensor: "20.9MP APS-C CMOS",
      processor: "EXPEED 6",
      video: "4K UHD",
      autofocus: "209-Point Hybrid AF",
      connectivity: "Wi-Fi, Bluetooth",
      lensMount: "Nikon Z Mount",
      warranty: "1 Year"
    },
    price: 108000,
    image: "/images/products/nikon-z50.jpg",
    rating: 4.7,
    stock: 4,
    size: "APS-C"
  },

  {
    id: 154,
    title: "Canon EOS R50",
    subtitle: "24.2MP Compact Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    descriptions: "Compact creator-focused camera designed for photography, YouTube and social media content.",
    information: {
      brand: "Canon",
      sensor: "24.2MP APS-C CMOS",
      processor: "DIGIC X",
      video: "4K 30fps",
      autofocus: "Dual Pixel CMOS AF II",
      connectivity: "Wi-Fi, Bluetooth",
      lensMount: "RF Mount",
      warranty: "1 Year"
    },
    price: 92000,
    image: "/images/products/canon-eos-r50.jpg",
    rating: 4.8,
    stock: 8,
    size: "APS-C"
  },

  {
    id: 155,
    title: "Sony ZV-E10",
    subtitle: "24.2MP APS-C Vlogging Camera",
    category: "Camera",
    subcategory: "Vlogging Camera",
    descriptions: "Creator-focused interchangeable lens camera designed for vlogging and online video.",
    information: {
      brand: "Sony",
      sensor: "24.2MP APS-C CMOS",
      video: "4K 30fps",
      microphone: "3.5mm Input",
      autofocus: "Real-time Eye AF",
      connectivity: "Wi-Fi, Bluetooth",
      lensMount: "Sony E Mount",
      warranty: "1 Year"
    },
    price: 85000,
    image: "/images/products/sony-zv-e10.jpg",
    rating: 4.8,
    stock: 9,
    size: "APS-C"
  },

  {
    id: 156,
    title: "DJI Osmo Pocket 3",
    subtitle: "4K 120fps Handheld Gimbal Camera",
    category: "Camera",
    subcategory: "Action Camera",
    descriptions: "Pocket-sized stabilized camera designed for travel, vlogging and professional-looking video.",
    information: {
      brand: "DJI",
      sensor: "1-inch CMOS",
      video: "4K 120fps",
      stabilization: "3-Axis Mechanical Gimbal",
      display: "2-inch Rotatable Touchscreen",
      connectivity: "Wi-Fi, Bluetooth",
      battery: "Up to 166 Minutes",
      warranty: "1 Year"
    },
    price: 72000,
    image: "/images/products/dji-osmo-pocket-3.jpg",
    rating: 4.9,
    stock: 7,
    size: "Pocket"
  },

  {
    id: 157,
    title: "GoPro HERO12 Black",
    subtitle: "5.3K60 Action Camera",
    category: "Camera",
    subcategory: "Action Camera",
    descriptions: "Rugged action camera designed for outdoor activities, travel and high-quality video recording.",
    information: {
      brand: "GoPro",
      video: "5.3K 60fps",
      stabilization: "HyperSmooth 6.0",
      display: "2.27-inch Touchscreen",
      waterproof: "10m",
      connectivity: "Wi-Fi, Bluetooth",
      battery: "1720mAh",
      warranty: "1 Year"
    },
    price: 48000,
    image: "/images/products/gopro-hero12-black.jpg",
    rating: 4.8,
    stock: 10,
    size: "Action Camera"
  },

  {
    id: 158,
    title: "DJI Osmo Action 4",
    subtitle: "4K120 HDR Action Camera",
    category: "Camera",
    subcategory: "Action Camera",
    descriptions: "Durable action camera with strong low-light performance and advanced electronic stabilization.",
    information: {
      brand: "DJI",
      sensor: "1/1.3-inch CMOS",
      video: "4K 120fps",
      stabilization: "RockSteady 3.0",
      waterproof: "18m",
      display: "Dual Touchscreen",
      battery: "160 Minutes",
      warranty: "1 Year"
    },
    price: 45000,
    image: "/images/products/dji-osmo-action-4.jpg",
    rating: 4.8,
    stock: 8,
    size: "Action Camera"
  },

  {
    id: 159,
    title: "Sigma 30mm F1.4 DC DN",
    subtitle: "APS-C Prime Mirrorless Lens",
    category: "Camera",
    subcategory: "Camera Lens",
    descriptions: "Bright prime lens designed for portraits, street photography and low-light shooting.",
    information: {
      brand: "Sigma",
      focalLength: "30mm",
      aperture: "F1.4",
      mount: "Sony E",
      focus: "Autofocus",
      construction: "9 Elements in 7 Groups",
      warranty: "1 Year"
    },
    price: 39000,
    image: "/images/products/sigma-30mm-f1-4.jpg",
    rating: 4.9,
    stock: 6,
    size: "30mm"
  },

  {
    id: 160,
    title: "Canon RF 50mm F1.8 STM",
    subtitle: "Full Frame Standard Prime Lens",
    category: "Camera",
    subcategory: "Camera Lens",
    descriptions: "Compact 50mm prime lens with a bright aperture for portraits and everyday photography.",
    information: {
      brand: "Canon",
      focalLength: "50mm",
      aperture: "F1.8",
      mount: "Canon RF",
      focus: "STM Autofocus",
      filterSize: "43mm",
      warranty: "1 Year"
    },
    price: 31000,
    image: "/images/products/canon-rf-50mm.jpg",
    rating: 4.8,
    stock: 7,
    size: "50mm"
  },

  {
    id: 161,
    title: "TP-Link Archer BE550",
    subtitle: "BE9300 Wi-Fi 7 Tri-Band Router",
    category: "Networking",
    subcategory: "Wi-Fi 7 Router",
    descriptions: "Next-generation Wi-Fi 7 router designed for high-speed home and gaming networks.",
    information: {
      brand: "TP-Link",
      wireless: "Wi-Fi 7",
      speed: "BE9300",
      bands: "Tri-Band",
      ethernet: "2.5Gbps",
      antennas: "Internal",
      security: "WPA3"
    },
    price: 28500,
    image: "/images/products/tp-link-archer-be550.jpg",
    rating: 4.8,
    stock: 7,
    size: "Tri-Band"
  },

  {
    id: 162,
    title: "ASUS RT-AX86U Pro",
    subtitle: "AX5700 Dual Band Gaming Router",
    category: "Networking",
    subcategory: "Gaming Router",
    descriptions: "High-performance gaming router with fast Wi-Fi and advanced network management features.",
    information: {
      brand: "ASUS",
      wireless: "Wi-Fi 6",
      speed: "AX5700",
      bands: "Dual Band",
      ethernet: "2.5Gbps",
      gaming: "Game Acceleration",
      security: "AiProtection Pro"
    },
    price: 32000,
    image: "/images/products/asus-rt-ax86u-pro.jpg",
    rating: 4.9,
    stock: 5,
    size: "Dual-Band"
  },

  {
    id: 163,
    title: "Netgear Nighthawk AX5400",
    subtitle: "AX5400 Wi-Fi 6 Router",
    category: "Networking",
    subcategory: "Wi-Fi Router",
    descriptions: "High-speed Wi-Fi 6 router designed for large homes, streaming and gaming.",
    information: {
      brand: "Netgear",
      wireless: "Wi-Fi 6",
      speed: "AX5400",
      bands: "Dual Band",
      ethernet: "Gigabit",
      antennas: "4 External",
      security: "WPA3"
    },
    price: 26000,
    image: "/images/products/netgear-nighthawk-ax5400.jpg",
    rating: 4.7,
    stock: 6,
    size: "Dual-Band"
  },

  {
    id: 164,
    title: "Ubiquiti UniFi Dream Router",
    subtitle: "Wi-Fi 6 Security Gateway",
    category: "Networking",
    subcategory: "Network Gateway",
    descriptions: "Integrated network gateway with Wi-Fi, security management and UniFi network control.",
    information: {
      brand: "Ubiquiti",
      wireless: "Wi-Fi 6",
      ports: "4 x Gigabit",
      management: "UniFi OS",
      security: "Firewall",
      storage: "128GB",
      display: "Touchscreen"
    },
    price: 28500,
    image: "/images/products/ubiquiti-unifi-dream-router.jpg",
    rating: 4.8,
    stock: 4,
    size: "Desktop"
  },

  {
    id: 165,
    title: "Ubiquiti UniFi U6 Lite",
    subtitle: "Wi-Fi 6 Ceiling Access Point",
    category: "Networking",
    subcategory: "Access Point",
    descriptions: "Compact enterprise wireless access point designed for reliable office and home network coverage.",
    information: {
      brand: "Ubiquiti",
      wireless: "Wi-Fi 6",
      speed: "AX1500",
      bands: "Dual Band",
      power: "PoE",
      management: "UniFi Controller",
      security: "WPA3"
    },
    price: 14500,
    image: "/images/products/unifi-u6-lite.jpg",
    rating: 4.8,
    stock: 9,
    size: "Compact"
  },

  {
    id: 166,
    title: "TP-Link EAP610",
    subtitle: "AX1800 Wi-Fi 6 Ceiling Access Point",
    category: "Networking",
    subcategory: "Access Point",
    descriptions: "Business-grade Wi-Fi 6 access point for offices, schools and commercial networks.",
    information: {
      brand: "TP-Link",
      wireless: "Wi-Fi 6",
      speed: "AX1800",
      bands: "Dual Band",
      power: "802.3at PoE",
      management: "Omada SDN",
      security: "WPA3"
    },
    price: 12500,
    image: "/images/products/tp-link-eap610.jpg",
    rating: 4.7,
    stock: 11,
    size: "Ceiling Mount"
  },

  {
    id: 167,
    title: "D-Link DGS-1210-28",
    subtitle: "24-Port Gigabit Smart Managed Switch",
    category: "Networking",
    subcategory: "Managed Switch",
    descriptions: "Smart managed network switch designed for business and office network environments.",
    information: {
      brand: "D-Link",
      ports: "24 x Gigabit",
      uplink: "4 x SFP",
      switchingCapacity: "56Gbps",
      management: "Smart Managed",
      VLAN: "Yes",
      installation: "Rack Mount"
    },
    price: 23500,
    image: "/images/products/d-link-dgs-1210-28.jpg",
    rating: 4.7,
    stock: 5,
    size: "24-Port"
  },

  {
    id: 168,
    title: "TP-Link TL-SG3428",
    subtitle: "24-Port Gigabit L2 Managed Switch",
    category: "Networking",
    subcategory: "Managed Switch",
    descriptions: "Business networking switch offering VLAN, management and high-speed gigabit connectivity.",
    information: {
      brand: "TP-Link",
      ports: "24 x Gigabit",
      uplink: "4 x SFP",
      switchingCapacity: "56Gbps",
      management: "L2 Managed",
      VLAN: "Yes",
      installation: "Rack Mount"
    },
    price: 28000,
    image: "/images/products/tp-link-tl-sg3428.jpg",
    rating: 4.8,
    stock: 4,
    size: "24-Port"
  },

  {
    id: 169,
    title: "Ubiquiti UniFi CloudKey Gen2 Plus",
    subtitle: "UniFi Network Controller",
    category: "Networking",
    subcategory: "Network Controller",
    descriptions: "Centralized controller designed to manage UniFi networking and security devices.",
    information: {
      brand: "Ubiquiti",
      storage: "1TB HDD",
      processor: "Octa-Core",
      management: "UniFi OS",
      connectivity: "Gigabit Ethernet",
      applications: "Network, Protect",
      power: "PoE"
    },
    price: 28000,
    image: "/images/products/unifi-cloudkey-gen2-plus.jpg",
    rating: 4.8,
    stock: 3,
    size: "Compact"
  },

  {
    id: 170,
    title: "TP-Link Omada OC200",
    subtitle: "Cloud Controller for Business Networks",
    category: "Networking",
    subcategory: "Network Controller",
    descriptions: "Dedicated controller for centralized management of Omada access points, switches and routers.",
    information: {
      brand: "TP-Link",
      processor: "Quad-Core",
      management: "Omada SDN",
      ports: "2 x Gigabit",
      storage: "Built-in",
      cloudAccess: "Yes",
      power: "Micro USB"
    },
    price: 9500,
    image: "/images/products/tp-link-omada-oc200.jpg",
    rating: 4.7,
    stock: 8,
    size: "Compact"
  },

  {
    id: 171,
    title: "Hikvision DS-2CD1023G2-LIU",
    subtitle: "2MP ColorVu IP Security Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Outdoor-ready IP security camera with color night vision and smart detection.",
    information: {
      brand: "Hikvision",
      resolution: "2MP",
      video: "1920 x 1080",
      nightVision: "ColorVu",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      storage: "MicroSD"
    },
    price: 7800,
    image: "/images/products/hikvision-ds-2cd1023g2.jpg",
    rating: 4.8,
    stock: 14,
    size: "Bullet"
  },

  {
    id: 172,
    title: "Hikvision DS-2CD2143G2-I",
    subtitle: "4MP AcuSense Dome IP Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "High-resolution dome camera with intelligent human and vehicle detection.",
    information: {
      brand: "Hikvision",
      resolution: "4MP",
      video: "2688 x 1520",
      nightVision: "IR 30m",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      detection: "Human and Vehicle"
    },
    price: 12500,
    image: "/images/products/hikvision-ds-2cd2143g2.jpg",
    rating: 4.9,
    stock: 10,
    size: "Dome"
  },

  {
    id: 173,
    title: "Hikvision DS-2CD2386G2-I",
    subtitle: "8MP AcuSense Turret IP Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "High-resolution 4K turret camera designed for advanced home and commercial surveillance.",
    information: {
      brand: "Hikvision",
      resolution: "8MP",
      video: "4K UHD",
      nightVision: "IR 40m",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      detection: "Human and Vehicle"
    },
    price: 18500,
    image: "/images/products/hikvision-ds-2cd2386g2.jpg",
    rating: 4.9,
    stock: 7,
    size: "Turret"
  },

  {
    id: 174,
    title: "Dahua IPC-HFW1239S1-LED",
    subtitle: "2MP Full Color IP Bullet Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Full-color IP bullet camera designed for clear surveillance in low-light environments.",
    information: {
      brand: "Dahua",
      resolution: "2MP",
      video: "1080p",
      nightVision: "Full Color",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      storage: "NVR"
    },
    price: 7200,
    image: "/images/products/dahua-ipc-hfw1239s1.jpg",
    rating: 4.7,
    stock: 16,
    size: "Bullet"
  },

  {
    id: 175,
    title: "Dahua IPC-HDW2431T-AS",
    subtitle: "4MP IR Dome IP Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Reliable 4MP dome IP camera suitable for offices, homes and commercial surveillance.",
    information: {
      brand: "Dahua",
      resolution: "4MP",
      video: "2688 x 1520",
      nightVision: "IR 30m",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      storage: "NVR"
    },
    price: 10500,
    image: "/images/products/dahua-ipc-hdw2431t.jpg",
    rating: 4.7,
    stock: 12,
    size: "Dome"
  },

  {
    id: 176,
    title: "Dahua IPC-HFW3849T1-AS-PV",
    subtitle: "8MP Full Color Active Deterrence Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Advanced 4K security camera featuring full-color night vision and active deterrence features.",
    information: {
      brand: "Dahua",
      resolution: "8MP",
      video: "4K UHD",
      nightVision: "Full Color",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      deterrence: "Light and Siren"
    },
    price: 19500,
    image: "/images/products/dahua-ipc-hfw3849t1.jpg",
    rating: 4.8,
    stock: 6,
    size: "Bullet"
  },

  {
    id: 177,
    title: "Hikvision DS-7608NI-K2",
    subtitle: "8 Channel 4K NVR",
    category: "Security",
    subcategory: "NVR",
    descriptions: "Network video recorder designed for multi-camera IP surveillance systems.",
    information: {
      brand: "Hikvision",
      channels: "8 Channel",
      resolution: "Up to 4K",
      storage: "2 SATA Bays",
      compression: "H.265+",
      network: "Gigabit Ethernet",
      HDMI: "4K Output"
    },
    price: 14500,
    image: "/images/products/hikvision-ds-7608ni-k2.jpg",
    rating: 4.8,
    stock: 8,
    size: "8 Channel"
  },

  {
    id: 178,
    title: "Hikvision DS-7616NI-K2",
    subtitle: "16 Channel 4K NVR",
    category: "Security",
    subcategory: "NVR",
    descriptions: "16-channel network video recorder suitable for medium-sized CCTV installations.",
    information: {
      brand: "Hikvision",
      channels: "16 Channel",
      resolution: "Up to 4K",
      storage: "2 SATA Bays",
      compression: "H.265+",
      network: "Gigabit Ethernet",
      HDMI: "4K Output"
    },
    price: 21000,
    image: "/images/products/hikvision-ds-7616ni-k2.jpg",
    rating: 4.8,
    stock: 6,
    size: "16 Channel"
  },

  {
    id: 179,
    title: "Dahua NVR4108HS-8P",
    subtitle: "8 Channel PoE NVR",
    category: "Security",
    subcategory: "NVR",
    descriptions: "PoE network video recorder allowing direct connection and power delivery to IP cameras.",
    information: {
      brand: "Dahua",
      channels: "8 Channel",
      resolution: "Up to 4K",
      storage: "1 SATA Bay",
      compression: "H.265+",
      PoE: "8 Ports",
      HDMI: "4K Output"
    },
    price: 13500,
    image: "/images/products/dahua-nvr4108hs-8p.jpg",
    rating: 4.7,
    stock: 9,
    size: "8 Channel"
  },

  {
    id: 180,
    title: "Dahua NVR4216-16P",
    subtitle: "16 Channel PoE NVR",
    category: "Security",
    subcategory: "NVR",
    descriptions: "Professional 16-channel PoE NVR for larger IP surveillance installations.",
    information: {
      brand: "Dahua",
      channels: "16 Channel",
      resolution: "Up to 4K",
      storage: "2 SATA Bays",
      compression: "H.265+",
      PoE: "16 Ports",
      HDMI: "4K Output"
    },
    price: 24500,
    image: "/images/products/dahua-nvr4216-16p.jpg",
    rating: 4.8,
    stock: 5,
    size: "16 Channel"
  },

  {
    id: 181,
    title: "Hikvision DS-2CE16D0T-IRP",
    subtitle: "2MP Turbo HD Bullet Camera",
    category: "Security",
    subcategory: "Analog CCTV Camera",
    descriptions: "Affordable 2MP analog bullet camera designed for basic CCTV surveillance systems.",
    information: {
      brand: "Hikvision",
      resolution: "2MP",
      video: "1080p",
      nightVision: "IR 25m",
      lens: "2.8mm",
      technology: "Turbo HD",
      protection: "IP67"
    },
    price: 3800,
    image: "/images/products/hikvision-ds-2ce16d0t.jpg",
    rating: 4.6,
    stock: 25,
    size: "Bullet"
  },

  {
    id: 182,
    title: "Dahua HAC-HDW1200TLP",
    subtitle: "2MP HDCVI Eyeball Camera",
    category: "Security",
    subcategory: "Analog CCTV Camera",
    descriptions: "2MP HDCVI eyeball camera for reliable indoor and outdoor CCTV installations.",
    information: {
      brand: "Dahua",
      resolution: "2MP",
      video: "1080p",
      nightVision: "IR 30m",
      lens: "2.8mm",
      technology: "HDCVI",
      protection: "IP67"
    },
    price: 3500,
    image: "/images/products/dahua-hac-hdw1200tlp.jpg",
    rating: 4.6,
    stock: 28,
    size: "Eyeball"
  },

  {
    id: 183,
    title: "Hikvision DS-3E0109P-E",
    subtitle: "8-Port PoE Switch",
    category: "Security",
    subcategory: "CCTV PoE Switch",
    descriptions: "Compact PoE switch designed to provide both power and network connectivity to IP cameras.",
    information: {
      brand: "Hikvision",
      ports: "8 PoE + 1 Uplink",
      speed: "10/100Mbps",
      PoEStandard: "802.3af/at",
      powerBudget: "60W",
      switchingCapacity: "1.8Gbps",
      installation: "Desktop"
    },
    price: 5500,
    image: "/images/products/hikvision-ds-3e0109p.jpg",
    rating: 4.7,
    stock: 15,
    size: "8-Port"
  },

  {
    id: 184,
    title: "Dahua PFS3009-8ET-65",
    subtitle: "8-Port PoE Ethernet Switch",
    category: "Security",
    subcategory: "CCTV PoE Switch",
    descriptions: "PoE network switch designed for powering and connecting IP surveillance cameras.",
    information: {
      brand: "Dahua",
      ports: "8 PoE + 1 Uplink",
      speed: "10/100Mbps",
      PoEStandard: "802.3af/at",
      powerBudget: "65W",
      switchingCapacity: "1.8Gbps",
      installation: "Desktop"
    },
    price: 5200,
    image: "/images/products/dahua-pfs3009-8et-65.jpg",
    rating: 4.6,
    stock: 17,
    size: "8-Port"
  },

  {
    id: 185,
    title: "Hikvision DS-K1T341CMF",
    subtitle: "Face Recognition Access Control Terminal",
    category: "Security",
    subcategory: "Access Control",
    descriptions: "Smart access control terminal supporting face recognition and secure entry management.",
    information: {
      brand: "Hikvision",
      display: "4.3-inch Touchscreen",
      recognition: "Face Recognition",
      fingerprint: "Supported",
      capacity: "1500 Faces",
      connectivity: "TCP/IP",
      power: "12V DC"
    },
    price: 26500,
    image: "/images/products/hikvision-ds-k1t341cmf.jpg",
    rating: 4.7,
    stock: 4,
    size: "4.3-inch"
  },

  {
    id: 186,
    title: "ZKTeco MB20-VL",
    subtitle: "Face and Fingerprint Attendance Machine",
    category: "Security",
    subcategory: "Attendance System",
    descriptions: "Biometric attendance terminal suitable for offices, schools and businesses.",
    information: {
      brand: "ZKTeco",
      display: "2.8-inch TFT",
      recognition: "Face Recognition",
      fingerprint: "Yes",
      capacity: "500 Faces",
      connectivity: "TCP/IP, USB",
      battery: "Backup Battery"
    },
    price: 14500,
    image: "/images/products/zkteco-mb20-vl.jpg",
    rating: 4.7,
    stock: 7,
    size: "2.8-inch"
  },

  {
    id: 187,
    title: "ZKTeco K40",
    subtitle: "Fingerprint Time Attendance Machine",
    category: "Security",
    subcategory: "Attendance System",
    descriptions: "Affordable fingerprint attendance device designed for offices and small businesses.",
    information: {
      brand: "ZKTeco",
      display: "2.8-inch TFT",
      fingerprint: "Yes",
      capacity: "1000 Fingerprints",
      users: "800 Users",
      connectivity: "TCP/IP, USB",
      battery: "Optional"
    },
    price: 7800,
    image: "/images/products/zkteco-k40.jpg",
    rating: 4.5,
    stock: 12,
    size: "2.8-inch"
  },

  {
    id: 188,
    title: "Hikvision DS-KH6320-WTE1",
    subtitle: "7-inch IP Video Intercom Indoor Station",
    category: "Security",
    subcategory: "Video Intercom",
    descriptions: "IP video intercom indoor station for secure communication and door access management.",
    information: {
      brand: "Hikvision",
      display: "7-inch Touchscreen",
      resolution: "1024 x 600",
      connectivity: "Ethernet, Wi-Fi",
      audio: "Two-Way Audio",
      integration: "Door Station",
      power: "PoE"
    },
    price: 22000,
    image: "/images/products/hikvision-ds-kh6320.jpg",
    rating: 4.7,
    stock: 4,
    size: "7-inch"
  },

  {
    id: 189,
    title: "TP-Link Tapo C220",
    subtitle: "4MP Pan/Tilt Home Security Camera",
    category: "Security",
    subcategory: "Smart Camera",
    descriptions: "Smart indoor camera with pan and tilt control, motion detection and mobile monitoring.",
    information: {
      brand: "TP-Link",
      resolution: "4MP",
      video: "2K QHD",
      movement: "Pan/Tilt",
      nightVision: "IR",
      storage: "MicroSD",
      connectivity: "Wi-Fi",
      audio: "Two-Way Audio"
    },
    price: 4200,
    image: "/images/products/tapo-c220.jpg",
    rating: 4.8,
    stock: 22,
    size: "Indoor"
  },

  {
    id: 190,
    title: "TP-Link Tapo C520WS",
    subtitle: "3MP Outdoor Pan/Tilt Security Camera",
    category: "Security",
    subcategory: "Smart Camera",
    descriptions: "Outdoor smart security camera with pan and tilt control, full-color night vision and smart detection.",
    information: {
      brand: "TP-Link",
      resolution: "3MP",
      video: "2K QHD",
      movement: "Pan/Tilt",
      nightVision: "Full Color",
      storage: "MicroSD",
      connectivity: "Wi-Fi",
      protection: "IP66"
    },
    price: 6500,
    image: "/images/products/tapo-c520ws.jpg",
    rating: 4.8,
    stock: 13,
    size: "Outdoor"
  },

  {
    id: 191,
    title: "Ezviz C6N",
    subtitle: "2MP Smart Indoor Wi-Fi Camera",
    category: "Security",
    subcategory: "Smart Camera",
    descriptions: "Affordable indoor Wi-Fi security camera with smart tracking and two-way communication.",
    information: {
      brand: "Ezviz",
      resolution: "2MP",
      video: "1080p",
      movement: "Pan/Tilt",
      nightVision: "IR 10m",
      storage: "MicroSD",
      connectivity: "Wi-Fi",
      audio: "Two-Way Audio"
    },
    price: 3500,
    image: "/images/products/ezviz-c6n.jpg",
    rating: 4.6,
    stock: 20,
    size: "Indoor"
  },

  {
    id: 192,
    title: "Ezviz H8C",
    subtitle: "3MP Outdoor Pan/Tilt Smart Camera",
    category: "Security",
    subcategory: "Smart Camera",
    descriptions: "Outdoor smart surveillance camera with pan and tilt control and intelligent tracking.",
    information: {
      brand: "Ezviz",
      resolution: "3MP",
      video: "2K",
      movement: "Pan/Tilt",
      nightVision: "Color Night Vision",
      storage: "MicroSD",
      connectivity: "Wi-Fi",
      protection: "IP65"
    },
    price: 6200,
    image: "/images/products/ezviz-h8c.jpg",
    rating: 4.7,
    stock: 11,
    size: "Outdoor"
  },

  {
    id: 193,
    title: "Hikvision DS-2CD2387G2-LU",
    subtitle: "8MP ColorVu Turret IP Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Premium 4K ColorVu turret camera for high-detail surveillance in low-light environments.",
    information: {
      brand: "Hikvision",
      resolution: "8MP",
      video: "4K UHD",
      nightVision: "ColorVu",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      audio: "Built-in Microphone"
    },
    price: 22500,
    image: "/images/products/hikvision-ds-2cd2387g2.jpg",
    rating: 4.9,
    stock: 5,
    size: "Turret"
  },

  {
    id: 194,
    title: "Dahua IPC-HDW3549H-AS-PV",
    subtitle: "5MP Full Color Active Deterrence Camera",
    category: "Security",
    subcategory: "IP Camera",
    descriptions: "Advanced 5MP surveillance camera with full-color night vision, audio and active deterrence.",
    information: {
      brand: "Dahua",
      resolution: "5MP",
      video: "2880 x 1620",
      nightVision: "Full Color",
      lens: "2.8mm",
      connection: "PoE",
      protection: "IP67",
      deterrence: "Light and Siren"
    },
    price: 15500,
    image: "/images/products/dahua-ipc-hdw3549h.jpg",
    rating: 4.8,
    stock: 7,
    size: "Dome"
  },

  {
    id: 195,
    title: "Western Digital Purple 6TB",
    subtitle: "6TB Surveillance Hard Drive",
    category: "Security",
    subcategory: "CCTV Storage",
    descriptions: "Surveillance-optimized hard drive designed for continuous recording and CCTV systems.",
    information: {
      brand: "Western Digital",
      capacity: "6TB",
      interface: "SATA III",
      RPM: "5400 RPM",
      cache: "256MB",
      workload: "180TB/year",
      warranty: "3 Years"
    },
    price: 14500,
    image: "/images/products/wd-purple-6tb.jpg",
    rating: 4.8,
    stock: 10,
    size: "3.5-inch"
  },

  {
    id: 196,
    title: "Seagate SkyHawk 4TB",
    subtitle: "4TB Surveillance HDD",
    category: "Security",
    subcategory: "CCTV Storage",
    descriptions: "Surveillance-grade hard drive designed for DVR and NVR recording systems.",
    information: {
      brand: "Seagate",
      capacity: "4TB",
      interface: "SATA III",
      RPM: "5400 RPM",
      cache: "256MB",
      workload: "180TB/year",
      warranty: "3 Years"
    },
    price: 11000,
    image: "/images/products/seagate-skyhawk-4tb.jpg",
    rating: 4.7,
    stock: 14,
    size: "3.5-inch"
  },

  {
    id: 197,
    title: "Hikvision DS-3E0505-E",
    subtitle: "5-Port Gigabit Unmanaged Switch",
    category: "Networking",
    subcategory: "Network Switch",
    descriptions: "Compact gigabit switch suitable for connecting computers, cameras and network devices.",
    information: {
      brand: "Hikvision",
      ports: "5 x Gigabit",
      speed: "10/100/1000Mbps",
      management: "Unmanaged",
      switchingCapacity: "10Gbps",
      installation: "Desktop",
      power: "External Adapter"
    },
    price: 2200,
    image: "/images/products/hikvision-ds-3e0505-e.jpg",
    rating: 4.6,
    stock: 30,
    size: "5-Port"
  },

  {
    id: 198,
    title: "TP-Link TL-SG105",
    subtitle: "5-Port Gigabit Desktop Switch",
    category: "Networking",
    subcategory: "Network Switch",
    descriptions: "Small plug-and-play gigabit switch for home and small office networks.",
    information: {
      brand: "TP-Link",
      ports: "5 x Gigabit",
      speed: "10/100/1000Mbps",
      management: "Unmanaged",
      switchingCapacity: "10Gbps",
      installation: "Desktop",
      housing: "Metal"
    },
    price: 2100,
    image: "/images/products/tp-link-tl-sg105.jpg",
    rating: 4.8,
    stock: 35,
    size: "5-Port"
  },

  {
    id: 199,
    title: "Mercusys MS108G",
    subtitle: "8-Port Gigabit Desktop Switch",
    category: "Networking",
    subcategory: "Network Switch",
    descriptions: "Affordable 8-port gigabit switch for expanding wired network connections.",
    information: {
      brand: "Mercusys",
      ports: "8 x Gigabit",
      speed: "10/100/1000Mbps",
      management: "Unmanaged",
      switchingCapacity: "16Gbps",
      installation: "Desktop",
      power: "External Adapter"
    },
    price: 2400,
    image: "/images/products/mercusys-ms108g.jpg",
    rating: 4.6,
    stock: 28,
    size: "8-Port"
  },

  {
    id: 200,
    title: "TP-Link Archer MR600",
    subtitle: "4G+ Cat6 AC1200 LTE Router",
    category: "Networking",
    subcategory: "4G Router",
    descriptions: "4G LTE router providing high-speed internet connectivity with SIM card support.",
    information: {
      brand: "TP-Link",
      network: "4G+ Cat6",
      WiFi: "AC1200",
      bands: "Dual Band",
      downloadSpeed: "Up to 300Mbps",
      ports: "4 x Gigabit",
      SIM: "Nano SIM"
    },
    price: 18500,
    image: "/images/products/tp-link-archer-mr600.jpg",
    rating: 4.7,
    stock: 8,
    size: "Desktop"
  },
// =========================
// BATCH 5 — PRODUCTS 201-250
// SOFTWARE, GADGETS, OFFICE EQUIPMENT,
// APPLIANCES, GAMING & TV
// =========================

{
  id: 201,
  title: "Microsoft Windows 11 Home",
  subtitle: "64-bit Operating System License",
  category: "Software",
  subcategory: "Operating System",
  description: "Modern Windows operating system designed for home users with improved security, productivity features and a redesigned interface.",
  information: {
    brand: "Microsoft",
    edition: "Windows 11 Home",
    architecture: "64-bit",
    license: "1 PC",
    activation: "Digital License",
    language: "English",
    support: "Microsoft Support"
  },
  price: 14500,
  image: "/images/products/windows-11-home.jpg",
  rating: 4.7,
  stock: 15,
  size: "1 PC"
},

{
  id: 202,
  title: "Microsoft Windows 11 Pro",
  subtitle: "Professional 64-bit Operating System",
  category: "Software",
  subcategory: "Operating System",
  description: "Professional Windows operating system with advanced security, device management and business networking features.",
  information: {
    brand: "Microsoft",
    edition: "Windows 11 Pro",
    architecture: "64-bit",
    license: "1 PC",
    activation: "Digital License",
    security: "BitLocker",
    remoteDesktop: "Supported"
  },
  price: 18500,
  image: "/images/products/windows-11-pro.jpg",
  rating: 4.8,
  stock: 12,
  size: "1 PC"
},

{
  id: 203,
  title: "Microsoft Office Home 2024",
  subtitle: "Word, Excel and PowerPoint Productivity Suite",
  category: "Software",
  subcategory: "Office Software",
  description: "Productivity software package for creating documents, spreadsheets and presentations for home and educational use.",
  information: {
    brand: "Microsoft",
    edition: "Office Home 2024",
    applications: "Word, Excel, PowerPoint",
    license: "1 PC",
    operatingSystem: "Windows",
    activation: "Digital",
    support: "Microsoft Support"
  },
  price: 16500,
  image: "/images/products/microsoft-office-home-2024.jpg",
  rating: 4.8,
  stock: 14,
  size: "1 PC"
},

{
  id: 204,
  title: "Microsoft Office Home & Business 2024",
  subtitle: "Professional Productivity Software Suite",
  category: "Software",
  subcategory: "Office Software",
  description: "Business productivity suite designed for professional document creation, spreadsheets, presentations and email management.",
  information: {
    brand: "Microsoft",
    edition: "Office Home & Business 2024",
    applications: "Word, Excel, PowerPoint, Outlook",
    license: "1 PC or Mac",
    operatingSystem: "Windows, macOS",
    activation: "Digital",
    support: "Microsoft Support"
  },
  price: 32000,
  image: "/images/products/office-home-business-2024.jpg",
  rating: 4.8,
  stock: 8,
  size: "1 Device"
},

{
  id: 205,
  title: "ESET Internet Security",
  subtitle: "Multi-Layer Internet Security Software",
  category: "Software",
  subcategory: "Antivirus",
  description: "Security software designed to protect computers against malware, phishing, ransomware and online threats.",
  information: {
    brand: "ESET",
    protection: "Internet Security",
    devices: "1 Device",
    validity: "1 Year",
    platform: "Windows",
    features: "Anti-Phishing, Anti-Ransomware",
    updates: "Automatic"
  },
  price: 3200,
  image: "/images/products/eset-internet-security.jpg",
  rating: 4.7,
  stock: 20,
  size: "1 Device"
},

{
  id: 206,
  title: "Kaspersky Standard",
  subtitle: "Essential Antivirus and Security Software",
  category: "Software",
  subcategory: "Antivirus",
  description: "Security solution offering protection against viruses, malware, phishing and unsafe websites.",
  information: {
    brand: "Kaspersky",
    protection: "Standard",
    devices: "1 Device",
    validity: "1 Year",
    platform: "Windows, macOS",
    features: "Anti-Malware, Anti-Phishing",
    updates: "Automatic"
  },
  price: 3500,
  image: "/images/products/kaspersky-standard.jpg",
  rating: 4.6,
  stock: 18,
  size: "1 Device"
},

{
  id: 207,
  title: "Adobe Acrobat Pro",
  subtitle: "Professional PDF Management Software",
  category: "Software",
  subcategory: "Productivity Software",
  description: "Professional PDF software for creating, editing, converting, signing and managing business documents.",
  information: {
    brand: "Adobe",
    software: "Acrobat Pro",
    platform: "Windows, macOS",
    features: "PDF Editing, Signing, Conversion",
    license: "Subscription",
    cloudStorage: "Included",
    updates: "Automatic"
  },
  price: 12500,
  image: "/images/products/adobe-acrobat-pro.jpg",
  rating: 4.7,
  stock: 10,
  size: "1 User"
},

{
  id: 208,
  title: "JetBrains All Products Pack",
  subtitle: "Professional Developer Software Suite",
  category: "Software",
  subcategory: "Developer Software",
  description: "Complete developer software package providing access to professional IDEs and development tools.",
  information: {
    brand: "JetBrains",
    products: "IntelliJ IDEA, WebStorm, PyCharm and More",
    license: "Subscription",
    platform: "Windows, macOS, Linux",
    users: "1 User",
    updates: "Included",
    support: "JetBrains Support"
  },
  price: 28000,
  image: "/images/products/jetbrains-all-products.jpg",
  rating: 4.9,
  stock: 7,
  size: "1 User"
},

{
  id: 209,
  title: "Norton 360 Deluxe",
  subtitle: "Multi-Device Internet Security Suite",
  category: "Software",
  subcategory: "Antivirus",
  description: "Comprehensive security suite with malware protection, online privacy features and secure browsing tools.",
  information: {
    brand: "Norton",
    devices: "5 Devices",
    validity: "1 Year",
    platform: "Windows, macOS, Android, iOS",
    features: "Antivirus, VPN, Password Manager",
    cloudBackup: "Included",
    updates: "Automatic"
  },
  price: 6200,
  image: "/images/products/norton-360-deluxe.jpg",
  rating: 4.6,
  stock: 12,
  size: "5 Devices"
},

{
  id: 210,
  title: "Microsoft Visual Studio Professional",
  subtitle: "Professional Integrated Development Environment",
  category: "Software",
  subcategory: "Developer Software",
  description: "Professional development environment for building web, desktop, cloud and enterprise applications.",
  information: {
    brand: "Microsoft",
    edition: "Professional",
    platform: "Windows",
    languages: "C#, C++, JavaScript and More",
    tools: "Debugger, Git, Testing",
    license: "Subscription",
    support: "Microsoft Support"
  },
  price: 24000,
  image: "/images/products/visual-studio-professional.jpg",
  rating: 4.8,
  stock: 8,
  size: "1 User"
},

// =========================
// GADGETS
// =========================

{
  id: 211,
  title: "Anker 737 Power Bank",
  subtitle: "24000mAh 140W Portable Power Bank",
  category: "Gadgets",
  subcategory: "Power Bank",
  description: "High-capacity power bank with high-wattage USB-C output for laptops, smartphones and other mobile devices.",
  information: {
    brand: "Anker",
    capacity: "24000mAh",
    output: "140W",
    ports: "2 x USB-C, 1 x USB-A",
    display: "Digital Display",
    charging: "USB-C PD",
    protection: "MultiProtect"
  },
  price: 18500,
  image: "/images/products/anker-737-power-bank.jpg",
  rating: 4.9,
  stock: 9,
  size: "24000mAh"
},

{
  id: 212,
  title: "Baseus Blade 100W Power Bank",
  subtitle: "20000mAh Laptop Power Bank",
  category: "Gadgets",
  subcategory: "Power Bank",
  description: "Slim high-output power bank designed for charging laptops, smartphones, tablets and other USB-C devices.",
  information: {
    brand: "Baseus",
    capacity: "20000mAh",
    output: "100W",
    ports: "2 x USB-C, 1 x USB-A",
    display: "Digital",
    charging: "USB-C PD",
    protection: "Overcharge Protection"
  },
  price: 9800,
  image: "/images/products/baseus-blade-100w.jpg",
  rating: 4.8,
  stock: 14,
  size: "20000mAh"
},

{
  id: 213,
  title: "UGREEN Nexode 100W GaN Charger",
  subtitle: "100W 4-Port GaN Fast Charger",
  category: "Gadgets",
  subcategory: "Charger",
  description: "Compact GaN charger capable of powering laptops, tablets and smartphones from multiple ports.",
  information: {
    brand: "UGREEN",
    output: "100W",
    technology: "GaN",
    ports: "3 x USB-C, 1 x USB-A",
    input: "100-240V",
    protection: "Over Voltage, Over Current",
    compatibility: "USB-C PD"
  },
  price: 7200,
  image: "/images/products/ugreen-nexode-100w.jpg",
  rating: 4.8,
  stock: 16,
  size: "100W"
},

{
  id: 214,
  title: "Anker 735 Charger",
  subtitle: "65W GaNPrime 3-Port Charger",
  category: "Gadgets",
  subcategory: "Charger",
  description: "Compact multi-port GaN charger for simultaneously charging laptops, phones and tablets.",
  information: {
    brand: "Anker",
    output: "65W",
    technology: "GaNPrime",
    ports: "2 x USB-C, 1 x USB-A",
    charging: "Power Delivery",
    input: "100-240V",
    protection: "ActiveShield"
  },
  price: 6200,
  image: "/images/products/anker-735-charger.jpg",
  rating: 4.8,
  stock: 18,
  size: "65W"
},

{
  id: 215,
  title: "UGREEN USB-C to HDMI Adapter",
  subtitle: "4K HDMI Display Adapter",
  category: "Gadgets",
  subcategory: "Adapter",
  description: "Compact USB-C display adapter for connecting compatible laptops and mobile devices to HDMI displays.",
  information: {
    brand: "UGREEN",
    input: "USB-C",
    output: "HDMI",
    resolution: "Up to 4K",
    refreshRate: "60Hz",
    compatibility: "Windows, macOS, Android",
    connection: "USB-C"
  },
  price: 2200,
  image: "/images/products/ugreen-usb-c-hdmi-adapter.jpg",
  rating: 4.7,
  stock: 30,
  size: "Compact"
},

{
  id: 216,
  title: "Anker Soundcore Motion X600",
  subtitle: "Portable High-Resolution Bluetooth Speaker",
  category: "Gadgets",
  subcategory: "Bluetooth Speaker",
  description: "Premium portable speaker delivering immersive wireless audio with long battery life.",
  information: {
    brand: "Anker",
    output: "50W",
    connectivity: "Bluetooth 5.3",
    audio: "Spatial Audio",
    battery: "Up to 12 Hours",
    charging: "USB-C",
    waterResistance: "IPX7"
  },
  price: 18500,
  image: "/images/products/soundcore-motion-x600.jpg",
  rating: 4.8,
  stock: 8,
  size: "Portable"
},

{
  id: 217,
  title: "JBL Charge 5",
  subtitle: "Portable Waterproof Bluetooth Speaker",
  category: "Gadgets",
  subcategory: "Bluetooth Speaker",
  description: "Portable wireless speaker with powerful sound, long battery life and waterproof construction.",
  information: {
    brand: "JBL",
    output: "40W",
    connectivity: "Bluetooth 5.1",
    battery: "Up to 20 Hours",
    charging: "USB-C",
    waterResistance: "IP67",
    powerBank: "Yes"
  },
  price: 14500,
  image: "/images/products/jbl-charge-5.jpg",
  rating: 4.8,
  stock: 12,
  size: "Portable"
},

{
  id: 218,
  title: "Xiaomi Smart Band 9",
  subtitle: "AMOLED Fitness Smart Band",
  category: "Gadgets",
  subcategory: "Fitness Band",
  description: "Lightweight smart band with fitness tracking, health monitoring and long battery life.",
  information: {
    brand: "Xiaomi",
    display: "1.62-inch AMOLED",
    connectivity: "Bluetooth 5.4",
    sensors: "Heart Rate, SpO2",
    waterResistance: "5ATM",
    battery: "Up to 21 Days",
    compatibility: "Android, iOS"
  },
  price: 5200,
  image: "/images/products/xiaomi-smart-band-9.jpg",
  rating: 4.7,
  stock: 20,
  size: "1.62-inch"
},

{
  id: 219,
  title: "Amazon Echo Dot 5th Gen",
  subtitle: "Smart Speaker with Alexa",
  category: "Gadgets",
  subcategory: "Smart Speaker",
  description: "Compact smart speaker designed for voice commands, music playback, smart home control and information.",
  information: {
    brand: "Amazon",
    assistant: "Alexa",
    connectivity: "Wi-Fi, Bluetooth",
    speaker: "1.73-inch",
    microphone: "Built-in",
    smartHome: "Supported",
    power: "AC Adapter"
  },
  price: 6500,
  image: "/images/products/amazon-echo-dot-5.jpg",
  rating: 4.6,
  stock: 10,
  size: "Compact"
},

{
  id: 220,
  title: "Google Chromecast with Google TV",
  subtitle: "4K HDR Streaming Media Player",
  category: "Gadgets",
  subcategory: "Streaming Device",
  description: "Compact streaming device for accessing entertainment apps and 4K HDR content on compatible televisions.",
  information: {
    brand: "Google",
    resolution: "4K HDR",
    operatingSystem: "Google TV",
    connectivity: "Wi-Fi, Bluetooth",
    ports: "HDMI",
    remote: "Voice Remote",
    storage: "8GB"
  },
  price: 7200,
  image: "/images/products/chromecast-google-tv.jpg",
  rating: 4.7,
  stock: 13,
  size: "Compact"
},

// =========================
// OFFICE EQUIPMENT
// =========================

{
  id: 221,
  title: "Epson EcoTank L3250",
  subtitle: "Wireless All-in-One Ink Tank Printer",
  category: "Office Equipment",
  subcategory: "Printer",
  description: "Cost-efficient all-in-one ink tank printer for printing, scanning and copying documents at home or office.",
  information: {
    brand: "Epson",
    printerType: "Ink Tank",
    functions: "Print, Scan, Copy",
    resolution: "5760 x 1440 dpi",
    connectivity: "Wi-Fi, USB",
    printSpeed: "Up to 10 ipm",
    warranty: "1 Year"
  },
  price: 21500,
  image: "/images/products/epson-l3250.jpg",
  rating: 4.8,
  stock: 12,
  size: "All-in-One"
},

{
  id: 222,
  title: "Canon PIXMA G3010",
  subtitle: "Wireless All-in-One Ink Tank Printer",
  category: "Office Equipment",
  subcategory: "Printer",
  description: "Wireless ink tank printer designed for affordable printing, scanning and copying in home and office environments.",
  information: {
    brand: "Canon",
    printerType: "Ink Tank",
    functions: "Print, Scan, Copy",
    resolution: "4800 x 1200 dpi",
    connectivity: "Wi-Fi, USB",
    printSpeed: "Up to 8.8 ipm",
    inkSystem: "Refillable Tank",
    warranty: "1 Year"
  },
  price: 18500,
  image: "/images/products/canon-pixma-g3010.jpg",
  rating: 4.7,
  stock: 15,
  size: "All-in-One"
},

{
  id: 223,
  title: "HP LaserJet M111w",
  subtitle: "Wireless Monochrome Laser Printer",
  category: "Office Equipment",
  subcategory: "Laser Printer",
  description: "Compact monochrome laser printer designed for fast and reliable document printing in small offices.",
  information: {
    brand: "HP",
    printerType: "Monochrome Laser",
    printSpeed: "Up to 20 ppm",
    resolution: "600 x 600 dpi",
    connectivity: "Wi-Fi, USB",
    duplex: "Manual",
    monthlyDuty: "Up to 8000 Pages",
    warranty: "1 Year"
  },
  price: 14500,
  image: "/images/products/hp-laserjet-m111w.jpg",
  rating: 4.6,
  stock: 11,
  size: "Compact"
},

{
  id: 224,
  title: "Brother DCP-T720DW",
  subtitle: "Wireless Duplex Ink Tank Printer",
  category: "Office Equipment",
  subcategory: "Printer",
  description: "All-in-one ink tank printer with wireless connectivity and automatic duplex printing for home and office use.",
  information: {
    brand: "Brother",
    printerType: "Ink Tank",
    functions: "Print, Scan, Copy",
    duplex: "Automatic",
    connectivity: "Wi-Fi, USB",
    resolution: "1200 x 6000 dpi",
    warranty: "1 Year"
  },
  price: 23500,
  image: "/images/products/brother-dcp-t720dw.jpg",
  rating: 4.8,
  stock: 9,
  size: "All-in-One"
},

{
  id: 225,
  title: "Fellowes Powershred 8MC",
  subtitle: "Personal Cross-Cut Paper Shredder",
  category: "Office Equipment",
  subcategory: "Paper Shredder",
  description: "Compact cross-cut paper shredder designed to securely dispose of sensitive office documents.",
  information: {
    brand: "Fellowes",
    shredType: "Cross-Cut",
    securityLevel: "P-4",
    sheetCapacity: "8 Sheets",
    binCapacity: "14 Liters",
    safety: "Overheat Protection",
    operation: "Manual Feed"
  },
  price: 10500,
  image: "/images/products/fellowes-powershred-8mc.jpg",
  rating: 4.6,
  stock: 7,
  size: "14L"
},

{
  id: 226,
  title: "Epson WorkForce ES-580W",
  subtitle: "Wireless Duplex Document Scanner",
  category: "Office Equipment",
  subcategory: "Scanner",
  description: "High-speed document scanner with automatic duplex scanning and wireless connectivity for office workflows.",
  information: {
    brand: "Epson",
    scannerType: "Document Scanner",
    resolution: "600 dpi",
    speed: "35 ppm",
    feeder: "100 Sheets",
    duplex: "Automatic",
    connectivity: "Wi-Fi, USB"
  },
  price: 58000,
  image: "/images/products/epson-es-580w.jpg",
  rating: 4.8,
  stock: 5,
  size: "Desktop"
},

{
  id: 227,
  title: "ViewSonic PA503S",
  subtitle: "SVGA Business Projector",
  category: "Office Equipment",
  subcategory: "Projector",
  description: "Bright business projector suitable for classrooms, meetings and presentations.",
  information: {
    brand: "ViewSonic",
    resolution: "800 x 600",
    brightness: "3800 ANSI Lumens",
    contrast: "22000:1",
    projectionSize: "30-300 inch",
    connectivity: "HDMI, VGA",
    lampLife: "Up to 15000 Hours"
  },
  price: 52000,
  image: "/images/products/viewsonic-pa503s.jpg",
  rating: 4.6,
  stock: 5,
  size: "Compact"
},

{
  id: 228,
  title: "Deli E3894 Paper Cutter",
  subtitle: "Heavy Duty Office Paper Trimmer",
  category: "Office Equipment",
  subcategory: "Paper Cutter",
  description: "Heavy-duty paper cutting machine designed for offices, schools and professional document work.",
  information: {
    brand: "Deli",
    cuttingType: "Manual",
    capacity: "Up to 15 Sheets",
    paperSize: "A4",
    safetyGuard: "Yes",
    base: "Metal",
    usage: "Office, School"
  },
  price: 4200,
  image: "/images/products/deli-e3894-paper-cutter.jpg",
  rating: 4.5,
  stock: 14,
  size: "A4"
},

{
  id: 229,
  title: "APC Back-UPS 1100VA",
  subtitle: "1100VA Line Interactive UPS",
  category: "Office Equipment",
  subcategory: "UPS",
  description: "Reliable backup power solution designed to protect office computers, networking equipment and electronics.",
  information: {
    brand: "APC",
    capacity: "1100VA",
    outputPower: "660W",
    topology: "Line Interactive",
    outlets: "4",
    protection: "Surge Protection",
    battery: "12V"
  },
  price: 12500,
  image: "/images/products/apc-back-ups-1100va.jpg",
  rating: 4.7,
  stock: 10,
  size: "1100VA"
},

{
  id: 230,
  title: "Logitech Spotlight Presentation Remote",
  subtitle: "Wireless Presentation Clicker",
  category: "Office Equipment",
  subcategory: "Presentation Remote",
  description: "Professional wireless presentation remote with digital highlighting and long wireless range.",
  information: {
    brand: "Logitech",
    connection: "USB Receiver, Bluetooth",
    range: "30 Meters",
    battery: "Rechargeable",
    controls: "Presentation Controls",
    compatibility: "Windows, macOS",
    charging: "USB"
  },
  price: 8500,
  image: "/images/products/logitech-spotlight.jpg",
  rating: 4.8,
  stock: 8,
  size: "Compact"
},

// =========================
// APPLIANCES
// =========================

{
  id: 231,
  title: "Philips Air Fryer HD9200",
  subtitle: "4.1L Digital Air Fryer",
  category: "Appliance",
  subcategory: "Air Fryer",
  description: "Compact air fryer designed for preparing crispy meals with significantly less oil.",
  information: {
    brand: "Philips",
    capacity: "4.1 Liters",
    power: "1400W",
    temperature: "Up to 200°C",
    timer: "60 Minutes",
    technology: "Rapid Air",
    control: "Analog"
  },
  price: 12500,
  image: "/images/products/philips-air-fryer-hd9200.jpg",
  rating: 4.7,
  stock: 10,
  size: "4.1L"
},

{
  id: 232,
  title: "Miyako Electric Oven",
  subtitle: "Electric Oven with Grill Function",
  category: "Appliance",
  subcategory: "Electric Oven",
  description: "Compact electric oven suitable for baking, grilling and everyday home cooking.",
  information: {
    brand: "Miyako",
    capacity: "35 Liters",
    power: "1600W",
    temperature: "100-250°C",
    timer: "60 Minutes",
    functions: "Bake, Grill",
    control: "Mechanical"
  },
  price: 10500,
  image: "/images/products/miyako-electric-oven.jpg",
  rating: 4.5,
  stock: 12,
  size: "35L"
},

{
  id: 233,
  title: "Samsung MS23K3513AK Microwave Oven",
  subtitle: "23L Solo Microwave Oven",
  category: "Appliance",
  subcategory: "Microwave Oven",
  description: "Compact microwave oven designed for reheating, defrosting and everyday cooking.",
  information: {
    brand: "Samsung",
    capacity: "23 Liters",
    power: "800W",
    cookingModes: "6",
    control: "Digital",
    interior: "Ceramic Enamel",
    timer: "99 Minutes"
  },
  price: 14500,
  image: "/images/products/samsung-ms23k3513ak.jpg",
  rating: 4.7,
  stock: 9,
  size: "23L"
},

{
  id: 234,
  title: "Walton WFD-1A5-GDEL Refrigerator",
  subtitle: "Top Mount Frost-Free Refrigerator",
  category: "Appliance",
  subcategory: "Refrigerator",
  description: "Energy-efficient refrigerator designed for everyday household food and beverage storage.",
  information: {
    brand: "Walton",
    capacity: "238 Liters",
    cooling: "Frost Free",
    compressor: "Inverter",
    refrigeratorType: "Top Mount",
    energyRating: "Energy Efficient",
    warranty: "10 Years Compressor"
  },
  price: 42000,
  image: "/images/products/walton-refrigerator.jpg",
  rating: 4.6,
  stock: 6,
  size: "238L"
},

{
  id: 235,
  title: "Xiaomi Robot Vacuum S10",
  subtitle: "Smart Robot Vacuum Cleaner",
  category: "Appliance",
  subcategory: "Robot Vacuum",
  description: "Smart robotic vacuum cleaner with automated navigation, powerful suction and app-based control.",
  information: {
    brand: "Xiaomi",
    suction: "4000Pa",
    battery: "3200mAh",
    navigation: "LDS Laser Navigation",
    control: "Mi Home App",
    mopping: "Supported",
    charging: "Automatic"
  },
  price: 28500,
  image: "/images/products/xiaomi-robot-vacuum-s10.jpg",
  rating: 4.7,
  stock: 7,
  size: "Robot"
},

{
  id: 236,
  title: "Philips PowerPro Compact Vacuum",
  subtitle: "Compact Bagless Vacuum Cleaner",
  category: "Appliance",
  subcategory: "Vacuum Cleaner",
  description: "Compact bagless vacuum cleaner designed for efficient household floor and surface cleaning.",
  information: {
    brand: "Philips",
    power: "1800W",
    dustCapacity: "1.5 Liters",
    filtration: "Allergy Filter",
    technology: "PowerCyclone",
    cordLength: "6 Meters",
    control: "Mechanical"
  },
  price: 14500,
  image: "/images/products/philips-powerpro-compact.jpg",
  rating: 4.6,
  stock: 9,
  size: "Compact"
},

{
  id: 237,
  title: "Xiaomi Smart Air Purifier 4",
  subtitle: "Smart HEPA Air Purifier",
  category: "Appliance",
  subcategory: "Air Purifier",
  description: "Smart air purifier designed to reduce airborne particles and provide cleaner indoor air.",
  information: {
    brand: "Xiaomi",
    coverage: "516 sq.ft",
    filtration: "True HEPA",
    CADR: "400 m³/h",
    connectivity: "Wi-Fi",
    control: "Mi Home App",
    display: "OLED"
  },
  price: 18500,
  image: "/images/products/xiaomi-air-purifier-4.jpg",
  rating: 4.7,
  stock: 8,
  size: "Medium"
},

{
  id: 238,
  title: "Panasonic MX-AC400 Blender",
  subtitle: "4-Speed Kitchen Blender",
  category: "Appliance",
  subcategory: "Blender",
  description: "Powerful kitchen blender designed for preparing smoothies, sauces and everyday food ingredients.",
  information: {
    brand: "Panasonic",
    power: "400W",
    jarCapacity: "1.5 Liters",
    speeds: "4",
    blades: "Stainless Steel",
    safety: "Safety Lock",
    control: "Rotary"
  },
  price: 6500,
  image: "/images/products/panasonic-mx-ac400.jpg",
  rating: 4.5,
  stock: 15,
  size: "1.5L"
},

{
  id: 239,
  title: "Philips HD9252 Air Fryer",
  subtitle: "4.1L Rapid Air Fryer",
  category: "Appliance",
  subcategory: "Air Fryer",
  description: "Digital air fryer with rapid air circulation technology for healthier everyday cooking.",
  information: {
    brand: "Philips",
    capacity: "4.1 Liters",
    power: "1400W",
    temperature: "80-200°C",
    timer: "60 Minutes",
    display: "Digital",
    technology: "Rapid Air"
  },
  price: 14500,
  image: "/images/products/philips-hd9252-air-fryer.jpg",
  rating: 4.8,
  stock: 11,
  size: "4.1L"
},

{
  id: 240,
  title: "Midea 1.5 Ton Inverter AC",
  subtitle: "Energy Efficient Split Air Conditioner",
  category: "Appliance",
  subcategory: "Air Conditioner",
  description: "Inverter split air conditioner designed for efficient cooling and comfortable indoor temperature control.",
  information: {
    brand: "Midea",
    capacity: "1.5 Ton",
    compressor: "Inverter",
    refrigerant: "R32",
    energyRating: "Energy Efficient",
    cooling: "Fast Cooling",
    control: "Remote Control",
    warranty: "5 Years Compressor"
  },
  price: 58000,
  image: "/images/products/midea-1-5-ton-ac.jpg",
  rating: 4.6,
  stock: 5,
  size: "1.5 Ton"
},

// =========================
// GAMING & TV
// =========================

{
  id: 241,
  title: "Sony BRAVIA 43-inch 4K Google TV",
  subtitle: "4K UHD Smart LED Television",
  category: "TV",
  subcategory: "Smart TV",
  description: "4K smart television with Google TV, HDR support and built-in streaming applications.",
  information: {
    brand: "Sony",
    display: "43-inch",
    resolution: "3840 x 2160",
    panel: "LED",
    operatingSystem: "Google TV",
    HDR: "HDR10",
    connectivity: "Wi-Fi, Bluetooth, HDMI"
  },
  price: 72000,
  image: "/images/products/sony-bravia-43-4k.jpg",
  rating: 4.8,
  stock: 5,
  size: "43-inch"
},

{
  id: 242,
  title: "Samsung 50-inch Crystal UHD 4K TV",
  subtitle: "4K Smart Crystal UHD Television",
  category: "TV",
  subcategory: "Smart TV",
  description: "Large 4K smart television with vibrant picture quality, smart applications and modern connectivity.",
  information: {
    brand: "Samsung",
    display: "50-inch",
    resolution: "3840 x 2160",
    panel: "Crystal UHD",
    operatingSystem: "Tizen",
    HDR: "HDR10+",
    connectivity: "Wi-Fi, Bluetooth, HDMI"
  },
  price: 68000,
  image: "/images/products/samsung-50-crystal-uhd.jpg",
  rating: 4.7,
  stock: 7,
  size: "50-inch"
},

{
  id: 243,
  title: "Xiaomi TV A Pro 55",
  subtitle: "55-inch 4K QLED Google TV",
  category: "TV",
  subcategory: "Smart TV",
  description: "Large QLED smart television offering 4K resolution, Google TV and immersive entertainment features.",
  information: {
    brand: "Xiaomi",
    display: "55-inch",
    resolution: "3840 x 2160",
    panel: "QLED",
    operatingSystem: "Google TV",
    HDR: "Dolby Vision",
    connectivity: "Wi-Fi, Bluetooth, HDMI"
  },
  price: 62000,
  image: "/images/products/xiaomi-tv-a-pro-55.jpg",
  rating: 4.7,
  stock: 8,
  size: "55-inch"
},

{
  id: 244,
  title: "LG 55-inch 4K UHD Smart TV",
  subtitle: "55-inch 4K webOS Smart Television",
  category: "TV",
  subcategory: "Smart TV",
  description: "Modern 4K smart television with LG webOS, HDR support and multiple streaming applications.",
  information: {
    brand: "LG",
    display: "55-inch",
    resolution: "3840 x 2160",
    panel: "UHD",
    operatingSystem: "webOS",
    HDR: "HDR10",
    connectivity: "Wi-Fi, Bluetooth, HDMI"
  },
  price: 65000,
  image: "/images/products/lg-55-4k-smart-tv.jpg",
  rating: 4.7,
  stock: 6,
  size: "55-inch"
},

{
  id: 245,
  title: "Sony HT-S40R Soundbar",
  subtitle: "5.1 Channel Home Theater Sound System",
  category: "Gaming",
  subcategory: "Sound System",
  description: "5.1-channel surround sound system designed for immersive gaming, movies and television entertainment.",
  information: {
    brand: "Sony",
    channels: "5.1",
    output: "600W",
    connectivity: "Bluetooth, HDMI ARC, Optical",
    speakers: "Rear Wireless Speakers",
    subwoofer: "Wireless",
    soundModes: "Cinema, Music, Standard"
  },
  price: 42000,
  image: "/images/products/sony-ht-s40r.jpg",
  rating: 4.8,
  stock: 5,
  size: "5.1 Channel"
},

{
  id: 246,
  title: "Logitech G Pro X Gaming Headset",
  subtitle: "Professional Wired Gaming Headset",
  category: "Gaming",
  subcategory: "Gaming Headset",
  description: "Professional gaming headset designed for competitive gaming with clear audio and detachable microphone.",
  information: {
    brand: "Logitech",
    connection: "USB, 3.5mm",
    driver: "50mm PRO-G",
    microphone: "Detachable",
    surroundSound: "DTS Headphone:X 2.0",
    compatibility: "PC, Console",
    controls: "Inline Controls"
  },
  price: 13500,
  image: "/images/products/logitech-g-pro-x-headset.jpg",
  rating: 4.8,
  stock: 10,
  size: "Over Ear"
},

{
  id: 247,
  title: "Razer BlackWidow V3",
  subtitle: "Mechanical RGB Gaming Keyboard",
  category: "Gaming",
  subcategory: "Gaming Keyboard",
  description: "Mechanical gaming keyboard featuring RGB lighting, dedicated media controls and responsive switches.",
  information: {
    brand: "Razer",
    switches: "Mechanical",
    layout: "Full Size",
    lighting: "Razer Chroma RGB",
    connection: "USB",
    controls: "Dedicated Media Keys",
    compatibility: "Windows"
  },
  price: 11500,
  image: "/images/products/razer-blackwidow-v3.jpg",
  rating: 4.7,
  stock: 12,
  size: "Full Size"
},

{
  id: 248,
  title: "Logitech G502 HERO",
  subtitle: "High Performance RGB Gaming Mouse",
  category: "Gaming",
  subcategory: "Gaming Mouse",
  description: "High-precision gaming mouse with customizable buttons, RGB lighting and adjustable sensitivity.",
  information: {
    brand: "Logitech",
    sensor: "HERO 25K",
    DPI: "100-25600 DPI",
    buttons: "11 Programmable",
    lighting: "RGB",
    connection: "USB",
    weight: "121g"
  },
  price: 6500,
  image: "/images/products/logitech-g502-hero.jpg",
  rating: 4.8,
  stock: 15,
  size: "Standard"
},

{
  id: 249,
  title: "Secretlab TITAN Evo Gaming Chair",
  subtitle: "Ergonomic Premium Gaming Chair",
  category: "Gaming",
  subcategory: "Gaming Chair",
  description: "Premium ergonomic gaming chair designed for long gaming and workstation sessions with adjustable support.",
  information: {
    brand: "Secretlab",
    material: "Hybrid Leatherette",
    recline: "165 Degrees",
    armrest: "4D Adjustable",
    lumbarSupport: "Adjustable",
    base: "Aluminum",
    weightCapacity: "Up to 180kg"
  },
  price: 52000,
  image: "/images/products/secretlab-titan-evo.jpg",
  rating: 4.9,
  stock: 4,
  size: "Large"
},

{
  id: 250,
  title: "ASUS ROG Swift PG27AQDM",
  subtitle: "27-inch QHD 240Hz OLED Gaming Monitor",
  category: "Gaming",
  subcategory: "Gaming Monitor",
  description: "Premium OLED gaming monitor delivering QHD resolution, ultra-fast refresh rate and deep contrast for competitive gaming.",
  information: {
    brand: "ASUS",
    display: "27-inch",
    resolution: "2560 x 1440",
    panel: "OLED",
    refreshRate: "240Hz",
    responseTime: "0.03ms",
    HDR: "DisplayHDR True Black 400",
    ports: "HDMI, DisplayPort"
  },
  price: 95000,
  image: "/images/products/asus-rog-swift-pg27aqdm.jpg",
  rating: 4.9,
  stock: 4,
  size: "27-inch"
}

];



export default productsData;