
"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Cookie,
  FileText,
  UserCheck,
  Mail,
  ArrowRight,
  Coffee,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: FileText,
    title: "Introduction",
    text: (
      <>
        Welcome to <strong>Chai Chowk Cafe</strong>. We respect your privacy
        and are committed to protecting any personal information you may
        provide while using our website.
        <br />
        <br />
        This Privacy Policy explains what information we may collect, how we
        use it, and how we protect it when you visit or interact with our
        website.
      </>
    ),
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Information We Collect",
    text: (
      <>
        Depending on how you use our website, we may collect information such
        as:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Messages or enquiries submitted through our forms</li>
          <li>Information provided through franchise enquiries</li>
        </ul>
        <br />
        We only request information that is reasonably necessary to respond
        to your enquiry or provide the requested service.
      </>
    ),
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "How We Use Your Information",
    text: (
      <>
        Information submitted through our website may be used to:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to your questions and enquiries</li>
          <li>Handle franchise-related enquiries</li>
          <li>Provide information about Chai Chowk Cafe</li>
          <li>Improve our website and customer experience</li>
          <li>Communicate with you when necessary regarding your enquiry</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    icon: Cookie,
    title: "Cookies & Website Analytics",
    text: (
      <>
        Our website may use cookies or similar technologies to improve the
        browsing experience and understand how visitors use the website.
        <br />
        <br />
        Cookies may help us understand website traffic, remember preferences,
        and improve website performance. You can control or disable cookies
        through your browser settings.
      </>
    ),
  },
  {
    number: "05",
    icon: Lock,
    title: "Data Security",
    text: (
      <>
        We take reasonable steps to protect the personal information
        submitted through our website from unauthorized access, misuse,
        alteration, or disclosure.
        <br />
        <br />
        However, no method of transmitting or storing information online can
        be guaranteed to be completely secure.
      </>
    ),
  },
  {
    number: "06",
    icon: FileText,
    title: "Third-Party Services",
    text: (
      <>
        Our website may use third-party services such as hosting providers,
        analytics services, maps, or social media integrations.
        <br />
        <br />
        These third-party services may process information according to their
        own privacy policies. We recommend reviewing the privacy policies of
        any third-party services you interact with through our website.
      </>
    ),
  },
  {
    number: "07",
    icon: UserCheck,
    title: "Children's Privacy",
    text: (
      <>
        Our website is not intended to knowingly collect personal information
        from children. We encourage parents or guardians to supervise
        children's online activities.
      </>
    ),
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Your Privacy Choices",
    text: (
      <>
        If you have submitted personal information to us and would like to
        ask about, update, or request changes regarding that information, you
        can contact us using the details provided below.
        <br />
        <br />
        We will consider reasonable requests in accordance with applicable
        laws and our operational requirements.
      </>
    ),
  },
  {
    number: "09",
    icon: FileText,
    title: "Changes to This Privacy Policy",
    text: (
      <>
        We may update this Privacy Policy from time to time to reflect
        changes in our website, services, or legal requirements.
        <br />
        <br />
        Any updated version will be published on this page with a revised
        “Last Updated” date.
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#35170e]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#35170e]">
        {/* Decorative circles */}

        <div className="absolute -bottom-32 -right-20 h-80 w-80  bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 lg:py-24">
          
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-400/15 text-orange-300">
            <ShieldCheck size={28} strokeWidth={1.7} />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            Chai Chowk Cafe
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Your privacy matters to us. Learn how Chai Chowk Cafe handles
            information when you visit and interact with our website.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
            <Lock size={14} />
            Last Updated: September 2026
          </div>
        </div>

      </section>

      {/* ================= INTRO CARD ================= */}
      <section className="mx-auto max-w-5xl px-5 pt-10 sm:px-8">
        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_15px_50px_rgba(53,23,14,0.07)] sm:p-8">
          <div className="flex gap-4">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 sm:flex">
              <Coffee size={21} />
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                A little about your privacy
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#35170e]/65">
                We believe that trust is an important part of every
                relationship — just like a good cup of chai. This policy
                explains how we handle information shared with us through the
                Chai Chowk Cafe website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POLICY SECTIONS ================= */}
      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.number}
                className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
              >
                <div className="flex gap-5">
                  
                  {/* Number + Icon */}
                  <div className="hidden shrink-0 sm:block">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-[#35170e] text-white">
                      <span className="text-[9px] font-medium tracking-wider text-orange-300">
                        {section.number}
                      </span>
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-widest text-orange-500 sm:hidden">
                        {section.number}
                      </span>

                      <h2 className="text-lg font-semibold sm:text-xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="text-sm leading-7 text-[#35170e]/65">
                      {section.text}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#35170e] px-6 py-10 text-center sm:px-10 sm:py-12">
          
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-orange-400/10 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/15 text-orange-300">
              <Mail size={21} />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Have a question?
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              We&apos;re here to help.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/65">
              If you have any questions about this Privacy Policy or how your
              information is handled, feel free to contact Chai Chowk Cafe.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-[#35170e] transition hover:bg-orange-300"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-5 text-center sm:px-8">
          <p className="text-xs text-[#35170e]/50">
            © {new Date().getFullYear()} Chai Chowk Cafe. All rights reserved.
          </p>
        </div>
      </div>

    </main>
  );
}
