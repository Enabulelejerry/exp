import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;

  company: string;
  avatarSrc?: string;
}

export function TestimonialCard({
  quote,
  name,
  company,
}: // avatarSrc,
TestimonialCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <CardContent className="flex flex-col items-center text-center p-0">
        {/* <Avatar className="h-16 w-16 mb-4">
          <AvatarImage
            alt={name}
            src={
              avatarSrc ||
              "/placeholder.svg?height=64&width=64&query=person%20avatar"
            }
          />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar> */}
        <p className="text-lg italic text-foreground mb-4">"{quote}"</p>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardContent>
    </Card>
  );
}
