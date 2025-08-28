import React, { useState, useRef } from "react";

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
  Networking: ["OSI Model", "TCP/IP", "Routing", "Switching", "DNS", "VPN", "Firewalls"],
  "System Design": ["Scalability", "Load Balancing", "Caching", "Microservices", "Event-driven Architecture"],
  "Soft Skills": ["Leadership", "Teamwork", "Time Management", "Problem Solving", "Critical Thinking", "Adaptability"],
  Exams: ["GATE", "NET", "CAT", "GRE", "TOEFL", "IELTS", "SAT", "UPSC", "SSC", "Banking"],
  "Teacher Training": ["B.Ed", "M.Ed", "Educational Psychology", "Pedagogy", "Curriculum Development"],
  "Professional Certifications": ["AWS", "Azure", "Google Cloud", "Cisco", "Oracle", "Red Hat", "Microsoft"],
  "Career Prep": ["Resume Building", "LinkedIn", "Freelancing", "Entrepreneurship", "Startups"],
  "Fine Arts": ["Music", "Dance", "Painting", "Drama", "Photography", "Film Making"],
  Sports: ["Cricket", "Football", "Tennis", "Basketball", "Athletics", "Yoga", "Martial Arts"],
};


const StudyNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});
  const scrollRef = useRef(null);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      const rect = buttonRefs.current[category].getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + window.scrollY, left: rect.left });
      setActiveCategory(category);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-gray-200 p-3 shadow-md">
      {/* Scrollable Navbar with Arrows */}
      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="px-2 text-xl bg-white rounded shadow hover:bg-gray-100"
        >
          &lt;
        </button>

        {/* Categories - disable manual scroll */}
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

      {/* Floating Dropdown using fixed position */}
      {activeCategory && (
        <div
          className="fixed bg-white border rounded-lg shadow-lg z-[9999] w-48"
          style={{ top: dropdownPos.top + "px", left: dropdownPos.left + "px" }}
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

      {/* Random Content Below */}
      <div className="mt-20 p-6 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Main Content</h2>
        <p>
          ✅ Dropdown floats above.  
          ✅ Categories move only when you click the arrows 
          ❌ No manual scroll.
        </p>
      </div>
    </div>
  );
};

export default StudyNavbar;
