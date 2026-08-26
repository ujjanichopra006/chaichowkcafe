"use client";

import Image from "next/image";
import Link from "next/link";
import OurValue from "./page2";

export default function Story() {
  return (
    <>
      {/* =========================================================
          STORY / CHAI SECTION
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/restaurant.png"
          alt="Chai Chowk Cafe"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2">

            {/* =====================================================
                LEFT - TEXT
            ===================================================== */}
            <div className="text-white">
              <div className="max-w-xl">

                {/* Small Label */}
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 sm:text-sm">
                  More Than Chai, It&apos;s a Feeling
                </p>

                {/* Heading */}
                <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                  A Place Made for
                  <span className="mt-1 block text-orange-400">
                    Chai &amp; Memories
                  </span>
                </h1>

                {/* Paragraph */}
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                  Chai Chowk Cafe is where great chai, delicious food, and good
                  moments come together. From quick chai breaks to long
                  conversations, every visit is made to feel warm, welcoming,
                  and a little like home.
                </p>

                {/* Button */}
                <div className="mt-7">
                  <Link
                    href="/menu"
                    className="inline-flex items-center rounded-full bg-orange-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-orange-700"
                  >
                    Explore Our Menu
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>

              </div>
            </div>

            {/* =====================================================
                RIGHT - CHAI SHOWCASE
            ===================================================== */}
            <div className="flex items-center justify-center">

              <div className="relative flex h-[520px] w-full max-w-[560px] items-center justify-center">

                {/* Glow */}
                <div className="absolute h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

                {/* Cards Container */}
                <div className="relative h-[460px] w-[560px]">

                  {/* LEFT - Snacks */}
                  <div className="absolute left-5 top-16 z-10 h-[240px] w-[165px] -rotate-[15deg] overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:rotate-[-10deg]">
                    <Image
                      src="/snacks.png"
                      alt="Snacks"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CENTER - Kulhad Chai */}
                  <div className="absolute left-1/2 top-0 z-[100] h-[280px] w-[190px] -translate-x-1/2 overflow-hidden rounded-[24px] border-[6px] border-white bg-black shadow-2xl">
                    <video
                      src="/kulhadchai.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* RIGHT - Gupshup */}
                  <div className="absolute right-5 top-16 z-20 h-[240px] w-[165px] rotate-[15deg] overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:rotate-[10deg]">
                    <Image
                      src="/gupshup.png"
                      alt="Gupshup"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* =================================================
                      VISIT NOW + SHAYARI
                  ================================================= */}
                  <div className="absolute bottom-0 left-1/2 z-[110] flex -translate-x-1/2 flex-col items-center">

                    {/* Curved Visit Now */}
                    <div className="relative h-[75px] w-[230px]">
                      <svg
                        viewBox="0 0 230 75"
                        className="absolute inset-0 h-full w-full overflow-visible"
                      >
                        <defs>
                          <path
                            id="visitNowCurve"
                            d="M 20 50 Q 115 5 210 50"
                            fill="none"
                          />
                        </defs>

                        <text
                          fill="#f97316"
                          fontSize="24"
                          fontWeight="700"
                        >
                          <textPath
                            href="#visitNowCurve"
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            ✨ Visit Now ✨
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Shayari */}
                    <div className="mt-[-5px] w-[300px] text-center text-sm font-medium leading-6 tracking-wide text-white drop-shadow-md sm:text-base">
                      <p>One cup of chai,</p>
                      <p>Endless conversations,</p>
                      <p>Little moments,</p>
                      <p>Lasting memories. ☕</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OUR VALUES SECTION
      ========================================================= */}
      <OurValue />
    </>
  );
}