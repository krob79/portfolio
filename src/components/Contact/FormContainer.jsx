import { useState } from 'react';
import axios from 'axios';

const FormContainer = ({signalSuccess})=> {

    const [name, setName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [btnDisplay, setBtnDisplay] = useState('Send Message');
    
    

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
            signalSuccess();
            
        } catch (error) {
            console.error(error);
        }
        }else{
        console.log("----NOT SENDING - NO EMAIL LISTED");
        }
    }

    const validateEmail = (e) => {
        let email = e.target.value;
        let field = e.target;
        let emailRegEx = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
        console.log(e.target.value);
        console.log("EMAIL MATCH: " + formEmail + " " + (email.match(emailRegEx) != null));   
        if(!email.match(emailRegEx)){
            console.log("----NOT GOOD");
            return false;
        }else{
            console.log("----GOOD");
            return true;
        }
      }

    return(
        <div className="form-container">
              <form method="POST" className="st-contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="st-form-field">
                  <input type="text" id="name" name="name" placeholder="Your Name" onChange={(e)=> setName(e.target.value)} value={name || ""} required />
                </div>
                <div className="st-form-field">
                  {/* <input type="text" id="email" name="email" placeholder="Your Email" onChange={(e)=> setFormEmail(e.target.value)} value={formEmail || ""} required /> */}
                  <input type="text" id="email" name="email" className={validateEmail?"good":"form-field-error"} placeholder="Your Email" onInput={validateEmail} onChange={(e)=> setFormEmail(e.target.value)} value={formEmail || ""} required />
                </div>
                <div className="st-form-field">
                  <input type="text" id="subject" name="subject" placeholder="Your Subject" onChange={(e)=> setSubject(e.target.value)} value={subject || ""} required />
                </div>
                <div className="st-form-field">
                  <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" onChange={(e)=> setMessage(e.target.value)} value={message || ""} required></textarea>
                </div>
                <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">{btnDisplay || ""}</button>
              </form>
        </div>
    )

}

export default FormContainer;