// import PortfolioImage from "../assets/images/IMG_7083 transparent.png";
import HTML from "../../public/assets/images/html5-icon-13.jpg";
import CSS from "../../public/assets/images/css3-icon-28.jpg";
import JS from "../../public/assets/images/javascript-icon-png-23.jpg";
import reactIcon from "../../public/assets/images/React-icon.svg.png";
import Node from "../../public/assets/images/png-clipart-nodejs.png"
import Express from "../../public/assets/images/png-transparent-express.png";
import Mongo from "../../public/assets/images/png-transparent-mongodb.png";
import Tailwind from "../../public/assets/images/images.png";
import { useTheme } from "../context/theme/theme";
const Landing = () => {
  const { theme } = useTheme();
  return (
    <section className={`flex ${theme==="dark"?"dark":"light"}`}>

    <section className="dark:bg-black">
      <div>
        <h1 className="font-outfit mx-10 font-bold tracking-wider my-3 py-4 dark:text-white">
          FULL STACK SOFTWARE DEVELOPER AND UI DESIGNER
        </h1>
        <div>
          <p className="font-spaceGrotesk font-medium mx-10 dark:text-white">
            Hi, my name is Kameer Hosein and I am a full stack developer as well
            as a UI/UX Designer based in Trinidad & Tobago.
          </p>
        </div>
        <section className="content-start h-56 grid grid-cols-4 px-0 w-60 mx-10 dark:bg-black">
          <div>
            <img
            className="w-20 h-15 mx-2 my-3"
            src={HTML}
            alt="vanilla web stack"
            />
            </div>
            <div>
            <img
            className="w-20 h-15  mx-2 my-3"
            src={CSS}
            alt="vanilla web stack"
            />
            </div>
            <div>
            <img
            className="w-20 h-15  mx-2 my-3"
            src={JS}
            alt="vanilla web stack"
            />
            </div> 
           <div>
            <img className=" mx-2 my-3" src={reactIcon} alt="react" />
            </div>
            <div>
            <img className=" mx-2 my-3" src={Node} alt="node" />
            </div>
            <div>
            <img className=" mx-2 my-3" src={Express} alt="express" />
            </div>
            <div>
            <img className=" mx-2 my-3" src={Tailwind} alt="tailwind css" />
            </div>
            <div>
            <img className=" mx-2 my-3" src={Mongo} alt="MongoDB" />
            </div>
        </section>
      </div>

      {/* <div className="float-right ">
        <img className="" src={PortfolioImage} alt="portfolio" />
        </div> */}
    </section>
        </section>
  );
};

export default Landing;
