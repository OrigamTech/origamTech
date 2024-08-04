import React, { ReactElement, useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = (): ReactElement => {
  const [offsets, setOffsets] = useState({
    home: 50,
    about: 50,
    services: -100,
    work: 50,
    contact: 50,
  });

  const updateOffsets = () => {
    if (window.innerWidth >= 1024) {
      setOffsets({
        home: -130,
        about: 50,
        services: -30,
        work: 50,
        contact: 50,
      });
    } else {
      setOffsets({
        home: -130,
        about: 210,
        services: -30,
        work: 50,
        contact: 50,
      });
    }
  };

  useEffect(() => {
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

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
            offset={offsets.home}
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="about"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={offsets.about}
          >
            <BiUser />
          </Link>

          <Link
            to="services"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={offsets.services}
          >
            <BsClipboardData />
          </Link>

          <Link
            to="work"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={offsets.work}
          >
            <BsBriefcase />
          </Link>

          <Link
            to="contact"
            className="cursor-pointer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={offsets.contact}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
