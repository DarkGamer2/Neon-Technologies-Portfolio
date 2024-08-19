import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import WebDev from "../../public/assets/software_development.jpg";
import LogoDesign from "../../public/assets/adobe_photoahop.jpg";
const Services = () => {
  return (
    <div>
      <NavigationBar />
      <section>
        <div>
          <h1 className="text-center text-2xl font-bold uppercase text-blue-600">
            Services we offer
          </h1>
        </div>
        <div className="px-4 py-4 rounded-md">
          <div className="">
            <h3 className="text-center">Websites</h3>
            <div className="flex">
              <div>
                <img src={WebDev}/>
              </div>
              <div>
                <p>
                  Full Stack websites to bring your business to life in today's
                  world of technology while being user friendly and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center">Mobile Apps</h3>
            <div className="flex">
              <div></div>
              <div>
                <p>
                  Mobile apps to bring your business to life in today's world of
                  technology while being user friends and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center">Logos</h3>
            <div className="flex">
              <div>
                <img src={LogoDesign}/>
              </div>
              <div>
                <p>
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
  );
};

export default Services;
