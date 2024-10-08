import React, {FC} from 'react'
import {Videotitle} from '../../utils/TypeScrptProps';
const VideoTitle: FC<Videotitle> = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video px-12 absolute pt-[15%] text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4  px-12 text-xl  rounded-lg hover:bg-opacity-30">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle