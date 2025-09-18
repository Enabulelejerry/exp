// components/ProjectCard.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectGallery from "./ProjectGallery";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  link?: string;
  scope: string;
  client: string;
  location: string;
  date: string;
  status: string;
  images?: string[]; // NEW
}

export function ProjectCard({
  imageSrc,
  title,
  scope,
  client,
  location,
  date,
  status,
  images = [],
  link = "",
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  // Use images[0] as cover if provided, else fallback to imageSrc
  const cover =
    images[0] ||
    imageSrc ||
    "/placeholder.svg?height=400&width=600&query=energy%20infrastructure";
  const gallery = images.length ? images : [cover];

  return (
    <>
      <Card
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative w-full h-48 cursor-zoom-in group"
          aria-label={`Open ${title} gallery`}
          title="Click to view more images"
        >
          <Image alt={title} fill className="object-cover" src={cover} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          {gallery.length > 1 && (
            <span className="absolute bottom-2 right-2 text-[11px] px-2 py-1 rounded bg-black/60 text-white">
              +{gallery.length - 1} more
            </span>
          )}
        </button>

        {/* <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader> */}

        <CardContent className="mt-4">
          <p className="text-sm text-foreground font-medium mb-2">
            Project Scope: {scope}
          </p>
          <p className="text-sm text-foreground font-medium mb-2">
            Client: {client}
          </p>
          <p className="text-sm text-foreground font-medium mb-2">
            Location: {location}
          </p>
          <p className="text-sm text-foreground font-medium mb-2">
            Date: {date}
          </p>
          <p className="text-sm text-foreground font-medium mb-2">
            Status: {status}
          </p>
        </CardContent>

        {link && (
          <div className="p-6 pt-0">
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href={link}>View Details</Link>
            </Button>
          </div>
        )}
      </Card>

      {/* Lightbox / Gallery */}
      <ProjectGallery
        scope={scope}
        images={gallery}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
