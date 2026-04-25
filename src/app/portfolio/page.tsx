"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const images = [
    { url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop", title: "Healthcare Consultation" },
    { url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop", title: "Women Empowerment Workshop" },
    { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop", title: "International Travel Planning" },
    { url: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000&auto=format&fit=crop", title: "Global Flight Booking" },
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop", title: "Advocacy Community Outreach" },
    { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop", title: "Holistic Wellness Support" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Gallery & Portfolio</h1>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            A visual journey through my work in healthcare, advocacy, and travel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-80"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
