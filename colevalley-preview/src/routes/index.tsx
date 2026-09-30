import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Snowflake,
  Flame,
  Wrench,
  Wind,
  Thermometer,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const BUSINESS = {
  name: "Cole Valley Air Conditioner Repair",
  phone: "(415) 906-7519",
  phoneHref: "tel:+14159067519",
  rating: "4.8",
  reviewCount: 53,
  city: "San Francisco",
  neighborhood: "Cole Valley",
  hours: "Open Daily · 9:00 AM – 8:00 PM",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BUSINESS.name,
  telephone: "+1-415-906-7519",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.7212, longitude: -122.6238 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "53",
  },
  areaServed: "San Francisco Bay Area, CA",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cole Valley Air Conditioner Repair | San Francisco HVAC — (415) 906-7519" },
      {
        name: "description",
        content:
          "San Francisco's trusted heating & cooling experts. 4.8-star rated AC repair, furnace service, and HVAC installation in Cole Valley and across the city. Call (415) 906-7519.",
      },
      { property: "og:title", content: "Cole Valley Air Conditioner Repair | San Francisco HVAC" },
      {
        property: "og:description",
        content:
          "4.8-star rated AC & furnace repair in San Francisco. Same-day service, upfront pricing. Call (415) 906-7519.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const services = [
  {
    icon: Snowflake,
    title: "AC Repair & Diagnostics",
    text: "Strange noises, warm air, or a unit that won't start? We find the real problem fast and fix it right — so you're cool again the same day, not next week.",
  },
  {
    icon: Flame,
    title: "Furnace Repair & Replacement",
    text: "From clogged filters to full basement furnace replacements, we restore even, reliable heat throughout your home — before the fog rolls in.",
  },
  {
    icon: Wind,
    title: "HVAC Installation",
    text: "New system, sized right for San Francisco's microclimates. We handle installation cleanly and efficiently, with upfront pricing and no surprises.",
  },
  {
    icon: Thermometer,
    title: "Maintenance & Tune-Ups",
    text: "Seasonal tune-ups that catch small issues before they become midnight emergencies — lower bills, longer system life, zero stress.",
  },
  {
    icon: Wrench,
    title: "Blower Motors & Parts",
    text: "Worn blower motor? Failing capacitor? We stock common parts and complete most repairs in a single visit, so you're not waiting on shipments.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Diagnostics",
    text: "We explain exactly what's wrong, what it costs, and what your options are — in plain English. You approve the price before we turn a wrench.",
  },
];

const reviews = [
  {
    name: "Daniel R.",
    text: "Our basement furnace died completely in the middle of a cold snap. Cole Valley Air Conditioner Repair replaced the whole unit and now every room heats evenly. Efficient, clean, and fairly priced.",
  },
  {
    name: "Maya T.",
    text: "My furnace kept shutting off and two other companies couldn't figure it out. Their tech found a clogged filter, cleaned the whole system, and it's run perfectly since. Punctual and professional.",
  },
  {
    name: "James L.",
    text: "The AC started making a horrible grinding noise during the September heat wave. They arrived right on time, diagnosed it in minutes, and had it fixed the same visit. Absolute lifesavers.",
  },
  {
    name: "Priya S.",
    text: "What I appreciated most was the explanation — they walked me through exactly what failed and why, with options at different price points. No pressure, no upsell. Rare these days in SF.",
  },
];

