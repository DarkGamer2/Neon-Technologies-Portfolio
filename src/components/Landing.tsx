import HTML from "/assets/images/html5-icon-13.jpg";
import CSS from "/assets/images/css3-icon-28.jpg";
import JS from "/assets/images/javascript-icon-png-23.jpg";
import reactIcon from "/assets/images/react.png";
import Node from "/assets/images/node.png";
import Express from "/assets/images/express.png";
import Mongo from "/assets/images/Mongodb-PNG-Image-HD.png"
import Tailwind from "/assets/images/tailwind.png";
import { useTheme } from "../context/theme/theme";

const Landing = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen w-full flex flex-col`}>
      <section className="flex-grow dark:bg-black flex flex-col justify-center items-center text-center py-12 px-6">
        <h1 className="font-outfit text-3xl font-bold tracking-wider my-3 dark:text-white">
          FULL STACK SOFTWARE DEVELOPER AND UI DESIGNER
        </h1>
        <p className="font-spaceGrotesk text-lg font-medium dark:text-white max-w-2xl">
          Hi, my name is Kameer Hosein and I am a full stack developer as well as a UI/UX Designer based in Trinidad & Tobago.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-4 w-full max-w-lg mt-8">
          {[HTML, CSS, JS, reactIcon, Node, Express, Tailwind, Mongo].map((icon, index) => (
            <div key={index} className="flex justify-center">
              <img className="w-20 h-20 object-contain" src={icon} alt="tech stack" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
