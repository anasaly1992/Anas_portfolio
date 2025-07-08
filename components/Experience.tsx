import React from "react";

const experiences = [
  {
    company: "STC",
    role: "Senior Front End Developer",
    period: "Sep. 2024 - Present",
    location: "Riyadh, Saudi Arabia",
    details: [
      "Worked closely with backend developers, designers, and product managers to define project requirements and deliver high-quality, scalable solutions.",
      "Led the migration of legacy applications to modern frameworks (e.g., React, Angular), improving application performance and maintainability while reducing technical debt.",
      "Spearheaded the design and implementation of user-friendly web applications, ensuring adherence to best practices in UI/UX and performance optimization."
    ]
  },
  {
    company: "EJADA (Alrajhi Bank)",
    role: "Senior Front End Developer (Alrajhi Bank)",
    period: "Jan. 2023 - Sep. 2024",
    location: "Cairo, Egypt",
    details: [
      "Contributed to various applications across retail, corporate, and capital sectors, leveraging advanced tools and technologies to deliver high-performance solutions.",
      "Projects:",
      "1. ARB Project (Alrajhi Bank) for Corporates:",
      "- Developed and maintained new modules to enhance corporate banking services, ensuring high performance on mobile and web.",
      "- Reviewed designs from the UI/UX team, providing feedback to improve user experience.",
      "- Conducted code reviews to ensure high-quality and consistent code across the project.",
      "- Assisted team members with their tasks and challenges.",
      "- Identified blockers affecting team efficiency and proposed effective solutions.",
      "2. Partnership Product (Alrajhi Bank):",
      "- Built the partnership application from scratch using Angular and TypeScript.",
      "- Managed all UI-related tasks to ensure a seamless and intuitive user interface.",
      "3. Business Admin Module (BAM) (Alrajhi Bank):",
      "- Created new modules to broaden the functionality of the Business Admin Module, ensuring high performance on mobile and web.",
      "- Enhanced and maintained existing modules to improve their performance and usability."
    ]
  },
  {
    company: "Afaqy",
    role: "Senior Front End Developer",
    period: "Mar. 2022 - Dec. 2022",
    location: "Cairo, Egypt",
    details: [
      "Delivered a complete front-end application.",
      "Ensured high performance on mobile and web.",
      "Wrote tested, idiomatic, and documented JavaScript, HTML, and CSS.",
      "Coordinated the workflow between the graphic designer, the HTML coder, and myself.",
      "Cooperated with the back-end developer in the process of building the RESTful API.",
      "Communicated with external web services."
    ]
  },
  {
    company: "Youxel Technology",
    role: "Front End Developer | Angular",
    period: "Feb. 2020 - Mar. 2022",
    location: "Cairo, Egypt",
    details: [
      "Handled all operations with the client (Tawuniya) to build an auto insurance web application from scratch, starting from UI development to deployment using Angular framework.",
      "Used PrimeNG Angular Components to build the application view and ng-bootstrap for styling.",
      "Integrated with SADAD payment system."
    ]
  },
  {
    company: "Engaz CRM",
    role: "Front End Developer | Angular",
    period: "Nov. 2018 - Feb. 2020",
    location: "Cairo, Egypt",
    details: [
      "Designed, developed, and tested UI for company web applications.",
      "Built reusable code and libraries for future use."
    ]
  },
  {
    company: "Hyper Design",
    role: "UI Developer",
    period: "Jan. 2018 - Jul. 2018",
    location: "Giza, Egypt",
    details: [
      "Converted PSD to HTML.",
      "Wrote tested, idiomatic, and documented JavaScript, HTML, and CSS."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className=" mb-20 text-orange-400 text-center text-4xl md:text-5xl font-bold">Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-2xl font-semibold text-orange-300">{exp.company}</h3>
                <span className="text-slate-400 text-sm md:text-base">{exp.location}</span>
              </div>
              <p className="text-lg font-medium">{exp.role} <span className="text-slate-400">({exp.period})</span></p>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 