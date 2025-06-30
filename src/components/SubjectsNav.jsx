// src/components/SubjectsNav.js
import React, { useRef } from "react";
import './SubjectNav.css'

const subjects = [
  { label: "CSE", href: "/btech/cse" },
  { label: "ECE", href: "/btech/ece" },
  { label: "EEE", href: "/btech/eee" },
  { label: "MECH", href: "/btech/mech" },
  { label: "CIVIL", href: "/btech/civil" },
  { label: "IT", href: "/btech/it" },
  { label: "AI & DS", href: "/btech/ai-ds" },
  { label: "Computer Science", href: "/subjects/computer-science" },
  { label: "Cyber Security", href: "/btech/cyber-security" },
  { label: "B.Sc Computers", href: "/degree/bsc-computers" },
  { label: "B.Com", href: "/degree/bcom" },
  { label: "BBA", href: "/degree/bba" },
  { label: "BA", href: "/degree/ba" },
  { label: "Mathematics", href: "/subjects/mathematics" },
  { label: "Physics", href: "/subjects/physics" },
  { label: "Chemistry", href: "/subjects/chemistry" },
  { label: "Biology", href: "/subjects/biology" },
  { label: "Aptitude", href: "/subjects/Aptitude" },
  { label: "Communication", href: "/subjects/Communication" },
  { label: "SoftSkills", href: "/subjects/SoftSkills" },


 
];

const SubjectsNav = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative bg-sky-50 border-t border-b border-sky-200 shadow-inner">
      {/* Prev Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-sky-600 px-3 py-2 rounded-full shadow hover:bg-sky-100 z-10"
        aria-label="Scroll left"
      >
        ❮
      </button>
      {/* Next Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-sky-600 px-3 py-2 rounded-full shadow hover:bg-sky-100 z-10"
        aria-label="Scroll right"
      >
        ❯
      </button>
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-4 py-3">
          {subjects.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="whitespace-nowrap px-4 py-2 rounded-full bg-white hover:bg-sky-100 text-sky-700 font-medium shadow-sm border border-sky-200 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubjectsNav;
