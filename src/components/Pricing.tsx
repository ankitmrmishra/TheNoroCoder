import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

const Pricing = () => {
  return (
    <div className="py-20 flex w-full justify-center align-middle items-center">
      <div
        className={` md:text-6xl text-4xl  font-semibold ${poppins.className} `}
      >
        FA<span className="text-mainColour">Qs</span>
      </div>
      {/* FAQs */}
      <div className=""></div>
    </div>
  );
};

export default Pricing;
