import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="hero-section relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner1.jpg')" }}
      // Optional: nudge trigger point for tall heroes
      data-aos-anchor-placement="top-bottom"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        data-aos="fade"
        data-aos-duration="700"
        data-aos-once="true"
      />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 max-w-3xl space-y-6 text-white">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-anchor=".hero-section"
        >
          Powering Progress, Delivering Excellence
        </h1>

        <p
          className="text-lg md:text-xl drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="800"
          data-aos-anchor=".hero-section"
        >
          Experia Energy Services Limited is a leader in the energy sector,
          providing innovative solutions and unwavering commitment to safety and
          client success.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="700"
          data-aos-anchor=".hero-section"
        >
          <Button asChild className="px-8 py-3 text-lg bg-[#f3ca2b]">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button
            asChild
            className="px-8 py-3 text-lg"
            variant="secondary"
            // Optional: small extra delay for a staggered feel
            data-aos="zoom-in"
            data-aos-delay="520"
            data-aos-duration="700"
            data-aos-anchor=".hero-section"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
