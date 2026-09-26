const productsData = [
  


  // ================= DESKTOP PRODUCTS =================

  {
    id: 301,
    title: "Core i3 10th Gen Desktop PC",
    subtitle: "Entry Level Desktop Computer",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Reliable desktop computer for office work, study and everyday tasks.",
    information: "Intel Core i3 processor, 8GB RAM, 256GB SSD and compact desktop casing.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    stock: 20,
    size: "Small",
    processor: "Core i3",
    generation: "10th Gen",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    id: 302,
    title: "Core i3 11th Gen Desktop PC",
    subtitle: "Office & Home Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Affordable desktop system designed for office and home productivity.",
    information: "Intel Core i3 11th Gen, 8GB RAM, 512GB SSD and standard desktop casing.",
    price: 39000,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 18,
    size: "Standard",
    processor: "Core i3",
    generation: "11th Gen",
    ram: "8GB",
    ssd: "512GB",
  },

  {
    id: 303,
    title: "Core i5 10th Gen Desktop PC",
    subtitle: "Powerful Everyday Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Balanced desktop computer for business, study and general productivity.",
    information: "Intel Core i5 processor, 16GB RAM, 512GB SSD and standard casing.",
    price: 48000,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 22,
    size: "Standard",
    processor: "Core i5",
    generation: "10th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    id: 304,
    title: "Core i5 11th Gen Desktop PC",
    subtitle: "Business Performance Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "High-performance desktop for office applications and multitasking.",
    information: "Intel Core i5 11th Gen, 16GB RAM, 512GB SSD and standard desktop case.",
    price: 52000,
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "Standard",
    processor: "Core i5",
    generation: "11th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    id: 305,
    title: "Core i5 12th Gen Desktop PC",
    subtitle: "Modern Productivity Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Modern desktop computer offering strong performance for productivity.",
    information: "Intel Core i5 12th Gen, 16GB RAM, 1TB SSD and standard casing.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 17,
    size: "Standard",
    processor: "Core i5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "1TB",
  },

  {
    id: 306,
    title: "Core i7 11th Gen Desktop PC",
    subtitle: "High Performance Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Powerful desktop system for demanding productivity applications.",
    information: "Intel Core i7 11th Gen, 16GB RAM, 1TB SSD and large desktop casing.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "Large",
    processor: "Core i7",
    generation: "11th Gen",
    ram: "16GB",
    ssd: "1TB",
  },

  {
    id: 307,
    title: "Core i7 12th Gen Desktop PC",
    subtitle: "Professional Performance Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Professional desktop designed for development, editing and multitasking.",
    information: "Intel Core i7 12th Gen, 32GB RAM, 1TB SSD and large casing.",
    price: 92000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "Large",
    processor: "Core i7",
    generation: "12th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 308,
    title: "Core i7 13th Gen Desktop PC",
    subtitle: "Advanced Professional Desktop",
    category: "Desktop",
    subcategory: "Desktop PC",
    description: "Advanced desktop computer for professional workloads and creative applications.",
    information: "Intel Core i7 13th Gen, 32GB RAM, 1TB SSD and large desktop case.",
    price: 105000,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 10,
    size: "Large",
    processor: "Core i7",
    generation: "13th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 309,
    title: "Core i9 12th Gen Desktop PC",
    subtitle: "Extreme Performance Desktop",
    category: "Desktop",
    subcategory: "Performance Desktop",
    description: "High-end desktop designed for demanding professional workloads.",
    information: "Intel Core i9 12th Gen, 32GB RAM, 1TB SSD and premium large casing.",
    price: 125000,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "Large",
    processor: "Core i9",
    generation: "12th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 310,
    title: "Core i9 13th Gen Desktop PC",
    subtitle: "Premium Performance Computer",
    category: "Desktop",
    subcategory: "Performance Desktop",
    description: "Premium desktop computer for advanced professional and creative work.",
    information: "Intel Core i9 13th Gen, 64GB RAM, 2TB SSD and premium casing.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 6,
    size: "Large",
    processor: "Core i9",
    generation: "13th Gen",
    ram: "64GB",
    ssd: "2TB",
  },

  {
    id: 311,
    title: "Ryzen 5 5600G Desktop PC",
    subtitle: "AMD Performance Desktop",
    category: "Desktop",
    subcategory: "AMD Desktop",
    description: "Balanced AMD desktop for productivity and everyday computing.",
    information: "AMD Ryzen 5 processor, 16GB RAM, 512GB SSD and standard casing.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 21,
    size: "Standard",
    processor: "Ryzen 5",
    generation: "10th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    id: 312,
    title: "Ryzen 5 7600 Desktop PC",
    subtitle: "Next Generation AMD Desktop",
    category: "Desktop",
    subcategory: "AMD Desktop",
    description: "Modern AMD desktop designed for productivity and performance.",
    information: "AMD Ryzen 5 7600, 16GB RAM, 1TB SSD and standard casing.",
    price: 58000,
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 16,
    size: "Standard",
    processor: "Ryzen 5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "1TB",
  },

  {
    id: 313,
    title: "Ryzen 7 5700X Desktop PC",
    subtitle: "AMD Gaming & Workstation Desktop",
    category: "Desktop",
    subcategory: "AMD Desktop",
    description: "Powerful AMD desktop suitable for gaming and professional workloads.",
    information: "AMD Ryzen 7, 32GB RAM, 1TB SSD and large performance casing.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 13,
    size: "Large",
    processor: "Ryzen 7",
    generation: "11th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 314,
    title: "Ryzen 7 7700 Desktop PC",
    subtitle: "High Performance AMD Computer",
    category: "Desktop",
    subcategory: "AMD Desktop",
    description: "High-performance AMD desktop for gaming, development and editing.",
    information: "AMD Ryzen 7 7700, 32GB RAM, 1TB SSD and premium casing.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 11,
    size: "Large",
    processor: "Ryzen 7",
    generation: "13th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 315,
    title: "Ryzen 9 5900X Desktop PC",
    subtitle: "Extreme AMD Workstation",
    category: "Desktop",
    subcategory: "AMD Workstation",
    description: "Extreme AMD workstation for demanding professional workloads.",
    information: "AMD Ryzen 9, 64GB RAM, 2TB SSD and premium large casing.",
    price: 115000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "Large",
    processor: "Ryzen 9",
    generation: "11th Gen",
    ram: "64GB",
    ssd: "2TB",
  },

  {
    id: 316,
    title: "Ryzen 9 7900X Desktop PC",
    subtitle: "Ultimate AMD Performance",
    category: "Desktop",
    subcategory: "AMD Workstation",
    description: "Premium AMD workstation for advanced editing and professional workloads.",
    information: "AMD Ryzen 9 7900X, 64GB RAM, 2TB SSD and premium performance casing.",
    price: 135000,
    image: "https://images.unsplash.com/photo-1587202372162-8e0f5f8c4f5f?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 5,
    size: "Large",
    processor: "Ryzen 9",
    generation: "14th Gen",
    ram: "64GB",
    ssd: "2TB",
  },
    // ================= DESKTOP PRODUCTS 351–400 =================

  // ================= APPLE MAC =================

  {
    id: 351,
    title: "Apple Mac Mini M2 8GB 256GB",
    subtitle: "Compact Apple Desktop",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-mini",
    description: "Compact and powerful Apple desktop for office work, development and everyday productivity.",
    information: "Apple M2 chip, 8GB unified memory and 256GB SSD.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "Small",
  },

  {
    id: 352,
    title: "Apple Mac Mini M2 16GB 512GB",
    subtitle: "High Performance Mac Mini",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-mini",
    description: "Powerful compact Mac desktop for developers, designers and professionals.",
    information: "Apple M2 chip, 16GB unified memory and 512GB SSD.",
    price: 105000,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    size: "Small",
  },

  {
    id: 353,
    title: "Apple Mac Mini M2 Pro 16GB 512GB",
    subtitle: "Professional Compact Desktop",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-mini",
    description: "Professional compact desktop designed for demanding creative workloads.",
    information: "Apple M2 Pro chip, 16GB unified memory and 512GB SSD.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "Small",
  },

  {
    id: 354,
    title: "Apple Mac Studio M2 Max 32GB 512GB",
    subtitle: "Professional Apple Workstation",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-studio",
    description: "High-performance Apple workstation for professional creative applications.",
    information: "Apple M2 Max chip, 32GB unified memory and 512GB SSD.",
    price: 235000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "Standard",
  },

  {
    id: 355,
    title: "Apple Mac Studio M2 Max 64GB 1TB",
    subtitle: "Advanced Creative Workstation",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-studio",
    description: "Powerful workstation for video editing, 3D work and professional production.",
    information: "Apple M2 Max chip, 64GB unified memory and 1TB SSD.",
    price: 295000,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 4,
    size: "Standard",
  },

  {
    id: 356,
    title: "Apple Mac Pro M2 Ultra",
    subtitle: "Ultimate Apple Workstation",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/mac-pro",
    description: "Extreme-performance Apple workstation for advanced professional workloads.",
    information: "Apple M2 Ultra chip, 64GB unified memory and 1TB SSD.",
    price: 520000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 2,
    size: "Large",
  },

  {
    id: 357,
    title: "Apple iMac 24 Inch M3 8GB 256GB",
    subtitle: "All-in-One Apple Desktop",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/imac",
    description: "Slim all-in-one Apple desktop designed for home, office and creative work.",
    information: "24-inch display, Apple M3 chip, 8GB memory and 256GB SSD.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "Standard",
  },

  {
    id: 358,
    title: "Apple iMac 24 Inch M3 16GB 512GB",
    subtitle: "Premium All-in-One Mac",
    category: "Desktop",
    subcategory: "Apple Mac",
    categoryPath: "desktop/apple-mac/imac",
    description: "Premium all-in-one desktop with strong performance for professionals.",
    information: "24-inch display, Apple M3 chip, 16GB memory and 512GB SSD.",
    price: 185000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "Standard",
  },

  // ================= GAMING PC - INTEL =================

  {
    id: 359,
    title: "Intel Core i5 12400F Gaming PC",
    subtitle: "Entry Gaming Desktop",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i5",
    description: "Gaming desktop designed for smooth Full HD gaming and everyday performance.",
    information: "Intel Core i5 12400F, 16GB RAM, 512GB SSD and dedicated graphics.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "Standard",
    processor: "Core i5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    id: 360,
    title: "Intel Core i5 13400F Gaming PC",
    subtitle: "Modern Gaming Desktop",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i5",
    description: "Modern gaming PC for competitive gaming and demanding applications.",
    information: "Intel Core i5 13400F, 16GB RAM, 1TB SSD and dedicated graphics.",
    price: 92000,
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 11,
    size: "Standard",
    processor: "Core i5",
    generation: "13th Gen",
    ram: "16GB",
    ssd: "1TB",
  },

  {
    id: 361,
    title: "Intel Core i7 12700F Gaming PC",
    subtitle: "High Performance Gaming PC",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i7",
    description: "High-performance gaming desktop for demanding modern games.",
    information: "Intel Core i7 12700F, 32GB RAM, 1TB SSD and dedicated graphics.",
    price: 118000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    size: "Large",
    processor: "Core i7",
    generation: "12th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 362,
    title: "Intel Core i7 13700K Gaming PC",
    subtitle: "Enthusiast Gaming Desktop",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i7",
    description: "Enthusiast gaming PC for high FPS gaming, streaming and content creation.",
    information: "Intel Core i7 13700K, 32GB RAM, 1TB SSD and high-end graphics.",
    price: 155000,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "Large",
    processor: "Core i7",
    generation: "13th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 363,
    title: "Intel Core i9 13900K Gaming PC",
    subtitle: "Extreme Gaming Performance",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i9",
    description: "Extreme gaming system for high-end gaming, streaming and professional workloads.",
    information: "Intel Core i9 13900K, 64GB RAM, 2TB SSD and premium graphics.",
    price: 225000,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 4,
    size: "Large",
    processor: "Core i9",
    generation: "13th Gen",
    ram: "64GB",
    ssd: "2TB",
  },

  {
    id: 364,
    title: "Intel Core i9 14900K Gaming PC",
    subtitle: "Ultimate Intel Gaming PC",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/intel/core-i9",
    description: "Premium gaming desktop built for extreme performance and demanding workloads.",
    information: "Intel Core i9 14900K, 64GB RAM, 2TB SSD and flagship graphics.",
    price: 275000,
    image: "https://images.unsplash.com/photo-1587202372162-8e0f5f8c4f5f?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 3,
    size: "Large",
    processor: "Core i9",
    generation: "14th Gen",
    ram: "64GB",
    ssd: "2TB",
  },

  // ================= GAMING PC - RYZEN =================

  {
    id: 365,
    title: "Ryzen 5 5600 Gaming PC",
    subtitle: "AMD Entry Gaming PC",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-5",
    description: "Affordable AMD gaming PC for Full HD gaming and everyday use.",
    information: "AMD Ryzen 5 processor, 16GB RAM, 512GB SSD and dedicated graphics.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "Standard",
    processor: "Ryzen 5",
    generation: "10th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    id: 366,
    title: "Ryzen 5 7600 Gaming PC",
    subtitle: "Next Generation AMD Gaming",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-5",
    description: "Modern AMD gaming desktop for competitive gaming and productivity.",
    information: "AMD Ryzen 5 7600, 16GB RAM, 1TB SSD and dedicated graphics.",
    price: 98000,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "Standard",
    processor: "Ryzen 5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "1TB",
  },

  {
    id: 367,
    title: "Ryzen 7 5700X Gaming PC",
    subtitle: "AMD High Performance Gaming",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-7",
    description: "High-performance AMD gaming system for gaming and streaming.",
    information: "AMD Ryzen 7 5700X, 32GB RAM, 1TB SSD and dedicated graphics.",
    price: 112000,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "Large",
    processor: "Ryzen 7",
    generation: "11th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 368,
    title: "Ryzen 7 7700X Gaming PC",
    subtitle: "Premium AMD Gaming Desktop",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-7",
    description: "Premium AMD gaming PC for high refresh rate gaming and content creation.",
    information: "AMD Ryzen 7 7700X, 32GB RAM, 1TB SSD and high-end graphics.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "Large",
    processor: "Ryzen 7",
    generation: "13th Gen",
    ram: "32GB",
    ssd: "1TB",
  },

  {
    id: 369,
    title: "Ryzen 9 5900X Gaming PC",
    subtitle: "AMD Enthusiast Gaming PC",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-9",
    description: "Powerful AMD gaming system for demanding games and professional workloads.",
    information: "AMD Ryzen 9 5900X, 64GB RAM, 1TB SSD and dedicated graphics.",
    price: 158000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "Large",
    processor: "Ryzen 9",
    generation: "11th Gen",
    ram: "64GB",
    ssd: "1TB",
  },

  {
    id: 370,
    title: "Ryzen 9 7900X Gaming PC",
    subtitle: "Ultimate AMD Gaming System",
    category: "Desktop",
    subcategory: "Gaming PC",
    categoryPath: "desktop/gaming-pc/ryzen/ryzen-9",
    description: "Extreme AMD gaming desktop for high-end gaming, streaming and production.",
    information: "AMD Ryzen 9 7900X, 64GB RAM, 2TB SSD and flagship graphics.",
    price: 225000,
    image: "https://images.unsplash.com/photo-1587202372162-8e0f5f8c4f5f?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 3,
    size: "Large",
    processor: "Ryzen 9",
    generation: "14th Gen",
    ram: "64GB",
    ssd: "2TB",
  },

  // ================= PC COMPONENTS =================

  {
    id: 371,
    title: "Intel Core i5 12400 Processor",
    subtitle: "12th Gen Desktop Processor",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/processor",
    description: "Reliable Intel processor for modern desktop systems and gaming PCs.",
    information: "Intel Core i5 12400 processor with multiple performance cores.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 18,
    size: "Small",
    processor: "Core i5",
    generation: "12th Gen",
  },

  {
    id: 372,
    title: "Intel Core i7 13700K Processor",
    subtitle: "High Performance Intel CPU",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/processor",
    description: "High-performance processor for gaming, development and content creation.",
    information: "Intel Core i7 13700K desktop processor.",
    price: 48000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 10,
    size: "Small",
    processor: "Core i7",
    generation: "13th Gen",
  },

  {
    id: 373,
    title: "AMD Ryzen 5 7600 Processor",
    subtitle: "Next Generation AMD CPU",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/processor",
    description: "Modern AMD processor for gaming and high-performance desktop systems.",
    information: "AMD Ryzen 5 7600 processor.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 14,
    size: "Small",
    processor: "Ryzen 5",
  },

  {
    id: 374,
    title: "AMD Ryzen 7 7700X Processor",
    subtitle: "High Performance AMD CPU",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/processor",
    description: "Powerful AMD processor for gaming, development and creative workloads.",
    information: "AMD Ryzen 7 7700X desktop processor.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    size: "Small",
    processor: "Ryzen 7",
  },

  // ================= MOTHERBOARD =================

  {
    id: 375,
    title: "MSI B660M DDR4 Motherboard",
    subtitle: "Intel Desktop Motherboard",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/motherboard",
    description: "Reliable motherboard for Intel desktop processors and gaming systems.",
    information: "B660 chipset, DDR4 memory support and multiple expansion slots.",
    price: 16500,
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 13,
    size: "Standard",
  },

  {
    id: 376,
    title: "ASUS B760 Gaming Motherboard",
    subtitle: "Intel Gaming Motherboard",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/motherboard",
    description: "Gaming motherboard designed for modern Intel processors.",
    information: "B760 chipset, DDR5 support and high-speed expansion interfaces.",
    price: 24500,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "Standard",
  },

  {
    id: 377,
    title: "Gigabyte B650 AMD Motherboard",
    subtitle: "AMD AM5 Motherboard",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/motherboard",
    description: "Modern AMD motherboard for Ryzen processors.",
    information: "AMD B650 chipset with AM5 socket and DDR5 support.",
    price: 23500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 11,
    size: "Standard",
  },

  // ================= RAM =================

  {
    id: 378,
    title: "Kingston Fury 8GB DDR4 RAM",
    subtitle: "Desktop Memory Module",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ram",
    description: "Reliable DDR4 memory for office and everyday desktop computers.",
    information: "8GB DDR4 desktop memory module.",
    price: 2800,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 25,
    size: "Small",
    ram: "8GB",
  },

  {
    id: 379,
    title: "Corsair Vengeance 16GB DDR4 RAM",
    subtitle: "Performance Desktop RAM",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ram",
    description: "High-quality DDR4 RAM for gaming and productivity systems.",
    information: "16GB DDR4 desktop memory.",
    price: 5200,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 20,
    size: "Small",
    ram: "16GB",
  },

  {
    id: 380,
    title: "Kingston Fury 32GB DDR5 RAM",
    subtitle: "Next Generation Desktop Memory",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ram",
    description: "High-speed DDR5 memory for modern gaming and professional desktops.",
    information: "32GB DDR5 desktop memory module.",
    price: 11500,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 16,
    size: "Small",
    ram: "32GB",
  },

  // ================= GRAPHICS CARD =================

  {
    id: 381,
    title: "NVIDIA GeForce RTX 4060 8GB",
    subtitle: "Gaming Graphics Card",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/graphics-card",
    description: "Modern NVIDIA graphics card for Full HD and high refresh rate gaming.",
    information: "NVIDIA GeForce RTX 4060 with 8GB graphics memory.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "Standard",
  },

  {
    id: 382,
    title: "NVIDIA GeForce RTX 4070 Super 12GB",
    subtitle: "High Performance Graphics Card",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/graphics-card",
    description: "High-performance graphics card for demanding gaming and creative workloads.",
    information: "NVIDIA GeForce RTX 4070 Super with 12GB graphics memory.",
    price: 82000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "Large",
  },

  {
    id: 383,
    title: "AMD Radeon RX 7600 8GB",
    subtitle: "AMD Gaming Graphics Card",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/graphics-card",
    description: "AMD graphics card designed for smooth Full HD gaming.",
    information: "AMD Radeon RX 7600 with 8GB graphics memory.",
    price: 39000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "Standard",
  },

  // ================= SSD =================

  {
    id: 384,
    title: "Samsung 500GB NVMe SSD",
    subtitle: "High Speed Desktop Storage",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ssd",
    description: "Fast NVMe SSD for desktop operating systems and applications.",
    information: "500GB NVMe solid state drive.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 22,
    size: "Small",
    ssd: "512GB",
  },

  {
    id: 385,
    title: "WD Black 1TB NVMe SSD",
    subtitle: "Performance Gaming SSD",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ssd",
    description: "High-performance NVMe SSD designed for gaming and professional workloads.",
    information: "1TB NVMe solid state drive.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 15,
    size: "Small",
    ssd: "1TB",
  },

  {
    id: 386,
    title: "Samsung 2TB NVMe SSD",
    subtitle: "Premium High Capacity SSD",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ssd",
    description: "Large-capacity high-speed SSD for gaming and professional applications.",
    information: "2TB NVMe solid state drive.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "Small",
    ssd: "2TB",
  },

  // ================= HDD =================

  {
    id: 387,
    title: "Seagate 1TB Desktop HDD",
    subtitle: "Desktop Hard Drive",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/hdd",
    description: "Affordable storage solution for desktop computers.",
    information: "1TB SATA desktop hard disk drive.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9b9e7f7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 20,
    size: "Standard",
  },

  {
    id: 388,
    title: "WD Blue 2TB Desktop HDD",
    subtitle: "High Capacity Desktop Storage",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/hdd",
    description: "High-capacity hard drive for desktop storage and backup.",
    information: "2TB SATA desktop hard disk drive.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9b9e7f7?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 17,
    size: "Standard",
  },

  {
    id: 389,
    title: "Seagate 4TB Desktop HDD",
    subtitle: "Large Capacity Storage",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/hdd",
    description: "Large-capacity desktop hard drive for extensive data storage.",
    information: "4TB SATA desktop hard disk drive.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9b9e7f7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "Standard",
  },

  // ================= ADDITIONAL PC COMPONENTS =================

  {
    id: 390,
    title: "Cooler Master 650W Power Supply",
    subtitle: "Reliable Desktop PSU",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/power-supply",
    description: "Reliable power supply for gaming and productivity desktop computers.",
    information: "650W desktop power supply with efficient power delivery.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "Standard",
  },

  {
    id: 391,
    title: "Corsair 750W Gaming Power Supply",
    subtitle: "High Performance PSU",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/power-supply",
    description: "High-performance power supply for gaming and powerful desktop systems.",
    information: "750W power supply designed for gaming PCs.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "Standard",
  },

  {
    id: 392,
    title: "DeepCool Air CPU Cooler",
    subtitle: "Desktop CPU Cooling",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/cpu-cooler",
    description: "Efficient CPU air cooler for maintaining stable desktop temperatures.",
    information: "Tower-style CPU air cooler with high airflow fan.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 16,
    size: "Standard",
  },

  {
    id: 393,
    title: "DeepCool 240mm Liquid CPU Cooler",
    subtitle: "All-in-One Liquid Cooling",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/cpu-cooler",
    description: "Liquid cooling solution for high-performance gaming and workstation PCs.",
    information: "240mm all-in-one liquid CPU cooling system.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "Large",
  },

  {
    id: 394,
    title: "NZXT Mid Tower Gaming Casing",
    subtitle: "Modern Gaming PC Case",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/casing",
    description: "Modern mid-tower casing designed for gaming and high-performance components.",
    information: "Mid-tower PC casing with multiple cooling and expansion options.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 12,
    size: "Large",
  },

  {
    id: 395,
    title: "Corsair RGB Gaming Casing",
    subtitle: "Premium RGB PC Case",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/casing",
    description: "Premium gaming casing with RGB lighting and spacious component support.",
    information: "ATX-compatible gaming casing with RGB lighting.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "Large",
  },

  {
    id: 396,
    title: "ASUS WiFi PCIe Network Card",
    subtitle: "Desktop Wireless Adapter",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/network-card",
    description: "Wireless networking adapter for desktop computers.",
    information: "PCIe WiFi adapter with high-speed wireless connectivity.",
    price: 4200,
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 15,
    size: "Small",
  },

  {
    id: 397,
    title: "PCIe USB Expansion Card",
    subtitle: "Desktop Connectivity Expansion",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/expansion-card",
    description: "Expansion card that adds additional USB connectivity to desktop computers.",
    information: "PCIe expansion card with multiple USB ports.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 18,
    size: "Small",
  },

  {
    id: 398,
    title: "Desktop DDR5 64GB Memory Kit",
    subtitle: "Professional High Capacity RAM",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/ram",
    description: "High-capacity DDR5 memory kit for professional desktop workloads.",
    information: "64GB DDR5 desktop memory kit.",
    price: 22500,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "Small",
    ram: "64GB",
  },

  {
    id: 399,
    title: "RTX 4080 Super 16GB Gaming GPU",
    subtitle: "Enthusiast Graphics Card",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/graphics-card",
    description: "High-end graphics card for demanding gaming and professional creative workloads.",
    information: "NVIDIA RTX 4080 Super with 16GB graphics memory.",
    price: 165000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 4,
    size: "Large",
  },

  {
    id: 400,
    title: "AMD Radeon RX 7900 XTX 24GB",
    subtitle: "Flagship AMD Graphics Card",
    category: "Desktop",
    subcategory: "PC Components",
    categoryPath: "desktop/pc-components/graphics-card",
    description: "Flagship AMD graphics card designed for high-end gaming and professional workloads.",
    information: "AMD Radeon RX 7900 XTX with 24GB graphics memory.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 3,
    size: "Large",
  },

  // You can continue IDs 317–350
];
const componentsData = [
  // =====================================================
  // CPU — 1 to 8
  // =====================================================

  {
    id: 1,
    title: "AMD Ryzen 5 7600",
    subtitle: "Ryzen 5 7600 Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "6-core desktop processor for gaming and productivity.",
    information: "AM5 processor with strong multi-core performance.",
    price: 20500,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 25,
    processor: "AMD Ryzen 5 7600",
    cores: "6 Cores",
    threads: "12 Threads",
    baseClock: "3.8 GHz",
    boostClock: "5.1 GHz",
    socket: "AM5",
    cache: "38MB",
    graphics: "Radeon Graphics",
    power: "65W",
    voltage: "1.35V",
    warranty: "3 Years"
  },

  {
    id: 2,
    title: "AMD Ryzen 7 7700",
    subtitle: "Ryzen 7 7700 Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "High-performance 8-core processor for gaming and professional workloads.",
    information: "Efficient AM5 processor with integrated Radeon graphics.",
    price: 32500,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 18,
    processor: "AMD Ryzen 7 7700",
    cores: "8 Cores",
    threads: "16 Threads",
    baseClock: "3.8 GHz",
    boostClock: "5.3 GHz",
    socket: "AM5",
    cache: "40MB",
    graphics: "Radeon Graphics",
    power: "65W",
    voltage: "1.35V",
    warranty: "3 Years"
  },

  {
    id: 3,
    title: "AMD Ryzen 7 7800X3D",
    subtitle: "Gaming Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "High-end gaming processor with 3D V-Cache technology.",
    information: "Designed for demanding gaming systems.",
    price: 46500,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 12,
    processor: "AMD Ryzen 7 7800X3D",
    cores: "8 Cores",
    threads: "16 Threads",
    baseClock: "4.2 GHz",
    boostClock: "5.0 GHz",
    socket: "AM5",
    cache: "104MB",
    graphics: "Radeon Graphics",
    power: "120W",
    voltage: "1.35V",
    warranty: "3 Years"
  },

  {
    id: 4,
    title: "AMD Ryzen 9 7900X",
    subtitle: "12-Core Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "Powerful 12-core processor for professional workloads.",
    information: "High-performance AM5 processor for workstation and gaming PCs.",
    price: 52000,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    processor: "AMD Ryzen 9 7900X",
    cores: "12 Cores",
    threads: "24 Threads",
    baseClock: "4.7 GHz",
    boostClock: "5.6 GHz",
    socket: "AM5",
    cache: "76MB",
    graphics: "Radeon Graphics",
    power: "170W",
    voltage: "1.35V",
    warranty: "3 Years"
  },

  {
    id: 5,
    title: "Intel Core i5-14400",
    subtitle: "14th Gen Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "Powerful Intel processor for everyday computing and gaming.",
    information: "14th generation desktop CPU with hybrid architecture.",
    price: 23500,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 20,
    processor: "Intel Core i5-14400",
    cores: "10 Cores",
    threads: "16 Threads",
    baseClock: "2.5 GHz",
    boostClock: "4.7 GHz",
    socket: "LGA1700",
    cache: "20MB",
    graphics: "Intel UHD Graphics 730",
    power: "65W",
    voltage: "1.4V",
    warranty: "3 Years"
  },

  {
    id: 6,
    title: "Intel Core i5-14600K",
    subtitle: "14th Gen Unlocked Desktop Processor",
    category: "Components",
    subcategory: "CPU",
    description: "Unlocked Intel processor for gaming and performance computing.",
    information: "Hybrid architecture with strong single and multi-core performance.",
    price: 34500,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 14,
    processor: "Intel Core i5-14600K",
    cores: "14 Cores",
    threads: "20 Threads",
    baseClock: "3.5 GHz",
    boostClock: "5.3 GHz",
    socket: "LGA1700",
    cache: "24MB",
    graphics: "Intel UHD Graphics 770",
    power: "125W",
    voltage: "1.4V",
    warranty: "3 Years"
  },

  {
    id: 7,
    title: "Intel Core i7-14700K",
    subtitle: "14th Gen Performance Processor",
    category: "Components",
    subcategory: "CPU",
    description: "High-performance Intel processor for gaming and workstation systems.",
    information: "Powerful hybrid architecture with multiple performance cores.",
    price: 46500,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    processor: "Intel Core i7-14700K",
    cores: "20 Cores",
    threads: "28 Threads",
    baseClock: "3.4 GHz",
    boostClock: "5.6 GHz",
    socket: "LGA1700",
    cache: "33MB",
    graphics: "Intel UHD Graphics 770",
    power: "125W",
    voltage: "1.4V",
    warranty: "3 Years"
  },

  {
    id: 8,
    title: "Intel Core i9-14900K",
    subtitle: "14th Gen Flagship Processor",
    category: "Components",
    subcategory: "CPU",
    description: "High-end desktop processor for demanding workloads and gaming.",
    information: "Flagship Intel desktop processor with high boost frequency.",
    price: 62000,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    processor: "Intel Core i9-14900K",
    cores: "24 Cores",
    threads: "32 Threads",
    baseClock: "3.2 GHz",
    boostClock: "6.0 GHz",
    socket: "LGA1700",
    cache: "36MB",
    graphics: "Intel UHD Graphics 770",
    power: "125W",
    voltage: "1.4V",
    warranty: "3 Years"
  },

  // =====================================================
  // CPU COOLER — 9 to 13
  // =====================================================

  {
    id: 9,
    title: "DeepCool AK400",
    subtitle: "High Performance Air Cooler",
    category: "Components",
    subcategory: "CPU Cooler",
    description: "Single tower CPU air cooler designed for efficient cooling.",
    information: "Compatible with multiple Intel and AMD sockets.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 30,
    type: "Air Cooler",
    fanSize: "120mm",
    fanSpeed: "500-1850 RPM",
    socket: "AM4, AM5, LGA1700",
    power: "4.2W",
    voltage: "12V",
    noiseLevel: "29 dBA",
    size: "127 × 97 × 155 mm",
    weight: "661g",
    warranty: "1 Year"
  },

  {
    id: 10,
    title: "DeepCool AK620",
    subtitle: "Dual Tower CPU Air Cooler",
    category: "Components",
    subcategory: "CPU Cooler",
    description: "High-performance dual tower cooler for powerful desktop processors.",
    information: "Dual fan design provides efficient thermal performance.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 16,
    type: "Dual Tower Air Cooler",
    fanSize: "120mm",
    fanSpeed: "300-1850 RPM",
    socket: "AM4, AM5, LGA1700",
    power: "6W",
    voltage: "12V",
    noiseLevel: "28 dBA",
    size: "129 × 138 × 160 mm",
    weight: "1.45 kg",
    warranty: "1 Year"
  },

  {
    id: 11,
    title: "Cooler Master Hyper 212",
    subtitle: "Tower CPU Air Cooler",
    category: "Components",
    subcategory: "CPU Cooler",
    description: "Popular tower-style CPU cooler for desktop computers.",
    information: "Compact design with efficient heat dissipation.",
    price: 4200,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 24,
    type: "Air Cooler",
    fanSize: "120mm",
    fanSpeed: "650-1800 RPM",
    socket: "AM4, AM5, LGA1700",
    power: "4W",
    voltage: "12V",
    noiseLevel: "30 dBA",
    size: "125 × 80 × 158 mm",
    weight: "700g",
    warranty: "1 Year"
  },

  {
    id: 12,
    title: "Corsair H100 RGB",
    subtitle: "240mm Liquid CPU Cooler",
    category: "Components",
    subcategory: "CPU Cooler",
    description: "240mm liquid cooling solution for high-performance processors.",
    information: "Dual 120mm radiator fans with RGB lighting.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 11,
    type: "Liquid Cooler",
    radiatorSize: "240mm",
    fanSize: "120mm × 2",
    fanSpeed: "400-1850 RPM",
    socket: "AM4, AM5, LGA1700",
    power: "6W",
    voltage: "12V",
    noiseLevel: "35 dBA",
    size: "277 × 120 × 27 mm",
    warranty: "5 Years"
  },

  {
    id: 13,
    title: "NZXT Kraken 240",
    subtitle: "240mm RGB Liquid Cooler",
    category: "Components",
    subcategory: "CPU Cooler",
    description: "Premium 240mm all-in-one liquid CPU cooler.",
    information: "Modern liquid cooling system with RGB lighting.",
    price: 15500,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    type: "Liquid Cooler",
    radiatorSize: "240mm",
    fanSize: "120mm × 2",
    fanSpeed: "500-1800 RPM",
    socket: "AM4, AM5, LGA1700",
    power: "7W",
    voltage: "12V",
    noiseLevel: "36 dBA",
    size: "275 × 120 × 30 mm",
    warranty: "6 Years"
  },

  // =====================================================
  // MOTHERBOARD — 14 to 21
  // =====================================================

  {
    id: 14,
    title: "MSI B650M Gaming Plus WiFi",
    subtitle: "AM5 DDR5 Gaming Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Feature-rich motherboard for modern AMD Ryzen processors.",
    information: "Supports DDR5 memory, PCIe 4.0 and WiFi connectivity.",
    price: 18500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 15,
    chipset: "AMD B650",
    socket: "AM5",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "256GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 4.0",
    connectivity: "WiFi 6E, Bluetooth, LAN",
    size: "Micro ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 15,
    title: "ASUS TUF Gaming B650-Plus",
    subtitle: "AMD AM5 ATX Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Durable ATX motherboard designed for AMD Ryzen processors.",
    information: "Supports DDR5 memory and PCIe 5.0 connectivity.",
    price: 22500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 13,
    chipset: "AMD B650",
    socket: "AM5",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "128GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 5.0",
    connectivity: "LAN, USB, Audio",
    size: "ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 16,
    title: "Gigabyte B650 AORUS Elite AX",
    subtitle: "AM5 Gaming Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Gaming motherboard with wireless connectivity and DDR5 support.",
    information: "Designed for Ryzen gaming and productivity systems.",
    price: 24500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 10,
    chipset: "AMD B650",
    socket: "AM5",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 5.0",
    connectivity: "WiFi 6E, Bluetooth, LAN",
    size: "ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 17,
    title: "MSI PRO B760M-A",
    subtitle: "Intel LGA1700 Micro ATX Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Reliable motherboard for Intel 12th, 13th and 14th generation processors.",
    information: "Supports DDR5 memory and PCIe connectivity.",
    price: 16500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 19,
    chipset: "Intel B760",
    socket: "LGA1700",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 4.0",
    connectivity: "LAN, USB, Audio",
    size: "Micro ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 18,
    title: "ASUS PRIME B760-PLUS",
    subtitle: "Intel ATX DDR5 Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "ATX motherboard for modern Intel desktop processors.",
    information: "Balanced motherboard for gaming and office systems.",
    price: 19000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 16,
    chipset: "Intel B760",
    socket: "LGA1700",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 4.0",
    connectivity: "LAN, USB, HDMI",
    size: "ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 19,
    title: "Gigabyte Z790 Gaming X AX",
    subtitle: "Intel Z790 Gaming Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Premium motherboard for unlocked Intel processors.",
    information: "Designed for high-performance gaming and workstation builds.",
    price: 34500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    chipset: "Intel Z790",
    socket: "LGA1700",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 5.0",
    connectivity: "WiFi 6E, Bluetooth, LAN",
    size: "ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 20,
    title: "ASRock B650M Pro RS",
    subtitle: "AM5 Micro ATX Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Affordable AM5 motherboard for modern Ryzen systems.",
    information: "Supports DDR5 memory and PCIe 4.0.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 21,
    chipset: "AMD B650",
    socket: "AM5",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 4.0",
    connectivity: "LAN, USB, Audio",
    size: "Micro ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  {
    id: 21,
    title: "MSI MAG Z790 Tomahawk",
    subtitle: "Intel Z790 DDR5 Gaming Motherboard",
    category: "Components",
    subcategory: "Motherboard",
    description: "Premium gaming motherboard for Intel processors.",
    information: "High-end board with multiple expansion and storage options.",
    price: 37500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    chipset: "Intel Z790",
    socket: "LGA1700",
    ram: "DDR5",
    ramSlots: "4",
    maxRam: "192GB",
    storage: "M.2 NVMe, SATA",
    pcie: "PCIe 5.0",
    connectivity: "WiFi 6E, Bluetooth, LAN",
    size: "ATX",
    voltage: "12V",
    warranty: "3 Years"
  },

  // =====================================================
  // RAM — 22 to 27
  // =====================================================

  {
    id: 22,
    title: "Corsair Vengeance 16GB DDR5",
    subtitle: "16GB DDR5 Desktop Memory",
    category: "Components",
    subcategory: "RAM",
    description: "High-speed DDR5 memory for gaming and productivity.",
    information: "Designed for modern Intel and AMD desktop platforms.",
    price: 6200,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 40,
    ram: "16GB",
    type: "DDR5",
    speed: "5600MHz",
    voltage: "1.25V",
    size: "DIMM",
    capacity: "16GB",
    warranty: "Lifetime"
  },

  {
    id: 23,
    title: "Kingston Fury Beast 16GB",
    subtitle: "DDR5 5200MHz Desktop RAM",
    category: "Components",
    subcategory: "RAM",
    description: "Fast DDR5 memory module for modern desktop computers.",
    information: "Suitable for gaming and everyday performance systems.",
    price: 5800,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 35,
    ram: "16GB",
    type: "DDR5",
    speed: "5200MHz",
    voltage: "1.25V",
    size: "DIMM",
    capacity: "16GB",
    warranty: "Lifetime"
  },

  {
    id: 24,
    title: "G.Skill Ripjaws S5 32GB",
    subtitle: "DDR5 6000MHz Desktop RAM",
    category: "Components",
    subcategory: "RAM",
    description: "High-speed 32GB memory kit for gaming and productivity.",
    information: "Low-profile DDR5 memory designed for modern systems.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 22,
    ram: "32GB",
    type: "DDR5",
    speed: "6000MHz",
    voltage: "1.35V",
    size: "DIMM",
    capacity: "32GB",
    warranty: "Lifetime"
  },

  {
    id: 25,
    title: "Corsair Vengeance RGB 32GB",
    subtitle: "DDR5 RGB Gaming Memory",
    category: "Components",
    subcategory: "RAM",
    description: "RGB DDR5 memory kit designed for gaming systems.",
    information: "High-speed memory with customizable RGB lighting.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 18,
    ram: "32GB",
    type: "DDR5",
    speed: "6000MHz",
    voltage: "1.35V",
    size: "DIMM",
    capacity: "32GB",
    lighting: "RGB",
    warranty: "Lifetime"
  },

  {
    id: 26,
    title: "Kingston Fury Beast 32GB",
    subtitle: "DDR4 3200MHz Desktop RAM",
    category: "Components",
    subcategory: "RAM",
    description: "Reliable DDR4 memory for Intel and AMD desktop systems.",
    information: "Suitable for gaming, office and workstation computers.",
    price: 7200,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 30,
    ram: "32GB",
    type: "DDR4",
    speed: "3200MHz",
    voltage: "1.35V",
    size: "DIMM",
    capacity: "32GB",
    warranty: "Lifetime"
  },

  {
    id: 27,
    title: "TeamGroup T-Force Delta 16GB",
    subtitle: "DDR5 RGB Gaming RAM",
    category: "Components",
    subcategory: "RAM",
    description: "Gaming memory module with RGB lighting and high-speed performance.",
    information: "Designed for modern DDR5 gaming platforms.",
    price: 6800,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 27,
    ram: "16GB",
    type: "DDR5",
    speed: "6000MHz",
    voltage: "1.35V",
    size: "DIMM",
    capacity: "16GB",
    lighting: "RGB",
    warranty: "Lifetime"
  },

  // =====================================================
  // SSD — 28 to 33
  // =====================================================

  {
    id: 28,
    title: "Samsung 990 EVO 1TB",
    subtitle: "1TB NVMe M.2 SSD",
    category: "Components",
    subcategory: "SSD",
    description: "High-speed NVMe SSD for fast system performance.",
    information: "Suitable for gaming, workstation and everyday computing.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 22,
    storage: "1TB",
    ssd: "NVMe",
    interface: "PCIe 4.0",
    readSpeed: "5000 MB/s",
    writeSpeed: "4200 MB/s",
    size: "M.2 2280",
    voltage: "3.3V",
    warranty: "5 Years"
  },

  {
    id: 29,
    title: "WD Black SN850X 1TB",
    subtitle: "High Performance NVMe SSD",
    category: "Components",
    subcategory: "SSD",
    description: "Gaming-focused NVMe SSD with high read and write speeds.",
    information: "Designed for gaming PCs and performance workstations.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 16,
    storage: "1TB",
    ssd: "NVMe",
    interface: "PCIe 4.0",
    readSpeed: "7300 MB/s",
    writeSpeed: "6300 MB/s",
    size: "M.2 2280",
    voltage: "3.3V",
    warranty: "5 Years"
  },

  {
    id: 30,
    title: "Crucial P3 Plus 1TB",
    subtitle: "PCIe 4.0 NVMe SSD",
    category: "Components",
    subcategory: "SSD",
    description: "Affordable high-speed NVMe storage for desktop systems.",
    information: "Good choice for gaming and everyday storage.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 30,
    storage: "1TB",
    ssd: "NVMe",
    interface: "PCIe 4.0",
    readSpeed: "5000 MB/s",
    writeSpeed: "3600 MB/s",
    size: "M.2 2280",
    voltage: "3.3V",
    warranty: "5 Years"
  },

  {
    id: 31,
    title: "Kingston NV2 500GB",
    subtitle: "500GB NVMe M.2 SSD",
    category: "Components",
    subcategory: "SSD",
    description: "Compact NVMe SSD for affordable desktop upgrades.",
    information: "Suitable for operating systems, applications and games.",
    price: 5200,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 35,
    storage: "500GB",
    ssd: "NVMe",
    interface: "PCIe 4.0",
    readSpeed: "3500 MB/s",
    writeSpeed: "2100 MB/s",
    size: "M.2 2280",
    voltage: "3.3V",
    warranty: "3 Years"
  },

  {
    id: 32,
    title: "Samsung 870 EVO 1TB",
    subtitle: "1TB SATA SSD",
    category: "Components",
    subcategory: "SSD",
    description: "Reliable SATA SSD for desktop and laptop upgrades.",
    information: "Suitable for systems without NVMe support.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 20,
    storage: "1TB",
    ssd: "SATA SSD",
    interface: "SATA III",
    readSpeed: "560 MB/s",
    writeSpeed: "530 MB/s",
    size: '2.5"',
    voltage: "5V",
    warranty: "5 Years"
  },

  {
    id: 33,
    title: "Lexar NM790 2TB",
    subtitle: "2TB PCIe 4.0 NVMe SSD",
    category: "Components",
    subcategory: "SSD",
    description: "Large-capacity high-speed SSD for gaming and professional workloads.",
    information: "Provides fast storage for large applications and games.",
    price: 21500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    storage: "2TB",
    ssd: "NVMe",
    interface: "PCIe 4.0",
    readSpeed: "7400 MB/s",
    writeSpeed: "6500 MB/s",
    size: "M.2 2280",
    voltage: "3.3V",
    warranty: "5 Years"
  },

  // =====================================================
  // HDD — 34 to 37
  // =====================================================

  {
    id: 34,
    title: "Western Digital Blue 1TB HDD",
    subtitle: "1TB Desktop Hard Drive",
    category: "Components",
    subcategory: "HDD",
    description: "Reliable storage drive for desktop computers.",
    information: "Suitable for documents, media and general storage.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 35,
    storage: "1TB",
    hdd: "SATA HDD",
    interface: "SATA III",
    rpm: "7200 RPM",
    cache: "64MB",
    size: '3.5"',
    voltage: "5V / 12V",
    warranty: "2 Years"
  },

  {
    id: 35,
    title: "Seagate Barracuda 2TB",
    subtitle: "2TB Desktop Hard Drive",
    category: "Components",
    subcategory: "HDD",
    description: "Large-capacity hard drive for desktop storage.",
    information: "Ideal for media libraries and general file storage.",
    price: 6800,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 28,
    storage: "2TB",
    hdd: "SATA HDD",
    interface: "SATA III",
    rpm: "7200 RPM",
    cache: "256MB",
    size: '3.5"',
    voltage: "5V / 12V",
    warranty: "2 Years"
  },

  {
    id: 36,
    title: "Western Digital Blue 4TB",
    subtitle: "4TB Desktop Storage Drive",
    category: "Components",
    subcategory: "HDD",
    description: "High-capacity hard drive for large data storage.",
    information: "Suitable for backups, media and office storage.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 18,
    storage: "4TB",
    hdd: "SATA HDD",
    interface: "SATA III",
    rpm: "5400 RPM",
    cache: "256MB",
    size: '3.5"',
    voltage: "5V / 12V",
    warranty: "2 Years"
  },

  {
    id: 37,
    title: "Seagate IronWolf 4TB",
    subtitle: "4TB NAS Hard Drive",
    category: "Components",
    subcategory: "HDD",
    description: "NAS-focused hard drive for continuous storage workloads.",
    information: "Designed for NAS systems and multi-user environments.",
    price: 13500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 14,
    storage: "4TB",
    hdd: "NAS HDD",
    interface: "SATA III",
    rpm: "5400 RPM",
    cache: "256MB",
    size: '3.5"',
    voltage: "5V / 12V",
    warranty: "3 Years"
  },

  // =====================================================
  // GRAPHICS CARD — 38 to 44
  // =====================================================

  {
    id: 38,
    title: "ASUS GeForce RTX 4060 8GB",
    subtitle: "RTX 4060 Gaming Graphics Card",
    category: "Components",
    subcategory: "Graphics Card",
    description: "Modern graphics card for 1080p and 1440p gaming.",
    information: "Supports ray tracing and modern gaming technologies.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    graphics: "GeForce RTX 4060",
    vram: "8GB",
    memoryType: "GDDR6",
    memoryBus: "128-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "115W",
    voltage: "12V",
    size: "227mm",
    warranty: "3 Years"
  },

  {
    id: 39,
    title: "Gigabyte RTX 4060 Ti 8GB",
    subtitle: "RTX 4060 Ti Gaming GPU",
    category: "Components",
    subcategory: "Graphics Card",
    description: "Performance graphics card for high-quality gaming.",
    information: "Suitable for 1080p and 1440p gaming.",
    price: 52000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    graphics: "GeForce RTX 4060 Ti",
    vram: "8GB",
    memoryType: "GDDR6",
    memoryBus: "128-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "160W",
    voltage: "12V",
    size: "281mm",
    warranty: "3 Years"
  },

  {
    id: 40,
    title: "MSI GeForce RTX 4070 12GB",
    subtitle: "RTX 4070 Gaming Graphics Card",
    category: "Components",
    subcategory: "Graphics Card",
    description: "High-performance GPU for 1440p and 4K gaming.",
    information: "Advanced graphics card with ray tracing support.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    graphics: "GeForce RTX 4070",
    vram: "12GB",
    memoryType: "GDDR6X",
    memoryBus: "192-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "200W",
    voltage: "12V",
    size: "308mm",
    warranty: "3 Years"
  },

  {
    id: 41,
    title: "ASUS GeForce RTX 4070 Super 12GB",
    subtitle: "RTX 4070 Super Gaming GPU",
    category: "Components",
    subcategory: "Graphics Card",
    description: "Powerful GPU for high-refresh 1440p and 4K gaming.",
    information: "Designed for demanding gaming and creative workloads.",
    price: 89000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    graphics: "GeForce RTX 4070 Super",
    vram: "12GB",
    memoryType: "GDDR6X",
    memoryBus: "192-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "220W",
    voltage: "12V",
    size: "310mm",
    warranty: "3 Years"
  },

  {
    id: 42,
    title: "AMD Radeon RX 7600 8GB",
    subtitle: "Radeon Gaming Graphics Card",
    category: "Components",
    subcategory: "Graphics Card",
    description: "Affordable gaming graphics card for modern 1080p gaming.",
    information: "Good option for mainstream gaming systems.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 13,
    graphics: "Radeon RX 7600",
    vram: "8GB",
    memoryType: "GDDR6",
    memoryBus: "128-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "165W",
    voltage: "12V",
    size: "204mm",
    warranty: "3 Years"
  },

  {
    id: 43,
    title: "Sapphire Radeon RX 7800 XT",
    subtitle: "16GB Gaming Graphics Card",
    category: "Components",
    subcategory: "Graphics Card",
    description: "High-performance Radeon GPU for 1440p gaming.",
    information: "Large VRAM capacity for demanding modern games.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    graphics: "Radeon RX 7800 XT",
    vram: "16GB",
    memoryType: "GDDR6",
    memoryBus: "256-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "263W",
    voltage: "12V",
    size: "320mm",
    warranty: "3 Years"
  },

  {
    id: 44,
    title: "Gigabyte GeForce RTX 4080 Super",
    subtitle: "16GB High-End Gaming GPU",
    category: "Components",
    subcategory: "Graphics Card",
    description: "High-end graphics card for demanding 4K gaming.",
    information: "Designed for enthusiasts and professional graphics workloads.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 4,
    graphics: "GeForce RTX 4080 Super",
    vram: "16GB",
    memoryType: "GDDR6X",
    memoryBus: "256-bit",
    interface: "PCIe 4.0",
    resolution: "7680 × 4320",
    power: "320W",
    voltage: "12V",
    size: "342mm",
    warranty: "3 Years"
  },

  // =====================================================
  // POWER SUPPLY — 45 to 47
  // =====================================================

  {
    id: 45,
    title: "Corsair CV650 650W",
    subtitle: "650W 80 Plus Bronze PSU",
    category: "Components",
    subcategory: "Power Supply",
    description: "Reliable power supply for gaming and desktop systems.",
    information: "650W power delivery with 80 Plus Bronze efficiency.",
    price: 7200,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 18,
    power: "650W",
    efficiency: "80 Plus Bronze",
    voltage: "100-240V",
    connectivity: "ATX, PCIe, SATA",
    fanSize: "120mm",
    size: "150 × 125 × 86 mm",
    warranty: "3 Years"
  },

  {
    id: 46,
    title: "Cooler Master MWE 750",
    subtitle: "750W 80 Plus Bronze PSU",
    category: "Components",
    subcategory: "Power Supply",
    description: "Reliable 750W power supply for gaming PCs.",
    information: "Suitable for mid-range and high-performance graphics cards.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 15,
    power: "750W",
    efficiency: "80 Plus Bronze",
    voltage: "100-240V",
    connectivity: "ATX, PCIe, SATA",
    fanSize: "120mm",
    size: "150 × 140 × 86 mm",
    warranty: "5 Years"
  },

  {
    id: 47,
    title: "Corsair RM850e",
    subtitle: "850W 80 Plus Gold Modular PSU",
    category: "Components",
    subcategory: "Power Supply",
    description: "High-efficiency modular power supply for gaming systems.",
    information: "Fully modular design for clean PC builds.",
    price: 15500,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    power: "850W",
    efficiency: "80 Plus Gold",
    voltage: "100-240V",
    connectivity: "ATX, PCIe, SATA, EPS",
    fanSize: "135mm",
    size: "150 × 140 × 86 mm",
    modular: "Fully Modular",
    warranty: "7 Years"
  },

  // =====================================================
  // PC CASE — 48 to 50
  // =====================================================

  {
    id: 48,
    title: "NZXT H5 Flow",
    subtitle: "Mid Tower ATX Gaming Case",
    category: "Components",
    subcategory: "PC Case",
    description: "Modern airflow-focused gaming PC case.",
    information: "Supports ATX, Micro ATX and Mini ITX motherboards.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 14,
    type: "Mid Tower",
    motherboardSupport: "ATX, Micro ATX, Mini ITX",
    gpuLength: "365mm",
    cpuCoolerHeight: "165mm",
    fanSupport: "120mm / 140mm",
    connectivity: "USB 3.2, USB-C, Audio",
    size: "464 × 227 × 446 mm",
    weight: "6.6 kg",
    color: "Black",
    warranty: "2 Years"
  },

  {
    id: 49,
    title: "Corsair 4000D Airflow",
    subtitle: "ATX Mid Tower PC Case",
    category: "Components",
    subcategory: "PC Case",
    description: "Airflow-focused ATX case for gaming and workstation builds.",
    information: "Spacious internal layout with excellent cooling support.",
    price: 10500,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 17,
    type: "Mid Tower",
    motherboardSupport: "ATX, Micro ATX, Mini ITX",
    gpuLength: "360mm",
    cpuCoolerHeight: "170mm",
    fanSupport: "120mm / 140mm",
    connectivity: "USB 3.0, USB-C, Audio",
    size: "453 × 230 × 466 mm",
    weight: "7.8 kg",
    color: "Black",
    warranty: "2 Years"
  },

  {
    id: 50,
    title: "Lian Li Lancool III",
    subtitle: "Premium ATX Gaming Case",
    category: "Components",
    subcategory: "PC Case",
    description: "Premium high-airflow case designed for powerful gaming PCs.",
    information: "Large internal space with extensive cooling and component support.",
    price: 16500,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    type: "Full Mid Tower",
    motherboardSupport: "ATX, Micro ATX, Mini ITX",
    gpuLength: "435mm",
    cpuCoolerHeight: "187mm",
    fanSupport: "120mm / 140mm",
    connectivity: "USB 3.0, USB-C, Audio",
    size: "526 × 238 × 523 mm",
    weight: "10.1 kg",
    color: "Black",
    warranty: "2 Years"
  }
];

