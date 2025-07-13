import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-sm select-none">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-200 dark:border-white/10 bg-black dark:bg-white rounded-tl-[2rem] rounded-tr-[2rem]">
        {/* Info */}
        <div className="space-y-4 md:col-span-2">
          <NavLink
            to="/"
            className="text-3xl font-bold font-montserrat tracking-tight text-white dark:text-black"
          >
            DELIGHT STUDIO
          </NavLink>
          <p className="text-gray-200 dark:text-gray-900 font-poppins leading-relaxed max-w-md">
            We offer professional photography for weddings, portraits, events,
            and products — along with videography and essential studio services
            like photo printing, lamination, passport photos, and more. From
            special moments to everyday studio needs, we’re here with quality
            and care.
          </p>
          <div className="flex items-center gap-2 ">
            <MapPin className="w-auto h-5 text-gray-300 dark:text-gray-700" />
            <p className="text-gray-300 dark:text-gray-900 font-poppins">
              Nepal
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 font-raleway text-white dark:text-black">
            Navigation
          </h3>
          <ul className="space-y-3 font-poppins">
            {["Gallery", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-300 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-400 transition duration-200"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-8">
          <div className="space-y-3 font-poppins">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2 font-raleway text-white dark:text-black">
              Contact
            </h3>
            <a
              href="tel:+9779812345678"
              className="flex items-center gap-3 text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-400 transition"
            >
              <Phone className="w-5 h-5" />
              +977 9812345678
            </a>
            <a
              href="mailto:delightphotostudio@gmail.com"
              className="flex items-center gap-3 text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-400 transition"
            >
              <Mail className="w-5 h-5" />
              studio@gmail.com
            </a>
          </div>

          <div className="space-y-3 font-poppins">
            <h3 className="text-lg font-semibold uppercase tracking-wider font-raleway text-white dark:text-black">
              Follow Us
            </h3>
            <div className="flex gap-5 text-xl text-gray-300 dark:text-gray-800">
              <a
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                aria-label="TikTok"
                rel="noreferrer"
                className="hover:text-white dark:hover:text-black"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/9779812345678"
                target="_blank"
                aria-label="WhatsApp"
                rel="noreferrer"
                className="hover:text-green-500"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto bg-black dark:bg-white py-5 px-4">
        <p className="text-center text-xs md:text-sm font-poppins text-gray-100/80 dark:text-gray-700">
          © {new Date().getFullYear()} Delight Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
