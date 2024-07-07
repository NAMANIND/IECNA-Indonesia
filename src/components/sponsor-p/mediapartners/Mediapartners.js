"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import coin from "../../../../public/images/sponsors/coinpedia.png";
import ply from "../../../../public/images/sponsors/deriveply.png";
import gluf from "../../../../public/images/sponsors/gulf.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    // {
    //   name: "Gulf Moments",
    //   description:
    //     "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
    //   imageUrl:
    //     "https://cdn.builder.io/api/v1/image/assets/TEMP/2177b778065eb53456e9aae35c54027c06ae1da4769bc4ccee832d4b516451f3?apiKey=5e27b1defd60460eaa6dca842133145f&",
    //   logoUrl: gluf,
    // },
    {
      name: "Coin Pedia",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl: "/images/sponsors/coinpedia-og.jpg",
      logoUrl: coin,
    },
    {
      name: "Drive Ply",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: ply,
    },
  ];

  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  return (
    <div
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[150px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        MEDIA PARTNERS
      </motion.div>

      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] max-md:flex-col  max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-6 text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className=" font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <Image
                    loading="lazy"
                    src={sponsor.logoUrl}
                    className="mt-20 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          BECOME A PARTNER
        </Button>
      </div>
    </div>
  );
}

export default Mediapartners;
