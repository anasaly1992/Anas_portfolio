"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll(); // set initial value

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  if (!mounted) {
    // Optionally render a placeholder or nothing until client-side
    return null;
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50
        ? "bg-white/95 backdrop-blur-sm shadow-lg"
        : "bg-transparent"
    }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-orange-500" />
            <span  className={`text-xl font-bold ${
        scrollY > 50
          ? "text-slate-800"
          : "text-white"
      }`}>
              Anas Ali
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`hover:text-orange-500 transition-colors duration-200 font-medium ${
                  scrollY > 50
                    ? "text-slate-700"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              // This logic is client-side only, so it's fine to be here
              // The state `isMobileMenuOpen` is not used in the new_code,
              // so this button's functionality is removed.
            }}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {/* This button is now effectively disabled as isMobileMenuOpen is removed */}
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* This section is now effectively disabled as isMobileMenuOpen is removed */}
        {/* {isMobileMenuOpen && ( */}
        {/*   <nav className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-sm"> */}
        {/*     <div className="flex flex-col space-y-4"> */}
        {/*       {navItems.map((item) => ( */}
        {/*         <button */}
        {/*           key={item.id} */}
        {/*           onClick={() => scrollToSection(item.id)} */}
        {/*           className="text-left text-slate-700 hover:text-orange-500 transition-colors duration-200 font-medium py-2" */}
        {/*         > */}
        {/*           {item.label} */}
        {/*         </button> */}
        {/*       ))} */}
        {/*       <Button */}
        {/*         onClick={() => scrollToSection("contact")} */}
        {/*         className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4" */}
        {/*       > */}
        {/*         Get in Touch */}
        {/*       </Button> */}
        {/*     </div> */}
        {/*   </nav> */}
        {/* )} */}
      </div>
    </header>
  );
}