const faqs = [
  {
    q: "How much will my repair cost?",
    a: "We diagnose first, then give you a firm, upfront price before any work begins. You'll never see a surprise line item on your bill — the price we quote is the price you pay.",
  },
  {
    q: "How fast can you get here?",
    a: "We offer same-day service across San Francisco, and we're open 7 days a week from 9 AM to 8 PM. Call (415) 906-7519 and we'll give you a real arrival window — not a vague all-day block.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes. Every repair is backed by our workmanship guarantee, and we only use quality parts. If something we fixed isn't right, we come back and make it right.",
  },
  {
    q: "Will you try to sell me a whole new system?",
    a: "No. If a repair makes sense, we repair. We'll always show you the math on repair vs. replacement honestly, but the decision is yours — our reviews reflect that.",
  },
  {
    q: "Are ductless mini-splits a good fit for older SF homes?",
    a: "Absolutely — they're often the best option. Most Victorian and Edwardian homes were never built with ductwork, and mini-splits don't need any. Each indoor unit is its own zone, so you control the temperature room by room while using far less energy.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-star text-star" aria-hidden="true" />
      ))}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative flex min-h-[92vh] items-center">
        <img
          src={heroImg}
          alt="HVAC technician repairing an air conditioning unit on a San Francisco home"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy-deep/75" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-5xl px-5 py-24 text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-sm font-medium text-white/90">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Serving the San Francisco Bay Area
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            San Francisco's Most Trusted AC & Furnace Repair —{" "}
            <span className="text-flame">Same-Day Service</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 md:mx-0 md:text-xl">
            4.8-star rated heating and cooling experts serving Cole Valley and the entire city.
            Upfront pricing, on-time arrivals, and repairs done right the first visit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: {BUSINESS.phone}
            </a>
            <a href="#quote" className="btn-ghost">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* Trust banner */}
      <section className="bg-navy py-5" aria-label="Trust indicators">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-sm font-semibold text-white">
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4 fill-star text-star" aria-hidden="true" />
            {BUSINESS.rating}-Star Rated on Google ({BUSINESS.reviewCount} reviews)
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Fully Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.hours}
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Upfront, Honest Pricing
          </span>
        </div>
      </section>

      {/* Services */}
      <main>
        <section className="section-pad bg-background" aria-labelledby="services-heading">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="services-heading" className="text-center text-3xl font-bold md:text-4xl">
              Heating & Cooling, Handled
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              Whatever your system is doing — or refusing to do — we've seen it and fixed it
              hundreds of times across San Francisco.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-secondary p-3">
                    <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ductless Mini-Splits */}
        <section className="section-pad bg-navy text-white" aria-labelledby="minisplit-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-sm font-medium text-white/90">
                <Wind className="h-4 w-4" aria-hidden="true" />
                Zoned comfort — no ductwork required
              </p>
              <h2 id="minisplit-heading" className="text-3xl font-bold md:text-4xl">
                Ductless Mini-Split Installation & Repair
              </h2>
              <p className="mt-5 leading-relaxed text-white/85">
                Mini-split systems are ideal for Cole Valley homes, where limited duct
                infrastructure and older buildings call for flexible temperature control. They let
                you cool room by room — highly efficient for multi-room Victorian and Edwardian
                homes — with real energy savings and an installation that fits tight architectural
                spaces where ductwork simply can't go.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Mini-split installation",
                  "Refrigerant repairs",
                  "Electrical diagnostics",
                  "Airflow balancing",
                  "Sensor calibration",
                  "Multi-zone systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-semibold text-white/90"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={BUSINESS.phoneHref} className="btn-primary mt-8">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Ask About Mini-Splits: {BUSINESS.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Thermometer className="h-8 w-8 text-flame" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">Modern comfort control for older homes</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                One outdoor unit, several quiet indoor heads, and a remote or app for each zone.
                Warm upstairs bedroom, cool stuffy parlor, mild downstairs — all from one system,
                without tearing open walls to run ducts.
              </p>
              <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 text-sm">
                <p className="flex items-start gap-3">
                  <Snowflake className="mt-0.5 h-5 w-5 shrink-0 text-flame" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Energy efficiency.</strong>{" "}
                    <span className="text-white/75">
                      Zoned cooling means you only condition the rooms you're using.
                    </span>
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-flame" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Full-service repairs.</strong>{" "}
                    <span className="text-white/75">
                      Refrigerant, electrical, airflow, and sensor work — we service every brand.
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section-pad bg-frost" aria-labelledby="about-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold md:text-4xl">
                Your Neighbors in Cole Valley — Not a Call Center
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We work where we live. San Francisco homes are unlike anywhere else — Victorian
                layouts, fog-cooled summers, microclimates that swing 20 degrees across a few
                blocks. A national chain reads from a script; we read your house.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every technician who walks through your door is punctual, transparent, and trained
                to explain the problem in plain English before touching a tool. That's why {BUSINESS.reviewCount} of
                your neighbors have rated us {BUSINESS.rating} stars on Google — and why most of our
                work comes from referrals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "4.8★", l: "Google rating" },
                { n: "53", l: "Verified reviews" },
                { n: "7 days", l: "Open every week" },
                { n: "Same-day", l: "Service available" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="rounded-2xl bg-card p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-extrabold text-primary">{stat.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section-pad bg-navy-deep" aria-labelledby="reviews-heading">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="reviews-heading" className="text-center text-3xl font-bold text-white md:text-4xl">
              What San Francisco Homeowners Say
            </h2>
            <p className="mt-3 text-center text-white/70">
              Real reviews from real neighbors — {BUSINESS.rating} stars across {BUSINESS.reviewCount} Google reviews.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-2xl bg-navy p-7">
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed text-white/90">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                    {r.name}
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/80">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Verified customer
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad bg-background" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-5">
            <h2 id="faq-heading" className="text-center text-3xl font-bold md:text-4xl">
              Questions? Straight Answers.
            </h2>
            <div className="mt-10 divide-y rounded-2xl border bg-card">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaq === i && (
                    <div id={`faq-panel-${i}`} className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Lead capture */}
        <section id="quote" className="section-pad bg-frost" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 id="contact-heading" className="text-3xl font-bold md:text-4xl">
                Get Your Free Estimate
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Call now for the fastest response, or send the form and we'll call you back —
                usually within the hour during business hours.
              </p>
              <address className="mt-8 space-y-4 not-italic">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>{BUSINESS.name}</strong>
                      <br />
                      Mobile service — San Francisco Bay Area, CA
                    </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={BUSINESS.phoneHref} className="font-semibold text-primary underline">
                    {BUSINESS.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {BUSINESS.hours}
                </p>
              </address>
              <div className="mt-8 overflow-hidden rounded-2xl border shadow-sm">
                <iframe
                  title="Map of the San Francisco Bay Area"
                  src="https://www.google.com/maps?q=San+Francisco+Bay+Area,+CA&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <BadgeCheck className="h-12 w-12 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold">Request received!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We'll call you back shortly. Need us sooner? Call{" "}
                    <a href={BUSINESS.phoneHref} className="font-semibold text-primary underline">
                      {BUSINESS.phone}
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="min-h-12 w-full rounded-lg border bg-background px-4"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="min-h-12 w-full rounded-lg border bg-background px-4"
                      placeholder="(415) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="min-h-12 w-full rounded-lg border bg-background px-4"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option>AC Repair</option>
                      <option>Furnace Repair</option>
                      <option>Ductless Mini-Split Install / Repair</option>
                      <option>New System Installation</option>
                      <option>Maintenance / Tune-Up</option>
                      <option>Something Else</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send My Free Quote
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam, no obligation. We call, we quote, you decide.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-deep py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <p className="text-lg font-bold">{BUSINESS.name}</p>
          <p className="text-sm text-white/70">
            Mobile service — San Francisco Bay Area, CA · {BUSINESS.hours}
          </p>
          <a href={BUSINESS.phoneHref} className="btn-primary">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <p className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
