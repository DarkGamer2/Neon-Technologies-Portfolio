import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useTheme } from "../context/theme/theme";
interface navProps {
  NavLink: React.ElementType;
}
const NavigationBar = () => {
  const [navbaropen, setNavBarOpen] = useState<boolean>(false);


  const {theme,toggleTheme}=useTheme();
  return (
    <div className={`w-full shadow ${theme==="dark"?"dark":"light"}`}>
      <nav className="dark:bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* <img
              src={Logo}
              alt="logo"
              className="w-12 h-12 items-center justify-center"
            /> */}
              <h2 className="text-blue-600 font-lobster dark:text-indigo-600">
                Neon Technologies 
              </h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavBarOpen(!navbaropen)}
                >
                  {navbaropen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbaropen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-blue-600 font-lobster tracking-wider dark:text-indigo-600">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-blue-600 font-lobster tracking-wider dark:text-indigo-600">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="text-blue-600 font-lobster tracking-wider dark:text-indigo-600">
                <NavLink to={"/projects"}>Projects</NavLink>
              </li>
              <li className="text-blue-600 font-lobster tracking-wider dark:text-indigo-600">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li className="text-blue-600 font-lobster tracking-wider dark:text-indigo-600">
                <NavLink to={"/services"}>Services</NavLink>
              </li>
            </ul>
            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <button
                onClick={toggleTheme}
                className="inline-block px-4 py-2 text-center rounded-md shadow hover:bg-gray-800 dark:text-white"
              >
                <DarkModeIcon />
              </button>
              <NavLink
                to={"/signin"}
                className="inline-block px-4 py-2 text-center rounded-md shadow hover:bg-gray-800 dark:text-white"
              >
                <GitHubIcon />
              </NavLink>
              <NavLink
                to={"/signin"}
                className="inline-block px-4 py-2 text-center text-blue-600 rounded-md shadow hover:bg-gray-800"
              >
                <LinkedInIcon />
              </NavLink>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-md shadow hover:bg-gray-600 dark:text-white"
            >
              <DarkModeIcon />
            </button>
            <NavLink
              to="https://github.com/DarkGamer2"
              className="px-4 py-2 rounded-md shadow hover:bg-gray-600 dark:text-white"
            >
              <GitHubIcon />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/kameer-hosein-a22a0022b/"
              className="px-4 py-2 text-blue-600 rounded-md shadow hover:bg-gray-600"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
