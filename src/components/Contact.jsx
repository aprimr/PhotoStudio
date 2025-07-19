"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  SendHorizontal,
  Loader2,
  Clock,
  Headset,
  MessageSquare,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
    setIsSubmitting(false);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Location",
      content: "Ghorahi",
      bg: "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950/50 dark:to-pink-900/30",
      color: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-500/10 dark:bg-rose-400/10",
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Call Us",
      content: "+977 1234567890",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/30",
      color: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Email Us",
      content: "hello@gmail.com",
      bg: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/50 dark:to-orange-900/30",
      color: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Working Hours",
      content: "Sun-Fri: 9AM-7PM",
      bg: "bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/50 dark:to-green-900/30",
      color: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Facebook",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "TikTok",
      href: "#",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "WhatsApp",
      href: "#",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50/30 dark:from-neutral-950 dark:to-black transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 bottom-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute right-1/3 top-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-bl from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header*/}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-urbanist leading-tight"
          >
            Capture Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500">
              Perfect Moments
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
          >
            From weddings to portraits, we specialize in creating timeless
            memories that tell your unique story. Let's discuss your photography
            needs and bring your vision to life.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-400 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main  */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            className="bg-white/80 dark:bg-slate-900/80 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm order-2 xl:order-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-100 via-neutral-300 to-neutral-500 rounded-xl sm:rounded-2xl shadow-lg w-fit">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Send us a message
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-poppins mt-1">
                  Let's create something beautiful together
                </p>
              </div>
            </div>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg sm:rounded-xl">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 text-base sm:text-lg">
                        Message sent successfully!
                      </h3>
                      <p className="text-sm sm:text-base text-emerald-700 dark:text-emerald-300 font-poppins mt-1">
                        Thank you for your message. We will get back to you as
                        soon as possible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Form Fields */}
              {[
                {
                  id: "name",
                  type: "text",
                  label: "Full Name",
                  required: true,
                },
                {
                  id: "email",
                  type: "email",
                  label: "Email Address",
                  required: true,
                },
                {
                  id: "phone",
                  type: "tel",
                  label: "Phone Number",
                  required: true,
                },
              ].map(({ id, type, label, required }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <input
                    type={type}
                    name={id}
                    id={id}
                    value={formData[id]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(id)}
                    onBlur={handleBlur}
                    className="peer w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 placeholder-transparent text-slate-900 dark:text-white text-sm sm:text-base"
                    placeholder=" "
                    required={required}
                  />
                  <label
                    htmlFor={id}
                    className={`absolute left-4 sm:left-6 top-3 sm:top-4 px-2 bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 transition-all duration-300 pointer-events-none font-poppins font-medium text-sm sm:text-base ${
                      activeField === id || formData[id]
                        ? "scale-90 -translate-y-5 sm:-translate-y-7"
                        : ""
                    }`}
                  >
                    {label}
                  </label>
                </motion.div>
              ))}

              {/* Message Field */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className="peer w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none transition-all duration-300 placeholder-transparent text-slate-900 dark:text-white resize-none text-sm sm:text-base"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 sm:left-6 top-3 sm:top-4 px-2 bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 transition-all duration-300 pointer-events-none font-poppins font-medium text-sm sm:text-base ${
                    activeField === "message" || formData.message
                      ? "scale-90 -translate-y-5 sm:-translate-y-7"
                      : ""
                  }`}
                >
                  Write your message
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg shadow-md hover:shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed opacity-80"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Sending...</span>
                  </>
                ) : (
                  <>
                    <SendHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            className="space-y-6 sm:space-y-8 order-1 xl:order-2"
          >
            <div className="bg-white/80 dark:bg-slate-900/80 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-100 via-neutral-300 to-neutral-500 rounded-xl sm:rounded-2xl shadow-lg w-fit">
                  <Headset className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Contact Information
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-poppins mt-1">
                    Get in touch with us
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl ${item.bg} transition-all duration-300 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${item.iconBg}`}
                      >
                        <span className={item.color}>{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-poppins font-medium break-words">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          variants={fadeIn}
          className="overflow-hidden rounded-2xl sm:rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5435.456411971102!2d82.48518390457494!3d28.04714913130585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979513e1af6ae1%3A0x4c31ff96d7b037d!2sShubharambha%20Studios!5e0!3m2!1sen!2snp!4v1752902768370!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="dark:grayscale-[20%] dark:brightness-90 transition-all duration-500 sm:h-[400px]"
          ></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
