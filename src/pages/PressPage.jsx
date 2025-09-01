// src/components/Press.jsx
import React from "react";
import { pressData } from "./press";
import PressCard from "./PressCard";


const Press = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📰 Latest Edutech News
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {pressData.map((news) => (
          <PressCard
            key={news.id}
            title={news.title}
            source={news.source}
            date={news.date}
            summary={news.summary}
            image={news.image}
            link={news.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Press;
