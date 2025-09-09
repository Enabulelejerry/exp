import { HeroSection } from "@/components/hero-section";
import { ValuePropositionCard } from "@/components/value-proposition-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  LightbulbIcon,
  ShieldCheckIcon,
  UsersIcon,
  PackageIcon,
  HardHatIcon,
  HammerIcon,
} from "lucide-react";
import {} from "@/components/ui/card";
// import Image from "next/image";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const valueProps = [
    {
      icon: LightbulbIcon,
      title: "MISSION STATEMENT",
      description:
        "Delivering value-added services to our clients through innovative and customized solutions focused on the Energy, Construction, Power, Oil & Gas industries.",
    },
    {
      icon: ShieldCheckIcon,
      title: "VISION STATEMENT",
      description:
        "Becoming the Best-in-class Service provider in the Nigerian Oil & Gas sector renowned for excellence in Equipment Supplies, Engineering, Procurement and Construction Projects as well as Marine Services using Best Available Technology and Best Available Resources.",
    },
    {
      icon: UsersIcon,
      title: "OUR STANDARD",
      description:
        "We meet all international best practice quality standard by developing a system of monitoring all our projects to ensure compliance with each client's standard requirements and value for their money.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Experia Energy delivered our project ahead of schedule and within budget. Their professionalism and expertise are unmatched.",
      name: "Uche Soronnadi",
      company: "SPDC",
      // title: "CEO, Global Power Corp",
      avatarSrc: "",
    },
    {
      quote:
        "The team at Experia Energy is truly exceptional. Their commitment to safety and quality is evident in every aspect of their work",
      name: "Agbara Prince",
      company: "DAEWOO & C",
      // title: "Project Manager, Renewable Solutions",
      avatarSrc: "",
    },
    {
      quote:
        "We've partnered with Experia Energy on multiple complex projects, and they consistently provide innovative and reliable solutions.",
      name: "Kessignton .U.",
      company: "Tomba Resources",
      // title: "Operations Director, Energy Innovations",
      avatarSrc: "",
    },
  ];

  const services = [
    {
      icon: PackageIcon,
      title:
        "Engineering Design, Procurement, Fabrication and Installation of Pig Launcher / Receiver",
      description:
        "We provide Sectional Replacement of Flowlines and Pipelines either on land or swamp areas.We also carry out leak repair on Pipelines and Flowlines, using different methods.",
      imageSrc: "/images/service1.jpg",
    },
    {
      icon: HardHatIcon,
      title: "Wellhead Installation & Maintenance",
      description:
        "We have been engaged in Wellhead installation and maintenance projects for a long time, with trained professionals. Our expertise covers wellheads from various manufacturers in different types of locations.",
      imageSrc: "/images/services/wellhead.jpg",
    },
    {
      icon: HammerIcon,
      title: "Facility Maintenance & Upgrade",
      description:
        "Our specialist services provide for optimization of Production Facilities, and we are able to simultaneously carry out our operations, thus minimizing shut down periods - even in live offshore production platforms.",
      imageSrc: "/images/fab.jpg",
    },
  ];

  const projects = [
    {
      imageSrc: "/images/project/project1.jpg",
      title:
        "Engineering Design, Procurement, Fabrication and Installation of Pig Launcher / Receiver",
      scope:
        "FABRICATION, CONSTRUCTION & INSTALLATION OF A 10 X 6.0KM SCH. 80 PIPELINE FROM EKULAMA 1 EXISTING NEW MANIFOLD TO EKULAMA 1&2 LACT UNIT AT SAN BARTH",
      client: "NEWCROSS E&P",
      location: ": Ekulama 1&2, Rivers State.",
      date: "August, 2020",
      status: "Completed",
    },
    {
      imageSrc: "/images/project/project2.jpg",
      title: "Blasting and Painting ",
      scope: "Tebidaba Platform Refurbishment",
      client: " Nigeria Agip Oil Company [NAOC]",
      location: "Tebidaba FlowStation, Bayelsa State",
      date: "April 2019",
      status: "Completed",
    },
    {
      imageSrc: "/images/project/project3.jpg",
      title: "Flowlines / Pipelines Construction",
      scope:
        "FABRICATION, CONSTRUCTION & INSTALLATION OF A 10 X 6.0KM SCH. 80 PIPELINE FROM EKULAMA 1 EXISTING NEW MANIFOLD TO EKULAMA 1&2 LACT UNIT AT SAN BARTH",
      client: "NEWCROSS E&P",
      location: ": Ekulama 1&2, Rivers State.",
      date: "May, 2019",
      status: "Completed",
    },
  ];

  return (
    <>
      <HeroSection />

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropositionCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                avatarSrc={testimonial.avatarSrc}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest News & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Image
                alt="News Image 1"
                className="w-full h-48 object-cover rounded-t-lg"
                height={300}
                src="/placeholder.svg?height=300&width=500"
                width={500}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Innovations in Renewable Energy
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  July 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Exploring the latest breakthroughs in solar and wind power
                  technologies.
                </p>
                <Link
                  className="text-primary hover:underline text-sm transition-colors"
                  href="#"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Image
                alt="News Image 2"
                className="w-full h-48 object-cover rounded-t-lg"
                height={300}
                src="/placeholder.svg?height=300&width=500"
                width={500}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Safety Standards in Oil & Gas
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  July 10, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our commitment to maintaining the highest safety protocols in
                  the field.
                </p>
                <Link
                  className="text-primary hover:underline text-sm transition-colors"
                  href="#"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Image
                alt="News Image 3"
                className="w-full h-48 object-cover rounded-t-lg"
                height={300}
                src="/placeholder.svg?height=300&width=500"
                width={500}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Future of Energy Policy
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  July 05, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An analysis of upcoming regulations and their impact on the
                  energy sector.
                </p>
                <Link
                  className="text-primary hover:underline text-sm transition-colors"
                  href="#"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link href="#">View All News</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <div className="container py-16 md:py-24">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects, showcasing our
            technical capabilities, commitment to safety, and dedication to
            delivering impactful energy solutions worldwide.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                scope={project.scope}
                client={project.client}
                location={project.location}
                date={project.date}
                status={project.status}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="hover:bg-[#f3ca2b]  hover:text-primary transition-colors"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </section>
      </div>

      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <div className="container max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Power Your Next Project?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Partner with Experia Energy for reliable, safe, and innovative
            energy solutions.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
