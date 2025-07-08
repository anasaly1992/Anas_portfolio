"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "ARB Project (Alrajhi Bank) for Corporates",
      description: "The ARB Project for Alrajhi Bank focuses on creating a comprehensive platform tailored for corporate clients. This initiative aims to streamline banking services, enhance financial management, and improve user experience for corporate customers. Key features include efficient transaction processing, advanced reporting tools, and integrated financial solutions. By leveraging technology, the project seeks to empower businesses with seamless access to banking services, facilitating better financial decision-making and fostering stronger client relationships.",
      image: "/assets/alrajhi.png",
      technologies: ["Angular", "TypeScript", "PrimeNG", "Tailwind", "Git","Bitbucket"],
      featured: true
    },
    {
      id: 2, 
      title: "Business Admin Module (BAM) (Alrajhi Bank)",
      description: "The Business Admin Module (BAM) at Alrajhi Bank is designed to streamline administrative functions for corporate clients. It provides tools for managing accounts, monitoring transactions, and overseeing financial activities efficiently. BAM enhances user experience by offering customizable dashboards, real-time reporting, and integrated communication features. This module aims to empower businesses with better control over their financial operations, facilitating informed decision-making and improved operational efficiency.",
      image: "/assets/alrajhi.png",
      technologies: ["Angular", "React", "TypeScript", "PrimeNG", "Tailwind", "Git","Bitbucket"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      id: 3, 
      title: "Partnership Product (Alrajhi Bank)",
      description: "The Partnership Product at Alrajhi Bank is designed to offer tailored financial solutions for businesses looking to enhance their growth and operational efficiency. This product facilitates strategic partnerships by providing customized financing options, investment opportunities, and collaborative support. With a focus on fostering long-term relationships, the Partnership Product aims to empower businesses with the resources they need to thrive in a competitive market, ensuring mutual success for both the bank and its corporate clients.",
      image: "/assets/alrajhi.png",
      technologies: ["Angular", "React", "TypeScript", "PrimeNG", "Tailwind", "Git","Bitbucket"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      id: 4,
      title: "Internal Control CRM",
      description: "The Internal Control CRM project is designed to enhance organizational efficiency by streamlining internal processes and fostering better communication among teams. It focuses on managing workflows, tracking compliance, and ensuring accountability within the organization. By implementing robust reporting and analytics features, the project aims to improve decision-making and reinforce internal controls, ultimately leading to greater operational effectiveness and risk management.",
      image: "/assets/afaqy-crm.png",
      technologies: ["Angular", "TypeScript", "Angular Material", "Bootstrap", "Git","Bitbucket", "Ionic"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      id: 5,
      title: "Tawuniya Auto Insurance",
      description: "The Tawuniya Auto Insurance project aims to deliver a comprehensive insurance solution tailored for vehicle owners. It focuses on providing seamless online policy management, quick claims processing, and personalized customer support. The project enhances user experience through a user-friendly platform, ensuring efficient access to insurance services and promoting customer satisfaction in the auto insurance sector.",
      image: "/assets/tawuniay.jpg",
      technologies: ["Angular", "TypeScript", "Angular Material", "Tailwind","SASS", "Git","Bitbucket"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      id: 6,
      title: "Engaz CRM",
      description: "Engaz CRM project is designed to provide a comprehensive customer relationship management system specifically for the real estate industry. It streamlines operations, enhances client interactions, and improves sales processes through features like property management, lead tracking, transaction monitoring, and integrated communication tools. By delivering user-friendly and efficient solutions, Engaz CRM empowers real estate professionals to boost productivity and foster better client relationships.",
      image: "/assets/engaz.png",
      technologies: ["Angular", "TypeScript", "PrimeNG", "Tailwind","SASS", "Git","Bitbucket"],
      github: "",
      demo: "",
      featured: false,
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web 
              development and problem-solving through elegant solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  project.featured ? "md:h-106" : ""
                } ${

                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`${
                    project.featured
                      ? "md:flex md:items-center md:h-full"
                      : "flex flex-col"
                  }`}>
                    {/* Project Image */}
                    <div className={`${
                      project.featured
                        ? "md:w-1/2 md:h-full"
                        : "w-full h-[28rem]"
                    } relative overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className={`${
                      project.featured
                        ? "md:w-1/2 md:h-full md:flex md:flex-col md:justify-center"
                        : "w-full"
                    } p-6 md:p-8`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-semibold text-slate-800">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <Badge className="bg-orange-100 text-orange-800">
                              Featured
                            </Badge>
                          )}
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* <div className="flex space-x-4 pt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center space-x-2"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </Button>
                          <Button
                            size="sm"
                            className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </Button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            {/* <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 mx-auto"
            >
              <span>View More Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}