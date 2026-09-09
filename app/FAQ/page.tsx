
"use client";

import { useState } from "react";
import { Plus, Minus, Coffee, UtensilsCrossed } from "lucide-react";

const cafeFAQs = [
  {
    question: "What are the opening and closing hours of Chai Chowk Cafe?",
    answer:
      "Our cafe is open throughout the week. Please check our Contact page for the latest opening and closing hours before visiting.",
  },
  {
    question: "Where is Chai Chowk Cafe located?",
    answer:
      "Chai Chowk Cafe is located at our cafe location. You can visit our Contact page to find the exact address and location details.",
  },
  {
    question: "Is seating available for families and groups?",
    answer:
      "Yes! We have comfortable seating for families, friends, and small groups where you can relax, enjoy delicious food, and spend quality time together.",
  },
  {
    question: "Can I reserve a table in advance?",
    answer:
      "Table reservations may be available depending on availability. We recommend contacting our cafe team in advance for reservation details.",
  },
  {
    question: "Can I celebrate birthdays or special occasions at the cafe?",
    answer:
      "Absolutely! You can celebrate birthdays and special occasions with your loved ones at Chai Chowk Cafe. Please contact us in advance for special arrangements.",
  },
];

const foodFAQs = [
  {
    question: "What food and beverages are available at Chai Chowk Cafe?",
    answer:
      "We offer a delicious variety of chai, coffee, shakes, pizzas, burgers, pasta, sandwiches, wraps, momos, snacks, mojitos, and refreshing beverages.",
  },
  {
    question: "What different varieties of chai do you offer?",
    answer:
      "We serve a variety of flavorful chai options, prepared with care to give you a comforting and refreshing experience with every cup.",
  },
  {
    question: "Do you offer vegetarian food options?",
    answer:
      "Yes! We offer a wide selection of vegetarian snacks, pizzas, burgers, pasta, sandwiches, wraps, momos, and other delicious cafe favorites.",
  },
  {
    question: "Can I customize my food or beverages?",
    answer:
      "Some food and beverage items can be customized depending on availability. Please speak with our cafe team about your preferences.",
  },
  {
    question: "Do you serve snacks, pizzas, burgers, pasta and shakes?",
    answer:
      "Yes! Our menu includes snacks, pizzas, burgers, pasta, shakes, sandwiches, wraps, and many other delicious cafe favorites.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b border-[#eee3dc] last:border-0 transition-colors duration-300 ${
        open ? "bg-[#fffaf6]" : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-[#c87545] text-white"
              : "bg-[#fff1e8] text-[#b46138]"
          }`}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>

        <span className="flex-1 text-[15px] font-semibold leading-6 text-[#43281e] md:text-[17px]">
          {question}
        </span>

        <span
          className={`hidden text-xs font-medium md:block ${
            open ? "text-[#c87545]" : "text-[#a99388]"
          }`}
        >
          {open ? "CLOSE" : "VIEW"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-6 pl-[4.75rem] pr-8 md:px-7 md:pb-7 md:pl-[5.75rem]">
          <p className="max-w-3xl text-sm leading-7 text-[#806b61] md:text-[15px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#fffaf7]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#fff3ea] px-5 py-10 md:py-10">

        {/* Decorative circles */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#e6a47d]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f0c4a8]/25 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#bd693d] shadow-sm">
            <Coffee size={26} />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#bd693d]">
            Chai Chowk Cafe
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#3f261d] md:text-6xl">
            Frequently Asked
            <span className="mt-2 block text-[#c87545]">
              Questions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#806b61] md:text-base">
            Find answers to the most common questions about our cafe,
            food, beverages, seating and special occasions.
          </p>

        </div>
      </section>

      {/* ================= FAQ CONTENT ================= */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">

          {/* ================= CAFE FAQ ================= */}
          <div className="mb-20">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#bd693d]">
                <Coffee size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c87545]">
                  Cafe
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#42271e] md:text-3xl">
                  About Our Cafe
                </h2>
              </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-[#eee2da] bg-white shadow-[0_10px_35px_rgba(100,60,40,0.06)]">
              {cafeFAQs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

          </div>

          {/* ================= FOOD FAQ ================= */}
          <div>

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#bd693d]">
                <UtensilsCrossed size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c87545]">
                  Food & Drinks
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#42271e] md:text-3xl">
                  Food & Beverages
                </h2>
              </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-[#eee2da] bg-white shadow-[0_10px_35px_rgba(100,60,40,0.06)]">
              {foodFAQs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

          </div>

          {/* ================= CONTACT CARD ================= */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-[#f0ddd2] bg-[#fff0e7] px-6 py-10 text-center md:px-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#c87545] shadow-sm">
              <Coffee size={24} />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#42271e] md:text-3xl">
              Still have a question?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#806b61]">
              We would love to hear from you. Get in touch with
              Chai Chowk Cafe for any additional questions or enquiries.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-[#c87545] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#ad6038] hover:shadow-lg"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

