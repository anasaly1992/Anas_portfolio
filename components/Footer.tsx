"use client";

import { Code2, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/anas-ali-444a86159/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:anasaly1992@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">Anas Ali Abdel Hafeez</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Senior Front-End Developer passionate about creating exceptional 
                digital experiences. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-slate-300">
                <p>Riyadh, Saudi Arabia</p>
                <p>anasaly@gmail.com</p>
                <p>+966 502473596</p>
                <p>+20 1064043929</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-300 text-sm">
                © {currentYear} Anas Ali Abdel Hafeez. All rights reserved.
              </p>
              <p className="text-slate-300 text-sm flex items-center mt-4 md:mt-0">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}