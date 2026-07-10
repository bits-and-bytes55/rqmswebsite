// components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services/manpower", label: "ManPower" },
    { path: "/services/qms-audit", label: "QMS & Audit" },
    {
      path: "/services/training",
      label: "Training/Development & Certification",
    },
        { path: "/services/placement", label: "Placement" },

  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isServiceActive = (path) =>
    path === "/services" && location.pathname.startsWith("/services");

  return (
    <>
      {/* ─── Top Marquee Bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-950 py-1.5 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="marquee-track inline-flex items-center">
            {[0, 1].map((i) => (
              <span key={i} className="inline-flex items-center">
                <MarqueeItem icon={<Phone size={13} />} text="+91 7042322362" />
                <Sep />
                <MarqueeItem
                  icon={<Mail size={13} />}
                  text="amirsinghdirector@rqmseconsultancyservices.com"
                />
                <Sep />
                <MarqueeItem
                  icon={<Building2 size={13} />}
                  text="Reliable QMS Expert & Consultancy Servicess"
                />
                <Sep />
                <MarqueeItem
                  icon={<MapPin size={13} />}
                  text="Block C, Bhondsi Gurugram, HR-122102"
                />
                <Sep />
                <MarqueeItem
                  icon={<Clock size={13} />}
                  text="Mon–Sat: 9AM – 5:30PM"
                />
                <Sep />
                <span className="inline-flex items-center gap-1.5 text-green-400 text-xs mx-3">
                  <span className="relative inline-flex w-2 h-2">
                    <span className="animate-ping absolute inset-0 rounded-full bg-green-500 opacity-60" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
                  </span>
                  Available
                </span>
                <span className="mx-6" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Navbar ─── */}
      <nav className="fixed left-0 right-0 z-40 top-7 bg-white shadow-sm py-2.5 px-4 sm:px-6">
        <div className="mx-auto flex items-center justify-between gap-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
          >
            <img
              src="/img/rqmslogo1.png"
              alt="RQMS Logo"
              className="h-10 lg:h-11 w-auto"
            />
            <span className="hidden sm:block text-base md:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap tracking-tight">
              Reliable QMS Expert & Consultancy Services
            </span>
          </NavLink>

          {/* Desktop Nav — hidden on mobile */}
          <div className="hidden xl:flex items-center flex-wrap justify-end gap-1 flex-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-[15px] font-medium whitespace-nowrap no-underline transition-all duration-150 ${
                    isActive || isServiceActive(link.path)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Get Started — desktop */}
            <NavLink
              to="/contact"
              className="ml-2 flex-shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-[15px] no-underline transition-all duration-200 hover:shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Get Started →
            </NavLink>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="xl:hidden p-2 rounded-lg border-none cursor-pointer bg-transparent text-gray-700 hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ─── Backdrop ─── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-[60] xl:hidden"
        />
      )}

      {/* ─── Mobile Drawer ─── */}
      <div
        className={`fixed top-0 right-0 h-full w-[min(320px,88vw)] bg-white shadow-2xl flex flex-col overflow-y-auto z-[70] transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <img src="/img/rqmslogo1.png" alt="RQMS Logo" className="h-9 w-auto" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition border-none cursor-pointer flex items-center"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-1 flex-1 px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-[17px] font-medium no-underline transition-all duration-150 ${
                  isActive || isServiceActive(link.path)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-gray-100 px-4 pt-5 pb-6 flex-shrink-0">
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl text-base font-semibold no-underline hover:shadow-lg transition"
          >
            Get Started →
          </NavLink>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="tel:+917042322362"
              className="flex items-start gap-2.5 no-underline hover:text-indigo-600 transition"
            >
              <Phone
                size={15}
                className="text-indigo-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-[13px] text-gray-500">+91 7042322362</span>
            </a>
            <a
              href="mailto:amirsinghdirector@rqmseconsultancyservices.com"
              className="flex items-start gap-2.5 no-underline hover:text-indigo-600 transition"
            >
              <Mail
                size={15}
                className="text-indigo-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-[13px] text-gray-500">
                amirsinghdirector@rqmseconsultancyservices.com
              </span>
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin
                size={15}
                className="text-indigo-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-[13px] text-gray-500">
                Block C, Bhondsi Gurugram, HR-122102, India
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock
                size={15}
                className="text-indigo-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-[13px] text-gray-500">
                Mon–Sat: 9AM – 5:30PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Marquee CSS only (animation can't be done in Tailwind without config) ─── */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 28s linear infinite;
          white-space: nowrap;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

/* ── Helpers ── */

function MarqueeItem({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-indigo-100 text-xs mx-2.5">
      <span className="text-amber-200 flex-shrink-0">{icon}</span>
      {text}
    </span>
  );
}

function Sep() {
  return <span className="text-white/20 text-xs mx-0.5">|</span>;
}

export default Navbar;
