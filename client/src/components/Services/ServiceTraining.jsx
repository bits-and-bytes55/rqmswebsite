import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // ← added for carousel
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Laptop,
  Layers,
  Target,
  TrendingUp,
  Play,
  BarChart2,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import SEOAdvanced from "../SEOAdvanceed";
import Testimonials from "../Testimonial";

/* ─── Framer Motion variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.11 } } };

/* ─── data ─── */
const STATS = [
  { value: "1,000+", label: "Professionals trained" },
  { value: "90%", label: "Learner satisfaction score" },
  { value: "10+", label: "Training programs available" },
  { value: "100+", label: "Corporate clients" },
];

const OFFERINGS = [
  {
    icon: <Users size={28} />,
    tag: "People Skills",
    title: "Soft Skills & Behavioural",
    accent: "text-pink-700",
    iconBg: "bg-pink-50",
    desc: "Behavioural and interpersonal skills that directly impact team performance, customer experience, and leadership effectiveness. Delivered through experiential exercises, role plays, and real-world scenarios — not just slides.",
    points: [
      "Communication & presentation skills",
      "Leadership & team management",
      "Conflict resolution & negotiation",
      "Time management & productivity",
    ],
  },
  {
    icon: <BarChart2 size={28} />,
    tag: "Quality & Process",
    title: "Technical & Quality Tools",
    accent: "text-cyan-700",
    iconBg: "bg-cyan-50",
    desc: "Hands-on training in quality methodologies and statistical tools used on the shop floor and in service environments. Programs are aligned to ISO, IATF, and Six Sigma frameworks — so learning translates directly to audit readiness.",
    points: [
      "SPC, MSA, FMEA, Control Plans",
      "8D, 5-Why, Ishikawa root cause tools",
      "Statistical methods & Minitab",
      "Lean manufacturing & waste elimination",
    ],
  },
  {
    icon: <Award size={28} />,
    tag: "Globally Recognised",
    title: "Certification Programmes",
    accent: "text-violet-700",
    iconBg: "bg-violet-50",
    desc: "Structured certification prep programs that equip your team with the knowledge and exam readiness to achieve globally recognised quality certifications. Our pass rates consistently exceed the global benchmark.",
    points: [
      "ISO 9001:2015 / IATF 16949:2016 Internal Auditor",
      "ISO 45001:2018 Internal Auditor",
      "Six Sigma Yellow, Green & Black Belt",
      "VSA/MACE/CQI-11/CQI-12/CQI-15 Process Auditor",
    ],
  },
  {
    icon: <BookOpen size={28} />,
    tag: "Built for You",
    title: "Custom Corporate Workshops",
    accent: "text-amber-700",
    iconBg: "bg-amber-50",
    desc: "When off-the-shelf programs don't fit, we design from scratch. We study your processes, identify specific skill gaps, and build a bespoke training intervention — complete with pre/post assessments, participant workbooks, and manager guides.",
    points: [
      "Needs analysis & skill gap mapping",
      "Custom content + branded participant kits",
      "Pre & post training assessments",
      "Manager follow-up toolkit included",
    ],
  },
];

const DELIVERY = [
  {
    icon: <Users size={26} />,
    title: "On-Site / Classroom",
    accent: "text-pink-700",
    iconBg: "bg-pink-50",
    tagBg: "bg-pink-50 text-pink-700",
    desc: "In-person sessions at your facility. Best for hands-on technical training, group activities, and culture-building programs. Ideal for teams of 10–40.",
    tags: ["Interactive exercises", "Role plays", "Team activities"],
  },
  {
    icon: <Laptop size={26} />,
    title: "Virtual / Live Online",
    accent: "text-cyan-700",
    iconBg: "bg-cyan-50",
    tagBg: "bg-cyan-50 text-cyan-700",
    desc: "Live instructor-led sessions over Zoom or Teams. Breakout rooms, polling, and digital whiteboards keep engagement high. Perfect for remote or distributed teams.",
    tags: ["Breakout sessions", "Live Q&A", "Recording provided"],
  },
  {
    icon: <Layers size={26} />,
    title: "Blended Learning",
    accent: "text-violet-700",
    iconBg: "bg-violet-50",
    tagBg: "bg-violet-50 text-violet-700",
    desc: "Pre-work e-learning modules + live classroom or virtual sessions + post-training practice assignments. The highest knowledge retention of any format.",
    tags: ["Self-paced modules", "Live debrief", "30-day follow-up"],
  },
];

