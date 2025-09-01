
import React from "react";
import BlogCard from "./BlogCard";
import blogData from "./Blog";


const Blog = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Our Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
