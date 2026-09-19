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
    { name: "Contact Us", href: "/contact" },
  ];

  const informationLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy_policy",
      icon: ShieldCheck,
    },

    {
      name: "FAQs",
      href: "/FAQ",
      icon: Info,
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr_1.1fr]">

          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2 lg:col-span-1">
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
                href="https://www.instagram.com/c3chaichowkcafe?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61579396418460"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.youtube.com/@C3ChaiChowkCafe"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaYoutube size={15} />
              </a>

              <a
                href="https://wa.me/message/4ZSZBI3J3HKXA1"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-800/70 text-orange-900 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-900 hover:text-white"
              >
                <FaWhatsapp size={15} />
              </a>

            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div className="lg:ml-20">
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

          <div className="flex items-center justify-center">
            <div className="relative h-[170px] w-[170px]">
              <Image
                src="/coffee-outlineing-2.png"
                alt="Chai Chowk Cafe"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-5 border-t border-orange-500/30 pt-4">

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <p className="text-center text-[10px] text-gray-900 md:text-left">
              © 2026 Chaichowkcafe. All Rights Reserved.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
} 