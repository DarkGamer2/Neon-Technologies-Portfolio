import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import WebDev from "/assets/images/software_development.jpg";
import LogoDesign from "/assets/images/adobe_photoahop.jpg";
import MoblieDevelopment from "/assets/images/mobile_development.jpg";
import { useTheme } from "../context/theme/theme";

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <div className="dark:bg-black flex-grow flex flex-col">
        <NavigationBar />
        
        <section className="flex-grow container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-bold text-blue-600 dark:text-white font-lobster mb-6">
            Services We Offer
          </h1>
          
          <div className="space-y-8">
            {/* Website Development Service */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
              <img src={WebDev} alt="Web Development" className="h-32 w-32 rounded-md object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-center md:text-left text-blue-600 dark:text-white font-outfit">
                  Websites
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-spaceGrotesk">
                  Full-stack websites to bring your business to life with user-friendly and aesthetically pleasing designs.
                </p>
              </div>
            </div>

            {/* Mobile App Development Service */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
              <div className="h-32 w-32 flex items-center justify-center bg-blue-200 dark:bg-gray-700 rounded-md">
              <img src={MoblieDevelopment} alt="Web Development" className="h-32 w-32 rounded-md object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-center md:text-left text-blue-600 dark:text-white font-outfit">
                  Mobile Apps
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-spaceGrotesk">
                  Mobile applications designed for modern users, ensuring functionality and elegant UI/UX.
                </p>
              </div>
            </div>

            {/* Logo Design Service */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
              <img src={LogoDesign} alt="Logo Design" className="h-32 w-32 rounded-md object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-center md:text-left text-blue-600 dark:text-white font-outfit">
                  Logo Design
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-spaceGrotesk">
                  Unique and creative logos that reflect your brand identity with a professional touch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;