import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    { icon: <FaTiktok className="w-5 h-5" />, href: "#", label: "TikTok" },
    { icon: <FaYoutube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "#", label: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Photography",
    "Videography",
    "Event Coverage",
    "Product Photography",
    "Photo Printing",
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-150 dark:border-neutral-800/90 text-sm sm:text-base select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Studio Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              SHUBHARAMBHA STUDIOS
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Capturing life's precious moments with creativity and passion.
              Professional photography services for all occasions.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 dark:text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">Nepal</span>
              </li>
              <li>
                <a
                  href="tel:+9779812345678"
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-1" />
                  <span>+977 9812345678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@studio.com"
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-1" />
                  <span>hello@studio.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-150 dark:border-neutral-800/90 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 dark:text-gray-300 font-poppins">
              © {currentYear} Ghorahi. All rights reserved.
            </p>
            {/* <p className="text-neutral-500 dark:text-gray-300 font-poppins">
              Developed by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-500">
                aprimr
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
