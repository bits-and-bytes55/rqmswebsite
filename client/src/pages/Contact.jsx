// pages/Contact.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../api';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader, FileText } from 'lucide-react';
import SEOAdvanced from "../components/SEOAdvanceed";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formRef = useRef(null);

  // Animation refs
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.service) {
      setError("Please select a service");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // API Call
      const response = await fetch(`${BASE_URL}/send-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Scroll to form on error
  useEffect(() => {
    if (error && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [error]);

  return (
    <>
      <SEOAdvanced/>
      <section ref={heroRef} className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920')" }}></div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-5 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mt-4"
          >
            Let's discuss how we can help you achieve quality excellence.
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ===== LEFT: CONTACT INFO ===== */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Address</p>
                      <p className="text-gray-600 text-sm">Gali No 14 Block C, Vatika Kunj near hariom international school Bhond, Na, 122102, gurugram bhondsi, HR-122102, Ind, UP – 201301, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Phone</p>
                      <a href="tel:+917042322362" className="text-gray-600 hover:text-indigo-600 transition">+91 70423 22362</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:amirsinghdirector@rqmseconsultancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">amirsinghdirector@rqmseconsultancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:bhuwanbhatt@rqmsconsaltancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">bhuwanbhatt@rqmsconsaltancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:raniyadav@rqmsconsaltancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">raniyadav@rqmsconsaltancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:marketing@rqmseconsultancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">marketing@rqmseconsultancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:hr@rqmseconsultancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">hr@rqmseconsultancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:qualityqms@rqmseconsultancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">qualityqms@rqmseconsultancyservices.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:accounts@rqmseconsultancyservices.com" className="text-gray-600 hover:text-indigo-600 transition">accounts@rqmseconsultancyservices.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Working Hours</p>
                      <p className="text-gray-600">Mon – Sat: 9 AM – 5:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.div>

            {/* ===== RIGHT: CONTACT FORM ===== */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                {/* Success Message */}
                {success && submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                      <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">Error</p>
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 border ${error && !formData.name ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 border ${error && !formData.email ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${error && !formData.service ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition appearance-none bg-white`}
                      required
                      disabled={loading}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Manpower Services">Manpower Services</option>
                      <option value="Placement Services">Placement Services</option>
                      <option value="Audit Services">Audit Services</option>
                      <option value="QMS Services">QMS Services</option>
                      <option value="Training & Development">Training & Development</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-4 py-3 border ${error && !formData.message ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none`}
                      required
                      disabled={loading}
                    ></textarea>
                    <p className="text-xs text-gray-400 mt-1">
                      Minimum 10 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ${
                      loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section ref={mapRef} className="py-8 bg-white">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-96"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.1623367153243!2d77.08547607549063!3d28.35394127581808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzE0LjIiTiA3N8KwMDUnMTcuMCJF!5e0!3m2!1sen!2sin!4v1781857872244!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;