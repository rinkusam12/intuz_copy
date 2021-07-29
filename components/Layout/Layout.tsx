// import gsap from 'gsap';
import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { Transition } from 'react-transition-group';
import Footer from "../Footer/Footer";
// import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PrivacyStrip from "../PrivacyStrip/PrivacyStrip";
import Processing from "../UI/Processing/Processing";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { Menuitem } from "./items";
import ProcessingProvider, { ProcessingContext } from "../../context/processingContext";
import { useContext } from "react";
import Header from "components/Navigation/Header/Header";



const Layout: React.FC<{ NoCllectChat?: boolean; background?:string; maven?:boolean; nunito?:boolean; whiteBackground?:boolean  }> = (props) => {
  

  let location = `https://www.intuz.com${useRouter().asPath}`;
  
  const { processing } = useContext(ProcessingContext)
  return (
    <ProcessingProvider>
      <Head>
        <link rel="canonical" href={location} />
        <meta name="og:url" content={location} />
      </Head>

      {processing && <Processing />}

      <Header />
      <main className={`${props.maven ? 'font-maven' : ''} ${props.nunito ? 'font-nunitosans' : ''}`} id="main">{props.children}</main>
      <Footer />

      <ScrollToTopButton />
      <style jsx>
        {`
          main {
            ${props.background ? `background-color: ${props.background}` : ""};
            ${props.maven ? "font-family: 'Maven Pro', sans-serif" : ""};
            ${props.nunito ? "font-family: 'Nunito Sans', sans-serif" : ""};
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            overflow-y: visible;
          }
        `}
      </style>
    </ProcessingProvider>
  );
};

export default Layout;
