import React from "react";
import { motion } from "motion/react";

const BlogStatistics = () => {
  const stats = [
    {
      label: "Connect & Grow",
      description: "Build your audience with quality content",
      icon: "🚀"
    },
    {
      label: "Express Yourself",
      description: "Share your thoughts and stories freely",
      icon: "✨"
    },
    {
      label: "Track Progress",
      description: "Monitor your content performance",
      icon: "📈"
    },
    {
      label: "Community Support",
      description: "Join writers like you from around the world",
      icon: "👥"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ContentSparx <span className="text-blue-400">Platform</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to create, share, and grow your blogging presence
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-lg text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-blue-100 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Information Box */}
        <div className="mt-16 p-8 bg-white/10 backdrop-blur rounded-lg border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">💡 Why ContentSparx?</h3>
          <p className="text-gray-200 leading-relaxed">
            ContentSparx is designed for writers who want complete creative freedom. 
            Write unlimited blogs, express yourself authentically, and connect with readers worldwide. 
            Our powerful editor, AI assistance, and supportive community make it the perfect platform 
            to launch your blogging journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogStatistics;
