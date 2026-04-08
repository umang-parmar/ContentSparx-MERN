import React from "react";
import { motion } from "motion/react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "ContentSparx has transformed the way I share my stories. The editor is intuitive and powerful, and the community is incredibly supportive!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Writer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      text: "Finally, a blogging platform that gets it right. The AI suggestions have improved my writing quality significantly. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Tech Enthusiast",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      text: "The analytics dashboard is amazing! I can track exactly how my audience is engaging with my content. Worth every second spent writing.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Business Blogger",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      text: "ContentSparx helped me build my personal brand. The platform's tools and community support made all the difference in my journey.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-8 sm:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Writers</span> Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied writers who have found success on ContentSparx
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-700 font-semibold">Active Writers</p>
          </div>
          <div className="p-8 bg-green-50 rounded-lg border border-green-200 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <p className="text-gray-700 font-semibold">Monthly Readers</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-lg border border-purple-200 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <p className="text-gray-700 font-semibold">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
