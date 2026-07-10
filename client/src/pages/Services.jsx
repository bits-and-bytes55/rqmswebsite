// pages/Services.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOAdvanced from "../components/SEOAdvanceed";

const servicesData = [
  {
    id: 1,
    mainTitle: "Manpower Services",
    icon: "fa-users",
    description: "Skilled and semi-skilled manpower for various industries.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    subServices: [
      { title: "Skilled Workforce", description: "IT, engineering, healthcare professionals." },
      { title: "General Staffing", description: "Office assistants, security, housekeeping." },
    ],
    color: "#4f46e5",
    bgColor: "rgba(79, 70, 229, 0.08)",
    link: "/services/manpower",  // ← added
  },
  {
    id: 2,
    mainTitle: "Placement Services",
    icon: "fa-briefcase",
    description: "End-to-end recruitment and placement solutions.",
    image: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlY3J1aXRtZW50fGVufDB8fDB8fHww",
    subServices: [
      { title: "Permanent Hiring", description: "Full-time positions across all levels." },
      { title: "Contract Staffing", description: "Temporary and project-based staffing." },
    ],
    color: "#14b8a6",
    bgColor: "rgba(20, 184, 166, 0.08)",
    link: "/services/placement",
  },
  {
    id: 3,
    mainTitle: "Audit Services",
    icon: "fa-clipboard-check",
    description: "Comprehensive audit and compliance services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    subServices: [
      { title: "Internal Audit", description: "Process and financial audits." },
      { title: "Compliance Audit", description: "Regulatory and statutory compliance." },
    ],
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.08)",
    link: "/services/qms-audit", // combined with QMS
  },
  {
    id: 4,
    mainTitle: "QMS Services",
    icon: "fa-certificate",
    description: "Quality Management System implementation and support.",
    image: "https://media.istockphoto.com/id/2212868575/photo/quality-control-has-3-components-qa-qc-and-improvement-compliance-with-norms-and-regulations.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cy-Dc6_Zp4A045fvhD5vs-hNf_mq3n5ZvVtv3YmM1Zg=",
    subServices: [
      { title: "QMS Implementation", description: "ISO 9001, IATF 16949, etc." },
      { title: "Audit & Compliance Support", description: "Pre-audit and corrective action." },
    ],
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    link: "/services/qms-audit", // combined with Audit
  },
  {
    id: 5,
    mainTitle: "Training & Development",
    icon: "fa-chalkboard-teacher",
    description: "Skill development and professional training programs.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    subServices: [
      { title: "Employee Training", description: "Soft skills, technical, and leadership." },
      { title: "Certification Programs", description: "Industry-recognized certifications." },
    ],
    color: "#f43f5e",
    bgColor: "rgba(244, 63, 94, 0.08)",
    link: "/services/training",
  },
];

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <SEOAdvanced />
      <main className="bg-slate-50 min-h-screen overflow-hidden">
        {/* ===== HERO ===== */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20 md:py-28 overflow-hidden min-h-[450px] flex items-center">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(79,70,229,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.05),transparent_40%)]"></div>

          <div className="container mx-auto px-5 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block bg-yellow-400/15 text-yellow-400 text-sm font-semibold tracking-widest uppercase px-6 py-2 rounded-full border border-yellow-400/20 mb-5">
                Our Services
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                Comprehensive <br />
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Business Solutions
                </span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                We deliver comprehensive solutions across five major domains to help your business grow and succeed.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8 p-5 md:p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-extrabold text-yellow-400">5+</span>
                <span className="text-white/60 text-sm font-medium">Service Domains</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-extrabold text-yellow-400">100+</span>
                <span className="text-white/60 text-sm font-medium">Happy Clients</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-extrabold text-yellow-400">24/7</span>
                <span className="text-white/60 text-sm font-medium">Support</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-2">
            <svg viewBox="0 0 1440 120" fill="none" className="block w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120H360C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
            </svg>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="py-16 md:py-24 bg-slate-50 relative z-10">
          <div className="container mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 inline-block relative">
                Our Core Services
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6">
                Explore our comprehensive range of professional services designed to meet your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {servicesData.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.mainTitle}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm border-2 border-white/30 shadow-lg"
                        style={{ background: service.bgColor, color: service.color }}
                      >
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: service.color }}>
                      {service.mainTitle}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-5 flex-1">
                      {service.subServices.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition"
                        >
                          <span
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: service.color }}
                          ></span>
                          <div>
                            <span className="block text-sm font-semibold text-slate-700">{sub.title}</span>
                            <span className="block text-xs text-slate-400">{sub.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* ===== LEARN MORE BUTTON (now links to detail page) ===== */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg"
                      style={{ background: service.color }}
                    >
                      Learn More
                      <i className="fas fa-arrow-right transition-transform hover:translate-x-1"></i>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-1/2 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-extrabold">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4 mb-8">
                  Contact us today for a free consultation and let's discuss how we can help you achieve your goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold py-4 px-10 rounded-full shadow-lg shadow-yellow-400/30 transition hover:scale-105 hover:shadow-xl"
                >
                  Get Free Consultation
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;