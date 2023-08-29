import React from "react";
import { TOKEN } from "../const";
import { ROLE } from "../utils";
import { Banner } from "./Banner";
import ExperionceP from "./ExperionceP";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import { Projects } from "./Projects";
import Resume from "./Resume";
import {Skills}  from "./Skills";
import Testemonials from "./Testemonials";

const HomeP = () => {
  const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";

  return (
    <div>
      {isAuthorized? (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <ExperionceP/>
          <Resume/>
          <Projects />
          <Testemonials/>
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeP;