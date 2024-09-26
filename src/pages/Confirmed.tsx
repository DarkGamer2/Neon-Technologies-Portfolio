import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ConfirmedImage from "../assets/images/confirmed.png";
import { useTheme } from '../context/theme/theme';
const Confirmed = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme==="dark"?"dark":"light"}`}>
      <NavigationBar/>
      <div className='dark:bg-black'>
        <div className='w-full'>
          <img src={ConfirmedImage} alt="Logo Design" className='mx-auto'/>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Confirmed</h1>
        </div>
        <h1 className='dark:text-white text-center'>Thank you for your submission!</h1>
        <p className='dark:text-white text-center'>We will review your project and contact you shortly.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Confirmed;