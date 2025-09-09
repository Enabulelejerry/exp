import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  imageSrc: string; // Added imageSrc prop
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link = "",
  imageSrc,
}: ServiceCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-col p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative w-full h-48">
        <Image
          alt={title}
          className="object-cover"
          fill
          src={
            imageSrc ||
            "/placeholder.svg?height=300&width=500&query=energy%20service"
          }
        />
      </div>
      <CardHeader className="pb-4 px-6 pt-6">
        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="h-8 w-8 text-[#ffd119]" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-6">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {link && (
        <div className="px-6 pb-6 pt-0">
          <Button
            asChild
            variant="outline"
            className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href={link}>Learn More</Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
