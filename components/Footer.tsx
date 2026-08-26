import Image from "next/image";
import Link from "next/link";
import { legalNav, mainNav, services } from "@/lib/nav";

const linkClasses =
  "text-sm text-on-primary-container/75 hover:text-secondary-fixed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed rounded-sm";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <span className="bg-surface rounded-lg p-1.5 shadow-sm shrink-0">
                <Image
                  src="/site-icon.png"
                  alt=""
                  width={318}
                  height={313}
                  className="h-8 w-8"
                />
              </span>
              <span className="text-xl font-bold text-on-primary-container tracking-tight">
                MY Driving Academy
              </span>
            </Link>
            <p className="text-sm text-on-primary-container/75 max-w-xs leading-relaxed">
              Professional, patient, and modern driving tuition for the next
              generation of safe drivers.
            </p>
            <div className="mt-5 space-y-2">
              <a
                href="mailto:hello@mydrivingacademy.com"
                className={`flex items-center gap-2 w-fit ${linkClasses}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                hello@mydrivingacademy.com
              </a>
              <a
                href="tel:+448001234567"
                className={`flex items-center gap-2 w-fit ${linkClasses}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                0800 123 4567
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-primary-container/50 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-primary-container/50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className={linkClasses}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-primary-container/50 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-on-primary-container/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-on-primary-container/50">
            © {new Date().getFullYear()} MY Driving Academy. All rights
            reserved.
          </p>
          <p className="text-xs text-on-primary-container/50">
            DVSA-qualified instructors · Leicester, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
