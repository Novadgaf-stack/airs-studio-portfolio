import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Worldwide from "./components/Worldwide";
import {
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Instagram,
  Mail,
  MessageCircle,
  Globe2,
  Plus,
} from "lucide-react";

const services = [
  ["01", "Brand Design", "Visual identities with clarity, personality and direction."],
  ["02", "Social Media Design", "Consistent visual systems built to stop the scroll."],
  ["03", "Event Design", "Bold creative direction for events and experiences."],
  ["04", "Poster Design", "Typography-led visuals that communicate instantly."],
  ["05", "Banner Design", "Clear visual communication for digital and physical spaces."],
  ["06", "Conference Design", "Cohesive systems that make important events memorable."],
];

const projects = [
  ["01", "Brand Identity", "Visual Identity"],
  ["02", "Social Campaign", "Digital Design"],
  ["03", "Event Experience", "Creative Direction"],
  ["04", "Editorial System", "Typography & Design"],
];

const testimonials = [
  {
    quote: "Your testimonial will live here.",
    name: "Client Name",
    role: "Founder / Business Owner",
  },
  {
    quote: "A real client story can be added here.",
    name: "Client Name",
    role: "Creative / Entrepreneur",
  },
  {
    quote: "This space is ready for a genuine client review.",
    name: "Client Name",
    role: "Organization / Brand",
  },
];

