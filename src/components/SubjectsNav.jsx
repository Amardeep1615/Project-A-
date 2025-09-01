import React, { useState, useRef, useEffect } from "react";

const subjectCategories = {
  Engineering: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AI/ML", "IoT", "Aerospace", "Automotive"],
  Medical: ["MBBS", "Nursing", "Dentistry", "Pharmacy", "Physiotherapy", "Public Health", "Biotechnology"],
  Law: ["Corporate Law", "Criminal Law", "Civil Law", "International Law", "Constitutional Law"],
  Management: ["MBA", "Marketing", "Finance", "Human Resources", "Operations", "Entrepreneurship"],
  Commerce: ["B.Com", "Accounting", "Taxation", "Auditing", "Banking", "Insurance"],
  Arts: ["History", "Political Science", "Sociology", "Psychology", "Philosophy", "Geography", "Languages"],
  Science: ["Physics", "Chemistry", "Biology", "Environmental Science", "Astronomy"],
  Mathematics: ["Algebra", "Calculus", "Statistics", "Trigonometry", "Geometry"],
  School: ["Math", "Science", "Social Studies", "English", "Computer", "Languages"],
  Languages: ["English", "French", "German", "Spanish", "Chinese", "Hindi", "Telugu", "Tamil"],
  "Interview Prep": ["HR Questions", "Coding", "Resume Tips", "Mock Interviews", "Projects"],
  Aptitude: ["Quantitative", "Logical Reasoning", "Verbal", "Puzzles", "Data Interpretation"],
  Programming: ["C", "C++", "Java", "Python", "JavaScript", "Go", "Kotlin", "Swift", "Ruby", "PHP", "Rust"],
  "Web Dev": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Tailwind", "Express", "Django", "Flask"],
  "Mobile Dev": ["React Native", "Flutter", "Kotlin", "Swift", "Android", "iOS"],
  "Game Dev": ["Unity", "Unreal Engine", "C#", "Blender", "2D Games", "3D Games"],
  "UI/UX & Design": ["Figma", "Adobe XD", "Canva", "Photoshop", "Illustrator"],
  DSA: ["Arrays", "Linked List", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Searching", "Hashing", "Dynamic Programming"],
  "AI & ML": ["Machine Learning", "Deep Learning", "Data Science", "NLP", "Computer Vision", "Generative AI", "Reinforcement Learning"],
  "Cyber Security": ["Ethical Hacking", "Network Security", "Pen Testing", "Forensics", "Cryptography"],
  Blockchain: ["Bitcoin", "Ethereum", "Smart Contracts", "Web3", "NFTs"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Heroku", "DigitalOcean", "Cloudflare"],
  DevOps: ["Linux", "Docker", "Kubernetes", "CI/CD", "Ansible", "Terraform", "Jenkins", "Prometheus"],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQLite", "MariaDB", "Redis", "Cassandra", "Firebase"],
};

const StudyNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const scrollRef = useRef(null);

  // Toggle category dropdown
  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      const rect = buttonRefs.current[category].getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2, // ✅ center of button
      });
      setActiveCategory(category);
    }
  };

  // Scroll controls
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Close dropdown on outside click
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
      {/* Scrollable Navbar with Arrows */}
      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="px-2 text-xl bg-white rounded shadow hover:bg-gray-100"
        >
          &lt;
        </button>

        {/* Categories */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden w-full"
        >
          {Object.keys(subjectCategories).map((category) => (
            <div key={category} className="relative inline-block">
              <button
                ref={(el) => (buttonRefs.current[category] = el)}
                onClick={() => toggleCategory(category)}
                className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 whitespace-nowrap"
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="px-2 text-xl bg-white rounded shadow hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>

      {/* Floating Dropdown */}
      {activeCategory && (
        <div
          ref={dropdownRef}
          className="fixed mt-2 bg-white border border-gray-200 rounded-xl px-3 shadow-lg z-[9999] w-48 transform -translate-x-1/2"
          style={{
            top: dropdownPos.top + "px",
            left: dropdownPos.left + "px",
          }}
        >
          {subjectCategories[activeCategory].map((subject) => (
            <div
              key={subject}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {subject}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyNavbar;
