import React from "react";
import PillNav from "../Navbar";
import Hyperspeed from "./Hyperspeed";
import { GlobeDemo } from "../Globedemo";

const Custombg = () => {
  return (
    <div className="relative h-screen w-full bg-gray-400 flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Hyperspeed animated background */}
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 100,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0xc1c1c1,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />

      {/* Navbar */}
      <div className="nav absolute top-7 right-7.5 z-50 flex items-center justify-end bg-[#077A7D] h-15 w-[39%] pr-3">
        <PillNav />
      </div>

      {/* Top section with Globe */}
      <div className=" first absolute top-7 w-[97%] h-[60%] bg-gray-900 rounded-xl  overflow-hidden">
        {/* Left: 3D Globe */}
        <div className="  absolute left-0 w-1/3 h-[95%] flex items-center justify-center">
          <div className="relative h-full w-full scale-[0.9]">
            <GlobeDemo />
          </div>
        </div>

        {/* Right: Placeholder (Text / Model / Character later) */}
        <div className="absolute right-0 w-1/2 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Welcome to the Future</h1>
            <p className="text-white/80 text-xl">Explore the interactive globe</p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="second absolute top-[58%] w-[97%] h-[40%] bg-cyan-800 rounded-xl"></div>
    </div>
  );
};

export default Custombg;
