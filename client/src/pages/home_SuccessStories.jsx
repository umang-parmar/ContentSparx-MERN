import React from "react";
import { motion } from "motion/react";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "From Zero to Hero in 6 Months",
      author: "Priya Sharma",
      excerpt: "I started with no readers and built an audience of 5,000+ followers by consistently posting about productivity and personal growth. ContentSparx made it easy!",
      highlight: "5,000+ Followers",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Building a Tech Community",
      author: "Marcus Johnson",
      excerpt: "Used ContentSparx to share my programming tutorials and landed speaking opportunities at major conferences. The platform changed my career!",
      highlight: "Speaker at 3 Conferences",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Monetizing My Passion",
      author: "Lisa Chen",
      excerpt: "Started as a hobby, grew to 10,000+ readers, and eventually attracted sponsorship deals. My ContentSparx journey became a full-time job!",
      highlight: "10,000+ Monthly Readers",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Finding My Voice",
      author: "David Kim",
      excerpt: "The supportive community on ContentSparx helped me find my voice as a writer. Now I'm writing a book deal based on my most popular series!",
      highlight: "Book Deal Signed",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Business Growth Through Content",
      author: "Emma Wilson",
      excerpt: "Used my blog to establish authority in my niche and attracted 200+ new clients for my consulting business. Best investment of my time!",
      highlight: "200+ New Clients",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Global Audience Connection",
      author: "Ahmed Hassan",
      excerpt: "Started writing about my small business journey and now have readers from 50+ countries. The global platform made all the difference!",
      highlight: "50+ Countries Reached",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-orange-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real writers. Real results. See how ContentSparx changed the lives of creators like you
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Card */}
              <div className="bg-white border border-gray-200 hover:border-orange-300 h-full">
                {/* Color Header Bar */}
                <div className={`h-2 bg-gradient-to-r ${story.color}`} />

                {/* Content */}
                <div className="p-8">
                  {/* Highlight Badge */}
                  <div className={`inline-block bg-gradient-to-r ${story.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                    {story.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h3>

                  {/* Author */}
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    by <span className="text-orange-600">{story.author}</span>
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "{story.excerpt}"
                  </p>

                  {/* Read More Link */}
                  <a href="#" className="text-orange-600 font-semibold group-hover:text-orange-700 inline-flex items-center gap-2 transition">
                    Read Full Story →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspiration Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-50 to-red-50 p-12 rounded-xl border border-orange-300 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🌟 Your Success Story Starts Here
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Every successful writer on ContentSparx started exactly where you are.
            Whether you want to build an audience, establish authority, launch a business, or just share your passion—
            we have the tools and community to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300">
              See More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
