import Header from '../Header/Header';
import { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';
import LogoAnimation from '../LogoAnimation/LogoAnimation';



const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 4000);
    setIsLoading(false);
  }, []);


  return (
    <>
      {/* <LogoAnimation /> */}
      {isLoading ?  console.log("----still loading"): (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )
      }
    </>
  )
}
export default Layout;
