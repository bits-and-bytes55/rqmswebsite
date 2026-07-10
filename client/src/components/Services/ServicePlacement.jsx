// pages/ServicePlacement.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  FileCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Search,
  Target,
  BarChart2,
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Zap,
  Globe,
  Shield,
  Award,
} from "lucide-react";
import SEOAdvanced from "../SEOAdvanceed";
import Testimonials from "../Testimonial";

/* ─── animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.11 } } };

/* ─── data ─── */
const OFFERINGS = [
  {
    icon: <Briefcase size={28} />,
    tag: "Full‑Time Roles",
    title: "Permanent Hiring",
    color: "#0f766e",
    bg: "#f0fdfa",
    desc: "We manage the entire permanent hiring lifecycle — from job analysis and multi-channel sourcing to offer negotiation and day-one onboarding. Ideal for critical roles where culture fit is non-negotiable.",
    points: [
      "JD crafting & employer branding support",
      "Active + passive candidate sourcing",
      "Structured interview coordination",
      "90-day replacement guarantee",
    ],
  },
  {
    icon: <Users size={28} />,
    tag: "Flexible Workforce",
    title: "Contract Staffing",
    color: "#0891b2",
    bg: "#ecfeff",
    desc: "Scale quickly without long-term commitments. Our contract staffing covers project-based engagements, seasonal peaks, and temp-to-hire transitions — with full payroll and compliance handled by us.",
    points: [
      "Temp, contract & temp-to-hire models",
      "Payroll, PF, ESI compliance on us",
      "Instant replacement SLA",
      "Bulk deployment capability (100+ heads)",
    ],
  },
  {
    icon: <FileCheck size={28} />,
    tag: "Candidate Evaluation",
    title: "Screening & Assessment",
    color: "#7c3aed",
    bg: "#f5f3ff",
    desc: "Every shortlisted candidate passes through a multi-layered screening engine — cognitive tests, domain assessments, structured behavioural interviews, and thorough background verification.",
    points: [
      "Psychometric & aptitude testing",
      "Technical / domain skill assessments",
      "Behavioural (STAR method) interviews",
      "Criminal, employment & education checks",
    ],
  },
  {
    icon: <TrendingUp size={28} />,
    tag: "Hiring Intelligence",
    title: "Market Intelligence",
    color: "#b45309",
    bg: "#fffbeb",
    desc: "Data-driven decisions start before you post a single job. We provide salary benchmarks, talent availability heatmaps, competitor hiring trends, and time-to-hire forecasts for your specific role and location.",
    points: [
      "Role-specific salary benchmarking",
      "City-wise talent availability data",
      "Competitor hiring activity reports",
      "Quarterly hiring trend briefings",
    ],
  },
];

const STATS = [
  { value: "90%", label: "Fill rate within 15 days" },
  { value: "95%", label: "Candidate retention at 6 months" },
  { value: "500+", label: "Placements in FY 2026" },
  { value: "7 yrs", label: "Combined recruiter experience" },
];

const PROCESS = [
  {
    num: "01",
    icon: <Search size={20} />,
    title: "Role Deep-Dive",
    desc: "We go beyond the JD — understanding team dynamics, growth path, and the competencies that actually predict success in the role.",
  },
  {
    num: "02",
    icon: <Globe size={20} />,
    title: "Multi-Channel Sourcing",
    desc: "Proprietary database (50k+ profiles), job boards, LinkedIn outreach, referral networks, and campus pipelines — all activated simultaneously.",
  },
  {
    num: "03",
    icon: <Shield size={20} />,
    title: "Rigorous Screening",
    desc: "Only candidates who clear our 3-stage filter (skills test → HR screen → domain interview) reach your desk.",
  },
  {
    num: "04",
    icon: <Zap size={20} />,
    title: "Fast-Track Interviews",
    desc: "We coordinate, prep, and follow up — compressing a typical 3-week interview cycle into 5–7 days.",
  },
  {
    num: "05",
    icon: <Award size={20} />,
    title: "Offer & Post-Join",
    desc: "Negotiation support, offer rollout, and structured 30/60/90-day check-ins to ensure every placement sticks.",
  },
];

