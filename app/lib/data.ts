
/* ==========================================
   TRON INFOTECH - PRINTER SERVICES DATA
   Mahender Printer Wala
========================================== */

// ==========================================
// BUSINESS DETAILS
// ==========================================

export const PRINTER_BUSINESS = {
  name: "TRON INFOTECH",
  displayName: "Mahender Printer Wala",
  owner: "Mahender Kumar",

  phone: "9871911478",
  whatsapp: "919871911478",

  email: "troninfotech@gmail.com",

  address:
    "4527/82, Swatantra Nagar, Narela, Delhi - 110040",
};

// ==========================================
// CONTACT LINKS
// ==========================================

export const PRINTER_CALL_LINK =
  `tel:+91${PRINTER_BUSINESS.phone}`;

export const printerWhatsappLink = (
  message: string
): string => {
  return `https://wa.me/${PRINTER_BUSINESS.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

// ==========================================
// PRINTER TYPE
// ==========================================

export type PrinterItem = {
  id: number;
  brand: string;
  name: string;
  type: string;
  description: string;

  price: number;

  image: string;

  services: string[];

  accent: string;
  initials: string;
};

// ==========================================
// PRINTER SERVICES DATA
// ==========================================

// IMPORTANT:
// All prices below are SAMPLE starting estimates.
// Confirm actual prices with Mahender ji before publishing.

export const printers: PrinterItem[] = [
  // ======================================
  // HP PRINTERS
  // ======================================

  {
    id: 1,
    brand: "HP",
    name: "HP LaserJet Printers",
    type: "Laser Printer",
    description: "LaserJet, LaserJet Pro & MFP series",

    image: "/assets/printer/laser.jpg",

    price: 350,

    services: [
      "Paper Jam Repair",
      "Printing Issue",
      "Roller & Fuser Check",
      "Toner Cartridge Service",
      "General Servicing",
    ],

    accent: "#2563EB",
    initials: "HP",
  },

  {
    id: 2,
    brand: "HP",
    name: "HP InkJet & Smart Tank",
    type: "Inkjet Printer",
    description:
      "DeskJet, Ink Tank, Smart Tank & OfficeJet",

    image: "/assets/printer/HP_Smart_Tank.avif",

    price: 300,

    services: [
      "Printhead Cleaning",
      "Ink Flow Check",
      "Paper Feeding Repair",
      "Print Quality Issues",
      "General Servicing",
    ],

    accent: "#2563EB",
    initials: "HP",
  },

  // ======================================
  // CANON PRINTERS
  // ======================================

  {
    id: 3,
    brand: "Canon",
    name: "Canon PIXMA Printers",
    type: "Inkjet Printer",
    description: "PIXMA, G-Series & MegaTank",

    image: "/assets/printer/canon.jpg",

    price: 300,

    services: [
      "Printhead Cleaning",
      "Ink System Check",
      "Paper Jam Repair",
      "Error Troubleshooting",
      "General Servicing",
    ],

    accent: "#DC2626",
    initials: "C",
  },

  {
    id: 4,
    brand: "Canon",
    name: "Canon Laser Printers",
    type: "Laser Printer",
    description: "imageCLASS & Laser Shot series",

    image: "/assets/printer/canon-laser.jpg",

    price: 350,

    services: [
      "Toner Cartridge Service",
      "Roller Check",
      "Paper Feeding Repair",
      "Print Quality Issues",
      "General Servicing",
    ],

    accent: "#DC2626",
    initials: "C",
  },

  // ======================================
  // EPSON PRINTERS
  // ======================================

  {
    id: 5,
    brand: "Epson",
    name: "Epson EcoTank Printers",
    type: "Ink Tank Printer",
    description: "EcoTank, L-Series & M-Series",

    image: "/assets/printer/Epson EcoTank Printers.jpg",

    price: 350,

    services: [
      "Printhead Cleaning",
      "Ink Flow Troubleshooting",
      "Paper Feeding Repair",
      "Print Quality Check",
      "General Servicing",
    ],

    accent: "#0891B2",
    initials: "E",
  },

  {
    id: 6,
    brand: "Epson",
    name: "Epson Dot Matrix",
    type: "Dot Matrix Printer",
    description: "LX, FX & LQ series",

    image: "/assets/printer/Epson Dot Matrix.png",

    price: 400,

    services: [
      "Ribbon Mechanism Check",
      "Paper Feeding Repair",
      "Printhead Inspection",
      "General Maintenance",
    ],

    accent: "#0891B2",
    initials: "E",
  },

  // ======================================
  // BROTHER PRINTERS
  // ======================================

  {
    id: 7,
    brand: "Brother",
    name: "Brother Laser Printers",
    type: "Laser Printer",
    description: "HL, DCP & MFC series",

    image: "/assets/printer/brother-laser.webp",

    price: 350,

    services: [
      "Drum & Toner Check",
      "Paper Jam Repair",
      "Roller Servicing",
      "Print Quality Issues",
      "General Maintenance",
    ],

    accent: "#1D4ED8",
    initials: "B",
  },

  {
    id: 8,
    brand: "Brother",
    name: "Brother Ink Tank",
    type: "Ink Tank Printer",
    description: "DCP-T & MFC-T series",

    image: "/assets/printer/brother-inktank.webp",

    price: 350,

    services: [
      "Printhead Cleaning",
      "Ink Flow Check",
      "Paper Feed Repair",
      "Error Troubleshooting",
    ],

    accent: "#1D4ED8",
    initials: "B",
  },

  // ======================================
  // SAMSUNG PRINTERS
  // ======================================

  {
    id: 9,
    brand: "Samsung",
    name: "Samsung Laser Printers",
    type: "Laser Printer",
    description: "Xpress, ML & SCX series",

    image: "/assets/printer/samsung-laser.jpg",

    price: 350,

    services: [
      "Toner Service",
      "Paper Jam Repair",
      "Roller & Fuser Inspection",
      "General Servicing",
    ],

    accent: "#1E40AF",
    initials: "S",
  },

  // ======================================
  // RICOH PRINTERS
  // ======================================

  {
    id: 10,
    brand: "Ricoh",
    name: "Ricoh Printers & MFP",
    type: "Multifunction Printer",
    description: "SP, P & IM series",

    image: "/assets/printer/ricoh.jpg",

    price: 500,

    services: [
      "Printing Troubleshooting",
      "Paper Feeding Check",
      "Scanning Issue Check",
      "General Maintenance",
    ],

    accent: "#C0262D",
    initials: "R",
  },

  // ======================================
  // XEROX PRINTERS
  // ======================================

  {
    id: 11,
    brand: "Xerox",
    name: "Xerox Printers",
    type: "Laser Printer",
    description: "Phaser, WorkCentre & VersaLink",

    image: "/assets/printer/xerox.jpg",

    price: 500,

    services: [
      "Paper Jam Repair",
      "Toner & Drum Check",
      "Print Quality Check",
      "General Servicing",
    ],

    accent: "#DC2626",
    initials: "X",
  },

  // ======================================
  // KYOCERA PRINTERS
  // ======================================

  {
    id: 12,
    brand: "Kyocera",
    name: "Kyocera Printers",
    type: "Laser Printer",
    description: "ECOSYS & TASKalfa series",

    image: "/assets/printer/kyocera.jpg",

    price: 500,

    services: [
      "Paper Feeding Check",
      "Toner System Inspection",
      "Print Quality Troubleshooting",
      "General Maintenance",
    ],

    accent: "#B91C1C",
    initials: "K",
  },

  // ======================================
  // PANTUM PRINTERS
  // ======================================

  {
    id: 13,
    brand: "Pantum",
    name: "Pantum Laser Printers",
    type: "Laser Printer",
    description: "P, M & BP series",

    image: "/assets/printer/pantum.jpg",

    price: 350,

    services: [
      "Paper Jam Repair",
      "Cartridge Check",
      "Print Quality Issues",
      "General Servicing",
    ],

    accent: "#334155",
    initials: "P",
  },

  // ======================================
  // OTHER PRINTERS
  // ======================================

  {
    id: 14,
    brand: "Other",
    name: "Other Brand Printers",
    type: "All Printer Types",
    description:
      "Apna brand aur model WhatsApp par bhejein",

    image: "/assets/printer/other-printer.jpg",

    price: 400,

    services: [
      "Printer Inspection",
      "Problem Diagnosis",
      "Repair Availability Check",
      "Service Quotation",
    ],

    accent: "#142B49",
    initials: "?",
  },
];

// ==========================================
// BRAND FILTERS
// ==========================================

export const printerBrands: string[] = [
  "All",
  "HP",
  "Canon",
  "Epson",
  "Brother",
  "Samsung",
  "Ricoh",
  "Xerox",
  "Kyocera",
  "Pantum",
  "Other",
];

// ==========================================
// COMMON PRINTER PROBLEMS
// ==========================================

export const printerIssues: string[] = [
  "Printer On Nahi Ho Raha",
  "Paper Jam Problem",
  "Printing Blank Aa Rahi Hai",
  "Print Quality Problem",
  "Cartridge / Toner Issue",
  "Ink Flow Problem",
  "Printer Error",
  "General Servicing",
];

// ==========================================
// WHATSAPP ENQUIRY MESSAGE
// ==========================================

export const printerEnquiryMessage = (
  printer: PrinterItem
): string => {
  return `Hello Mahender ji, mujhe TRON INFOTECH par ${printer.name} (${printer.type}) ki repairing/service ke baare mein enquiry karni hai. Please service details aur final charges bata dijiye.`;
};
