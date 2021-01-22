import React from "react";
import style from "./hero.module.css";

const Hero = ({ children, subtext }) => {
  const renderSubText = () => {
    if (subtext) {
      return <span className={style.subtext}>{subtext}</span>;
    }
  };

  return (
    <div className={style.hero}>
      <h1>{children}</h1>
      {renderSubText()}
    </div>
  );
};

export default Hero;
