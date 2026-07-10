import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  ClipboardCheck,
  FileText,
  BarChart,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Award,
  AlertTriangle,
  RefreshCw,
  Search,
  BookOpen,
  TrendingUp,
  Layers,
  Target,
  Zap,
} from "lucide-react";
import SEOAdvanced from "../SEOAdvanceed";
import Testimonials from "../Testimonial";
import { useState, useEffect, useRef } from "react";

/* ─── animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const fadeIn  = { hidden: { opacity: 0 },        visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.11 } } };

/* ─── data ─── */
const STATS = [
  { value: "200+", label: "QMS implementations done" },
  { value: "98%",  label: "First-attempt cert. pass rate" },
  { value: "15+",  label: "ISO standards covered" },
  { value: "500+", label: "Audits conducted" },
];

const OFFERINGS = [
  {
    icon: <Shield size={28} />,
    tag: "Build & Certify",
    title: "QMS Implementation",
    color: "#7c3aed",
    bg: "#f5f3ff",
    desc: "We design and deploy a Quality Management System tailored to your processes — from gap analysis and documentation to staff training and certification audit support. We stay with you through the final certification, not just the setup.",
    points: [
      "Gap analysis against chosen standard",
      "SOPs, work instructions & quality manual",
      "Process mapping & turtle diagrams",
      "Stage 1 & Stage 2 certification audit support",
    ],
  },
  {
    icon: <ClipboardCheck size={28} />,
    tag: "Find & Fix",
    title: "Internal Audits VSA MACE",
    color: "#0e7490",
    bg: "#ecfeff",
    desc: "Our trained Internal Auditors conduct thorough process, product, and system audits against your QMS and applicable standards. Every audit delivers a structured finding report with prioritised CAPA recommendations — not just a checklist.",
    points: [
      "Process, product & system audits",
      "Competent Internal Auditors (ISO 9001:2015, IATF:2016, AS9100)",
      "Non-conformance grading & root cause analysis",
      "CAPA tracking until closure",
    ],
  },
  {
    icon: <FileText size={28} />,
    tag: "Stay Compliant",
    title: "Compliance & Supplier Audits",
    color: "#b45309",
    bg: "#fffbeb",
    desc: "We conduct regulatory, statutory, and customer-specific requirement audits — including second-party supplier audits on your behalf. Ideal for OEMs who need consistent quality across their supply chain without deploying internal resources.",
    points: [
      "Regulatory & statutory compliance audits",
      "Customer-specific requirement (CSR) audits",
      "Second-party supplier qualification audits",
      "Audit programme management",
    ],
  },
  {
    icon: <BarChart size={28} />,
    tag: "Sustain & Improve",
    title: "Continuous Improvement",
    color: "#059669",
    bg: "#ecfdf5",
    desc: "A certified QMS is only as good as the culture that sustains it. We run ongoing CAPA management, management review facilitation, KPI dashboards, and improvement workshops to keep your system live and improving.",
    points: [
      "CAPA lifecycle management",
      "Management review preparation & facilitation",
      "Quality KPI dashboards & trend analysis",
      "Kaizen & lean improvement workshops",
    ],
  },
];

const STANDARDS = [
  { code: "ISO 9001:2015",   label: "Quality Management System — all sectors" },
  { code: "IATF 16949:2016", label: "Automotive QMS — OEMs & Tier 1/2 suppliers" },
  { code: "AS9100 Rev D",    label: "Aerospace & Defence quality standard" },
  { code: "ISO/IEC 17025:2017",    label: "QMS For Testing and calibration Laboratory." },
  { code: "ISO 14001:2026",  label: "Environmental Management System" },
  { code: "ISO 45001:2018",  label: "Occupational Health & Safety Management" },
  { code: "ISO 13485:2016",  label: "Medical Devices Quality Management" },
  { code: "ISO 22000:2018",  label: "Food Safety Management System" },
  { code: "VDA 6.3",         label: "Process audit — automotive supply chain" },
];

