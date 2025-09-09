import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ValuePropositionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValuePropositionCard({
  icon: Icon,
  title,
  description,
}: ValuePropositionCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <CardHeader className="pb-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="h-8 w-8 text-[#ffd119]" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
