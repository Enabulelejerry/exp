import { ServiceCard } from "@/components/service-card";
import {
  PackageIcon,
  HardHatIcon,
  HammerIcon,
  ClipboardCheckIcon,
  BuildingIcon,
  WrenchIcon,
  UsersIcon,
  DropletIcon,
  PiIcon as PipeIcon,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: PackageIcon,
      title: "Sectional Replacements & Leak Repairs",
      description:
        "We provide Sectional Replacement of Flowlines and Pipelines either on land or swamp areas.We also carry out leak repair on Pipelines and Flowlines, using different methods.",
      imageSrc: "/images/service1.jpg",
    },
    {
      icon: HardHatIcon,
      title: "Wellhead Installation & Maintenance",
      description:
        "We have been engaged in Wellhead installation and maintenance projects for a long time, with trained professionals. Our expertise covers wellheads from various manufacturers in different types of locations.",
      imageSrc: "/images/eng.jpg",
    },
    {
      icon: HammerIcon,
      title: "Facility Maintenance & Upgrade",
      description:
        "Our specialist services provide for optimization of Production Facilities, and we are able to simultaneously carry out our operations, thus minimizing shut down periods - even in live offshore production platforms.",
      imageSrc: "/images/fab.jpg",
    },
    {
      icon: ClipboardCheckIcon,
      title: "Construction of Flowlines & Pipelines",
      description:
        "Experia Energy Services Limited takes great pride in dedicating its expertise to major Flowline and Pipeline Construction projects (both on land and swamps), throughout the country and beyond.",
      imageSrc: "/images/service2.jpg",
    },
    {
      icon: BuildingIcon,
      title: "Corrosion Control",
      description:
        "Experia Energy has a team of NACE-certified corrosion control experts/inspectors to deliver prompt solutions for extending the lifespan of structural elements. We also provide cathodic protection services.",
      imageSrc: "/images/eng.jpg",
    },
    {
      icon: WrenchIcon,
      title: "Equipment Leasing",
      description:
        "Experia Energy provides services in the leasing of pre-mobbed industrial heavy equipment, such as Cranes, Forklift, Swamp Buggy, Air Compressor, Pumps, Welding machine, Air dryer, Air Tank, Blasting & Painting spread, Floodlights, etc.",
      imageSrc: "/images/project2.jpg",
    },
    {
      icon: UsersIcon,
      title: "Manpower Supply & Equipment Leasing",
      description:
        "Providing skilled personnel and state-of-the-art equipment for project flexibility and efficiency.",
      imageSrc: "/images/service3.jpg",
    },
    {
      icon: DropletIcon,
      title: "Procurement",
      description:
        "Our seasoned expertise and strategy in foreign and local procurement optimize our client’s processes, so as to remain productive, efficient and profitable.",
      imageSrc: "/images/procument.jpg",
    },
    {
      icon: PipeIcon,
      title: "Civil & Structural Works",
      description:
        "Our construction expertise is driven by the principles of integrity, strict compliance to Civil Engineering Standars and a passion for Excellence.",
      imageSrc: "/images/service4.jpg",
    },
  ];

  return (
    <div className="container py-16 md:py-24">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Comprehensive Energy Services
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Experia Energy Services Limited offers a full spectrum of integrated
          solutions designed to meet the demanding needs of the energy sector.
          Our expertise ensures efficiency, safety, and reliability.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc} // Pass the imageSrc to the ServiceCard
            />
          ))}
        </div>
      </section>
    </div>
  );
}
