// pages/Home.jsx
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEOAdvanced from "../components/SEOAdvanceed";
import {
  Users,
  Briefcase,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Award,
  Target,
  Heart,
  TrendingUp,
  CheckCircle,
  Clock,
  Shield,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Layers,
  Zap,
  Globe,
  Leaf,
} from "lucide-react";
import Testimonials from "../components/Testimonial";
import FAQ from "../components/FAQ";
import ScrollClients from "../components/ScrollClients";

/* ─────────────────────────────────────────
   Animation Variants
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const heroImages = ["/img/qms14.jpeg", "/img/qms15.jpeg", "/img/qms14.jpeg"];

const services = [
  {
    icon: Users,
    title: "Manpower Services",
    color: "indigo",
    link: "/services/manpower",
    tagline: "Right People. Right Place. Right Time.",
    desc: "We source, screen, and deploy skilled and semi-skilled workers for manufacturing, warehousing, logistics, and facility management. Our manpower solutions are built around your operational calendar — so you never face a shortage during peak demand.",
    points: [
      "Contract & permanent staffing",
      "Background-verified candidates",
      "Industry-specific workforce pools",
      "Payroll & compliance management",
    ],
  },
  {
    icon: Briefcase,
    title: "Placement Services",
    color: "teal",
    link: "/services/placement",
    tagline: "Careers Built on the Right Match.",
    desc: "From junior executives to senior leadership, we connect qualified professionals with organisations that value their potential. Our placement process goes beyond résumé matching — we assess cultural fit, growth alignment, and long-term compatibility.",
    points: [
      "Executive & mid-level hiring",
      "Technical & non-technical roles",
      "Pan-India placement network",
      "Post-placement follow-up support",
    ],
  },

  {
    icon: FileText,
    title: "QMS Services",
    color: "purple",
    link: "/services/qms-audit",
    tagline: "Established, Implementation and Sustainability.",
    desc: "We help organisations design, implement, and sustain Quality Management Systems that align with international standards and real-world operations. Whether you are seeking first-time ISO certification or upgrading an existing system, we guide you at every stage.",
    points: [
      "ISO 9001:2015, IATF 16949: 2016, ISO 14001: 2026 documentation",
      "Process mapping & SOPs",
      "ISO 45001:2018,  VSA/MACE/CQI-11/ CQI-12/CQI-15 Certification readiness support",
      "Continual improvement frameworks",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit Services",
    color: "amber",
    link: "/services/qms-audit",
    tagline: "Uncover Gaps Before They Cost You.",
    desc: "Our audit team performs internal, supplier, and process audits that go beyond checklists. We deliver observations with root-cause analysis and actionable corrective action recommendations — helping you close gaps before they become non-conformances.",
    points: [
      "ISO 9001:2015 / 14001:2026 / 45001:2018 audits",
      "Supplier & vendor audits",
      "Gap analysis & CAPA support",
      "Audit reports in 48 hours",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training/Development & Certification",
    color: "rose",
    link: "/services/training",
    tagline: "Skills That Stick. Knowledge That Grows.",
    desc: "Our training programmes are designed for real-world application — not just classroom certificates. From awareness sessions for shop-floor workers to advanced workshops for quality managers, every programme is customised to your team's current skill level and future goals.",
    points: [
      "ISO awareness & Internal Auditor training",
      "5S, Lean & Six Sigma workshops",
      "Soft skills & leadership programmes",
      "On-site & virtual delivery options",
    ],
  },
];

const colorTokens = {
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    hover: "group-hover:bg-indigo-600",
    gradient: "from-indigo-600 to-indigo-400",
    dot: "bg-indigo-500",
    ring: "ring-indigo-200",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    hover: "group-hover:bg-teal-600",
    gradient: "from-teal-600 to-teal-400",
    dot: "bg-teal-500",
    ring: "ring-teal-200",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    hover: "group-hover:bg-amber-600",
    gradient: "from-amber-500 to-amber-400",
    dot: "bg-amber-500",
    ring: "ring-amber-200",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    hover: "group-hover:bg-purple-600",
    gradient: "from-purple-600 to-purple-400",
    dot: "bg-purple-500",
    ring: "ring-purple-200",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    hover: "group-hover:bg-rose-600",
    gradient: "from-rose-600 to-rose-400",
    dot: "bg-rose-500",
    ring: "ring-rose-200",
  },
};

const whyChooseData = [
  {
    icon: Shield,
    title: "Deep Domain Expertise",
    desc: "Our consultants have worked across manufacturing, pharma, logistics, and service sectors. We speak your industry's language and understand the specific compliance pressures you face — which means faster results and fewer course corrections.",
  },
  {
    icon: Target,
    title: "Truly Customised Approach",
    desc: "We do not use standard templates and expect you to fit into them. Every engagement begins with a thorough understanding of your current state, your goals, and your constraints. The solution we design fits your organisation — not the other way around.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    desc: "We set clear benchmarks at the start of every engagement and track progress together. From reduced non-conformances to improved audit scores and faster onboarding — you will see the difference in your operations, not just on paper.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    desc: "Our relationship does not end when the project closes. We stay connected, provide ongoing support, and return for follow-up assessments because we are invested in your continued growth. Many of our clients have worked with us for years.",
  },
  {
    icon: Zap,
    title: "Responsive & Agile",
    desc: "Quality challenges rarely wait for a convenient time. Our team responds quickly to emerging issues, urgent audit preparation needs, and last-minute staffing gaps. We operate with the urgency your business demands.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "With a wide network of associates and candidates across India, we can support your requirements whether you operate from a single site in Gurugram or multiple facilities across states. Distance is never a barrier to quality service.",
  },
];

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    color: "indigo",
    desc: "We hold our work to the highest standard — every document, every audit finding, every training session is prepared with care and precision.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    color: "teal",
    desc: "We tell clients what they need to hear, not what they want to hear. Honest assessments lead to real improvements.",
  },
  {
    icon: Users,
    title: "Collaboration",
    color: "purple",
    desc: "We work alongside your team rather than above them. Knowledge transfer is built into every engagement so your people grow too.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    color: "teal",
    desc: "We promote sustainable practices that drive long-term success and responsible growth.",
  },
  {
    icon: Clock,
    title: "Reliability",
    color: "amber",
    desc: "Deadlines matter in quality management. We plan carefully and communicate proactively so there are no last-minute surprises.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We begin with a free discovery call to understand your business, current challenges, and what success looks like for you.",
  },
  {
    num: "02",
    title: "Assessment & Gap Analysis",
    desc: "Our team conducts a structured review of your existing systems, processes, and documentation to identify gaps and opportunities.",
  },
  {
    num: "03",
    title: "Tailored Proposal",
    desc: "We prepare a clear scope of work, timeline, and investment plan — no hidden charges, no vague deliverables.",
  },
  {
    num: "04",
    title: "Implementation & Support",
    desc: "We work hands-on with your team through every stage of implementation, from documentation to training to internal audits.",
  },
  {
    num: "05",
    title: "Review & Continual Improvement",
    desc: "After delivery, we conduct a follow-up review to ensure sustainability and help you identify the next improvement cycle.",
  },
];

const director = {
  name: "Amir Singh",
  role: "Director",
  image: "/img/AmirSingh.jpeg",
  qualification: "Diploma / BE in Mechanical Engineering / CTI  B.Sc (PCM) / Lead Auditor — IATF 16949:2016",
  experience: "17+ Years",
  bio: "Professional with over 17 years of rich experience with OEMs like Maruti Suzuki India Ltd., Honda Motorcycle & Scooter India Pvt. Ltd., and Hero MotoCorp, along with Tier-1 & Tier-2 suppliers.",
  certifications: [
    "Internal Auditor — IATF 16949:2016 Certified ",
    "QA & QMS — VSA / MACE / VDA 6.3 / QAV Certified ",
    "ISO 45001:2018 (OHSMS) Certified Internal Auditor",
    "ISO 14001:2026 (EMS) Certified Internal Auditor",
    "CQI-11 / CQI-12 / CQI-15 Certified Internal Auditor",
    "Lean Six Sigma Green Belt & Black Belt",
    "Fire & Safety | Legal Compliances",
  ],
  philosophy:
    "We are created analytical — strong, focused on continuous improvement as work and our life philosophy.",
};

const teamMembers = [
  {
    name: "Mr. M.D. Sharma",
    role: "Chief Technical Officer",
    image: "/img/mdsharma.png",
    qualification: "Expertise in project management, QMS, EHS, sustainability, audits, and management system implementation.",
    experience: "20 Years",
  },
  {
    name: "Bhuwan Bhatt",
    role: "Sr. Project Manager",
    image: "/img/BhuwanBhat.jpeg",
    qualification: "Diploma in Mechanical Engineering",
    experience: "15 Years",
  },
  {
    name: "Guru Prasad",
    role: "Project Manager",
    image: "/img/Guruprasad.png",
    qualification: "B.Tech in Mechanical Engineering",
    experience: "10 Years",
  },
  {
    name: "Chandan Bhagat",
    role: "Asst. Manager Operations",
    image: "/img/ChandanBhagat.png",
    qualification: "Diploma + MBA (Operations)",
    experience: "8 Years",
  },
  {
    name: "Priyanka Singh",
    role: "Manager Marketing",
    image: "/img/PriyankaSingh.jpeg",
    qualification: "B.Tech",
    experience: "10 Years",
  },
  {
    name: "Rani Yadav",
    role: "HR & Admin/Marketing",
    image: "/img/raniyadav2.jpeg",
    qualification: "Graduate",
    experience: "7 Years",
  },

  {
    name: "Nishant Saini",
    role: "Project Coordinator",
    image: "/img/nishantsaini.jpeg",
    qualification: "B.Tech",
    experience: "6 Years",
  },
  {
    name: "Vijay Kumar",
    role: "Trainer & Auditor",
    image: "/img/vijaykumar.jpeg",
    qualification: "Expertise- MACE, VSA, IATF 16949,ISO 900, ISO 14001, ISO 45001and other Quality improvement activity",
    experience: "12 Years",
  },
  {
    name: "Bashishth Yadav",
    role: "QMS Manager & Trainer",
    image: "/img/BashishthYadav.jpeg",
    qualification: "B.Tech + MBA (Operations)",
    experience: "7 Years",
  },
  {
    name: "Himanshu Bagoria",
    role: "QMS Manager & Trainer",
    image: "/img/Himanshu.jpeg",
    qualification: "Diploma + B.Tech",
    experience: "14 Years",
  },
  {
    name: "Shiv Kumar",
    role: "Accounts Manager/Legal Compliance",
    image: "/img/Shivkumar.png",
    qualification: "BA, MA, CBA, RS-CIT, LLB",
    experience: "16 Years",
  },
  {
    name: "Chandan Singh Kushwaha",
    role: "Social Media Manager",
    image: "/img/chandankushwaha.jpeg",
    qualification: "Diploma in Mechanical Engineering",
    experience: "12 Years",
  },
];

const industries = [
  "Automotive",
  "Non Automative",
  "Manufacturing",
  "Pharmaceuticals",
  "Logistics & Warehousing",
  "Construction",
  "Food & Beverage",
  "IT & Services",
  "Retail & FMCG",
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Expert Services";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const t = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(t);
        setIsTypingComplete(true);
      }
    }, 130);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <SEOAdvanced />
      <section className="relative  flex items-center overflow-hidden bg-indigo-950">
        {/* Background carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0" />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 w-full  mx-auto px-5 sm:px-8 py-20 md:py-30">
          <div className="">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            >
              <Star size={12} fill="currentColor" />
              Trusted Reliable QMS Expert & Consultancy Services — Gurugram,
              India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Empowering Your Business
              <br />
              with{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                {typedText}
                {!isTypingComplete && (
                  <span className="animate-pulse text-amber-300">|</span>
                )}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-indigo-200 text-lg md:text-xl mt-5 leading-relaxed max-w-2xl"
            >
              From workforce solutions to ISO certification — we deliver
              end-to-end consultancy that strengthens your operations and builds
              lasting quality culture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-indigo-300/80 text-sm lg:text-lg mt-3 tracking-wide text-bold"
            >
              Manpower Service &nbsp;·&nbsp; Placement Service &nbsp;·&nbsp; QMS
              & Audit Service&nbsp;·&nbsp; Training/Development & Certification
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 font-bold py-3.5 px-8 rounded-full shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-200 no-underline text-sm sm:text-base"
              >
                Get a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917042322362?text=Hello%2C%20I%20would%20like%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-200 hover:scale-105 no-underline text-sm sm:text-base shadow-lg shadow-green-600/20"
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
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${idx === currentImageIndex ? "bg-yellow-400 w-6" : "bg-white/30 w-2"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="block w-full">
            <path
              d="M0 80L60 73C120 67 240 53 360 47C480 40 600 40 720 43C840 47 960 53 1080 57C1200 60 1320 60 1380 60L1440 60V80H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      <ScrollClients/>
      {/* ═══════════════════════════════════
          SERVICES — HIGHLIGHTED
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50" id="services">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Our Core Services.{" "}
              <span className="text-indigo-600">One Partner.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Whether you need people, processes, or performance improvement —
              we have a proven solution designed for your industry.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const tk = colorTokens[service.color];
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  viewport={{ once: true }}
                  className={`group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Color accent panel */}
                  <div
                    className={`lg:w-72 xl:w-80 flex-shrink-0 bg-gradient-to-br ${tk.gradient} flex flex-col items-center justify-center p-10 text-white`}
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm">
                      <Icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-center leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm text-center mt-2 italic">
                      "{service.tagline}"
                    </p>
                    <Link
                      to={service.link}
                      className="mt-6 inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-all duration-200 backdrop-blur-sm border border-white/30"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className={`w-5 h-5 rounded-full ${tk.dot} flex-shrink-0 flex items-center justify-center mt-0.5`}
                          >
                            <CheckCircle size={12} className="text-white" />
                          </span>
                          <span className="text-gray-700 text-sm leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              A structured, transparent engagement from first conversation to
              final delivery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-100 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white mb-4 shadow-lg shadow-indigo-200 flex-shrink-0">
                    <span className="text-xs font-bold opacity-70">
                      {step.num}
                    </span>
                    <Layers size={26} className="mt-1" />
                  </div>
                  <h4 className="text-base font-bold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OUR STORY
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full" />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                Founded in 2026 by{" "}
                <strong className="text-gray-800">Amir Singh</strong>, Reliable
                QMS Expert & Consultancy Services was built on a simple belief:
                that quality should be practical, accessible, and embedded into
                the way businesses operate every day — not confined to a shelf
                of documents that no one reads.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                In the early years, we focused primarily on QMS documentation
                established,implement, audit and sustain Quality Management
                Systems and ISO 9001: 2015 /IATF 16949:2016/ISO 45001:2018 ·
                VSA/MACE/CQI-11/ CQI-12/CQI-15 certification support for small
                and mid-sized manufacturers in Haryana and Delhi NCR. As trust
                grew, clients began asking us to take on more — workforce
                sourcing, training for their teams, supplier audits, and
                eventually full placement services.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Today, we are a multi-service consultancy with a growing network
                of industry professionals, auditors, and trainers. Our
                headquarters is in Gurugram, but our clients span across India.
                Through every engagement, our mission remains unchanged: help
                organisations build systems that actually work, with people who
                are genuinely equipped to run them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  label: "Year Established",
                  value: "2026",
                  icon: Clock,
                  color: "indigo",
                },
                {
                  label: "Services Offered",
                  value: "5",
                  icon: Layers,
                  color: "teal",
                },
                {
                  label: "Industries Served",
                  value: "5+",
                  icon: Globe,
                  color: "purple",
                },
                {
                  label: "Ongoing Clients",
                  value: "Active",
                  icon: Heart,
                  color: "rose",
                },
              ].map(({ label, value, icon: Ic, color }, i) => {
                const tk = colorTokens[color];
                return (
                  <div
                    key={i}
                    className={`${tk.bg} rounded-2xl p-6 flex flex-col items-center text-center border ${tk.border}`}
                  >
                    <Ic size={28} className={`${tk.text} mb-3`} />
                    <span className={`text-3xl font-extrabold ${tk.text}`}>
                      {value}
                    </span>
                    <span className="text-gray-500 text-sm mt-1 font-medium">
                      {label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Direction
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                color: "indigo",
                title: "Our Mission",
                desc: "To empower businesses with practical, people-centred Quality Management Systems that drive operational excellence, reduce risk, and sustain compliance — without overwhelming your team or your budget.",
                sub: "We make quality achievable for every organisation, regardless of size.",
              },
              {
                icon: Award,
                color: "purple",
                title: "Our Vision",
                desc: "To be India's most trusted boutique consultancy for quality, workforce, and capability development — known not just for the certifications we help achieve, but for the lasting transformation we enable.",
                sub: "We want to be the partner you call when quality truly matters.",
              },
            ].map(({ icon: Ic, color, title, desc, sub }, i) => {
              const tk = colorTokens[color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-3xl border-2 ${tk.border} shadow-sm hover:shadow-lg transition-all duration-300 p-8 md:p-10`}
                >
                  <div
                    className={`w-16 h-16 ${tk.bg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Ic size={32} className={tk.text} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
                  <p className={`text-sm font-semibold ${tk.text} italic`}>
                    {sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY CHOOSE RQMS
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose RQMS?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              There are many consultancies. Here is what makes our approach
              different in practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-indigo-200"
                >
                  <div className="w-12 h-12 bg-indigo-50 group-hover:bg-indigo-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-indigo-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          INDUSTRIES WE SERVE
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-indigo-950 overflow-hidden">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-white/10 text-indigo-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-indigo-300 max-w-xl mx-auto text-base md:text-lg">
              Our solutions are applied across a wide range of sectors — each
              with its own compliance pressures, workforce dynamics, and quality
              standards.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry, idx) => (
              <motion.span
                key={idx}
                variants={fadeUp}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 cursor-default backdrop-blur-sm"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-indigo-300/70 text-sm mt-8"
          >
            Don't see your sector? We work across many more industries.{" "}
            <Link
              to="/contact"
              className="text-amber-400 hover:text-amber-300 underline no-underline"
            >
              Contact us
            </Link>{" "}
            to discuss your specific requirements.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              These are not aspirational statements — they shape how we plan,
              communicate, and deliver in every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              const tk = colorTokens[value.color];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-7 border-2 ${tk.border} ${tk.bg} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <Icon size={24} className={tk.text} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          MEET THE TEAM
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Meet the People Behind RQMS
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              A seasoned team of engineers, auditors, trainers, and managers —
              united by a commitment to quality.
            </p>
          </motion.div>

          {/* ── Director Card — Highlighted ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/30"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left — photo + name */}
              <div className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center justify-center p-10 bg-white/10 backdrop-blur-sm">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl mb-5">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-white text-center">
                  {director.name}
                </h3>
                <span className="mt-2 inline-block bg-yellow-400 text-gray-900 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  {director.role}
                </span>
                <p className="text-indigo-200 text-xs text-center mt-3 leading-relaxed">
                  {director.qualification}
                </p>
                <div className="mt-3 flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full">
                  <Clock size={14} className="text-amber-300" />
                  <span className="text-white text-sm font-semibold">
                    {director.experience} Experience
                  </span>
                </div>
              </div>

              {/* Right — details */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-indigo-100 text-base md:text-lg leading-relaxed mb-6">
                  {director.bio}
                </p>

                <div className="mb-6">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
                    Certifications & Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {director.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="bg-white/15 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <p className="text-amber-300 text-sm font-semibold italic">
                    "{director.philosophy}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Rest of the Team Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex items-start gap-5 border border-gray-100 group hover:border-indigo-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-xl object-cover border-2 border-indigo-100 group-hover:border-indigo-300 transition-all duration-300 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-gray-800 truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs text-indigo-600 font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex items-start gap-1.5">
                      <GraduationCap
                        size={12}
                        className="text-gray-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-500 leading-snug">
                        {member.qualification}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock
                        size={12}
                        className="text-gray-400 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-500">
                        {member.experience} experience
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════
          FAQ
      ═══════════════════════════════════ */}
      <FAQ />

      {/* ═══════════════════════════════════
          CONTACT STRIP
      ═══════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center sm:text-left">
            <a
              href="tel:+917042322362"
              className="flex items-center gap-3 no-underline group"
            >
              <div className="w-12 h-12 bg-indigo-50 group-hover:bg-indigo-100 rounded-xl flex items-center justify-center transition">
                <Phone size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Call Us
                </p>
                <p className="text-gray-800 font-bold">+91 70423 22362</p>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <a
              href="mailto:amirsinghdirector@rqmseconsultancyservices.com"
              className="flex items-center gap-3 no-underline group"
            >
              <div className="w-12 h-12 bg-indigo-50 group-hover:bg-indigo-100 rounded-xl flex items-center justify-center transition">
                <Mail size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Email Us
                </p>
                <p className="text-gray-800 font-bold">
                  amirsinghdirector@rqmseconsultancyservices.com
                </p>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <a
              href="https://wa.me/917042322362?text=Hello%2C%20I%20need%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline group"
            >
              <div className="w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center transition">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  className="text-green-600"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.844L.057 23.882a.5.5 0 0 0 .614.601l6.213-1.433A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.384l-.36-.214-3.733.861.882-3.63-.235-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  WhatsApp
                </p>
                <p className="text-gray-800 font-bold">Chat with Us</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 pb-16 bg-white"
      >
        <div className="mx-auto px-5 sm:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-indigo-500/25">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <h2 className="text-white text-3xl md:text-5xl font-extrabold relative z-10 leading-tight">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-indigo-200 text-base md:text-lg max-w-2xl mx-auto mt-4 relative z-10 leading-relaxed">
              Whether you need a workforce solution, an ISO audit, or a complete
              QMS overhaul — the first step is a conversation. Reach out today
              and let's find out how we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3.5 px-10 rounded-full shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-200 no-underline text-sm sm:text-base"
              >
                Get Started Now <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917042322362?text=Hello%2C%20I%20need%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-200 no-underline text-sm sm:text-base"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
