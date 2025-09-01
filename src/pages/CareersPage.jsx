import React, { useState } from "react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer (React.js)",
      location: "Remote / Bengaluru, India",
      type: "Full-time",
      description:
        "You will be responsible for building modern, scalable, and responsive user interfaces for our EdTech platform. Experience in React, Tailwind CSS, and API integration is required.",
      responsibilities: [
        "Build reusable components and front-end libraries",
        "Translate designs into high-quality code",
        "Optimize components for maximum performance"
      ],
      requirements: [
        "2+ years experience in React.js",
        "Strong knowledge of HTML, CSS, JavaScript",
        "Experience with REST APIs"
      ],
    },
    {
      id: 2,
      title: "Python Full Stack Developer",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Develop and maintain backend services and APIs to support our growing platform. Work closely with the frontend team to deliver end-to-end solutions.",
      responsibilities: [
        "Design and implement scalable APIs",
        "Database design and management",
        "Deploy applications on cloud services"
      ],
      requirements: [
        "3+ years experience with Django/Flask",
        "Knowledge of PostgreSQL/MySQL",
        "Familiarity with AWS or similar cloud platforms"
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      description:
        "Create user-centered designs to enhance learning experiences. Collaborate with developers and product managers to bring concepts to life.",
      responsibilities: [
        "Design wireframes, mockups, and prototypes",
        "Conduct user research and usability testing",
        "Maintain brand consistency across products"
      ],
      requirements: [
        "Portfolio of design projects",
        "Proficiency with Figma/Adobe XD",
        "Strong communication skills"
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Careers at Project A</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join our mission to make education accessible and innovative for
          learners everywhere. We are looking for passionate people to shape the
          future of EdTech.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">🚀 Growth</h3>
            <p className="text-gray-600">
              Learn and grow with continuous training, mentorship, and career
              development programs.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">🌎 Impact</h3>
            <p className="text-gray-600">
              Work on real-world projects that impact thousands of students and
              educators globally.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">🤝 Culture</h3>
            <p className="text-gray-600">
              Join a team that values collaboration, diversity, and innovation
              in every step.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">
          Open Positions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-500 text-sm mb-4">{job.type}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Popup */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
            <p className="text-gray-600 mb-2">
              📍 {selectedJob.location} | {selectedJob.type}
            </p>
            <p className="text-gray-700 mb-6">{selectedJob.description}</p>

            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {selectedJob.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {selectedJob.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-indigo-50 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Didn’t find a role?
        </h2>
        <p className="text-gray-600 mb-6">
          We’re always looking for passionate people. Send us your resume!
        </p>
        <a
          href="mailto:careers@projecta.com"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
        >
          Send Resume
        </a>
      </div>
    </div>
  );
};

export default Careers;
