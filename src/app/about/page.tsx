"use client";

import { motion } from "framer-motion";
import { Award, Target, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      title: "Empathy",
      icon: <Heart size={30} className="text-secondary" />,
      text: "Putting myself in your shoes to provide the best healthcare and advocacy."
    },
    {
      title: "Professionalism",
      icon: <ShieldCheck size={30} className="text-primary" />,
      text: "High standards of integrity in ticketing and healthcare assistance."
    },
    {
      title: "Impact",
      icon: <Target size={30} className="text-accent" />,
      text: "Measured growth and empowerment for the women I advocate for."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-8">Grace Olajide Odunlade</h1>
            <div className="space-y-6 text-xl text-neutral-dark leading-relaxed">
              <p>
                Grace is a dedicated Wellness Healthcare Assistant, Women Advocate, and Travel Agent committed to empowerment and service. 
                She combines compassionate patient care with impactful community advocacy and seamless international travel solutions. 
                Her mission is to transform lives through personalized healthcare support and stress-free global connectivity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
              <img src="/grace-portfolio/grace.png" alt="Grace Olajide Odunlade" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <section className="mb-32">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Mission & Values</h2>
            <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
              My work is guided by a commitment to excellence and a heart for service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="bg-neutral-light p-10 rounded-2xl text-center hover:shadow-lg transition-all"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-4">{v.title}</h3>
                <p className="text-neutral-dark">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Trust Me */}
        <section className="bg-primary rounded-3xl p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Trust My Expertise?</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Award className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-lg">Years of Practical Experience</p>
                    <p className="text-purple-100">Proven track record in both healthcare support and the travel industry.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Award className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-lg">Certified Professionalism</p>
                    <p className="text-purple-100">Committed to ethical standards and continuous professional development.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <div className="hidden lg:block">
               {/* Just a decorative element or another image placeholder */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                  <div className="h-40 bg-white/10 rounded-2xl mt-12"></div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