const PROCESS = [
  {
    num: "01",
    icon: <Search size={20} />,
    title: "Gap Analysis",
    desc: "Baseline assessment of your current system against the chosen standard. We quantify the gap so you know exactly what the implementation effort looks like.",
  },
  {
    num: "02",
    icon: <BookOpen size={20} />,
    title: "Documentation",
    desc: "SOPs, work instructions, quality manual, and all mandatory records — written in your language, for your processes. No copy-paste templates.",
  },
  {
    num: "03",
    icon: <Layers size={20} />,
    title: "Process Deployment",
    desc: "We embed the QMS into daily operations through hands-on training, floor walks, and process walkthroughs with your teams.",
  },
  {
    num: "04",
    icon: <ClipboardCheck size={20} />,
    title: "Internal/Gap Audit VSA MACE",
    desc: "A full pre-certification audit to uncover and close any remaining gaps before the certification body arrives.",
  },
  {
    num: "05",
    icon: <Award size={20} />,
    title: "Certification & Beyond",
    desc: "We support Stage 1 & Stage 2 audits, and continue as your surveillance audit partner to ensure you retain your certificate year after year.",
  },
];

const BENEFITS = [
  {
    icon: <TrendingUp size={20} />,
    title: "Fewer Non-Conformities",
    desc: "Structured processes eliminate root causes of rework, scrap, and customer complaints — measurably reducing your cost of poor quality.",
  },
  {
    icon: <Target size={20} />,
    title: "Customer & Market Access",
    desc: "Many OEMs, government buyers, and export markets mandate ISO certification. Get certified, and open doors that were previously closed.",
  },
  {
    icon: <Zap size={20} />,
    title: "Faster Processes",
    desc: "A well-documented QMS removes ambiguity from daily operations — teams know exactly what to do, how, and when, reducing cycle times.",
  },
  {
    icon: <Shield size={20} />,
    title: "Audit Readiness 365 Days",
    desc: "We build systems that perform under scrutiny every day — not just during audit week. Surveillance audits stop being stressful events.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Continuous Improvement Culture",
    desc: "CAPA, management reviews, and KPI tracking turn quality from a compliance checkbox into a real driver of business performance.",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "Risk-Based Thinking",
    desc: "ISO 9001:2015 mandates risk-based thinking. We help you identify, assess, and mitigate quality risks before they become customer complaints.",
  },
];

