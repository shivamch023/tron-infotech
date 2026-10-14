
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Printer,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Cctv,
  Droplets,
  Wrench,
  Heart,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {
  BUSINESS,
  callLink,
  whatsappLink,
} from "../lib/constants";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

const footerServices = [
  { name: "Printer Repair & Service", href: "/services/printer" },
  { name: "Cartridge Refilling", href: "/services/cartridge" },
  { name: "CCTV Installation & Repair", href: "/services/cctv" },
  { name: "New & Used Printers", href: "/products" },
  { name: "New & Used CCTV Cameras", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080F1D] text-white">

      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-[#E63946]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-10">

        {/* TOP CTA SECTION */}
        <div className="relative -mx-0 mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-[#172D4B] via-[#142B49] to-[#101D32] p-7 md:mt-16 md:p-10 lg:p-12">

          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-[#E63946]/10 blur-[70px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF6975]">
                <ShieldCheck size={15} />
                Your Service Partner
              </div>

              <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
                Need Printer or CCTV
                <span className="text-[#FF5965]"> Assistance?</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                From printer repair and cartridge refilling to CCTV
                installation and servicing, TRON INFOTECH is here
                to assist you.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <motion.a
                href={callLink}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#E63946] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(230,57,70,0.2)] transition hover:bg-[#CF2C39]"
              >
                <Phone size={18} />
                Call Now
                <ArrowUpRight size={17} />
              </motion.a>

              <motion.a
                href={whatsappLink(
                  "Hello TRON INFOTECH, I would like to enquire about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#20BD5A]"
              >
                <FaWhatsapp size={21} />
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">

          {/* COMPANY INFORMATION */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E63946] to-[#A71930] shadow-lg shadow-red-500/10 transition-transform duration-300 group-hover:rotate-[-5deg]">
                <Printer size={26} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  TRON
                  <span className="text-[#E63946]"> INFOTECH</span>
                </h3>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Printer • Cartridge • CCTV
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-slate-400">
              TRON INFOTECH provides printer repair, cartridge
              refilling, CCTV camera installation, repair and
              servicing, along with new and second-hand printer
              and CCTV product solutions.
            </p>

            {/* SERVICE BADGES */}
            <div className="mt-6 flex flex-wrap gap-2">

              {[
                { name: "Printer", icon: Printer },
                { name: "Cartridge", icon: Droplets },
                { name: "CCTV", icon: Cctv },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    <Icon size={14} className="text-[#E63946]" />
                    {item.name}
                  </span>
                );
              })}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              aria-label="TRON INFOTECH WhatsApp"
            >
              <FaWhatsapp size={21} />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">

            <h4 className="relative mb-7 text-base font-bold text-white">
              Quick Links
              <span className="absolute -bottom-3 left-0 h-[3px] w-9 rounded-full bg-[#E63946]" />
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#E63946] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="lg:col-span-3">

            <h4 className="relative mb-7 text-base font-bold text-white">
              Our Services
              <span className="absolute -bottom-3 left-0 h-[3px] w-9 rounded-full bg-[#E63946]" />
            </h4>

            <ul className="space-y-4">
              {footerServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-start gap-2 text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowRight
                      size={14}
                      className="mt-1 shrink-0 text-[#E63946] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="sm:col-span-2 lg:col-span-3">

            <h4 className="relative mb-7 text-base font-bold text-white">
              Get In Touch
              <span className="absolute -bottom-3 left-0 h-[3px] w-9 rounded-full bg-[#E63946]" />
            </h4>

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#FF5965]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Our Location
                  </p>

                  <p className="text-sm leading-6 text-slate-300">
                    {BUSINESS.address}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <a
                href={callLink}
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#FF5965] transition group-hover:bg-[#E63946] group-hover:text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <p className="text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    +91 {BUSINESS.phone}
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#FF5965] transition group-hover:bg-[#E63946] group-hover:text-white">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email Address
                  </p>

                  <p className="break-all text-sm text-slate-300 transition group-hover:text-white">
                    {BUSINESS.email}
                  </p>
                </div>
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#FF5965] transition hover:gap-3 hover:text-white"
            >
              Contact Our Team
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 text-center md:flex-row md:text-left">

          <p className="text-xs leading-6 text-slate-500">
            © 2026{" "}
            <span className="font-semibold text-slate-300">
              TRON INFOTECH.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">

            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#E63946]" />
              Narela, Delhi
            </span>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <span className="flex items-center gap-1.5">
              <Wrench size={13} className="text-[#E63946]" />
              Printer & CCTV Solutions
            </span>

            <Heart size={14} className="text-[#E63946]" />
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM SPACING FOR FLOATING CONTACT BAR */}
      <div className="h-[72px] md:hidden" />
    </footer>
  );
}
