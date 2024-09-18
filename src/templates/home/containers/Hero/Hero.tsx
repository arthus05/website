import { useEffect, useState } from "react";

import {  } from "react-icons/fa"

import styles from "./styles.module.css";

const Hero = () => {
  const [nameIdx, setNameIdx] = useState(0);
  const myName = 'Arthus Vinicius';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNameIdx((prev) => {
        if (prev === myName.length) {
          return prev;
        }

        return prev + 1;
      });
    }, 150);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //👋 

  return (
    <section
      className="
        h-[calc(100vh-4rem)]
        text-3xl font-extralight"
    >
      <section
        className="
          h-full w-4/5 m-auto
          flex flex-col justify-evenly
          "
      >
        <div className="flex flex-col gap-6">
          <span className="text-5xl">👋</span>
          <h1 className="text-4xl flex flex-nowrap gap-2 w-fit">
            Hello! I&apos;m{" "}
            <span className="">
              <strong className="tracking-[.075em] flex animate-caret border-r-2 overflow-hidden whitespace-nowrap text-brand-accent text-[#04D9D9]">
                {myName.slice(0, nameIdx)}
              </strong>
              {/* <span */}
              {/*   className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-[var(--background-color)] w-full animate-type will-change`} */}
              {/* ></span> */}
            </span>
          </h1>
        </div>
        <p className="flex flex-col">
          <span>👨🏾‍💻</span>I am a brazilian Software Engineer, passionate about coding and creating new things.
          Currently at the eternal path of self improvement, loving every step of it.
        </p>
        <p className="text-2xl flex flex-col">
          Contact me! 📬
          <a
            href="mailto:arthusvinicius.dev@gmail.com"
            className={`
              ${styles.mail}
              relative
              w-fit font-bold text-xl`}
          >
            arthusvinicius.dev@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
};

export default Hero;
