import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  link?: string;
  scope: string;
  client: string;
  location: string;
  date: string;
  status: string;
}

export function ProjectCard({
  imageSrc,
  title,
  scope,
  client,
  location,
  date,
  status,
  link = "",
}: ProjectCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative w-full h-48">
        <Image
          alt={title}
          fill
          className="object-cover"
          src={
            imageSrc ||
            "/placeholder.svg?height=400&width=600&query=energy%20infrastructure"
          }
        />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-foreground font-medium mb-2">
          Project Scope: {scope}
        </p>
        <p className="text-sm text-foreground font-medium mb-2">
          Client: {client}
        </p>
        <p className="text-sm text-foreground font-medium mb-2">
          Location: {location}
        </p>
        <p className="text-sm text-foreground font-medium mb-2">Date: {date}</p>
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
  );
}
