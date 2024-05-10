"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Utilisons des plages de défilement similaires à Skills pour une cohérence
  const fadeInStart = 1100; // Commencer à apparaitre (similaire à Skills maxScrollEnd)
  const fadeInEnd = 1400; // Fin d'apparition complète
  const fadeOutStart = 800; // Commencer à disparaître (similaire à Skills fadeOutStart)
  const fadeOutEnd = 600; // Fin complète de disparition

  const fadeInRange = fadeInEnd - fadeInStart;
  const fadeOutRange = fadeOutEnd - fadeOutStart;

  let opacity = 0; // Définissons l'opacité initiale à 0
  if (offsetY < fadeInStart) {
    opacity = 0;
  } else if (offsetY >= fadeInStart && offsetY < fadeInEnd) {
    opacity = (offsetY - fadeInStart) / fadeInRange;
  } else if (offsetY >= fadeInEnd && offsetY < fadeOutStart) {
    opacity = 1;
  } else if (offsetY >= fadeOutStart && offsetY < fadeOutEnd) {
    opacity = 1 - (offsetY - fadeOutStart) / fadeOutRange;
  } else {
    opacity = 1;
  }

  return (
    <div
      className="flex flex-col h-full w-full items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/spotify.png"
          title="Spotify"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ opacity: opacity }}
          url="https://spotify.ismadev.net/"
        />
        <ProjectCard
          src="/review.png"
          title="Review"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ opacity: opacity }}
          url="https://front-faille.lionelkg.com/movies"
        />
        <ProjectCard
          src="/airbnb.png"
          title="Airbnb"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ opacity: opacity }}
          url="https://portfolio.lionelkg.com/movies"
        />
      </div>
    </div>
  );
};

export default Projects;