// ============================================================
// ADDITIONAL PRODUCTS 401–660
// ============================================================

const createProducts = (startId, items) => {
  return items.map((item, index) => ({
    id: startId + index,
    title: item.title,
    subtitle: item.subtitle,
    category: item.category,
    subcategory: item.subcategory,
    categoryPath: item.categoryPath,
    description: item.description,
    information: item.information,
    price: item.price,
    image: item.image,
    rating: item.rating ?? 4.6,
    stock: item.stock ?? 10,
    size: item.size,

    ...(item.processor && {
      processor: item.processor,
    }),

    ...(item.generation && {
      generation: item.generation,
    }),

    ...(item.ram && {
      ram: item.ram,
    }),

    ...(item.ssd && {
      ssd: item.ssd,
    }),

    ...(item.graphicsCard && {
      graphicsCard: item.graphicsCard,
    }),
  }));
};


// ============================================================
// LAPTOP PRODUCTS 401–440
// ============================================================

const laptopProducts = createProducts(401, [

  {
    title: "Dell Inspiron 15 Core i5 12th Gen",
    subtitle: "Everyday Business Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    categoryPath: "laptop/business-laptop",
    description: "Reliable laptop for business, study and everyday productivity.",
    information: "Intel Core i5 12th Gen, 16GB RAM, 512GB SSD and 15.6-inch display.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "15.6 inch",
    processor: "Core i5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    title: "HP Pavilion 15 Core i5 13th Gen",
    subtitle: "Modern Student Laptop",
    category: "Laptop",
    subcategory: "Student Laptop",
    categoryPath: "laptop/student-laptop",
    description: "Modern laptop for students, office work and entertainment.",
    information: "Intel Core i5 13th Gen, 16GB RAM, 512GB SSD and 15.6-inch display.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 12,
    size: "15.6 inch",
    processor: "Core i5",
    generation: "13th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    title: "Lenovo IdeaPad Slim 3 Ryzen 5",
    subtitle: "Affordable Student Laptop",
    category: "Laptop",
    subcategory: "Student Laptop",
    categoryPath: "laptop/student-laptop",
    description: "Affordable laptop for students and everyday computing.",
    information: "AMD Ryzen 5 processor, 8GB RAM, 512GB SSD and 15.6-inch display.",
    price: 58000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 18,
    size: "15.6 inch",
    processor: "Ryzen 5",
    generation: "7000 Series",
    ram: "8GB",
    ssd: "512GB",
  },

  {
    title: "ASUS TUF Gaming F15 Core i5",
    subtitle: "Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    categoryPath: "laptop/gaming-laptop",
    description: "Gaming laptop designed for high-performance gaming and multitasking.",
    information: "Intel Core i5 processor, 16GB RAM, 512GB SSD and RTX graphics.",
    price: 115000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "15.6 inch",
    processor: "Core i5",
    generation: "13th Gen",
    ram: "16GB",
    ssd: "512GB",
    graphicsCard: "RTX 4050",
  },

  {
    title: "MSI Katana Gaming Laptop Core i7",
    subtitle: "High Performance Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    categoryPath: "laptop/gaming-laptop",
    description: "High-performance gaming laptop for modern games and creative workloads.",
    information: "Intel Core i7 processor, 16GB RAM, 1TB SSD and RTX graphics.",
    price: 155000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "15.6 inch",
    processor: "Core i7",
    generation: "13th Gen",
    ram: "16GB",
    ssd: "1TB",
    graphicsCard: "RTX 4060",
  },

  {
    title: "Apple MacBook Air M2 8GB",
    subtitle: "Lightweight Apple Laptop",
    category: "Laptop",
    subcategory: "Apple MacBook",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description: "Slim and lightweight Apple laptop for everyday productivity.",
    information: "Apple M2 chip, 8GB unified memory and 256GB SSD.",
    price: 125000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "13.6 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Apple MacBook Air M2 16GB",
    subtitle: "Professional Apple Laptop",
    category: "Laptop",
    subcategory: "Apple MacBook",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description: "Powerful and portable MacBook for professionals and developers.",
    information: "Apple M2 chip, 16GB unified memory and 512GB SSD.",
    price: 165000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "13.6 inch",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    title: "Apple MacBook Pro M3 Pro",
    subtitle: "Professional MacBook Pro",
    category: "Laptop",
    subcategory: "Apple MacBook",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description: "Professional Apple laptop for development, editing and creative work.",
    information: "Apple M3 Pro chip, 18GB unified memory and 512GB SSD.",
    price: 235000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 5,
    size: "14.2 inch",
    ram: "18GB",
    ssd: "512GB",
  },

  {
    title: "Acer Aspire 5 Core i5",
    subtitle: "Affordable Business Laptop",
    category: "Laptop",
    subcategory: "Business Laptop",
    categoryPath: "laptop/business-laptop",
    description: "Practical laptop for office applications and daily productivity.",
    information: "Intel Core i5 processor, 16GB RAM and 512GB SSD.",
    price: 68000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 15,
    size: "15.6 inch",
    processor: "Core i5",
    generation: "12th Gen",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    title: "HP Victus Ryzen 5 Gaming Laptop",
    subtitle: "AMD Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    categoryPath: "laptop/gaming-laptop",
    description: "Gaming laptop with AMD processor and dedicated graphics.",
    information: "AMD Ryzen 5, 16GB RAM, 512GB SSD and RTX 4050 graphics.",
    price: 108000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "15.6 inch",
    processor: "Ryzen 5",
    generation: "7000 Series",
    ram: "16GB",
    ssd: "512GB",
    graphicsCard: "RTX 4050",
  },

  {
    title: "Lenovo LOQ Core i7 Gaming Laptop",
    subtitle: "Powerful Gaming Laptop",
    category: "Laptop",
    subcategory: "Gaming Laptop",
    categoryPath: "laptop/gaming-laptop",
    description: "Powerful gaming laptop for gaming, streaming and creative work.",
    information: "Intel Core i7, 32GB RAM, 1TB SSD and RTX 4060 graphics.",
    price: 165000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "15.6 inch",
    processor: "Core i7",
    generation: "13th Gen",
    ram: "32GB",
    ssd: "1TB",
    graphicsCard: "RTX 4060",
  },

  // Additional laptop variants
  ...Array.from({ length: 30 }, (_, index) => {
    const models = [
      ["Dell Latitude", "Business Laptop", "business-laptop"],
      ["HP ProBook", "Business Laptop", "business-laptop"],
      ["Lenovo ThinkPad", "Business Laptop", "business-laptop"],
      ["ASUS VivoBook", "Student Laptop", "student-laptop"],
      ["Acer Aspire", "Student Laptop", "student-laptop"],
      ["Dell G15", "Gaming Laptop", "gaming-laptop"],
      ["ASUS ROG", "Gaming Laptop", "gaming-laptop"],
      ["MSI Gaming", "Gaming Laptop", "gaming-laptop"],
      ["MacBook Air", "Apple MacBook", "apple-macbook/macbook-air"],
      ["MacBook Pro", "Apple MacBook", "apple-macbook/macbook-pro"],
    ];

    const [model, subcategory, path] = models[index % models.length];

    const processors = [
      "Core i5",
      "Core i7",
      "Ryzen 5",
      "Ryzen 7",
    ];

    const rams = ["8GB", "16GB", "32GB"];
    const ssds = ["256GB", "512GB", "1TB"];

    return {
      title: `${model} ${index + 1} Performance Laptop`,
      subtitle: subcategory,
      category: "Laptop",
      subcategory,
      categoryPath: `laptop/${path}`,
      description: `Modern ${subcategory.toLowerCase()} designed for productivity, study and everyday computing.`,
      information: `${processors[index % processors.length]} processor, ${rams[index % rams.length]} RAM and ${ssds[index % ssds.length]} SSD.`,
      price: 55000 + index * 4500,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      rating: Number((4.4 + (index % 6) * 0.1).toFixed(1)),
      stock: 5 + (index % 15),
      size: index % 2 === 0 ? "15.6 inch" : "14 inch",
      processor: processors[index % processors.length],
      generation: index % 2 === 0 ? "12th Gen" : "13th Gen",
      ram: rams[index % rams.length],
      ssd: ssds[index % ssds.length],
      ...(subcategory === "Gaming Laptop" && {
        graphicsCard: index % 2 === 0 ? "RTX 4050" : "RTX 4060",
      }),
    };
  }),
]);


// ============================================================
// MONITOR PRODUCTS 441–460
// ============================================================

const monitorProducts = createProducts(441, [
  // =========================
  // 1
  // =========================
  {
    title: "AOC 24 Inch Full HD Monitor",
    subtitle: "Office Monitor",
    category: "Monitor",
    subcategory: "Office Monitor",
    categoryPath: "monitor/office-monitor",
    description:
      "Full HD monitor for office work and everyday computing.",
    information:
      "24-inch Full HD IPS display with 75Hz refresh rate.",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "24 inch",
  },

  // =========================
  // 2
  // =========================
  {
    title: "LG 27 Inch IPS Monitor",
    subtitle: "Professional Monitor",
    category: "Monitor",
    subcategory: "Professional Monitor",
    categoryPath: "monitor/professional-monitor",
    description:
      "Large IPS monitor for productivity and creative work.",
    information:
      "27-inch QHD IPS display with accurate colors.",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "27 inch",
  },

  // =========================
  // 3
  // =========================
  {
    title: "Samsung 27 Inch Gaming Monitor",
    subtitle: "High Refresh Rate Monitor",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    categoryPath: "monitor/gaming-monitor",
    description:
      "Gaming monitor designed for smooth high refresh rate gaming.",
    information:
      "27-inch Full HD display with 165Hz refresh rate.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "27 inch",
  },

  // =========================
  // 4
  // =========================
  {
    title: "ASUS TUF 27 Inch Gaming Monitor",
    subtitle: "Fast Gaming Display",
    category: "Monitor",
    subcategory: "Gaming Monitor",
    categoryPath: "monitor/gaming-monitor",
    description:
      "Fast gaming display with high refresh rate performance.",
    information:
      "27-inch QHD gaming monitor with 180Hz refresh rate.",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "27 inch",
  },

  // =========================
  // 5-20
  // GENERATED MONITORS
  // =========================
  ...Array.from({ length: 16 }, (_, index) => {
    const gaming = index % 2 === 0;

    const refreshRates = [144, 165, 240];
    const refreshRate =
      refreshRates[index % refreshRates.length];

    const size = 24 + (index % 3) * 3;

    return {
      title: `${gaming ? "Gaming" : "Professional"} Monitor ${
        index + 1
      }`,

      subtitle: gaming
        ? `${refreshRate}Hz Gaming Monitor`
        : "Professional Monitor",

      category: "Monitor",

      subcategory: gaming
        ? "Gaming Monitor"
        : "Professional Monitor",

      categoryPath: gaming
        ? "monitor/gaming-monitor"
        : "monitor/professional-monitor",

      description:
        "Modern monitor designed for productivity, entertainment and everyday computing.",

      information: gaming
        ? `${size}-inch display with ${refreshRate}Hz refresh rate and high-quality panel technology.`
        : `${size}-inch display with accurate colors and high-quality panel technology.`,

      price: 18000 + index * 2500,

      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",

      rating: 4.5 + (index % 5) * 0.1,

      stock: 8 + index,

      size: `${size} inch`,
    };
  }),
]);


