
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  MapPin,
  PhoneCall,
  Printer,
  Search,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {
  PRINTER_BUSINESS,
  PRINTER_CALL_LINK,
  printerWhatsappLink,
  printerEnquiryMessage,
  printers,
  printerBrands,
  printerIssues,
  type PrinterItem,
} from "../lib/data";

export default function PrinterServices() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<PrinterItem | null>(null);
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filtered = printers.filter((printer) => {
    const matchesBrand =
      activeBrand === "All" || printer.brand === activeBrand;

    const query = search.trim().toLowerCase();

    const matchesSearch = [
      printer.brand,
      printer.name,
      printer.type,
      printer.description,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return matchesBrand && matchesSearch;
  });

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }

      if (event.key === "Tab") {
        const modal = document.getElementById(
          "printer-service-modal"
        );

        if (!modal) return;

        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#101828]">

      {/* ================= COMPACT HERO ================= */}

      <section className="relative overflow-hidden bg-[#0B1220] text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-7 px-4 py-9 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-10 lg:py-11">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wide sm:text-xs">
              <BadgeCheck size={14} className="text-[#FF6673]" />
              TRON INFOTECH • NARELA, DELHI
            </span>

            <h1 className="mt-4 text-[30px] font-black leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
              Printer Repair & Service
              <br />
              <span className="text-[#FF5967]">
                Mahender Printer Wala
              </span>
            </h1>

            <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-slate-300 sm:text-sm">
              HP, Canon, Epson, Brother aur doosre printer brands ki
              repairing, servicing aur cartridge related problems ke
              liye Mahender ji se direct contact karein.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={PRINTER_CALL_LINK}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#E63946] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#CE303C] sm:text-sm"
              >
                <PhoneCall size={16} />
                Call Now
                <ArrowRight size={15} />
              </a>

              <a
                href={printerWhatsappLink(
                  "Hello Mahender ji, mujhe printer repair/service ki enquiry karni hai."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1DAF54] sm:text-sm"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Printer size={34} className="text-[#FF5967]" />
              </div>

              <div>
                <p className="text-lg font-black">
                  {PRINTER_BUSINESS.displayName}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Repair • Service • Cartridge
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-300">
              <MapPin size={15} className="text-[#FF5967]" />
              Swatantra Nagar, Narela, Delhi
            </div>
          </div>
        </div>
      </section>

      {/* ================= SMALL TRUST STRIP ================= */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-x-7 gap-y-2 px-4 py-3 text-[11px] font-semibold text-slate-600 sm:text-xs">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#E63946]" />
            Printer Assistance
          </span>

          <span className="flex items-center gap-1.5">
            <Wrench size={15} className="text-[#E63946]" />
            Multiple Brands
          </span>

          <span className="flex items-center gap-1.5">
            <PhoneCall size={15} className="text-[#E63946]" />
            Direct Contact
          </span>
        </div>
      </div>

      {/* ================= PRINTER CATALOG ================= */}

      <section
        id="printer-brands"
        className="mx-auto max-w-[1400px] px-3 py-9 sm:px-6 lg:px-10 lg:py-12"
      >
        <div className="mb-5">
          <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E63946]">
            Printer Services
          </span>

          <h2 className="mt-1 text-2xl font-black text-[#0B1220] sm:text-3xl">
            Apna Printer Choose Karein
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
            Printer card par click karke service details aur starting
            estimate dekhein.
          </p>
        </div>

        {/* SEARCH */}

        <div className="relative mb-4 max-w-[500px]">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search HP, Canon, Epson..."
            aria-label="Search printers"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-xs outline-none transition focus:border-[#E63946] focus:ring-2 focus:ring-red-100 sm:text-sm"
          />
        </div>

        {/* COMPACT BRAND FILTER */}

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
          {printerBrands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => setActiveBrand(brand)}
              aria-pressed={activeBrand === brand}
              className={`shrink-0 rounded-full border px-3 py-2 text-[11px] font-bold transition sm:text-xs ${
                activeBrand === brand
                  ? "border-[#142B49] bg-[#142B49] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#142B49]"
              }`}
            >
              {brand === "All" ? "All Brands" : brand}
            </button>
          ))}
        </div>

        <p className="mb-3 text-xs text-slate-500">
          Showing {filtered.length} printer categories
        </p>

        {/* ================= SMALL PRINTER CARDS ================= */}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {filtered.map((printer, index) => {
              const showImage =
                Boolean(printer.image) &&
                !failedImages.includes(printer.id);

              return (
                <motion.article
                  key={printer.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index, 4) * 0.035,
                  }}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg sm:rounded-2xl"
                >
                  {/* CLICKABLE CONTENT */}

                  <button
                    type="button"
                    onClick={() => setSelected(printer)}
                    aria-label={`View ${printer.name} service details`}
                    className="flex w-full flex-1 flex-col p-2 text-left sm:p-3"
                  >
                    {/* IMAGE AREA */}

                    <div className="relative h-[105px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#F8FAFC] to-[#E9EFF7] sm:h-[135px] lg:h-[145px]">

                      {showImage ? (
                        <Image
                          src={printer.image!}
                          alt={`${printer.name} repair service in Narela Delhi`}
                          fill
                          sizes="(max-width: 639px) 50vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          onError={() =>
                            setFailedImages((previous) =>
                              previous.includes(printer.id)
                                ? previous
                                : [...previous, printer.id]
                            )
                          }
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Printer
                            size={48}
                            strokeWidth={1.3}
                            style={{ color: printer.accent }}
                          />
                        </div>
                      )}

                      {/* BRAND BADGE */}

                      <span
                        className="absolute left-1.5 top-1.5 rounded-md bg-white/95 px-2 py-1 text-[9px] font-black shadow-sm sm:text-[10px]"
                        style={{ color: printer.accent }}
                      >
                        {printer.brand}
                      </span>
                    </div>

                    {/* DETAILS */}

                    <div className="flex w-full flex-1 flex-col pt-2.5">
                      <p className="truncate text-[10px] font-semibold text-slate-500">
                        {printer.type}
                      </p>

                      <h3 className="mt-0.5 line-clamp-2 min-h-[34px] text-[12px] font-extrabold leading-[17px] text-[#0B1220] sm:min-h-[40px] sm:text-sm sm:leading-5">
                        {printer.name}
                      </h3>

                      <p className="mt-1 hidden truncate text-[11px] text-slate-500 sm:block">
                        {printer.description}
                      </p>

                      {/* PRICE */}

                      <div className="mt-auto flex w-full items-end justify-between gap-1 pt-2.5">
                        <div>
                          <p className="text-[9px] text-slate-400 sm:text-[10px]">
                            Sample estimate
                          </p>

                          <p className="text-lg font-black leading-tight text-[#E63946] sm:text-xl">
                            ₹{printer.price}*
                          </p>
                        </div>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E63946] transition group-hover:bg-[#E63946] group-hover:text-white">
                          <ChevronRight size={17} />
                        </span>
                      </div>

                      <p className="mt-1.5 text-[9px] font-bold text-[#E63946] sm:text-[10px]">
                        View Service Details →
                      </p>
                    </div>
                  </button>

                  {/* CARD ACTION BUTTONS */}

                  <div className="grid grid-cols-2 gap-1.5 border-t border-slate-100 p-2 sm:gap-2 sm:p-3">
                    <a
                      href={PRINTER_CALL_LINK}
                      aria-label={`Call for ${printer.name}`}
                      className="inline-flex min-h-9 items-center justify-center gap-1 rounded-lg bg-[#E63946] px-1 text-[10px] font-bold text-white transition hover:bg-[#C92F3C] sm:text-xs"
                    >
                      <PhoneCall size={13} />
                      Call
                    </a>

                    <a
                      href={printerWhatsappLink(
                        printerEnquiryMessage(printer)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp for ${printer.name}`}
                      className="inline-flex min-h-9 items-center justify-center gap-1 rounded-lg bg-[#25D366] px-1 text-[10px] font-bold text-white transition hover:bg-[#1DAF54] sm:text-xs"
                    >
                      <FaWhatsapp size={14} />
                      WhatsApp
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
            <CircleHelp
              size={32}
              className="mx-auto mb-3 text-slate-400"
            />

            <h3 className="font-bold">
              Printer Nahi Mila?
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              Apna printer model Mahender ji ko WhatsApp karein.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveBrand("All");
              }}
              className="mt-4 rounded-lg bg-[#142B49] px-4 py-2.5 text-xs font-bold text-white"
            >
              Clear Search
            </button>
          </div>
        )}

        <p className="mt-5 text-[11px] leading-5 text-slate-500">
          *Prices are sample starting estimates, not confirmed quotations.
          Final repair, parts and visit charges depend on inspection.
          Please confirm charges before service.
        </p>
      </section>

      {/* ================= COMMON ISSUES ================= */}

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-black text-[#0B1220] sm:text-3xl">
            Printer Mein Kya Dikkat Hai?
          </h2>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Printer ka brand aur model batakar service enquiry karein.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4">
            {printerIssues.map((issue) => (
              <div
                key={issue}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3"
              >
                <Wrench
                  size={16}
                  className="shrink-0 text-[#E63946]"
                />

                <span className="text-[11px] font-bold text-[#142B49] sm:text-xs">
                  {issue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 rounded-2xl bg-[#142B49] p-5 text-center text-white sm:p-7 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-xl font-black sm:text-2xl">
              Printer Kharab Hai? Mahender Ji Ko Call Karein.
            </h2>

            <p className="mt-1 text-xs text-slate-300">
              TRON INFOTECH • Narela, Delhi
            </p>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <a
              href={PRINTER_CALL_LINK}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#E63946] px-4 text-xs font-bold text-white sm:flex-none"
            >
              <PhoneCall size={16} />
              {PRINTER_BUSINESS.phone}
            </a>

            <a
              href={printerWhatsappLink(
                "Hello Mahender ji, mujhe printer service ki enquiry karni hai."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-xs font-bold text-white sm:flex-none"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICE DETAILS POPUP ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            key="printer-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07111F]/75 p-3 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <motion.div
              id="printer-service-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="printer-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-[90svh] w-full max-w-[420px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* HEADER */}

              <div className="flex items-start justify-between gap-3 bg-[#142B49] p-4 text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF929A]">
                    TRON INFOTECH
                  </p>

                  <h2
                    id="printer-modal-title"
                    className="mt-1 text-lg font-black"
                  >
                    {selected.name}
                  </h2>

                  <p className="mt-1 text-xs text-slate-300">
                    {selected.brand} • {selected.type}
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close service details"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15"
                >
                  <X size={18} />
                </button>
              </div>

              {/* BODY */}

              <div className="overflow-y-auto p-4">
                {/* SELECTED PRINTER IMAGE */}

                <div className="relative mx-auto mb-3 h-[125px] w-full rounded-xl bg-[#F8FAFC]">
                  {selected.image &&
                  !failedImages.includes(selected.id) ? (
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      sizes="420px"
                      className="object-contain p-2"
                      onError={() =>
                        setFailedImages((previous) =>
                          previous.includes(selected.id)
                            ? previous
                            : [...previous, selected.id]
                        )
                      }
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Printer
                        size={55}
                        className="text-[#142B49]"
                      />
                    </div>
                  )}
                </div>

                {/* PRICE */}

                <div className="flex items-center justify-between rounded-xl bg-red-50 p-3">
                  <div>
                    <p className="text-[11px] text-slate-500">
                      Sample starting estimate
                    </p>

                    <p className="mt-0.5 text-2xl font-black text-[#E63946]">
                      ₹{selected.price}*
                    </p>
                  </div>

                  <span className="rounded-lg bg-white px-2 py-1.5 text-[10px] font-bold text-[#142B49]">
                    Repair / Service
                  </span>
                </div>

                {/* SERVICES */}

                <h3 className="mt-4 text-sm font-black text-[#0B1220]">
                  Service Details
                </h3>

                <div className="mt-2 grid gap-2">
                  {selected.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      {service}
                    </div>
                  ))}
                </div>

                <p className="mt-4 rounded-lg bg-slate-50 p-3 text-[11px] leading-5 text-slate-500">
                  Final charges printer ki condition, actual fault,
                  parts aur required work check karne ke baad confirm
                  honge. Listed price sample estimate hai.
                </p>

                <p className="mt-3 text-center text-xs font-bold text-[#142B49]">
                  Mahender Printer Wala • {PRINTER_BUSINESS.phone}
                </p>
              </div>

              {/* ACTION BUTTONS */}

              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-white p-3">
                <a
                  href={PRINTER_CALL_LINK}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#E63946] text-xs font-bold text-white"
                >
                  <PhoneCall size={16} />
                  Call Now
                </a>

                <a
                  href={printerWhatsappLink(
                    printerEnquiryMessage(selected)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-xs font-bold text-white"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
