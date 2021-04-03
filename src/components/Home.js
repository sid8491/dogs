import React from "react";
import OurServices from "../home_components/OurServices";
import Blurb from "../home_components/Blurb";
import About from "../home_components/About";
import Gallery from "../home_components/Gallery";
import Team from "../home_components/Team";
import Subscribe from "../home_components/Subscribe";
import Adopt from "../home_components/Adopt";
import Contact from "../home_components/Contact";

function Home() {
  return (
    <div>
      {/* {/* <!-- ==== Page Content ====  --> */} */}
      <OurServices />
      <Blurb />
      <About />
      <Gallery />
      <Team />
      <Subscribe />
      <Adopt />
      <Contact />
    </div>
  );
}

export default Home;
