import { motion } from "framer-motion";

const clients = [
  { name: "INDUSTRIAL", logo: "/img/clients1.png" },
  { name: "INDUSTRIAL", logo: "/img/clients2.png" },
  { name: "INDUSTRIAL", logo: "/img/clients3.png" },
  { name: "INDUSTRIAL", logo: "/img/clients4.png" },
  { name: "INDUSTRIAL", logo: "/img/clients5.png" },
  { name: "INDUSTRIAL", logo: "/img/clients6.png" },
  { name: "INDUSTRIAL", logo: "/img/clients7.png" },
  { name: "INDUSTRIAL", logo: "/img/clients8.png" },
  { name: "INDUSTRIAL", logo: "/img/clients9.png" },
  { name: "INDUSTRIAL", logo: "/img/clients11.png" },
  { name: "INDUSTRIAL", logo: "/img/clients12.png" },
  { name: "INDUSTRIAL", logo: "/img/clients13.png" },
];

// Duplicate for seamless loop
const loopClients = [...clients, ...clients];

export default function ScrollClients() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="mx-auto px-5 sm:px-8 max-w-7xl">
        {/* Header - Matches KP Reliable style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3">
Our Beneficiary Clients
          </h2>
          <p className="text-gray-600 text-base lg:text-2xl mx-auto">
            Partnering with India's leading manufacturers and backed by internationally recognised quality & QMS standards.
          </p>
        </motion.div>

        {/* Scrolling Logos - Same as KP Reliable */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 w-max"
          >
            {loopClients.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}