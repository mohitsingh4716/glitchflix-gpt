import React from "react";

const VideoTitle = ({ title, overview }) => {
  // console.log(overview.length)
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-24 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg text-justify w-1/4">{overview.length>200? overview.slice(0,200)+"...":overview}</p>

      <div className="my-2 md:m-0">
        <button className="bg-white text-black text-sm md:text-xl p-2 md:p-4 md:mx-2 px-3 py-1 md:px-12 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-black text-xl p-4 mx-2 px-8 rounded-lg bg-opacity-50">
          ⌽ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
