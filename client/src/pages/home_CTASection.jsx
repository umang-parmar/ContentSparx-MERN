import React from "react";
import { motion } from "motion/react";

const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-48 -mb-48" />

      <div className="mx-8 sm:mx-16 xl:mx-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join ContentSparx today and start building your audience. It takes just minutes to set up,
            and you'll have access to all our powerful tools and a supportive community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admin/login"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              Get Started Now
            </a>
            <a
              href="#all-blogs"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              Explore Blogs
            </a>
          </div>

          {/* Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-white">
              <div className="text-3xl mb-2">✨</div>
              <p className="font-semibold">Free to Start</p>
              <p className="text-sm text-blue-100 mt-1">No credit card required</p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Instant Setup</p>
              <p className="text-sm text-blue-100 mt-1">Start writing in minutes</p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🚀</div>
              <p className="font-semibold">Grow Fast</p>
              <p className="text-sm text-blue-100 mt-1">Build your audience quickly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
