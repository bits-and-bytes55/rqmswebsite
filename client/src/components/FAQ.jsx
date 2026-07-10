// components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ClipboardCheck,
  Users,
  Briefcase,
  GraduationCap,
  Shield,
} from "lucide-react";

// Service icons mapping
const serviceIcons = {
  "QMS Services": <Shield className="w-6 h-6" />,
  "Audit Services": <ClipboardCheck className="w-6 h-6" />,
  "Training/Development & Certification": <GraduationCap className="w-6 h-6" />,
  "Manpower Services": <Users className="w-6 h-6" />,
  "Placement Services": <Briefcase className="w-6 h-6" />,
};

// FAQ data grouped by service
const faqData = {
  "Manpower Services": [
    {
      question: "What manpower services do you provide?",
      answer:
        "We offer temporary staffing, permanent recruitment, contract workforce management, and executive search across various industries. We handle the entire hiring lifecycle – from sourcing to onboarding.",
    },
    {
      question: "How do you ensure quality of candidates?",
      answer:
        "We have a rigorous screening process that includes skill assessments, background checks, and behavioural interviews. We also provide a guarantee period for all placements.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We serve diverse sectors including IT, manufacturing, healthcare, BFSI, retail, and logistics. Our team has expertise in both white‑collar and blue‑collar recruitment.",
    },
  ],
  "Placement Services": [
    {
      question: "What placement services do you offer?",
      answer:
        "We provide end‑to‑end placement services for permanent, temporary, and contract positions. We also offer executive search, campus recruitment, and RPO (Recruitment Process Outsourcing).",
    },
    {
      question: "How do you match candidates to roles?",
      answer:
        "We use a combination of AI‑based matching tools and human expertise. Our recruiters assess technical skills, cultural fit, and career aspirations to ensure the best match.",
    },
    {
      question: "What is your success rate?",
      answer:
        "We maintain a 95% success rate in filling positions within the agreed timeline. Our client retention and repeat business rate is over 80% – a testament to our quality.",
    },
  ],
  "QMS Services": [
    {
      question: "What is QMS and why do I need it?",
      answer:
        "A Quality Management System (QMS) formalises your processes to ensure consistent quality and compliance. It helps you reduce errors, improve efficiency, and gain certifications like ISO 9001, which boosts customer trust and opens new business opportunities.",
    },
    {
      question: "How long does QMS implementation typically take?",
      answer:
        "Depending on your organisation’s size and existing processes, implementation can take anywhere from 2 to 6 months. We work with you to create a phased, customised plan that fits your timeline.",
    },
    {
      question: "Do you support post‑certification maintenance?",
      answer:
        "Yes, we offer ongoing support including surveillance audit preparation, management review guidance, and continuous improvement initiatives to keep your QMS effective and compliant.",
    },
  ],
  "Audit Services": [
    {
      question: "What kind of audits do you perform?",
      answer:
        "We conduct internal audits, supplier audits, process audits, and gap assessments. We also help you prepare for external certification audits from registrars like BSI, SGS, or TÜV.",
    },
    {
      question: "How often should I conduct internal audits?",
      answer:
        "Typically, internal audits are conducted annually or semi‑annually, but the frequency depends on your organisation’s risk profile and certification requirements. We can help you design an audit schedule that fits your needs.",
    },
    {
      question: "What is the difference between internal and external audit?",
      answer:
        "Internal audits are performed by your own staff (or by us as third‑party consultants) to evaluate your QMS internally. External audits are conducted by certification bodies to grant or renew your ISO certificate. We assist with both.",
    },
  ],
  "Training/Development & Certification": [
    {
      question: "Do you offer training for my team?",
      answer:
        "Absolutely. We provide on‑site and virtual training covering QMS awareness, internal auditing, corrective action, and documentation control. All sessions are practical and tailored to your industry.",
    },
    {
      question: "What training formats are available?",
      answer:
        "We offer classroom training, online webinars, blended learning, and custom workshops. We can also develop e‑learning modules specific to your processes.",
    },
    {
      question: "Can training be customised for our industry?",
      answer:
        "Yes, all our training programmes are customised to your industry domain – whether manufacturing, healthcare, IT, or services. We use real‑world scenarios from your sector.",
    },
  ],
};

const FAQ = () => {
  // Track active question per service (using a single state keyed by service+questionId)
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // Flatten all FAQs with a unique id combining service index and question index
  const allFaqs = Object.entries(faqData).flatMap(
    ([service, questions], serviceIdx) =>
      questions.map((q, qIdx) => ({
        ...q,
        service,
        id: `${serviceIdx}-${qIdx}`,
      })),
  );

  // Group by service for rendering
  const grouped = Object.entries(faqData).map(([service, questions]) => ({
    service,
    questions: questions.map((q, idx) => ({ ...q, id: `${service}-${idx}` })),
  }));

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-600 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Find answers about our services – QMS, Audit, Training, Manpower &
            Placement.
          </p>
        </motion.div>

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grouped.map(({ service, questions }, idx) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 flex flex-col"
            >
              {/* Service Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                <span className="text-indigo-600">
                  {serviceIcons[service] || <Shield className="w-6 h-6" />}
                </span>
                <h3 className="text-xl font-bold text-gray-800">{service}</h3>
              </div>

              {/* Accordion for this service's FAQs */}
              <div className="space-y-2 flex-1">
                {questions.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition"
                      aria-expanded={activeId === faq.id}
                    >
                      <span className="text-sm font-medium text-gray-700 pr-2">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-indigo-500 ml-2 flex-shrink-0"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {activeId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-3 pt-0 text-xs md:text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
