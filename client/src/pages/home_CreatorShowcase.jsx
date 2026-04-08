import React from "react";
import { motion } from "motion/react";

const CreatorShowcase = () => {
  const creators = [
    {
      name: "Alex Chen",
      specialty: "Tech Writer",
      posts: 45,
      followers: "2.3K",
      bio: "Writing about AI, web development, and digital trends",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      name: "Maya Patel",
      specialty: "Lifestyle Blogger",
      posts: 32,
      followers: "1.8K",
      bio: "Sharing travel stories and wellness tips",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya"
    },
    {
      name: "James Wilson",
      specialty: "Business Coach",
      posts: 58,
      followers: "3.1K",
      bio: "Helping entrepreneurs build successful startups",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      name: "Sofia Rodriguez",
      specialty: "Creative Writer",
      posts: 67,
      followers: "2.9K",
      bio: "Fiction, poetry, and storytelling at its finest",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Meet Our Top <span className="text-pink-600">Creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover inspiring writers who are building their audiences and sharing amazing content on ContentSparx
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-300">
                {/* Header Background */}
                <div className="h-20 bg-gradient-to-r from-pink-400 to-purple-500" />

                {/* Avatar */}
                <div className="relative px-6 pb-6 pt-0 text-center -mt-10">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Name & Specialty */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {creator.name}
                  </h3>
                  <p className="text-sm font-semibold text-pink-600 mb-2">
                    {creator.specialty}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {creator.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-around items-center py-4 border-y border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">
                        {creator.posts}
                      </div>
                      <p className="text-xs text-gray-600">Posts</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">
                        {creator.followers}
                      </div>
                      <p className="text-xs text-gray-600">Followers</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotlight Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 p-12 rounded-xl border border-pink-300 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-3">👑 Creator Spotlight</h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            These are just a few of our amazing creators. Every month, we spotlight different writers and their unique perspectives.
            You could be featured next! Keep writing great content and engaging with the community.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 hover:shadow-lg">
            Explore All Creators
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreatorShowcase;
