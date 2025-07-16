import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Camera } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const services = [
    "Photography",
    "Videography",
    "Event Coverage",
    "Product Photography",
    "Photo Printing",
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "Nepal" },
    { icon: <Phone size={18} />, text: "+977 9812345678" },
    { icon: <Mail size={18} />, text: "hello@studio.com" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, name: "Facebook", url: "#" },
    { icon: <FaInstagram size={20} />, name: "Instagram", url: "#" },
    { icon: <FaTiktok size={20} />, name: "TikTok", url: "#" },
    { icon: <FaYoutube size={20} />, name: "YouTube", url: "#" },
    { icon: <FaWhatsapp size={20} />, name: "WhatsApp", url: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-black pt-16">
      <div className="max-w-7xl bg-black dark:bg-white mx-auto px-4 pt-10 pb-4 sm:px-6 lg:px-8 rounded-t-3xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white dark:text-black font-raleway">
                DELIGHT STUDIO
              </span>
            </div>
            <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
              Capturing life's precious moments with creativity and passion.
              Professional photography services for all occasions in Nepal.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 dark:text-gray-600 hover:text-white hover:dark:text-black transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-black mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 dark:text-gray-600 hover:text-white hover:dark:text-black transition-colors duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-black mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 dark:text-gray-600 hover:text-white hover:dark:text-black transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-black mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-0.5 text-gray-400 dark:text-gray-600">
                    {info.icon}
                  </span>
                  <span className="text-gray-400 dark:text-gray-600">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
