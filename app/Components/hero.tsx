"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Printer,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "9871911478";

const WHATSAPP_URL =
  "https://wa.me/919871911478?text=" +
  encodeURIComponent(
    "Hello TRON INFOTECH, mujhe printer repair ya service ke liye help chahiye."
  );

const services = [
  "Printer Repair",
  "Cartridge Refilling",
  "CCTV Service",
  "New & Used Printers",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F4F7FB]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#142B49 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      {/* 
        DESKTOP:
        Navbar ke baad remaining screen ke andar hero fit hoga.

        MOBILE:
        Natural height rahegi: text -> buttons -> image.
      */}
      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1380px] items-center px-5 py-8 sm:px-8 lg:px-10 lg:py-5 xl:px-14">
        <div className="grid w-full items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-14">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* BADGE */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#142B49] text-white">
                <BadgeCheck size={15} />
              </span>

              <span className="text-xs font-bold text-[#142B49] sm:text-sm">
                Trusted Printer Service • Narela, Delhi
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-[680px] text-[25px] font-black leading-[1.08] tracking-[-1.5px] text-[#0B1220] sm:text-[35px] lg:text-[40px] xl:text-[50px]">
              Printer Mein Problem?
              <span className="block text-[#E63946]">
                TRON INFOTECH
              </span>
              <span className="block">
                Hai Na!
              </span>
            </h1>

            {/* SUB HEADING */}
            <h2 className="mt-4 max-w-[620px] text-base font-bold leading-relaxed text-[#142B49] sm:text-lg xl:text-xl">
              Printer Repair, Service & Cartridge Refilling
              ke liye Narela mein bharosemand solution.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[610px] text-sm leading-7 text-slate-600 sm:text-[15px]">
              Printer print nahi kar raha, paper jam ho raha hai ya
              cartridge refill karwani hai?{" "}
              <strong className="font-bold text-[#0B1220]">
                TRON INFOTECH
              </strong>{" "}
              par paaiye professional printer repair & servicing.
              New/second-hand printers aur CCTV installation &
              repair services bhi available hain.
            </p>

            {/* SERVICES */}
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#142B49] shadow-sm"
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#E63946]"
                  />
                  {service}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={`tel:+91${PHONE}`}
                className="group flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl bg-[#E63946] px-6 py-3 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(230,57,70,0.22)] transition hover:-translate-y-0.5 hover:bg-[#cf303d]"
              >
                <PhoneCall size={18} />
                Call Now: {PHONE}
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1fbd5b]"
              >
                <FaWhatsapp size={21} />
                WhatsApp Karein
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* TRUST LINE */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 sm:text-sm">
                <ShieldCheck size={17} className="text-[#E63946]" />
                Professional Service
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 sm:text-sm">
                <Wrench size={17} className="text-[#E63946]" />
                Repair & Refill
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 sm:text-sm">
                <MapPin size={17} className="text-[#E63946]" />
                Narela, Delhi
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[610px] lg:max-w-none"
          >
            {/* BACK SHAPE */}
            <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#142B49]/10 to-[#E63946]/10" />

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[26px] border-[5px] border-white bg-[#0B1220] shadow-[0_24px_65px_rgba(11,18,32,0.18)]">
              <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[470px] xl:h-[530px]">
                <Image
                  src="/assets/preinter-repair.jpg"
                  alt="Printer repair and servicing by TRON INFOTECH in Narela Delhi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/5 to-transparent" />

                {/* TOP BADGE */}
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0B1220]/75 px-3 py-2 text-[11px] font-bold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                  Printer Repair • Service • Refill
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold text-red-300">
                    <Printer size={16} />
                    TRON INFOTECH
                  </div>

                  <h3 className="text-xl font-black leading-tight text-white sm:text-2xl xl:text-[28px]">
                    Aapka Printer,
                    <br />
                    Hamari Zimmedari.
                  </h3>

                  <p className="mt-2 max-w-[380px] text-xs leading-5 text-slate-200 sm:text-sm">
                    Repair se lekar cartridge refilling tak —
                    printer solution ke liye humse contact karein.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CALL CARD */}
            <a
              href={`tel:+91${PHONE}`}
              className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 sm:left-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#E63946]">
                <PhoneCall size={19} />
              </span>

              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Repair Assistance
                </span>

                <span className="block text-sm font-black text-[#0B1220]">
                  +91 {PHONE}
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}