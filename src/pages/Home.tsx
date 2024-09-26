
import NavigationBar from "../components/NavigationBar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { useTheme } from "../context/theme/theme";
const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"bg-black":"bg-white"}`}>
      <NavigationBar />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
