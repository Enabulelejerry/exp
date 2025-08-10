import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner1.jpg')" }}
    >
      {/*  Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 max-w-3xl space-y-6 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
          Powering Progress, Delivering Excellence
        </h1>
        <p className="text-lg md:text-xl drop-shadow-lg">
          Experia Energy Services Limited is a leader in the energy sector,
          providing innovative solutions and unwavering commitment to safety and
          client success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Button asChild className="px-8 py-3 text-lg bg-[#f3ca2b]">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button asChild className="px-8 py-3 text-lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
