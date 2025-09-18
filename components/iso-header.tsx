"use client";

import Link from "next/link";
import Image from "next/image";

export function IsoHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/90 backdrop-blur-sm shadow-sm">
      <div className="container flex h-10 items-center justify-between">
        {" "}
        {/* 40px tall */}
        <Link className="flex items-center gap-2" href="/" aria-label="Home">
          <Image
            src="/images/iso.png"
            alt="ISO Certification"
            width={120}
            height={24}
            priority
            className="h-6 w-auto object-contain" // fits 40px bar
          />
        </Link>
      </div>
    </header>
  );
}
