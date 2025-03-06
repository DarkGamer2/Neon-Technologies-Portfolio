import NavigationBar from "../components/NavigationBar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { useTheme } from "../context/theme/theme";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen flex flex-col ${theme==="dark"?"dark":"light"}`}>
      <NavigationBar />
      <div className="flex-grow">
        <Landing />
      </div>
      <Footer />
    </div>
  );
};

export default Home;