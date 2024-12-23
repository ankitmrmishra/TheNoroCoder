import React from "react";
import { Ghost } from "lucide-react";
const Navbar = () => {
  return (
    <div className="h-20 shadow-2xl fixed w-full">
      {/* This is Navbar 
    //  A logo
    // About Me, Projects, Testimonials, Faq
    // Get In toch
    */}

      <div className="Logo flex justify-center align-middle items-center">
        <Ghost className="text-mainColour" />{" "}
        <span className="text-2xl font-raleaway500">Ankit Mishra</span>
      </div>
      <div className="middle_part"></div>
      <div className="Get_in_touch"></div>
    </div>
  );
};

export default Navbar;
