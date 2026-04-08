import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const HeroSection = () => {
  const { setInput } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = async () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-blue-500/40 bg-blue-500/10 rounded-full text-sm text-blue-500">
          <p>✨ New: AI-Powered Blogging Platform</p>
          <img src={assets.star_icon} className="w-2.5" alt="" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-7xl font-bold sm:leading-tight text-gray-900 mb-6">
          Share Your <span className="text-blue-600">Stories</span> with the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            World
          </span>
        </h1>

        {/* Subheading */}
        <p className="my-6 sm:my-10 max-w-3xl mx-auto text-base sm:text-xl text-gray-600 leading-relaxed">
          Welcome to ContentSparx - Your ultimate blogging platform where ideas come to life.
          Create, share, and connect with millions of readers. Write without limits, express freely,
          and build your personal brand today.
        </p>

        {/* Search Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex-justify-between max-w-2xl max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search blogs by title or category..."
            required
            className="w-full pl-6 py-3 outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 m-1.5 rounded-full hover:shadow-lg transition-all cursor-pointer font-medium"
          >
            Search
          </button>
        </form>

        {/* Clear Search */}
        <div className="text-center mt-4">
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer hover:bg-gray-50 transition"
          >
            Clear Search
          </button>
        </div>
      </div>

      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-10 opacity-50"
      />
    </div>
  );
};

export default HeroSection;
