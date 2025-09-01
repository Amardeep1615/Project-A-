
import React from "react";

const BlogCard = ({ title, author, date, excerpt, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">
          By {author} | {date}
        </p>
        <p className="text-gray-700">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
