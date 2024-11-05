import { Link } from 'react-router-dom';
import './Header.scss';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`st-site-header st-sticky-header st-style1 ${isScrolled ? 'st-sticky-active' : ''}`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <Link className="st-site-branding" to='/' id="hero"><img src="/images/logo.png" alt="Davis" /></Link>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li><ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
                  <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                  <li><ScrollLink to="resume" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Resume</ScrollLink></li>
                  <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="blog" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Blog</ScrollLink></li>
                  <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `} onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="sp-phone">
                  <svg viewBox="0 0 513.64 513.64">
                    <path className='krSVG' d="M 195.12897,342.53691 V 223.79559 l -61.72675,-44.76665 61.65915,-50.24593 0.13908,-118.9124572 -142.302461,0.04486 0.24785,106.9117572 c -0.11589,0.0489 0.271217,0.019 47.359731,-35.665035 l 0.19696,-23.560972 h 47.66824 l -0.11321,47.181707 c -0.0403,0.0361 -94.711191,71.39668 -94.711191,71.39668 l 94.617921,71.56558 -0.0942,95.02 -47.82259,-0.15634 0.2138,-71.24989 c 0,0 -0.0242,0.25609 -47.356206,-35.4104 l -0.13927,106.75068 H 5.5610413 L 5.4217713,9.8619078"/>
                  </svg>
                  <div className="sp-phone-no">+1 971 234 1508</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header;
