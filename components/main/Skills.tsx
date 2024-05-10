"use client";

import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import React, { useEffect, useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const newOffsetY = window.pageYOffset;
    setOffsetY(newOffsetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Defining scroll positions for opacity changes
  const maxScrollStart = 100; // Start fade in
  const maxScrollEnd = 600; // Fully visible
  const fadeOutStart = 600; // Start fade out
  const fadeOutEnd = 1100; // Completely faded out

  const scrollRange = maxScrollEnd - maxScrollStart;
  const fadeOutRange = fadeOutEnd - fadeOutStart;

  let opacity = 1; // Default opacity
  if (offsetY < maxScrollStart) {
    opacity = 0;
  } else if (offsetY >= maxScrollStart && offsetY <= maxScrollEnd) {
    opacity = (offsetY - maxScrollStart) / scrollRange;
  } else if (offsetY > fadeOutStart && offsetY <= fadeOutEnd) {
    opacity = 1 - (offsetY - fadeOutStart) / fadeOutRange;
  } else if (offsetY > fadeOutEnd) {
    opacity = 0;
  }

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-25"
      style={{ opacity: opacity }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
