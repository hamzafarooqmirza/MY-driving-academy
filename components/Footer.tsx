import Link from "next/link";
import { mainNav } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-10 py-12 max-w-[1200px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold text-on-primary-container mb-4">
            MY Driving Academy
          </div>
          <p className="text-sm text-on-primary-container/80">
            Professional, patient, and modern driving tuition for the next
            generation of safe drivers.
          </p>
          <p className="text-xs text-on-primary-container/60 mt-4">
            © {new Date().getFullYear()} MY Driving Academy. All rights
            reserved.
          </p>
        </div>

        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 md:justify-end content-start">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-on-primary-container/80 hover:text-secondary-fixed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed rounded-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#"
            className="text-sm text-on-primary-container/80 hover:text-secondary-fixed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed rounded-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-on-primary-container/80 hover:text-secondary-fixed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed rounded-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
