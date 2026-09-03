import laptop from '../assets/laptop.png'
import phone from '../assets/Phone.png'
import tab from '../assets/Tab.png'
import tv from '../assets/Tv.png'
import watch from '../assets/Watch.png'
import keyboard from '../assets/Keyboard.png'
import camera from '../assets/Camera.png'
import smartGlasses from '../assets/SmartGlass.png'
import mouse from '../assets/Mouse.png'
import printer from '../assets/Printer.png'
import scanner from '../assets/Scanner.png'
import smartRing from '../assets/SmartRing.png'

import gamingLaptop from '../assets/GamingLaptop.png'
import monitor from '../assets/Monitor.png'
import earbuds from '../assets/Earbuds.png'
import headphones from '../assets/Headphones.png'
import neckband from '../assets/Neckband.png'
import speaker from '../assets/Speaker.png'
import powerBank from '../assets/PowerBank.png'
import charger from '../assets/Charger.png'
import cable from '../assets/TypeCCable.png'
import wirelessCharger from '../assets/WirelessCharger.png'
import powerStrip from '../assets/PowerStrip.png'
import gamingMouse from '../assets/GamingMouse.png'
import gamingKeyboard from '../assets/GamingKeyboard.png'
import mousePad from '../assets/MousePad.png'
import webcam from '../assets/Webcam.png'
import microphone from '../assets/Microphone.png'
import ssd from '../assets/SSD.png'
import hardDrive from '../assets/HardDrive.png'
import penDrive from '../assets/PenDrive.png'
import memoryCard from '../assets/MemoryCard.png'
import router from '../assets/Router.png'
import smartCamera from '../assets/SmartCamera.png'
import smartBulb from '../assets/SmartBulb.png'
import smartPlug from '../assets/SmartPlug.png'
import projector from '../assets/Projector.png'
import laptopStand from '../assets/LaptopStand.png'
import phoneStand from '../assets/PhoneStand.png'


