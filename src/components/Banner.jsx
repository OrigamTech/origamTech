import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:items-end lg:gap-x-12">
          {/* text */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 text-center font-secondary lg:text-left"
          >
            <h1 className="font-sevillana font-extrabold text-[26px] leading-[0.8] lg:text-[30px] tracking-widest">
              ORIGAM <span>TECH</span>
            </h1>
            <div className="font-sevillana mb-6 text-[18px] lg:text-[28px] font-bold uppercase leading-[2] lg:leading-[1]">
              <span className="text-white mr-2 lg:mr-4">We are a team of</span>
              <TypeAnimation
                sequence={[
                  "FrontEnd Developers",
                  2000,
                  "BackEnd Developers",
                  2000,
                  "Designers",
                  2000,
                  "Data Scientists",
                  2000,
                ]}
                speed={60}
                deletionSpeed={90}
                className="text-indigo-500"
                wrapper="div"
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              vitae repellat ratione magni eius neque quidem corporis expedita
              obcaecati ex accusantium.
            </p>
            <div className="flex max-w-max gap-x-6 items-center lg:mx-0 mx-auto mb-12">
              <button className=" text-gradient btn-link border-purple-600 border rounded-full p-2 hover:border-accent text-lg mr-4">
                Contact us
              </button>
              <button className=" text-gradient btn-link border-purple-600 border rounded-full p-2 hover:border-accent text-lg">
                Our work
              </button>
            </div>
          </motion.div>

          {/* socials */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex gap-x-6 text-[20px] max-w-max mx-auto lg:mx-0 "
          >
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
            <a href="#">
              <FaTelegram />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="hidden  lg:flex max-w-[300px] lg:max-w-[382px] "
          >
            <img src={Image} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
