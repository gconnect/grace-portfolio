import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Grace O.O.</h3>
            <p className="text-gray-300 mb-6">
              Empowering wellness, advocating for women, and connecting you to the world with professional flight ticketing services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Globe size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Me</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#wellness" className="text-gray-300 hover:text-secondary transition-colors">Wellness Healthcare</Link></li>
              <li><Link href="/services#advocacy" className="text-gray-300 hover:text-secondary transition-colors">Women Advocacy</Link></li>
              <li><Link href="/services#travel" className="text-gray-300 hover:text-secondary transition-colors">Flight Ticketing</Link></li>
              <li><Link href="/services#consultation" className="text-gray-300 hover:text-secondary transition-colors">Travel Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <span className="text-gray-300">08136110811</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <span className="text-gray-300">odunladegrace14@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Grace Olajide Odunlade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
