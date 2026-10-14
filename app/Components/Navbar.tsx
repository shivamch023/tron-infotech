
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowUpRight,
  Printer,
  Cctv,
  Droplets,
  ArrowRight,
  MapPin,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import {
  BUSINESS,
  callLink,
  whatsappLink,
} from "../lib/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  {
    name: "Printer Services",
    desc: "Repair, maintenance & servicing",
    href: "/services/printer",
    icon: Printer,
  },
  {
    name: "Cartridge Refilling",
    desc: "Laser toner & inkjet refilling",
    href: "/services/cartridge",
    icon: Droplets,
  },
  {
    name: "CCTV Camera Services",
    desc: "Installation, repair & servicing",
    href: "/services/cctv",
    icon: Cctv,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close navigation whenever the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="relative z-[60] hidden border-b border-white/10 bg-[#080F1D] text-white lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 xl:px-10">

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <MapPin size={14} className="text-[#E63946]" />
            <span>{BUSINESS.address}</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <span className="text-slate-400">
              Printer • Cartridge • CCTV Solutions
            </span>

            <a
              href={callLink}
              className="flex items-center gap-2 transition hover:text-[#E63946]"
            >
              <Phone size={13} className="text-[#E63946]" />
              +91 {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#0B1220]/95 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "border-white/10 bg-[#0B1220]"
        }`}
      >
        <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8 xl:h-[88px] xl:px-10">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#E63946] to-[#A71930] shadow-lg shadow-red-500/15 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 xl:h-12 xl:w-12">
              <Printer size={25} className="text-white" strokeWidth={1.8} />
            </div>

            <div className="flex flex-col">
              <span className="text-[19px] font-black tracking-tight text-white xl:text-[22px]">
                TRON<span className="text-[#E63946]"> INFOTECH</span>
              </span>

              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 xl:text-[10px]">
                Printer • Cartridge • CCTV
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-1 lg:flex xl:gap-2">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="group relative"
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1.5 rounded-lg px-3 py-3 text-[13px] font-semibold transition-colors xl:px-4 xl:text-sm ${
                        active
                          ? "text-[#FF5965]"
                          : "text-slate-200 hover:text-white"
                      }`}
                    >
                      Services

                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      />

                      {active && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#E63946]"
                        />
                      )}
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    <div className="invisible absolute left-1/2 top-full w-[350px] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101C30] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.4)]">

                        <div className="px-4 py-3">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63946]">
                            What We Offer
                          </p>
                        </div>

                        {services.map((service) => {
                          const Icon = service.icon;

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group/item flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-white/5"
                            >
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#FF5965] transition-all group-hover/item:bg-[#E63946] group-hover/item:text-white">
                                <Icon size={21} />
                              </div>

                              <div className="flex-1">
                                <p className="text-sm font-bold text-white">
                                  {service.name}
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                  {service.desc}
                                </p>
                              </div>

                              <ArrowUpRight
                                size={16}
                                className="text-slate-500 transition-all group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-white"
                              />
                            </Link>
                          );
                        })}

                        <Link
                          href="/services"
                          className="mt-2 flex items-center justify-between rounded-xl bg-[#E63946] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#CC2936]"
                        >
                          Explore All Services
                          <ArrowRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-lg px-3 py-3 text-[13px] font-semibold transition-colors xl:px-4 xl:text-sm ${
                    active
                      ? "text-[#FF5965]"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}

                  {active ? (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#E63946]"
                    />
                  ) : (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#E63946] transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden items-center gap-2 lg:flex">

            <motion.a
              href={callLink}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-xl border border-white/15 px-3 py-3 text-xs font-bold text-white transition hover:border-[#E63946] hover:bg-[#E63946]/10 xl:px-4 xl:text-sm"
            >
              <Phone size={16} />
              Call Now
            </motion.a>

            <motion.a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-xl bg-[#25D366] px-3 py-3 text-xs font-bold text-white shadow-lg shadow-green-500/10 transition hover:bg-[#20BD5A] xl:px-4 xl:text-sm"
            >
              <FaWhatsapp size={19} />
              WhatsApp
            </motion.a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-[#E63946] lg:hidden"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[70] bg-black/65 backdrop-blur-sm lg:hidden"
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
              }}
              className="fixed bottom-0 right-0 top-0 z-[80] flex w-[min(88vw,380px)] flex-col overflow-y-auto border-l border-white/10 bg-[#0B1220] pb-24 shadow-2xl lg:hidden"
            >
              {/* MOBILE HEADER */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

                <div>
                  <h3 className="text-xl font-black text-white">
                    TRON <span className="text-[#E63946]">INFOTECH</span>
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Your Trusted Service Partner
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white"
                >
                  <X size={21} />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <div className="flex flex-col gap-1 px-4 py-6">

                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  if (link.name === "Services") {
                    return (
                      <div key={link.href}>
                        <div
                          className={`flex items-center justify-between rounded-xl ${
                            active
                              ? "bg-[#E63946]/10 text-[#FF5965]"
                              : "text-slate-200"
                          }`}
                        >
                          <Link
                            href="/services"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 px-4 py-4 text-sm font-semibold"
                          >
                            Our Services
                          </Link>

                          <button
                            type="button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                            aria-label="Toggle services"
                            aria-expanded={servicesOpen}
                            className="px-4 py-4"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${
                                servicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 space-y-1 border-l border-[#E63946]/40 py-2 pl-3">

                                {services.map((service) => {
                                  const Icon = service.icon;

                                  return (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                                    >
                                      <Icon
                                        size={17}
                                        className="text-[#E63946]"
                                      />
                                      {service.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-semibold transition ${
                        active
                          ? "bg-[#E63946]/10 text-[#FF5965]"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ArrowUpRight size={16} />
                    </Link>
                  );
                })}
              </div>

              {/* MOBILE CONTACT */}
              <div className="mt-auto px-5">
                <div className="rounded-2xl border border-white/10 bg-[#142B49]/60 p-5">

                  <p className="text-sm font-bold text-white">
                    Need Printer or CCTV Service?
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Contact our team for repair, refilling, installation and product enquiries.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">

                    <a
                      href={callLink}
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#E63946] py-3 text-xs font-bold text-white"
                    >
                      <Phone size={15} />
                      Call Now
                    </a>

                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white"
                    >
                      <FaWhatsapp size={17} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
