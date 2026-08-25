"use client";

import { useEffect, useState } from "react";

const foods = [
    {
        name: "Chai",
        image: "/chai-kulhad.png",
        left: [
            {
                title: "Premium Chai Quality",
                text: "Fresh tea leaves, rich flavours and perfect brewing make every cup warm, fresh and memorable.",
            },
            {
                title: "Made With Care",
                text: "Every cup is prepared with attention to taste, freshness and the little details that matter.",
            },
            {
                title: "Feels Like Home",
                text: "A cozy place for quick chai breaks, long conversations and everyday moments.",
            },
        ],
        right: [
            {
                title: "Amazing Staff",
                text: "Friendly faces and warm service make every TeaHub visit feel welcoming.",
            },
            {
                title: "Cozy Ambience",
                text: "Comfortable seating and a relaxed atmosphere made for every mood.",
            },
            {
                title: "Fast Home Delivery",
                text: "Enjoy your favourite chai and snacks fresh at your doorstep.",
            },
        ],
    },

    {
        name: "Pizza",
        image: "/pizza.png",
        left: [
            {
                title: "Fresh Ingredients",
                text: "Fresh vegetables, quality cheese and carefully selected ingredients in every bite.",
            },
            {
                title: "Perfectly Baked",
                text: "A deliciously crisp base with a warm, cheesy topping made just right.",
            },
            {
                title: "Rich In Flavour",
                text: "Balanced flavours that make every slice satisfying and delicious.",
            },
        ],
        right: [
            {
                title: "Made To Share",
                text: "Perfect for sharing memorable moments with friends and family.",
            },
            {
                title: "Quality First",
                text: "We focus on quality ingredients and consistent taste in every pizza.",
            },
            {
                title: "Freshly Served",
                text: "Your pizza is prepared fresh so every bite reaches you hot and delicious.",
            },
        ],
    },

    {
        name: "snakes",
        image: "/snakes.png",
        left: [
            {
                title: "Thick & Creamy",
                text: "Smooth, creamy and delicious shakes made for every sweet craving.",
            },
            {
                title: "Fresh Flavours",
                text: "Rich flavours and quality ingredients come together in every glass.",
            },
            {
                title: "Perfectly Chilled",
                text: "Refreshing drinks prepared to give you the perfect cool break.",
            },
        ],
        right: [
            {
                title: "Something Sweet",
                text: "A delicious little treat for your afternoon breaks and evening cravings.",
            },
            {
                title: "Made For You",
                text: "Different flavours so everyone can find their favourite shake.",
            },
            {
                title: "Sip & Enjoy",
                text: "Pair your favourite shake with snacks and make your break even better.",
            },
        ],
    },

    {
        name: "wraps",
        image: "/wraps.png",
        left: [
            {
                title: "Fresh In Every Bite",
                text: "Soft wraps filled with fresh ingredients and delicious flavours.",
            },
            {
                title: "Perfectly Filled",
                text: "A satisfying combination of fillings, sauces and textures in every wrap.",
            },
            {
                title: "Quick & Delicious",
                text: "A convenient choice when you want something tasty and filling.",
            },
        ],
        right: [
            {
                title: "Great For Breaks",
                text: "Perfect for quick lunch breaks, evening snacks or a satisfying meal.",
            },
            {
                title: "Quality Ingredients",
                text: "We choose ingredients carefully to keep every bite fresh and flavourful.",
            },
            {
                title: "Easy To Enjoy",
                text: "Delicious, filling and convenient for enjoying anywhere.",
            },
        ],
    },

    {
        name: "Sandwich",
        image: "/sandwich.png",
        left: [
            {
                title: "Fresh Bread",
                text: "Freshly prepared sandwiches with delicious fillings and quality bread.",
            },
            {
                title: "Crunchy & Tasty",
                text: "A satisfying mix of textures and flavours in every bite.",
            },
            {
                title: "Made Fresh",
                text: "Prepared with care so you get a fresh and delicious experience.",
            },
        ],
        right: [
            {
                title: "Perfect Anytime",
                text: "Great for breakfast, evening snacks or a quick meal.",
            },
            {
                title: "Comfort Food",
                text: "Simple, delicious flavours that make every break better.",
            },
            {
                title: "Easy Choice",
                text: "When you want something quick, fresh and satisfying.",
            },
        ],
    },

    {
        name: "Mocktail & Mojito",
        image: "/mojito.png",
        left: [
            {
                title: "Fresh In Every Sip",
                text: "Refreshing flavours, fresh ingredients and perfectly chilled drinks.",
            },
            {
                title: "Bright Flavours",
                text: "Fruity and refreshing combinations made for every mood.",
            },
            {
                title: "Perfectly Chilled",
                text: "Cool, refreshing drinks that make every food experience better.",
            },
        ],
        right: [
            {
                title: "Refresh Your Mood",
                text: "Take a refreshing break with a delicious drink made just for you.",
            },
            {
                title: "Perfect Pairing",
                text: "Pair your favourite drink with snacks, pizza or sandwiches.",
            },
            {
                title: "Sip. Relax. Repeat.",
                text: "Good food, refreshing drinks and a vibe worth coming back to.",
            },
        ],
    },
];

export default function FoodShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeFood = foods[activeIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % foods.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-5 text-white sm:px-8 lg:px-12"
            style={{ backgroundImage: "url(/blur1.avif)" }}>

            {/* Heading */}
            <div className="mx-auto mb-9 max-w-4xl text-center">
               
                <h2 className="text-3xl text-orange-600 font-bold sm:text-4xl lg:text-5xl">
                    Endless Flavours.{" "}
                    <span className="text-orange-400">
                        Endless Moments.
                    </span>
                </h2>

                <p className="mx-auto mt-4  max-w-xl text-sm leading-4 text-black sm:text-base">
                    From your favourite chai to delicious food and refreshing drinks,
                    there is always something new to enjoy at TeaHub.
                </p>
            </div>

            {/* Main Showcase */}
           
      {/* Main Showcase */}
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[35px] border border-orange-900/50 bg-[#35170e] shadow-2xl lg:grid-cols-[1fr_1.15fr_1fr]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center gap-5 p-2 text-center sm:p-7 lg:p-6">

          {activeFood.left.map((item, index) => (
            <div key={item.title}>

              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-lg">
                {index === 0 ? "✦" : index === 1 ? "♥" : "☕"}
              </div>

              <h3 className="mb-2 text-lg font-bold text-orange-400">
                {item.title}
              </h3>

              <p className="text-sm leading-5 text-white/70">
                {item.text}
              </p>

            </div>
          ))}

        </div>

        {/* CENTER IMAGE */}
        <div className="relative min-h-[350px] overflow-hidden lg:min-h-[500px]">

          <img
            key={activeFood.image}
            src={activeFood.image}
            alt={activeFood.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

          {/* Food Name */}
          <div className="absolute inset-x-0 bottom-8 text-center">

            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-orange-300">
              TeaHub
            </p>

            <h3 className="text-3xl font-bold sm:text-4xl">
              {activeFood.name}
            </h3>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center gap-5 p-5 text-center sm:p-7 lg:p-8">

          {activeFood.right.map((item, index) => (
            <div key={item.title}>

              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-lg">
                {index === 0 ? "★" : index === 1 ? "✓" : "♡"}
              </div>

              <h3 className="mb-2 text-lg font-bold text-orange-400">
                {item.title}
              </h3>

              <p className="text-sm leading-5 text-white/70">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
            {/* Slide Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
                {foods.map((food, index) => (
                    <button
                        key={food.name}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                ? "w-8 bg-orange-400"
                                : "w-2.5 bg-white/30 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}