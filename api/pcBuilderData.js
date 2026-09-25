import {
  Cpu,
  Fan,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Gpu,
  Zap,
  Box,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
} from "lucide-react";

export const pcBuilderCategories = [
  {
    key: "cpu",
    name: "CPU",
    icon: Cpu,
    products: [
      {
        id: 1,
        name: "AMD Ryzen 5 5600 Processor",
        price: 13500,
        wattage: 65,
      },
      {
        id: 2,
        name: "AMD Ryzen 5 7600 Processor",
        price: 19500,
        wattage: 65,
      },
      {
        id: 3,
        name: "Intel Core i5-12400 Processor",
        price: 17000,
        wattage: 65,
      },
      {
        id: 27,
        name: "Intel Core i5-13400F Processor",
        price: 21500,
        wattage: 65,
      },
    ],
  },

  {
    key: "cpuCooler",
    name: "CPU Cooler",
    icon: Fan,
    products: [
      {
        id: 4,
        name: "DeepCool AG400 CPU Cooler",
        price: 2800,
        wattage: 5,
      },
      {
        id: 5,
        name: "DeepCool AK400 CPU Cooler",
        price: 3500,
        wattage: 5,
      },
      {
        id: 28,
        name: "Cooler Master Hyper 212",
        price: 4200,
        wattage: 5,
      },
    ],
  },

  {
    key: "motherboard",
    name: "Motherboard",
    icon: CircuitBoard,
    products: [
      {
        id: 6,
        name: "MSI B550M PRO-VDH WIFI",
        price: 12500,
        wattage: 50,
      },
      {
        id: 7,
        name: "Gigabyte B650M Gaming X AX",
        price: 18500,
        wattage: 60,
      },
      {
        id: 29,
        name: "ASUS PRIME B550M-A WIFI II",
        price: 13500,
        wattage: 50,
      },
    ],
  },

  {
    key: "ram",
    name: "RAM",
    icon: MemoryStick,
    products: [
      {
        id: 8,
        name: "Corsair Vengeance 8GB DDR4",
        price: 2800,
        wattage: 5,
      },
      {
        id: 9,
        name: "Corsair Vengeance 16GB DDR4",
        price: 5200,
        wattage: 8,
      },
      {
        id: 10,
        name: "G.Skill Ripjaws 16GB DDR5",
        price: 6500,
        wattage: 8,
      },
    ],
  },

  {
    key: "storage",
    name: "Storage",
    icon: HardDrive,
    products: [
      {
        id: 11,
        name: "WD Green 480GB SSD",
        price: 4000,
        wattage: 5,
      },
      {
        id: 12,
        name: "Samsung 980 1TB NVMe SSD",
        price: 8500,
        wattage: 7,
      },
      {
        id: 30,
        name: "Kingston NV2 1TB NVMe SSD",
        price: 7800,
        wattage: 6,
      },
    ],
  },

  {
    key: "graphicsCard",
    name: "Graphics Card",
    icon: Gpu,
    products: [
      {
        id: 13,
        name: "NVIDIA RTX 3060 12GB",
        price: 32000,
        wattage: 170,
      },
      {
        id: 14,
        name: "NVIDIA RTX 4060 8GB",
        price: 36000,
        wattage: 115,
      },
      {
        id: 15,
        name: "AMD Radeon RX 7600 8GB",
        price: 34000,
        wattage: 165,
      },
      {
        id: 31,
        name: "NVIDIA RTX 4070 12GB",
        price: 72000,
        wattage: 200,
      },
    ],
  },

  {
    key: "powerSupply",
    name: "Power Supply",
    icon: Zap,
    products: [
      {
        id: 16,
        name: "DeepCool PK550D 550W",
        price: 5500,
        wattage: 550,
      },
      {
        id: 17,
        name: "Corsair CV650 650W",
        price: 6500,
        wattage: 650,
      },
      {
        id: 32,
        name: "DeepCool PK750D 750W",
        price: 8500,
        wattage: 750,
      },
    ],
  },

  {
    key: "casing",
    name: "Casing",
    icon: Box,
    products: [
      {
        id: 18,
        name: "DeepCool CC560 ATX Casing",
        price: 6500,
        wattage: 0,
      },
      {
        id: 19,
        name: "Montech Air 100 ARGB",
        price: 7200,
        wattage: 0,
      },
      {
        id: 33,
        name: "DeepCool CH370 Casing",
        price: 6800,
        wattage: 0,
      },
    ],
  },

  {
    key: "monitor",
    name: "Monitor",
    icon: Monitor,
    products: [
      {
        id: 20,
        name: "AOC 24G2 24 inch Gaming Monitor",
        price: 18500,
        wattage: 30,
      },
      {
        id: 21,
        name: "MSI G2412 24 inch Gaming Monitor",
        price: 22000,
        wattage: 30,
      },
      {
        id: 34,
        name: "LG 24GN600-B 24 inch Gaming Monitor",
        price: 20500,
        wattage: 28,
      },
    ],
  },

  {
    key: "casingCooler",
    name: "Casing Cooler",
    icon: Fan,
    products: [
      {
        id: 22,
        name: "DeepCool RF120 120mm Fan",
        price: 1200,
        wattage: 3,
      },
      {
        id: 23,
        name: "Cooler Master SickleFlow 120",
        price: 1500,
        wattage: 3,
      },
      {
        id: 35,
        name: "DeepCool FC120 ARGB Fan",
        price: 1800,
        wattage: 3,
      },
    ],
  },

  {
    key: "keyboard",
    name: "Keyboard",
    icon: Keyboard,
    products: [
      {
        id: 24,
        name: "Fantech K612 Keyboard",
        price: 1800,
        wattage: 2,
      },
      {
        id: 36,
        name: "Fantech MK872 Mechanical Keyboard",
        price: 3500,
        wattage: 2,
      },
    ],
  },

  {
    key: "mouse",
    name: "Mouse",
    icon: Mouse,
    products: [
      {
        id: 25,
        name: "Fantech Crypto VX7 Mouse",
        price: 2200,
        wattage: 1,
      },
      {
        id: 37,
        name: "Fantech Helios UX3 Mouse",
        price: 2800,
        wattage: 1,
      },
    ],
  },

  {
    key: "headphone",
    name: "Headphone",
    icon: Headphones,
    products: [
      {
        id: 26,
        name: "Fantech HG11 Gaming Headset",
        price: 2500,
        wattage: 2,
      },
      {
        id: 38,
        name: "Fantech HG20 Gaming Headset",
        price: 3200,
        wattage: 2,
      },
      {
        id: 39,
        name: "Fantech Sonata MH90 Headset",
        price: 4500,
        wattage: 2,
      },
      {
        id: 40,
        name: "Fantech Visage MH89 Headset",
        price: 3800,
        wattage: 2,
      },
    ],
  },
];