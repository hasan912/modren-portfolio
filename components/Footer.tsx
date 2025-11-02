import { FaLocationArrow } from "react-icons/fa6";
import React from "react";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-6 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 h-48 md:h-72">
        <Image
        width={1920}
        height={1080}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:hasanbaig365@gmail.com" target="_blank" >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-8 md:mt-12 md:flex-row flex-col gap-4 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Muhammad Hasan Baig | All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank">
                <Image  src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
