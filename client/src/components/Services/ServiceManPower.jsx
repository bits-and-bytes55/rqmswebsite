// pages/ServiceManpower.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  GraduationCap,
  Shield,
  TrendingUp,
  Star,
  Phone,
  MapPin,
  Award,
  Target,
  Layers,
  ChevronRight,
  ClipboardCheck,
  Microscope,
  FileCheck,
  Wrench,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
import SEOAdvanced from "../SEOAdvanceed";
import Testimonials from "../Testimonial";

/* ─── animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ─── data ─── */
const SECTORS = [
  { icon: <Building2 size={22} />, label: "Manufacturing Automative & Non Automative" },
  { icon: <GraduationCap size={22} />, label: "IT & Software Development" },
  { icon: <Shield size={22} />, label: "Healthcare & Pharma" },
  { icon: <TrendingUp size={22} />, label: "Banking & Finance" },
  { icon: <Layers size={22} />, label: "Logistics & Supply Chain" },
  { icon: <Target size={22} />, label: "Retail & E‑Commerce" },
  { icon: <Award size={22} />, label: "Education & Training" },
  { icon: <Briefcase size={22} />, label: "Facility Management" },
];

const OFFERINGS = [
  {
    title: "Permanent Staffing",
    tag: "Full‑Time Hire",
    color: "#4f46e5",
    bg: "#eef2ff",
    icon: <Users size={28} />,
    desc: "End‑to‑end recruitment for permanent roles — from JD drafting and sourcing to final offer rollout. We tap into an active candidate pool of 50,000+ professionals vetted across domains.",
    points: [
      "Domain‑specific headhunting",
      "3‑round screening + technical assessment",
      "Background & reference verification",
      "90‑day replacement guarantee",
    ],
  },
  {
    title: "Contract Staffing",
    tag: "Flexible Workforce",
    color: "#7c3aed",
    bg: "#f5f3ff",
    icon: <Clock size={28} />,
    desc: "Scale your team up or down without the overhead of permanent employment. Ideal for project‑based work, seasonal demand spikes, and long‑term contracts.",
    points: [
      "Payroll & compliance on us",
      "Statutory benefit management (PF, ESI, Gratuity)",
      "Month‑to‑month or fixed‑term contracts",
      "Instant replacement SLA",
    ],
  },
  {
    title: "Executive Search",
    tag: "C‑Suite & Senior Roles",
    color: "#0e7490",
    bg: "#ecfeff",
    icon: <Star size={28} />,
    desc: "Confidential, high‑touch search for leadership positions. We combine deep market mapping with discreet outreach to connect you with passive candidates who aren't on job portals.",
    points: [
      "CXO, VP, Director‑level mandates",
      "Discreet market mapping",
      "Psychometric & leadership profiling",
      "Typically filled within 30–45 days",
    ],
  },
  {
    title: "Payroll Management",
    tag: "Compliance & HR Ops",
    color: "#059669",
    bg: "#ecfdf5",
    icon: <CheckCircle size={28} />,
    desc: "Let us handle the complexity of multi‑state payroll, statutory filings, and employee lifecycle management so your HR team can focus on culture and growth.",
    points: [
      "Monthly payroll processing",
      "TDS, PF, ESI, PT filings",
      "Salary slips & Form 16 generation",
      "Audit‑ready MIS reports",
    ],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Requirement Deep‑Dive",
    desc: "We spend time understanding not just the JD but your team culture, growth trajectory, and the real problem you're solving with this hire.",
  },
  {
    num: "02",
    title: "Targeted Sourcing",
    desc: "Multi‑channel sourcing — our proprietary database, job portals, LinkedIn, referrals, and campus networks — filtered to your exact criteria.",
  },
  {
    num: "03",
    title: "Rigorous Screening",
    desc: "Resume shortlisting, phone screening, domain assessments, and background checks before a single profile lands in your inbox.",
  },
  {
    num: "04",
    title: "Interview Coordination",
    desc: "We schedule, prep candidates, gather feedback, and keep the pipeline moving so you never lose a great hire to a slow process.",
  },
  {
    num: "05",
    title: "Offer & Onboarding",
    desc: "Negotiation support, offer rollout, and a structured 90‑day onboarding touchpoint to ensure the hire sticks.",
  },
];