const products = [

  // =========================
  // COMPUTERS & DEVICES
  // =========================

  {
    id: 1,
    image: laptop,
    heading: 'Laptop',
    desc: 'Powerful everyday laptop designed for students, professionals, work, entertainment, and daily computing.',
    price: 59999,
    category: 'Laptops',
  },

  {
    id: 2,
    image: gamingLaptop,
    heading: 'Gaming Laptop',
    desc: 'High-performance gaming laptop with powerful graphics, fast processing, and a smooth high-refresh display.',
    price: 89999,
    category: 'Laptops',
  },

  {
    id: 3,
    image: phone,
    heading: 'Smartphone',
    desc: 'Modern smartphone with a powerful processor, advanced camera system, vibrant display, and long-lasting battery.',
    price: 29999,
    category: 'Smartphones',
  },

  {
    id: 4,
    image: tab,
    heading: 'Tablet',
    desc: 'Lightweight tablet perfect for studying, browsing, streaming, gaming, and everyday productivity.',
    price: 24999,
    category: 'Tablets',
  },

  {
    id: 5,
    image: monitor,
    heading: 'Computer Monitor',
    desc: 'High-quality monitor with sharp visuals and smooth performance for work, study, entertainment, and gaming.',
    price: 15999,
    category: 'Monitors',
  },

  {
    id: 6,
    image: tv,
    heading: 'Smart TV',
    desc: 'Smart television with a vibrant display and streaming support for movies, shows, sports, and entertainment.',
    price: 39999,
    category: 'Television',
  },


  // =========================
  // AUDIO
  // =========================

  {
    id: 7,
    image: earbuds,
    heading: 'Wireless Earbuds',
    desc: 'Compact true wireless earbuds with clear sound, comfortable fit, low latency, and long battery life.',
    price: 1999,
    category: 'Audio',
  },

  {
    id: 8,
    image: headphones,
    heading: 'Wireless Headphones',
    desc: 'Comfortable over-ear wireless headphones with powerful sound, deep bass, and long-lasting battery.',
    price: 3999,
    category: 'Audio',
  },

  {
    id: 9,
    image: neckband,
    heading: 'Bluetooth Neckband',
    desc: 'Lightweight wireless neckband with clear calling, powerful audio, fast charging, and comfortable controls.',
    price: 1499,
    category: 'Audio',
  },

  {
    id: 10,
    image: speaker,
    heading: 'Bluetooth Speaker',
    desc: 'Portable Bluetooth speaker delivering powerful sound and deep bass for home, travel, and outdoor use.',
    price: 2499,
    category: 'Audio',
  },


  // =========================
  // WEARABLES
  // =========================

  {
    id: 11,
    image: watch,
    heading: 'Smart Watch',
    desc: 'Feature-rich smartwatch with fitness tracking, notifications, calling, activity monitoring, and stylish design.',
    price: 4999,
    category: 'Wearables',
  },

  {
    id: 12,
    image: smartRing,
    heading: 'Smart Ring',
    desc: 'Lightweight smart ring designed for activity tracking, sleep monitoring, and smart wellness insights.',
    price: 24999,
    category: 'Wearables',
  },

  {
    id: 13,
    image: smartGlasses,
    heading: 'AI Smart Glasses',
    desc: 'Next-generation smart glasses with hands-free controls, audio features, intelligent assistance, and lightweight design.',
    price: 19999,
    category: 'Wearables',
  },


  // =========================
  // MOBILE ACCESSORIES
  // =========================

  {
    id: 14,
    image: powerBank,
    heading: 'Power Bank',
    desc: 'Portable high-capacity power bank for charging smartphones, tablets, earbuds, and other devices while travelling.',
    price: 1999,
    category: 'Mobile Accessories',
  },

  {
    id: 15,
    image: charger,
    heading: 'Fast Charger',
    desc: 'Compact fast charger designed to provide reliable high-speed charging for compatible smartphones and gadgets.',
    price: 1299,
    category: 'Mobile Accessories',
  },

  {
    id: 16,
    image: cable,
    heading: 'Type-C Fast Charging Cable',
    desc: 'Durable USB Type-C cable designed for fast charging and reliable data transfer between compatible devices.',
    price: 599,
    category: 'Mobile Accessories',
  },

  {
    id: 17,
    image: wirelessCharger,
    heading: 'Wireless Charger',
    desc: 'Convenient wireless charging pad for compatible smartphones, earbuds, and other supported devices.',
    price: 1499,
    category: 'Mobile Accessories',
  },

  {
    id: 18,
    image: phoneStand,
    heading: 'Mobile Phone Stand',
    desc: 'Adjustable phone stand suitable for watching videos, video calls, studying, working, and everyday desk use.',
    price: 499,
    category: 'Mobile Accessories',
  },


  // =========================
  // COMPUTER ACCESSORIES
  // =========================

  {
    id: 19,
    image: keyboard,
    heading: 'Wireless Keyboard',
    desc: 'Comfortable and responsive keyboard designed for typing, office work, study, and everyday computer use.',
    price: 1499,
    category: 'Computer Accessories',
  },

  {
    id: 20,
    image: mouse,
    heading: 'Wireless Mouse',
    desc: 'Smooth and responsive wireless mouse with an ergonomic design for work, study, browsing, and everyday use.',
    price: 1299,
    category: 'Computer Accessories',
  },

  {
    id: 21,
    image: gamingKeyboard,
    heading: 'Gaming Keyboard',
    desc: 'Responsive gaming keyboard with comfortable keys, stylish lighting, and durable construction.',
    price: 2499,
    category: 'Gaming',
  },

  {
    id: 22,
    image: gamingMouse,
    heading: 'Gaming Mouse',
    desc: 'Precision gaming mouse with responsive tracking, programmable controls, and ergonomic design.',
    price: 1799,
    category: 'Gaming',
  },

  {
    id: 23,
    image: mousePad,
    heading: 'Gaming Mouse Pad',
    desc: 'Large smooth-surface mouse pad designed for accurate mouse movement during gaming and everyday work.',
    price: 799,
    category: 'Gaming',
  },

  {
    id: 24,
    image: webcam,
    heading: 'HD Webcam',
    desc: 'Full HD webcam designed for online classes, video meetings, streaming, and content creation.',
    price: 2499,
    category: 'Computer Accessories',
  },

  {
    id: 25,
    image: microphone,
    heading: 'USB Microphone',
    desc: 'USB microphone designed for gaming, streaming, online meetings, podcasts, and content creation.',
    price: 4499,
    category: 'Computer Accessories',
  },

  {
    id: 26,
    image: laptopStand,
    heading: 'Laptop Stand',
    desc: 'Adjustable laptop stand that improves viewing height and provides a more comfortable desk setup.',
    price: 999,
    category: 'Computer Accessories',
  },


  // =========================
  // STORAGE
  // =========================

  {
    id: 27,
    image: ssd,
    heading: 'Portable SSD',
    desc: 'Fast and compact portable SSD for storing, transferring, and backing up photos, videos, documents, and files.',
    price: 6999,
    category: 'Storage',
  },

  {
    id: 28,
    image: hardDrive,
    heading: 'External Hard Drive',
    desc: 'Reliable external storage solution for backups, large media files, documents, and everyday data storage.',
    price: 5499,
    category: 'Storage',
  },

  {
    id: 29,
    image: penDrive,
    heading: 'USB Pen Drive',
    desc: 'Compact USB storage device for quickly transferring and storing documents, photos, videos, and other files.',
    price: 799,
    category: 'Storage',
  },

  {
    id: 30,
    image: memoryCard,
    heading: 'MicroSD Memory Card',
    desc: 'High-speed memory card suitable for smartphones, cameras, tablets, action cameras, and other compatible devices.',
    price: 999,
    category: 'Storage',
  },


  // =========================
  // NETWORKING
  // =========================

  {
    id: 31,
    image: router,
    heading: 'Wi-Fi Router',
    desc: 'High-speed wireless router designed for reliable internet connectivity across homes, offices, and smart devices.',
    price: 2999,
    category: 'Networking',
  },


  // =========================
  // SMART HOME
  // =========================

  {
    id: 32,
    image: smartCamera,
    heading: 'Smart Security Camera',
    desc: 'Smart home security camera with remote monitoring and convenient access through connected devices.',
    price: 2499,
    category: 'Smart Home',
  },

  {
    id: 33,
    image: smartBulb,
    heading: 'Smart LED Bulb',
    desc: 'Connected LED bulb with smart controls, adjustable brightness, and convenient app-based operation.',
    price: 699,
    category: 'Smart Home',
  },

  {
    id: 34,
    image: smartPlug,
    heading: 'Smart Plug',
    desc: 'Smart plug that lets you control connected appliances remotely and build a convenient smart home setup.',
    price: 899,
    category: 'Smart Home',
  },

  {
    id: 35,
    image: powerStrip,
    heading: 'Smart Power Strip',
    desc: 'Multi-device power strip designed to provide convenient charging and connectivity for your home or desk setup.',
    price: 1499,
    category: 'Smart Home',
  },


  // =========================
  // GAMING
  // =========================


  // =========================
  // CAMERA & ENTERTAINMENT
  // =========================

  {
    id: 37,
    image: camera,
    heading: 'Digital Camera',
    desc: 'Digital camera designed for capturing high-quality photos and videos for travel, events, and everyday memories.',
    price: 45999,
    category: 'Cameras',
  },

  {
    id: 38,
    image: projector,
    heading: 'Mini Projector',
    desc: 'Compact projector for movies, presentations, gaming, and entertainment on a larger screen.',
    price: 8999,
    category: 'Entertainment',
  },


  // =========================
  // OFFICE
  // =========================

  {
    id: 39,
    image: printer,
    heading: 'All-in-One Printer',
    desc: 'Versatile printer designed for printing, scanning, and copying documents at home, school, or office.',
    price: 8999,
    category: 'Office',
  },

  {
    id: 40,
    image: scanner,
    heading: 'Document Scanner',
    desc: 'Fast and reliable scanner designed for digitizing documents, photos, receipts, and important paperwork.',
    price: 7499,
    category: 'Office',
  },

]

export default products