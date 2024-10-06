import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:min-h-screen  relative z-0 bg-[#090808] bg-hero pb-8 overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-center w-full h-full flex-col ">
        <Image
          src="/main-logo.png"
          alt="logo"
          width={578}
          height={318}
          className=""
        />
        <h2 className="text-[#ED8FDD] font-poppins text-[22px] mb-[58px] ">
          THE FIRST DEX ON CROMIA
        </h2>

        <div className="flex gap-[50px] md:flex-row flex-col ">
          <div className="flex flex-col ">
            <h3 className="font-oswald text-[#7D7D7D] mb-[22px] text-[28px] text-center uppercase">
              Try now
            </h3>
            <button className="hover:scale-105 transform transition-all duration-300 rounded-[10px] bg-[#91A2FA] font-poppins text-lg py-[17px] px-[25px] text-white">
              Check out The app
            </button>
          </div>
          <div className="flex flex-col ">
            <h3 className="font-oswald text-[#7D7D7D] mb-[22px] text-[28px] text-center uppercase">
              Try now
            </h3>
            <button className="hover:scale-105 transform transition-all duration-300 rounded-[10px] bg-[#91A2FA] font-poppins text-lg py-[17px] px-[25px] text-white">
              Check out The app
            </button>
          </div>
        </div>
      </div>

      <Image
        src="/hero-glow.png"
        alt="bg"
        width={490.2}
        height={488}
        className="absolute opacity-60 -left-[30%] bottom-0 -z-[1]"
      />
      <Image
        src="/hero-glow.png"
        alt="bg"
        width={490.2}
        height={488}
        className="absolute rotate-180 opacity-40 -right-[40%] top-0 -z-[1]"
      />
    </div>
  );
};

export default Hero;