const STATS = [
  { value: "5,000+", label: "Placements done" },
  { value: "98%",    label: "Client retention rate" },
  { value: "72 hrs", label: "Avg. first shortlist" },
  { value: "18+",    label: "Industry sectors served" },
];

/* ─── NEW: Quality / QMS Manpower Roles ─── */
const QA_ROLES = [
  {
    icon: <ClipboardCheck size={24} />,
    title: "QA Inspector — Final / PDI",
    subtitle: "Visual Inspection & Gauging",
    color: "text-indigo-700",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    points: [
      "Visual inspection of finished goods",
      "Dimensional gauging & measurement",
      "Pre-Delivery Inspection (PDI)",
      "Rejection tagging & MRB handling",
      "Inspection report documentation",
    ],
  },
  {
    icon: <Microscope size={24} />,
    title: "QA Engineer — Final Inspection / PDI",
    subtitle: "Quality Control & Assurance",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-100",
    points: [
      "Control of Final Inspection processes",
      "PDI planning & execution",
      "CAPA initiation on defects",
      "SPC & process monitoring",
      "Customer complaint management",
    ],
  },
  {
    icon: <FileCheck size={24} />,
    title: "QMS Engineer",
    subtitle: "ISO 9001:2015 · IATF 16949:2016 · ISO 14001 · ISO 45001 · VSA/MACE",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    points: [
      "QMS documentation & maintenance",
      "Internal audit planning & execution",
      "Management review coordination",
      "Corrective action follow-up",
      "Multi-standard compliance (ISO 9001 / IATF / ISO 14001 / ISO 45001)",
    ],
  },
];

/* ─── NEW: VSA/MACE Clause Manpower ─── */
const MACE_CLAUSES = [
  { num: "01", label: "Production Preparation" },
  { num: "02", label: "Regulation for Initial Production Control" },
  { num: "03", label: "Change Management ©" },
  { num: "04", label: "Standards Management" },
  { num: "05", label: "Education & Training ©" },
  { num: "06", label: "Quality Audit & Process Verification" },
  { num: "07", label: "Supplier Control" },
  { num: "08", label: "Handling Abnormality in Quality ©" },
  { num: "09", label: "5S Management" },
  { num: "10", label: "Equipment / Inspection Equipment Management ©" },
  { num: "11", label: "Implementation of Standards" },
  { num: "12", label: "Products Management" },
  { num: "15", label: "Adequate Testing Facility" },
  { num: "16", label: "Process Audit" },
  { num: "17", label: "Financials ©" },
  { num: "18", label: "Safety ©" },
  { num: "19", label: "HR Practices ©" },
];

