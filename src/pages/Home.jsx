import data from '../Data.json';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Skill from '../components/Skill/Skill';
import Resume from '../components/Resume/ResumeSection';
import BlogSection from '../components/Blog/BlogSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import Hero from '../components/Hero/Hero';

const Home = () => {
  const { coreData, heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData } = data;
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Contact coreData={coreData} data={contactData} socialData={socialData} data-aos="fade-right" />
      <Hero coreData={coreData} data={heroData.homeOneHero} socialData={socialData} />
      <About coreData={coreData} data={aboutData} data-aos="fade-right" />
      {/* <Iconbox data={serviceData} data-aos="fade-right" /> */}
      <Skill data={skillData} data-aos="fade-right" />
      <Resume coreData={coreData} data={resumeData} />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      {/* <BlogSection data={blogData} data-aos="fade-right" /> */}
      
    </>
  )
}

export default Home;
