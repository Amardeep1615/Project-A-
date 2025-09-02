import React, { useState } from "react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "How do I sign up?",
    answer:
      "Click on the Sign Up button in the top-right corner and fill out the registration form with your details.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the Login page and click on 'Forgot Password'. You will receive a reset link in your registered email.",
  },
  {
    question: "How do I access my courses?",
    answer:
      "After logging in, go to the 'My Courses' section in the navigation bar. All your enrolled courses will appear there.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to our support team via the Contact page or email us at support@projecta.com.",
  },
  {
    question: "Can I get a refund for a course?",
    answer:
      "Yes, refunds are available within 14 days of purchase for courses that you have not completed. Visit our Refund Policy page for more details.",
  },
  {
    question: "How can I download course materials?",
    answer:
      "Some courses allow downloadable resources. Open the course page and check the 'Resources' or 'Materials' section.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes! Once you complete a course, a certificate will be automatically generated and available in your 'My Courses' dashboard.",
  },
  {
    question: "Can I access courses offline?",
    answer:
      "Currently, offline access is available for mobile apps. You can download videos for offline viewing within the app.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Go to your account settings and click on 'Edit Profile' to update your personal information, email, or password.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, Project A has a mobile app available on both Android and iOS for learning on the go.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Help Center
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">
              {faq.question}
            </h3>
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}

      <p className="text-center mt-6 text-gray-500 text-sm">
        Still need help? Contact{" "}
        <a href="/contact" className="text-blue-600 hover:underline">
          our support team
        </a>
        .
      </p>
    </div>
  );
};

export default Help;
