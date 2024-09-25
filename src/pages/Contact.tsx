import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import { useTheme } from "../context/theme/theme";
const Contact = ({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"dark":"light"}`}>
      <NavigationBar />
      <ContactForm setIsSubmitted={setIsSubmitted}/>
      <Footer />
    </div>
  );
};

export default Contact;
