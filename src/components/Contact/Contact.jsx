import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';

import SocialLinks from '../SocialLinks/SocialLinks';


import FormContainer from './FormContainer';
import EmailSentAnimation from './EmailSentAnimation';

const Contact = ({ coreData, data, socialData }) => {
  const {firstName, lastName, jobtitle, email, resume} = coreData;
  const { title, text, subTitle } = data;

  const mailtolink = "mailto:"+email;

  const [emailSuccess, setEmailSuccess] = useState(false);

  const signalSuccess = ()=>{
    console.log("----signalling success!!");
    setEmailSuccess(true);
    setTimeout(() => {setEmailSuccess(false); console.log("----RESETTING EMAIL");}, 5000);
  }

  
  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Give me a shout.</h3>
            <div className="st-contact-text">Yes, I actually check this email form. No, your data will not be collected.</div>
            <div id="st-alert"></div>
            {emailSuccess?<EmailSentAnimation />:<FormContainer signalSuccess={signalSuccess}/>}
            
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to={mailtolink}>{email}</Link>
                </div>
              </div>
              {/* <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+1 876-369-9009</span>
                  <span>+1 213-519-1786</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>2661 High Meadow Lane Bear Creek, <br />Olancha, KY 93544</span>
                </div>
              </div> */}
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
