const products = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    price: 1299,
    originalPrice: 1399,
    discount: 5,
    isNew: true,
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    rating: 4.8,
    reviews: 1245,
    description: "Apple iPhone 14 Pro Max with revolutionary A16 Bionic chip and groundbreaking 48MP camera system featuring Photonic Engine.",
    features: [
      "6.7-inch Super Retina XDR display",
      "Dynamic Island",
      "Emergency SOS via satellite",
      "Cinematic mode up to 4K HDR",
      "IP68 water resistance"
    ],
    image: "/images/iphone12.png",
   
    stock: 45,
    fastDelivery: true,
    freeShipping: true
  },
  {
    id: 2,
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1199,
    originalPrice: 1299,
    discount: 10,
    isNew: false,
    colors: ["Phantom Black", "Cream", "Green", "Lavender"],
    storage: ["256GB", "512GB", "1TB"],
    rating: 4.7,
    reviews: 982,
    description: "Samsung's ultimate flagship with revolutionary 200MP camera and the fastest Snapdragon 8 Gen 2 Mobile Platform.",
    features: [
      "6.8-inch Dynamic AMOLED 2X",
      "S Pen included",
      "Nightography camera system",
      "5000mAh battery",
      "IP68 water resistance"
    ],
    image: "/images/sm3.png",
  
    stock: 32,
    fastDelivery: true,
    freeShipping: true
  },
  {
    id: 3,
    name: "Pixel 7 Pro",
    brand: "Google",
    price: 899,
    originalPrice: 999,
    discount: 15,
    isNew: true,
    colors: ["Snow", "Hazel", "Obsidian"],
    storage: ["128GB", "256GB"],
    rating: 4.6,
    reviews: 876,
    description: "Google Pixel 7 Pro with next-gen Tensor G2 chip and pro-level camera with Super Res Zoom up to 30x.",
    features: [
      "6.7-inch QHD+ OLED",
      "Face Unblur and Macro Focus",
      "Real Tone technology",
      "IP68 water resistance",
      "30W fast charging"
    ],
    image: "/images/Google12.png",
   
    stock: 28,
    fastDelivery: false,
    freeShipping: true
  },
  {
    id: 4,
    name: "One Plus 6",
    brand: "OnePlus",
    price: 799,
    originalPrice: 849,
    discount: 8,
    isNew: false,
    colors: ["Titan Black", "Eternal Green"],
    storage: ["128GB", "256GB"],
    rating: 4.5,
    reviews: 654,
    description: "OnePlus 11 5G with Snapdragon 8 Gen 2, 100W SUPERVOOC charging, and Hasselblad Camera for Mobile.",
    features: [
      "6.7-inch 2K AMOLED",
      "120Hz LTPO3.0",
      "Dolby Vision Atmos",
      "5000mAh battery",
      "Alert Slider"
    ],
    image: "/images/OnePlus6.png",

    stock: 19,
    fastDelivery: true,
    freeShipping: false
  },
  {
    id: 5,
    name: "Xiaomi 13 pro",
    brand: "Xiaomi",
    price: 799,
    originalPrice: 899,
    discount: 10,
    isNew: false,
    colors: ["Ceramic Black", "Ceramic White", "Alpine Blue"],
    storage: ["256GB", "512GB"],
    rating: 4.4,
    reviews: 432,
    description: "Xiaomi flagship with Leica-tuned professional camera system and Snapdragon 8 Gen 2 processor.",
    features: [
      "6.73-inch WQHD+ AMOLED",
      "120W HyperCharge",
      "Leica Summicron lenses",
      "IP68 water resistance",
      "Harman Kardon audio"
    ],
    image: "/images/13 pro.png",
  
    stock: 15,
    fastDelivery: false,
    freeShipping: true
  },
  {
    id: 6,
    name: "Nothing Phone",
    brand: "Nothing",
    price: 599,
    originalPrice: 699,
    discount: 12,
    isNew: true,
    colors: ["White", "Dark Gray"],
    storage: ["128GB", "256GB"],
    rating: 4.3,
    reviews: 387,
    description: "Nothing Phone (2) with iconic transparent design, Glyph Interface, and powerful Snapdragon 8+ Gen 1.",
    features: [
      "6.7-inch LTPO OLED",
      "Glyph Interface",
      "50MP dual camera",
      "4700mAh battery",
      "45W fast charging"
    ],
    image: "/images/nothing.png",
    
    stock: 22,
    fastDelivery: true,
    freeShipping: true
  },
  {
    id: 7,
    name: "Realme 1",
    brand: "Realme",
    price: 699,
    originalPrice: 749,
    discount: 7,
    isNew: false,
    colors: ["Starry Black", "Sunrise Orange"],
    storage: ["256GB", "512GB"],
    rating: 4.2,
    reviews: 298,
    description: "Realme GT 5 Pro with Snapdragon 8 Gen 2 and 144Hz AMOLED display for ultimate gaming performance.",
    features: [
      "6.78-inch AMOLED",
      "144Hz refresh rate",
      "Dolby Vision Atmos",
      "5240mAh battery",
      "240W fast charging"
    ],
    image: "/images/Realme 1.png",
  
    stock: 11,
    fastDelivery: true,
    freeShipping: false
  },
  {
    id: 8,
    name: " Motorola 40",
    brand: "Motorola",
    price: 499,
    originalPrice: 549,
    discount: 5,
    isNew: true,
    colors: ["Nebula Green", "Eclipse Black"],
    storage: ["128GB", "256GB"],
    rating: 4.1,
    reviews: 187,
    description: "Motorola Edge 40 with ultra-slim design, 144Hz pOLED display, and clean Android experience.",
    features: [
      "6.55-inch pOLED",
      "IP68 water resistance",
      "68W TurboPower charging",
      "MediaTek Dimensity 8020",
      "Ready For platform"
    ],
    image: "/images/Motorola.png",
   
    stock: 8,
    fastDelivery: false,
    freeShipping: true
  },
  {
    id: 9,
    name: "Infinix Zero Ultra",
    brand: "Infinix",
    price: 399,
    originalPrice: 499,
    discount: 20,
    isNew: false,
    colors: ["Coslight Silver", "Genesis Noir"],
    storage: ["256GB"],
    rating: 3.9,
    reviews: 143,
    description: "Infinix Zero Ultra with industry-leading 180W Thunder Charge and curved AMOLED display.",
    features: [
      "6.8-inch AMOLED",
      "180W fast charging",
      "200MP OIS camera",
      "MediaTek Dimensity 920",
      "Dual stereo speakers"
    ],
    image: "/images/Infinix Zero Ultra.png",
   
    stock: 5,
    fastDelivery: true,
    freeShipping: false
  },
  {
    id: 10,
    name: "Vivo 8",
    brand: "Vivo",
    price: 999,
    originalPrice: 1099,
    discount: 6,
    isNew: true,
    colors: ["Legendary Black", "Red"],
    storage: ["256GB", "512GB"],
    rating: 4.5,
    reviews: 421,
    description: "Vivo X90 Pro with ZEISS professional imaging system and MediaTek Dimensity 9200 flagship processor.",
    features: [
      "6.78-inch AMOLED",
      "ZEISS T* coating",
      "120W FlashCharge",
      "IP68 water resistance",
      "Vivo V2 imaging chip"
    ],
    image: "/images/Vivo8.png",
    
    stock: 17,
    fastDelivery: true,
    freeShipping: true
  },
  {
    id: 11,
    name: "Camon 20 Pro",
    brand: "Tecno",
    price: 349,
    originalPrice: 429,
    discount: 18,
    isNew: false,
    colors: ["Dark Welkin", "Serenity Blue"],
    storage: ["128GB", "256GB"],
    rating: 3.8,
    reviews: 97,
    description: "Tecno Camon 20 Pro with AMOLED display and RGBW sensor for superior low-light photography.",
    features: [
      "6.67-inch AMOLED",
      "RGBW sensor technology",
      "36-month smoothness guarantee",
      "5000mAh battery",
      "33W fast charging"
    ],
    image: "/images/Tecno20.png",
   
    stock: 13,
    fastDelivery: true,
    freeShipping: false
  },
  {
    id: 12,
    name: "Magic5 Pro",
    brand: "Honor",
    price: 1099,
    originalPrice: 1199,
    discount: 9,
    isNew: true,
    colors: ["Meadow Green", "Black", "Purple"],
    storage: ["256GB", "512GB"],
    rating: 4.6,
    reviews: 356,
    description: "Honor Magic5 Pro with triple 50MP camera system and industry-leading eye-of-falcon design.",
    features: [
      "6.81-inch LTPO OLED",
      "5450mAh battery",
      "66W wired + 50W wireless",
      "IP68 water resistance",
      "3D Face Unlock"
    ],
    image: "/images/Magic5 Pro.png",
    
    stock: 24,
    fastDelivery: true,
    freeShipping: false
  }
];

export default products;