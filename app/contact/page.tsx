"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    Mail,
    Phone,
    Clock,
    MapPin,
    Send,
    MessageCircle,
} from "lucide-react";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        message: "",
    });

    /* ================= AOS ================= */
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
            easing: "ease-in-out",
        });

        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    /* ================= FORM CHANGE ================= */
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

    /* ================= FORM SUBMIT ================= */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert("Thank you! Your enquiry has been submitted.");

            setFormData({
                name: "",
                email: "",
                phone: "",
                inquiry: "",
                message: "",
            });

            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-[#faf7f2] text-[#4a2115]">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative flex min-h-[450px] items-center justify-center overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/border-degine.png"
                    alt="Chai Chowk Cafe"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero Content */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center"
                >
                    <p className="mb-3 font-serif text-2xl italic text-[#efa437] md:text-3xl">
                        Let&apos;s Connect
                    </p>

                    <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
                        We&apos;d Love To Hear
                        <br />
                        From You
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/90 md:text-lg"
                    >
                        Have a question, franchise idea, feedback or simply want to say
                        hello? We&apos;re{" "}
                        <br className="hidden md:block" />
                        always happy to connect with you.
                    </p>
                </div>
            </section>

            {/* =====================================================
                CONTACT + FORM
            ===================================================== */}
            <section className="px-5 py-16 md:px-10 lg:px-16 lg:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* ================= LEFT CONTACT CARD ================= */}
                    <div
                        data-aos="fade-right"
                        className="relative min-h-[700px] overflow-hidden rounded-[28px] shadow-lg"
                    >

                        {/* Background Image */}
                        <Image
                            src="/cofe-background.png"
                            alt="Chai Chowk Cafe Interior"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col p-7 md:p-10">

                            {/* Heading */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <p className="font-serif text-xl italic text-[#efa437]">
                                    Get In Touch
                                </p>

                                <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                                    Let&apos;s Talk
                                </h2>

                                <p className="mt-4 leading-7 text-white/90">
                                    Whether you have a question or want to know more about our
                                    cafe, our team is here to help.
                                </p>
                            </div>

                            {/* ================= CONTACT ITEMS ================= */}
                            <div className="mt-8 flex-grow space-y-4">

                                {/* EMAIL */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                    className="flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm transition hover:bg-white"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                        <Mail size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#8b7065]">
                                            Email
                                        </p>

                                        <p className="mt-1 break-all text-sm font-bold text-[#4a2115]">
                                            C3chaichowkcafe@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                    className="flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm transition hover:bg-white"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                        <Phone size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#8b7065]">
                                            Phone
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#4a2115]">
                                            +91 9253779999
                                        </p>
                                    </div>
                                </div>

                                {/* OPENING HOURS */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="350"
                                    className="flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm transition hover:bg-white"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                        <Clock size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#8b7065]">
                                            Opening Hours
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#4a2115]">
                                            Mon – Sun: 10:00 AM – 11:00 PM
                                        </p>
                                    </div>
                                </div>

                                {/* ADDRESS */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="450"
                                    className="flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm transition hover:bg-white"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                        <MapPin size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#8b7065]">
                                            Visit Us
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#4a2115]">
                                            Chai Chowk Cafe, Fatehabad (Haryana)
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* ================= SOCIAL MEDIA ================= */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="mt-8"
                            >
                                <p className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                                    Follow Us
                                </p>

                                <div className="flex gap-3">

                                    {/* INSTAGRAM */}
                                    <a
                                        href="https://www.instagram.com/c3chaichowkcafe?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437] hover:text-white"
                                    >
                                        <FaInstagram size={20} />
                                    </a>

                                    {/* FACEBOOK */}
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61579396418460"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437] hover:text-white"
                                    >
                                        <FaFacebook size={20} />
                                    </a>

                                    {/* YOUTUBE */}
                                    <a
                                        href="https://www.youtube.com/@C3ChaiChowkCafe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437] hover:text-white"
                                    >
                                        <FaYoutube size={20} />
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT FORM ================= */}
                    <div
                        data-aos="fade-left"
                        className="rounded-[28px] border border-[#f0e3d5] bg-white p-7 shadow-[0_15px_50px_rgba(74,33,21,0.08)] md:p-10"
                    >

                        {/* FORM HEADING */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="mb-8"
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-10 bg-[#efa437]" />

                                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#efa437]">
                                    Send A Message
                                </span>
                            </div>

                            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#4a2115]">
                                Share Your
                                <br />
                                Enquiry
                            </h2>
                        </div>

                        {/* ================= FORM ================= */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* NAME + EMAIL */}
                            <div className="grid gap-6 md:grid-cols-2">

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-bold text-[#4a2115]"
                                    >
                                        Your Name{" "}
                                        <span className="text-[#e6952e]">*</span>
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                        required
                                        className="w-full rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
                                    />
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-bold text-[#4a2115]"
                                    >
                                        Email Address{" "}
                                        <span className="text-[#e6952e]">*</span>
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
                                    />
                                </div>

                            </div>

                            {/* PHONE + INQUIRY */}
                            <div className="grid gap-6 md:grid-cols-2">

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-bold text-[#4a2115]"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
                                    />
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <label
                                        htmlFor="inquiry"
                                        className="mb-2 block text-sm font-bold text-[#4a2115]"
                                    >
                                        Inquiry Type{" "}
                                        <span className="text-[#e6952e]">*</span>
                                    </label>

                                    <select
                                        id="inquiry"
                                        name="inquiry"
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        required
                                        className="w-full appearance-none rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
                                    >
                                        <option value="" disabled>
                                            Select a topic
                                        </option>

                                        <option value="general">
                                            General Enquiry
                                        </option>

                                        <option value="franchise">
                                            Franchise Enquiry
                                        </option>

                                        <option value="feedback">
                                            Feedback
                                        </option>

                                        <option value="partnership">
                                            Partnership
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                            </div>

                            {/* MESSAGE */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="450"
                            >
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-bold text-[#4a2115]"
                                >
                                    Message{" "}
                                    <span className="text-[#e6952e]">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    required
                                    rows={6}
                                    className="w-full resize-none rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
                                />
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                data-aos="fade-up"
                                data-aos-delay="500"
                                type="submit"
                                disabled={isSubmitting}
                                className={`group flex w-full items-center justify-center gap-3 rounded-xl bg-[#4a2115] px-6 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-[#6b2e1b] hover:shadow-xl ${
                                    isSubmitting
                                        ? "cursor-not-allowed opacity-70"
                                        : ""
                                }`}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}

                                {!isSubmitting && (
                                    <Send
                                        size={19}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                )}
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            {/* =====================================================
                MAP SECTION
            ===================================================== */}
            <section className="px-5 pb-20 md:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    {/* MAP HEADING */}
                    <div
                        data-aos="fade-up"
                        className="mb-10 text-center"
                    >
                        <p className="font-serif text-2xl italic text-[#e6952e]">
                            Come Say Hello
                        </p>

                        <h2 className="mt-2 text-4xl font-black uppercase text-[#4a2115] md:text-6xl">
                            Find Us Here
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-[#765d52]">
                            Drop by for a warm cup of chai, delicious food and
                            good conversations.
                        </p>
                    </div>

                    {/* MAP */}
                    <div
                        data-aos="zoom-in"
                        className="relative overflow-hidden rounded-[28px] border-8 border-white shadow-[0_15px_50px_rgba(74,33,21,0.12)]"
                    >

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0292570170222!2d75.443191!3d29.515506399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911654cc4257b73%3A0x52ef186e9e7ca874!2sChai%20Chowk%20Cafe!5e0!3m2!1sen!2sin!4v1788861252214!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* FLOATING ADDRESS CARD */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-white p-5 shadow-xl md:bottom-8 md:left-8"
                        >
                            <div className="flex gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-[#e6952e]">
                                        Our Location
                                    </p>

                                    <p className="mt-1 font-bold text-[#4a2115]">
                                        Chai Chowk Cafe
                                    </p>

                                    <p className="mt-1 text-sm text-[#765d52]">
                                        Fatehabad (Haryana)
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                BOTTOM CTA
            ===================================================== */}
            <section
                data-aos="fade-up"
                className="bg-[#efa437] px-6 py-16 text-center"
            >

                <MessageCircle
                    className="mx-auto mb-5 text-[#4a2115]"
                    size={38}
                />

                <h2 className="text-3xl font-black uppercase text-[#4a2115] md:text-5xl">
                    Have Something To Say?
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-[#5e321f] md:text-lg">
                    We&apos;d love to hear from you. Send us your message and
                    our team will get back to you.
                </p>

            </section>

        </main>
    );
}