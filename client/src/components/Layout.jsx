// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content - Navbar height ke neeche se start */}
      <main className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Outlet />
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/+917042322362?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600 animate-bounce-slow"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-white text-3xl"></i>

          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
            <span className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></span>
          </span>

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
            1
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+917042322362"
          className="group relative flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700"
          aria-label="Call us"
        >
          <i className="fas fa-phone text-white text-2xl"></i>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            Call Now
            <span className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></span>
          </span>
        </a>
      </div>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </div>
  );
}
