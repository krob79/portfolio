import Header from '../Header/Header';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';
import LogoAnimation from '../LogoAnimation/LogoAnimation';



const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const logo = useRef();
  const { contextSafe } = useGSAP({scope: logo});

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // runLogoTransition();
    }, 4000);
  }, []);

  const runLogoTransition = contextSafe(() => {
    console.log("----RUNNING TRANSITION");
    gsap.to(logo.current,{x: 300});
  });


  return (
    <>
      <LogoAnimation />
      {isLoading ?  console.log("----still loading"): (
        <div>
          <CustomCursor />
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
