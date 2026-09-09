"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  "OUTLETS PHOTOS",
  "FOOD PHOTOGRAPHY",
  "CUSTOMER RATING",
];

const gallery = [
  {
    image: "/chai-kulhad.png",
    title: "Kulhad Chai",
    category: "FOOD PHOTOGRAPHY",
    size: "big",
  },
  {
    image: "/spring-roll.png",
    title: " crispy spring roll",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/chaap-pizza.png",
    title: " crispy pizza bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/cafe-main.jpeg",
    title: "Feels Like Home",
    category: "OUTLETS PHOTOS",
    size: "tall",
  },
  {
    image: "/goldencorn-pizza.png",
    title: "crispy pizza bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },

  {
    image: "/mojito.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "tall",
  },
  {
    image: "/cafe-inside.jpeg",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "small",
  },
  {
    image: "/khullad-pizza.png",
    title: " crispy pizza bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/momos.png",
    title: "Snack. Sip. Repeat.",
    category: "FOOD PHOTOGRAPHY",
    size: "wide",
  },
  {
    image: "/mixsouce-pasta.png",
    title: "Snack. Sip. Repeat.",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/chocolate-shake.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "tall",
  },
  {
    image: "/cold-coffee.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "tall",
  },
  {
    image: "/cheesy-burst-pizza.png",
    title: " crispy pizza bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/mango-shake.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "tall",
  },

  {
    image: "/mushroom-pizza.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },

  {
    image: "/cold-sandwich.png",
    title: "Sip Something Refreshing",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/elaichi-chai.png",
    title: "Chai & Conversations",
    category: "FOOD PHOTOGRAPHY",
    size: "big",
  },
  {
    image: "/margherita-pizza.png",
    title: " crispy pizza bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/c3lodded-sandwich.png",
    title: " crispy sandwich bite",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/cafeinside-5.jpeg",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "big",
  },
  {
    image: "/gurh-chai.png",
    title: "The Gurh Chai",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },

  {
    image: "/cafeinside-3.jpeg",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "small",
  },
  {
    image: "/cafeinside-2.jpeg",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "big",
  },

  {
    image: "/adrac-chai.png",
    title: "The Adrac Chai",
    category: "FOOD PHOTOGRAPHY",
    size: "wide",
  },

  {
    image: "/kesar-chai.png",
    title: "The Kesar Chai",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/cafeinside-6.png",
    title: "The chai chowk vibe",
    category: "OUTLETS PHOTOS",
    size: "tall",
  },
   {
    image: "/cafeinside-4.jpeg",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "tall",
  },
  {
    image: "/cafeinside-7.png",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "big",
  },
  {
    image: "/rose-chai.png",
    title: "The Rose Chai",
    category: "FOOD PHOTOGRAPHY",
    size: "wide",
  },
  {
    image: "/black-coffe.png",
    title: "The Black Coffee",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/hot-coffee.png",
    title: "The Hot Coffee",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/paneerchease-burger.png",
    title: "The Paneer Cheese Burger",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },

  {
    image: "/paneer-wrap.png",
    title: "The Paneer Wrap",
    category: "FOOD PHOTOGRAPHY",
    size: "small",
  },
  {
    image: "/veg-maggi.png",
    title: "The Veg Maggi",
    category: "FOOD PHOTOGRAPHY",
    size: "wide",
  },
  {
    image: "/cafeinside-8.png",
    title: "The Chai Chowk Vibe",
    category: "OUTLETS PHOTOS",
    size: "big",
  },
 
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative px-6 pb-10 pt-12 md:pb-10 md:pt-20">

        {/* Decorative circles */}

        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-orange-200/30 blur-3xl" />

        <div className="absolute right-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">

          {/* Small label */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-5  text-sm font-semibold text-orange-700 shadow-sm backdrop-blur">

            <Sparkles size={15} />

            A GLIMPSE OF OUR WORLD

          </div>

          {/* Main Heading */}

          <h1 className="text-5xl font-black tracking-tight text-[#211915] sm:text-6xl md:text-8xl">

            Our{" "}

            <span className="relative inline-block text-orange-600">

              Gallery

            </span>

          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">

            From steaming kulhad chai to delicious bites,
            cozy corners and unforgettable moments —
            here's a little glimpse of the world we love creating.

          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORY BUTTONS
      ===================================================== */}

      <section className="relative z-20 px-5 pb-14">

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">

         {categories.map((category) =>
         category === "CUSTOMER RATING" ? (
    <Link
      key={category}
      href="/rating"
      className="rounded-full border border-orange-100 bg-white px-7 py-3 text-sm font-semibold text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:text-orange-600 hover:shadow-md"
    >
      CUSTOMER RATING
    </Link>
  ) : (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
        activeCategory === category
          ? "scale-105 bg-[#2b211c] text-white shadow-xl"
          : "border border-orange-100 bg-white text-gray-600 shadow-sm hover:-translate-y-1 hover:border-orange-300 hover:text-orange-600 hover:shadow-md"
      }`}
    >
      {category}
    </button>
  )
)}
        </div>

      </section>


      {/* =====================================================
          GALLERY GRID
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:px-8">

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredGallery.map((item, index) => {

            let sizeClass = "";

            if (item.size === "big") {
              sizeClass =
                "sm:col-span-2 sm:row-span-2";
            }

            if (item.size === "wide") {
              sizeClass =
                "sm:col-span-2";
            }

            if (item.size === "tall") {
              sizeClass =
                "sm:row-span-2";
            }

            return (

              <div
                key={item.image}
                className={`group relative overflow-hidden rounded-[30px] bg-gray-200 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${sizeClass}`}
              >

                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 4}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />


                {/* DARK GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />


                {/* TOP CATEGORY */}

                <div className="absolute left-5 top-5">

                  <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">

                    {item.category}

                  </span>

                </div>


              </div>

            );

          })}

        </div>

      </section>

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE */}

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl transition hover:scale-110"
            aria-label="Close image"
          >

            <X size={24} />

          </button>


          {/* IMAGE */}

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={selectedImage}
              alt="Gallery preview"
              fill
              className="object-contain"
            />

          </div>

        </div>

      )}

    </main>
  );
}