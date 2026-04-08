import React from "react";
import { motion } from "motion/react";

const WritingTipsSection = () => {
  const tips = [
    {
      title: "Write Compelling Titles",
      description: "Your title is the first thing readers see. Make it clear, interesting, and keyword-rich to attract more readers.",
      tips: ["Be specific and clear", "Use power words", "Keep it under 60 characters"]
    },
    {
      title: "Craft Engaging Introductions",
      description: "Hook your readers in the first few sentences. Pose a question, share a surprising fact, or tell a brief story.",
      tips: ["Start with a hook", "State your main idea", "Promise value to reader"]
    },
    {
      title: "Use Subheadings Effectively",
      description: "Break up your content with clear subheadings. They help readers scan and improve SEO performance.",
      tips: ["One per 200-300 words", "Use keywords naturally", "Make them descriptive"]
    },
    {
      title: "Include Relevant Examples",
      description: "Concrete examples make abstract concepts easier to understand and remember for your audience.",
      tips: ["Use real-world cases", "Be specific and detailed", "Relate to your audience"]
    },
    {
      title: "Write a Strong Conclusion",
      description: "End your blog with a clear takeaway. Summarize key points and include a call-to-action.",
      tips: ["Recap main points", "Add final insight", "Include CTA"]
    },
    {
      title: "Edit and Proofread",
      description: "Always review your work before publishing. Check for grammar, clarity, and flow.",
      tips: ["Read aloud", "Use grammar tools", "Get feedback"]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Essential <span className="text-green-600">Writing</span> Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of blogging with these proven strategies used by successful writers on ContentSparx
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 h-full">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {tip.description}
                </p>

                {/* Tips List */}
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-xl text-center"
        >
          <h3 className="text-3xl font-bold mb-3">🚀 Ready to Write?</h3>
          <p className="text-green-50 text-lg mb-6 max-w-2xl mx-auto">
            Apply these tips to your next blog post and watch your readership grow. Our community supports and celebrates quality content.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WritingTipsSection;
