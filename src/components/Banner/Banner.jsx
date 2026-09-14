import React from "react";

const Banner = ({ title, bgimage }) => {
  return (
    <div
      className="h-[50vh] mt-24 flex justify-center items-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="bg-white/90 px-8 py-4 rounded-2xl shadow-lg z-10">
        <h2 className="text-5xl font-bold text-zinc-800">
          {title}
        </h2>
        <div className="bg-black/50 absolute inset-0"></div>
      </div>
    </div>
  );
};

export default Banner;