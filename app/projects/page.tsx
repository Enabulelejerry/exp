import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
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

    {
      imageSrc: "/images/project/project4/image1.jpg",
      title: "Blasting and Painting ",
      scope: "FABRICATION AND INSTALLATION OF HOT OIL VENT COLLECTION VESSEL",
      client: "GREENVILLE",
      location: "RUMUJI",
      date: "SEPTEMBER, 2021",
      status: "Completed",
      images: ["/images/project/project4/image1.jpg"],
      link: "/projects/project4",
    },

    {
      imageSrc: "/images/project/project5/image2.jpg",
      title: "Blasting and Painting ",
      scope:
        "FABRICATION, CONSTRUCTION & INSTALLATION OF A 10 X 6.0KM SCH. 80 PIPELINE FROM EKULAMA 1 EXISTING NEW MANIFOLD TO EKULAMA 1&2 LACT UNIT AT SAN BARTH",
      client: "NEWCROSS E&P",
      location: "Ekulama 1&2, Rivers State.",
      date: "August, 2020",
      status: "Completed",
      images: [
        "/images/project/project5/image2.jpg",
        "/images/project/project5/image3.jpg",
        "/images/project/project5/image4.jpg",
        "/images/project/project5/image5.jpg",
        "/images/project/project5/image6.jpg",
        "/images/project/project5/image7.jpg",
        "/images/project/project5/image8.jpg",
      ],
      link: "/projects/project4",
    },

    {
      imageSrc: "/images/project/project6/image1.jpg",
      title: "Blasting and Painting ",
      scope:
        "FABRICATION, CONSTRUCTION AND INSTALLATION* OF DUAL STRING 4 X 4.5KM SCH. 80 FLOWLINES FROM EKULAMA 1 INLET MANIFOLD TO MID-WAY (TIE-IN) ROW TOWARDS AWOBA NW B WELLHEAD  ",
      client: "NEWCROSS E&P",
      location: "Ekulama 1&2, Rivers State.",
      date: "May, 2019",
      status: "Completed",
      images: [
        "/images/project/project6/image1.jpg",
        "/images/project/project6/image2.jpg",
      ],
      link: "/projects/project4",
    },

    {
      imageSrc: "/images/project/project7/image1.jpg",
      title: "Blasting and Painting ",
      scope: "Tebidaba Platform Refurbishment",
      client: "Nigeria Agip Oil Company [NAOC]",
      location: "Tebidaba FlowStation, Bayelsa State",
      date: "April 2019 ",
      status: "Completed",
      images: [
        "/images/project/project7/image1.jpg",
        "/images/project/project7/image2.jpg",
        "/images/project/project7/image3.jpg",
        "/images/project/project7/image4.jpg",
      ],
      link: "/projects/project4",
    },

    {
      imageSrc: "/images/project/project8/image1.jpg",
      title: "Blasting and Painting ",
      scope: "Painting of Sapele West Wellheads",
      client: "Seplat Petroleum Development Company Limited",
      location: "Sapele, Delta State",
      date: "February, 2018",
      status: "Completed",
      images: [
        "/images/project/project8/image1.jpg",
        "/images/project/project8/image2.jpg",
      ],
      link: "/projects/project4",
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
              images={project.images}
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
