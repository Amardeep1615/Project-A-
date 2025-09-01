// src/components/LearnMore.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaBook, FaVideo } from "react-icons/fa";

const courses = [
  {
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600 mb-4" />,
    title: "Expert Tutors",
    description:
      "Learn from industry professionals with years of teaching and real-world experience.",
    action: "Meet Tutors",
    link: "/tutors",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-green-600 mb-4" />,
    title: "Interactive Coding Courses",
    description:
      "Hands-on coding labs with real-time feedback to make learning engaging and practical.",
    action: "Start Learning",
    link: "/courses",
  },
  {
    icon: <FaBook className="text-5xl text-yellow-500 mb-4" />,
    title: "Resource Library",
    description:
      "Access e-books, PDFs, and practice materials to strengthen your skills and knowledge.",
    action: "Explore Library",
    link: "/library",
  },
  {
    icon: <FaVideo className="text-5xl text-purple-500 mb-4" />,
    title: "Video Tutorials",
    description:
      "Watch high-quality tutorials and lectures from top educators at your own pace.",
    action: "Watch Now",
    link: "/videos",
  },
];

const LearnMore = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn More & <span className="text-blue-600">Engage Yourself</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our platform is designed for students to explore, practice, and excel in various
          subjects with interactive content, expert guidance, and engaging resources.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {course.icon}
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              {/* Make description take equal space */}
              <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
              <Link
                to={course.link}
                className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
              >
                {course.action}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
