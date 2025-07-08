"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_06qb3gk",    // Replace with your EmailJS service ID
        "template_j677ojl",   // Replace with your EmailJS template ID
        formData,
        "LgSff9wRM3-o5-4SL"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "anasaly1992@gmail.com",
      href: "mailto:anasaly1992@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+966 502473596 / +20 1064043929",
      href: "tel:+966502473596",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Riyadh, Saudi Arabia",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss 
              how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about the latest in web development. Feel free 
                  to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-300 text-sm">{info.title}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <h4 className="text-lg font-semibold mb-2">Current Availability</h4>
                <p className="text-slate-300">
                  I'm currently available for new projects and collaborations. 
                  Let's discuss your next big idea!
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-400 font-medium">Available Now</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                  {status && <p className="text-center mt-2">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}