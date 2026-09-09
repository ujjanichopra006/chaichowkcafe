"use client";
import Image from "next/image";
import { useState } from "react";
import {
    Mail,
    Phone,
    Clock,
    MapPin,
    Send,
    ChevronDown,
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert("Thank you! Your enquiry has been submitted.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            inquiry: "",
            message: "",
        });
    };

    return (
        <main className="min-h-screen bg-[#faf7f2] text-[#4a2115]">

            {/* ================= HERO ================= */}
            <section className="relative min-h-[400px] overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/border-degine.png"
                    alt="Chai Chowk Cafe"
                    fill
                    className="object-cover"
                />

                {/* Image ke upar halka overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Text */}
                <div className="relative z-10 flex min-h-[400px] items-center px-6 md:px-12 lg:px-20">
                    <div className="mx-auto w-full max-w-7xl">

                        <p className="mb-3 px-110 font-serif text-2xl italic text-[#efa437] md:text-3xl">
                            Let&apos;s Connect
                        </p>

                        <h1 className="max4xl px-50 text-3xl text-center font-black uppercase leading-[0.95] tracking-tight text-white md:text-3xl lg:text-6xl">
                            We&apos;d Love To  Hear
                            <br />
                            From You
                        </h1>

                        <p className="mt-7 px-30 max-4xl text-center text-base leading-7 text-white md:text-lg">
                            Have a question, franchise idea, feedback or simply want to say
                            hello? We&apos;re <br /> always happy to connect with you.
                        </p>

                    </div>
                </div>

            </section>
            {/* ================= CONTACT + FORM ================= */}
          <section className="px-5 py-16 md:px-10 lg:px-16 lg:py-24">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

    {/* ================= LEFT CONTACT CARD ================= */}
    <div className="relative min-h-[700px] overflow-hidden rounded-[28px] shadow-lg">

  {/* ================= BACKGROUND IMAGE ================= */}
  <Image
    src="/cofe-background.png"
    alt="Chai Chowk Cafe"
    fill
    priority
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* ================= CONTENT OVER IMAGE ================= */}
  <div className="relative z-10 p-7 md:p-9">

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

    {/* ================= CONTACT ITEMS ================= */}
    <div className="mt-7 space-y-3">

      {/* Email */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
          <Mail size={20} />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#8b7065]">
            Email
          </p>

          <p className="mt-1 text-sm font-bold text-[#4a2115]">
              C3chaichowkcafe@gmail.com
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
          <Phone size={20} />
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

      {/* Opening Hours */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
          <Clock size={20} />
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

      {/* Address */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
          <MapPin size={20} />
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

    {/* ================= SOCIAL ================= */}
    <div className="mt-7">

      <p className="mb-3 text-sm font-black uppercase tracking-widest text-white">
        Follow Us
      </p>

      <div className="flex gap-3">

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437]"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437]"
        >
          <FaFacebook size={18} />
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#4a2115] transition hover:bg-[#efa437]"
        >
          <FaYoutube size={18} />
        </a>

      </div>

    </div>

  </div>
</div>

    {/* ================= RIGHT FORM ================= */}
    <div className="rounded-[28px] border border-[#f0e3d5] bg-white p-7 shadow-[0_15px_50px_rgba(74,33,21,0.08)] md:p-10">

      {/* Form Heading */}
      <div className="mb-8">

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
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name + Email */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold text-[#4a2115]"
            >
              Your Name <span className="text-[#e6952e]">*</span>
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


          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-[#4a2115]"
            >
              Email Address <span className="text-[#e6952e]">*</span>
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


        {/* Phone + Inquiry */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Phone */}
          <div>
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


          {/* Inquiry */}
          <div>
            <label
              htmlFor="inquiry"
              className="mb-2 block text-sm font-bold text-[#4a2115]"
            >
              Inquiry Type <span className="text-[#e6952e]">*</span>
            </label>

            <select
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#ded2ca] bg-[#fcfaf8] px-5 py-4 outline-none transition focus:border-[#efa437] focus:ring-2 focus:ring-[#efa437]/20"
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


        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold text-[#4a2115]"
          >
            Message <span className="text-[#e6952e]">*</span>
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


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group flex w-full items-center justify-center gap-3 rounded-xl bg-[#4a2115] px-6 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-[#6b2e1b] hover:shadow-xl ${
            isSubmitting
              ? "cursor-not-allowed opacity-70"
              : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}

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
            {/* ================= MAP SECTION ================= */}
            <section className="px-5 pb-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-8 text-center">
                        <p className="font-serif text-2xl italic text-[#e6952e]">
                            Come Say Hello
                        </p>

                        <h2 className="mt-2 text-4xl font-black uppercase text-[#4a2115] md:text-6xl">
                            Find Us Here
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-[#765d52]">
                            Drop by for a warm cup of chai, delicious food and good
                            conversations.
                        </p>
                    </div>

                    {/* Map */}
                    <div className="relative overflow-hidden rounded-[28px] border-8 border-white shadow-[0_15px_50px_rgba(74,33,21,0.12)]">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0292570170222!2d75.443191!3d29.515506399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911654cc4257b73%3A0x52ef186e9e7ca874!2sChai%20Chowk%20Cafe!5e0!3m2!1sen!2sin!4v1788861252214!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            loading="lazy"
                        />

                        {/* Floating Address Card */}
                        <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-white p-5 shadow-xl md:left-8 md:bottom-8">
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a2115] text-[#efa437]">
                                    <MapPin size={21} />
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

            {/* ================= BOTTOM CTA ================= */}
            <section className="bg-[#efa437] px-6 py-14 text-center">
                <MessageCircle
                    className="mx-auto mb-4 text-[#4a2115]"
                    size={34}
                />

                <h2 className="text-3xl font-black uppercase text-[#4a2115] md:text-5xl">
                    Have Something To Say?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-[#5e321f]">
                    We&apos;d love to hear from you. Send us your message and our team
                    will get back to you.
                </p>
            </section>

        </main>
    );
}