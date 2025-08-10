"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/logo.jpg"
            alt="Your Company Name Logo"
            width={200}
            height={200}
            priority
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />

          {/* <ZapIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">
            Experia Energy
          </span> */}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="md:hidden bg-transparent"
              size="icon"
              variant="outline"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6">
              <Link
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
