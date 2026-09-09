"use client";

import Link from "next/link";
export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen w-full overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/chai-vedio-2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* Content */}
                <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20 text-center text-white">
                    <div className="max-w-4xl">

                        {/* Main Heading */}
                        <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Feels Like Chai, 
                            <span className="text-orange-400">
                                 Feels Like Home.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mb-5 max-w-2xl text-sm leading-3 text-white/90 sm:text-base">
                            Step into <span className="font-semibold text-orange-300">Chaichowkcafe</span>{" "}
                            for kadak chai, delicious snacks, and moments worth sharing.
                        </p>

                        <p className="mx-auto mb-4 max-w-2xl text-sm leading-3 text-white/80 sm:text-base">
                            From classic kulhad chai to crispy bites, every flavour is made
                            to bring people together.
                        </p>

                        <p className="mx-auto mb-4 max-w-2xl text-sm leading-3 text-white/80 sm:text-base">
                            A warm place for quick breaks, long conversations, and everyday
                            cravings.
                        </p>

                        <p className="mx-auto mb-7 max-w-2xl text-sm leading-3 text-white/80 sm:text-base">
                            We believe every cup of chai should feel fresh, comforting, and
                            memorable.
                        </p>

                        {/* Tagline */}
                        <h2 className="mb-10 text-lg font-bold tracking-wide text-orange-300 sm:text-xl">
                            Sip. Snack. Connect. Repeat.
                        </h2>

                        <Link href="#"
                            className="inline-flex item-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-800">
                            View Menu
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
