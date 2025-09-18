// components/ProjectGallery.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // optional helper; replace with your own if not using

type Props = {
  scope: string;
  images: string[];
  open: boolean;
  onOpenChange: (v: boolean) => void;
  startIndex?: number;
};

export default function ProjectGallery({
  scope,
  images,
  open,
  onOpenChange,
  startIndex = 0,
}: Props) {
  const [index, setIndex] = React.useState(startIndex);

  React.useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  console.log(images);

  // Keyboard nav
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-5xl w-full p-0 bg-black/95 text-white border-0"
        aria-describedby={undefined}
      >
        <div className="relative">
          <DialogTitle className="sr-only">{scope} – Gallery</DialogTitle>

          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="absolute right-2 top-2 z-20 bg-black/40 hover:bg-black/60 text-white"
            aria-label="Close"
          >
            <X />
          </Button>

          {/* Image area */}
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={images[index]}
              alt={`${scope} image ${index + 1}`}
              fill
              priority
              className="object-contain select-none"
            />
          </div>

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white/10 hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white/10 hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Thumbnails */}
          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setIndex((prev) => (prev - 1 + images.length) % images.length)
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
