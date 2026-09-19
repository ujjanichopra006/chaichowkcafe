"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Headphones,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wallet,
  Clock3,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Strong Brand",
    text: "Build your business with a trusted and loved café brand.",
  },
  {
    icon: BarChart3,
    title: "Business Support",
    text: "End-to-end support from setup to daily operations.",
  },
  {
    icon: Users,
    title: "Complete Training",
    text: "Complete training for you and your staff.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    text: "Powerful marketing support to help your outlet grow.",
  },
];

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* =====================================================
      AOS ANIMATION
  ===================================================== */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Thank you for your franchise enquiry! Our team will contact you soon."
    );
  };

  return (
    <main className="min-h-screen text-[#24150d]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[400px]">

        <Image
          src="/highlightchai.png"
          alt="Chai Chowk Cafe Franchise"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex min-h-[400px] max-w-4xl items-center px-4 pb-10 pt-10 lg:px-8">

          <div
            className="max-w-2xl"
            data-aos="fade-right"
          >

            {/* Small Heading */}
            <p
              className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#ffd229]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join Our Growing Family
            </p>

            {/* Main Heading */}
            <h1
              className="text-3xl font-black leading-[0.98] text-white sm:text-6xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Turn Your Chai Passion
              <span className="block text-[#ffd229]">
                Into a Business
              </span>
            </h1>

            {/* Divider */}
            <div
              className="my-7 h-1 w-24 rounded-full bg-[#ffd229]"
              data-aos="fade-right"
              data-aos-delay="300"
            />

            {/* Description */}
            <p
              className="max-w-xl text-base leading-7 text-white/85 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Be a part of Chai Chowk Cafe and bring an authentic chai
              experience to your city. Start your own outlet with a trusted
              and loved café brand.
            </p>

          </div>
        </div>

        {/* Decorative Text */}
        <div
          className="absolute right-[0%] top-[23%] hidden xl:block"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <p className="font-serif text-l font-bold italic text-[#ffd229]">
            "A cup of tea,a beautiful evening,
            <br />
            A little warmth in every sip.
          </p>

          <p className="font-serif text-l font-bold italic text-[#ffd229]">
            Good conversations,cherished moments,
            <br />
            And tea that makes every moment special."
          </p>

          <div className="mt-2 text-center text-3xl text-[#ffd229]">
            💛✨☕
          </div>
        </div>

      </section>

      {/* =====================================================
          FRANCHISE FORM - TOP
      ====================================================== */}
      <section
        id="franchise-form"
        className="relative bg-[#fffaf0] px-2 py-6 lg:px-4"
      >

        <div className="mx-auto max-w-5xl">

          <div
            className="grid overflow-hidden rounded-[24px] bg-[#2b150a] shadow-2xl lg:grid-cols-[0.9fr_1.3fr]"
            data-aos="zoom-in"
          >

            {/* =================================================
                LEFT SIDE IMAGE
            ================================================= */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              data-aos="fade-right"
            >

              <Image
                src="/corner-cafe.png"
                alt="Chai Chowk Cafe"
                width={600}
                height={500}
                priority
                className="h-[500px] w-[550px] object-contain transition duration-500 hover:scale-105"
              />

            </div>

            {/* =================================================
                FORM
            ================================================= */}
            <div
              className="bg-[#fffaf0] p-3 sm:p-4 lg:p-4"
              data-aos="fade-left"
            >

              <div className="mb-2">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a36a12]">
                  Franchise Enquiry
                </p>

                <h2 className="mt-1 text-xl font-black sm:text-2xl">
                  Let&apos;s Grow Together
                </h2>

                <p className="mt-1 text-xs leading-2 text-black/60">
                  Fill in your details below and our franchise team will get
                  back to you soon.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-2"
              >

                <div className="grid gap-2 sm:grid-cols-2">

                  {/* Name */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition placeholder:text-black/35 focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    />
                  </div>

                  {/* Phone */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      Contact Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 Enter mobile number"
                      className="w-full rounded-xl border border-[#d8cdbd] bg-white px-2 py-2 outline-none transition placeholder:text-black/35 focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    />
                  </div>

                  {/* Email */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition placeholder:text-black/35 focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    />
                  </div>

                  {/* City */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      City / Location{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Where do you want to open?"
                      className="w-full rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition placeholder:text-black/35 focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    />
                  </div>

                  {/* Investment */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      Available Investment{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    >
                      <option value="" disabled>
                        Select your budget
                      </option>

                      <option>₹10 - ₹15 Lakhs</option>
                      <option>₹15 - ₹25 Lakhs</option>
                      <option>₹25 - ₹40 Lakhs</option>
                      <option>₹40 Lakhs+</option>
                    </select>
                  </div>

                  {/* Outlet */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <label className="mb-1 block text-xs font-semibold">
                      Preferred Outlet Type{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                    >
                      <option value="" disabled>
                        Select outlet type
                      </option>

                      <option>Café</option>
                      <option>Kiosk</option>
                      <option>Food Court Outlet</option>
                      <option>Other</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div data-aos="fade-up" data-aos-delay="400">

                  <label className="mb-1 block text-xs font-semibold">
                    Message
                  </label>

                  <textarea
                    rows={2}
                    placeholder="Tell us about your franchise plans..."
                    className="w-full resize-none rounded-lg border border-[#d8cdbd] bg-white px-2 py-1.5 outline-none transition placeholder:text-black/35 focus:border-[#d8a914] focus:ring-2 focus:ring-[#ffd229]/20"
                  />

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffd229] px-2 py-2 font-black text-[#24150d] transition hover:-translate-y-1 hover:bg-[#f5c512] hover:shadow-lg"
                >
                  Submit Franchise Enquiry

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:rotate-12"
                  />
                </button>

                <p className="text-center text-[10px] leading-3 text-black/45">
                  By submitting this form, you agree to be contacted regarding
                  franchise opportunities.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY PARTNER
      ====================================================== */}
      <section className="bg-[#fffaf0] px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div
            className="mb-12 text-center"
            data-aos="fade-up"
          >

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a36a12]">
              Why Partner With Us?
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              More Than Just a Business,
              <span className="block font-serif italic text-[#d79b16]">
                It&apos;s a Partnership.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-black/60">
              We provide you with the right tools, training and support to help
              you build a successful and sustainable café business.
            </p>

          </div>

          {/* Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="group rounded-3xl border border-[#e8d8bd] bg-orange-100 p-4 text-center transition duration-300 hover:-translate-y-2 hover:border-[#ffd229] hover:shadow-xl"
                >

                  {/* Icon */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd229] text-[#24150d] transition group-hover:rotate-6">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-black">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}