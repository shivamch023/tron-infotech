
import PrinterServices from "@/app/Components/PrinterServices.tsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Repair & Service in Narela | Mahender Printer Wala",

  description:
    "TRON INFOTECH - Mahender Printer Wala. HP, Canon, Epson, Brother, Samsung, Ricoh, Xerox and other printer repair, servicing and cartridge refilling in Narela Delhi. Call 9871911478.",

  keywords: [
    "Mahender Printer Wala",
    "TRON INFOTECH Printer Repair",
    "Printer Repair Narela",
    "HP Printer Repair Narela",
    "Canon Printer Service Narela",
    "Epson Printer Repair Narela",
    "Brother Printer Repair",
    "Laser Printer Repair Delhi",
    "Inkjet Printer Repair Narela",
    "Cartridge Refilling Narela",
    "Printer Service Centre Narela",
  ],

  alternates: {
    canonical: "/services/printer",
  },
};

export default function PrinterPage() {
  return <PrinterServices />;
}
