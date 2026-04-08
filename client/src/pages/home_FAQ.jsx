import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQSection = () => {
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ContentSparx and how to get the most out of our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Question Button */}
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

              {/* Answer */}
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

        {/* Still have questions */}
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

export default FAQSection;
