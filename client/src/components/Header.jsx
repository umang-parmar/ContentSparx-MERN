import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-blue-500/40 bg-blue-500/10 rounded-full text-sm text-blue-500">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          {" "}
          Your own{" "}
          <span className="text-blue-700 border-e-black">blogging</span>{" "}
          <br></br> platform.
        </h1>
      </div>
      <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500 ">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </p>

      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-10 opacity-50"
      />
    </div>
  );
};

export default Header;