const DOMAINS = [
  { label: "Information Technology", roles: "Dev, DevOps, QA, Data, Cloud" },
  { label: "Banking & Financial Services", roles: "RMs, Credit Analysts, Ops" },
  { label: "Healthcare & Pharma", roles: "Clinicians, Regulatory, Sales" },
  {
    label: "Manufacturing Automative & Non Automative",
    roles: "Production, Quality, R&D",
  },
  { label: "FMCG & Retail", roles: "Sales Force, Category, Supply Chain" },
  { label: "Infrastructure & Real Estate", roles: "Civil, MEP, Project Mgmt" },
];

const WHY = [
  {
    icon: <CheckCircle size={20} />,
    text: "90% fill-rate within 15 days of mandate",
  },
  {
    icon: <CheckCircle size={20} />,
    text: "95% candidate retention at the 6-month mark",
  },
  {
    icon: <CheckCircle size={20} />,
    text: "Dedicated account manager per client",
  },
  {
    icon: <CheckCircle size={20} />,
    text: "Comprehensive post-placement support",
  },
  {
    icon: <CheckCircle size={20} />,
    text: "No placement fee until you make the hire",
  },
  {
    icon: <CheckCircle size={20} />,
    text: "Free replacement within 90 days if hire leaves",
  },
];

