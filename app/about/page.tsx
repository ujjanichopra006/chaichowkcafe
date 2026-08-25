"use client";

import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section className="relative min-h-screen overflow-hidden">

  {/* Background Image */}
  <Image
    src="/restruent image.png"
    alt="restruent"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
    <div className="max-w-3xl text-white">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
        Where It All Started
      </p>

      <h1 className="text-4xl font-extrabold sm:text-6xl">
        A Taste That
        <span className="block text-orange-400">
          Feels Like Home
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
        Chai Chowk Cafe began with a simple idea — bring people together
        over a warm cup of chai, delicious food, and moments worth sharing.
      </p>

      <button className="mt-8 rounded-full bg-orange-600 px-8 py-3.5 font-bold text-white transition hover:bg-orange-700">
        Explore Our Menu →
      </button>

    </div>
  </div>

</section>
  );
}