const PROGRAMS = [
  {
    category: "Core Quality Tools",
    accent: "text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
    items: [
      "MSA — Measurement System Analysis",
      "SPC — Statistical Process Control",
      "PPAP — Production Part Approval Process",
      "APQP — Advanced Product Quality Planning",
      "CP — Control Plan",
      "FMEA — Failure Modes & Effects Analysis (VDA & AIAG)",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection2.jpeg",
      "/img/qualityinspection4.jpeg",
    ],
  },
  {
    category: "Problem Solving Tools",
    accent: "text-violet-700",
    badge: "bg-violet-50 text-violet-700",
    border: "border-violet-100",
    dot: "bg-violet-500",
    items: [
      "7QC Tools (with Excel & Examples)",
      "CAPA — Corrective & Preventive Actions",
      "8D & A3 Problem Solving Methodology",
      "Red Bin Analysis / Why-Why Analysis",
      "Graphs — Line, Bar, Pie, Scatter",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection4.jpeg",      "/img/qualityinspection2.jpeg",

    ],
  },
  {
    category: "Other Training",
    accent: "text-amber-700",
    badge: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
    dot: "bg-amber-500",
    items: [
      "Quality Manual Making",
      "Procedure, SOP, WI & Formats",
      "Kaizen & Poka-Yoke",
      "4M Change Management",
      "5S (with Implementation)",
      "PRM, MRM, KRA & KPI",
    ],
    images: [      "/img/qualityinspection2.jpeg",

      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection4.jpeg",
    ],
  },
  {
    category: "MIS Analysis — MS Excel",
    accent: "text-pink-700",
    badge: "bg-pink-50 text-pink-700",
    border: "border-pink-100",
    dot: "bg-pink-500",
    items: [
      "PPM, DPMO, DPM, DPV (Rejection %)",
      "COPQ — Cost of Poor Quality",
      "Yield — FTY, RTY & Quality Rate",
      "OEE — Availability, MTBF/MTTR, Performance, Yield",
      "Excel: VLOOKUP, Pivot Table, IF & more",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection2.jpeg",
      "/img/qualityinspection4.jpeg",
    ],
  },
  {
    category: "QMS Training",
    accent: "text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
    items: [
      "ISO 9001:2015 Internal Auditor",
      "IATF 16949:2016 Internal Auditor",
      "ISO 14001:2026 Environmental",
      "ISO 45001:2018 Internal Auditor",
      "VSA/MACE/CQI-11/CQI-12/CQI-15",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection4.jpeg",
            "/img/qualityinspection2.jpeg",

    ],
  },
  {
    category: "VSA / MACE Topics",
    accent: "text-violet-700",
    badge: "bg-violet-50 text-violet-700",
    border: "border-violet-100",
    dot: "bg-violet-500",
    items: [
      "Production Preparation",
      "Initial Production Control",
      "Change Management",
      "Standards Management",
      "Education & Training",
      "Quality Audit & Process Verification",
      "Supplier Control",
      "Handling Abnormality in Quality",
      "5S Management",
      "Equipment / Inspection Equipment Mgmt",
      "Implementation of Standards",
      "Products & Handling Management",
      "Critical Parts Management",
      "Adequate Testing Facility",
      "Process Audit",
      "Financials, Safety & HR Practices",
    ],
    images: [
      "/img/qualityinspection2.jpeg",
      "/img/qualityinspection4.jpeg",
            "/img/qualityinspection1.jpeg",

    ],
  },
  {
    category: "Quality Inspection",
    accent: "text-amber-700",
    badge: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
    dot: "bg-amber-500",
    items: [
      "Drawing Reading",
      "GD&T — Geometric Dimensioning & Tolerancing",
      "Incoming Inspection",
      "In-Process Inspection",
      "Final Inspection / PDI",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
            "/img/qualityinspection4.jpeg",

      "/img/qualityinspection2.jpeg",
    ],
  },
  {
    category: "Lean & Six Sigma",
    accent: "text-pink-700",
    badge: "bg-pink-50 text-pink-700",
    border: "border-pink-100",
    dot: "bg-pink-500",
    items: [
      "Lean Fundamentals",
      "Value Stream Mapping",
      "Six Sigma Yellow Belt",
      "Six Sigma Green Belt",
      "Six Sigma Black Belt",
      "Kaizen Facilitation",
    ],
    images: [
      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection4.jpeg",
            "/img/qualityinspection2.jpeg",

    ],
  },
  {
    category: "Soft Skills",
    accent: "text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
    items: [
      "Communication Skills",
      "Leadership Essentials",
      "Presentation Skills",
      "Negotiation Skills",
      "Conflict Management",
      "Team Effectiveness",
    ],
    images: [
            "/img/qualityinspection4.jpeg",

      "/img/qualityinspection1.jpeg",
      "/img/qualityinspection2.jpeg",
    ],
  },

  {
    category: "Internal Auditor Certification",
    accent: "text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
    items: [
      "ISO 14001:2026 — Environmental Management (EMS)",
      "ISO 45001:2018 — Health & Safety (OHSMS)",
      "ISO 22000:2018 — Food Safety (FSMS)",
      "ISO 50001:2018 — Energy Management (ENMS)",
      "ISO/IEC 27001:2022 — Information Security (ISMS)",
      "ISO 20000-1:2018 — IT Services Management (ITSM)",
      "ISO 22301:2019 — Business Continuity (BCMS)",
      "ISO 31000:2018 — Risk Management (RSM)",
      "ISO 41001:2018 — Facility Management (FMS)",
      "ISO 13485:2016 — Medical Devices Quality (MDQMS)",
      "ISO 37001:2025 — Anti-Bribery Management (ABMS)",
      "ISO 28000:2022 — Security & Resilience",
      "ISO 26000:2010 — Social Responsibility Management",
      "ISO 29001:2020 — Quality, Oil & Gas Supply Chain",
      "ISO 37301:2021 — Compliance Management System",
      "ISO 55001:2014 — Asset Management",
      "ISO 30414:2018 — Human Resource Management",
      "ISO/IEC 42001:2023 — AI Management System (AIMS)",
      "ISO/IEC 27701:2019 — Privacy Information Mgmt (PIMS)",
      "ISO 21001:2018 — Education Management System (EOMS)",
      "ISO 22483:2020 — Tourism & Related Services",
      "HACCP — Hazard Analysis & Critical Control Points",
      "VACCP — Vulnerability Assessment & Critical Control Points",
      "TACCP — Threat Assessment & Critical Control Points",
      "ISO 14064-1:2016 — Greenhouse Gas (GHG) Reporting",
      "ISO 14067:2018 — Carbon Footprint Management",
      "FSSC 22000 V6 — Food Safety Management",
      "ESG — Environmental, Social & Governance",
    ],
  },
  {
    category: "Aerospace & Aviation",
    accent: "text-sky-700",
    badge: "bg-sky-50 text-sky-700",
    border: "border-sky-100",
    dot: "bg-sky-500",
    items: [
      "AS9100:2016 Rev D — Quality Mgmt System (Internal Auditor)",
      "AS9110:2016 Rev D — Quality Maintenance System (Internal Auditor)",
      "AS9102 Rev C — First Article Inspector",
      "AS9145 — APQP & PPAP for Aerospace",
      "AS9146:2017 — Foreign Object Damage (FOD) Prevention",
      "AS6174 — Counterfeit Parts Prevention Program",
      "AS13100 — QMS for Aerospace Engine Design & Production",
      "CMR — Certified Management Representative Course",
    ],
  },
  {
  category: "Quality Inspection Reports",
  accent: "text-amber-700",
  badge: "bg-amber-50 text-amber-700",
  border: "border-amber-100",
  dot: "bg-amber-500",
  items: [
    "Validation Inspection Report",
    "Pilot Lot Inspection Report",
    "New Tool Inspection Report",
    "New Supplier Inspection Report",
    "PDIR (Pre-Dispatch Inspection Report)",
    "Layout Inspection Report",
    "Sample Inspection Report",
    "Process Change Inspection Report",
    "Regular Supply First Lot Inspection Report",
    "Incoming Inspection Report",
    "Last Part Approval Report",
    "Final Inspection Report",
  ],
  images: [
        "/img/qualityinspection2.jpeg",

    "/img/qualityinspection1.jpeg",
    "/img/qualityinspection4.jpeg",
  ],
},
];

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const total = images?.length || 0;
  if (!total) return null;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="min-w-full aspect-[16/9]">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-700 rounded-full p-1.5 shadow-md transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-700 rounded-full p-1.5 shadow-md transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon size={16} />
          </button>
        </>
      )}
    </div>
  );
};

