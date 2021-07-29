import Router from "next/router";
import React from "react";
import Container from "../Container/Container";
import LinkButton from "../UI/LinkButton/LinkButton";

const addresses = [
  {
    country: "USA",
    address: `18 Bartol Street Suite #130,<br/>
        San Francisco CA 94133`,
  },
  {
    country: "USA",
    address: `2430 Camino Ramon,<br/>
        San Ramon CA 94583`,
  },
  {
    country: "India",
    address: `1006 Pinnacle, Corporate Road,<br/>
        Ahmedabad, GJ 380051`,
  },
];

const LetsTalkComp = () => {
  return (
    <section className={"py-24"} id="LetsTalk">
      <Container>
        <div className="text-center md:text-left md:flex justify-between pb-20 mb-20" style={{borderBottom:"1px solid #eaeaea"}}>
          <div>
            <h3 className="text-48 text-black-2f font-semibold leading-normal">Let&apos;s Talk</h3>
            <p className="text-[2.4rem] leading-normal">
              Let us know if there’s an opportunity for us to build something
              awesome together.
            </p>
          </div>
          <div className={`md:text-right mt-10`}>
            <LinkButton
              href="/get-started"
              onClick={() => Router.push("/get-started")}
              variation="purpleBtn"
            >
              Get Started
            </LinkButton>
          </div>
        </div>
        <div className={`flex flex-wrap gap-y-12 justify-between mt-24`}>
          {addresses.map((address, i) => {
            if (i == 1) {
              return (
                <address key={i}>
                  <h5 className="text-5xl leading-snug text-black-26 not-italic">{address.country}</h5>
                  <p className="not-italic text-18 leading-normal text-gray-500" dangerouslySetInnerHTML={{ __html: address.address }}></p>
                </address>
              );
            }

            return (
              <address key={i}>
                <h5 className="text-5xl leading-snug text-black-26 not-italic">{address.country}</h5>
                <p className="not-italic text-18 leading-normal text-gray-500" dangerouslySetInnerHTML={{ __html: address.address }}></p>
              </address>
            );
          })}

          <address>
            <h5 className="text-5xl leading-snug text-black-26 not-italic">Connect</h5>
            <p className="not-italic text-18 leading-normal text-gray-500">
              <a href="tel:+16504511499">+1 650.451.1499</a>
              <br />
              <a href="mailto:getstarted@intuz.com">getstarted@intuz.com</a>
            </p>
          </address>
        </div>
        {/* <SocialAddressLink/> */}
      </Container>
    </section>
  );
};

export default LetsTalkComp;
