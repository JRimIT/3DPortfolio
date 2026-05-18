"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaUserSecret } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image"; // Import Image component
import dynamic from "next/dynamic";

const Bot3D = dynamic(() => import("./Bot3D"), { ssr: false });

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Add image to the right corner */}
          <div className="absolute top-[-130px] md:top-[-80px]">
            <Image
              src="/rim-avatar.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full shadow-lg object-cover"
            />
          </div>

          <div className="mt-20 md:mt-28 lg:mt-36">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-600 dark:text-blue-100 max-w-80 font-semibold">
              WELCOME TO MY PORTFOLIO
            </h2>
          </div>

          <TextGenerateEffect
            className="text-center text-[30px] md:text-3xl lg:text-4xl"
            words="Showcase skills, projects, and experiences to highlight expertise and creativity."
          />

          <div className="text-center md:tracking-wider mb-4 font-bold text-6xl md:text-lg lg:text-2xl">
            <span>
              Hello, I&apos;m{" "}
              <TypeAnimation
                sequence={[
                  "Duy Rim.",
                  1000,
                  "グエン・ズイ・リム.",
                  1000,
                  "WEB DEVELOPER.",
                  1000,
                  "FULLSTACK-FRONTEND DEVELOPER.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </div>
          {/* Add the 3D bot component here */}
          <Bot3D />
          <a href="#about">
            <MagicButton
              title="More about me"
              icon={<FaUserSecret />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
