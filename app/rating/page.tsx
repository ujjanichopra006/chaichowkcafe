"use client";

import { Star, Quote, Heart } from "lucide-react";
import { useState, useEffect } from "react";
const reviews = [
  {
    name: "Rajat Narula",
    text: "The staff are really helpful and understanding. The food quantity and quality both are amazing. Had a really good time there. One of the best places in the area to spend time with your friends and family.",
  },
  {
    name: "Sahil Chopra",
    text: "Absolutely loved this place! The vibe is cozy, the food tastes amazing, and the staff is super friendly. A perfect spot to chill with friends or work peacefully. Must visit!",
  },
  {
    name: "Atikaye",
    text: "Delicious food with rich flavors in every bite. The service was warm, quick, and very professional. A place that truly makes you feel satisfied and welcomed.",
  },
  {
    name: "GOURAV GAUR",
    text: "Delicious food 😋 Exact location. Gonna visit again and again. Thanks for the hospitality!",
  },
  {
    name: "SACHDEVA COURIER",
    text: "The food was absolutely delicious - every dish was perfectly prepared. This cafe is huge and the ambience is vibrant.",
  },
  {
    name: "Jatin Chawla",
    text: "The café has a pleasant vibe — cosy seating, good lighting and comfortable interiors. It's a good place to hang out with friends and spend time with family.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5, 6].map((star) => (
        <Star
          key={star}
          size={14}
          className="fill-orange-400 text-orange-400"
        />
      ))}
    </div>
  );
}

export default function Rating() {
 const [reviewIndex, setReviewIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setReviewIndex((prev) => {
      if (prev === 0) {
        return 3;
      }

      return 0;
    });
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <main className="min-h-screen bg-[#fffaf4]">

      {/* ================= GALLERY ================= */}
      <section className="px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[3px] text-orange-500">
              Our Gallery
            </p>

            <h1 className="font-serif text-3xl font-bold text-[#3b2417] md:text-4xl">
              A Glimpse of{" "}
              <span className="text-orange-500">Chai Chowk Cafe</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
              Good food, cozy corners and unforgettable moments.
              Take a look at the world of Chai Chowk Cafe.
            </p>
          </div>
        </div>
      </section>


      {/* ================= REVIEWS ================= */}
      <section className="relative overflow-hidden bg-[#3a2418] px-4 py-14 md:px-6 md:py-16">

        {/* Decorative circles */}
        <div className="absolute -left-16 top-6 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mx-auto mb-4 max-w-2xl text-center md:mb-7">

            <div className="mb-3 flex justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/15">
                <Heart
                  size={20}
                  className="fill-orange-400 text-orange-400"
                />
              </div>
            </div>

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[3px] text-orange-400">
              Guest Reviews
            </p>

            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Loved by Our{" "}
              <span className="text-orange-400">Guests</span>
            </h2>

            <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-white md:text-sm">
              From delicious food to cozy vibes, see what our guests
              have to say about their Chai Chowk Cafe experience.
            </p>

          </div>
          
        {/* Review Cards */}
<div className="overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${reviewIndex * (100 / 3)}%)`,
    }}
  >
    {reviews.map((review) => (
      <div
        key={review.name}
        className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
      >
        <div className="group relative h-full rounded-2xl border border-white/10 bg-[#fffaf4] p-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

          {/* Quote Icon */}
          <div className="absolute right-4 top-4">
            <Quote
              size={26}
              className="text-orange-200 transition-all duration-300 group-hover:text-orange-300"
            />
          </div>

          {/* Stars */}
          <div className="mb-3">
            <Stars />
          </div>

          {/* Review */}
          <p className="min-h-[110px] pr-2 text-[13px] leading-6 text-gray-600">
            “{review.text}”
          </p>

          {/* Divider */}
          <div className="my-3 h-px bg-orange-100" />

          {/* User */}
          <div className="flex items-center gap-2.5">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 font-serif text-sm font-bold text-orange-600">
              {review.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#3a2418]">
                {review.name}
              </h3>

              <p className="text-[11px] text-gray-500">
                Verified Customer
              </p>
            </div>

          </div>

        </div>
      </div>
    ))}
  </div>
</div>
</div>
</section>
</main>
  );
}