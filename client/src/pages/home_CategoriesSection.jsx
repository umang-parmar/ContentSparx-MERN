import React from "react";
import { motion } from "motion/react";
import { blogCategories } from "../assets/assets";

const CategoriesSection = () => {
  // Use static categories without counting blogs
  const categories = blogCategories.map((category, index) => ({
    name: category,
    color: [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
      "from-red-500 to-red-600",
      "from-yellow-500 to-yellow-600",
      "from-pink-500 to-pink-600",
      "from-indigo-500 to-indigo-600",
      "from-cyan-500 to-cyan-600"
    ][index % 8]
  }));

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore <span className="text-blue-600">Topics</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find content across diverse categories that matter to you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${category.color} p-8 rounded-lg text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full flex flex-col justify-center items-center text-center`}
              >
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <div className="mt-4 h-1 w-12 bg-white/30 rounded-full group-hover:w-16 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Info */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 Our Categories</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            ContentSparx offers diverse blog categories covering everything from technology and business 
            to lifestyle and creative writing. Whatever your interests, you'll find quality content written 
            by passionate creators sharing their expertise and experiences.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-blue-900 font-semibold">💡 Tip:</p>
            <p className="text-blue-800">Browse through different categories to discover new perspectives and expand your knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
