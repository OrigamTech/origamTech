import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { Motion } from "framer-motion";
//variants
import { fadeIn } from "../variant";

//services data



const Services = () => {
  return (
    <div id="services" className="section">
      <div className="container mx-auto">
        <div>
          {/* text & image */}
          <div className="flex-1 lg:bg-portfolio2 lg:bg-bottom bg-no-repeat mix-blend-lighten lg:h-[750px] lg:rounded-2xl">
            <h2 className="h2 text-indigo-500 mb-6">What We Do.</h2>
            <h3 className="h3 mx-w-[455px] mb-6">We are a team of skilled and experienced developers from all around the world.</h3>
            <button type="button" className="text-gradient btn-link border-purple-600 border rounded-full p-2 hover:border-accent text-lg">See our work</button>
          </div>
          {/* services */}
          <div ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
