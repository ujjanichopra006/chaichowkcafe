"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Utensils,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Franchise", href: "/franchise" },
    { name: "Careers", href: "careers"},
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-orange-100/80  backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <div className="leading-none">
            <div className="flex items-center gap-2">

              <Image
                src="/logo.png"
                alt="chai logo"
                width={45}
                height={45}
                className="object-contain"
              />
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                Chaichowk<span className="text-orange-800">cafe</span>
              </h1>
            </div>

            <p className="mt-1 text-[10px] font-medium uppercase text-black">
              Delicious & Fresh
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-gray-800 transition-colors duration-200 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-5 top-20 w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}