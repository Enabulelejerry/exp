"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  LightbulbIcon,
  ShieldCheckIcon,
  UsersIcon,
  TrendingUpIcon,
  HandshakeIcon,
  GlobeIcon,
} from "lucide-react";

export default function AboutUsPage() {
  const coreValues = [
    {
      icon: ShieldCheckIcon,
      title: "Safety First",
      description:
        "Unwavering commitment to the highest safety standards in all operations.",
    },
    {
      icon: LightbulbIcon,
      title: "Innovation",
      description:
        "Continuously seeking and implementing cutting-edge solutions.",
    },
    {
      icon: UsersIcon,
      title: "Integrity",
      description:
        "Conducting business with honesty, transparency, and ethical practices.",
    },
    {
      icon: HandshakeIcon,
      title: "Client Focus",
      description:
        "Prioritizing client needs and delivering exceptional value.",
    },
    {
      icon: TrendingUpIcon,
      title: "Excellence",
      description:
        "Striving for superior quality and performance in every project.",
    },
    {
      icon: GlobeIcon,
      title: "Sustainability",
      description:
        "Committed to environmentally responsible and sustainable practices.",
    },
  ];

  const leadershipTeam = [
    {
      name: "Dr. Alex Chen",
      title: "Chief Executive Officer",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Dr. Chen brings over 25 years of experience in the energy sector, driving Experia's strategic vision and growth.",
    },
    {
      name: "Maria Rodriguez",
      title: "Chief Operations Officer",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Maria oversees all operational aspects, ensuring project efficiency and adherence to safety standards.",
    },
    {
      name: "David Lee",
      title: "Chief Technical Officer",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "David leads our engineering and technical teams, fostering innovation and technical excellence.",
    },
    {
      name: "Sarah Kim",
      title: "Head of Business Development",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Sarah is responsible for forging new partnerships and expanding Experia's market presence.",
    },
  ];

  return (
    <div className="container py-16 md:py-24">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Experia Energy Services Limited
        </h1>
        <p className="text-lg  md:text-lg text-muted-foreground max-w-3xl mx-auto">
          EXPERIA ENERGY SERVICES Limited is a Nigerian Private Limited
          liability Company registered under the Companies Acts of 1990, in line
          with the policies of the Corporate Affairs Commission [C.A.C.] of
          Nigeria. EXPERIA ENERGY SERVICES LTD has rich local content policies,
          which ensure we conform to very high professional and ethical
          standards. We have developed and maintain a Quality Management System
          that conforms to the requirements of ISO 9001:2015. As a result, we
          have recorded NO Safety Incidences, have a robust relationship with
          our clients and host communities, while undertaking seemingly
          insurmountable projects in very difficult terrains.
        </p>
        {/* <p className="text-lg md:text-base text-muted-foreground max-w-3xl mx-auto">
          EXPERIA ENERGY SERVICES LTD has rich local content policies, which
          ensure we conform to very high professional and ethical standards. We
          have developed and maintain a Quality Management System that conforms
          to the requirements of ISO 9001:2008.
        </p> */}
      </section>

      <section
        className="mission-vision grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-24 items-center bg-muted p-8 rounded-lg shadow-inner"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor=".mission-vision"
          >
            Our Mission & Vision
          </h2>

          <p
            className="text-lg text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="700"
            data-aos-anchor=".mission-vision"
          >
            <span className="font-semibold text-foreground">Mission:</span>{" "}
            Delivering value-added services to our clients through innovative
            and customized solutions focused on the Energy, Construction, Power,
            Oil & Gas industries.
          </p>

          <p
            className="text-lg text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="240"
            data-aos-duration="700"
            data-aos-anchor=".mission-vision"
          >
            <span className="font-semibold text-foreground">Vision:</span>{" "}
            Becoming the Best-in-class Service provider in the Nigerian Oil &
            Gas sector renowned for excellence in Equipment Supplies,
            Engineering, Procurement and Construction Projects as well as Marine
            Services using Best Available Technology and Best Available
            Resources.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="360"
            data-aos-duration="700"
            data-aos-anchor=".mission-vision"
          >
            <a
              href="/files/company-profile.pdf"
              download="Company_Profile.pdf"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition"
            >
              Download Company Profile
            </a>
          </div>
        </div>

        <div
          className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="180"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor=".mission-vision"
        >
          <Image
            alt="Our Mission and Vision"
            className="object-cover"
            fill
            src="/images/procument.jpg"
            onLoadingComplete={() => {
              // Keep AOS positions correct after image settles
              // @ts-ignore
              import("aos").then(({ default: AOS }) => AOS.refresh());
            }}
          />
        </div>
      </section>

      <section
        className="core-values-section mb-16 md:mb-24"
        data-aos-anchor-placement="top-bottom"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100} // 0, 100, 200...
              data-aos-duration="650"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor=".core-values-section"
            >
              <CardHeader className="pb-4">
                <div
                  className="p-3 rounded-full bg-primary/10 text-primary mx-auto mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 120} // icon pops just after the card
                  data-aos-duration="500"
                  data-aos-anchor=".core-values-section"
                >
                  <value.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
