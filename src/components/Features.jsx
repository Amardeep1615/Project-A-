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

const features = [
  { icon: faBolt, title: "Fast Performance", description: "Optimized solutions that deliver lightning-fast performance for your business needs." },
  { icon: faShieldAlt, title: "Secure Solutions", description: "Enterprise-grade security to protect your data and ensure privacy compliance." },
  { icon: faChartLine, title: "Growth Focused", description: "Scalable solutions designed to grow with your business and adapt to changing needs." },
  { icon: faMobileAlt, title: "Mobile Ready", description: "Seamlessly designed to work across all devices with responsive UI/UX." },
  { icon: faCloud, title: "Cloud Integration", description: "Powerful cloud-native applications for flexibility, scalability, and cost efficiency." },
  { icon: faUsers, title: "Team Collaboration", description: "Built-in tools and integrations that improve productivity and collaboration." },
  { icon: faLightbulb, title: "Innovative Ideas", description: "Creative approaches that ensure your projects always stand out in the market." },
  { icon: faCodeBranch, title: "Agile Development", description: "Iterative development process to adapt quickly to your changing requirements." },
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
    <section className=" bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-center">Motivate to bring you <span className="text-amber-500"> more interesting ideas.</span></h1>

      <p className="text-gray-600 max-w-2xl mx-auto ">
        1.Explore a world of knowledge with engaging courses, practical projects, and expert guidance.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-2 ">
        2.Unlock your potential and turn your ideas into real achievements.
      </p>


      <div className="bg- flex flex-col items-center justify-center px-6 py-12 rounded-xl shadow-xl text-white">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
          {/* Scientist Image */}
          <img
            src="/olderadultscientist.jpg"
            alt="A scientist looking through a microscope"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-2xl transform transition duration-500 hover:scale-105"
          />

          {/* Features List */}
          <ul className="text-xl md:text-2xl text-black font-serif space-y-4 md:ml-4">
            <li>✔ Knowledge (science, arts, culture)</li>
            <li>✔ Skills (critical thinking, communication, technical)</li>
            <li>✔ Values & Ethics (respect, integrity, empathy)</li>
            <li>✔ Creativity & Innovation (adaptation in the modern world)</li>
          </ul>
        </div>

        {/* Highlighted Text */}
        <h1 className="mt-10 text-3xl md:text-4xl font-bold text-amber-500 font-cursive text-center">
          <span className="mr-2">★</span>Focus on your target<span className="ml-2">★</span>
        </h1>
      </div>





      {/* 2nd code */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-center">
        Travel through AI Technology and become a <span className="text-amber-500">Master Coder.</span>
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto  ">
        1. Explore a world of knowledge with engaging courses, hands-on projects.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        2. Unlock your potential by learning advanced coding techniques, solving real-world problems.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-2">
        3. Gain confidence in AI, machine learning, and full-stack development.
      </p>

      <div className="bg- px-6 py-12 flex flex-col md:flex-row items-center rounded-xl shadow-xl">

        <img
          src="/cod33.jpg"
          alt="AI & Coding"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-2xl mb-6 md:mb-0"
        />
        <div className="md:ml-10 text-black md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">Master Coding & AI</h2>
          <p>Learn AI & Machine Learning fundamentals while coding in Python, JavaScript, and more.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Build projects solving real-world problems.</li>
            <li>Evaluate algorithms and optimize solutions.</li>
            <li>Hands-on coding exercises for practice.</li>
          </ul>
        </div>
      </div>

      {/* 3rd code */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-center">
        Learn from <span className="text-amber-500">Experts</span> and Enhance Your Skills
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        1. Explore a world of knowledge with engaging courses, practical projects, expert guidance.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        2. Unlock your potential and turn your ideas into real achievements.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-2">
        3. Learn at your own pace and gain practical experience to thrive in the modern world.
      </p>

      <div className=" px-6 py-12 flex flex-col md:flex-row items-center rounded-xl shadow-xl">
        <div className="md:mr-10 md:w-1/2 text-black space-y-4">
          <h2 className="text-4xl font-bold">Learn from Experts</h2>
          <p>Get guidance from scientists, mathematicians, and coders with practical knowledge evaluation.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Hands-on coding exercises to solidify learning.</li>
            <li>Quizzes & assessments to track progress.</li>
            <li>Connect theory with practical applications.</li>
          </ul>
        </div>
        <img
          src="/phy.jpg"
          alt="Learn from Scientists"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-2xl mt-6 md:mt-0"
        />
      </div>



      {/* 4th code */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-4">
        Master English & <span className="text-amber-500">Communication Skills</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        1.Improve your grammar,vocabulary, and enhance your writing and speaking abilities.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto  mb-2">
        2.Professional communication skills to succeed in interview and real-world interactions.
      </p>

      <div className=" px-6 py-12 rounded-xl shadow-xl">
        <h6 className="text-3xl font-bold text-center text-black mb-12">
          English & Communication
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Grammar */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-orange-400/50">
            <img
              src="/eng.jpg"
              alt="Grammar"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-orange-500">Grammar</h3>
            <p className="text-gray-600">Improve writing, speaking, and grammar fundamentals.</p>
          </div>

          {/* Vocabulary */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-orange-400/50">
            <img
              src="/eng1.jpg"
              alt="Vocabulary"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-orange-500">Vocabulary</h3>
            <p className="text-gray-600">Expand your word knowledge and reading comprehension.</p>
          </div>

          {/* Communication */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-orange-400/50">
            <img
              src="/eng2.jpg"
              alt="Communication"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-orange-500">Communication</h3>
            <p className="text-gray-600">Practice professional speaking and presentation skills.</p>
          </div>
        </div>
      </div>
    
      
      {/* 5th code */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-4">Job Market <span className="text-amber-500"> Insights </span></h2>
      <p className="max-w-2xl mx-auto ">
        1.Understand industry trends, employability skills, and the roles most in demand today.
      </p>
      <p className="max-w-2xl mx-auto mb-2">
        2.Get guidance on internships, entry-level jobs, and career growth in technology and business sectors.
      </p>


      <div className=" px-6 py-12 flex flex-col md:flex-row items-center rounded-xl shadow-xl">
        <div className="md:w-1/2 text-black space-y-4">
          <h2 className="text-4xl font-bold">Prepare for the Job Market</h2>
          <p>Learn career-oriented skills, build resumes, and prepare for interviews.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Explore tech & science career opportunities.</li>
            <li>Soft skills for workplace success.</li>
            <li>Mentorship & placement guidance.</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/cod4.jpg"
            alt="Career Prep"
            className="w-full h-80 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>


      {/* 6th code */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-4">
        Explore the World of <span className="text-amber-500"> General Sciences </span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        1.Dive into Physics, Chemistry, Mathematics, and Biology to build a strong foundation in science.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-2">
        2.Understand key concepts, theories, and practical applications that shape the modern scientific world.
      </p>


      <div className=" px-6 py-12 rounded-xl shadow-xl">
        <h6 className="text-3xl font-bold text-center text-black mb-8">General Sciences</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Physics */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src="/phy1.jpg" alt="Physics" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-2xl font-bold mb-1">Physics</h3>
            <p>Mechanics, optics, thermodynamics, modern physics.</p>
          </div>
          {/* Chemistry */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src="/chem1.jpg" alt="Chemistry" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-2xl font-bold mb-1">Chemistry</h3>
            <p>Organic, inorganic, and physical chemistry concepts.</p>
          </div>
          {/* Math */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src="/math.jpg" alt="Math" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-2xl font-bold mb-1">Mathematics</h3>
            <p>Algebra, geometry, calculus, statistics, applied math.</p>
          </div>
          {/* Biology */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src="/bio.jpg" alt="Biology" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-2xl font-bold mb-1">Biology</h3>
            <p>Anatomy, genetics, ecology, and microbiology.</p>
          </div>
        </div>
      </div>

      {/* 7th code */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-4">
        Enhance Your Social Skills & <span className="text-amber-500"> Coding Levels</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        1.Start from the basics and gradually advance through coding principles, teamwork, and problem-solving skills.
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-2">
        2.Take on real projects, integrate AI/ML, and develop leadership in coding teams while improving collaboration and communication.
      </p>


      <div className="px-6 py-12 rounded-xl shadow-xl">
        <h6 className="text-3xl  font-bold text-center text-black mb-12">
          Social Skills & Coding Levels
        </h6>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Level 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex-1 text-center transform transition duration-500 hover:scale-105 hover:shadow-indigo-400/50">
            <img
              src="/cod.jpg"
              alt="Beginner Level"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-indigo-600">Beginner</h3>
            <p className="text-gray-600">Basic coding principles, introductory projects, teamwork skills.</p>
          </div>

          {/* Level 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex-1 text-center transform transition duration-500 hover:scale-105 hover:shadow-indigo-400/50">
            <img
              src="/cod1.jpg"
              alt="Intermediate Level"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-indigo-600">Intermediate</h3>
            <p className="text-gray-600">Data structures, algorithms, collaborative coding, problem-solving.</p>
          </div>

          {/* Level 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex-1 text-center transform transition duration-500 hover:scale-105 hover:shadow-indigo-400/50">
            <img
              src="/cod2.jpg"
              alt="Advanced Level"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-indigo-600">Advanced</h3>
            <p className="text-gray-600">Full-stack projects, AI/ML integration, leadership in coding teams.</p>
          </div>
        </div>
      </div>




     {/* 8th code */}

      <div className="max-w-7xl mx-auto px-6 py-12  rounded-xl shadow-lg">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4  text-black">
            Why Choose <span className="text-amber-500">Project A</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg ">
            We combine innovative technology with creative solutions to deliver exceptional results.
          </p>
        </div>


        {/* Feature cards without animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
          {visibleFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={f.icon} className="text-lg text-amber-500" />

                <h4 className="text-lg font-bold">{f.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{f.description}</p>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
