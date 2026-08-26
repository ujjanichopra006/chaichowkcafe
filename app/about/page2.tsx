"use client";

import Image from "next/image";

const values = [
  {
    title: "QUALITY IN EVERY CUP",
    text: "We carefully select the finest ingredients to serve fresh, flavorful chai. Quality is at the heart of everything we do.",
    image: "/tea-image.png",
    accent: "border-l-[#6b8e23]",
    titleColor: "text-[#58751c]",
  },
  {
    title: "FEELS LIKE HOME",
    text: "A place where people can relax, connect, and create beautiful memories over chai and delicious food.",
    image: "/chair-image.png",
    accent: "border-l-[#d9362e]",
    titleColor: "text-[#c92f29]",
  },
  {
    title: "AUTHENTIC TASTE",
    text: "We stay true to traditional recipes while offering delicious flavours for every generation.",
    image: "/snacks.png",
    accent: "border-l-[#e98a13]",
    titleColor: "text-[#d87908]",
  },
  {
    title: "GROWING TOGETHER",
    text: "As we grow across cities and communities, our promise remains the same — great taste and warm hospitality.",
    image: "/cafe-image.png",
    accent: "border-l-[#24617e]",
    titleColor: "text-[#245d78]",
  },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <Image
        src="/coffe-image.png"
        alt="Coffee background"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
      />

      {/* =====================================================
          SOFT LIGHT OVERLAY
      ===================================================== */}
      <div className="absolute inset-0 -z-10 bg-white/45" />

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Small Heading */}
        <div className="mb-1 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#e58b20]" />

          <p className="font-[cursive] text-lg font-semibold text-[#e58b20] sm:text-xl">
            What We Stand For
          </p>

          <span className="h-px w-8 bg-[#e58b20]" />

        </div>

        {/* Main Heading */}
        <h2 className="text-4xl font-black tracking-tight text-[#4b2014] sm:text-5xl">
          OUR VALUES
        </h2>

        {/* Divider */}
        <div className="my-3 flex items-center justify-center gap-3">

          <span className="h-px w-12 bg-[#e58b20]" />

          <span className="text-lg text-[#e58b20]">
            ☕
          </span>

          <span className="h-px w-12 bg-[#e58b20]" />

        </div>

        {/* Description */}
        <p className="mx-auto max-w-xl text-sm leading-6 text-[#4d352c]">
          These values brew the way we serve, connect and create
          memorable experiences for every chai lover.
        </p>

      </div>

      {/* =====================================================
          VALUES GRID
      ===================================================== */}
      <div className="relative z-10 mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">

        {values.map((value) => (

          <div
            key={value.title}
            className={`
              group relative h-[215px] overflow-hidden
              rounded-2xl
              border border-[#eadfd2]
              border-l-[4px]
              ${value.accent}
              bg-white/95
              shadow-[0_5px_20px_rgba(73,42,25,0.08)]
              backdrop-blur-[2px]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_10px_28px_rgba(73,42,25,0.14)]
            `}
          >

            {/* =================================================
                CARD CONTENT
            ================================================= */}
            <div className="relative h-full w-full p-5 sm:p-6">

              {/* =================================================
                  TEXT
              ================================================= */}
              <div className="relative z-20 max-w-[58%]">

                {/* Title */}
                <h3
                  className={`
                    max-w-[220px]
                    text-lg
                    font-extrabold
                    leading-tight
                    tracking-tight
                    ${value.titleColor}
                    sm:text-xl
                  `}
                >
                  {value.title}
                </h3>

                {/* Small Line */}
                <div className="my-2 h-[3px] w-8 rounded-full bg-[#e58b20]" />

                {/* Description */}
                <p className="text-xs font-medium leading-5 text-[#4d352c] sm:text-sm">
                  {value.text}
                </p>

              </div>

              {/* =================================================
                  CARD IMAGE
              ================================================= */}
              <div className="absolute bottom-10 right-2 h-[100%] w-[38%]">

                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="
                    object-contain
                    object-bottom
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}
      <div className="relative z-10 mx-auto mt-7 flex max-w-3xl items-center justify-center gap-2 text-center">

        <span className="hidden h-px w-10 bg-[#e58b20] sm:block" />

        <p className="text-sm font-semibold text-[#4b2014] sm:text-base">
          ♡ Good Chai • Good Food • Good People • Great Memories ♡
        </p>

        <span className="hidden h-px w-10 bg-[#e58b20] sm:block" />

      </div>

    </section>
  );
}