const PROCESS = [
  {
    num: "01",
    icon: <Target size={20} />,
    title: "Needs Analysis",
    desc: "We assess current skill levels, identify gaps, and align training objectives to your business goals before designing anything.",
  },
  {
    num: "02",
    icon: <BookOpen size={20} />,
    title: "Program Design",
    desc: "Custom content, participant workbooks, case studies from your industry, and assessments — all built around your context.",
  },
  {
    num: "03",
    icon: <Play size={20} />,
    title: "Delivery",
    desc: "Certified, experienced trainers deliver sessions with high energy and practical focus — real tools, real scenarios, real application.",
  },
  {
    num: "04",
    icon: <BarChart2 size={20} />,
    title: "Assessment",
    desc: "Pre and post assessments measure knowledge gain. For certification programs, mock exams and coaching ensure readiness.",
  },
  {
    num: "05",
    icon: <TrendingUp size={20} />,
    title: "Impact Measurement",
    desc: "30/60/90-day follow-up surveys and manager feedback track on-the-job application and business impact.",
  },
];

const CERT_STATS = [
  { label: "First-attempt pass rate", val: "94%+" },
  { label: "Certification bodies covered", val: "8+" },
  { label: "Open batch cities", val: "12+" },
  { label: "In-company batch min. size", val: "8 pax" },
];

