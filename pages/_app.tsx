import PrivacyStrip from "components/PrivacyStrip/PrivacyStrip";
import BurgerProvider from 'context/burgerContext';
import React, { useEffect, useMemo, useState } from "react";
import 'tailwindcss/tailwind.css';
// import "../sass/utilities.css";
import Cookies from 'universal-cookie';
import "../sass/main.scss";



const MyApp = ({ Component, pageProps }) => {
  
  const cookies =  useMemo(()=> new Cookies(), []);
  const [cookie, setCookie] = useState(false)

  useEffect(() => {
    // collectChat(window, document)
    let privacy = cookies.get('acceptprivacy') as boolean;
    setCookie(privacy);
  }, [cookies])

  // function collectChat(w, d) {    
  //   w.CollectId = "5b7285c57254ec18beb0cd90";
  //   var h = d.head || d.getElementsByTagName("head")[0];
  //   var element = d.getElementById("chatLunchar");
  //   element && element.parentNode.removeChild(element);
  //   var s = d.createElement("script");
  //   s.setAttribute("type", "text/javascript");
  //   s.setAttribute("src", "https://collectcdn.com/launcher.js");
  //   s.setAttribute("id", "chatLunchar");
  //   h.appendChild(s);
  // }
  const setPrivacy = () => {
    let currDate = new Date()
    cookies.set('acceptprivacy', true, { expires: new Date(currDate.getFullYear() + 1, currDate.getMonth(), currDate.getDate()) })
    setCookie(true)
  }
  return (
    <BurgerProvider>
      <Component {...pageProps} />
      {!cookie && <PrivacyStrip onAccept={setPrivacy} />}
    </BurgerProvider>
  )
}

export default MyApp
