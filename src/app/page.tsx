"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Plane, ArrowRight, Star } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Wellness Healthcare",
      icon: <Heart className="text-secondary" size={32} />,
      description: "Dedicated healthcare assistance and wellness support tailored to your unique recovery and lifestyle needs.",
      link: "/services#wellness"
    },
    {
      title: "Women Advocacy",
      icon: <Users className="text-primary" size={32} />,
      description: "Empowering mentorship and advocacy programs designed to support women's growth and community impact.",
      link: "/services#advocacy"
    },
    {
      title: "Travel & Ticketing",
      icon: <Plane className="text-primary" size={32} />,
      description: "Seamless booking for local and international flights, ensuring stress-free travel at the best available rates.",
      link: "/services#travel"
    }
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Travel Client",
      message: "Grace made my international trip so smooth! The ticketing process was handled with such professionalism.",
      stars: 5
    },
    {
      name: "Elizabeth O.",
      role: "Mentee",
      message: "Her advocacy work has truly changed my perspective on what's possible for women in our community.",
      stars: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-soft-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary leading-tight mb-6">
                Empowering Wellness, <span className="text-secondary">Connecting Your World</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-dark mb-10 max-w-xl">
                Expert healthcare assistance, passionate advocacy, and seamless travel services tailored to your lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all text-center"
                >
                  Book a Service
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-light transition-all text-center"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img src="/grace.png" alt="Grace Olajide Odunlade" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">Welcome to a New Level of Excellence</h2>
            <p className="text-lg text-neutral-dark leading-relaxed">
              I am dedicated to making a tangible difference in people's lives. Whether it's through patient-centered healthcare, 
              fighting for women's rights, or facilitating global connections via travel, my mission is centered on trust, 
              empathy, and professional precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">How I Can Help You</h2>
            <p className="text-neutral-dark">Professional solutions across healthcare, advocacy, and travel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="bg-neutral-light w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-primary">{service.title}</h3>
                <p className="text-neutral-dark mb-6">{service.description}</p>
                <Link href={service.link} className="flex items-center text-primary font-bold group">
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What People Say</h2>
              <p className="text-lg text-neutral-dark mb-8">
                Building trust is my priority. Here are some words from people I've had the pleasure of working with.
              </p>
              <Link href="/contact" className="text-secondary font-bold flex items-center text-lg">
                Become part of the story <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>

            <div className="space-y-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-neutral-light p-6 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" className="text-accent" />
                    ))}
                  </div>
                  <p className="italic text-neutral-dark mb-4">"{t.message}"</p>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">Ready to Start Your Journey?</h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Whether you need wellness support, advocacy, or flight bookings, I'm here to provide professional assistance.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-light transition-all shadow-lg"
              >
                Get in Touch Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
