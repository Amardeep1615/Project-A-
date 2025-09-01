// src/components/PressCard.jsx
import React from "react";

const PressCard = ({ title, source, date, summary, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">
          {source} | {date}
        </p>
        <p className="text-gray-700 mb-3">{summary}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default PressCard;
