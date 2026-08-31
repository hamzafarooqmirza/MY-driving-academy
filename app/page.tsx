import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/nav";

const whyUs = [
  {
    icon: "workspace_premium",
    title: "DVSA-Qualified Instructors",
    body: "Patient, expert instructors dedicated to your safety and success behind the wheel.",
  },
  {
    icon: "spa",
    title: "Stress-Free, Patient Learning",
    body: "A tailored pace with comprehensive hazard perception and defensive driving techniques.",
  },
  {
    icon: "directions_car",
    title: "Modern Dual-Control Vehicles",
    body: "Learn in highly maintained, easy-to-drive modern cars fitted with dual controls.",
  },
  {
    icon: "schedule",
    title: "Extended Hours, 7 Days a Week",
    body: "Flexible lesson times from 7AM to 11PM, built around your schedule.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Students Trained" },
  { value: "98%", label: "Pass Rate" },
  { value: "7", label: "Days a Week" },
];

const journeySteps = [
  {
    icon: "event_available",
    title: "Book",
    body: "Simple online booking or a quick phone call.",
  },
  {
    icon: "person",
    title: "Meet Instructor",
    body: "We pick you up for your first orientation drive.",
  },
  {
    icon: "directions_car",
    title: "Practice",
    body: "Build real-road confidence with structured, progressive lessons.",
  },
  {
    icon: "workspace_premium",
    title: "Pass",
    body: "Ace your practical test with our expert preparation.",
  },
  {
    icon: "explore",
    title: "Drive Independently",
    body: "Freedom of the road starts here.",
  },
];

