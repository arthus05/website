import { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import styles from "./styles.module.css";

const myName = "Arthus Vinicius";

const Hero = () => {
  const [nameIdx, setNameIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNameIdx(myName.length);
      return;
    }

    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setNameIdx(index);

      if (index === myName.length) {
        window.clearInterval(intervalId);
      }
    }, 150);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="intro" className="hero" aria-labelledby="intro-title">
      <div className={styles.greeting}>
        <span className={styles.wave} aria-hidden="true">👋</span>
        <h1 id="intro-title">
          <span>Hello! I&apos;m</span>{" "}
          <span className={styles.name}>
            <span className={styles.nameSizer} aria-hidden="true">{myName}</span>
            <strong className={styles.typedName} aria-hidden="true">{myName.slice(0, nameIdx)}</strong>
            <span className="sr-only">{myName}</span>
            <noscript><strong className={styles.staticName} aria-hidden="true">{myName}</strong></noscript>
          </span>
        </h1>
      </div>
      <p className={styles.introduction}>
        <span className={styles.developer} aria-hidden="true">👨🏾‍💻</span>
        I am a brazilian Software Engineer, passionate about coding and creating new things.
        Currently at the eternal path of self improvement, loving <s>and hating</s> every step of it.
      </p>
      <a className="text-link primary-link hero-work-link" href="#projects">
        Explore my work <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
