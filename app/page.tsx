import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/nav";

const features = [
  { icon: "workspace_premium", label: "Qualified Instructors" },
  { icon: "spa", label: "Stress-Free Learning" },
  { icon: "directions_car", label: "Dual-Control Cars" },
  { icon: "schedule", label: "Extended Hours", sub: "7AM - 11PM" },
];

const whyUs = [
  {
    title: "Safety First Approach",
    body: "Comprehensive hazard perception and defensive driving techniques.",
  },
  {
    title: "Patient Instruction",
    body: "Tailored learning pace suitable for nervous beginners.",
  },
  {
    title: "Modern Vehicles",
    body: "Learn in highly maintained, easy-to-drive modern cars with dual controls.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary-container">
        <Image
          src="/hero-banner.webp"
          alt="A blue car with an MY Driving Academy L-plate parked on a sunlit residential street"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10 text-center w-full py-24">
          <div className="inline-block bg-secondary-container/20 text-secondary-container px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary-container/30">
            Premium Driving Tuition
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-on-primary mb-6 max-w-4xl mx-auto leading-tight">
            Learn to Drive with{" "}
            <span className="text-secondary-container">Confidence</span>
          </h1>
          <p className="text-lg text-on-primary/90 max-w-2xl mx-auto mb-10">
            Ready to start your driving journey? At MY Driving Academy, we
            make learning smooth, enjoyable, and stress-free from day one.
            Our expert instructors guide you step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#contact"
              className="bg-secondary-container text-on-secondary-fixed-variant font-semibold text-sm px-8 py-4 rounded-lg hover:bg-secondary-fixed-dim transition-colors w-full sm:w-auto text-center shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="#services"
              className="border-2 border-on-primary text-on-primary font-semibold text-sm px-8 py-4 rounded-lg hover:bg-on-primary/10 transition-colors w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
          </div>
          <div className="pt-8 border-t border-on-primary/20">
            <p className="text-xs font-semibold text-on-primary/70 mb-4 uppercase tracking-wider">
              Fast-Track Intensive Courses Available
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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

      <section className="py-12 bg-surface-container-lowest -mt-8 relative z-20 mx-4 md:mx-10 rounded-xl ambient-shadow max-w-[1200px] xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined fill text-3xl">
                  {f.icon}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-on-surface">
                {f.label}
              </h3>
              {f.sub && (
                <p className="text-xs text-on-surface-variant mt-1">
                  {f.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-16 my-12 max-w-[1200px] mx-auto px-4 md:px-10"
        id="about"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden ambient-shadow h-[400px] relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5giAMKkdorzjqPawVrA_KDCfGNpG1a2TB7FZ549-6ExoXY71L-mJycfPBY8cvH6FiOojGdU26VAQWSURyF9hkEC90Z19YMN5cJnJOJ8nA0C4lYT1LqFj6zf2T8fj_CmEWMHr14cxS9lMQi35EE0ybB8kG-goLh5YJ4NJg_p0mZI8dqJONAIm0TfItNg0YozTlptNlr9EJlrSdmUnd2_GdMpfqxv98tpDxgTU8AMTsgoE7jy6B53OvQ"
              alt="A friendly driving instructor sitting in the passenger seat, encouraging a student driver."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary-container mb-6">
              MY Driving Academy: Your Path to Independent Driving
            </h2>
            <p className="text-on-surface-variant mb-8">
              We believe that learning to drive should be an exciting and
              empowering experience. Our curriculum is designed not just to
              help you pass your test, but to make you a safe, confident
              driver for life.
            </p>
            <ul className="space-y-4">
              {whyUs.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container mt-1">
                    check_circle
                  </span>
                  <div>
                    <strong className="text-on-surface block mb-1">
                      {item.title}
                    </strong>
                    <p className="text-on-surface-variant">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-low" id="services">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary-container mb-4">
              Our Services
            </h2>
            <p className="text-on-surface-variant">
              Comprehensive tuition packages designed to suit every
              learner&apos;s needs, schedule, and experience level.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift border border-outline-variant/30 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-on-surface mb-2">
                  {service.name}
                </h3>
                <p className="text-on-surface-variant mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/${service.slug}`}
                  className="text-primary-container font-semibold text-sm flex items-center gap-2 hover:text-secondary-container transition-colors mt-auto"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 max-w-[1200px] mx-auto px-4 md:px-10"
        id="contact"
      >
        <div className="bg-primary-container rounded-2xl p-8 md:p-16 text-center ambient-shadow">
          <h2 className="text-3xl font-bold text-on-primary-container mb-4">
            Ready to book your first lesson?
          </h2>
          <p className="text-lg text-on-primary-container/80 mb-8 max-w-xl mx-auto">
            Get in touch and one of our friendly instructors will help you
            find the right course to get you on the road.
          </p>
          <a
            href="mailto:hello@mydrivingacademy.com"
            className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-semibold text-sm px-8 py-4 rounded-lg hover:bg-secondary-fixed-dim transition-colors shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