/* ─── component ─── */
const ServicePlacement = () => (
  <>
    <SEOAdvanced />
    <main className="bg-slate-50 font-sans">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden  flex items-center">
        <div className="absolute inset-0 bg-[url('/img/qms14.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/95 via-teal-700/90 to-slate-900/70" />
        <div className="absolute -top-[100px] -right-[100px]  rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-[60px] left-[5%]  rounded-full bg-teal-400/15 pointer-events-none" />

        <div className="relative z-10 w-full 6xl mx-auto lg:px-20 px-6 py-8 md:py-12 lg:py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-teal-100 uppercase tracking-wider mb-5"
            >
              <Briefcase size={13} /> Placement Services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight 2xl mb-5"
            >
              Hire Faster.
              <br />
              <span className="text-teal-200">Retain Longer.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/80 xl leading-relaxed mb-9"
            >
              End-to-end placement solutions — permanent, contract, executive —
              backed by data-driven screening and a 90% fill-rate within 15
              days.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-700 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-teal-700/40 hover:bg-teal-800 transition"
              >
                Start Hiring <ArrowRight size={17} />
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
      <section className="bg-teal-700">
        <div className="6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {STATS.map((s, i) => (
              <div key={i} className="py-7 px-4 text-center">
                <div className="text-3xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="text-sm text-white/70 font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRO SPLIT ═══ */}
      <section className="6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mt-2.5 mb-4 leading-tight">
              Your Hiring Partner,
              <br />
              Not Just a Vendor
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              RQMS Consultancy Serviceshas been placing talent across India for
              over a decade. Unlike transactional job portals, we work as an
              embedded recruitment partner — understanding your hiring
              philosophy, culture, and growth roadmap before we source a single
              candidate.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              With a live candidate database of{" "}
              <strong>50,000+ vetted professionals</strong> and active networks
              across 15 industry domains, we compress your time-to-hire without
              cutting corners on candidate quality.
            </p>
            <div className="flex flex-col gap-2.5">
              {WHY.map((w, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={18}
                    className="text-teal-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-slate-700 text-sm">{w.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
              alt="Placement consultation"
              className="w-full h-[440px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3">
              <div className="bg-teal-50 rounded-lg p-2.5">
                <BarChart2 size={22} className="text-teal-700" />
              </div>
              <div>
                <div className="font-bold text-sm text-teal-950">
                  90% Fill Rate
                </div>
                <div className="text-xs text-slate-500">
                  Within 15 days of mandate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ OFFERINGS ═══ */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mt-2.5 mb-3.5">
              Complete Placement Solutions
            </h2>
            <p className="text-slate-500 lg mx-auto leading-relaxed">
              From your first hire to your hundredth, we have a model built for
              your stage, sector, and speed.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {OFFERINGS.map((o, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="rounded-xl p-3 flex-shrink-0"
                    style={{ background: o.bg, color: o.color }}
                  >
                    {o.icon}
                  </div>
                  <div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: o.color }}
                    >
                      {o.tag}
                    </span>
                    <h3 className="text-xl font-bold text-teal-950 mt-1">
                      {o.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {o.desc}
                </p>
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

      {/* ═══ DOMAINS ═══ */}
      <section className="6xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
            Domain Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mt-2.5 mb-3.5">
            Industries We Serve
          </h2>
          <p className="text-slate-500 lg mx-auto leading-relaxed">
            Deep sector knowledge means we understand the role beyond the JD —
            the certifications, the subculture, and the skills that actually
            matter.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {DOMAINS.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="font-bold text-sm text-teal-950 mb-1">
                {d.label}
              </div>
              <div className="text-sm text-slate-500">{d.roles}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="bg-gradient-to-br from-teal-950 via-teal-700 to-teal-600 py-20 px-6">
        <div className="6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-teal-100 uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2.5 mb-3.5">
              Our 5-Step Placement Process
            </h2>
            <p className="text-white/60 md mx-auto leading-relaxed">
              A disciplined process that compresses time-to-hire without
              compromising on candidate quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 relative"
          >
            {/* connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-teal-300/20 z-0" />

            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative z-10 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/30 border-2 border-teal-300/40 flex items-center justify-center text-teal-200 mb-4">
                  {p.icon}
                </div>
                <div className="text-[11px] font-bold text-teal-200/70 tracking-widest mb-1.5">
                  {p.num}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ SPLIT — candidate quality ═══ */}
      <section className="6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80"
                alt="Interview and assessment process"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-700/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {[
                  "Aptitude Tests",
                  "Technical Rounds",
                  "Background Checks",
                  "Culture Fit",
                  "Reference Calls",
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
              Our Screening Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mt-2.5 mb-4 leading-tight">
              Why Our Shortlists Convert at 80%+
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most agencies send 10 CVs hoping one sticks. We send 3–5
              candidates, each pre-interviewed and benchmarked against your
              specific criteria. Our internal data shows an 80%+
              interview-to-offer conversion rate across mandates.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              This is possible because we invest in a multi-stage screening
              process — cognitive and aptitude tests, domain assessments built
              with your team's input, STAR-method behavioural interviews, and
              comprehensive background verification through our empanelled
              agencies.
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { label: "Interview-to-offer rate", val: "80%+" },
                { label: "Avg. shortlist delivery", val: "72 hrs" },
                { label: "Offer acceptance rate", val: "92%" },
                { label: "6-month retention", val: "95%" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-teal-50 rounded-xl p-4 border border-teal-100"
                >
                  <div className="text-2xl font-extrabold text-teal-700">
                    {m.val}
                  </div>
                  <div className="text-sm text-slate-600 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

            <span className="text-xs font-bold text-teal-100 uppercase tracking-widest relative z-10">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4 relative z-10">
              Your Next Great Hire is 72 Hours Away
            </h2>
            <p className="text-white/80 text-base md mx-auto leading-relaxed mb-8 relative z-10">
              Share your requirement and get the first shortlist in 72 hours.
              Zero fees. Zero commitment. Until you hire.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-7 py-3.5 rounded-full text-sm shadow-lg hover:shadow-xl transition"
              >
                Request Shortlist <ArrowRight size={17} />
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

export default ServicePlacement;
