// src/components/StudyNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const subjectCategories = {
  Programming: [
    { name: "Python", link: "/programming/python" },
    { name: "Java", link: "/programming/java" },
    { name: "C", link: "/programming/c" },
    { name: "C++", link: "/programming/cpp" },
    { name: "JavaScript", link: "/programming/javascript" },
  ],
  "Web Development": [
    { name: "HTML", link: "/webdev/html" },
    { name: "CSS", link: "/webdev/css" },
    { name: "JavaScript", link: "/webdev/javascript" },
    { name: "ReactJS", link: "/webdev/react" },
    { name: "Bootstrap", link: "/webdev/bootstrap" },
    { name: "TailwindCSS", link: "/webdev/tailwind" },
    { name: "Django", link: "/webdev/django" },
    { name: "Flask", link: "/webdev/flask" },
    { name: "Spring Boot", link: "/webdev/springboot" },
  ],
  Databases: [
    { name: "SQL", link: "/database/sql" },
    { name: "MySQL", link: "/database/mysql" },
    { name: "PostgreSQL", link: "/database/postgresql" },
    { name: "MongoDB", link: "/database/mongodb" },
  ],
  "Data Science & AI": [
    { name: "Python", link: "/ai/python" },
    { name: "Pandas", link: "/ai/pandas" },
    { name: "NumPy", link: "/ai/numpy" },
    { name: "Machine Learning", link: "/ai/ml" },
    { name: "Deep Learning", link: "/ai/deep-learning" },
    { name: "AI", link: "/ai/ai" },
  ],
  Science: [
    { name: "Physics", link: "/science/physics" },
    { name: "Chemistry", link: "/science/chemistry" },
    { name: "Biology", link: "/science/biology" },
    { name: "Environmental Science", link: "/science/environmental" },
    { name: "Astronomy", link: "/science/astronomy" },
  ],
  Mathematics: [
    { name: "Algebra", link: "/math/algebra" },
    { name: "Calculus", link: "/math/calculus" },
    { name: "Statistics", link: "/math/statistics" },
    { name: "Trigonometry", link: "/math/trigonometry" },
    { name: "Geometry", link: "/math/geometry" },
  ],
  School: [
    { name: "Math", link: "/school/math" },
    { name: "Science", link: "/school/science" },
    { name: "Social Studies", link: "/school/social-studies" },
    { name: "English", link: "/school/english" },
    { name: "Computer", link: "/school/computer" },
    { name: "Languages", link: "/school/languages" },
  ],
  Languages: [
    { name: "English", link: "/languages/english" },
    { name: "French", link: "/languages/french" },
    { name: "German", link: "/languages/german" },
    { name: "Spanish", link: "/languages/spanish" },
    { name: "Chinese", link: "/languages/chinese" },
    { name: "Hindi", link: "/languages/hindi" },
    { name: "Telugu", link: "/languages/telugu" },
    { name: "Tamil", link: "/languages/tamil" },
  ],
  "Interview Prep": [
    { name: "HR Questions", link: "/interview/hr" },
    { name: "Coding", link: "/interview/coding" },
    { name: "Resume Tips", link: "/interview/resume" },
    { name: "Mock Interviews", link: "/interview/mock" },
    { name: "Projects", link: "/interview/projects" },
  ],
  Aptitude: [
    { name: "Quantitative", link: "/aptitude/quantitative" },
    { name: "Logical Reasoning", link: "/aptitude/logical" },
    { name: "Verbal", link: "/aptitude/verbal" },
    { name: "Puzzles", link: "/aptitude/puzzles" },
    { name: "Data Interpretation", link: "/aptitude/data-interpretation" },
  ],
  "Mobile Dev": [
    { name: "React Native", link: "/mobile/react-native" },
    { name: "Flutter", link: "/mobile/flutter" },
    { name: "Kotlin", link: "/mobile/kotlin" },
    { name: "Swift", link: "/mobile/swift" },
    { name: "Android", link: "/mobile/android" },
    { name: "iOS", link: "/mobile/ios" },
  ],
  "Cyber Security": [
    { name: "Ethical Hacking", link: "/cyber/ethical-hacking" },
    { name: "Network Security", link: "/cyber/network" },
    { name: "Pen Testing", link: "/cyber/pen-testing" },
    { name: "Forensics", link: "/cyber/forensics" },
    { name: "Cryptography", link: "/cyber/cryptography" },
  ],
};

const StudyNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      const rect = buttonRefs.current[category].getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2,
      });
      setActiveCategory(category);
    }
  };

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !Object.values(buttonRefs.current).some((btn) => btn.contains(event.target))
      ) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full p-3">
      <div className="flex items-center gap-2">
        <button onClick={scrollLeft} className="px-2 text-xl bg-white rounded shadow hover:bg-gray-100">
          &lt;
        </button>
        <div ref={scrollRef} className="flex gap-4 overflow-hidden w-full">
          {Object.keys(subjectCategories).map((category) => (
            <div key={category} className="relative inline-block">
              <button
                ref={(el) => (buttonRefs.current[category] = el)}
                onClick={() => toggleCategory(category)}
              className="px-4 py-2 bg-white text-black rounded-lg shadow  whitespace-nowrap transition duration-300 hover:bg-amber-500 hover:text-black hover:font-bold"

              >
                {category}
              </button>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="px-2 text-xl bg-white rounded shadow hover:bg-gray-100">
          &gt;
        </button>
      </div>

      {activeCategory && (
        <div
          ref={dropdownRef}
          className="fixed mt-2 bg-white border border-gray-200 rounded-xl px-3 shadow-lg z-[9999] w-48 transform -translate-x-1/2"
          style={{ top: dropdownPos.top + "px", left: dropdownPos.left + "px" }}
        >
          {subjectCategories[activeCategory].map((subject) => (
            <div
              key={subject.name}
              onClick={() => navigate(subject.link)}
              className="px-4 py-2 hover:bg-amber-500 hover:text-black hover:font-bold cursor-pointer"
            >
              {subject.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyNavbar;
