import React from "react";
//CountUp
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="section mb-[55vh] mt-[-30px]" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-untitled bg-cover bg-no-repeat h-[470px] mix-blend-multiply mx-auto bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 mt-3"
          >
            <h2 className="h2 text-indigo-500 font-playball">About us</h2>
            <h3 className="h3 mb-4">
              We are a team of Developers with over 5 years o f experience in
              the Tech industry
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              fugit impedit cumque, sint delectus quae voluptate tempora placeat
              est dolorum illo excepturi porro non maiores quisquam doloribus?
              Fugiat, blanditiis atque.
            </p>

            {/* stats */}
            <div className="flex gap-x-14 lg:gap-x-48">
              <div className="">
                <div className="text-[40px] font-playball text-indigo-500 mb-2">
                  {inView ? <CountUp start={0} end={4} duration={5} /> : null}
                </div>
                <div className="font-playball text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-playball text-indigo-500 mb-2">
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null}+
                </div>
                <div className="font-playball text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-playball text-indigo-500 mb-2">
                  {inView ? <CountUp start={0} end={19} duration={5} /> : null}+
                </div>
                <div className="font-playball text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="mt-6 px-8 text-gradient btn-link border-purple-600 border rounded-full p-2 hover:border-accent text-lg"
              >
                {" "}
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
