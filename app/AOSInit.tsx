"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      offset: 80,
      once: true, // animate only once
    });
  }, []);

  // Refresh on route change so newly-mounted elements animate
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
}
