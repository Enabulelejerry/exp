import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  outcome: string;
  link?: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  outcome,
  link = "",
}: ProjectCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative w-full h-48">
        <Image
          alt={title}
          className="object-cover rounded-t-lg"
          fill
          src={
            imageSrc ||
            "/placeholder.svg?height=400&width=600&query=energy%20infrastructure"
          }
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground font-medium mb-2">Outcome:</p>
        <p className="text-sm text-muted-foreground">{outcome}</p>
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
