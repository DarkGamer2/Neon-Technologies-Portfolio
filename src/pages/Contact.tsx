import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import { useTheme } from "../context/theme/theme";
const Contact = ({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"dark":"light"} min-h-screen flex flex-col`}>
      <NavigationBar />
     <div className="flex-grow dark:bg-black">
     <ContactForm setIsSubmitted={setIsSubmitted}/>
     </div>
      <Footer />
    </div>
  );
};

export default Contact;
