// src/components/OurStory.jsx
import React from "react";

export const OurStoryPage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white font-poppins text-gray-800">
      {/* Our Story Title */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 relative">
            Our Story
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded"></span>
          </h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            The journey of <strong className="text-indigo-700">ANA Innovative Works</strong> —
            where innovation meets passion and purpose.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {[
            {
              year: "2021",
              title: "Foundation",
              desc: "ANA Innovative Works was founded by TMK with a vision to create technology solutions that make a real difference. Starting with just three passionate team members, we began our journey in a small office space, fueled by big dreams and endless coffee.",
            },
            {
              year: "2022",
              title: "First Major Breakthrough",
              desc: "After countless late nights and innovative thinking, we developed our first patented technology solution that revolutionized how small businesses manage their operations. This marked our triumphant entry into the enterprise solutions market.",
            },
            {
              year: "2023",
              title: "Visionary Ideas",
              desc: "With a growing family of 50+ brilliant innovators, we expanded our operations internationally, opening offices in three new countries and serving diverse clients across multiple industries.",
            },
            {
              year: "2024",
              title: "Work Progress",
              desc: "ANA Innovative Works ,Passion to  deliver a good team work. ",
            },
            {
              year: "Present",
              title: "Leading the Way",
              desc: "Today, we stand at the forefront of technological innovation,Starting a cutting edge technologies",
            },
          ].map((item, index) => (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg animate-fadeIn">
                {item.year}
              </div>
              <div className="bg-white border border-gray-100 shadow-md p-6 rounded-xl w-full md:w-1/2 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-indigo-800 mb-2 relative">
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-12 h-1 bg-indigo-500 rounded"></span>
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12 relative inline-block">
          Our Mission & Vision
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-500 rounded"></span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-lg p-8 rounded-xl flex-1 border border-gray-100">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Mission</h3>
            <p className="text-gray-600">
              To empower businesses through innovative technology solutions that drive efficiency, growth, and competitive advantage. We believe in creating tools that transform possibilities.
            </p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-xl flex-1 border border-gray-100">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Vision</h3>
            <p className="text-gray-600">
              To be the global leader in transformative technology solutions, recognized for meaningful impact in businesses and communities worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
