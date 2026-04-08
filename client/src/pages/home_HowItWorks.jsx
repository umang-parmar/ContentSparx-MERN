import React from "react";
import { motion } from "motion/react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in seconds and join our community of passionate writers",
      icon: "📝"
    },
    {
      number: "02",
      title: "Write Your Story",
      description: "Use our powerful editor with AI suggestions and formatting options",
      icon: "✍️"
    },
    {
      number: "03",
      title: "Organize & Publish",
      description: "Add categories, tags, and publish to reach your audience",
      icon: "📤"
    },
    {
      number: "04",
      title: "Track & Grow",
      description: "Monitor analytics and watch your readership grow over time",
      icon: "📈"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with ContentSparx is simple and straightforward. Follow these four easy steps to begin your blogging journey
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mt-12"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-3">💡 Pro Tip</h3>
          <p className="text-blue-800 text-lg leading-relaxed">
            Most successful writers on ContentSparx publish consistently and engage with the community.
            Start with one article and build from there. Our AI tools will help improve your writing quality with every post.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
