"use client";

import { motion } from "framer-motion";
import { Heart, Users, Plane, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const serviceCategories = [
    {
      id: "wellness",
      title: "Wellness Healthcare Assistance",
      icon: <Heart size={40} className="text-slate-500" />,
      description: "Professional patient support and home care assistance designed for comfort and recovery.",
      features: ["Patient support", "Home care assistance", "Wellness guidance", "Medication reminders"],
      bg: "bg-slate-100",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "advocacy",
      title: "Women Advocacy",
      icon: <Users size={40} className="text-primary" />,
      description: "Dedicated mentorship and support programs to empower women and build awareness.",
      features: ["Mentorship", "Support programs", "Awareness initiatives", "Community leadership"],
      bg: "bg-gray-50",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "travel",
      title: "Travel & Ticketing Services",
      icon: <Plane size={40} className="text-primary" />,
      description: "Expert flight booking and travel consultation for your local and international journeys.",
      features: ["Flight booking (Local & Int'l)", "Travel consultation", "Affordable deals", "Visa assistance guidance"],
      bg: "bg-amber-50",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Professional Services</h1>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
            Explore my range of services tailored to your health, empowerment, and travel needs.
          </p>
        </motion.div>

        <div className="space-y-24">
          {serviceCategories.map((service) => (
            <motion.section
              key={service.id}
              id={service.id}
              {...fadeInUp}
              className={`rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${service.bg}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-16">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold font-heading text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-neutral-dark mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                        <span className="text-neutral-dark font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md group"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="hidden lg:block relative min-h-[400px]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
