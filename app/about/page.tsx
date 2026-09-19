
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import OurValue from "./page2";

export default function Story() {

  // =========================================================
  // AOS INITIALIZATION
  // =========================================================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* =========================================================
          STORY / CHAI SECTION
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background Image */}
        <Image
          src="/res-cafe.png"
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
            <div
              data-aos="fade-right"
              className="text-white"
            >
              <div className="max-w-xl">

                {/* Small Label */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 sm:text-sm"
                >
                  More Than Chai, It&apos;s a Feeling
                </p>

                {/* Heading */}
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-4xl font-extrabold leading-tight sm:text-5xl"
                >
                  A Place Made for
                  <span className="mt-1 block text-orange-400">
                    Chai &amp; Memories
                  </span>
                </h1>

                {/* Paragraph */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base"
                >
                  Chai Chowk Cafe is where great chai, delicious food, and good
                  moments come together. From quick chai breaks to long
                  conversations, every visit is made to feel warm, welcoming,
                  and a little like home.
                </p>

                {/* Button */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="mt-7"
                >
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
            <div
              data-aos="fade-left"
              className="flex items-center justify-center px-2 sm:px-4"
            >

              <div className="relative flex h-[400px] w-full max-w-[560px] items-center justify-center sm:h-[520px]">

                {/* Glow */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="absolute h-52 w-52 rounded-full bg-orange-500/20 blur-3xl sm:h-72 sm:w-72"
                />

                {/* Cards Container */}
                <div className="relative h-[350px] w-full max-w-[360px] sm:h-[460px] sm:max-w-[560px]">

                  {/* =================================================
                      LEFT - SNACKS
                  ================================================= */}
                  <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="
                      absolute left-0 top-12 z-10
                      h-[170px] w-[115px]
                      -rotate-[15deg]
                      overflow-hidden rounded-[18px]
                      border-[5px] border-white
                      bg-white shadow-2xl
                      transition duration-500
                      hover:-translate-y-2 hover:rotate-[-10deg]

                      sm:left-5 sm:top-16
                      sm:h-[240px] sm:w-[165px]
                      sm:rounded-[24px]
                      sm:border-[6px]
                    "
                  >
                    <Image
                      src="/snacks.png"
                      alt="Snacks"
                      fill
                      className="object-cover"
                    />
                  </div>


                  {/* =================================================
                      CENTER - KULHAD CHAI
                  ================================================= */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="
                      absolute left-1/2 top-0 z-[100]
                      h-[205px] w-[140px]
                      -translate-x-1/2
                      overflow-hidden rounded-[18px]
                      border-[5px] border-white
                      bg-black shadow-2xl

                      sm:h-[280px] sm:w-[190px]
                      sm:rounded-[24px]
                      sm:border-[6px]
                    "
                  >
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


                  {/* =================================================
                      RIGHT - GUPSHUP
                  ================================================= */}
                  <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="
                      absolute right-0 top-12 z-20
                      h-[170px] w-[115px]
                      rotate-[15deg]
                      overflow-hidden rounded-[18px]
                      border-[5px] border-white
                      bg-white shadow-2xl
                      transition duration-500
                      hover:-translate-y-2 hover:rotate-[10deg]

                      sm:right-5 sm:top-16
                      sm:h-[240px] sm:w-[165px]
                      sm:rounded-[24px]
                      sm:border-[6px]
                    "
                  >
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
                  <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="
                      absolute bottom-0 left-1/2 z-[110]
                      flex -translate-x-1/2
                      flex-col items-center
                    "
                  >

                    {/* Curved Visit Now */}
                    <div className="relative h-[55px] w-[180px] sm:h-[75px] sm:w-[230px]">

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
                    <div
                      className="
                        mt-[-5px]
                        w-[250px]
                        text-center
                        text-xs
                        font-medium
                        leading-5
                        tracking-wide
                        text-white
                        drop-shadow-md

                        sm:w-[300px]
                        sm:text-base
                        sm:leading-6
                      "
                    >
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
