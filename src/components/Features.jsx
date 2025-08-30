// src/components/Features.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldAlt,
  faChartLine,
  faMobileAlt,
  faCloud,
  faUsers,
  faLightbulb,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: faBolt,
    title: "Fast Performance",
    description:
      "Optimized solutions that deliver lightning-fast performance for your business needs.",
  },
  {
    icon: faShieldAlt,
    title: "Secure Solutions",
    description:
      "Enterprise-grade security to protect your data and ensure privacy compliance.",
  },
  {
    icon: faChartLine,
    title: "Growth Focused",
    description:
      "Scalable solutions designed to grow with your business and adapt to changing needs.",
  },
  {
    icon: faMobileAlt,
    title: "Mobile Ready",
    description:
      "Seamlessly designed to work across all devices with responsive UI/UX.",
  },
  {
    icon: faCloud,
    title: "Cloud Integration",
    description:
      "Powerful cloud-native applications for flexibility, scalability, and cost efficiency.",
  },
  {
    icon: faUsers,
    title: "Team Collaboration",
    description:
      "Built-in tools and integrations that improve productivity and collaboration.",
  },
  {
    icon: faLightbulb,
    title: "Innovative Ideas",
    description:
      "Creative approaches that ensure your projects always stand out in the market.",
  },
  {
    icon: faCodeBranch,
    title: "Agile Development",
    description:
      "Iterative development process to adapt quickly to your changing requirements.",
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleFeatures = [
    features[index % features.length],
    features[(index + 1) % features.length],
    features[(index + 2) % features.length],
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-amber-500">Project A</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine innovative technology with creative solutions to deliver exceptional results.
          </p>
        </div>

        {/* Animate feature cards */}
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
              {visibleFeatures.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  {/* Icon + Title in Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon
                      icon={f.icon}
                      className="text-lg text-amber-500"
                    />
                    <h4 className="text-lg font-bold">{f.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Features;
