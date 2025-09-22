import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  ZapIcon,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + Social */}
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2" href="/">
            <ZapIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Experia Energy</span>
          </Link>
          <p className="text-sm opacity-90">
            Leading the future of energy services with expertise and innovation.
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="hover:text-primary transition-colors"
              href="https://facebook.com"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="https://twitter.com"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="https://linkedin.com"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="grid gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Services */}
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Services</h3>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Flowline/Pipeline Construction & Repairs
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Corrosion Control
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Facility Maintenance & Upgrade
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Procurement
          </Link>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href="/services"
          >
            Hot-Tap/Stopple Operations
          </Link>
        </div>

        {/* Contact */}
        <address className="grid gap-3 not-italic">
          <h3 className="text-lg font-semibold">Contact Us</h3>

          <p className="text-sm opacity-90">
            Corporate Head Office: 24 Isiokpo Street, D-Line, Port Harcourt,
            Nigeria
          </p>

          <div className="text-sm">
            <span className="font-medium">Email:</span>
            <ul className="mt-1 space-y-1">
              {/* Make sure label matches href domain you intend */}
              <li>
                <a
                  href="mailto:info@experiaenergy.org"
                  className="hover:text-primary"
                >
                  info@experiaenergy.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:experiaenergy@gmail.com"
                  className="hover:text-primary"
                >
                  experiaenergy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <span className="font-medium">Phone:</span>
            <ul className="mt-1 space-y-1">
              <li>
                <a href="tel:+2348037080584" className="hover:text-primary">
                  +234 803 708 0584
                </a>
              </li>
              <li>
                <a href="tel:+234805924591" className="hover:text-primary">
                  +234 805 924 5917
                </a>
              </li>
            </ul>
          </div>
        </address>
      </div>

      <div className="container pb-8 -mt-4">
        <hr className="border-white/10" />
      </div>

      <div className="container pb-[env(safe-area-inset-bottom)] pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Experia Energy Services Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
