import React from "react";
import LinkButton from "../UI/LinkButton/LinkButton";
import classes from "./styles.module.module.scss";

const HeroCarousel = () => {
  return (
    <div className={`${classes.HeroCarousel}`}>
      <h4>We are a custom</h4>
      <h1>
        <span
          className={`${classes.webmobile}`}
        >
          Mobile, Web & IoT
        </span>
        <br />
        <span className={`${classes.appdevlopment}`}>
          Application Development
        </span>
        <br />
        <span className={`${classes.company}`}>Company</span>
        <br />
      </h1>
      <br />
      <br />
      <LinkButton variation="whiteBorder" href="/get-started">
        Get Started
      </LinkButton>
    </div>
  );
};

export default HeroCarousel;
