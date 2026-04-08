import React from "react";
import { motion } from "motion/react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Build Your Audience",
      subtitle: "Growing Community",
      description: "Connect with readers who share your interests and build a loyal following for your content"
    },
    {
      icon: "📊",
      title: "Track Performance",
      subtitle: "Real Analytics",
      description: "Monitor your blog's performance with detailed analytics showing views, engagement, and reader insights"
    },
    {
      icon: "🤖",
      title: "AI-Powered Writing",
      subtitle: "Smart Suggestions",
      description: "Get AI assistance to improve your writing, generate ideas, and enhance your content quality"
    },
    {
      icon: "🎨",
      title: "Express Yourself",
      subtitle: "Creative Freedom",
      description: "Write without limits on a platform designed for authentic self-expression and storytelling"
    },
    {
      icon: "🔐",
      title: "Your Content Secured",
      subtitle: "Safe & Secure",
      description: "Your blogs are safely stored and protected. You have full control over what you publish"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      subtitle: "Always Available",
      description: "Lightning-fast loading, high uptime, and a platform built to handle your growing audience"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      subtitle: "World Audience",
      description: "Share your thoughts with readers from around the world across different time zones"
    },
    {
      icon: "🎁",
      title: "Forever Free",
      subtitle: "No Hidden Costs",
      description: "Create, publish, and grow your presence without paying. No subscriptions or surprise fees"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Writers <span className="text-blue-600">Love</span> ContentSparx
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the benefits that make ContentSparx the perfect platform for content creators
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-blue-400 h-full hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {benefit.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-blue-600 mb-3">
                  {benefit.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 p-12 rounded-xl border border-blue-300 mt-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ContentSparx vs Others
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-400">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">ContentSparx</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-600">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free Forever", sparx: "✅", other: "❌" },
                  { feature: "AI Writing Assistant", sparx: "✅", other: "❌" },
                  { feature: "Unlimited Blogs", sparx: "✅", other: "Limited" },
                  { feature: "Analytics Dashboard", sparx: "✅", other: "✅" },
                  { feature: "Easy to Use", sparx: "✅", other: "⚠️" },
                  { feature: "Community Support", sparx: "✅", other: "⚠️" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-blue-200 hover:bg-white/50 transition">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-xl font-bold text-blue-600">{row.sparx}</td>
                    <td className="py-4 px-6 text-center text-xl font-bold text-gray-600">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;