/* ─── component ─── */
const ServiceManpower = () => {
  return (
    <>
      <SEOAdvanced />
      <main className="bg-slate-50 font-sans">

        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden min-h-[540px] flex items-center">
          <div className="absolute inset-0 bg-[url('/img/qms15.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-indigo-800/90 to-slate-900/70" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-[60px] left-[10%] w-[280px] h-[280px] rounded-full bg-violet-500/20 pointer-events-none" />

          <div className="relative z-10 w-full mx-auto px-6 py-8 md:py-12 lg:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-5"
              >
                <Users size={13} /> Manpower Services
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
              >
                The Right People,
                <br />
                <span className="text-indigo-300">Exactly When You Need Them</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/80 leading-relaxed mb-9"
              >
                From shop‑floor technicians to C‑suite leaders — we source,
                screen, and deliver talent that fits your culture, timeline, and
                compliance requirements.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-indigo-600/40 hover:bg-indigo-700 transition"
                >
                  Get a Free Consultation <ArrowRight size={17} />
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

        {/* ═══ STATS BAR ═══ */}
        <section className="bg-indigo-600">
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

        
        {/* ═══ INTRO + IMAGE ═══ */}
        <section className="mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-2.5 mb-4 leading-tight">
                India's Trusted Workforce Partner
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                RQMS Consultancy Services has been connecting businesses with skilled professionals for over
                a decade. We operate across 10+ industry verticals with a live candidate database of{" "}
                <strong>5,000+ profiles</strong>, spanning entry‑level operators to senior leadership.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                Whether you need one specialist or a team of 200 contract workers, our dedicated recruitment
                consultants understand your sector deeply — not just the job title, but the technical
                certifications, compliance landscape, and culture fit that makes a hire last.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Pan‑India operations with local recruiter expertise",
                  "ISO 9001‑compliant recruitment process",
                  "Dedicated account manager for every client",
                  "Zero placement fee for critical roles under SLA",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeIn} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VtZW50JTIwYWdlbmN5JTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Professional team meeting"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3">
                <div className="bg-indigo-50 rounded-lg p-2.5">
                  <Award size={22} className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-bold text-sm text-indigo-950">Placements</div>
                  <div className="text-xs text-slate-500">Across India</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            NEW ▶ QA / QMS SPECIALIST MANPOWER
        ════════════════════════════════════════════════════ */}
        <section className="bg-slate-100 py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                <ShieldCheck size={13} /> Quality Specialist Manpower
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-3 mb-3.5">
                QA / QMS Professionals We Place
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm">
                We specialise in sourcing certified Quality and QMS professionals — from
                shop-floor inspectors to multi-standard QMS engineers — ready to deploy.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {QA_ROLES.map((role, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className={`bg-white rounded-2xl p-7 border-2 ${role.border} shadow-sm`}
                >
                  {/* icon + title */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${role.bg} ${role.color} mb-4`}>
                    {role.icon}
                  </div>
                  <h3 className={`text-lg font-extrabold ${role.color} mb-1`}>{role.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-5 leading-snug">{role.subtitle}</p>

                  {/* checklist */}
                  <ul className="flex flex-col gap-2.5">
                    {role.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={15} className={`${role.color} shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700 leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            NEW ▶ VSA / MACE CLAUSE MANPOWER
        ════════════════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-1.5 bg-violet-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                <FileCheck size={13} /> VSA / MACE Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-3 mb-3.5">
                Manpower for All VSA / MACE Clauses
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm">
We will provide manpower for all department of all documents and details as per below.
1-QUALITY/NPD/QMS/HR/PRODUCTION/TOOL ROOM /MAINTENANCE /STORE /PURCHASE /DISPATCH.               
              </p>
            </motion.div>

            {/* highlight banner */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl px-8 py-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/15 rounded-xl p-3">
                  <ShieldCheck size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-lg">VSA / MACE Certified Manpower</div>
                  <div className="text-white/75 text-sm mt-0.5">
                    Professionals trained across all 19 MACE audit clauses — available for immediate deployment
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-violet-50 transition"
              >
                Request Profiles <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* clause grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {MACE_CLAUSES.map((c, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="bg-white border-2 border-violet-100 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm hover:border-violet-300 hover:shadow-md transition-all group"
                >
                  {/* clause number badge */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-extrabold text-sm group-hover:bg-violet-700 transition-colors">
                    {c.num}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-indigo-950 leading-snug">{c.label}</span>
                    {/* © clauses get a small "key area" pill */}
                    {c.label.endsWith("©") && (
                      <span className="ml-2 inline-block text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full align-middle">
                        Key Area
                      </span>
                    )}
                  </div>
                  <CheckCircle size={16} className="text-violet-400 group-hover:text-violet-600 shrink-0 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ OFFERINGS ═══ */}
        <section className="bg-slate-100 py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-2.5 mb-3.5">
                Complete Manpower Solutions
              </h2>
              <p className="text-slate-500 mx-auto leading-relaxed">
                From your first hire to your tenth acquisition, we have a service model that fits your stage and scale.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="grid md:grid-cols-2 gap-6"
            >
              {OFFERINGS.map((o, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-xl p-3 flex-shrink-0" style={{ background: o.bg, color: o.color }}>
                      {o.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: o.color }}>
                        {o.tag}
                      </span>
                      <h3 className="text-xl font-bold text-indigo-950 mt-1">{o.title}</h3>
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

        {/* ═══ SECTORS ═══ */}
        <section className="mx-auto px-6 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} className="text-center mb-14"
          >
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Industry Focus</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-2.5 mb-3.5">Sectors We Serve</h2>
            <p className="text-slate-500 mx-auto leading-relaxed">
              Deep domain knowledge across 18+ verticals means we understand the technical requirements,
              compliance nuances, and talent landscape specific to your industry.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {SECTORS.map((s, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-3.5 shadow-sm"
              >
                <div className="bg-indigo-50 rounded-xl p-2.5 text-indigo-600 flex-shrink-0">{s.icon}</div>
                <span className="text-sm font-semibold text-indigo-950 leading-tight">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        

        {/* ═══ PROCESS ═══ */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-800 py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} className="text-center mb-14"
            >
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2.5 mb-3.5">
                Our 5‑Step Hiring Process
              </h2>
              <p className="text-white/60 mx-auto leading-relaxed">
                Every mandate follows the same disciplined process — so quality stays consistent
                whether you hire one person or a hundred.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-4 relative"
            >
              <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-indigo-400/20 z-0" />
              {PROCESS.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="relative z-10 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-indigo-500/30 border-2 border-indigo-300/40 flex items-center justify-center text-indigo-200 font-extrabold text-sm mb-4">
                    {p.num}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ TECHNICAL STAFFING ═══ */}
        <section className="mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeIn} transition={{ duration: 0.7 }} className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Technical team collaboration"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {["React / Node.js", "Java / Python", "DevOps / Cloud", "QA / Testing", "SAP / ERP"].map((t, i) => (
                    <span key={i} className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
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
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Technical Staffing</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-2.5 mb-4 leading-tight">
                Engineers, Developers & Technical Specialists
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Technical hiring demands more than resume matching. Our IT and engineering recruiters hold
                domain backgrounds — they know the difference between a full‑stack developer and a frontend
                specialist, and won't waste your time with mismatched profiles.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We conduct coding assessments, architecture walkthroughs, and technical interviews in
                collaboration with your engineering leads, ensuring every shortlisted candidate is genuinely qualified.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Software Engineers (L1–L5)",
                  "DevOps & SRE Engineers",
                  "Data Scientists & Analysts",
                  "Mobile (iOS / Android) Devs",
                  "Cloud Architects (AWS/GCP/Azure)",
                  "QA & Automation Engineers",
                  "SAP / ERP Consultants",
                  "Cybersecurity Specialists",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ NON‑TECHNICAL ═══ */}
        <section className="bg-slate-50 px-6 pb-20">
          <div className="mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Non‑Technical Staffing</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mt-2.5 mb-4 leading-tight">
                  Operations, Admin & Support Workforce
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A business runs on more than its technical team. We staff the full operational backbone —
                  front office, back office, field force, and facility management — with the same rigour we
                  apply to technical roles.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For large deployments (100+ headcount), we assign a dedicated on‑site HR coordinator who
                  manages attendance, grievances, and compliance reporting — so you don't have to.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Sales & Business Development",
                    "Customer Support (voice/non‑voice)",
                    "Accounts & Finance Executives",
                    "HR & Admin Professionals",
                    "Warehouse & Logistics Staff",
                    "Security & Housekeeping",
                    "Healthcare Support Staff",
                    "BPO / KPO Professionals",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.7, delay: 0.2 }} className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Office operations team"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3">
                    <div className="bg-emerald-50 rounded-lg p-2.5">
                      <TrendingUp size={22} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-indigo-950">98% Retention</div>
                      <div className="text-xs text-slate-500">Client retention rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* ═══ CTA ═══ */}
        <section className="py-20 px-6">
          <div className="mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

              <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest relative z-10">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4 relative z-10">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-white/80 text-base mx-auto leading-relaxed mb-8 relative z-10">
                Tell us your requirement — we'll send the first shortlist within 72 hours.
                No fees, no commitments until you hire.
              </p>
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-7 py-3.5 rounded-full text-sm shadow-lg hover:shadow-xl transition"
                >
                  Request a Callback <ArrowRight size={17} />
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

export default ServiceManpower;