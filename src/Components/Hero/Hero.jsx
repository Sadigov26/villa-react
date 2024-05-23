import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
        
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h2>Welcome to Villa resort</h2>
          <p>Discover our world-class hotel & restaurant resort.</p>
          <div className={styles.buttonHero}>
            <button  className={styles.buttonHeroOne}>Explore The Beauty</button>
            <button className={styles.buttonHeroTwo}>DOWNLOAD</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
