import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ConfirmedImage from "/assets/images/confirmed.jpg";
import { useTheme } from '../context/theme/theme';

const Confirmed = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6">
        <div className="max-w-lg text-center">
          <img src={ConfirmedImage} alt="Confirmation" className="mx-auto w-32 h-32 mb-6" />
          <h1 className="text-3xl font-extrabold mb-4">Submission Confirmed</h1>
          <p className="text-lg mb-2">Thank you for your submission!</p>
          <p className="text-md text-gray-400 dark:text-gray-300 mb-6">
            We will review your request and contact you shortly.
          </p>
          <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all">
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmed;