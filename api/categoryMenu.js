
const categoryMenu = [
  // =========================================================
  // 1. DESKTOP
  // =========================================================
  {
    name: "Desktop",
    href: "/desktop",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
    children: [
    
      {
        name: "Apple Mac",
        href: "/category/desktop/apple-mac",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        children: [
          {
            name: "Mac Mini",
            href: "/category/desktop/apple-mac/mac-mini",
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
          },
          {
            name: "Mac Studio",
            href: "/category/desktop/apple-mac/mac-studio",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
          },
          {
            name: "Mac Pro",
            href: "/category/desktop/apple-mac/mac-pro",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
          },
          {
            name: "iMac",
            href: "/category/desktop/apple-mac/imac",
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
          },
        ],
      },
      {
        name: "Gaming PC",
        href: "/category/desktop/gaming-pc",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
        children: [
          {
            name: "Intel",
            href: "/category/desktop/gaming-pc/intel",
            children: [
              {
                name: "Core i5",
                href: "/category/desktop/gaming-pc/intel/core-i5",
              },
              {
                name: "Core i7",
                href: "/category/desktop/gaming-pc/intel/core-i7",
              },
              {
                name: "Core i9",
                href: "/category/desktop/gaming-pc/intel/core-i9",
              },
            ],
          },
          {
            name: "Ryzen",
            href: "/category/desktop/gaming-pc/ryzen",
            children: [
              {
                name: "Ryzen 5",
                href: "/category/desktop/gaming-pc/ryzen/ryzen-5",
              },
              {
                name: "Ryzen 7",
                href: "/category/desktop/gaming-pc/ryzen/ryzen-7",
              },
              {
                name: "Ryzen 9",
                href: "/category/desktop/gaming-pc/ryzen/ryzen-9",
              },
            ],
          },
        ],
      },
      {
        name: "PC Components",
        href: "/category/desktop/pc-components",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
        children: [
          {
            name: "Processor",
            href: "/category/desktop/pc-components/processor",
          },
          {
            name: "Motherboard",
            href: "/category/desktop/pc-components/motherboard",
          },
          {
            name: "RAM",
            href: "/category/desktop/pc-components/ram",
          },
          {
            name: "Graphics Card",
            href: "/category/desktop/pc-components/graphics-card",
          },
          {
            name: "SSD",
            href: "/category/desktop/pc-components/ssd",
          },
          {
            name: "HDD",
            href: "/category/desktop/pc-components/hdd",
          },
        ],
      },
    ],
  },

  // =========================================================
  // 2. LAPTOP
  // =========================================================
{
  name: "Laptop",
  href: "/laptop",
  image:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",

  children: [
    {
      name: "Laptop",
      href: "/laptop",
      children: [
        {
          name: "Gaming Laptop",
          href: "/laptop?subcategory=Gaming%20Laptop",
        },
        {
          name: "Business Laptop",
          href: "/laptop?subcategory=Business%20Laptop",
        },
        {
          name: "Student Laptop",
          href: "/laptop?subcategory=Student%20Laptop",
        },
        {
          name: "Creator Laptop",
          href: "/laptop?subcategory=Creator%20Laptop",
        },
      ],
    },

    {
      name: "Apple MacBook",
      href: "/laptop?subcategory=Apple%20MacBook",
      children: [
        {
          name: "MacBook Air",
          href: "/laptop?subcategory=MacBook%20Air",
        },
        {
          name: "MacBook Pro",
          href: "/laptop?subcategory=MacBook%20Pro",
        },
      ],
    },

    {
      name: "Laptop Accessories",
      href: "/laptop?subcategory=Laptop%20Accessories",

      children: [
        {
          name: "Laptop Bag",
          href: "/laptop?subcategory=Laptop%20Bag",
        },
        {
          name: "Laptop Stand",
          href: "/laptop?subcategory=Laptop%20Stand",
        },
        {
          name: "Cooling Pad",
          href: "/laptop?subcategory=Cooling%20Pad",
        },
      ],
    },
  ],
},

  // =========================================================
  // 3. COMPONENT
  // =========================================================
// =========================================================
// 3. COMPONENT
// =========================================================
{
  name: "Component",
  href: "/component",
  image:
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",

  children: [
    {
      name: "Processor",
      href: "/component?subcategory=Processor",
      children: [
        {
          name: "Intel",
          href: "/component?subcategory=Intel",
        },
        {
          name: "AMD Ryzen",
          href: "/component?subcategory=AMD%20Ryzen",
        },
      ],
    },

    {
      name: "Motherboard",
      href: "/component?subcategory=Motherboard",
      children: [
        {
          name: "Intel Motherboard",
          href: "/component?subcategory=Intel%20Motherboard",
        },
        {
          name: "AMD Motherboard",
          href: "/component?subcategory=AMD%20Motherboard",
        },
      ],
    },

    {
      name: "RAM",
      href: "/component?subcategory=RAM",
      children: [
        {
          name: "DDR4 RAM",
          href: "/component?subcategory=DDR4%20RAM",
        },
        {
          name: "DDR5 RAM",
          href: "/component?subcategory=DDR5%20RAM",
        },
      ],
    },

    {
      name: "Graphics Card",
      href: "/component?subcategory=Graphics%20Card",
      children: [
        {
          name: "NVIDIA",
          href: "/component?subcategory=NVIDIA",
        },
        {
          name: "AMD Radeon",
          href: "/component?subcategory=AMD%20Radeon",
        },
      ],
    },

    {
      name: "Storage",
      href: "/component?subcategory=Storage",
      children: [
        {
          name: "SSD",
          href: "/component?subcategory=SSD",
        },
        {
          name: "HDD",
          href: "/component?subcategory=HDD",
        },
        {
          name: "External Storage",
          href: "/component?subcategory=External%20Storage",
        },
      ],
    },

    {
      name: "Power Supply",
      href: "/component?subcategory=Power%20Supply",
    },

    {
      name: "PC Casing",
      href: "/component?subcategory=PC%20Casing",
    },
  ],
},

  // =========================================================
  //monitor///
    
  {
  name: "Monitor",
  href: "/category/monitor",

  image:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",

  children: [
    {
      name: "Gaming Monitor",
      href: "/category/monitor?subcategory=Gaming%20Monitor",

      children: [
        {
          name: "144Hz Monitor",
          href: "/category/monitor?subcategory=144Hz%20Monitor",
        },
        {
          name: "165Hz Monitor",
          href: "/category/monitor?subcategory=165Hz%20Monitor",
        },
        {
          name: "240Hz Monitor",
          href: "/category/monitor?subcategory=240Hz%20Monitor",
        },
      ],
    },

    {
      name: "Professional Monitor",
      href: "/category/monitor?subcategory=Professional%20Monitor",

      children: [
        {
          name: "4K Monitor",
          href: "/category/monitor?subcategory=4K%20Monitor",
        },
        {
          name: "Color Accurate",
          href: "/category/monitor?subcategory=Color%20Accurate",
        },
      ],
    },

    {
      name: "Curved Monitor",
      href: "/category/monitor?subcategory=Curved%20Monitor",
    },

    {
      name: "Portable Monitor",
      href: "/category/monitor?subcategory=Portable%20Monitor",
    },
  ],
},

  // =========================================================
  // 5. POWER
// =========================================================
// 5. POWER
// =========================================================
{
  name: "Power",
  href: "/category/power",
  image:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500",

  children: [
    {
      name: "UPS",
      href: "/category/power?subcategory=UPS",

      children: [
        {
          name: "650VA UPS",
          href: "/category/power?subcategory=650VA%20UPS",
        },
        {
          name: "850VA UPS",
          href: "/category/power?subcategory=850VA%20UPS",
        },
        {
          name: "1200VA UPS",
          href: "/category/power?subcategory=1200VA%20UPS",
        },
      ],
    },

    {
      name: "IPS",
      href: "/category/power?subcategory=IPS",
    },

    {
      name: "Power Supply",
      href: "/category/power?subcategory=Power%20Supply",

      children: [
        {
          name: "550W",
          href: "/category/power?subcategory=550W",
        },
        {
          name: "650W",
          href: "/category/power?subcategory=650W",
        },
        {
          name: "850W",
          href: "/category/power?subcategory=850W",
        },
      ],
    },

    {
      name: "Power Strip",
      href: "/category/power?subcategory=Power%20Strip",
    },
  ],
},

  // =========================================================
  // 6. PHONE
  // =========================================================
  {
    name: "Phone",
    href: "/category/phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    children: [
      {
        name: "Smartphone",
        href: "/category/phone/smartphone",
        children: [
          {
            name: "Apple iPhone",
            href: "/category/phone/smartphone/iphone",
          },
          {
            name: "Samsung",
            href: "/category/phone/smartphone/samsung",
          },
          {
            name: "Xiaomi",
            href: "/category/phone/smartphone/xiaomi",
          },
          {
            name: "OnePlus",
            href: "/category/phone/smartphone/oneplus",
          },
        ],
      },
      {
        name: "Feature Phone",
        href: "/category/phone/feature-phone",
      },
      {
        name: "Phone Accessories",
        href: "/category/phone/accessories",
        children: [
          {
            name: "Charger",
            href: "/category/phone/accessories/charger",
          },
          {
            name: "Power Bank",
            href: "/category/phone/accessories/power-bank",
          },
          {
            name: "Phone Case",
            href: "/category/phone/accessories/case",
          },
          {
            name: "Screen Protector",
            href: "/category/phone/accessories/screen-protector",
          },
        ],
      },
    ],
  },

  // =========================================================
  // 7. TABLET
  // =========================================================
 // 7. TABLET
