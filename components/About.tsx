"use client";

import { useEffect, useState } from "react";
import { Award, Calendar, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, value: "8+", label: "Years Experience" },
    { icon: Award, value: "40+", label: "Projects Completed" },
    { icon: Users, value: "20+", label: "Happy Clients" },
    { icon: Zap, value: "15+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate developer with a track record of delivering exceptional 
              web experiences and leading development teams to success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div
              className={`relative transition-all duration-1000 `}
            >
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Working on code"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Right Column - Content */}
            <div
              className={`transition-all duration-1000 delay-200`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  Building the Future, One Line at a Time
                </h3>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                  With over 8 years of experience in front-end development, I've had the privilege of working with startups and corporates companies to create digital experiences that matter.
                  </p>
                  
                  <p>
                  My expertise spans modern JavaScript frameworks, with a special focus on Angular, React and Next.js. I'm passionate about performance optimization, accessibility, and creating maintainable codebases that scale.
                  </p>
                  
                  <p>
                  When I'm not coding, you'll find me mentoring junior developers, contributing to open-source projects, or exploring the latest in web technologies.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">
                    Core Values
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Clean Code",
                      "User-Centric Design",
                      "Performance First",
                      "Continuous Learning",
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-slate-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <stat.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}