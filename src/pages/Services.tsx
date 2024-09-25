import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import WebDev from "../../public/assets/software_development.jpg";
import LogoDesign from "../../public/assets/adobe_photoahop.jpg";
import { useTheme } from "../context/theme/theme";
const Services = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"bg-black":"bg-white"}`}>
      <div className="dark:bg-black">
      <NavigationBar />
      <section className="">
        <div>
          <h1 className="text-center text-2xl font-bold text-blue-600 font-lobster">
            Services we offer
          </h1>
        </div>
        <div className="px-4 py-4 rounded-md">
          <div className="">
            <h3 className="text-center font-outfit dark:text-blue-600">Websites</h3>
            <div className="flex">
              <div className="h-24 w-20">
                <img src={WebDev} className="rounded-md"/>
              </div>
              <div>
                <p className="font-spaceGrotesk dark:text-white">
                  Full Stack websites to bring your business to life in today's
                  world of technology while being user friendly and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center font-outfit">Mobile Apps</h3>
            <div className="flex">
              <div></div>
              <div>
                <p className="font-spaceGrotesk mx-2 dark:text-white">
                  Mobile apps to bring your business to life in today's world of
                  technology while being user friends and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center font-outfit">Logos</h3>
            <div className="flex">
              <div className="h-24 w-20">
                <img src={LogoDesign} className="rounded-md"/>
              </div>
              <div>
                <p className="font-spaceGrotesk mx-2">
                  Logos to bring your business to life in today's world of
                  technology while being user friends and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
};

export default Services;
