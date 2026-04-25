"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Let's Work Together</h1>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            Ready to book a flight, seek wellness support, or partner for advocacy? Reach out today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-neutral-light p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-primary mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Phone</p>
                    <p className="text-neutral-dark">08136110811</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Email</p>
                    <p className="text-neutral-dark">odunladegrace14@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-accent">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">WhatsApp</p>
                    <a href="https://wa.me/2348136110811" target="_blank" className="text-secondary font-semibold hover:underline">
                      Chat with me now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Availability</h4>
              <p className="text-purple-100">
                Monday — Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Emergency Only
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-primary">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none bg-white">
                    <option>Select a service</option>
                    <option>Wellness Healthcare Assistance</option>
                    <option>Women Advocacy / Mentorship</option>
                    <option>Flight Ticketing (Local/International)</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-primary">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can I help you today?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
