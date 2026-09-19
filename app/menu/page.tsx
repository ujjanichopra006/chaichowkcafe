"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Search,
  Coffee,
  Pizza,
  Sandwich,
  Soup,
  CakeSlice,
  GlassWater,
  ChevronRight,
  Star,
  Utensils,
} from "lucide-react";

type FoodItem = {
  name: string;
  description?: string;
  price: string;
  image: string;
};

type Category = {
  name: string;
  icon: React.ReactNode;
  items: FoodItem[];
};

const categories: Category[] = [
  {
    name: "Chai & Tea",
    icon: <Coffee size={20} />,
    items: [
      {
        name: "Adrak Chai",
        description: "Perfect blend of ginger & tea",
        price: "₹20 / ₹30 / ₹50",
        image: "/adrac-chai.png",
      },
      {
        name: "Rose Chai",
        description: "Fresh & soothing rose flavour",
        price: "₹25 / ₹40 / ₹60",
        image: "/rose-chai.png",
      },
      {
        name: "Elaichi Chai",
        description: "Refreshing cardamom flavour",
        price: "₹25 / ₹40 / ₹60",
        image: "/elaichi-chai.png",
      },
      {
        name: "Desi Masala Chai",
        description: "Traditional masala chai",
        price: "₹30 / ₹50 / ₹65",
        image: "/masala-chai.png",
      },
      {
        name: "Kesar Chai",
        description: "Royal kesar flavour",
        price: "₹30 / ₹50 / ₹65",
        image: "/kesar-chai.png",
      },
      {
        name: "Gurh Chai",
        description: "Sweet jaggery infused chai",
        price: "₹30 / ₹50 / ₹65",
        image: "/gurh-chai.png",
      },
      {
        name: "Adrak & Elaichi Chai",
        description: "Ginger with cardamom",
        price: "₹30 / ₹50 / ₹65",
        image: "/elaichi-chai.png",
      },
      {
        name: "Gurh + Elaichi Chai",
        description: "Jaggery & cardamom blend",
        price: "₹30 / ₹50 / ₹65",
        image: "/gurh-chai.png",
      },
      {
        name: "Green Tea",
        description: "Light and refreshing",
        price: "₹40",
        image: "/green-tea.png",
      },
    ],
  },

  {
    name: "Coffee",
    icon: <Coffee size={20} />,
    items: [
      {
        name: "Black Coffee",
        description: "Strong classic coffee",
        price: "₹30",
        image: "/black-coffee.png",
      },
      {
        name: "Hot Coffee",
        description: "Smooth & comforting",
        price: "₹50",
        image: "/hot-coffee.png",
      },
      {
        name: "Extra Strong Hot Coffee",
        description: "For true coffee lovers",
        price: "₹60",
        image: "/strong-coffee.png",
      },
      {
        name: "Classic Cold Coffee",
        description: "Chilled creamy coffee",
        price: "₹80",
        image: "/cold-coffee.png",
      },
      {
        name: "Cold Coffee with Ice Cream",
        description: "Cold coffee topped with ice cream",
        price: "₹100",
        image: "/coldcoffeeicecrame.png",
      },
      {
        name: "Extra Strong Cold Coffee",
        description: "Bold chilled coffee",
        price: "₹100",
        image: "/strongcoldcoffee.png",
      },
      {
        name: "Extra Strong Cold Coffee with Ice Cream",
        description: "Strong coffee with creamy ice cream",
        price: "₹120",
        image: "/coldcoffeeicecrame.png",
      },
    ],
  },

  {
    name: "Shakes & Mocktails",
    icon: <GlassWater size={20} />,
    items: [
      {
        name: "Butterscotch Shake",
        description: "Rich & creamy",
        price: "₹70",
        image: "/butterscotch.png",
      },
      {
        name: "Strawberry Shake",
        description: "Fresh strawberry flavour",
        price: "₹70",
        image: "/strawberry.png",
      },
      {
        name: "Chocolate Shake",
        description: "Chocolatey & creamy",
        price: "₹80",
        image: "/chocolate-shake.png",
      },
      {
        name: "Banana Shake",
        description: "Fresh banana shake",
        price: "₹80",
        image: "/banana.png",
      },
      {
        name: "Oreo Shake",
        description: "Loaded with Oreo",
        price: "₹100",
        image: "/oreo.png",
      },
      {
        name: "Brownie Shake",
        description: "Brownie loaded shake",
        price: "₹120",
        image: "/brownie.png",
      },
      {
        name: "Fresh Lime Soda",
        description: "Fresh & fizzy",
        price: "₹60",
        image: "/freshlimesoda.png",
      },
      {
        name: "Mint Mojito",
        description: "Cool minty refreshment",
        price: "₹70",
        image: "/freshlimesoda.png",
      },
      {
        name: "Paan Mojito",
        description: "Unique paan flavour",
        price: "₹80",
        image: "/paan.png",
      },
      {
        name: "Blue Curacao",
        description: "Refreshing blue drink",
        price: "₹80",
        image: "/bluecuracao.png",
      },
      {
        name: "Ice Tea",
        description: "Chilled refreshing tea",
        price: "₹80",
        image: "/ice-tea.jpg",
      },
    ],
  },

  {
    name: "Burgers",
    icon: <Sandwich size={20} />,
    items: [
      {
        name: "Junior Burger",
        description: "Aloo tikki, onion & tomato",
        price: "₹40",
        image: "/junior-burger.jpg",
      },
      {
        name: "Delux Burger",
        description: "Herb aloo patty & cheese dip",
        price: "₹50",
        image: "/delux-burger.jpg",
      },
      {
        name: "Paneer Burger",
        description: "Spicy paneer patty",
        price: "₹70",
        image: "/paneer-burger.jpg",
      },
      {
        name: "Paneer Cheese Burger",
        description: "Paneer patty with cheese",
        price: "₹90",
        image: "/paneerchease-burger.png",
      },
      {
        name: "C3 Veg Loaded Burger",
        description: "Loaded with cheese & veggies",
        price: "₹100",
        image: "/c3-veg-lodded-burger.jpg",
      },
    ],
  },

  {
    name: "Wraps & Rolls",
    icon: <Sandwich size={20} />,
    items: [
      {
        name: "Green Veg Wrap",
        description: "Veggies, corn, mushroom & cheese",
        price: "₹60",
        image: "/green-veg-wrap.jpg",
      },
      {
        name: "Aloo Tikki Wrap",
        description: "Aloo patty with fresh veggies",
        price: "₹70",
        image: "/allu-tikki-wrap.jpg",
      },
      {
        name: "Mexican Wrap",
        description: "Capsicum, cabbage & herb patty",
        price: "₹80",
        image: "/mexican-wrap.png",
      },
      {
        name: "Paneer Wrap",
        description: "Spicy paneer filling",
        price: "₹100",
        image: "/paneer-wrap.png",
      },
      {
        name: "Paneer Cheese Wrap",
        description: "Paneer, veggies & cheese",
        price: "₹120",
        image: "/paneer-chese-wrap.jpg",
      },
      {
        name: "Veg Roti Roll",
        description: "Simple veg roti roll",
        price: "₹130",
        image: "/veg-roti-roll.jpg",
      },
      {
        name: "Paneer Roti Roll",
        description: "Paneer filled roti roll",
        price: "₹150",
        image: "/paneer-roti-roll.jpg",
      },
    ],
  },

  {
    name: "Sandwiches",
    icon: <Sandwich size={20} />,
    items: [
      {
        name: "Cold Sandwich",
        description: "Fresh & creamy",
        price: "₹40",
        image: "/cold-sandwich.png",
      },
      {
        name: "Veg Grilled Sandwich",
        description: "Grilled with fresh vegetables",
        price: "₹60",
        image: "/veg-grilled-sandwich.jpg",
      },
      {
        name: "Mushroom Corn Grilled Sandwich",
        description: "Mushroom & corn filling",
        price: "₹70",
        image: "/mushroom-sandwich.jpg",
      },
      {
        name: "Paneer Tikka Sandwich",
        description: "Paneer tikka grilled sandwich",
        price: "₹90",
        image: "/paneer-tikka-sandwich.jpg",
      },
      {
        name: "C3 Layered Grilled Sandwich",
        description: "Loaded layered sandwich",
        price: "₹170",
        image: "/c3-veg-lodded-burger.jpg",
      },
      {
        name: "Cold Veg Sandwich",
        description: "Brown bread special",
        price: "₹50",
        image: "/cold-veg-sandwich.jpg",
      },
      {
        name: "Garden Veg Sandwich",
        description: "Fresh garden vegetables",
        price: "₹90",
        image: "/green-veg-sandwich.jpg",
      },
      {
        name: "Paneer Tikka Sandwich",
        description: "Paneer Tikka with cheese filling",
        price: "₹110",
        image: "/paneer-tikka-sandwich.jpg",
      },
    ],
  },

  {
    name: "Pizza",
    icon: <Pizza size={20} />,
    items: [
      {
        name: "Margherita",
        description: "Mozzarella cheese",
        price: "₹109 / ₹199 / ₹349",
        image: "/margherita-pizza.png",
      },
      {
        name: "Italian Margherita",
        description: "Tomato & mozzarella",
        price: "₹129 / ₹259 / ₹399",
        image: "/italian-pizza.jpg",
      },
      {
        name: "Golden Corn Pizza",
        description: "Corn, paneer & mozzarella",
        price: "₹129 / ₹259 / ₹399",
        image: "/goldencorn-pizza.png",
      },
      {
        name: "Deluxe Veg Pizza",
        description: "Onion, tomato, paneer & cheese",
        price: "₹129 / ₹259 / ₹399",
        image: "/delux-pizza.jpg",
      },
      {
        name: "Green Veg Pizza",
        description: "Onion, tomato & capsicum",
        price: "₹129 / ₹259 / ₹399",
        image: "/green-veg-pizza.jpg",
      },
      {
        name: "Classic veg Pizza",
        description: "Onion, capsicum, tomato & paneer",
        price: "₹129 / ₹259 / ₹399",
        image: "/classic-veg-pizza.jpg",
      },
      {
        name: "Tandoori Pizza",
        description: "Onion, capsicum, paneer & cheese",
        price: "₹219 / ₹329 / ₹499",
        image: "/tandoori-pizza.jpg",
      },
      {
        name: "Kadhai Paneer Pizza",
        description: "Paneer, capsicum & jalapeno",
        price: "₹219 / ₹329 / ₹499",
        image: "/kadhi-Paneer-Pizza.jpg",
      },
      {
        name: "Veg Cheese Pizza",
        description: "Loaded with veggies & cheese",
        price: "₹219 / ₹329 / ₹499",
        image: "/veg-cheese-pizza.jpg",
      },
      {
        name: "Veg Loaded Pizza",
        description: "Extra loaded vegetables",
        price: "₹249 / ₹349 / ₹519",
        image: "/veg-loaded-pizza.jpg",
      },
      {
        name: "C3 Spicy Loaded Pizza",
        description: "Spicy loaded special",
        price: "₹249 / ₹349 / ₹519",
        image: "/c3-spicy-loaded-pizza.png",
      },
      {
        name: "Salsa Paneer Pizza",
        description: "Paneer, jalapeno & salsa",
        price: "₹249 / ₹349 / ₹519",
        image: "/salsa-pizza.jpg",
      },
      {
        name: "Chaap Pizza",
        description: "Marinated chaap & cheese",
        price: "₹169 / ₹309 / ₹479",
        image: "/chaap-pizza.png",
      },
      {
        name: "Farm House Pizza",
        description: "Onion, capsicum, tomato & mushroom",
        price: "₹169 / ₹309 / ₹479",
        image: "/farmhouse-pizza.jpg",
      },
      {
        name: "Four Veggie Pizza",
        description: "Capsicum, corn, onion & paneer",
        price: "₹169 / ₹309 / ₹479",
        image: "/farmhouse-pizza.jpg",
      },
      {
        name: "Spicy Paneer Pizza",
        description: "Spicy paneer with jalapeno",
        price: "₹169 / ₹309 / ₹479",
        image: "/spicy-paneer-pizza.jpg",
      },
      {
        name: "Hot Spicy Pizza",
        description:
          "Onion, capsicum, tomato & mushroom, spicy Dip",
        price: "₹169 / ₹309 / ₹479",
        image: "/spicy-hot-pizza.jpg",
      },
      {
        name: "Kulhad Pizza",
        description: "Our special kulhad style pizza",
        price: "₹110",
        image: "/kulhad-pizza.png",
      },
      {
        name: "Special Heart Pizza",
        description: "Toppings as per your choice",
        price: "₹399",
        image: "/heart-shape-pizza.jpg",
      },
    ],
  },

  {
    name: "Momos & Snacks",
    icon: <Soup size={20} />,
    items: [
      {
        name: "Veg Momos",
        description: "Crispy fried momos",
        price: "₹110",
        image: "/momos.png",
      },
      {
        name: "Paneer Momos",
        description: "Fried paneer momos",
        price: "₹130",
        image: "/paneer-momos.jpg",
      },
      {
        name: "Cheese Corn Momos",
        description: "Cheesy corn filling",
        price: "₹130",
        image: "/cheese-corn-momos.jpg",
      },
      {
        name: "Spring Roll",
        description: "Crispy vegetable spring roll",
        price: "₹120",
        image: "/spring-roll.png",
      },
      {
        name: "Veg Noodles",
        description: "Classic veg noodles",
        price: "₹160",
        image: "/veg-noodles.jpg",
      },
      {
        name: "Hakka Noodles",
        description: "Chinese style noodles",
        price: "₹170",
        image: "/hakka-noodles.jpg",
      },
      {
        name: "Chilli Garlic Noodles",
        description: "Spicy chilli garlic noodles",
        price: "₹180",
        image: "/chilli-garlic-noodles.jpg",
      },
      {
        name: "Fry Potato Balls",
        description: "Crispy potato bites",
        price: "₹80",
        image: "/fry-potato-balls.jpg",
      },
      {
        name: "Hara Bhara Kabab",
        description: "Green veggie kababs",
        price: "₹120",
        image: "/hara-bhara-kabab.jpg",
      },
      {
        name: "Fry Paneer Popcorn",
        description: "Crispy paneer bites",
        price: "₹160",
        image: "/paneer-popcorn.jpg",
      },
      {
        name: "Garlic Chilli Balls",
        description: "Spicy garlic chilli bites",
        price: "₹160",
        image: "/garlic-chilli-balls.jpg",
      },
      {
        name: "Salty Fries",
        description: "Classic crispy fries",
        price: "₹70",
        image: "/slaty-fries.jpg",
      },
      {
        name: "Peri Peri Fries",
        description: "Loaded with peri peri seasoning",
        price: "₹80",
        image: "/peri-peri-fries.jpg",
      },
      {
        name: "Loaded Fries",
        description: "Fries with delicious toppings",
        price: "₹100",
        image: "/loaded-fries.jpg",
      },
      {
        name: "Honey Chilli Potatoes",
        description: "Sweet, spicy & crispy",
        price: "₹170",
        image: "/honey-potato.jpg",
      },
      {
        name: "Green Wave Sub",
        description: "Fresh veggie loaded sub",
        price: "₹120",
        image: "/green-wave-sub.jpg",
      },
      {
        name: "Fire House Sub",
        description: "Spicy loaded sub",
        price: "₹140",
        image: "/firehouse-sub.jpg",
      },
    ],
  },

  {
    name: "Maggi & Pasta",
    icon: <Soup size={20} />,
    items: [
      {
        name: "Plain Masala Maggi",
        description: "Classic masala Maggi",
        price: "₹60",
        image: "/masala-maggi.jpg",
      },
      {
        name: "Double Masala Maggi",
        description: "Extra masala flavour",
        price: "₹70",
        image: "/double-masala-maggi.jpg",
      },
      {
        name: "Veg Maggi",
        description: "Loaded with vegetables",
        price: "₹70",
        image: "/veg-maggi.png",
      },
      {
        name: "Corn Butter Maggi",
        description: "Corn & buttery goodness",
        price: "₹80",
        image: "/corn-butter-maggi.jpg",
      },
      {
        name: "Tandoori Maggi",
        description: "Smoky tandoori flavour",
        price: "₹90",
        image: "/tandoori-maggi.jpg",
      },
      {
        name: "C3 Special Maggi",
        description: "Our special loaded Maggi",
        price: "₹100",
        image: "/loaded-maggi.jpg",
      },
      {
        name: "Veg Atta Maggi",
        description: "Veg loaded whole wheat Maggi",
        price: "₹130",
        image: "/veg-atta-maggi.jpg",
      },
      {
        name: "Paneer Atta Maggi",
        description: "Paneer loaded whole wheat Maggi",
        price: "₹130",
        image: "/paneer-atta-maggi.jpg",
      },
      {
        name: "Red Sauce Pasta",
        description: "Tangy tomato sauce",
        price: "₹130",
        image: "/red-sauce-pasta.png",
      },
      {
        name: "White Sauce Pasta",
        description: "Creamy white sauce",
        price: "₹130",
        image: "/white-sauce-pasta.png",
      },
      {
        name: "Makhani Pasta",
        description: "Rich creamy makhani sauce",
        price: "₹140",
        image: "/makhani-pasta.png",
      },
      {
        name: "Mix Sauce Pasta",
        description: "Red & white sauce together",
        price: "₹150",
        image: "/mix-souce-pasta.png",
      },
    ],
  },

  {
    name: "Breads Bite & Salad",
    icon: <Utensils size={20} />,
    items: [
      {
        name: "Maska Bun",
        description: "Crispy, Maska Bun",
        price: "₹25",
        image: "/maska-bun.png",
      },
      {
        name: "Garlic Bun",
        description: "Garlic bun with melted cheese",
        price: "₹35",
        image: "/garlic-bread.png",
      },
      {
        name: "Round Cheese Garlic Bread",
        description: "Round garlic bread with cheese",
        price: "₹90",
        image: "/chease-garlic-bread.jpg",
      },
      {
        name: "Greek Bread Sticks + DIP",
        description: "Traditional Greek bread sticks with dip",
        price: "₹100",
        image: "/garlicDIP.jpg",
      },
      {
        name: "Stuff Garlic Bread + DIP",
        description: "Our special Stuff Garlic Bread",
        price: "₹130",
        image: "/garlic-sticks.jpg",
      },
      {
        name: "Diet Salad",
        description: "Our special Diet Salad",
        price: "₹100",
        image: "/dite-salad.jpg",
      },
      {
        name: "Corn Peanut Salad",
        description: "Our special loaded salad",
        price: "₹110",
        image: "/coen-salad.jpg",
      },
      {
        name: "C3 Fitness Salad",
        description: "Our special fitness salad",
        price: "₹120",
        image: "/c3-fitness-salad.jpg",
      },
    ],
  },

  {
    name: "Desserts",
    icon: <CakeSlice size={20} />,
    items: [
      {
        name: "Simple Choco Lava",
        description: "Warm chocolate lava cake",
        price: "₹80",
        image: "/chocolava.jpg",
      },
      {
        name: "Choco Lava with Ice Cream",
        description: "Lava cake with ice cream",
        price: "₹100",
        image: "/lava-icecreame.jpg",
      },
      {
        name: "Sizzling Brownie",
        description: "Hot sizzling brownie",
        price: "₹100",
        image: "/sizziling-brownie.jpg",
      },
      {
        name: "Brownie with Ice Cream",
        description: "Brownie topped with ice cream",
        price: "₹120",
        image: "/brownie-icecream.jpg",
      },
    ],
  },

  {
    name: "Combos",
    icon: <Star size={20} />,
    items: [
      {
        name: "2 Chai + 1 Maska Bun",
        description: "Elaichi / Adrak / Rose chai",
        price: "₹65",
        image: "/combo-maskabun.png",
      },
      {
        name: "2 Chai + Maggi",
        description: "Elaichi / Adrak with plain Maggi",
        price: "₹110",
        image: "/combo-maggi.png",
      },
      {
        name: "2 Chai + French Fries",
        description: "Elaichi / Adrak with crispy fries",
        price: "₹110",
        image: "/combo-fries.png",
      },
      {
        name: "Medium Pizza + Sizzling Brownie + Coke(750ml)",
        description: "Perfect meal combo",
        price: "₹450",
        image: "/combo-pizza.png",
      },
      {
        name: "Medium Pizza + Stuff Garlic Bread + Coke(750ml)",
        description: "Pizza lovers combo",
        price: "₹470",
        image: "/combo-bread.png",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  /* =========================================================
     AOS INITIALIZATION
  ========================================================= */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const allItems = useMemo(
    () =>
      categories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.name,
        }))
      ),
    []
  );

  const filteredItems = useMemo(() => {
    let items =
      activeCategory === "All"
        ? allItems
        : allItems.filter((item) => item.category === activeCategory);

    if (search.trim()) {
      const query = search.toLowerCase();

      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeCategory, search, allItems]);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);

    if (category !== "All") {
      setTimeout(() => {
        document
          .getElementById(category.replace(/[^a-zA-Z0-9]/g, "-"))
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#2b211c]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        data-aos="fade-up"
        className="relative overflow-hidden border-b border-orange-100"
      >
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-yellow-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 text-center md:px-8">

          <span
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-bold tracking-wide text-[#e94d0b] shadow-sm"
          >
            ✨ A TASTE OF COMFORT
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-6xl font-black tracking-tight md:text-8xl"
          >
            Our <span className="text-[#f45112]">Menu</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5b6573] md:text-lg"
          >
            From steaming kulhad chai to delicious bites, pizzas and
            refreshing drinks — discover everything we love serving.
          </p>

        </div>
      </section>

      {/* =========================================================
          CATEGORY NAV
      ========================================================= */}
      <div
        data-aos="fade-down"
        className="sticky top-0 z-30 border-b border-orange-100 bg-[#fffaf3]/95 py-4 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-1 md:px-8">

          {/* ALL */}
          <button
            onClick={() => setActiveCategory("All")}
            data-aos="fade-right"
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition ${
              activeCategory === "All"
                ? "border-[#f45112] bg-[#f45112] text-white shadow-md"
                : "border-orange-200 bg-white text-[#5b6573] hover:border-orange-400 hover:text-[#f45112]"
            }`}
          >
            ALL
          </button>

          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => scrollToCategory(category.name)}
              data-aos="fade-right"
              data-aos-delay={index * 80}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                activeCategory === category.name
                  ? "border-[#f45112] bg-[#f45112] text-white shadow-md"
                  : "border-orange-200 bg-white text-[#5b6573] hover:border-orange-400 hover:text-[#f45112]"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}

        </div>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      {search.trim() ? (

        /* =====================================================
           SEARCH RESULTS
        ===================================================== */
        <section
          data-aos="fade-up"
          className="mx-auto max-w-7xl px-5 py-12 md:px-8"
        >
          <div
            data-aos="fade-right"
            className="mb-7"
          >
            <h2 className="text-3xl font-black">
              Search Results
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredItems.length} items found
            </p>
          </div>

          {filteredItems.length === 0 ? (

            <div
              data-aos="zoom-in"
              className="rounded-3xl border border-orange-100 bg-white p-16 text-center"
            >
              <div className="text-5xl">🍽️</div>

              <h3 className="mt-4 text-xl font-bold">
                No food found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching another item.
              </p>
            </div>

          ) : (
            <div data-aos="fade-up">
              <FoodGrid items={filteredItems} />
            </div>
          )}
        </section>

      ) : activeCategory === "All" ? (

        /* =====================================================
           ALL CATEGORIES VIEW
        ===================================================== */
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          {categories.map((category, categoryIndex) => (
            <section
              key={category.name}
              id={category.name.replace(/[^a-zA-Z0-9]/g, "-")}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              className="mb-10 scroll-mt-24"
            >

              {/* CATEGORY HEADER */}
              <div
                data-aos="fade-right"
                className="mb-5 flex items-end justify-between gap-4"
              >
                <div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#f45112]">
                      {category.icon}
                    </div>

                    <div>
                      <h2 className="text-2xl font-black md:text-3xl">
                        {category.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Fresh, delicious & made with love
                      </p>
                    </div>

                  </div>

                </div>

                <button
                  onClick={() => setActiveCategory(category.name)}
                  className="hidden items-center gap-1 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-[#f45112] transition hover:bg-orange-50 sm:flex"
                >
                  View All
                  <ChevronRight size={16} />
                </button>

              </div>

              {/* FOOD GRID */}
              <div data-aos="fade-up" data-aos-delay="150">
                <FoodGrid
                  items={category.items.slice(0, 6)}
                />
              </div>

              {/* VIEW FULL MENU */}
              {category.items.length > 6 && (
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="mt-5 text-center"
                >
                  <button
                    onClick={() =>
                      setActiveCategory(category.name)
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-6 py-3 text-sm font-bold text-[#f45112] shadow-sm transition hover:bg-orange-50"
                  >
                    View Full {category.name} Menu
                    <ChevronRight size={17} />
                  </button>
                </div>
              )}

            </section>
          ))}

        </div>

      ) : (

        /* =====================================================
           SINGLE CATEGORY VIEW
        ===================================================== */
        <section
          data-aos="fade-up"
          className="mx-auto max-w-7xl px-5 py-12 md:px-8"
        >

          <div
            data-aos="fade-right"
            className="mb-7"
          >

            <button
              onClick={() => setActiveCategory("All")}
              className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#f45112] hover:underline"
            >
              ← Back to all categories
            </button>

            <h2 className="text-3xl font-black">
              {activeCategory}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredItems.length} items available
            </p>

          </div>

          {filteredItems.length === 0 ? (

            <div
              data-aos="zoom-in"
              className="rounded-3xl border border-orange-100 bg-white p-16 text-center"
            >
              <div className="text-5xl">🍽️</div>

              <h3 className="mt-4 text-xl font-bold">
                No items found
              </h3>

              <p className="mt-2 text-gray-500">
                This category is empty.
              </p>
            </div>

          ) : (

            <div data-aos="fade-up">
              <FoodGrid items={filteredItems} />
            </div>

          )}

        </section>
      )}

      {/* =========================================================
          SPECIAL OFFERS
      ========================================================= */}
      <section
        data-aos="fade-up"
        className="border-t border-orange-100 bg-[#fffaf3] py-10 md:py-10"
      >

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          {/* HEADING */}
          <div
            data-aos="fade-up"
            className="mx-auto mb-10 max-w-2xl text-center"
          >

            <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#f45112] shadow-sm">
              ✨ SPECIAL OFFERS
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#35170e] md:text-5xl">
              Great Food.{" "}
              <span className="text-[#f45112]">
                Better Deals.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#6b625d] md:text-base">
              Grab your favourite pizza and enjoy our special offers at
              Chai Chowk Cafe.
            </p>

          </div>

          {/* OFFER CARDS */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* EVERYDAY OFFER */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative overflow-hidden rounded-[28px] border border-orange-300 bg-orange-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
            >

              <div className="relative">

                <div className="flex items-center justify-between gap-3">

                  <span className="rounded-full bg-[#35170e] px-4 py-2 text-[11px] font-black tracking-wider text-white">
                    EVERYDAY OFFER
                  </span>

                  <span className="rounded-full bg-[#f45112] px-3 py-2 text-[10px] font-black text-white shadow-md">
                    BUY 1 GET 1
                  </span>

                </div>

                <div className="mt-7 flex items-center gap-5">

                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-orange-50">

                    <Image
                      src="/margherita-pizza.png"
                      alt="Pizza offer"
                      fill
                      className="object-contain p-2 transition duration-500 group-hover:scale-110"
                      sizes="112px"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-black leading-tight text-[#35170e] md:text-2xl">
                      Buy One Large Pizza
                    </h3>

                    <div className="my-3 h-1 w-12 rounded-full bg-[#f45112]" />

                    <p className="text-sm leading-6 text-gray-600">
                      Get{" "}
                      <span className="font-black text-[#f45112]">
                        1 Regular Pizza
                      </span>{" "}
                      absolutely free.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-[#fff7ed] px-4 py-3">

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    Offer Available
                  </span>

                  <span className="text-sm font-black text-[#35170e]">
                    Every Day
                  </span>

                </div>

              </div>
            </div>

            {/* WEDNESDAY & SUNDAY */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative overflow-hidden rounded-[28px] bg-[#6b3828] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-5"
            >

              <div className="relative">

                <div className="flex items-center justify-between gap-3">

                  <span className="rounded-full bg-white px-4 py-2 text-[11px] font-black tracking-wider text-[#35170e]">
                    WEDNESDAY & SUNDAY
                  </span>

                  <span className="rounded-full bg-[#f45112] px-3 py-2 text-[10px] font-black text-white shadow-md">
                    BUY 1 GET 1
                  </span>

                </div>

                <div className="mt-7 flex items-center gap-5">

                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-white/10">

                    <Image
                      src="/margherita-pizza.png"
                      alt="Medium pizza offer"
                      fill
                      className="object-contain p-2 transition duration-500 group-hover:scale-110"
                      sizes="112px"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-black leading-tight text-white md:text-2xl">
                      Buy One Medium Pizza
                    </h3>

                    <div className="my-3 h-1 w-12 rounded-full bg-[#f45112]" />

                    <p className="text-sm leading-6 text-white/70">
                      Get{" "}
                      <span className="font-black text-orange-300">
                        1 Medium Pizza
                      </span>{" "}
                      absolutely free.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">

                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                    Special Days
                  </span>

                  <span className="text-sm font-black text-orange-300">
                    Wednesday & Sunday
                  </span>

                </div>

              </div>
            </div>

          </div>

          {/* =====================================================
              CAFE EXPERIENCE
          ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-6 overflow-hidden rounded-[32px] border border-orange-100 bg-orange-100 shadow-sm"
          >

            <div className="grid md:grid-cols-2">

              {/* LEFT */}
              <div
                data-aos="fade-right"
                className="p-4 md:p-6"
              >

                <span
                  data-aos="fade-down"
                  className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-black tracking-[0.15em] text-[#f45112]"
                >
                  CHAI CHOWK CAFE
                </span>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="mt-5 text-3xl font-black leading-tight text-[#35170e] md:text-4xl"
                >
                  More Than Just{" "}
                  <span className="text-[#f45112]">
                    Chai
                  </span>
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="mt-4 text-sm leading-7 text-gray-600 md:text-base"
                >
                  A perfect place for delicious food, chai,
                  celebrations and memorable moments with your
                  loved ones.
                </p>

                {/* FEATURES */}
                <div className="mt-8 grid grid-cols-2 gap-3">

                  {/* PARTY HALL */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="relative overflow-hidden rounded-2xl border border-orange-300 bg-[#fffaf3] p-4"
                  >
                    <div className="text-2xl">
                      🎉
                    </div>

                    <h3 className="mt-2 text-sm font-black text-[#35170e]">
                      Party Hall
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-gray-500">
                      Perfect for celebrations
                    </p>
                  </div>

                  {/* BIRTHDAY */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="rounded-2xl border border-orange-300 bg-[#fffaf3] p-4"
                  >
                    <div className="text-2xl">
                      🎂
                    </div>

                    <h3 className="mt-2 text-sm font-black text-[#35170e]">
                      Birthday Party
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-gray-500">
                      Celebrate your special day
                    </p>
                  </div>

                  {/* OFFICE EVENTS */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="rounded-2xl border border-orange-300 bg-[#fffaf3] p-4"
                  >
                    <div className="text-2xl">
                      🏢
                    </div>

                    <h3 className="mt-2 text-sm font-black text-[#35170e]">
                      Office Events
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-gray-500">
                      Small events & gatherings
                    </p>
                  </div>

                  {/* FREE DELIVERY */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="rounded-2xl border border-orange-300 bg-[#fffaf3] p-4"
                  >
                    <div className="text-2xl">
                      🛵
                    </div>

                    <h3 className="mt-2 text-sm font-black text-[#35170e]">
                      Free Delivery
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-gray-500">
                      Selected orders
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div
                data-aos="fade-left"
                className="relative min-h-[360px] overflow-hidden bg-[#6b3828]"
              >

                <Image
                  src="/mixup.png"
                  alt="Chai Chowk Cafe"
                  fill
                  className="object-contain transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   FOOD GRID
========================================================= */

function FoodGrid({ items }: { items: FoodItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

      {items.map((item, index) => (
        <div
          key={item.name}
          data-aos="zoom-in"
          data-aos-delay={index * 80}
        >
          <FoodCard item={item} />
        </div>
      ))}

    </div>
  );
}

/* =========================================================
   FOOD CARD
========================================================= */

function FoodCard({ item }: { item: FoodItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-[#fff4e5]">

        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-contain p-2 transition duration-500 group-hover:scale-110"
        />

        {/* RATING */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-bold shadow">

          <Star
            size={12}
            className="fill-orange-400 text-orange-400"
          />

          4.8

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-3.5">

        <h3 className="line-clamp-1 text-sm font-black md:text-base">
          {item.name}
        </h3>

        {item.description && (
          <p className="mt-1 line-clamp-2 min-h-[32px] text-[11px] leading-4 text-gray-500 md:text-xs">
            {item.description}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between gap-2">

          <span className="text-sm font-black text-[#f45112]">
            {item.price}
          </span>

        </div>

      </div>

    </article>
  );
}