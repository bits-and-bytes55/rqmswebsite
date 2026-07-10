// components/Footer.jsx
import { Link } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  Globe,
} from "lucide-react";
const SocialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  ),
  Threads: (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16.3 10.5c-.2-2.5-1.8-3.9-4.3-3.9-2.7 0-4.6 1.7-4.6 4.2 0 2.8 2.1 4.3 5.3 4.3.6 0 1.2-.1 1.8-.2-.2 1.3-1.2 2.1-2.9 2.1-1.5 0-2.8-.6-3.8-1.7l-1.3 1.3c1.2 1.4 3 2.2 5.1 2.2 3.5 0 5.7-2 5.7-5.3 0-1.2-.3-2.2-.9-3 .6-.6.9-1.4.9-2.4zm-4.2 2.8c-1.9 0-3-.8-3-2.3 0-1.4 1-2.4 2.8-2.4 1.6 0 2.5.9 2.6 2.6-.7-.2-1.5-.3-2.4-.3z"/>
  </svg>
),
Instagram: (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm5.75-2a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z"/>
  </svg>
),
Website: <Globe size={18} />,
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ── 4 Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/img/rqmslogo1.png"
                alt="RQMS Logo"
                className="h-12 w-auto rounded-xl flex-shrink-0"
              />
              <h3 className="text-base font-bold text-white leading-snug">
                Reliable QMS Expert &amp; Consultancy Services
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We provide expert manpower, placement, QMS, audit,and
              Training/Development & Certification solutions to empower your
              business.
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
  {[
    {
      label: "YouTube",
      href: "https://www.youtube.com/@rqmsconsultancy",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/rqmsconsultancy",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rqmsconsultancy",
    },
    {
      label: "Twitter",
      href: "https://x.com/rqmsconsultancy",
    },
    {
      label: "Threads",
      href: "https://www.threads.com/@rqmsconsultancy",
    },
    {
      label: "Website",
      href: "https://rqmseconsultancyservices.com/",
    },
  ].map(({ label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
    >
      {SocialIcons[label]}
    </a>
  ))}
</div>

            {/* WhatsApp Consultation */}
            <a
              href="https://wa.me/917042322362?text=Hello%2C%20I%20need%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.844L.057 23.882a.5.5 0 0 0 .614.601l6.213-1.433A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.384l-.36-.214-3.733.861.882-3.63-.235-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp Consultation
            </a>
          </div>

          {/* ── Col 2: Contact Info ── */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 pb-2 border-b border-gray-700">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <User
                  size={14}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong className="text-white">Name:</strong> Amir Singh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={14}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a
                    href="tel:+917042322362"
                    className="hover:text-yellow-400 transition-colors duration-200 break-all"
                  >
                    +91 7042322362
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={14}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:amirsinghdirector@rqmseconsultancyservices.com"
                    className="hover:text-yellow-400 transition-colors duration-200 break-all"
                  >
                    amirsinghdirector@rqmseconsultancyservices.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong className="text-white">Address:</strong> Gali No 14
                  Block C, Vatika Kunj, near Hariom International School,
                  Bhondsi, Gurugram, HR-122102, India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FileText
                  size={14}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong className="text-white">GST No:</strong>{" "}
                  06EYIPS6621F1Z7{" "}
                </span>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 pb-2 border-b border-gray-700">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services/manpower", label: "ManPower Services" },
                { to: "/services/placement", label: "Placement Services" },
                { to: "/services/qms-audit", label: "QMS & Audit Services" },
                {
                  to: "/services/training",
                  label: "Training/Development & Certification",
                },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Map ── */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 pb-2 border-b border-gray-700">
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden shadow-lg h-44 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.1623367153243!2d77.08547607549063!3d28.35394127581808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzE0LjIiTiA3N8KwMDUnMTcuMCJF!5e0!3m2!1sen!2sin!4v1781857872244!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Gali No 14 Block C, Vatika Kunj, near Hariom International School,
              Bhondsi, Gurugram, HR-122102, India
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} RQMS. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://bitsandbytesitsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Bits and Bytes IT Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