// =========================================================
{
  name: "Tablet",
  href: "/category/tablet",
  image:
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",

  children: [
    {
      name: "Android Tablet",
      href: "/category/tablet?subcategory=Android%20Tablet",

      children: [
        {
          name: "Samsung Tablet",
          href: "/category/tablet?subcategory=Samsung%20Tablet",
        },
        {
          name: "Xiaomi Tablet",
          href: "/category/tablet?subcategory=Xiaomi%20Tablet",
        },
        {
          name: "Lenovo Tablet",
          href: "/category/tablet?subcategory=Lenovo%20Tablet",
        },
      ],
    },

    {
      name: "iPad",
      href: "/category/tablet?subcategory=iPad",

      children: [
        {
          name: "iPad Air",
          href: "/category/tablet?subcategory=iPad%20Air",
        },
        {
          name: "iPad Pro",
          href: "/category/tablet?subcategory=iPad%20Pro",
        },
        {
          name: "iPad Mini",
          href: "/category/tablet?subcategory=iPad%20Mini",
        },
      ],
    },

    {
      name: "Tablet Accessories",
      href: "/category/tablet?subcategory=Tablet%20Accessories",
    },
  ],
},

  // =========================================================
  // 8. OFFICE EQUIPMENT
  // =========================================================
  {
    name: "Office Equipment",
    href: "/category/office-equipment",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
    children: [
      {
        name: "Printer",
        href: "/category/office-equipment/printer",
        children: [
          {
            name: "Laser Printer",
            href: "/category/office-equipment/printer/laser",
          },
          {
            name: "Inkjet Printer",
            href: "/category/office-equipment/printer/inkjet",
          },
          {
            name: "Multifunction Printer",
            href: "/category/office-equipment/printer/multifunction",
          },
        ],
      },
      {
        name: "Scanner",
        href: "/category/office-equipment/scanner",
      },
      {
        name: "Projector",
        href: "/category/office-equipment/projector",
      },
      {
        name: "Photocopier",
        href: "/category/office-equipment/photocopier",
      },
      {
        name: "POS Equipment",
        href: "/category/office-equipment/pos",
      },
    ],
  },

  // =========================================================
  // 9. CAMERA
  // =========================================================
  {
    name: "Camera",
    href: "/category/camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    children: [
      {
        name: "DSLR Camera",
        href: "/category/camera/dslr",
        children: [
          {
            name: "Canon DSLR",
            href: "/category/camera/dslr/canon",
          },
          {
            name: "Nikon DSLR",
            href: "/category/camera/dslr/nikon",
          },
        ],
      },
      {
        name: "Mirrorless Camera",
        href: "/category/camera/mirrorless",
        children: [
          {
            name: "Sony",
            href: "/category/camera/mirrorless/sony",
          },
          {
            name: "Canon",
            href: "/category/camera/mirrorless/canon",
          },
          {
            name: "Fujifilm",
            href: "/category/camera/mirrorless/fujifilm",
          },
        ],
      },
      {
        name: "Action Camera",
        href: "/category/camera/action",
      },
      {
        name: "Camera Lens",
        href: "/category/camera/lens",
      },
      {
        name: "Camera Accessories",
        href: "/category/camera/accessories",
      },
    ],
  },

  // =========================================================
  // 10. SECURITY
  // =========================================================
  {
    name: "Security",
    href: "/category/security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500",
    children: [
      {
        name: "CCTV Camera",
        href: "/category/security/cctv",
        children: [
          {
            name: "Dome Camera",
            href: "/category/security/cctv/dome",
          },
          {
            name: "Bullet Camera",
            href: "/category/security/cctv/bullet",
          },
          {
            name: "IP Camera",
            href: "/category/security/cctv/ip",
          },
        ],
      },
      {
        name: "DVR",
        href: "/category/security/dvr",
      },
      {
        name: "NVR",
        href: "/category/security/nvr",
      },
      {
        name: "Access Control",
        href: "/category/security/access-control",
      },
      {
        name: "Smart Door Lock",
        href: "/category/security/smart-door-lock",
      },
    ],
  },

  // =========================================================
  // 11. NETWORKING
  // =========================================================
  {
    name: "Networking",
    href: "/category/networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    children: [
      {
        name: "Router",
        href: "/category/networking/router",
        children: [
          {
            name: "WiFi Router",
            href: "/category/networking/router/wifi",
          },
          {
            name: "4G Router",
            href: "/category/networking/router/4g",
          },
          {
            name: "5G Router",
            href: "/category/networking/router/5g",
          },
        ],
      },
      {
        name: "Switch",
        href: "/category/networking/switch",
        children: [
          {
            name: "8 Port Switch",
            href: "/category/networking/switch/8-port",
          },
          {
            name: "16 Port Switch",
            href: "/category/networking/switch/16-port",
          },
          {
            name: "24 Port Switch",
            href: "/category/networking/switch/24-port",
          },
        ],
      },
      {
        name: "Network Adapter",
        href: "/category/networking/network-adapter",
      },
      {
        name: "Access Point",
        href: "/category/networking/access-point",
      },
      {
        name: "Network Cable",
        href: "/category/networking/cable",
      },
    ],
  },

  // =========================================================
  // 12. SOFTWARE
  // =========================================================
  {
    name: "Software",
    href: "/category/software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
    children: [
      {
        name: "Operating System",
        href: "/category/software/operating-system",
        children: [
          {
            name: "Windows",
            href: "/category/software/operating-system/windows",
          },
          {
            name: "Windows Server",
            href: "/category/software/operating-system/windows-server",
          },
        ],
      },
      {
        name: "Office Software",
        href: "/category/software/office",
        children: [
          {
            name: "Microsoft Office",
            href: "/category/software/office/microsoft-office",
          },
          {
            name: "Microsoft 365",
            href: "/category/software/office/microsoft-365",
          },
        ],
      },
      {
        name: "Antivirus",
        href: "/category/software/antivirus",
      },
      {
        name: "Design Software",
        href: "/category/software/design",
      },
    ],
  },

  // =========================================================
  // 13. ACCESSORIES
  // =========================================================
  {
    name: "Accessories",
    href: "/category/accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    children: [
      {
        name: "Keyboard",
        href: "/category/accessories/keyboard",
        children: [
          {
            name: "Mechanical Keyboard",
            href: "/category/accessories/keyboard/mechanical",
          },
          {
            name: "Wireless Keyboard",
            href: "/category/accessories/keyboard/wireless",
          },
        ],
      },
      {
        name: "Mouse",
        href: "/category/accessories/mouse",
        children: [
          {
            name: "Gaming Mouse",
            href: "/category/accessories/mouse/gaming",
          },
          {
            name: "Wireless Mouse",
            href: "/category/accessories/mouse/wireless",
          },
        ],
      },
      {
        name: "Headphone",
        href: "/category/accessories/headphone",
        children: [
          {
            name: "Gaming Headset",
            href: "/category/accessories/headphone/gaming",
          },
          {
            name: "Wireless Headphone",
            href: "/category/accessories/headphone/wireless",
          },
        ],
      },
      {
        name: "Webcam",
        href: "/category/accessories/webcam",
      },
      {
        name: "Speaker",
        href: "/category/accessories/speaker",
      },
    ],
  },

  // =========================================================
  // 14. GADGET
  // =========================================================
  {
    name: "Gadget",
    href: "/category/gadget",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
    children: [
      {
        name: "Smart Watch",
        href: "/category/gadget/smart-watch",
        children: [
          {
            name: "Apple Watch",
            href: "/category/gadget/smart-watch/apple",
          },
          {
            name: "Samsung Watch",
            href: "/category/gadget/smart-watch/samsung",
          },
          {
            name: "Fitness Watch",
            href: "/category/gadget/smart-watch/fitness",
          },
        ],
      },
      {
        name: "Earbuds",
        href: "/category/gadget/earbuds",
      },
      {
        name: "Power Bank",
        href: "/category/gadget/power-bank",
      },
      {
        name: "Smart Home",
        href: "/category/gadget/smart-home",
        children: [
          {
            name: "Smart Bulb",
            href: "/category/gadget/smart-home/smart-bulb",
          },
          {
            name: "Smart Plug",
            href: "/category/gadget/smart-home/smart-plug",
          },
        ],
      },
    ],
  },

  // =========================================================
  // 15. GAMING TV
  // =========================================================
  {
    name: "Gaming TV",
    href: "/category/gaming-tv",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    children: [
      {
        name: "Smart TV",
        href: "/category/gaming-tv/smart-tv",
        children: [
          {
            name: "4K Smart TV",
            href: "/category/gaming-tv/smart-tv/4k",
          },
          {
            name: "OLED TV",
            href: "/category/gaming-tv/smart-tv/oled",
          },
          {
            name: "QLED TV",
            href: "/category/gaming-tv/smart-tv/qled",
          },
        ],
      },
      {
        name: "Gaming TV",
        href: "/category/gaming-tv/gaming",
        children: [
          {
            name: "120Hz Gaming TV",
            href: "/category/gaming-tv/gaming/120hz",
          },
          {
            name: "144Hz Gaming TV",
            href: "/category/gaming-tv/gaming/144hz",
          },
        ],
      },
      {
        name: "TV Accessories",
        href: "/category/gaming-tv/accessories",
      },
    ],
  },

  // =========================================================
  // 16. APPLIANCE
  // =========================================================
  {
    name: "Appliance",
    href: "/category/appliance",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500",
    children: [
      {
        name: "Refrigerator",
        href: "/category/appliance/refrigerator",
        children: [
          {
            name: "Single Door",
            href: "/category/appliance/refrigerator/single-door",
          },
          {
            name: "Double Door",
            href: "/category/appliance/refrigerator/double-door",
          },
          {
            name: "Side By Side",
            href: "/category/appliance/refrigerator/side-by-side",
          },
        ],
      },
      {
        name: "Air Conditioner",
        href: "/category/appliance/air-conditioner",
        children: [
          {
            name: "1 Ton AC",
            href: "/category/appliance/air-conditioner/1-ton",
          },
          {
            name: "1.5 Ton AC",
            href: "/category/appliance/air-conditioner/1-5-ton",
          },
          {
            name: "2 Ton AC",
            href: "/category/appliance/air-conditioner/2-ton",
          },
        ],
      },
      {
        name: "Washing Machine",
        href: "/category/appliance/washing-machine",
        children: [
          {
            name: "Front Load",
            href: "/category/appliance/washing-machine/front-load",
          },
          {
            name: "Top Load",
            href: "/category/appliance/washing-machine/top-load",
          },
        ],
      },
      {
        name: "Microwave Oven",
        href: "/category/appliance/microwave",
      },
      {
        name: "Rice Cooker",
        href: "/category/appliance/rice-cooker",
      },
    ],
  },
];

export default categoryMenu;

