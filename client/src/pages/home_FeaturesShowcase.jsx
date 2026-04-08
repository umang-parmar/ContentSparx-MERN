import React from "react";
import { motion } from "motion/react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: "🖊️",
      title: "Easy to Use Editor",
      description: "Powerful Quill editor with formatting options, AI suggestions, and real-time preview"
    },
    {
      icon: "📤",
      title: "Instant Sharing",
      description: "Share your blogs across social media platforms with one click"
    },
    {
      icon: "📈",
      title: "Analytics Dashboard",
      description: "Track your blog performance with detailed analytics and reader insights"
    },
    {
      icon: "👥",
      title: "Community Driven",
      description: "Connect with thousands of writers and build your audience"
    },
    {
      icon: "🏆",
      title: "Recognition Program",
      description: "Get featured and earn badges for your outstanding content"
    },
    {
      icon: "📚",
      title: "Multiple Categories",
      description: "Organize your content across various categories and tags"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">ContentSparx</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to create, manage, and grow your blogging presence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