const galleryImages = [
  {
    src: "/driving-lessons.webp",
    alt: "A driving instructor smiling while a young student confidently drives.",
    label: "Driving Lessons",
    wide: true,
  },
  {
    src: "/hero-banner.webp",
    alt: "A blue car with an MY Driving Academy L-plate parked on a sunlit residential street.",
    label: "Our Fleet",
  },
  {
    src: "/test-prep.webp",
    alt: "A student sitting in a car reading a driving theory book outside a test centre.",
    label: "Test Preparation",
  },
  {
    src: "/motorway-lessons.webp",
    alt: "A driver's-eye view of a car approaching a motorway slip road.",
    label: "Motorway Lessons",
  },
  {
    src: "/block-bookings.webp",
    alt: "A car dashboard with keys, a booking calendar, and a navy branded notebook.",
    label: "Block Bookings",
  },
  {
    src: "/refresher-classes.webp",
    alt: "A mature adult student driving while a calm instructor chats with them.",
    label: "Refresher Classes",
    wide: true,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-primary-container py-20 md:py-28 lg:py-32">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-secondary-container/20 text-secondary-container px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary-container/30">
                Premium Driving Tuition · Leicester, UK
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-primary mb-6 leading-tight">
                Learn to Drive with{" "}
                <span className="text-secondary-container">Confidence</span>
              </h1>
              <p className="text-lg text-on-primary/85 max-w-xl mx-auto lg:mx-0 mb-8">
                Ready to start your driving journey? At MY Driving Academy, we
                make learning smooth, enjoyable, and stress-free from day
                one. Our expert instructors guide you step by step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Link
                  href="#contact"
                  className="bg-secondary-container text-on-secondary-fixed-variant font-semibold text-sm px-8 py-4 rounded-lg hover:bg-secondary-fixed-dim hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center shadow-lg"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-on-primary/50 text-on-primary font-semibold text-sm px-8 py-4 rounded-lg hover:bg-on-primary/10 hover:border-on-primary transition-colors w-full sm:w-auto text-center"
                >
                  Explore Services
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex text-secondary-container">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill text-lg">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm text-on-primary/80">
                  <span className="font-semibold text-on-primary">4.9/5</span>{" "}
                  from 500+ students trained
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden ambient-shadow aspect-[4/5] sm:aspect-[5/4]">
                <Image
                  src="/hero-banner.webp"
                  alt="A blue car with an MY Driving Academy L-plate parked on a sunlit residential street"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-surface rounded-xl ambient-shadow border border-outline-variant/30 px-5 py-4">
                <div className="w-11 h-11 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined fill">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-container leading-none">
                    10+ Years
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    of Driving Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 pt-8 border-t border-on-primary/15 text-center lg:text-left">
            <p className="text-xs font-semibold text-on-primary/70 mb-4 uppercase tracking-wider">
              Fast-Track Intensive Courses Available
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["3 Days", "5 Days", "7 Days", "10 Days"].map((d) => (
                <span
                  key={d}
                  className="bg-surface/10 text-on-primary px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm border border-surface/20"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 bg-surface-container-lowest -mt-8 relative z-20 mx-4 md:mx-10 rounded-xl ambient-shadow max-w-[1200px] xl:mx-auto"
        id="services"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-primary-container mb-4">
              Our Services
            </h2>
            <p className="text-on-surface-variant">
              Comprehensive tuition packages designed to suit every
              learner&apos;s needs, schedule, and experience level.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 100}>
                <Link
                  href={`/${service.slug}`}
                  className="group bg-surface-container-low rounded-xl overflow-hidden ambient-shadow hover-lift border border-outline-variant/30 flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1200px) 380px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-surface/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-container shadow-sm">
                      <span className="material-symbols-outlined text-xl">
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-on-surface mb-2">
                      {service.name}
                    </h3>
                    <p className="text-on-surface-variant mb-6 flex-grow">
                      {service.description}
                    </p>
                    <span className="text-primary-container font-semibold text-sm flex items-center gap-2 group-hover:text-secondary-container transition-colors mt-auto">
                      Learn More
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-24 bg-primary-container overflow-hidden"
        id="about"
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-secondary-container/20 text-secondary-container px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-secondary-container/30">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-primary mb-4">
              The Trusted Way to Learn to Drive
            </h2>
            <p className="text-on-primary/75">
              We believe learning to drive should be an exciting, empowering
              experience. Our curriculum is designed not just to help you
              pass your test, but to make you a safe, confident driver for
              life.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="relative">
              <div className="rounded-2xl overflow-hidden ambient-shadow h-[320px] sm:h-[420px] relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5giAMKkdorzjqPawVrA_KDCfGNpG1a2TB7FZ549-6ExoXY71L-mJycfPBY8cvH6FiOojGdU26VAQWSURyF9hkEC90Z19YMN5cJnJOJ8nA0C4lYT1LqFj6zf2T8fj_CmEWMHr14cxS9lMQi35EE0ybB8kG-goLh5YJ4NJg_p0mZI8dqJONAIm0TfItNg0YozTlptNlr9EJlrSdmUnd2_GdMpfqxv98tpDxgTU8AMTsgoE7jy6B53OvQ"
                  alt="A friendly driving instructor sitting in the passenger seat, encouraging a student driver."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 bg-surface rounded-xl ambient-shadow border border-outline-variant/30 px-5 py-4">
                <div className="w-11 h-11 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined fill">
                    military_tech
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-container leading-none">
                    98%
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    First-Time Pass Rate
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyUs.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="h-full bg-surface/10 backdrop-blur-sm rounded-xl p-6 border border-on-primary/10 hover:bg-surface/15 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-secondary-container/15 flex items-center justify-center text-secondary-container mb-4">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-semibold text-on-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-primary/70 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 pt-10 border-t border-on-primary/15 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-secondary-container">
                  {stat.value}
                </p>
                <p className="text-sm text-on-primary/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-container mb-4">
              Your Journey to Success
            </h2>
            <p className="text-on-surface-variant">
              A clear, structured path to gaining your full UK driving
              license with confidence.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-stretch">
            {journeySteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex ${
                  index === journeySteps.length - 1
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <Reveal delay={index * 100} className="w-full">
                  <div className="bg-surface rounded-xl p-6 ambient-shadow hover-lift border border-outline-variant/30 flex flex-col items-center text-center w-full">
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-secondary-container/15 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">
                          {step.icon}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary-container mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
                {index < journeySteps.length - 1 && (
                  <span className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-outline-variant">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-container mb-4">
              Life at MY Driving Academy
            </h2>
            <p className="text-on-surface-variant">
              A look at our students, instructors, and vehicles out on the
              road.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={(index % 4) * 100}
                className={image.wide ? "col-span-2 row-span-2" : ""}
              >
                <div className="group relative rounded-xl overflow-hidden ambient-shadow h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      image.wide
                        ? "(min-width: 768px) 50vw, 100vw"
                        : "(min-width: 768px) 25vw, 50vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-4 text-on-primary font-semibold text-sm md:text-base drop-shadow-sm">
                    {image.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden" id="contact">
        <Image
          src="/motorway-lessons.webp"
          alt="A driver's-eye view of a car approaching a motorway slip road."
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary-container/90 to-primary/95" />
        <Reveal className="relative z-10 max-w-[800px] mx-auto px-4 md:px-10 text-center">
          <span className="inline-block bg-secondary-container/20 text-secondary-container px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary-container/30">
            Start Today
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-on-primary mb-5 leading-tight">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-lg text-on-primary/85 mb-10 max-w-xl mx-auto">
            Get in touch and one of our friendly instructors will help you
            find the right course to get you on the road with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="mailto:hello@mydrivingacademy.com"
              className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-semibold text-sm px-8 py-4 rounded-lg hover:bg-secondary-fixed-dim hover:-translate-y-0.5 transition-all duration-200 shadow-lg w-full sm:w-auto"
            >
              Book Your First Lesson
              <span className="material-symbols-outlined ml-2 text-lg">
                calendar_month
              </span>
            </a>
            <a
              href="tel:+448001234567"
              className="inline-flex items-center justify-center border-2 border-on-primary/40 text-on-primary font-semibold text-sm px-8 py-4 rounded-lg hover:bg-on-primary/10 hover:border-on-primary transition-colors w-full sm:w-auto"
            >
              <span className="material-symbols-outlined mr-2 text-lg">
                call
              </span>
              0800 123 4567
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-on-primary/15">
            {[
              { icon: "verified", label: "DVSA-Qualified" },
              { icon: "military_tech", label: "98% Pass Rate" },
              { icon: "directions_car", label: "Dual-Control Cars" },
              { icon: "schedule", label: "7 Days a Week" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-on-primary/80 text-sm font-medium"
              >
                <span className="material-symbols-outlined text-secondary-container text-lg">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
