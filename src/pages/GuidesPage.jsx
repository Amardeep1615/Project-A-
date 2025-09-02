import React from "react";
import guideData from "./Guide";


const Guides = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Learning Guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guideData.map((guide) => (
          <div
            key={guide.id}
            className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Category: {guide.category}
            </p>

            {/* Steps */}
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 mb-4">
              {guide.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            {/* Resources */}
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800 mb-2">
                Resources:
              </p>
              <ul className="space-y-1">
                {guide.resources.map((res, index) => (
                  <li key={index}>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {res.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guides;
