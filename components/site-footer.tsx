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
    <footer className="bg-card py-16 text-foreground border-t bg-black text-white">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2" href="/">
            <ZapIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Experia Energy</span>
          </Link>
          <p className="text-sm text-white">
            Leading the future of energy services with expertise and innovation.
          </p>
          <div className="flex gap-4">
            <Link
              className="text-white hover:text-primary transition-colors"
              href="#"
            >
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              className="text-white hover:text-primary transition-colors"
              href="#"
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              className="text-white hover:text-primary transition-colors"
              href="#"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              className="text-white hover:text-primary transition-colors"
              href="#"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Services</h3>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Flowline/Pipeline Construction & Repairs
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Corrosion Control
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Facility Maintenance & Upgrade
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Procurement
          </Link>
          <Link
            className="text-sm text-white hover:text-primary transition-colors"
            href="/services"
          >
            Hot-Tap/Stopple Operations
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-white">
            Corporate Head Office: 24 Isiokpo Street, D-Line, Port Harcourt,
            Nigeria
          </p>
          <p className="text-sm text-white">
            Email:{" "}
            <div>
              <a
                href="mailto:info@experiaenergy.com"
                className="hover:text-primary"
              >
                info@experiaenergy.org
              </a>
            </div>
            <div>
              <a
                href="mailto:experiaenergy@gmail.com"
                className="hover:text-primary"
              >
                experiaenergy@gmail.com
              </a>
            </div>
          </p>
          <p className="text-sm text-white">
            Phone:{" "}
            <p>
              <a href="tel:08037080584" className="hover:text-primary">
                +(234) 8037080584
              </a>
            </p>
            <p>
              <a href="tel:0805924591" className="hover:text-primary">
                +(234) 805924591
              </a>
            </p>
          </p>
        </div>
      </div>
      <div className="container mt-8 text-center text-sm text-white">
        © {new Date().getFullYear()} Experia Energy Services Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
