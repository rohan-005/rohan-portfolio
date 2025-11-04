import React from "react";
import PillNav from "../Navbar";
import Hyperspeed from "./Hyperspeed";
import { FaGithub, FaLinkedin, FaInstagram, FaUnity } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Custombg = () => {
  return (
    <div className="m-0 p-0 relative h-screen w-full bg-black flex items-center justify-center ">
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
            roadColor: 0x080808,
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
      <div className="pr-3 nav flex items-center justify-end bg-[#077A7D] h-15 w-[39%] absolute top-7 right-7.5">
        <PillNav/>
      </div>

      <div className="first w-[97%] h-[60%] bg-[#8FABD4] absolute top-7"></div>
      <div className="second w-[97%] h-[40%] bg-blue-400 absolute top-[58%]"></div>
    </div>
  );
};

export default Custombg;
