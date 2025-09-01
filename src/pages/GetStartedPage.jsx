// src/components/GetStarted.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaLaptopCode, FaLightbulb, FaUsers, FaGlobe, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

const educationOverview = [
  {
    icon: <FaGraduationCap className="text-5xl text-blue-600 mb-4" />,
    title: "What is Education?",
    description:
      "Education is the process of acquiring knowledge, skills, values, and habits. It empowers individuals to think critically, solve problems, and contribute meaningfully to society.",
    subcategories: ["Knowledge", "Skills", "Values"],
  },
  {
    icon: <FaBookOpen className="text-5xl text-green-600 mb-4" />,
    title: "Types of Education",
    description:
      "Formal education occurs in schools and colleges. Non-formal education includes workshops and online courses. Informal education happens through life experiences, self-study, and interaction with others.",
    subcategories: ["Formal", "Non-Formal", "Informal"],
  },
  {
    icon: <FaLaptopCode className="text-5xl text-purple-600 mb-4" />,
    title: "Modes of Learning",
    description:
      "Traditional classroom learning is face-to-face. Online learning leverages digital platforms. Blended learning combines both methods for flexibility and enhanced engagement.",
    subcategories: ["Classroom", "Online", "Blended"],
  },
  {
    icon: <FaLightbulb className="text-5xl text-yellow-500 mb-4" />,
    title: "Purpose of Education",
    description:
      "Education helps in knowledge acquisition, skill development, critical thinking, moral development, and preparing individuals for personal and professional life.",
    subcategories: ["Personal Growth", "Career", "Social Awareness"],
  },
  {
    icon: <FaUsers className="text-5xl text-pink-500 mb-4" />,
    title: "Benefits of Education",
    description:
      "Education improves career prospects, personal growth, social awareness, and empowers individuals to make informed decisions.",
    subcategories: ["Confidence", "Opportunities", "Awareness"],
  },
  {
    icon: <FaGlobe className="text-5xl text-teal-500 mb-4" />,
    title: "Lifelong Learning",
    description:
      "Education does not stop at school or college. Lifelong learning helps individuals adapt to changing technology, careers, and life challenges.",
    subcategories: ["Continuous Learning", "Skill Upgradation"],
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-indigo-500 mb-4" />,
    title: "Digital Learning",
    description:
      "Online platforms, apps, and digital tools make learning flexible, interactive, and accessible from anywhere in the world.",
    subcategories: ["E-learning Platforms", "Apps", "Virtual Labs"],
  },
  {
    icon: <FaBriefcase className="text-5xl text-orange-500 mb-4" />,
    title: "Career Preparation",
    description:
      "Education equips students with skills, knowledge, and competencies to excel in their careers and become industry-ready professionals.",
    subcategories: ["Internships", "Job Readiness", "Skills"],
  },
];

const GetStarted = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Started with <span className="text-blue-600">Education</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Learn about the importance of education, its types, modes of learning, and how it helps you grow personally and professionally.
        </motion.p>

        {/* Education Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {educationOverview.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
              <ul className="text-left list-disc list-inside text-gray-500 mb-2">
                {item.subcategories.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Get Started Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            SignUp
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
