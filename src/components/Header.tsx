import React from "react";
//logo
import Untitled from "../assets/untitled.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img src={Untitled} alt="logo" style={{width:"90px"}} />
        </a>
        <button className="text-gradient btn-link border-purple-600 border rounded-full p-2 hover:border-accent text-lg">Work with us</button>
      </div>
    </header>
  );
};

export default Header;
