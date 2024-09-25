import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Modeling from "/src/assets/download (3).jpeg";
import { useTheme } from "../context/theme/theme";
const About = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"bg-black":"bg-white"}`}>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <h1 className="uppercase text-center font-lobster font-bold text-2xl mb-4 dark:text-white">
          Who I Am
        </h1>
        <div className="w-4/5 md:w-2/3 lg:w-1/2 dark:bg-black">
          <p className="text-center text-gray-700 leading-relaxed dark:text-white">
            I am a 23-year-old technology enthusiast with a strong passion for
            coding and creative design. My love for programming drives me to
            build innovative projects, including games, apps, and websites. I
            have a well-rounded skill set that extends beyond coding, as I also
            enjoy 3D modeling, video editing, Photoshop, and sound design for
            games. These interests allow me to blend creativity with technical
            proficiency, which is something I truly enjoy. In my spare time, I’m
            an avid gamer and always stay up-to-date with the latest trends in
            gaming and technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
