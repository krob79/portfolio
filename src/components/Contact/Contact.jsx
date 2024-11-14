import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import axios from 'axios';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  const [name, setName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisplay, setBtnDisplay] = useState('Send Message');

  //this doesn't work yet - throws error when used
  const validateEmail = (emailVal) => {
    let email = emailVal;
    let emailRegEx = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    console.log("EMAIL MATCH: " + (email.match(emailRegEx) != null));   
    if(!email.match(emailRegEx)){
        return false;
    }else{
        return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("----handlesubmit!!");
    const serviceId = 'service_0x8v42a';
    const templateId = 'template_eh5o80l';
    const publicKey = '7ua9E6hU3yYdqCI4x';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: formEmail,
        from_subject: subject,
        to_name: 'Kyle darling....',
        message: message,
      }
    };
    if(email){
      try {
        setBtnDisplay('Sending...');
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        console.log(res.data);
        setName('');
        setFormEmail('');
        setSubject('');
        setMessage('');
        setBtnDisplay('Message Sent!');
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("----NOT SENDING - NO EMAIL LISTED");
    }
  }
  

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form method="POST" className="st-contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="st-form-field">
                <input type="text" id="name" name="name" placeholder="Your Name" onChange={(e)=> setName(e.target.value)} value={name || ""} required />
              </div>
              <div className="st-form-field">
                <input type="text" id="email" name="email" placeholder="Your Email" onChange={(e)=> setFormEmail(e.target.value)} value={formEmail || ""} required />
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Your Subject" onChange={(e)=> setSubject(e.target.value)} value={subject || ""} required />
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" onChange={(e)=> setMessage(e.target.value)} value={message || ""} required></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">{btnDisplay || ""}</button>
            </form>
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
                  <Link to="#">devis@example.com</Link>
                  <Link to="#">info@support.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
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
              </div>
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
