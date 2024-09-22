import React from "react";

export const SideBar = () => {
  return (
    <ul className="fixed h-screen w-44 flex flex-col px-8 pb-16 gap-5 justify-center">
      <li className="cursor-pointer text-2xl">
        <a href="#about">About</a>
      </li>
      <li className="cursor-pointer text-2xl">
        <a href="#background">Background</a>
      </li>
      <li className="cursor-pointer text-2xl">
        <a href="#experience">Experience</a>
      </li>
      <li className="cursor-pointer text-2xl">
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
};
