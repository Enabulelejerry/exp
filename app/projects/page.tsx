import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
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
      location: "Ekulama 1&2, Rivers State.",
      date: "May, 2019",
      status: "Completed",
    },

    {
      imageSrc: "/images/project/project4.jpg",
      title: "",
      scope:
        "(4) Project Scope:FABRICATION, CONSTRUCTION & INSTALLATION OF A 10 X 6.0KM SCH. 80 PIPELINE FROM EKULAMA 1 EXISTING NEW MANIFOLD TO EKULAMA 1&2 LACT UNIT AT SAN BARTH",
      client: "NEWCROSS E&P",
      location: "Ekulama 1&2, Rivers State.",
      date: "August, 2019",
      status: "Completed",
    },

    {
      imageSrc: "/images/project/project5.jpg",
      title: "",
      scope:
        "FLOWLINE RESTORATION FOR CAWC Wells 23 L/S, 15L/S, 21L and Alakiri W4T",
      client: "NEOL",
      location: "CAWC I & II, Alakiri",
      date: "April, 2024",
      status: "Completed",
    },
    {
      imageSrc: "/images/project/project6.jpg",
      title: "",
      scope: "FABRICATION, FURNISHING AND INSTALLATION OF PORTACABINS",
      client: "NEOL",
      location: "CAWC I & II",
      date: "2025",
      status: "Completed",
    },

    {
      imageSrc: "/images/project/project7.jpg",
      title: "",
      scope:
        "CONTRACT FOR MAINTENANCE OF GAS PLANT AND FS MINOR PUMPS IN LAND EAST FACILITIES SSAGS & FYIP",
      client: "SPDC",
      location: "LAND EAST FACILITIES",
      date: "JUNE 2021",
      status: "Completed",
    },

    {
      imageSrc: "/images/project/project8.jpg",
      title: "",
      scope: "FABRICATION AND INSTALLATION OF HOT OIL VENT COLLECTION VESSEL",
      client: "GREENVILLE",
      location: "RUMUJI",
      date: "SEPTEMBER, 2021",
      status: "Completed",
    },
  ];

  return (
    <div className="container py-16 md:py-24">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our portfolio of successful projects, showcasing our technical
          capabilities, commitment to safety, and dedication to delivering
          impactful energy solutions worldwide.
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
      </section>
    </div>
  );
}