// ============================================================
// POWER PRODUCTS 461–480
// ============================================================

const powerProducts = createProducts(461, [
  {
    title: "APC 650VA UPS",
    subtitle: "Home & Office UPS",
    category: "Power",
    subcategory: "UPS",
    categoryPath: "power/ups",
    description: "Reliable backup power solution for computers and office equipment.",
    information: "650VA UPS with automatic voltage regulation.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 18,
    size: "Standard",
  },
  {
    title: "APC 1200VA UPS",
    subtitle: "High Capacity UPS",
    category: "Power",
    subcategory: "UPS",
    categoryPath: "power/ups",
    description: "High-capacity UPS for desktop computers and office equipment.",
    information: "1200VA backup power with voltage regulation.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "Large",
  },
  {
    title: "Corsair 650W Power Supply",
    subtitle: "Desktop PSU",
    category: "Power",
    subcategory: "Power Supply",
    categoryPath: "power/power-supply",
    description: "Reliable PSU for gaming and productivity desktop systems.",
    information: "650W power supply with efficient power delivery.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "Standard",
  },
  {
    title: "Cooler Master 750W Power Supply",
    subtitle: "Gaming PSU",
    category: "Power",
    subcategory: "Power Supply",
    categoryPath: "power/power-supply",
    description: "High-performance PSU for gaming computers.",
    information: "750W power supply suitable for dedicated graphics cards.",
    price: 11500,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "Standard",
  },

  ...Array.from({ length: 16 }, (_, index) => {
    const ups = index % 2 === 0;

    return {
      title: `${ups ? "Reliable" : "Gaming"} ${ups ? "UPS" : "Power Supply"} ${index + 1}`,
      subtitle: ups ? "Backup Power" : "Desktop Power Supply",
      category: "Power",
      subcategory: ups ? "UPS" : "Power Supply",
      categoryPath: ups ? "power/ups" : "power/power-supply",
      description: "Reliable power solution for computers and electronic equipment.",
      information: ups
        ? "Backup power with voltage protection."
        : `${550 + index * 25}W desktop power supply.`,
      price: ups ? 5000 + index * 500 : 6500 + index * 600,
      image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
      rating: 4.5 + (index % 5) * 0.1,
      stock: 7 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// PHONE PRODUCTS 481–510
// ============================================================

// =========================
// PHONE PRODUCTS 481–510
// =========================

const phoneProducts = createProducts(481, [
  // =====================================
  // SAMSUNG
  // =====================================

  {
    title: "Samsung Galaxy A55 5G",
    subtitle: "Mid Range Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/samsung",
    brand: "Samsung",
    description: "Modern Samsung smartphone with AMOLED display and powerful performance.",
    information: "8GB RAM, 128GB storage and 5G connectivity.",
    price: 48000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 15,
    size: "6.6 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Samsung Galaxy S24",
    subtitle: "Flagship Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/samsung",
    brand: "Samsung",
    description: "Premium Samsung Android smartphone with flagship performance and advanced cameras.",
    information: "8GB RAM, 256GB storage and 5G connectivity.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "6.2 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "Premium Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/samsung",
    brand: "Samsung",
    description: "High-end Samsung smartphone designed for photography, productivity and performance.",
    information: "12GB RAM, 256GB storage and advanced camera system.",
    price: 125000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "6.8 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "Samsung Galaxy A35 5G",
    subtitle: "Affordable Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/samsung",
    brand: "Samsung",
    description: "Affordable Samsung smartphone with modern display and reliable performance.",
    information: "8GB RAM, 128GB storage and 5G connectivity.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 20,
    size: "6.6 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Samsung Galaxy A25 5G",
    subtitle: "Budget Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/samsung",
    brand: "Samsung",
    description: "Budget-friendly Samsung smartphone for everyday communication and entertainment.",
    information: "6GB RAM, 128GB storage and 5G connectivity.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 25,
    size: "6.5 inch",
    ram: "6GB",
    ssd: "128GB",
  },

  // =====================================
  // XIAOMI
  // =====================================

  {
    title: "Xiaomi Redmi Note 13 Pro",
    subtitle: "Android Performance Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/xiaomi",
    brand: "Xiaomi",
    description: "Feature-rich Xiaomi smartphone for entertainment, photography and daily use.",
    information: "8GB RAM, 256GB storage and AMOLED display.",
    price: 36000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 18,
    size: "6.67 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Xiaomi Redmi Note 14 Pro",
    subtitle: "Android Mid Range Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/xiaomi",
    brand: "Xiaomi",
    description: "Modern Xiaomi smartphone with AMOLED display and powerful performance.",
    information: "8GB RAM, 256GB storage and fast charging.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 16,
    size: "6.67 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Xiaomi 14",
    subtitle: "Xiaomi Flagship Android Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/xiaomi",
    brand: "Xiaomi",
    description: "Premium Xiaomi smartphone with flagship hardware and advanced cameras.",
    information: "12GB RAM, 512GB storage and 5G connectivity.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "6.36 inch",
    ram: "12GB",
    ssd: "512GB",
  },

  {
    title: "Xiaomi Poco X6 Pro",
    subtitle: "Android Performance Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/xiaomi",
    brand: "Xiaomi",
    description: "Performance-focused Xiaomi smartphone for gaming and entertainment.",
    information: "8GB RAM, 256GB storage and high refresh rate display.",
    price: 34000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 14,
    size: "6.67 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Xiaomi Redmi 13C",
    subtitle: "Budget Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/xiaomi",
    brand: "Xiaomi",
    description: "Affordable Xiaomi smartphone for everyday communication and entertainment.",
    information: "6GB RAM, 128GB storage and large display.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 25,
    size: "6.74 inch",
    ram: "6GB",
    ssd: "128GB",
  },

  // =====================================
  // ONEPLUS
  // =====================================

  {
    title: "OnePlus 12 5G",
    subtitle: "Flagship Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/oneplus",
    brand: "OnePlus",
    description: "High-performance OnePlus flagship smartphone with premium hardware.",
    information: "12GB RAM, 256GB storage and 5G connectivity.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "6.82 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "OnePlus 12R",
    subtitle: "Performance Android Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/oneplus",
    brand: "OnePlus",
    description: "Powerful OnePlus smartphone designed for performance and gaming.",
    information: "8GB RAM, 256GB storage and high refresh rate display.",
    price: 62000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 12,
    size: "6.78 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "OnePlus Nord 4",
    subtitle: "Mid Range Android Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/oneplus",
    brand: "OnePlus",
    description: "Modern OnePlus 5G smartphone with strong performance and premium design.",
    information: "8GB RAM, 128GB storage and 5G connectivity.",
    price: 48000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "6.74 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "OnePlus Nord CE 4",
    subtitle: "Affordable Android Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/oneplus",
    brand: "OnePlus",
    description: "Affordable OnePlus smartphone with reliable performance and fast charging.",
    information: "8GB RAM, 128GB storage and 5G connectivity.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 18,
    size: "6.7 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "OnePlus 11 5G",
    subtitle: "Premium Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/oneplus",
    brand: "OnePlus",
    description: "Premium OnePlus smartphone with flagship performance and camera system.",
    information: "12GB RAM, 256GB storage and 5G connectivity.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "6.7 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  // =====================================
  // REALME
  // =====================================

  {
    title: "Realme GT 6",
    subtitle: "Performance Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/realme",
    brand: "Realme",
    description: "High-performance Realme smartphone designed for gaming and entertainment.",
    information: "12GB RAM, 256GB storage and high refresh rate display.",
    price: 58000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "6.78 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "Realme 12 Pro+",
    subtitle: "Camera Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/realme",
    brand: "Realme",
    description: "Feature-rich Realme smartphone with advanced camera capabilities.",
    information: "8GB RAM, 256GB storage and AMOLED display.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 13,
    size: "6.7 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Realme 13 Pro",
    subtitle: "Mid Range Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/realme",
    brand: "Realme",
    description: "Modern Realme smartphone for photography, entertainment and everyday use.",
    information: "8GB RAM, 128GB storage and AMOLED display.",
    price: 36000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 17,
    size: "6.7 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Realme Narzo 70 Pro",
    subtitle: "Affordable Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/realme",
    brand: "Realme",
    description: "Affordable 5G smartphone with modern design and strong daily performance.",
    information: "8GB RAM, 128GB storage and 5G connectivity.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 20,
    size: "6.7 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Realme C67",
    subtitle: "Budget Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/realme",
    brand: "Realme",
    description: "Budget-friendly Realme smartphone designed for everyday communication and entertainment.",
    information: "8GB RAM, 128GB storage and large display.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 24,
    size: "6.72 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  // =====================================
  // GOOGLE PIXEL
  // =====================================

  {
    title: "Google Pixel 9",
    subtitle: "AI Powered Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/google-pixel",
    brand: "Google Pixel",
    description: "Modern Google Pixel smartphone with advanced AI and camera features.",
    information: "12GB RAM, 128GB storage and advanced AI features.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "6.3 inch",
    ram: "12GB",
    ssd: "128GB",
  },

  {
    title: "Google Pixel 9 Pro",
    subtitle: "Professional Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/google-pixel",
    brand: "Google Pixel",
    description: "Premium Google smartphone with advanced camera and AI capabilities.",
    information: "16GB RAM, 256GB storage and advanced AI technology.",
    price: 115000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "6.3 inch",
    ram: "16GB",
    ssd: "256GB",
  },

  {
    title: "Google Pixel 8",
    subtitle: "Premium Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/google-pixel",
    brand: "Google Pixel",
    description: "Premium Android smartphone with excellent camera performance and clean software.",
    information: "8GB RAM, 128GB storage and Google Tensor processor.",
    price: 68000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 11,
    size: "6.2 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Google Pixel 8 Pro",
    subtitle: "Professional Camera Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/google-pixel",
    brand: "Google Pixel",
    description: "Professional Pixel smartphone focused on photography, AI and performance.",
    information: "12GB RAM, 256GB storage and advanced camera system.",
    price: 90000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 7,
    size: "6.7 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "Google Pixel 7",
    subtitle: "Affordable Android Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Android Phone",
    categoryPath: "phone/smartphone/android-phone/google-pixel",
    brand: "Google Pixel",
    description: "Reliable Google Pixel smartphone with clean Android software and strong camera performance.",
    information: "8GB RAM, 128GB storage and Google Tensor processor.",
    price: 52000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 14,
    size: "6.3 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  // =====================================
  // IPHONE
  // =====================================

  {
    title: "iPhone 15 128GB",
    subtitle: "Apple Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "iPhone",
    categoryPath: "phone/smartphone/iphone/apple",
    brand: "Apple",
    description: "Premium Apple smartphone with modern performance and camera system.",
    information: "128GB storage with advanced Apple processor.",
    price: 105000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 10,
    size: "6.1 inch",
    ssd: "128GB",
  },

  {
    title: "iPhone 15 Pro",
    subtitle: "Professional Apple Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "iPhone",
    categoryPath: "phone/smartphone/iphone/apple",
    brand: "Apple",
    description: "Professional Apple smartphone with premium performance and advanced cameras.",
    information: "256GB storage with Pro performance.",
    price: 135000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "6.1 inch",
    ssd: "256GB",
  },

  {
    title: "iPhone 15 Pro Max",
    subtitle: "Premium Apple Flagship",
    category: "Phone",
    subcategory: "Smartphone",
    type: "iPhone",
    categoryPath: "phone/smartphone/iphone/apple",
    brand: "Apple",
    description: "Large premium Apple smartphone designed for demanding users.",
    information: "256GB storage with Pro camera system.",
    price: 155000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 6,
    size: "6.7 inch",
    ssd: "256GB",
  },

  {
    title: "iPhone 14",
    subtitle: "Apple Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "iPhone",
    categoryPath: "phone/smartphone/iphone/apple",
    brand: "Apple",
    description: "Reliable Apple smartphone with strong performance and modern camera features.",
    information: "128GB storage with Apple performance.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "6.1 inch",
    ssd: "128GB",
  },

  {
    title: "iPhone 13",
    subtitle: "Popular Apple Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "iPhone",
    categoryPath: "phone/smartphone/iphone/apple",
    brand: "Apple",
    description: "Popular Apple smartphone suitable for everyday use, photography and entertainment.",
    information: "128GB storage with powerful Apple processor.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 18,
    size: "6.1 inch",
    ssd: "128GB",
  },

  // =====================================
  // GAMING PHONE
  // =====================================

  {
    title: "ASUS ROG Phone 9",
    subtitle: "Ultimate Gaming Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Gaming Phone",
    categoryPath: "phone/smartphone/gaming-phone/asus",
    brand: "ASUS",
    description: "High-performance gaming smartphone designed for demanding mobile games.",
    information: "12GB RAM, 256GB storage and high refresh rate gaming display.",
    price: 105000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "6.78 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "RedMagic 10 Pro",
    subtitle: "Professional Gaming Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Gaming Phone",
    categoryPath: "phone/smartphone/gaming-phone/redmagic",
    brand: "RedMagic",
    description: "Gaming-focused smartphone built for high-performance mobile gaming.",
    information: "16GB RAM, 512GB storage and dedicated cooling system.",
    price: 92000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "6.85 inch",
    ram: "16GB",
    ssd: "512GB",
  },

  {
    title: "Black Shark 6 Pro",
    subtitle: "High Performance Gaming Phone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Gaming Phone",
    categoryPath: "phone/smartphone/gaming-phone/black-shark",
    brand: "Black Shark",
    description: "Gaming smartphone designed for competitive gaming and heavy applications.",
    information: "12GB RAM, 256GB storage and advanced cooling technology.",
    price: 82000,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 6,
    size: "6.8 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "Lenovo Legion Phone",
    subtitle: "Gaming Performance Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Gaming Phone",
    categoryPath: "phone/smartphone/gaming-phone/lenovo",
    brand: "Lenovo",
    description: "Powerful gaming smartphone designed for long gaming sessions.",
    information: "12GB RAM, 256GB storage and high-capacity battery.",
    price: 76000,
    image: "https://images.unsplash.com/photo-1607936854279-55e8f4bc5b4d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 11,
    size: "6.92 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "iQOO 13 Gaming Phone",
    subtitle: "Flagship Gaming Smartphone",
    category: "Phone",
    subcategory: "Smartphone",
    type: "Gaming Phone",
    categoryPath: "phone/smartphone/gaming-phone/iqoo",
    brand: "iQOO",
    description: "Flagship gaming smartphone offering fast performance and smooth gameplay.",
    information: "12GB RAM, 256GB storage and fast charging technology.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 13,
    size: "6.78 inch",
    ram: "12GB",
    ssd: "256GB",
  },
]);


// ============================================================
// TABLET PRODUCTS 511–530
// ============================================================

const tabletProducts = createProducts(511, [
  // =========================================================
  // ANDROID TABLET — 5
  // =========================================================

  {
    title: "Samsung Galaxy Tab S9",
    subtitle: "Premium Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    categoryPath: "tablet/android/samsung",
    type: "Android Tablet",
    brand: "Samsung",
    series: "Galaxy Tab S",
    description:
      "Premium Samsung Android tablet for productivity, entertainment and everyday use.",
    information:
      "11-inch AMOLED display, 12GB RAM and 256GB storage.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "11 inch",
    ram: "12GB",
    ssd: "256GB",
  },

  {
    title: "Samsung Galaxy Tab A9+",
    subtitle: "Samsung Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    categoryPath: "tablet/android/samsung",
    type: "Android Tablet",
    brand: "Samsung",
    series: "Galaxy Tab A",
    description:
      "Affordable Samsung tablet for study, browsing and entertainment.",
    information:
      "11-inch display with 8GB RAM and 128GB storage.",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "11 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  {
    title: "Xiaomi Pad 6",
    subtitle: "Xiaomi Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    categoryPath: "tablet/android/xiaomi",
    type: "Android Tablet",
    brand: "Xiaomi",
    series: "Xiaomi Pad",
    description:
      "Powerful Xiaomi Android tablet for productivity and entertainment.",
    information:
      "11-inch high-resolution display with 8GB RAM and 256GB storage.",
    price: 42000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 11,
    size: "11 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "Lenovo Tab P12",
    subtitle: "Lenovo Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    categoryPath: "tablet/android/lenovo",
    type: "Android Tablet",
    brand: "Lenovo",
    series: "Tab P",
    description:
      "Large-screen Lenovo tablet suitable for work, study and entertainment.",
    information:
      "12.7-inch display with 8GB RAM and 256GB storage.",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 9,
    size: "12.7 inch",
    ram: "8GB",
    ssd: "256GB",
  },

  {
    title: "OnePlus Pad",
    subtitle: "OnePlus Android Tablet",
    category: "Tablet",
    subcategory: "Android Tablet",
    categoryPath: "tablet/android/oneplus",
    type: "Android Tablet",
    brand: "OnePlus",
    series: "OnePlus Pad",
    description:
      "High-performance Android tablet designed for productivity and multimedia.",
    information:
      "11.61-inch display with 8GB RAM and 128GB storage.",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 7,
    size: "11.61 inch",
    ram: "8GB",
    ssd: "128GB",
  },

  // =========================================================
  // IPAD MINI — 8
  // =========================================================

  {
    title: "Apple iPad Mini 6 64GB",
    subtitle: "Compact Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Compact iPad Mini designed for portability, entertainment and everyday productivity.",
    information:
      "8.3-inch Liquid Retina display with 64GB storage.",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "8.3 inch",
    ssd: "64GB",
  },

  {
    title: "Apple iPad Mini 6 256GB",
    subtitle: "Compact Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Compact premium iPad with larger storage for users who need portability.",
    information:
      "8.3-inch Liquid Retina display with 256GB storage.",
    price: 82000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 9,
    size: "8.3 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Mini Wi-Fi 64GB",
    subtitle: "Apple Mini Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Portable iPad Mini for reading, browsing and entertainment.",
    information:
      "Compact 8.3-inch display and 64GB internal storage.",
    price: 68000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 14,
    size: "8.3 inch",
    ssd: "64GB",
  },

  {
    title: "Apple iPad Mini Wi-Fi 256GB",
    subtitle: "Apple Mini Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Portable premium Apple tablet with expanded storage.",
    information:
      "8.3-inch Liquid Retina display with 256GB storage.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "8.3 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Mini Cellular 64GB",
    subtitle: "Apple Cellular Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Compact cellular iPad Mini for mobile productivity and entertainment.",
    information:
      "8.3-inch display with 64GB storage and cellular connectivity.",
    price: 78000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 6,
    size: "8.3 inch",
    ssd: "64GB",
  },

  {
    title: "Apple iPad Mini Cellular 256GB",
    subtitle: "Apple Cellular Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Premium cellular iPad Mini with expanded storage.",
    information:
      "8.3-inch display with 256GB storage and cellular connectivity.",
    price: 96000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "8.3 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Mini Starlight 64GB",
    subtitle: "Apple Mini Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Compact Apple tablet with a lightweight design for everyday use.",
    information:
      "8.3-inch Liquid Retina display and 64GB storage.",
    price: 67000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "8.3 inch",
    ssd: "64GB",
  },

  {
    title: "Apple iPad Mini Purple 256GB",
    subtitle: "Apple Mini Tablet",
    category: "Tablet",
    subcategory: "iPad Mini",
    categoryPath: "tablet/ipad/mini",
    type: "iPad",
    brand: "Apple",
    series: "iPad Mini",
    description:
      "Premium compact iPad Mini with large storage capacity.",
    information:
      "8.3-inch Liquid Retina display with 256GB storage.",
    price: 84000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 7,
    size: "8.3 inch",
    ssd: "256GB",
  },

  // =========================================================
  // IPAD PRO — 8
  // =========================================================

  {
    title: "Apple iPad Pro 11 M4 256GB",
    subtitle: "Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Professional iPad Pro designed for creative work, productivity and performance.",
    information:
      "11-inch display with M4 chip and 256GB storage.",
    price: 115000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "11 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Pro 11 M4 512GB",
    subtitle: "Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "High-performance iPad Pro with expanded storage for professional users.",
    information:
      "11-inch display with M4 chip and 512GB storage.",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "11 inch",
    ssd: "512GB",
  },

  {
    title: "Apple iPad Pro 11 M4 1TB",
    subtitle: "Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Premium professional tablet for demanding creative workflows.",
    information:
      "11-inch display with M4 chip and 1TB storage.",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 4,
    size: "11 inch",
    ssd: "1TB",
  },

  {
    title: "Apple iPad Pro 13 M4 256GB",
    subtitle: "Large Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Large-screen iPad Pro for professional productivity and creative work.",
    information:
      "13-inch display with M4 chip and 256GB storage.",
    price: 145000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "13 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Pro 13 M4 512GB",
    subtitle: "Large Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Large premium iPad Pro with high-capacity storage.",
    information:
      "13-inch display with M4 chip and 512GB storage.",
    price: 170000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "13 inch",
    ssd: "512GB",
  },

  {
    title: "Apple iPad Pro 13 M4 1TB",
    subtitle: "Professional Apple Tablet",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "High-end iPad Pro designed for professional creative workloads.",
    information:
      "13-inch display with M4 chip and 1TB storage.",
    price: 205000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    stock: 3,
    size: "13 inch",
    ssd: "1TB",
  },

  {
    title: "Apple iPad Pro 11 M2 128GB",
    subtitle: "Previous Generation iPad Pro",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Powerful previous-generation iPad Pro for productivity and entertainment.",
    information:
      "11-inch display with M2 chip and 128GB storage.",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "11 inch",
    ssd: "128GB",
  },

  {
    title: "Apple iPad Pro 12.9 M2 256GB",
    subtitle: "Large iPad Pro",
    category: "Tablet",
    subcategory: "iPad Pro",
    categoryPath: "tablet/ipad/pro",
    type: "iPad",
    brand: "Apple",
    series: "iPad Pro",
    description:
      "Large professional iPad for design, productivity and multimedia.",
    information:
      "12.9-inch display with M2 chip and 256GB storage.",
    price: 125000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "12.9 inch",
    ssd: "256GB",
  },

  // =========================================================
  // IPAD AIR — 5
  // =========================================================

  {
    title: "Apple iPad Air M2 11 128GB",
    subtitle: "Apple iPad Air",
    category: "Tablet",
    subcategory: "iPad Air",
    categoryPath: "tablet/ipad/air",
    type: "iPad",
    brand: "Apple",
    series: "iPad Air",
    description:
      "Balanced iPad Air for productivity, study and entertainment.",
    information:
      "11-inch display with M2 chip and 128GB storage.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "11 inch",
    ssd: "128GB",
  },

  {
    title: "Apple iPad Air M2 11 256GB",
    subtitle: "Apple iPad Air",
    category: "Tablet",
    subcategory: "iPad Air",
    categoryPath: "tablet/ipad/air",
    type: "iPad",
    brand: "Apple",
    series: "iPad Air",
    description:
      "Powerful iPad Air with expanded storage for work and entertainment.",
    information:
      "11-inch display with M2 chip and 256GB storage.",
    price: 98000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 10,
    size: "11 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Air M2 13 128GB",
    subtitle: "Large iPad Air",
    category: "Tablet",
    subcategory: "iPad Air",
    categoryPath: "tablet/ipad/air",
    type: "iPad",
    brand: "Apple",
    series: "iPad Air",
    description:
      "Large-screen iPad Air for productivity, study and creative work.",
    information:
      "13-inch display with M2 chip and 128GB storage.",
    price: 105000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 8,
    size: "13 inch",
    ssd: "128GB",
  },

  {
    title: "Apple iPad Air M2 13 256GB",
    subtitle: "Large iPad Air",
    category: "Tablet",
    subcategory: "iPad Air",
    categoryPath: "tablet/ipad/air",
    type: "iPad",
    brand: "Apple",
    series: "iPad Air",
    description:
      "Large premium iPad Air with increased storage capacity.",
    information:
      "13-inch display with M2 chip and 256GB storage.",
    price: 118000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 7,
    size: "13 inch",
    ssd: "256GB",
  },

  {
    title: "Apple iPad Air 5th Gen 64GB",
    subtitle: "Apple iPad Air",
    category: "Tablet",
    subcategory: "iPad Air",
    categoryPath: "tablet/ipad/air",
    type: "iPad",
    brand: "Apple",
    series: "iPad Air",
    description:
      "Versatile iPad Air for education, entertainment and everyday productivity.",
    information:
      "10.9-inch display with M1 chip and 64GB storage.",
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 10,
    size: "10.9 inch",
    ssd: "64GB",
  },

  // =========================================================
  // TABLET ACCESSORIES — 6
  // =========================================================

  {
    title: "Apple Magic Keyboard for iPad",
    subtitle: "Tablet Keyboard",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/keyboard",
    type: "Tablet Accessories",
    brand: "Apple",
    series: "Magic Keyboard",
    description:
      "Premium keyboard accessory designed for compatible iPad models.",
    information:
      "Magnetic keyboard with integrated trackpad and protective design.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 15,
    size: "Standard",
  },

  {
    title: "Apple Pencil 2nd Generation",
    subtitle: "iPad Stylus",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/stylus",
    type: "Tablet Accessories",
    brand: "Apple",
    series: "Apple Pencil",
    description:
      "Precision stylus for compatible iPad models.",
    information:
      "Low-latency stylus designed for drawing, note-taking and creative work.",
    price: 16000,
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 20,
    size: "Standard",
  },

  {
    title: "Samsung S Pen",
    subtitle: "Samsung Tablet Stylus",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/stylus",
    type: "Tablet Accessories",
    brand: "Samsung",
    series: "S Pen",
    description:
      "Stylus accessory for compatible Samsung Galaxy tablets.",
    information:
      "Precision pen for writing, drawing and navigation.",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 18,
    size: "Standard",
  },

  {
    title: "Universal Tablet Stand",
    subtitle: "Adjustable Tablet Stand",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/stand",
    type: "Tablet Accessories",
    brand: "Universal",
    series: "Tablet Stand",
    description:
      "Adjustable stand for smartphones and tablets.",
    information:
      "Foldable design with multiple viewing angles.",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 30,
    size: "Standard",
  },

  {
    title: "Universal Tablet Protective Case",
    subtitle: "Tablet Cover",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/case",
    type: "Tablet Accessories",
    brand: "Universal",
    series: "Protective Case",
    description:
      "Protective tablet case designed for everyday use.",
    information:
      "Lightweight protective cover with adjustable viewing position.",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 25,
    size: "Standard",
  },

  {
    title: "USB-C Tablet Hub",
    subtitle: "Multi-Port Tablet Adapter",
    category: "Tablet",
    subcategory: "Tablet Accessories",
    categoryPath: "tablet/accessories/hub",
    type: "Tablet Accessories",
    brand: "Universal",
    series: "USB-C Hub",
    description:
      "Multi-port USB-C hub for compatible tablets and laptops.",
    information:
      "Provides additional USB, HDMI and card-reader connectivity.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 16,
    size: "Standard",
  },
]);


// ============================================================
// CAMERA PRODUCTS 531–550
// ============================================================

const cameraProducts = createProducts(531, [
  {
    title: "Canon EOS R50 Mirrorless Camera",
    subtitle: "Entry Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    categoryPath: "camera/mirrorless",
    description: "Compact mirrorless camera for photography and content creation.",
    information: "24MP sensor with interchangeable lens support.",
    price: 95000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 6,
    size: "Compact",
  },
  {
    title: "Sony Alpha A7 IV",
    subtitle: "Professional Mirrorless Camera",
    category: "Camera",
    subcategory: "Mirrorless Camera",
    categoryPath: "camera/mirrorless",
    description: "Professional full-frame mirrorless camera for photography and video.",
    information: "33MP full-frame sensor with advanced autofocus.",
    price: 245000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 4,
    size: "Standard",
  },

  ...Array.from({ length: 18 }, (_, index) => {
    const types = [
      ["Canon", "DSLR", "dslr"],
      ["Sony", "Mirrorless Camera", "mirrorless"],
      ["Nikon", "DSLR", "dslr"],
      ["Fujifilm", "Mirrorless Camera", "mirrorless"],
      ["GoPro", "Action Camera", "action-camera"],
    ];

    const [brand, type, path] = types[index % types.length];

    return {
      title: `${brand} Camera ${index + 1}`,
      subtitle: type,
      category: "Camera",
      subcategory: type,
      categoryPath: `camera/${path}`,
      description: `High-quality ${type.toLowerCase()} for photography and video creation.`,
      information: "High-resolution sensor with advanced image processing.",
      price: 35000 + index * 9000,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      rating: 4.5 + (index % 5) * 0.1,
      stock: 4 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// APPLIANCE PRODUCTS 551–580
// ============================================================

const applianceProducts = createProducts(551, [
  {
    title: "Samsung 260L Refrigerator",
    subtitle: "Frost Free Refrigerator",
    category: "Appliance",
    subcategory: "Refrigerator",
    categoryPath: "appliance/refrigerator",
    description: "Energy-efficient refrigerator for modern homes.",
    information: "260-liter capacity with frost-free cooling.",
    price: 58000,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 8,
    size: "260L",
  },
  {
    title: "LG 1.5 Ton Inverter AC",
    subtitle: "Energy Efficient Air Conditioner",
    category: "Appliance",
    subcategory: "Air Conditioner",
    categoryPath: "appliance/air-conditioner",
    description: "Energy-efficient inverter air conditioner for comfortable home cooling.",
    information: "1.5 ton inverter AC with efficient cooling.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1631545806609-2e8f6f7e6a9c?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 7,
    size: "1.5 Ton",
  },
  {
    title: "Samsung 8KG Washing Machine",
    subtitle: "Automatic Washing Machine",
    category: "Appliance",
    subcategory: "Washing Machine",
    categoryPath: "appliance/washing-machine",
    description: "Automatic washing machine for convenient home laundry.",
    information: "8KG capacity with multiple washing programs.",
    price: 52000,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 9,
    size: "8KG",
  },

  ...Array.from({ length: 27 }, (_, index) => {
    const types = [
      ["Refrigerator", "refrigerator"],
      ["Air Conditioner", "air-conditioner"],
      ["Washing Machine", "washing-machine"],
      ["Microwave Oven", "microwave-oven"],
      ["Rice Cooker", "rice-cooker"],
      ["Electric Oven", "electric-oven"],
      ["Blender", "blender"],
      ["Vacuum Cleaner", "vacuum-cleaner"],
      ["Electric Kettle", "electric-kettle"],
    ];

    const [type, path] = types[index % types.length];

    return {
      title: `${type} Home Appliance ${index + 1}`,
      subtitle: "Home Appliance",
      category: "Appliance",
      subcategory: type,
      categoryPath: `appliance/${path}`,
      description: `Modern ${type.toLowerCase()} designed for convenient home use.`,
      information: "Energy-efficient appliance with practical modern features.",
      price: 3500 + index * 3500,
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
      rating: 4.4 + (index % 6) * 0.1,
      stock: 5 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// GADGET PRODUCTS 581–600
// ============================================================

const gadgetProducts = createProducts(581, [
  {
    title: "Apple AirPods Pro",
    subtitle: "Premium Wireless Earbuds",
    category: "Gadget",
    subcategory: "Earbuds",
    categoryPath: "gadget/earbuds",
    description: "Premium wireless earbuds with active noise cancellation.",
    information: "Wireless earbuds with charging case and noise cancellation.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "Compact",
  },
  {
    title: "Apple Watch Series 9",
    subtitle: "Smart Watch",
    category: "Gadget",
    subcategory: "Smart Watch",
    categoryPath: "gadget/smart-watch",
    description: "Smart watch for fitness, notifications and everyday use.",
    information: "Advanced smartwatch with health and activity features.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "45mm",
  },

  ...Array.from({ length: 18 }, (_, index) => {
    const types = [
      ["Wireless Earbuds", "earbuds"],
      ["Smart Watch", "smart-watch"],
      ["Bluetooth Speaker", "bluetooth-speaker"],
      ["Power Bank", "power-bank"],
      ["Gaming Controller", "gaming-controller"],
      ["Smart Device", "smart-device"],
    ];

    const [type, path] = types[index % types.length];

    return {
      title: `${type} Gadget ${index + 1}`,
      subtitle: type,
      category: "Gadget",
      subcategory: type,
      categoryPath: `gadget/${path}`,
      description: `Modern ${type.toLowerCase()} for everyday convenience and entertainment.`,
      information: "Modern wireless connectivity and practical features.",
      price: 1800 + index * 1800,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      rating: 4.4 + (index % 6) * 0.1,
      stock: 8 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// SOFTWARE PRODUCTS 601–620
// ============================================================

const softwareProducts = createProducts(601, [
  {
    title: "Microsoft Windows 11 Home",
    subtitle: "Operating System",
    category: "Software",
    subcategory: "Operating System",
    categoryPath: "software/operating-system",
    description: "Modern Windows operating system for personal computers.",
    information: "Windows 11 Home digital software license.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 20,
    size: "Digital",
  },
  {
    title: "Microsoft Office Home",
    subtitle: "Productivity Software",
    category: "Software",
    subcategory: "Office Software",
    categoryPath: "software/office-software",
    description: "Productivity software package for home and office users.",
    information: "Word, Excel, PowerPoint and other productivity tools.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 20,
    size: "Digital",
  },

  ...Array.from({ length: 18 }, (_, index) => {
    const types = [
      ["Operating System", "operating-system"],
      ["Office Software", "office-software"],
      ["Antivirus", "antivirus"],
      ["Design Software", "design-software"],
      ["Security Software", "security-software"],
      ["Development Software", "development-software"],
    ];

    const [type, path] = types[index % types.length];

    return {
      title: `${type} License ${index + 1}`,
      subtitle: type,
      category: "Software",
      subcategory: type,
      categoryPath: `software/${path}`,
      description: `Software license for personal, business and professional use.`,
      information: "Digital license with software activation support.",
      price: 3000 + index * 1400,
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      rating: 4.5 + (index % 5) * 0.1,
      stock: 20,
      size: "Digital",
    };
  }),
]);


// ============================================================
// SECURITY PRODUCTS 621–640
// ============================================================

const securityProducts = createProducts(621, [
  {
    title: "Hikvision 2MP Security Camera",
    subtitle: "Indoor Security Camera",
    category: "Security",
    subcategory: "IP Camera",
    categoryPath: "security/ip-camera",
    description: "Reliable security camera for home and office monitoring.",
    information: "2MP camera with night vision and network connectivity.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 15,
    size: "Standard",
  },
  {
    title: "Hikvision 4MP IP Camera",
    subtitle: "High Resolution Security Camera",
    category: "Security",
    subcategory: "IP Camera",
    categoryPath: "security/ip-camera",
    description: "High-resolution IP camera for professional security monitoring.",
    information: "4MP camera with night vision and network connectivity.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "Standard",
  },

  ...Array.from({ length: 18 }, (_, index) => {
    const types = [
      ["IP Camera", "ip-camera"],
      ["CCTV Camera", "cctv-camera"],
      ["DVR", "dvr"],
      ["NVR", "nvr"],
      ["Access Control", "access-control"],
      ["Smart Door Lock", "smart-door-lock"],
    ];

    const [type, path] = types[index % types.length];

    return {
      title: `${type} Security Device ${index + 1}`,
      subtitle: type,
      category: "Security",
      subcategory: type,
      categoryPath: `security/${path}`,
      description: `Reliable ${type.toLowerCase()} for home and business security.`,
      information: "Modern security solution with reliable monitoring features.",
      price: 3500 + index * 2500,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      rating: 4.4 + (index % 6) * 0.1,
      stock: 5 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// NETWORKING PRODUCTS 641–660
// ============================================================

const networkingProducts = createProducts(641, [
  {
    title: "TP-Link AC1200 WiFi Router",
    subtitle: "Dual Band WiFi Router",
    category: "Networking",
    subcategory: "Router",
    categoryPath: "networking/router",
    description: "Reliable dual-band router for home and small office networks.",
    information: "AC1200 dual-band WiFi router with multiple LAN ports.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 18,
    size: "Standard",
  },
  {
    title: "TP-Link AX3000 WiFi 6 Router",
    subtitle: "High Speed WiFi Router",
    category: "Networking",
    subcategory: "Router",
    categoryPath: "networking/router",
    description: "High-speed WiFi 6 router for modern homes and offices.",
    information: "AX3000 WiFi 6 router with high-speed wireless connectivity.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 12,
    size: "Standard",
  },

  ...Array.from({ length: 18 }, (_, index) => {
    const types = [
      ["Router", "router"],
      ["WiFi Adapter", "wifi-adapter"],
      ["Network Switch", "network-switch"],
      ["Access Point", "access-point"],
      ["Network Cable", "network-cable"],
      ["Network Card", "network-card"],
    ];

    const [type, path] = types[index % types.length];

    return {
      title: `${type} Networking Device ${index + 1}`,
      subtitle: type,
      category: "Networking",
      subcategory: type,
      categoryPath: `networking/${path}`,
      description: `Reliable ${type.toLowerCase()} for home, office and professional networks.`,
      information: "High-speed networking hardware with reliable connectivity.",
      price: 1200 + index * 900,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
      rating: 4.4 + (index % 6) * 0.1,
      stock: 8 + index,
      size: "Standard",
    };
  }),
]);


// ============================================================
// COMBINE ALL NEW PRODUCTS
// ============================================================

productsData.push(
  ...laptopProducts,
  ...monitorProducts,
  ...powerProducts,
  ...phoneProducts,
  ...tabletProducts,
  ...cameraProducts,
  ...applianceProducts,
  ...gadgetProducts,
  ...softwareProducts,
  ...securityProducts,
  ...networkingProducts,
  ...componentsData,
);

// ============================================================
// LAPTOP ACCESSORIES + APPLE MACBOOK PRODUCTS
// IDs: 441–460
// ============================================================

const laptopExtraProducts = [
  // ==========================================================
  // APPLE MACBOOK AIR
  // ==========================================================

  {
    id: 441,
    title: "Apple MacBook Air M3 13-inch",
    subtitle: "13.6-inch Liquid Retina Display Laptop",
    category: "Laptop",
    subcategory: "MacBook Air",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description:
      "Slim and lightweight MacBook Air powered by the Apple M3 chip.",
    information:
      "Ideal for programming, business, study, browsing and creative work.",
    price: 142000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 8,
    size: "13.6 inch",
    processor: "Apple M3",
    generation: "M3",
    ram: "8GB Unified Memory",
    ssd: "256GB SSD",
    graphicsCard: "Apple 8-Core GPU",
  },

  {
    id: 442,
    title: "Apple MacBook Air M3 15-inch",
    subtitle: "15.3-inch Liquid Retina Display Laptop",
    category: "Laptop",
    subcategory: "MacBook Air",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description:
      "Large-screen MacBook Air with Apple M3 performance.",
    information:
      "Designed for multitasking, programming, productivity and creative work.",
    price: 168000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 6,
    size: "15.3 inch",
    processor: "Apple M3",
    generation: "M3",
    ram: "16GB Unified Memory",
    ssd: "512GB SSD",
    graphicsCard: "Apple 10-Core GPU",
  },

  {
    id: 443,
    title: "Apple MacBook Air M2",
    subtitle: "13.6-inch Retina Display Laptop",
    category: "Laptop",
    subcategory: "MacBook Air",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description:
      "Lightweight MacBook Air powered by the Apple M2 chip.",
    information:
      "Suitable for students, developers and professional users.",
    price: 118000,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 10,
    size: "13.6 inch",
    processor: "Apple M2",
    generation: "M2",
    ram: "8GB Unified Memory",
    ssd: "256GB SSD",
    graphicsCard: "Apple 8-Core GPU",
  },

  {
    id: 444,
    title: "Apple MacBook Air M2 15",
    subtitle: "15.3-inch Large Screen MacBook",
    category: "Laptop",
    subcategory: "MacBook Air",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description:
      "Large display MacBook Air for productivity and entertainment.",
    information:
      "Powerful and portable laptop with excellent battery efficiency.",
    price: 139000,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 7,
    size: "15.3 inch",
    processor: "Apple M2",
    generation: "M2",
    ram: "16GB Unified Memory",
    ssd: "512GB SSD",
    graphicsCard: "Apple 10-Core GPU",
  },

  // ==========================================================
  // APPLE MACBOOK PRO
  // ==========================================================

  {
    id: 445,
    title: "Apple MacBook Pro M3 14-inch",
    subtitle: "14.2-inch Professional MacBook",
    category: "Laptop",
    subcategory: "MacBook Pro",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description:
      "Professional MacBook Pro powered by the Apple M3 chip.",
    information:
      "Excellent for software development, design and content creation.",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "14.2 inch",
    processor: "Apple M3",
    generation: "M3",
    ram: "16GB Unified Memory",
    ssd: "512GB SSD",
    graphicsCard: "Apple 10-Core GPU",
  },

  {
    id: 446,
    title: "Apple MacBook Pro M3 Pro",
    subtitle: "14.2-inch Professional Laptop",
    category: "Laptop",
    subcategory: "MacBook Pro",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description:
      "High-performance MacBook Pro with Apple M3 Pro processor.",
    information:
      "Built for developers, designers and professional creators.",
    price: 225000,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 5,
    size: "14.2 inch",
    processor: "Apple M3 Pro",
    generation: "M3 Pro",
    ram: "18GB Unified Memory",
    ssd: "512GB SSD",
    graphicsCard: "Apple 18-Core GPU",
  },

  {
    id: 447,
    title: "Apple MacBook Pro M3 Pro 16-inch",
    subtitle: "16.2-inch Professional MacBook",
    category: "Laptop",
    subcategory: "MacBook Pro",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description:
      "Large-screen professional MacBook powered by M3 Pro.",
    information:
      "Designed for software development, video editing and demanding workloads.",
    price: 265000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 4,
    size: "16.2 inch",
    processor: "Apple M3 Pro",
    generation: "M3 Pro",
    ram: "36GB Unified Memory",
    ssd: "1TB SSD",
    graphicsCard: "Apple 18-Core GPU",
  },

  {
    id: 448,
    title: "Apple MacBook Pro M3 Max",
    subtitle: "16.2-inch High Performance Laptop",
    category: "Laptop",
    subcategory: "MacBook Pro",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description:
      "High-end MacBook Pro designed for demanding professional workflows.",
    information:
      "Suitable for advanced development, 3D work, video production and creative applications.",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    stock: 2,
    size: "16.2 inch",
    processor: "Apple M3 Max",
    generation: "M3 Max",
    ram: "36GB Unified Memory",
    ssd: "1TB SSD",
    graphicsCard: "Apple 40-Core GPU",
  },

  // ==========================================================
  // LAPTOP BAGS
  // ==========================================================

  {
    id: 449,
    title: "Lenovo Laptop Backpack 15.6-inch",
    subtitle: "Professional Laptop Backpack",
    category: "Laptop",
    subcategory: "Laptop Bag",
    categoryPath: "laptop/accessories/laptop-bag",
    description:
      "Durable laptop backpack with a dedicated padded laptop compartment.",
    information:
      "Suitable for students, office users and daily travel.",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    stock: 25,
    size: "15.6 inch",
  },

  {
    id: 450,
    title: "HP Travel Laptop Backpack",
    subtitle: "Water Resistant Laptop Bag",
    category: "Laptop",
    subcategory: "Laptop Bag",
    categoryPath: "laptop/accessories/laptop-bag",
    description:
      "Water-resistant backpack designed to safely carry laptops and accessories.",
    information:
      "Multiple compartments for laptop, charger, documents and accessories.",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 20,
    size: "15.6 inch",
  },

  {
    id: 451,
    title: "ASUS ROG Gaming Laptop Backpack",
    subtitle: "17-inch Gaming Laptop Bag",
    category: "Laptop",
    subcategory: "Laptop Bag",
    categoryPath: "laptop/accessories/laptop-bag",
    description:
      "Large gaming backpack designed for gaming laptops and accessories.",
    information:
      "Padded laptop section with additional storage for gaming accessories.",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 14,
    size: "17 inch",
  },

  {
    id: 452,
    title: "Dell Essential Laptop Backpack",
    subtitle: "15.6-inch Everyday Laptop Bag",
    category: "Laptop",
    subcategory: "Laptop Bag",
    categoryPath: "laptop/accessories/laptop-bag",
    description:
      "Simple and comfortable laptop backpack for everyday use.",
    information:
      "Dedicated laptop compartment with practical storage space.",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    stock: 30,
    size: "15.6 inch",
  },

  {
    id: 453,
    title: "Targus CitySmart Laptop Bag",
    subtitle: "Professional Laptop Carry Bag",
    category: "Laptop",
    subcategory: "Laptop Bag",
    categoryPath: "laptop/accessories/laptop-bag",
    description:
      "Professional laptop bag designed for business travel.",
    information:
      "Protective laptop compartment with additional document storage.",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 12,
    size: "15.6 inch",
  },

  // ==========================================================
  // LAPTOP STANDS
  // ==========================================================

  {
    id: 454,
    title: "UGREEN Adjustable Laptop Stand",
    subtitle: "Aluminum Ergonomic Laptop Stand",
    category: "Laptop",
    subcategory: "Laptop Stand",
    categoryPath: "laptop/accessories/laptop-stand",
    description:
      "Premium adjustable aluminum laptop stand for comfortable working.",
    information:
      "Adjustable height and viewing angle with a foldable design.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 20,
    size: "Universal",
  },

  {
    id: 455,
    title: "Baseus Foldable Laptop Stand",
    subtitle: "Portable Aluminum Laptop Stand",
    category: "Laptop",
    subcategory: "Laptop Stand",
    categoryPath: "laptop/accessories/laptop-stand",
    description:
      "Portable foldable laptop stand with adjustable viewing angles.",
    information:
      "Compact design suitable for home, office and travel.",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    stock: 24,
    size: "Universal",
  },

  {
    id: 456,
    title: "HAVIT Laptop Cooling Stand",
    subtitle: "Laptop Cooling Pad with Stand",
    category: "Laptop",
    subcategory: "Laptop Stand",
    categoryPath: "laptop/accessories/laptop-stand",
    description:
      "Cooling laptop stand designed to improve airflow during extended use.",
    information:
      "Suitable for gaming and high-performance laptops.",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 18,
    size: "15.6 inch",
  },

  {
    id: 457,
    title: "Orico Vertical Laptop Stand",
    subtitle: "Adjustable Desktop Laptop Holder",
    category: "Laptop",
    subcategory: "Laptop Stand",
    categoryPath: "laptop/accessories/laptop-stand",
    description:
      "Space-saving vertical laptop stand for desktop setups.",
    information:
      "Adjustable holder suitable for different laptop thicknesses.",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    stock: 22,
    size: "Universal",
  },

  {
    id: 458,
    title: "Nillkin Adjustable Laptop Stand",
    subtitle: "Premium Foldable Laptop Stand",
    category: "Laptop",
    subcategory: "Laptop Stand",
    categoryPath: "laptop/accessories/laptop-stand",
    description:
      "Premium foldable stand designed for ergonomic laptop positioning.",
    information:
      "Strong aluminum construction with adjustable height.",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 15,
    size: "Universal",
  },

  // ==========================================================
  // MORE MACBOOK ACCESSORIES / PRODUCTS
  // ==========================================================

  {
    id: 459,
    title: "Apple MacBook Air M1",
    subtitle: "13.3-inch Retina Display MacBook",
    category: "Laptop",
    subcategory: "MacBook Air",
    categoryPath: "laptop/apple-macbook/macbook-air",
    description:
      "Compact MacBook Air powered by Apple's M1 chip.",
    information:
      "Suitable for study, programming, office work and everyday productivity.",
    price: 92000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    stock: 9,
    size: "13.3 inch",
    processor: "Apple M1",
    generation: "M1",
    ram: "8GB Unified Memory",
    ssd: "256GB SSD",
    graphicsCard: "Apple 7-Core GPU",
  },

  {
    id: 460,
    title: "Apple MacBook Pro M2 Pro",
    subtitle: "14.2-inch Professional MacBook",
    category: "Laptop",
    subcategory: "MacBook Pro",
    categoryPath: "laptop/apple-macbook/macbook-pro",
    description:
      "Professional MacBook Pro powered by the Apple M2 Pro chip.",
    information:
      "Designed for developers, designers and professional content creators.",
    price: 205000,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    stock: 4,
    size: "14.2 inch",
    processor: "Apple M2 Pro",
    generation: "M2 Pro",
    ram: "16GB Unified Memory",
    ssd: "512GB SSD",
    graphicsCard: "Apple 19-Core GPU",
  },
];



export default productsData;