import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Modeling from "/src/assets/download (3).jpeg";
const About = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1 className="uppercase text-center font-lobster font-bold text-2xl">
          Who I Am
        </h1>
        <div>
          <p className="text-center">
            I am a full stack developer that is currently 22 years old. I have a
            passion for software development and technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