const faqs = [
  ["Do you work with international clients?", "Absolutely. AIRS works with clients worldwide. Projects can be handled remotely from discovery through final delivery."],
  ["What services do you offer?", "AIRS specializes in brand design, social media design, event and conference design, posters, banners and broader visual communication."],
  ["How does a project begin?", "Every project starts with understanding the brand, its audience, goals and creative direction before design begins."],
  ["How long does a project take?", "Timelines depend on the scope and deliverables. A clear timeline is agreed upon before the project starts."],
  ["How can I start a project?", "Send a message through WhatsApp or email with a little information about what you're building. AIRS will take it from there."],
];

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.ceil(value / 45));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 45);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8eb] text-[#131c48]">

      {/* NAV */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 md:px-8">
        <div className="mx-auto mt-4 flex max-w-[1400px] items-center justify-between rounded-full border border-[#131c48]/10 bg-[#fff8eb]/85 px-5 py-3 backdrop-blur-xl">
          <a href="#" className="font-display text-2xl font-bold tracking-[-.08em]">
            AIRS.
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Services", "Work", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition hover:text-[#996527]"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-[#131c48] px-5 py-2.5 text-sm font-medium text-[#fff8eb] transition hover:bg-[#996527]"
            >
              Let's talk
            </a>
          </nav>

          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden"
            aria-label="Menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-[#131c48]/10 bg-[#fff8eb] p-7 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-6">
                {["About", "Services", "Work", "Testimonials", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={item === "Contact" ? "#contact" : `#${item.toLowerCase()}`}
                    onClick={() => setMenu(false)}
                    className="text-xl font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>

        {/* HERO */}
        <section className="relative flex min-h-[calc(100vh-110px)] items-center px-5 pb-16 pt-28 md:px-10 md:pt-32">
          <div className="absolute right-[-15rem] top-[-12rem] h-[40rem] w-[40rem] rounded-full bg-[#996527]/10 blur-3xl" />

          <div className="mx-auto grid w-full max-w-[1400px] items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
            >
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#996527]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#996527]">
                  Creative Designer
                </span>

                <span className="flex items-center gap-2 rounded-full bg-[#131c48] px-4 py-2 text-xs font-medium text-[#fff8eb]">
                  <Globe2 size={13} />
                  Based in Nigeria · Working worldwide
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[.85] tracking-[-.075em]">
                Make your
                <br />
                <span className="italic text-[#996527]">brand</span> speak.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .2 }}
              className="max-w-md lg:pb-3"
            >
              <p className="text-lg leading-relaxed text-[#131c48]/65 md:text-xl">
                I create bold, intentional visual identities that help brands
                communicate clearly, look unforgettable and connect with the
                people they want to reach.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group flex items-center gap-3 rounded-full bg-[#131c48] px-7 py-4 font-medium text-[#fff8eb] transition hover:bg-[#996527]"
                >
                  Explore the work
                  <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="https://wa.me/2348104281383?text=Hi%20AIRS!%20I%27d%20love%20to%20discuss%20a%20design%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-[#131c48]/20 px-7 py-4 font-medium transition hover:border-[#996527] hover:text-[#996527]"
                >
                  WhatsApp
                  <MessageCircle size={17} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-[#131c48]/10 bg-white px-5 py-10 md:px-10">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 md:grid-cols-4">
            <div className="border-[#131c48]/10 md:border-r">
              <p className="font-display text-5xl font-semibold tracking-[-.05em] md:text-6xl">
                <Counter value={100} suffix="+" />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-[#131c48]/45">
                Projects
              </p>
            </div>

            <div className="md:border-r md:pl-8">
              <p className="font-display text-5xl font-semibold tracking-[-.05em] md:text-6xl">
                <Counter value={50} suffix="+" />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-[#131c48]/45">
                Happy Clients
              </p>
            </div>

            <div className="border-[#131c48]/10 md:border-r md:pl-8">
              <p className="font-display text-5xl font-semibold tracking-[-.05em] md:text-6xl">
                <Counter value={4} suffix="+" />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-[#131c48]/45">
                Years Experience
              </p>
            </div>

            <div className="md:pl-8">
              <p className="font-display text-5xl font-semibold tracking-[-.05em] md:text-6xl">
                Worldwide
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-[#131c48]/45">
                Client Reach
              </p>
            </div>
          </div>
        </section>

        {/* WORLDWIDE */}       <Worldwide />       {/* ABOUT */}
        <section id="about" className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
              01 — About AIRS.
            </p>

            <div>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-.045em] md:text-6xl">
                Design that makes the right message
                <span className="text-[#996527]"> impossible to miss.</span>
              </h2>

              <div className="mt-14 grid gap-10 border-t border-[#131c48]/10 pt-10 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#996527]">
                    The problem
                  </p>
                  <p className="leading-relaxed text-[#131c48]/65">
                    I take out the complexity that comes from poor visual
                    communication and replace it with clarity, structure and
                    personality.
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#996527]">
                    Who I help
                  </p>
                  <p className="leading-relaxed text-[#131c48]/65">
                    Brand owners, founders, organizations, institutions,
                    entrepreneurs and individuals ready to elevate their
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#131c48] px-5 py-28 text-[#fff8eb] md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-20 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
                02 — Expertise
              </p>

              <div>
                <h2 className="font-display text-5xl font-medium tracking-[-.05em] md:text-7xl">
                  What I <span className="italic text-[#996527]">do.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#fff8eb]/55">
                  Strategic visual design built around one simple idea:
                  make the message impossible to misunderstand.
                </p>
              </div>
            </div>

            <div className="border-t border-[#fff8eb]/15">
              {services.map(([number, title, description]) => (
                <motion.div
                  key={number}
                  whileHover={{ x: 8 }}
                  className="grid gap-5 border-b border-[#fff8eb]/15 py-9 md:grid-cols-[100px_1fr_1fr]"
                >
                  <span className="text-sm text-[#996527]">{number}</span>
                  <h3 className="font-display text-3xl font-medium">{title}</h3>
                  <p className="max-w-md text-[#fff8eb]/45">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
                03 — The process
              </p>

              <div>
                <h2 className="font-display text-5xl font-medium tracking-[-.05em] md:text-7xl">
                  From idea to
                  <br />
                  <span className="italic text-[#996527]">identity.</span>
                </h2>

                <div className="mt-16 grid gap-0 border-t border-[#131c48]/10 md:grid-cols-2">
                  {[
                    ["01", "Discover", "Understand the brand, audience, goals and opportunity."],
                    ["02", "Define", "Shape the creative direction and visual strategy."],
                    ["03", "Design", "Develop the identity, assets and applications."],
                    ["04", "Deliver", "Package the final system for confident, consistent use."],
                  ].map(([num, title, text]) => (
                    <div key={num} className="border-b border-[#131c48]/10 py-8 md:pr-10">
                      <span className="text-xs font-semibold text-[#996527]">{num}</span>
                      <h3 className="mt-3 font-display text-3xl">{title}</h3>
                      <p className="mt-3 max-w-sm leading-relaxed text-[#131c48]/55">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="bg-white px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
                04 — Selected work
              </p>

              <div>
                <h2 className="font-display text-5xl font-medium tracking-[-.05em] md:text-7xl">
                  Work worth
                  <br />
                  <span className="italic text-[#996527]">remembering.</span>
                </h2>
                <p className="mt-5 max-w-xl text-[#131c48]/55">
                  A curated selection of identities, campaigns and visual
                  systems. More case studies coming soon.
                </p>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {projects.map(([number, title, category], index) => (
                <motion.article
                  key={number}
                  whileHover={{ y: -7 }}
                  className="group"
                >
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-[#fff8eb]">
                    <div className="absolute inset-0 flex items-center justify-center transition duration-700 group-hover:scale-105">
                      <div className="text-center">
                        <span className="font-display text-7xl font-bold tracking-[-.09em] text-[#131c48]/10 md:text-9xl">
                          AIRS.
                        </span>
                        <p className="mt-3 text-xs uppercase tracking-[.3em] text-[#996527]">
                          Case study {number}
                        </p>
                      </div>
                    </div>

                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#131c48] text-[#fff8eb] transition group-hover:bg-[#996527]">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl">{title}</h3>
                      <p className="mt-1 text-sm text-[#131c48]/50">{category}</p>
                    </div>
                    <span className="text-sm text-[#996527]">{number}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
                  05 — Testimonials
                </p>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#131c48]/50">
                  Real words from real clients will live here. No manufactured
                  reviews — only genuine experiences.
                </p>
              </div>

              <div>
                <h2 className="font-display text-5xl font-medium tracking-[-.05em] md:text-7xl">
                  Good work gets
                  <br />
                  <span className="italic text-[#996527]">remembered.</span>
                </h2>

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                  {testimonials.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-[#131c48]/10 bg-white p-7"
                    >
                      <div>
                        <span className="font-display text-5xl text-[#996527]/40">“</span>
                        <p className="mt-2 text-lg leading-relaxed text-[#131c48]/55">
                          {item.quote}
                        </p>
                      </div>

                      <div className="border-t border-[#131c48]/10 pt-5">
                        <p className="font-medium">{item.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-[#131c48]/40">
                          {item.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative overflow-hidden bg-[#fff] px-5 py-32 md:px-10 md:py-48">
          <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#996527]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl text-center">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[.3em] text-[#996527]">
              Design philosophy
            </p>

            <blockquote className="font-display text-4xl font-medium leading-[1.05] tracking-[-.055em] md:text-7xl">
              “Instead of following trends, I focus on building
              <span className="text-[#996527]"> strong identity</span> for
              the brand — and I create for the
              <span className="text-[#996527]"> target audience.</span>”
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#996527]">
              06 — FAQ
            </p>

            <div>
              <h2 className="font-display text-5xl font-medium tracking-[-.05em] md:text-7xl">
                Before we
                <br />
                <span className="italic text-[#996527]">start.</span>
              </h2>

              <div className="mt-14 border-t border-[#131c48]/10">
                {faqs.map(([question, answer], index) => (
                  <div key={question} className="border-b border-[#131c48]/10">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-7 text-left"
                    >
                      <span className="font-display text-xl md:text-2xl">{question}</span>
                      <Plus
                        size={20}
                        className={`shrink-0 transition-transform ${openFaq === index ? "rotate-45" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 leading-relaxed text-[#131c48]/55">
                            {answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="rounded-t-[3rem] bg-[#131c48] px-5 py-28 text-[#fff8eb] md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[.3em] text-[#996527]">
              07 — Let's work
            </p>

            <div className="grid gap-16 lg:grid-cols-[1.4fr_.6fr]">
              <div>
                <h2 className="max-w-5xl font-display text-6xl font-medium leading-[.88] tracking-[-.065em] md:text-8xl">
                  Have a brand
                  <br />
                  worth <span className="italic text-[#996527]">talking</span>
                  <br />
                  about?
                </h2>

                <div className="mt-12 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/2348104281383?text=Hi%20AIRS!%20I%27d%20love%20to%20discuss%20a%20design%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-full bg-[#996527] px-7 py-4 font-medium text-[#fff8eb] transition hover:bg-[#fff8eb] hover:text-[#131c48]"
                  >
                    Start on WhatsApp
                    <MessageCircle size={18} />
                  </a>

                  <a
                    href="mailto:theairs001@gmail.com"
                    className="flex items-center gap-3 rounded-full border border-[#fff8eb]/20 px-7 py-4 font-medium transition hover:border-[#996527] hover:text-[#996527]"
                  >
                    Send an email
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-end lg:items-end">
                <p className="max-w-xs text-lg leading-relaxed text-[#fff8eb]/50 lg:text-right">
                  From Nigeria to anywhere in the world — let's create
                  something clear, distinctive and worth remembering.
                </p>

                <a
                  href="mailto:theairs001@gmail.com"
                  className="mt-8 border-b border-[#fff8eb]/20 pb-2 text-xl transition hover:border-[#996527] hover:text-[#996527]"
                >
                  theairs001@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-28 flex flex-col justify-between gap-5 border-t border-[#fff8eb]/10 pt-7 text-sm text-[#fff8eb]/35 md:flex-row">
              <span className="font-display text-lg font-bold text-[#fff8eb]">AIRS.</span>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/airs.studios/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#996527]"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/2348104281383"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#996527]"
                >
                  WhatsApp
                </a>
              </div>
              <span>© {new Date().getFullYear()} AIRS.</span>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING WHATSAPP */}
      <motion.a
        href="https://wa.me/2348104281383?text=Hi%20AIRS!%20I%27d%20love%20to%20discuss%20a%20design%20project."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-xl md:bottom-7 md:right-7"
      >
        <MessageCircle size={19} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>

      {/* BACK TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#131c48]/10 bg-[#fff8eb]/90 shadow-lg backdrop-blur-md transition hover:bg-[#131c48] hover:text-[#fff8eb] md:bottom-7 md:left-7"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;






