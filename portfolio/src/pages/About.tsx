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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            quia sed soluta omnis quos molestias voluptatem! Cumque aut
            voluptatum nostrum, odio in impedit quisquam eligendi maxime,
            consequuntur eum, repudiandae eius.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
