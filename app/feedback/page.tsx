
"use client";

import { useState } from "react";
import {
  MessageSquare,
  Send,
  Coffee,
  Utensils,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visitDate: "",
    liked: "",
    feedback: "",
    visitAgain: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        visitDate: "",
        liked: "",
        feedback: "",
        visitAgain: "",
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#35170e]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#35170e]">

        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 md:py-20">

          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/15 text-orange-300">
            <MessageSquare size={24} strokeWidth={1.7} />
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-300">
            Chai Chowk Cafe
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            We&apos;d Love to Hear From You
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/65">
            Your thoughts and suggestions help us make Chai Chowk Cafe
            even better.
          </p>

        </div>

        {/* Small curve */}
        <div className="absolute bottom-0 left-0 right-0 h-4 rounded-t-[50%] bg-[#fffaf5]" />

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="mx-auto max-w-4xl px-4 py-5 sm:px-6 md:py-7">

        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">


          {/* =================================================
              LEFT CARD
          ================================================= */}
          <div className="relative overflow-hidden rounded-[22px] bg-[#35170e] p-4 text-white sm:p-6">

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative">

              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/15 text-orange-300">
                <Coffee size={21} strokeWidth={1.7} />
              </div>

              <h2 className="text-xl font-semibold">
                Your feedback matters.
              </h2>

              <p className="mt-3 text-xs leading-6 text-white/60">
                Every visit is special to us. Tell us what you enjoyed and
                where we can improve.
              </p>


              {/* Feature 1 */}
              <div className="mt-7 flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-300">
                  <Utensils size={15} />
                </div>

                <div>
                  <h3 className="text-xs font-medium">
                    Food & Drinks
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Share your thoughts about our food and beverages.
                  </p>
                </div>

              </div>


              {/* Feature 2 */}
              <div className="mt-5 flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-300">
                  <Heart size={15} />
                </div>

                <div>
                  <h3 className="text-xs font-medium">
                    Your Experience
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Tell us what made your visit memorable.
                  </p>
                </div>

              </div>


              {/* Feature 3 */}
              <div className="mt-5 flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-300">
                  <Sparkles size={15} />
                </div>

                <div>
                  <h3 className="text-xs font-medium">
                    Help Us Improve
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Your suggestions help us serve you better.
                  </p>
                </div>

              </div>


              {/* Quote */}
              <div className="mt-7 border-t border-white/10 pt-5">

                <p className="text-xs italic text-orange-200/70">
                  &quot;Come for chai, stay for the memories.&quot;
                </p>

              </div>

            </div>
          </div>


          {/* =================================================
              RIGHT FORM
          ================================================= */}
          <div className="rounded-[24px] border border-orange-100 bg-white p-5 shadow-[0_12px_35px_rgba(53,23,14,0.06)] sm:p-6">

            {!submitted ? (

              <form onSubmit={handleSubmit}>

                {/* Form heading */}
                <div className="mb-5">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Share Your Thoughts
                  </p>

                  <h2 className="mt-1.5 text-xl font-semibold">
                    Tell us about your visit
                  </h2>

                  <p className="mt-1.5 text-xs leading-5 text-[#35170e]/50">
                    We appreciate you taking a moment to share your
                    experience with us.
                  </p>

                </div>


                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-orange-100 bg-[#fffaf5] px-3 py-2.5 text-xs outline-none transition placeholder:text-[#35170e]/25 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium"
                    >
                      Email Address
                      <span className="ml-1 text-[10px] font-normal text-[#35170e]/35">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-orange-100 bg-[#fffaf5] px-3 py-2.5 text-xs outline-none transition placeholder:text-[#35170e]/25 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>


                {/* Visit date */}
                <div className="mt-4">

                  <label
                    htmlFor="visitDate"
                    className="mb-1.5 block text-xs font-medium"
                  >
                    When did you visit us?
                    <span className="ml-1 text-[10px] font-normal text-[#35170e]/35">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="visitDate"
                    name="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-orange-100 bg-[#fffaf5] px-3 py-2.5 text-xs outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                {/* Liked */}
                <div className="mt-4">

                  <label
                    htmlFor="liked"
                    className="mb-1.5 block text-xs font-medium"
                  >
                    What did you like the most?
                  </label>

                  <select
                    id="liked"
                    name="liked"
                    value={formData.liked}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-orange-100 bg-[#fffaf5] px-3 py-2.5 text-xs outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option value="Food">
                      🍕 Food
                    </option>

                    <option value="Chai & Beverages">
                      ☕ Chai & Beverages
                    </option>

                    <option value="Ambience">
                      🏠 Ambience
                    </option>

                    <option value="Staff">
                      👨‍🍳 Staff
                    </option>

                    <option value="Service">
                      ✨ Service
                    </option>

                    <option value="Cleanliness">
                      🧹 Cleanliness
                    </option>

                  </select>

                </div>


                {/* Feedback */}
                <div className="mt-4">

                  <label
                    htmlFor="feedback"
                    className="mb-1.5 block text-xs font-medium"
                  >
                    Your Feedback
                  </label>

                  <textarea
                    id="feedback"
                    name="feedback"
                    required
                    rows={4}
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Tell us about your experience or suggestions..."
                    className="w-full resize-none rounded-lg border border-orange-100 bg-[#fffaf5] px-3 py-2.5 text-xs leading-5 outline-none transition placeholder:text-[#35170e]/25 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                {/* Visit Again */}
                <div className="mt-4">

                  <p className="mb-2 text-xs font-medium">
                    Would you visit Chai Chowk Cafe again?
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {[
                      {
                        value: "Yes",
                        label: "Yes ❤️",
                      },
                      {
                        value: "Maybe",
                        label: "Maybe",
                      },
                      {
                        value: "No",
                        label: "Not sure",
                      },
                    ].map((option) => (

                      <label
                        key={option.value}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-xs transition ${
                          formData.visitAgain === option.value
                            ? "border-orange-400 bg-orange-50 text-orange-700"
                            : "border-orange-100 bg-white text-[#35170e]/60 hover:border-orange-300"
                        }`}
                      >

                        <input
                          type="radio"
                          name="visitAgain"
                          value={option.value}
                          checked={formData.visitAgain === option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />

                        {option.label}

                      </label>

                    ))}

                  </div>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#35170e] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#4a2114] hover:shadow-md"
                >
                  Send Feedback
                  <Send size={15} />
                </button>

                <p className="mt-2 text-center text-[10px] text-[#35170e]/35">
                  Thank you for helping us make Chai Chowk Cafe better.
                </p>

              </form>

            ) : (

              /* =================================================
                 SUCCESS MESSAGE
              ================================================= */
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2
                    size={34}
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Thank You
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Feedback Received!
                </h2>

                <p className="mt-3 max-w-sm text-xs leading-6 text-[#35170e]/50">
                  We truly appreciate you taking the time to share your
                  experience with Chai Chowk Cafe.
                </p>

                <div className="mt-5 rounded-xl bg-[#fffaf5] px-5 py-3">
                  <p className="text-xs italic text-[#35170e]/65">
                    &quot;Every feedback helps us serve you better.&quot;
                  </p>
                </div>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM MESSAGE
      ===================================================== */}
      <section className="px-4 pb-10 sm:px-6">

        <div className="mx-auto max-w-4xl rounded-[24px] border border-orange-100 bg-white px-5 py-6 text-center shadow-sm">

          <Coffee
            className="mx-auto text-orange-500"
            size={21}
            strokeWidth={1.7}
          />

          <h2 className="mt-2 text-lg font-semibold">
            Thank you for being a part of Chai Chowk Cafe.
          </h2>

          <p className="mx-auto mt-1.5 max-w-lg text-xs leading-5 text-[#35170e]/45">
            Your support and feedback inspire us to keep creating delicious
            food, refreshing drinks and memorable moments.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}
      <div className="border-t border-orange-100 bg-white">

        <div className="mx-auto max-w-4xl px-4 py-4 text-center">

          <p className="text-[10px] text-[#35170e]/40">
            © {new Date().getFullYear()} Chai Chowk Cafe. All rights reserved.
          </p>

        </div>

      </div>

    </main>
  );
}

