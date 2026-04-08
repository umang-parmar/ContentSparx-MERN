import React from "react";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const FeaturedBlogs = () => {
  const { blogs = [] } = useAppContext();
  
  // Get top 3 most recent blogs
  const featured = blogs.slice(0, 3);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most impactful stories from our community writers
          </p>
        </div>

        {/* Featured Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={blog.img ? `http://localhost:3000${blog.img}` : "https://via.placeholder.com/400x300"}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.subTitle}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <a
                    href={`/blog/${blog._id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#all-blogs"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
