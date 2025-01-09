import PropTypes from 'prop-types';
import "./Review.scss";
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';
import ModalReview from '../Modal/ModalReview';

const Review = ({ data }) => {

  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, designation, text) => {
    let tempData = [imgLink, title, designation, text];
    setTempData(item => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  return (
    <>
      <section className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title="Review" />
        <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <Carousel data={data} getData={getData}/>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <ModalReview img={tempData[1]} title={tempData[2]} designation={tempData[3]} text={tempData[4]} modalClose={modalClose} /> : ""}
    </>
  )
}

Review.propTypes = {
  data: PropTypes.object
}

export default Review
