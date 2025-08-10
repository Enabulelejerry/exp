import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const projects = [
    {
      imageSrc: "/images/project1.jpg",
      title: "Large-Scale Solar Farm Development",
      description:
        "Design, procurement, and construction of a 50MW solar power plant.",
      outcome:
        "Successfully delivered clean energy to over 20,000 homes, reducing carbon emissions by 50,000 tons annually.",
    },
    {
      imageSrc: "/images/project2.jpg",
      title: "Offshore Platform Maintenance & Upgrade",
      description:
        "Comprehensive maintenance and technological upgrades for an offshore oil and gas platform.",
      outcome:
        "Enhanced operational efficiency by 30% and extended platform lifespan by 15 years, ensuring continuous production.",
    },
    {
      imageSrc: "/images/project3.jpg",
      title: "Cross-Country Pipeline Construction",
      description:
        "Construction of a 300km natural gas pipeline, including civil works and environmental mitigation.",
      outcome:
        "Completed ahead of schedule, providing a vital energy transport link and adhering to strict environmental regulations.",
    },
    {
      imageSrc: "/images/banner1.jpg",
      title: "Wind Turbine Installation & Commissioning",
      description:
        "Installation and commissioning of 15 large-scale wind turbines in a challenging terrain.",
      outcome:
        "Successfully integrated into the national grid, contributing 45MW of renewable energy capacity.",
    },
    {
      imageSrc: "/images/eng.jpg",
      title: "Substation Modernization Project",
      description:
        "Upgrade and automation of a critical power substation to improve grid stability and reliability.",
      outcome:
        "Reduced power outages by 40% and improved energy distribution efficiency across the region.",
    },
    {
      imageSrc: "/images/procument.jpg",
      title: "Hydroelectric Dam Structural Inspection",
      description:
        "Detailed structural inspection and integrity assessment of a major hydroelectric dam.",
      outcome:
        "Provided critical data for future maintenance planning, ensuring the long-term safety and operation of the dam.",
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
              description={project.description}
              outcome={project.outcome}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
