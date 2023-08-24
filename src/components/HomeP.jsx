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

const HomeP = () => {
  const token = localStorage.getItem(TOKEN);
  const role = localStorage.getItem(ROLE);
  const isAuthorized = token && role !== null;

  return (
    <div>
      {isAuthorized && role === "client" ? (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <ExperionceP/>
          <Resume/>
          <Projects />
          <Footer />
        </>
      ) : isAuthorized && role === "user" ? (
        <>
          <NavBar />
          <Banner />
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Banner />
        </>
      )}
    </div>
  );
};

export default HomeP;