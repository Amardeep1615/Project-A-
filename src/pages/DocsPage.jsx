
import React, { useState } from "react";

const Documentation = () => {
  // Sample docs data
  const docsData = [
  // Getting Started
  {
    id: 1,
    category: "Getting Started",
    title: "How to Sign Up",
    content: "Click on the 'Sign Up' button at the top right, fill out your details, and confirm your email to get started.",
  },
  {
    id: 2,
    category: "Getting Started",
    title: "Navigating the Dashboard",
    content: "Your dashboard displays enrolled courses, progress, upcoming deadlines, and quick links to resources.",
  },
  {
    id: 3,
    category: "Getting Started",
    title: "Profile Setup",
    content: "Complete your profile with skills, education, and a profile picture to personalize your experience.",
  },

  // Courses
  {
    id: 4,
    category: "Courses",
    title: "Enrolling in a Course",
    content: "Go to the 'Courses' page, select your course, and click 'Enroll Now'. Some courses may require payment.",
  },
  {
    id: 5,
    category: "Courses",
    title: "Course Progress Tracking",
    content: "Progress bars and completion percentages show how far you are in each module.",
  },
  {
    id: 6,
    category: "Courses",
    title: "Assignments & Quizzes",
    content: "Assignments can be submitted via the course portal. Quizzes must be completed before deadlines.",
  },

  // Payments
  {
    id: 7,
    category: "Payments",
    title: "Payment Methods",
    content: "We support credit/debit cards, UPI, PayPal, and net banking.",
  },
  {
    id: 8,
    category: "Payments",
    title: "Refund Policy",
    content: "Refunds are available within 7 days of enrollment if less than 10% of the course is completed.",
  },
  {
    id: 9,
    category: "Payments",
    title: "Invoices",
    content: "Invoices can be downloaded from your 'Payment History' section in your profile.",
  },

  // Technical Support
  {
    id: 10,
    category: "Technical Support",
    title: "Forgot Password",
    content: "Click 'Forgot Password' on the login screen and follow the instructions to reset your password.",
  },
  {
    id: 11,
    category: "Technical Support",
    title: "Mobile App Issues",
    content: "Ensure your app is updated. If issues persist, clear cache or reinstall the app.",
  },
  {
    id: 12,
    category: "Technical Support",
    title: "Video Playback Errors",
    content: "Check your internet speed. Switch between 480p, 720p, or 1080p if buffering occurs.",
  },

  // Account Management
  {
    id: 13,
    category: "Account Management",
    title: "Updating Email",
    content: "Go to 'Account Settings' → 'Email' and verify the new email address.",
  },
  {
    id: 14,
    category: "Account Management",
    title: "Delete Account",
    content: "Submit a request in 'Privacy Settings'. Deletion is permanent and cannot be reversed.",
  },
  {
    id: 15,
    category: "Account Management",
    title: "Notification Settings",
    content: "Customize email and push notifications in the 'Settings' panel.",
  },

  // Certifications
  {
    id: 16,
    category: "Certifications",
    title: "Download Certificates",
    content: "Certificates are available after completing 100% of a course and passing the final test.",
  },
  {
    id: 17,
    category: "Certifications",
    title: "Verification of Certificates",
    content: "Employers can verify certificates using a unique QR code or verification ID.",
  },
  {
    id: 18,
    category: "Certifications",
    title: "Lifetime Access",
    content: "Certificates remain valid for a lifetime and can be re-downloaded anytime.",
  },
];


  // Extract unique categories
  const categories = [...new Set(docsData.map((doc) => doc.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter docs by active category
  const activeDocs = docsData.filter((doc) => doc.category === activeCategory);

  return (
    <section className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="bg-gray-100 p-4 w-64 border-r hidden md:block">
        <h3 className="text-lg font-bold mb-4">📂 Categories</h3>
        <ul className="space-y-3">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <button
                type="button"
                className={`w-full text-left cursor-pointer font-medium ${
                  activeCategory === cat
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Docs Content */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-6">📖 Documentation</h2>
        {activeDocs.length > 0 ? (
          activeDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white shadow-md rounded-lg p-5 mb-6 border-l-4 border-indigo-600"
            >
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600">{doc.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Select a category to view documentation.</p>
        )}
      </div>
    </section>
  );
};

export default Documentation;
