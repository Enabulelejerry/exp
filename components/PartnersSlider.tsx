"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Logo = {
  src: string;
  alt: string;
  href?: string; // optional link to partner site
  width?: number; // optional, defaults below
  height?: number; // optional, defaults below
};

type Props = {
  items: Logo[];
  speedSeconds?: number; // how fast one full loop takes
  className?: string;
};

export default function PartnersSlider({
  items,
  speedSeconds = 40,
  className = "",
}: Props) {
  // If nothing, render nothing.
  if (!items || items.length === 0) return null;

  // Duplicate sequence to create a seamless loop.
  const sequence = useMemo(() => [...items, ...items], [items]);

  return (
    <div
      className={`group relative w-full overflow-hidden py-8 ${className}`}
      aria-label="Our partners logos"
      style={{
        // Nice fade on edges
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="track flex items-center gap-12 whitespace-nowrap will-change-transform"
        style={
          {
            "--speed": `${speedSeconds}s`,
          } as React.CSSProperties
        }
      >
        {sequence.map((logo, i) => {
          const w = logo.width ?? 160;
          const h = logo.height ?? 64;

          const img = (
            <img
              src={logo.src}
              alt={logo.alt}
              width={w}
              height={h}
              loading="lazy"
              decoding="async"
              className="opacity-80 hover:opacity-100 transition-opacity object-contain"
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).style.display = "none")
              }
              draggable={false}
            />
          );

          return (
            <div key={`${logo.src}-${i}`} className="shrink-0">
              {logo.href ? (
                <Link
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                >
                  {img}
                </Link>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* one long strip that slides left; because we duplicated the sequence,
           -50% lands exactly at the same visual state for a perfect loop */
        .track {
          animation: scroll var(--speed) linear infinite;
        }
        .group:hover .track {
          animation-play-state: paused; /* pause on hover */
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
