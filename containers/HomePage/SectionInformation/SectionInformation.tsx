import React from "react";
import Container from "../../../components/Container/Container";
import classes from "./styles.module.scss";
const SectionInformation = () => {
  return (
    <section className={"py-32"}>
      <Container className={"text-center lg:text-left lg:flex justify-around items-center gap-24"}>
        <h2 className="text-[3.5rem] md:text-[4rem] leading-normal lg:text-right">
          Application Development <br />
          <span className="text-5xl md:text-7xl font-bold inline-block leading-normal whitespace-nowrap"> Partner You Can Trust </span>
          <div className="flex flex-wrap md:flex-nowrap leading-normal justify-center lg:justify-between text-left">
            <span className={`${classes.circle} before:hidden`}>Mobile</span>
            <span className={classes.circle}>Web</span>
            <span className={classes.circle}>IoT</span>
            <span className={classes.circle}>Blockchain</span>
            <span className={classes.circle}>Cloud</span>
          </div>
        </h2>
        <p className="text-[2.4rem] leading-normal text-black-6b mt-10 lg:mt-0">
          At Intuz we’re a mobile app development company that seeks to conquer
          the impossible with our well-rounded mobile app services. Our goal is
          to open new doors concerning the market for all of our clients. We’re
          the mobile app design company aimed to produce intelligible and
          stunning designs. Our mobile application developers are capable of
          developing the most complex applications, seamlessly. Consider us to
          be your app marketing agency for promising mobile solutions helping
          your business to grow at a faster pace.
        </p>
      </Container>
    </section>
  );
};

export default SectionInformation;
