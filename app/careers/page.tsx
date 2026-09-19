"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Coffee,
  Heart,
  Users,
  Sparkles,
  Utensils,
  CheckCircle2,
  Upload,
} from "lucide-react";

const benefits = [
  {
    icon: Coffee,
    title: "Learn & Grow",
    text: "Learn new skills and discover how a growing cafe works.",
  },
  {
    icon: Users,
    title: "Friendly Team",
    text: "Work with people who believe in teamwork and good vibes.",
  },
  {
    icon: Sparkles,
    title: "Growing Brand",
    text: "Be part of Chai Chowk Cafe from the beginning of its journey.",
  },
  {
    icon: Heart,
    title: "Make an Impact",
    text: "Your ideas and efforts can directly help us grow.",
  },
];

const positions = [
  {
    icon: Coffee,
    title: "Cafe Staff",
    text: "Help us create a warm and welcoming experience for every guest.",
    tags: ["Customer Service", "Full Time"],
  },
  {
    icon: Utensils,
    title: "Kitchen Team",
    text: "Be part of preparing fresh, delicious food and beverages.",
    tags: ["Food & Kitchen", "Full Time"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Cafe Supervisor",
    text: "Help manage daily cafe operations and coordinate the team.",
    tags: ["Management", "Full Time"],
  },
];

const qualities = [
  "Passion for food & hospitality",
  "Friendly communication",
  "Positive attitude",
  "Teamwork",
  "Willingness to learn",
  "Customer-first mindset",
];

export default function CareersPage() {
  return (
    <main className="bg-[#fffaf3] text-[#35170e]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[75vh] overflow-hidden">

        <Image
          src="/moonlight-chai.png"
          alt="Chai Chowk Cafe career"
          fill
          priority
          className="object-cover"
        />

        <div className="relative flex min-h-[75vh] max-w-5xl items-center  py-20 lg:px-10">

          <div className="max-w-2xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-black/25 px-4 py-2 backdrop-blur-sm">
              <BriefcaseBusiness size={16} className="text-orange-300" />
              <span className="text-sm font-medium tracking-wide">
                JOIN OUR GROWING TEAM
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Grow With
              <span className="block text-orange-300">
                Chai Chowk Cafe
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              We are building a place where great food, good chai and
              great people come together. Join us and become a part of
              our growing journey.
            </p>

          </div>
        </div>

      </section>

      {/* =========================================================
          WHY JOIN US
      ========================================================= */}
      <section className="bg-[#f6eadc] px-6 py-16 sm:py-20 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="text-sm font-bold tracking-[0.25em] text-orange-600">
              WHY JOIN US?
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Grow Together. Create Together.
            </h2>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-4xl border border-[#35170e]/10 bg-blue-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#35170e] text-orange-300 transition group-hover:bg-[#f45112] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-serif text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#35170e]/60">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHO ARE WE LOOKING FOR
      ========================================================= */}
      <section className="px-6 py-20 lg:px-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left image */}
          <div className="relative">

            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem]">

              <Image
                src="/croud-image.png"
                alt="Chai Chowk Cafe team"
                width={700}
                height={650}
                className="h-[480px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#35170e]/50 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/40 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-sm font-medium">
                  Be part of our journey
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Learn • Grow • Create
                </p>
              </div>

            </div>

          </div>


          {/* Right content */}
          <div>

            <span className="text-sm font-bold tracking-[0.25em] text-orange-600">
              WHO ARE WE LOOKING FOR?
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              We&apos;re Looking For
              <span className="block text-orange-600">
                Great People
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#35170e]/65 sm:text-base">
              You don&apos;t need to know everything from day one.
              What matters to us is your attitude, your willingness
              to learn and your passion for creating a great experience
              for our guests.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {qualities.map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-orange-600"
                  />

                  <span className="text-sm font-medium">
                    {quality}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-8 rounded-2xl bg-[#35170e] p-5 text-white">

              <div className="flex items-start gap-4">

                <Coffee
                  size={25}
                  className="mt-1 shrink-0 text-orange-300"
                />

                <div>
                  <h3 className="font-serif text-lg font-bold">
                    Starting your journey with us?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Bring your energy, your ideas and your love for
                    hospitality. We&apos;ll take the journey from there.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OPEN POSITIONS
      ========================================================= */}
      <section
        id="positions"
        className="bg-[#35170e] px-6 py-20 text-white lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="text-sm font-bold tracking-[0.25em] text-orange-300">
              CAREER OPPORTUNITIES
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Current Open Positions
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">
              Explore opportunities to become part of the Chai Chowk
              Cafe family.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {positions.map((position) => {
              const Icon = position.icon;

              return (
                <div
                  key={position.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/60">
                      OPEN
                    </span>

                  </div>

                  <h3 className="mt-6 font-serif text-xl font-bold">
                    {position.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/60">
                    {position.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {position.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <a
                    href="#apply"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200"
                  >
                    Apply for this role
                    <ArrowRight size={16} />
                  </a>

                </div>
              );
            })}

          </div>


          {/* No suitable position */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-orange-300/15 bg-orange-300/5 p-6 text-center">

            <p className="font-serif text-lg font-bold">
              Don&apos;t see a suitable opening?
            </p>

            <p className="mt-2 text-sm text-white/60">
              We&apos;re always happy to hear from enthusiastic people
              who would love to be part of our journey.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}