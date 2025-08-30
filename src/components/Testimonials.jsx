// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Hareesh Madineedi",
    role: "Python and DS Developer",
    review:
      "Project A transformed our digital presence. Their innovative approach delivered results beyond our expectations.",
    rating: 5,
  },
  {
    name: "Dinesh Kuna",
    role: "High TechSolutions, React Developer",
    review:
      "The team at Project A understands our vision and delivers solutions that drive real business growth.",
    rating: 5,
  },
  {
    name: "Vamsee Krishna Galeti",
    role: "Full Stack Developer",
    review:
      "Exceptional service and support. They've become an invaluable partner for our digital transformation.",
    rating: 4.5,
  },
  {
    name: "Amardeep Bolagani",
    role: "Python Full Stack Developer",
    review:
      "Project A’s expertise gave us the competitive edge we needed in our industry. Highly recommended!",
    rating: 5,
  },
  {
    name: "Srikanth Dabbakuti",
    role: "UI/UX Designer",
    review:
      "Their designs are creative and user-friendly. Our clients love the new interface.",
    rating: 5,
  },
  {
    name: "Hemanth K",
    role: "Data Engineer",
    review:
      "A truly professional team that integrates seamlessly with our workflows. Impressive!",
    rating: 5,
  },
  {
    name: "Aagnesh Gade",
    role: "Cloud Solutions Architect",
    review:
      "We saw a 40% increase in efficiency after implementing Project A’s solutions. Truly a game-changer!",
    rating: 5,
  },
  {
    name: "Sai Krishna Vinnakota",
    role: "Quality Assurance",
    review:
      "The automation strategies saved us countless hours of manual work. Fantastic team to work with.",
    rating: 4.5,
  },
  {
    name: "Vali Basha Nabeesa Gari",
    role: "Product Manager",
    review:
      "Project A not only met our deadlines but also suggested improvements that boosted our product’s usability.",
    rating: 5,
  },
  {
    name: "Prasanth Bolagani",
    role: "Data Scientist",
    review:
      "Their AI-driven insights helped us make smarter business decisions. Couldn’t be happier with the results.",
    rating: 5,
  },
  {
    name: "Umesh Chandra K",
    role: "Mobile App Developer",
    review:
      "The mobile-first approach ensured our app worked flawlessly on all devices. Super reliable team!",
    rating: 4.5,
  },
  {
    name: "Hemanth Adigopula",
    role: "Tech Lead",
    review:
      "Clear communication, timely delivery, and excellent technical expertise. Highly recommend Project A.",
    rating: 5,
  },
  {
    name: "VenkatSai Ch",
    role: "Frontend Developer",
    review:
      "Loved the clean UI and attention to detail. Our clients immediately noticed the improvement.",
    rating: 5,
  },
  {
    name: "Harinath Reddy",
    role: "Business Analyst",
    review:
      "They helped us align our business goals with the right technology solutions. Very insightful.",
    rating: 4.5,
  },
  {
    name: "Jaya Prakash",
    role: "AI/ML Engineer",
    review:
      "Innovative, forward-thinking, and passionate about technology. Project A is ahead of the curve.",
    rating: 5,
  },
  {
    name: "Raghavendra",
    role: "QA Engineer",
    review:
      "The testing automation solutions drastically reduced our release time. Excellent service!",
    rating: 5,
  },

];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Ensure exactly 3 visible cards (handles array wrap-around)
  const visibleCards = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-amber-500">Clients Say</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        {/* Animate testimonial cards */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleCards.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-900 mr-4">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold">{t.name}</h5>
                      <p className="text-gray-600 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{t.review}"</p>
                  <div className="mt-4 text-yellow-400">
                    {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                    {t.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
