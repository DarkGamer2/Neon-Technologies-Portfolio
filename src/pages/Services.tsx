import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Services = () => {
  return (
    <div>
      <NavigationBar />
      <section>
        <div>
          <h1 className="text-center text-2xl font-bold uppercase">
            Services we offer
          </h1>
        </div>
        <div className="">
          <div className="">
            <h3>Websites</h3>
            <div className="flex">
              <div></div>
              <div>
                <p>
                  Full Stack websites to bring your business to life in today's
                  world of technology while being user friends and aesthetically
                  pleasing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Mobile Apps</h3>
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
            <h3>Logos</h3>
            <div className="flex">
              <div></div>
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
