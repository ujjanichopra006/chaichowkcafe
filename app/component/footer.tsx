"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  ArrowUp,
  ShieldCheck,
  Info,
  BriefcaseBusiness,
  FileText,
  Coffee,
  Cookie,
  Heart,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const exploreLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Franchise", href: "/franchise" },
    { name: "Gallery", href: "/gallery" },
    { name: "Locations", href: "/locations" },
    { name: "Contact Us", href: "/contact" },
  ];

  const informationLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy",
      icon: ShieldCheck,
    },
    {
      name: "Terms & Conditions",
      href: "/terms",
      icon: ShieldCheck,
    },
    {
      name: "FAQs",
      href: "/FAQ",
      icon: Info,
    },
    {
      name: "Careers",
      href: "/careers",
      icon: BriefcaseBusiness,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: FileText,
    },
    {
      name: "Feedback",
      href: "/feedback",
      icon: FileText,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-orange-100/80  text-white">


      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-12 sm:px-8 lg:px-10">

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr_1.1fr]">

          {/* ================= BRAND ================= */}

          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TeaHub"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl text-black font-extrabold tracking-tight ">
                 Chaichowk<span className="text-orange-800">cafe</span>
                </h2>

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-black">
                  Delicious & Fresh
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-[11px] leading-5 text-gray-900">
              Enjoy the perfect blend of freshly brewed chai and
              delicious snacks. Made with love, served with passion.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaYoutube size={15} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaWhatsapp size={15} />
              </a>

            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="relative mb-5 inline-block text-[11px] font-extrabold uppercase tracking-[0.15em] text-orange-800">
              Explore

              <span className="absolute -bottom-2.5 left-0 h-[2px] w-8 bg-orange-900" />
            </h3>

            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-[11px] text-gray-900 transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= INFORMATION ================= */}

          <div>
            <h3 className="relative mb-5 inline-block text-[11px] font-extrabold uppercase tracking-[0.15em] text-orange-800">
              Information

              <span className="absolute -bottom-2.5 left-0 h-[2px] w-8 bg-orange-900" />
            </h3>

            <ul className="space-y-2.5">
              {informationLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-[11px] text-gray-900 transition-colors duration-200 "
                    >
                      <Icon
                        size={13}
                        className="text-orange-900 transition-transform duration-200 group-hover:scale-110"
                      />

                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="relative mb-5 inline-block text-[11px] font-extrabold uppercase tracking-[0.15em] text-orange-800">
              Contact Us

              <span className="absolute -bottom-2.5 left-0 h-[2px] w-8 bg-orange-900" />
            </h3>

            <div className="space-y-3.5">

              {/* Address */}
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-800/70 text-orange-900">
                  <MapPin size={13} />
                </div>

                <p className="text-[11px] leading-4 text-gray-900">
                Ratiya road near pnb bank.
                  <br />
                  M.m. college fatehabad
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-800/70 text-orange-900">
                  <Phone size={13} />
                </div>

                <a
                  href="tel:+919876543210"
                  className="self-center text-[11px] text-gray-900 transition"
                >
                  +91 9253779999
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-800/70 text-orange-900">
                  <Mail size={13} />
                </div>

                <a
                  href="mailto:hello@teahub.com"
                  className="self-center text-[11px] text-gray-900 transition"
                >
                 C3chaichowkcafe@gmail.com
                </a>
              </div>

              {/* Timing */}
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-800/70 text-orange-900">
                  <Clock3 size={13} />
                </div>

                <div className="text-[11px] leading-4 text-gray-900">
                  <p>Mon - Sun</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CTA ================= */}

          <div className="rounded-2xl border border-orange-800/60 bg-orange-100/10  p-4 shadow-[0_0_35px_rgba(249,115,22,0.08)]">

            <div className="mb-3 flex justify-center">
              <div className="flex h-8 w-10 items-center justify-center rounded-full border border-orange-900/50 text-orange-900">
                <Coffee size={29} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="text-center text-black text-lg font-extrabold leading-tight">
              Craving chai
              <br />
              <span className="text-orange-800">
                & snacks?
              </span>
            </h3>

            <p className="mt-2.5 text-center text-[11px] leading-4 text-gray-900">
              Order your favorite chai and snacks online now.
            </p>

            <Link
              href="/menu"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange-900 px-4 py-2.5 font-bold text-white shadow-lg shadow-orange-950/50 transition-all duration-300 hover:bg-orange-400"
            >
              MENU
              <ArrowRight size={14} />
            </Link>

          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-5 border-t border-orange-500/30 pt-4">

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <p className="text-center text-[10px] text-gray-900 md:text-left">
              © 2026 Chaichowkcafe. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-900">

              <Link
                href="/privacy"
                className="transition "
              >
                Privacy Policy
              </Link>

              <span className="text-orange-500">|</span>

              <Link
                href="/terms"
                className="transition "
              >
                Terms & Conditions
              </Link>

              <span className="text-orange-500">|</span>

              <Link
                href="/sitemap"
                className="transition"
              >
                Sitemap
              </Link>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}