"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import got from "../../../../public/images/indo1.png";
import got2 from "../../../../public/images/indo2.png";
import got3 from "../../../../public/images/test.svg";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ig() {
  const [isMobileView, setIsMobileView] = useState(false);

  const offscreen = {
    x: -50,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  const offscreen2 = {
    x: 50,
    opacity: 0,
  };
  const onscreen2 = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  const offscreen3 = {
    y: 150,
    opacity: 0,
  };
  const onscreen3 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  return (
    <section
      className={`  items-end  w-full text-2xl pt-10 text-right sm:overflow-visible overflow-hidden  relative top-0 align-middle font-bold  ${work_sans.className} `}
    >
      <div className="flex w-full justify-between md:flex-row overflow-hidden  flex-row align-middle  sm:bg-center bg-bottom ">
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="relative left-0"
        >
          <Image
            src={got}
            alt="Igate"
            width="auto"
            height="auto"
            style={{
              transform: "rotate(0deg)",
              scale: "1",
            }}
          />
        </motion.div>

        <motion.div
          initial={offscreen3}
          whileInView={onscreen3}
          viewport={{ once: true, amount: 0.3 }}
          className="relative left-0 md:top-10 top-4"
        >
          <Image
            src={got3}
            alt="Igate"
            width="auto"
            height="100%"
            style={{
              transform: "rotate(0deg)",
              scale: "1",
            }}
          />
        </motion.div>
        {/* <div className=" relative  sm:flex hidden    right-0 md:flex-row  z-40 flex-col   align-middle justify-end  sm:bg-center bg-bottom ">
          <div className="md:mt-0 mt-5 w-full    ">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex items-center justify-center flex-col pt-20">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #00A4F1 0.41%, #00A4F1 34.07%, #9B75EC 64.85%, #9B75EC 96.58%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <time
                    className={`mt-7 text-8xl text-center leading-[90px] w-full max-md:text-4xl ${anton.className}
                `}
                    // create gradient text

                    dateTime="2024-11-15"
                  >
                    15
                    <sup
                      style={{
                        background:
                          "linear-gradient(90deg, #00A4F1 0.41%, #00A4F1 34.07%, #9B75EC 64.85%, #9B75EC 96.58%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      th
                    </sup>
                  </time>
                </div>
                <p className="mt-1 text-[#00A4F1] uppercase text-5xl text-left leading-[117%]  sm:mb-0 mb-4  font-bold">
                  NOV 2024
                </p>
              </div>

              <p
                className="mt-1 relative left-[40%] text-[#00A4F1] h-[60%] uppercase text-7xl text-left leading-[117%] sm:mb-0 mb-4 font-bold"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              >
                Indonesia
              </p>
            </div>
          </div>
        </div> */}
        <motion.div
          initial={offscreen2}
          whileInView={onscreen2}
          viewport={{ once: true, amount: 0.3 }}
          className="relative right-0"
        >
          <Image
            src={got2}
            alt="Igate"
            width="auto"
            height="auto"
            style={{
              transform: "rotate(0deg)",
              scale: "1",
            }}
          />
        </motion.div>
      </div>
      <div className="w-full bg-black ">
        <h1 className="leading-7 text-[#ccff00]  uppercase  text-center p-5   sm:text-4xl text-medium sm:mb-0 mb-4 max-md:max-w-full  font-bold">
          The D-day for Brands and Marketing Tech in{" "}
          <span className="md:block h-0 hidden">
            <br />
          </span>{" "}
          the World of Influencer Marketing is here!
        </h1>
      </div>
    </section>
  );
}

export default Ig;
