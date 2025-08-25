import React from 'react';
import {
  Html,
  Css,
  Javascript,
  // React icon (using default MUI icon as there's no specific React icon)
  Code,
  // Node.js (using computer/server icon)
  Computer,
  // Express (using web icon)
  Web,
  // MongoDB (using database icon)
  Storage,
  // Tailwind (using palette icon)
  Palette
} from '@mui/icons-material';
import { useTheme } from "../context/theme/theme";

interface TechIcon {
  Icon: React.ElementType;
  color: string;
  name: string;
}

const Landing = () => {
  const { theme } = useTheme();
  
  const techIcons: TechIcon[] = [
    { Icon: Html, color: "#E34F26", name: "HTML5" },
    { Icon: Css, color: "#1572B6", name: "CSS3" },
    { Icon: Javascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: Code, color: "#61DAFB", name: "React" },
    { Icon: Computer, color: "#339933", name: "Node.js" },
    { Icon: Web, color: "#000000", name: "Express" },
    { Icon: Storage, color: "#47A248", name: "MongoDB" },
    { Icon: Palette, color: "#06B6D4", name: "Tailwind CSS" },
  ];

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
        <div className="grid grid-cols-4 gap-6 w-full max-w-lg mt-8">
          {techIcons.map(({ Icon, color, }, index) => (
            <div key={index} className="flex justify-center">
              <Icon
                className="w-20 h-20 transition-transform hover:scale-110"
                style={{ 
                  color,
                  fontSize: '5rem' // MUI icons use fontSize instead of className for sizing
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;