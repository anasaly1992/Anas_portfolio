"use client";

import { useEffect, useState } from "react";
import { Code, Palette, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "Angular", level: 98 },
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
      ],
    },
    {
      title: "Styling & Design",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Styled Components", level: 85 },
        { name: "SCSS/SASS", level: 80 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      title: "Development Tools",
      icon: Zap,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack/Vite", level: 85 },
        { name: "Jest/Testing Library", level: 80 },
        { name: "Docker", level: 75 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Shield,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "Database Design", level: 70 },
      ],
    },
  ];

  const technologies = [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "Styled Components",
    "Jest",
    "Cypress",
    "Docker",
    "AWS",
    "Vercel",
    "Figma",
    "Git",
    "Webpack",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience 
              and continuous learning in the ever-evolving world of web development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                      <category.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-slate-700">
                            {skill.name}
                          </span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}