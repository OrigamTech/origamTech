import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-1 lg:bottom-1 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] lg:h-[80px] mb-3 backdrop-blur-md flex justify-evenly items-center rounded-full max-w-[380px] lg:max-w-[480px] mx-auto text-lg lg:text-2xl text-white">
          <Link
            to="home"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="about"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>

          <Link
            to="services"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={50}
          >
            <BsClipboardData />
          </Link>

          <Link
            to="work"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={50}
          >
            <BsBriefcase />
          </Link>

          <Link
            to="contact"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={50}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
