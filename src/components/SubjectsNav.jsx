import React, { useRef, useState } from "react";

const subjectCategories = {
  "Engineering": ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AI/ML", "IoT"],
  "Degree": ["BSc", "B.Com", "BA", "BBA", "BCA", "Maths", "Physics", "Chemistry"],
  "School": ["Math", "Science", "Social", "English", "Computer", "Telugu", "Hindi"],
  "Interview Prep": ["HR Questions", "Coding", "Resume Tips", "Mock Interviews", "Projects"],
  "Aptitude": ["Quantitative", "Logical Reasoning", "Verbal", "Puzzles", "Data Interpretation"],
  "Programming": ["C", "C++", "Java", "Python", "JavaScript", "Go", "Kotlin", "R", "Perl"],
  "Web Dev": ["HTML", "CSS", "JS", "React", "Node.js", "MongoDB", "Tailwind", "Express"],
  "DevOps": ["Linux", "Docker", "Kubernetes", "CI/CD", "Ansible", "AWS", "Azure"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQLite"],
  "DSA": ["Arrays", "Linked List", "Trees", "Graphs", "Stacks", "Queues", "Sorting"],
  "AI & ML": ["Machine Learning", "Deep Learning", "Data Science", "NLP", "Computer Vision"],
  "English Skills": ["Grammar", "Tenses", "Spoken English", "Writing", "Reading", "Vocabulary"],
  "Courses": ["Frontend", "Backend", "Full Stack", "Cyber Security", "Blockchain", "Cloud"],
  "Others": ["Git", "Github", "System Design", "Linux Commands", "Soft Skills", "GATE", "NET"]
};

const StudyNav = () => {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  return (
    <div className="w-full shadow-md bg-white p-3 relative">
      <div className="flex items-center space-x-2">
        <button onClick={scrollLeft} className="text-2xl px-2 hover:text-blue-600">&lt;</button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap w-full"
        >
          {Object.keys(subjectCategories).map((category, index) => (
            <div key={index} className="relative mx-1">
              <button
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                  selectedCategory === category
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 hover:bg-blue-50 text-gray-700"
                }`}
              >
                {category}
              </button>

              {/* Dropdown List */}
              {selectedCategory === category && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white border rounded shadow z-50">
                  {subjectCategories[category].map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                      onClick={() => alert(`You clicked on ${sub}`)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="text-2xl px-2 hover:text-blue-600">&gt;</button>
      </div>
    </div>
  );
};

export default StudyNav;
