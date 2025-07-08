"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Senior Front-End Developer",
    "Angular Expert",
    "UI/UX Engineer",
    "React Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/assets/me.jpeg"
              alt="Anas Ali"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-orange-500 shadow-2xl"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Anas Ali
              </span>
            </h1>
            
            <div className="h-16 md:h-20 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-slate-300 font-medium">
                <span className="text-orange-400">
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I craft exceptional digital experiences with modern web technologies. 
              Passionate about creating scalable, performant, and beautiful applications 
              that solve real-world problems.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>
              {/* <Button
                variant="outline"
                className="border-slate-300 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button> */}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/anas-ali-444a86159/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:anasaly1992@gmail.com"
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-300 hover:text-orange-400 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}