/* ════════════════════════════════════════════════════
   TRAIN SCROLL — infinite right-to-left image scroller
   Images move like train boxes, continuously, no stops
════════════════════════════════════════════════════ */
const TrainScroll = ({ images = [], speed = 40 }) => {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  if (!images.length) return null;

  // Triple the images so the loop is seamless at any screen size
  const track = [...images, ...images, ...images];

  // Each card: 320px wide + 16px gap = 336px
  const cardW   = 320;
  const gap     = 16;
  const loopPx  = images.length * (cardW + gap); // one full set width
  const dur     = loopPx / speed;                // seconds for one loop

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-slate-900 py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0f172a 0%, transparent 100%)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0f172a 0%, transparent 100%)" }}
      />

      {/* Moving track */}
      <div
        ref={trackRef}
        className="flex"
        style={{
          gap: `${gap}px`,
          width: "max-content",
          animation: `trainRTL ${dur}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl overflow-hidden bg-slate-800 ring-1 ring-white/10 shadow-lg"
            style={{ width: `${cardW}px` }}
          >
            <img
              src={src}
              alt={`Gallery ${(i % images.length) + 1}`}
              loading="lazy"
              draggable={false}
              className="w-72 h-72 object-cover select-none block"
            />
          </div>
        ))}
      </div>

      {/* Pause badge */}
      {paused && (
        <div className="absolute top-3 right-4 z-20 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide">
          ⏸ Paused
        </div>
      )}

      <style>{`
        @keyframes trainRTL {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(-${loopPx}px); }
        }
      `}</style>
    </div>
  );
};

/* ─── Main Component ─── */
const ServiceQMSAudit = () => {
  const galleryImages = [
    "/img/qms14.jpeg",
        "/img/qms1.jpeg",
        "/img/qms5.jpeg",

    "/img/qms15.jpeg",
    "/img/qms13.jpeg",
    
  ];

  return (
    <>
      <SEOAdvanced />
      <main className="bg-slate-50 font-sans">

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-[url('/img/qms15.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-violet-800/90 to-slate-900/70" />
          <div className="absolute -top-[100px] -right-[80px] w-[420px] h-[420px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-[60px] left-[8%] w-[280px] h-[280px] rounded-full bg-violet-400/15 pointer-events-none" />

          <div className="relative z-10 w-full mx-auto px-6 lg:px-20 py-8 md:py-12 lg:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-violet-200 uppercase tracking-wider mb-5"
              >
                <Shield size={13} /> QMS Services / Support [AMC]
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
              >
                Quality That Passes
                <br />
                <span className="text-violet-300">Every Audit. Every Time.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/80 max-w-xl leading-relaxed mb-9"
              >
                ISO 9001:2015 · IATF 16949:2016 · AS9100 · ISO 14001:2026 · ISO 45001:2018 ·
                VSA/MACE/CQI-11/CQI-12/CQI-15 — we establish, implement, audit and sustain
                Quality Management Systems that hold up under the toughest certification scrutiny.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-violet-600/40 hover:bg-violet-700 transition"
                >
                  Get a Free Gap Analysis <ArrowRight size={17} />
                </Link>
                <a
                  href="tel:+917042322362"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/20 transition"
                >
                  <Phone size={15} /> Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ STATS BAR ══════════════ */}
        <section className="bg-violet-700">
          <div className="mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {STATS.map((s, i) => (
                <div key={i} className="py-7 px-4 text-center">
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-sm text-white/70 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ INTRO SPLIT ══════════════ */}
        <section className="mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-4 leading-tight">
                Quality Consultants Who
                <br /> Live in the Real World
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                RQMS Consultancy Services' QMS practice is built around consultants who have spent
                years on manufacturing floors, in quality labs, and inside certification audits —
                not just behind documentation desks. We understand what makes a QMS hold up when
                an auditor from TÜV or Bureau Veritas walks in.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                With <strong>200+ QMS implementations</strong> and a{" "}
                <strong>98% first-attempt certification pass rate</strong>, we're the partner
                Indian manufacturers, pharma companies, and aerospace suppliers trust when
                certification is non-negotiable.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Certified Internal Auditors (ISO 9001:2015, IATF 16949:2016, AS9100)",
                  "Industry-specific consultants — auto, pharma, aerospace, food",
                  "Bilingual documentation (English + regional language)",
                  "On-site + remote engagement models available",
                  "Post-certification surveillance audit support",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeIn} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/img/qms11.jpeg"
                alt="QMS consulting and audit"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3">
                <div className="bg-violet-50 rounded-lg p-2.5">
                  <Award size={22} className="text-violet-600" />
                </div>
                <div>
                  <div className="font-bold text-sm text-violet-950">98% Pass Rate</div>
                  <div className="text-xs text-slate-500">First-attempt certification</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ TRAIN SCROLL GALLERY ══════════════ */}
        <section className="bg-white py-16 px-0">
          <div className="mx-auto px-6 mb-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center"
            >
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
                Our Work in Action
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-3.5">
                Real-World Quality in Practice
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
                A glimpse into our QMS implementations, audits, and on-ground
                consulting work across industries.
              </p>
            </motion.div>
          </div>

          {/* Train scroll — full width, no side padding */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.6 }}
            className="px-6"
          >
            <TrainScroll images={galleryImages} speed={40} />
          </motion.div>
        </section>

        {/* ══════════════ OFFERINGS ══════════════ */}
        <section className="bg-slate-100 py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-3.5">
                Integrated QMS & Audit Solutions
              </h2>
              <p className="text-slate-500 mx-auto leading-relaxed">
                From first-time certification to surveillance audit prep — every service is
                delivered by certified Internal Auditors with sector-specific experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="grid md:grid-cols-2 gap-6"
            >
              {OFFERINGS.map((o, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-xl p-3 flex-shrink-0" style={{ background: o.bg, color: o.color }}>
                      {o.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: o.color }}>
                        {o.tag}
                      </span>
                      <h3 className="text-xl font-bold text-violet-950 mt-1">{o.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{o.desc}</p>
                  <div className="flex flex-col gap-2">
                    {o.points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <ChevronRight size={15} style={{ color: o.color }} />
                        <span className="text-sm text-slate-700">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ STANDARDS ══════════════ */}
        <section className="mx-auto px-6 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} className="text-center mb-14"
          >
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
              Standards Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-3.5">
              Standards We Work With
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
              Our consultants hold Internal Auditor certifications across 15+ management system
              standards — covering quality, safety, environment, and food.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {STANDARDS.map((s, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="inline-block bg-violet-50 text-violet-600 text-xs font-bold px-2.5 py-1 rounded-md mb-2.5 tracking-wide">
                  {s.code}
                </div>
                <div className="text-sm text-slate-600 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════ PROCESS ══════════════ */}
        <section className="bg-gradient-to-br from-violet-950 via-violet-800 to-violet-700 py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="text-xs font-bold text-violet-300 uppercase tracking-widest">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2.5 mb-3.5">
                Our 5-Phase Implementation Model
              </h2>
              <p className="text-white/60 max-w-md mx-auto leading-relaxed">
                A proven delivery model refined over 200+ implementations — structured enough
                to be reliable, flexible enough to fit your industry.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-4 relative"
            >
              <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-violet-400/20 z-0" />
              {PROCESS.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="relative z-10 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-violet-500/30 border-2 border-violet-300/40 flex items-center justify-center text-violet-300 mb-4">
                    {p.icon}
                  </div>
                  <div className="text-[11px] font-bold text-violet-300/70 tracking-widest mb-1.5">{p.num}</div>
                  <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ BENEFITS ══════════════ */}
        <section className="mx-auto px-6 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} className="text-center mb-14"
          >
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
              Why It Matters
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-3.5">
              What a Strong QMS Delivers
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
              A well-implemented QMS is not a cost centre — it's a competitive advantage that
              reduces waste, builds customer trust, and opens new markets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm"
              >
                <div className="bg-violet-50 rounded-xl p-2.5 inline-flex text-violet-600 mb-4">
                  {b.icon}
                </div>
                <h4 className="font-bold text-base text-violet-950 mb-2">{b.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════ AUDIT DETAIL SPLIT ══════════════ */}
        <section className="bg-slate-50 px-6 pb-20">
          <div className="mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.75 }} className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/img/qms14.jpeg"
                    alt="Audit process"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-800/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                    {[
                      "Process Audit", "Layout Audit", "Dock Audit", "CQI/11, 12, 15",
                      "System Audit", "Product Audit", "VDA 6.3", "Layered Audit",
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

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
                  Internal & Supplier Audits
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-violet-950 mt-2.5 mb-4 leading-tight">
                  Audits That Drive Action,
                  <br /> Not Just Reports
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A finding report that sits in a drawer solves nothing. Our audit delivery model
                  is built around actionable outcomes — every non-conformance is graded by risk,
                  assigned an owner, and tracked through CAPA closure with your team.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For supplier audits, we act as an extension of your quality function —
                  conducting second-party audits on your behalf with the same rigour your
                  customers expect from you.
                </p>
                <div className="grid grid-cols-2 gap-3.5">
                  {[
                    { label: "Avg. NCs closed per audit",   val: "100%" },
                    { label: "Audit report turnaround",      val: "48 hrs" },
                    { label: "Supplier audits conducted",    val: "300+" },
                    { label: "Zero repeat major NCs",        val: "96%" },
                  ].map((m, i) => (
                    <div key={i} className="bg-violet-50 rounded-xl p-4 border border-violet-100">
                      <div className="text-2xl font-extrabold text-violet-600">{m.val}</div>
                      <div className="text-sm text-slate-600 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* ══════════════ CTA ══════════════ */}
        <section className="py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative bg-gradient-to-br from-violet-700 via-violet-600 to-violet-800 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

              <span className="text-xs font-bold text-violet-200 uppercase tracking-widest relative z-10">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4 relative z-10">
                Ready to Get Certified?
              </h2>
              <p className="text-white/80 text-base max-w-md mx-auto leading-relaxed mb-8 relative z-10">
                Start with a free gap analysis. We'll show you exactly where you stand against
                your target standard — no obligation.
              </p>
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-violet-600 font-bold px-7 py-3.5 rounded-full text-sm shadow-lg hover:shadow-xl transition"
                >
                  Request Free Gap Analysis <ArrowRight size={17} />
                </Link>
                <a
                  href="tel:+917042322362"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/20 transition"
                >
                  <Phone size={15} /> +91 7042322362
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-7 relative z-10 text-white/70 text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} /> Block C, Bhondsi Gurugram, HR-122102, India
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} /> Mon–Sat: 9AM – 5:30PM
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ServiceQMSAudit; 