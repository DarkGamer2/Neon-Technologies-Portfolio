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
          <div>
            <h3>Websites</h3>
          </div>
          <div>
            <h3>Mobile Apps</h3>
          </div>
          <div>
            <h3>Logos</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
