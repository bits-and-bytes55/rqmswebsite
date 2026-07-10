// components/Testimonials.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  // QMS
  {
    id: 1,
    name: 'Dr. S. Mehta',
    role: 'CEO, MedTech Innovations',
    service: 'QMS',
    quote:
      'Industrial Sensor’s QMS implementation was flawless. We achieved ISO 13485 certification within 4 months – their expertise is unmatched.',
    avatar: '',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Quality Manager, Bharat Forge',
    service: 'QMS',
    quote:
      'Their QMS documentation and process mapping saved us months of effort. We went from zero to ISO 9001:2015 in just 3 months.',
    avatar: '',
    rating: 5,
  },
  // Audit
  {
    id: 3,
    name: 'Ananya Reddy',
    role: 'Quality Head, Apex Auto',
    service: 'Audit',
    quote:
      'The internal audit services identified critical gaps we never knew existed. Now our processes are leaner, and we’ve reduced non‑conformities by 80%.',
    avatar: '',
    rating: 4,
  },
  {
    id: 4,
    name: 'Vivek Sharma',
    role: 'Operations Lead, Tata Motors',
    service: 'Audit',
    quote:
      'Their supplier audit program helped us eliminate 5 underperforming vendors and improved our supply chain quality significantly.',
    avatar: '',
    rating: 5,
  },
  // Training & Development
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Operations Director, GreenEnergy',
    service: 'Training & Development',
    quote:
      'Training programs were practical and engaging. Our team now confidently handles QMS documentation and root‑cause analysis. Highly recommend!',
    avatar: '',
    rating: 5,
  },
  {
    id: 6,
    name: 'Priya Patel',
    role: 'HR Manager, ITC Limited',
    service: 'Training & Development',
    quote:
      'We saw a 40% increase in audit readiness scores after their customized training workshops for our internal auditors. Excellent content delivery.',
    avatar: '',
    rating: 4,
  },
  // Manpower Services
  {
    id: 7,
    name: 'Amit Jain',
    role: 'Director, TechSolutions Pvt Ltd',
    service: 'Manpower Services',
    quote:
      'Their temporary staffing solution helped us scale up production during peak season without compromising on quality. Turnaround time was incredible.',
    avatar: '',
    rating: 5,
  },
  {
    id: 8,
    name: 'Sneha Reddy',
    role: 'HR Lead, Deloitte',
    service: 'Manpower Services',
    quote:
      'The contract workforce they provided for our project were highly skilled and required minimal onboarding. Reduced our hiring cycle by 60%.',
    avatar: '',
    rating: 4,
  },
  // Placement Services
  {
    id: 9,
    name: 'Deepak Gupta',
    role: 'VP, HDFC Bank',
    service: 'Placement Services',
    quote:
      'We partnered with them for executive search and within 2 weeks they delivered 3 top‑tier candidates. Two of them are now our regional heads.',
    avatar: '',
    rating: 5,
  },
  {
    id: 10,
    name: 'Nina Pillai',
    role: 'CEO, StartUp Hub',
    service: 'Placement Services',
    quote:
      'Their campus recruitment drive was flawless. We hired 25 fresh graduates in a single day, all aligned with our company culture.',
    avatar: '',
    rating: 4,
  },
];

// Helper to get initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Star rating renderer
const renderStars = (rating) => {
  const totalStars = 5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 fill-gray-300'
          } transition-colors`}
        />
      ))}
    </div>
  );
};

// Service color mapping
const serviceColors = {
  'QMS': 'bg-blue-100 text-blue-700',
  'Audit': 'bg-purple-100 text-purple-700',
  'Training & Development': 'bg-green-100 text-green-700',
  'Manpower Services': 'bg-orange-100 text-orange-700',
  'Placement Services': 'bg-pink-100 text-pink-700',
};

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2; // half because duplicated
    let startTime = null;
    const speed = 0.5; // pixels per frame – adjust for speed

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const delta = timestamp - startTime;
      startTime = timestamp;

      if (!isPaused) {
        setScrollPosition((prev) => {
          let newPos = prev + speed * (delta / 16); // delta in ms, target 60fps
          if (newPos >= scrollWidth) {
            newPos = newPos - scrollWidth;
          }
          return newPos;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Handle stop on click
  const handleClick = () => {
    setIsPaused(true);
    // Optionally resume after a delay or on next hover out
    // For now, we pause permanently until user hovers out
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-600 mb-3">
            Client Testimonials
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Real feedback from our clients across all services – QMS, Audit, Training, Manpower & Placement.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div
            ref={containerRef}
            className="flex gap-6 transition-none"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              willChange: 'transform',
            }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px]  bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                
                <div className="flex items-center gap-3 mb-3">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-md">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
                <div className="mb-2">{renderStars(item.rating)}</div>
                <p className="text-gray-600 text-sm leading-relaxed italic">“{item.quote}”</p>
                <Quote className="mt-2 text-indigo-100 w-6 h-6 ml-auto" />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;