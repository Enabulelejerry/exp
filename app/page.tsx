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
import PartnersSlider from "@/components/PartnersSlider";

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
        "To be the leading service provider in Nigeria’s Oil & Gas sector, recognized for excellence in equipment supply, engineering, procurement, construction projects, and marine services — delivering value through the best available technology and resources.",
    },
    {
      icon: UsersIcon,
      title: "OUR STANDARD",
      description:
        "We adhere to international best-practice quality standards by implementing a robust monitoring system across all projects, ensuring full compliance with client requirements while delivering optimal value for their investment.",
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
      imageSrc: "/images/project/project1/image1.jpg",
      title:
        "Engineering Design, Procurement, Fabrication and Installation of Pig Launcher / Receiver",
      scope: "FABRICATION, FURNISHING AND INSTALLATION OF PORTACABINS",
      client: "NEOL",
      location: "CAWC I & II",
      date: "2025",
      status: "Completed",

      images: [
        "/images/project/project1/image1.jpg",
        "/images/project/project1/image2.jpg",
        "/images/project/project1/image3.jpg",
        "/images/project/project1/image4.jpg",
        "/images/project/project1/image5.jpg",
      ],
      link: "/projects/project1",
    },
    {
      imageSrc: "/images/project/project2/image1.jpg",
      title: "Blasting and Painting ",
      scope:
        "FLOWLINE RESTORATION FOR CAWC Wells 23 L/S, 15L/S, 21L and Alakiri W4T",
      client: "NEOL",
      location: "CAWC I & II, Alakiri",
      date: "2024",
      status: "Completed",
      images: [
        "/images/project/project2/image1.jpg",
        "/images/project/project2/image2.jpg",
        "/images/project/project2/image3.jpg",
        "/images/project/project2/image4.jpg",
        "/images/project/project2/image5.jpg",
        "/images/project/project2/image6.jpg",
      ],
      link: "/projects/project2",
    },
    {
      imageSrc: "/images/project/project3/image1.jpg",
      title: "Flowlines / Pipelines Construction",
      scope:
        " CONTRACT FOR MAINTENANCE OF GAS PLANT AND FS MINOR PUMPS IN LAND EAST FACILITIES SSAGS & FYIP",
      client: "SPDC",
      location: "LAND EAST FACILITIES",
      date: "JUNE, 2021",
      status: "Completed",
      images: ["/images/project/project3/image1.jpg"],
      link: "/projects/project3",
    },
  ];

  const partnerLogos = [
    { src: "/images/partners/AP.jpg", alt: "AP" },
    { src: "/images/partners/ENI.png", alt: "ENI" },
    { src: "/images/partners/ER.jpg", alt: "ER" },
    { src: "/images/partners/HE.png", alt: "HE" },
    { src: "/images/partners/NE.png", alt: "NE" },
    { src: "/images/partners/NLG.png", alt: "NLG" },
    { src: "/images/partners/NNP.png", alt: "NNP" },
    { src: "/images/partners/SA.png", alt: "SA" },
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

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-bold tracking-tight text-balance
                 text-[clamp(1.25rem,4vw,2rem)] sm:text-3xl
                 mb-6 sm:mb-10"
          >
            Certification & Affiliation
          </h2>

          <ul
            role="list"
            className="mx-auto max-w-[42rem] md:max-w-4xl
                 list-disc marker:text-green-600 pl-5
                 text-gray-700 text-sm sm:text-base md:text-lg
                 leading-relaxed text-pretty break-words
                 space-y-3 sm:space-y-4
                 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3"
          >
            <li>
              Authorization Letter –{" "}
              <strong>
                Shinestar Steel Industries Corp. (Hunan Prime Steel Pipe Co.,
                Ltd)
              </strong>
            </li>
            <li>
              Authorization Letter –{" "}
              <strong>Delta Pacific Valve Manufacturing Co.</strong>
            </li>
            <li>
              <strong>ISO Certificate</strong>
            </li>
          </ul>
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

      {/* <div className="container py-16 md:py-24">
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
                images={project.images}
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
      </div> */}

      <section className="mt-16 md:mt-24">
        <h2
          className="text-center text-balance tracking-tight font-bold
               text-xl sm:text-2xl md:text-3xl lg:text-4xl
               mb-3 sm:mb-4"
        >
          Trusted by our partners
        </h2>

        <p
          className="text-center text-pretty text-muted-foreground
              mx-auto px-4
              max-w-[28rem] sm:max-w-2xl
              text-sm sm:text-base md:text-lg
              leading-relaxed mb-6 sm:mb-8"
        >
          We collaborate with industry leaders to deliver reliable energy
          solutions.
        </p>

        <PartnersSlider items={partnerLogos} speedSeconds={35} />
      </section>

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
