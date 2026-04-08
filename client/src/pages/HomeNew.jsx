import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./home_HeroSection";
import FeaturedBlogs from "./home_FeaturedBlogs";
import FeaturesShowcase from "./home_FeaturesShowcase";
import BlogStatistics from "./home_BlogStatistics";
import CategoriesSection from "./home_CategoriesSection";
import LatestBlogs from "./home_LatestBlogs";
import TestimonialsSection from "./home_TestimonialsSection";
import CTASection from "./home_CTASection";
import ExtraContent from "./home_ExtraContent";
import Newsletter from "../components/Newsletter";

const HomeNew = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedBlogs />
      <FeaturesShowcase />
      <BlogStatistics />
      <CategoriesSection />
      <LatestBlogs />
      <ExtraContent />
      <TestimonialsSection />
      <CTASection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomeNew;
