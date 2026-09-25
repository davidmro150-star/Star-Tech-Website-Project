const categoryMenu = [
  {
    name: "Desktop",
    href: "/desktop",
    children: [
      {
        name: "Desktop PC",
        children: [
          { name: "Brand PC", href: "/desktop/brand-pc" },
          { name: "Gaming PC", href: "/desktop/gaming-pc" },
          { name: "Office PC", href: "/desktop/office-pc" },
          { name: "Creator PC", href: "/desktop/creator-pc" },
        ],
      },
      {
        name: "Apple Mac",
        children: [
          { name: "Mac Mini", href: "/desktop/mac-mini" },
          { name: "Mac Studio", href: "/desktop/mac-studio" },
          { name: "Mac Pro", href: "/desktop/mac-pro" },
          { name: "iMac", href: "/desktop/imac" },
        ],
      },
      {
        name: "Gaming PC",
        children: [
          {
            name: "Intel",
            children: [
              { name: "Core i5", href: "/desktop/gaming-pc/intel/core-i5" },
              { name: "Core i7", href: "/desktop/gaming-pc/intel/core-i7" },
              { name: "Core i9", href: "/desktop/gaming-pc/intel/core-i9" },
            ],
          },
          {
            name: "Ryzen",
            children: [
              { name: "Ryzen 5", href: "/desktop/gaming-pc/ryzen/ryzen-5" },
              { name: "Ryzen 7", href: "/desktop/gaming-pc/ryzen/ryzen-7" },
              { name: "Ryzen 9", href: "/desktop/gaming-pc/ryzen/ryzen-9" },
            ],
          },
        ],
      },
      {
        name: "PC Components",
        children: [
          { name: "Processor", href: "/component/processor" },
          { name: "Motherboard", href: "/component/motherboard" },
          { name: "RAM", href: "/component/ram" },
          { name: "Graphics Card", href: "/component/graphics-card" },
          { name: "SSD", href: "/component/ssd" },
          { name: "HDD", href: "/component/hdd" },
          { name: "Power Supply", href: "/component/power-supply" },
          { name: "PC Casing", href: "/component/pc-casing" },
        ],
      },
    ],
  },

  {
    name: "Laptop",
    href: "/laptop",
    children: [
      {
        name: "Laptop Type",
        children: [
          { name: "Gaming Laptop", href: "/laptop/gaming" },
          { name: "Business Laptop", href: "/laptop/business" },
          { name: "Ultrabook", href: "/laptop/ultrabook" },
          { name: "Student Laptop", href: "/laptop/student" },
        ],
      },
      {
        name: "Brands",
        children: [
          { name: "ASUS", href: "/laptop/brand/asus" },
          { name: "Lenovo", href: "/laptop/brand/lenovo" },
          { name: "HP", href: "/laptop/brand/hp" },
          { name: "Dell", href: "/laptop/brand/dell" },
          { name: "Acer", href: "/laptop/brand/acer" },
          { name: "MSI", href: "/laptop/brand/msi" },
        ],
      },
      {
        name: "Processor",
        children: [
          { name: "Intel", href: "/laptop/processor/intel" },
          { name: "AMD Ryzen", href: "/laptop/processor/amd" },
          { name: "Apple Silicon", href: "/laptop/processor/apple" },
        ],
      },
    ],
  },

  {
    name: "Component",
    href: "/component",
    children: [
      {
        name: "Processor",
        children: [
          { name: "Intel", href: "/component/processor/intel" },
          { name: "AMD Ryzen", href: "/component/processor/amd" },
        ],
      },
      {
        name: "Motherboard",
        children: [
          { name: "Intel Motherboard", href: "/component/motherboard/intel" },
          { name: "AMD Motherboard", href: "/component/motherboard/amd" },
        ],
      },
      { name: "RAM", href: "/component/ram" },
      { name: "Graphics Card", href: "/component/graphics-card" },
      { name: "SSD", href: "/component/ssd" },
      { name: "HDD", href: "/component/hdd" },
      { name: "PC Casing", href: "/component/casing" },
      { name: "Power Supply", href: "/component/power-supply" },
    ],
  },

  {
    name: "Monitor",
    href: "/monitor",
    children: [
      {
        name: "Monitor Type",
        children: [
          { name: "Gaming Monitor", href: "/monitor/gaming" },
          { name: "4K Monitor", href: "/monitor/4k" },
          { name: "Office Monitor", href: "/monitor/office" },
          { name: "Curved Monitor", href: "/monitor/curved" },
        ],
      },
      {
        name: "Brands",
        children: [
          { name: "Samsung", href: "/monitor/brand/samsung" },
          { name: "LG", href: "/monitor/brand/lg" },
          { name: "Dell", href: "/monitor/brand/dell" },
          { name: "AOC", href: "/monitor/brand/aoc" },
          { name: "MSI", href: "/monitor/brand/msi" },
        ],
      },
    ],
  },

  {
    name: "Power",
    href: "/power",
    children: [
      { name: "UPS", href: "/power/ups" },
      { name: "Online UPS", href: "/power/online-ups" },
      { name: "Offline UPS", href: "/power/offline-ups" },
      { name: "Power Supply", href: "/component/power-supply" },
    ],
  },

  {
    name: "Phone",
    href: "/phone",
    children: [
      {
        name: "Smartphone",
        children: [
          { name: "Android", href: "/phone/android" },
          { name: "iPhone", href: "/phone/iphone" },
        ],
      },
      {
        name: "Brands",
        children: [
          { name: "Samsung", href: "/phone/brand/samsung" },
          { name: "Xiaomi", href: "/phone/brand/xiaomi" },
          { name: "OnePlus", href: "/phone/brand/oneplus" },
          { name: "Google", href: "/phone/brand/google" },
          { name: "Apple", href: "/phone/brand/apple" },
        ],
      },
    ],
  },

  {
    name: "Tablet",
    href: "/tablet",
    children: [
      { name: "Android Tablet", href: "/tablet/android" },
      { name: "iPad", href: "/tablet/ipad" },
      {
        name: "Brands",
        children: [
          { name: "Samsung", href: "/tablet/brand/samsung" },
          { name: "Xiaomi", href: "/tablet/brand/xiaomi" },
          { name: "Lenovo", href: "/tablet/brand/lenovo" },
        ],
      },
    ],
  },

  {
    name: "Office Equipment",
    href: "/office-equipment",
    children: [
      { name: "Printer", href: "/office-equipment/printer" },
      { name: "Scanner", href: "/office-equipment/scanner" },
      { name: "Projector", href: "/office-equipment/projector" },
      { name: "UPS", href: "/office-equipment/ups" },
      { name: "Paper Cutter", href: "/office-equipment/paper-cutter" },
    ],
  },

  {
    name: "Camera",
    href: "/camera",
    children: [
      {
        name: "Camera Type",
        children: [
          { name: "DSLR", href: "/camera/dslr" },
          { name: "Mirrorless", href: "/camera/mirrorless" },
          { name: "Action Camera", href: "/camera/action" },
          { name: "Vlogging Camera", href: "/camera/vlogging" },
        ],
      },
      {
        name: "Brands",
        children: [
          { name: "Canon", href: "/camera/brand/canon" },
          { name: "Sony", href: "/camera/brand/sony" },
          { name: "Nikon", href: "/camera/brand/nikon" },
          { name: "DJI", href: "/camera/brand/dji" },
          { name: "GoPro", href: "/camera/brand/gopro" },
        ],
      },
    ],
  },

  {
    name: "Security",
    href: "/security",
    children: [
      {
        name: "CCTV Camera",
        children: [
          { name: "IP Camera", href: "/security/ip-camera" },
          { name: "Dome Camera", href: "/security/dome-camera" },
          { name: "Bullet Camera", href: "/security/bullet-camera" },
        ],
      },
      { name: "NVR", href: "/security/nvr" },
      { name: "DVR", href: "/security/dvr" },
      { name: "Access Control", href: "/security/access-control" },
    ],
  },

  {
    name: "Networking",
    href: "/networking",
    children: [
      {
        name: "Router",
        children: [
          { name: "WiFi Router", href: "/networking/router/wifi" },
          { name: "WiFi 6 Router", href: "/networking/router/wifi-6" },
          { name: "5G Router", href: "/networking/router/5g" },
        ],
      },
      { name: "Switch", href: "/networking/switch" },
      { name: "Access Point", href: "/networking/access-point" },
      { name: "Mesh WiFi", href: "/networking/mesh-wifi" },
    ],
  },

  {
    name: "Software",
    href: "/software",
    children: [
      { name: "Operating System", href: "/software/os" },
      { name: "Microsoft Office", href: "/software/microsoft-office" },
      { name: "Antivirus", href: "/software/antivirus" },
      { name: "Adobe", href: "/software/adobe" },
      { name: "Developer Tools", href: "/software/developer-tools" },
    ],
  },

  {
    name: "Accessories",
    href: "/accessories",
    children: [
      {
        name: "Keyboard",
        children: [
          { name: "Mechanical Keyboard", href: "/accessories/keyboard/mechanical" },
          { name: "Wireless Keyboard", href: "/accessories/keyboard/wireless" },
        ],
      },
      {
        name: "Mouse",
        children: [
          { name: "Gaming Mouse", href: "/accessories/mouse/gaming" },
          { name: "Wireless Mouse", href: "/accessories/mouse/wireless" },
        ],
      },
      { name: "Webcam", href: "/accessories/webcam" },
      { name: "USB Hub", href: "/accessories/usb-hub" },
    ],
  },

  {
    name: "Gadget",
    href: "/gadget",
    children: [
      { name: "Smart Watch", href: "/gadget/smart-watch" },
      { name: "Power Bank", href: "/gadget/power-bank" },
      { name: "Charger", href: "/gadget/charger" },
      { name: "Earbuds", href: "/gadget/earbuds" },
      { name: "Bluetooth Speaker", href: "/gadget/speaker" },
    ],
  },

  {
    name: "Gaming TV",
    href: "/gaming-tv",
    children: [
      { name: "Gaming Monitor", href: "/gaming-tv/gaming-monitor" },
      { name: "Smart TV", href: "/gaming-tv/smart-tv" },
      { name: "4K TV", href: "/gaming-tv/4k-tv" },
      { name: "Soundbar", href: "/gaming-tv/soundbar" },
    ],
  },

  {
    name: "Appliance",
    href: "/appliance",
    children: [
      { name: "Air Conditioner", href: "/appliance/ac" },
      { name: "Refrigerator", href: "/appliance/refrigerator" },
      { name: "Air Fryer", href: "/appliance/air-fryer" },
      { name: "Microwave Oven", href: "/appliance/microwave" },
      { name: "Vacuum Cleaner", href: "/appliance/vacuum-cleaner" },
      { name: "Air Purifier", href: "/appliance/air-purifier" },
    ],
  },
];

export default categoryMenu;