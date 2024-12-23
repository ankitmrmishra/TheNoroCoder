import React from "react";
import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className="h-20   w-full  flex justify-between align-middle items-center px-16 py-20">
      {/* This is Navbar 
    //  A logo
    // About Me, Projects, Testimonials, Faq
    // Get In toch
    */}

      <div className="Logo flex justify-center align-middle items-center ">
        <Ghost className="text-mainColour size-10" />{" "}
        <span className="text-2xl font-firacode">Ankit Mishra</span>
      </div>
      <div className="middle_part flex justify-between align-middle items-center gap-10 rounded-full border-mainColour border px-16   py-3">
        <div className="">About Me</div>
        <div className="">Projects</div>
        <div className="">Testimonials</div>
        <div className="">FAQs</div>
      </div>
      <div className="Get_in_touch">
        <Button
          variant={"outline"}
          className="border-mainColour rounded-full p-8 text-lg text-mainColour bg-transparent hover:bg-mainColour hover:text-white"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