/* ─── Component ─── */
const ServiceTraining = () => (
  <>
    <SEOAdvanced />
    <main className="bg-slate-50 font-sans">
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden min-h-[540px] flex items-center">
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/img/qms14.jpeg')",
          }}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/95 via-pink-700/88 to-slate-900/65" />
        {/* decorative circles */}
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-white/[0.04] pointer-events-none" />
        <div className="absolute -bottom-16 left-[8%] w-64 h-64 rounded-full bg-rose-300/10 pointer-events-none" />

        <div className="relative z-10 w-full  mx-auto px-6 py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* eyebrow */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-bold text-rose-200 uppercase tracking-widest mb-5"
            >
              <GraduationCap size={13} /> Training / Development & Certification
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight  mb-5"
            >
              Training Online/Offline
              <br /> Theoretical/Practical
              <br />
              <span className="text-rose-300">
                Professional Development &amp; Skill Enhancement.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/75  leading-relaxed mb-9"
            >
              From shop-floor quality tools to C-suite leadership — practical,
              industry-relevant programs that change how your people work, not
              just what they know.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-pink-900/40 transition-colors"
              >
                Explore Programs <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+917042322362"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
              >
                <Phone size={14} /> Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <section className="bg-rose-800">
        <div className="mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`py-7 text-center ${i < 3 ? "border-r border-white/15" : ""}`}
              >
                <div className="text-3xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="text-xs text-white/65 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ INTRO SPLIT ══════════════ */}
      <section className="mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-pink-700 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold text-rose-950 mt-2.5 mb-5 leading-snug">
              Trainers Who've Worked
              <br /> the Jobs They Teach
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our training faculty combines certified professionals — Six Sigma
              Master Black Belts, ISO Internal Auditors, HR and L&amp;D
              specialists — who have spent years in the industries they train.
              Every program is built on real experience, not just frameworks.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              With <strong>1,000+ professionals trained</strong> across
              manufacturing, IT, pharma, banking, and services, and a{" "}
              <strong>96% learner satisfaction score</strong>, we are India's
              trusted corporate training partner for organisations serious about
              skill-building.
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Trainers certified in domains they deliver",
                "Content updated every 6 months for relevance",
                "Training in Hindi, English, and regional languages",
                "Pan-India delivery — metro + Tier 2 cities",
                "Post-training support & coaching available",
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={17}
                    className="text-pink-700 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Corporate training session"
                className="w-full h-[440px] object-cover rounded-2xl block"
              />
              {/* badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                <div className="bg-pink-50 rounded-xl p-2.5">
                  <Star size={20} className="text-pink-700 fill-pink-700" />
                </div>
                <div>
                  <div className="font-bold text-sm text-rose-950">
                    96% Satisfaction
                  </div>
                  <div className="text-xs text-slate-500">
                    Across 1,000+ learners
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ OFFERINGS ══════════════ */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-pink-700 uppercase tracking-widest">
              Training & Development Services Portfolio
            </span>
            <h2 className="text-4xl font-extrabold text-rose-950 mt-2.5 mb-3.5">
              What We Teach
            </h2>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-sm">
              Four training verticals — each delivered with certified faculty,
              real-world case studies, and assessments that measure actual
              learning.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {OFFERINGS.map((o, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`${o.iconBg} ${o.accent} rounded-2xl p-3 shrink-0`}
                  >
                    {o.icon}
                  </div>
                  <div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${o.accent}`}
                    >
                      {o.tag}
                    </span>
                    <h3 className="text-lg font-bold text-rose-950 mt-1">
                      {o.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {o.desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {o.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <ChevronRight size={14} className={o.accent} />
                      <span className="text-sm text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PROGRAM CATALOG ══════════════ */}
      <section className="mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-pink-700 uppercase tracking-widest">
            Program Catalog
          </span>
          <h2 className="text-4xl font-extrabold text-rose-950 mt-2.5 mb-3.5">
            80+ Programs to Choose From
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-sm">
            A snapshot of our most popular programs — each available as
            standalone or bundled into a learning journey.
          </p>
        </motion.div>

        {/* columns layout — each card takes its own natural height, no row-stretching */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`break-inside-avoid mb-5 bg-white border ${p.border} rounded-2xl p-6 shadow-sm`}
            >
              {/* ─── Carousel ─── */}
              {p.images && p.images.length > 0 && (
                <ImageCarousel images={p.images} />
              )}

              <span
                className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md mb-4 ${p.badge}`}
              >
                {p.category}
              </span>
              <ul className="flex flex-col gap-2">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${p.dot} shrink-0 mt-[7px]`}
                    />
                    <span className="text-[13px] text-gray-700 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ══════════════ DELIVERY MODES ══════════════ */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-pink-700 uppercase tracking-widest">
              How We Deliver
            </span>
            <h2 className="text-4xl font-extrabold text-rose-950 mt-2.5 mb-3.5">
              Training Your Way
            </h2>
            <p className="text-slate-500  mx-auto leading-relaxed text-sm">
              Three delivery formats to match your team's location, size, and
              learning preferences — all with the same certified faculty and
              practical content.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {DELIVERY.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
              >
                <div
                  className={`${d.iconBg} ${d.accent} rounded-2xl p-3.5 inline-flex mb-5`}
                >
                  {d.icon}
                </div>
                <h3 className="font-bold text-lg text-rose-950 mb-2.5">
                  {d.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((t, j) => (
                    <span
                      key={j}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${d.tagBg}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="bg-gradient-to-br from-rose-950 via-rose-800 to-pink-700 py-20 px-6">
        <div className="mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-rose-300 uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="text-4xl font-extrabold text-white mt-2.5 mb-3.5">
              How We Design &amp; Deliver
            </h2>
            <p className="text-white/60  mx-auto leading-relaxed text-sm">
              Every program follows a rigorous 5-stage model — from needs
              analysis to on-the-job impact measurement.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 relative"
          >
            {/* connector line — desktop only */}
            <div className="absolute top-9 left-[10%] right-[10%] h-px bg-rose-300/15 hidden md:block" />

            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative z-10 text-center px-2"
              >
                <div className="w-14 h-14 rounded-full bg-pink-700/30 border-2 border-rose-300/35 flex items-center justify-center mx-auto mb-4 text-rose-300">
                  {p.icon}
                </div>
                <div className="text-[11px] font-bold text-rose-300/60 mb-1.5 tracking-wider">
                  {p.num}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-white/55 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CERTIFICATION SPLIT ══════════════ */}
      <section className="mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.75 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Certification training"
                className="w-full h-[460px] object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/65 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {[
                  "Six Sigma GB/BB",
                  "ISO Internal Auditor",
                  "VSA/MACE/CQI-11/CQI-12/CQI-15",
                  "IATF Internal Auditor",
                ].map((t, i) => (
                  <span
                    key={i}
                    className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-pink-700 uppercase tracking-widest">
              Certification Programs
            </span>
            <h2 className="text-3xl font-extrabold text-rose-950 mt-2.5 mb-4 leading-snug">
              Certifications That
              <br /> Open Career Doors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our certification programs are structured for high pass rates —
              not just to cover the syllabus. We use mock exams, case study
              banks, and one-on-one coaching to ensure every participant is
              genuinely ready for the certification exam.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Programs are available as open-enrollment batches (individual
              registration) or in-company batches (corporate booking for 8+
              participants, with custom scheduling).
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {CERT_STATS.map((m, i) => (
                <div
                  key={i}
                  className="bg-pink-50 border border-pink-100 rounded-2xl px-4 py-4"
                >
                  <div className="text-2xl font-extrabold text-pink-700">
                    {m.val}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-br from-rose-800 via-pink-700 to-rose-600 rounded-3xl px-12 py-16 text-center relative overflow-hidden"
          >
            {/* decorative circles */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/[0.06] pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/[0.06] pointer-events-none" />

            <span className="relative z-10 text-xs font-bold text-rose-200 uppercase tracking-widest">
              Get Started Today
            </span>
            <h2 className="relative z-10 text-4xl font-extrabold text-white mt-3 mb-4">
              Let's Build Your Team's Skills
            </h2>
            <p className="relative z-10 text-white/70 text-base max-w-md mx-auto leading-relaxed mb-8">
              Share your training requirement — we'll propose the right program,
              delivery format, and timeline within 24 hours.
            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-pink-700 font-bold px-7 py-3.5 rounded-full text-sm shadow-lg hover:bg-pink-50 transition-colors"
              >
                Request a Training Proposal <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+917042322362"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/20 transition-colors"
              >
                <Phone size={14} /> +91 7042322362
              </a>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-6 mt-7">
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <MapPin size={12} /> Block C, Bhondsi Gurugram, HR-122102, India
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <Clock size={12} /> Mon–Sat: 9AM – 5:30PM
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default ServiceTraining;
