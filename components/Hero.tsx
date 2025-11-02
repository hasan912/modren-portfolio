import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="Home" className="relative min-h-[90vh] pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="hidden md:block">
        <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-[50vh] md:h-screen"
          fill="white"
        />
        <Spotlight
          className="hidden md:block h-[50vh] md:h-[80vh] w-[30vw] md:w-[50vw] top-10 right-0"
          fill="purple"
        />
        <Spotlight 
          className="hidden lg:block left-1/2 top-28 h-[50vh] md:h-[80vh] w-[30vw] md:w-[50vw]" 
          fill="blue" 
        />
      </div>

      <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex min-h-[60vh] items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[85vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center space-y-6">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-center text-blue-100">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          />

          <p className="text-center tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            Hi! I&apos;m Muhammad Hasan Baig, a Next.js Developer based in Pakistan.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
