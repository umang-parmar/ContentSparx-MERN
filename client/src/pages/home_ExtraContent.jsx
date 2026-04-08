import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ============== HOW IT WORKS SECTION ==============
const HowItWorks = () => {
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with ContentSparx is simple and straightforward. Follow these four easy steps to begin your blogging journey
          </p>
        </div>

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
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

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

// ============== BENEFITS SECTION ==============
const Benefits = () => {
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Writers <span className="text-blue-600">Love</span> ContentSparx
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the benefits that make ContentSparx the perfect platform for content creators
          </p>
        </div>

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
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">{benefit.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

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

// ============== WRITING TIPS SECTION ==============
const WritingTips = () => {
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Essential <span className="text-green-600">Writing</span> Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of blogging with these proven strategies used by successful writers on ContentSparx
          </p>
        </div>

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
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{tip.description}</p>
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

// ============== SUCCESS STORIES SECTION ==============
const SuccessStories = () => {
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-orange-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real writers. Real results. See how ContentSparx changed the lives of creators like you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-white border border-gray-200 hover:border-orange-300 h-full">
                <div className={`h-2 bg-gradient-to-r ${story.color}`} />
                <div className="p-8">
                  <div className={`inline-block bg-gradient-to-r ${story.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                    {story.highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    by <span className="text-orange-600">{story.author}</span>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "{story.excerpt}"
                  </p>
                  <a href="#" className="text-orange-600 font-semibold group-hover:text-orange-700 inline-flex items-center gap-2 transition">
                    Read Full Story →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
        </motion.div>
      </div>
    </div>
  );
};

// ============== CREATOR SHOWCASE SECTION ==============
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Meet Our Top <span className="text-pink-600">Creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover inspiring writers who are building their audiences and sharing amazing content on ContentSparx
          </p>
        </div>

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
                <div className="h-20 bg-gradient-to-r from-pink-400 to-purple-500" />
                <div className="relative px-6 pb-6 pt-0 text-center -mt-10">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{creator.name}</h3>
                  <p className="text-sm font-semibold text-pink-600 mb-2">{creator.specialty}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{creator.bio}</p>
                  <div className="flex justify-around items-center py-4 border-y border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{creator.posts}</div>
                      <p className="text-xs text-gray-600">Posts</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{creator.followers}</div>
                      <p className="text-xs text-gray-600">Followers</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
        </motion.div>
      </div>
    </div>
  );
};

// ============== FAQ SECTION ==============
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is ContentSparx really free to use?",
      answer: "Yes! ContentSparx is completely free to sign up and use. You can create unlimited blogs, publish them, and access all basic features at no cost. We may introduce premium features in the future, but core blogging will always be free."
    },
    {
      question: "Can I edit my blog after publishing?",
      answer: "Absolutely! You can edit your blog at any time after publishing. Go to your blog list, click the blue Edit button, make your changes, and click Update Blog. Your changes will be saved immediately and visible to readers."
    },
    {
      question: "How do I increase my blog readership?",
      answer: "Write consistently, use clear and compelling titles, optimize your content with relevant keywords, engage with the community by reading others' blogs, and share your content on social media. Our analytics help you understand what works best."
    },
    {
      question: "What happens if I delete a blog?",
      answer: "When you delete a blog, it will be permanently removed from your account and no longer visible to readers. The delete action is final, so make sure you want to remove the blog before confirming."
    },
    {
      question: "Can I change my blog category after publishing?",
      answer: "Yes! You can edit your blog anytime and change the category, title, subtitle, description, or image. Just click the Edit button on your blog and update any field you want to change."
    },
    {
      question: "Is there a limit to blog post length?",
      answer: "No, there's no limit! Write as much as you want. Whether it's a quick 100-word thought or a 5000-word comprehensive guide, ContentSparx supports content of any length."
    },
    {
      question: "Can other users comment on my blogs?",
      answer: "ContentSparx focuses on quality content discovery. Currently, the platform helps readers find great blogs through categories and search. Comments feature is planned for future updates."
    },
    {
      question: "How do I get featured on the homepage?",
      answer: "The best way to get featured is to write high-quality, engaging content consistently. Our featured section showcases recent blogs that resonate with our community. Focus on quality and consistency!"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ContentSparx and how to get the most out of our platform
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-600 text-2xl flex-shrink-0"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <p className="px-8 py-6 text-gray-600 leading-relaxed bg-gradient-to-b from-purple-50 to-white">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-purple-50 p-12 rounded-xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 text-lg mb-6">
            Can't find the answer you're looking for? We'd love to hear from you.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 hover:shadow-lg">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// ============== MAIN EXPORT: ALL SECTIONS COMBINED ==============
const ExtraContent = () => {
  return (
    <>
      <HowItWorks />
      <Benefits />
      <WritingTips />
      <SuccessStories />
      <CreatorShowcase />
      <FAQ />
    </>
  );
};

export default ExtraContent;
