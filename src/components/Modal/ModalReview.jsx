import './ModalReview.scss';
import '../Review/Review.scss';

import { useEffect } from 'react';

const ModalReview = ({ img, title, designation, text, modalClose }) => {

  useEffect(() => {
    let mdialog = document.querySelector(".animate__animated");
    console.log("mdialog is...");
    console.log(mdialog);
    console.log("mdialog classList is...");
    console.log(mdialog.classList);
    mdialog.classList.add("animate__bounceInUp");
    return () => {
    };
  }, []);

  const closeAnimation = () => {
    let mdialog = document.querySelector(".animate__animated");
    mdialog.classList.remove("animate__bounceInUp");
    mdialog.classList.add("animate__bounceOutDown");
    mdialog.addEventListener('animationend', () => {
      modalClose();
    });
  }

  const modalBGStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  const modalTitleStyle = {
    color: '#fec544',
    margin: '2px 1em 0 auto'
  };
  const modalHeaderStyle = {
    borderBottom: 'none'
  };
  const modalContentStyle = {
    backgroundColor: 'rgba(50,50,30,0)',
    border: '0px solid #fec544',
    color: '#a9adb8'
  };
  const modalBodyStyle = {
    color: '#a9adb8'
  };
  const modalBodyImg = {
    float: 'left',
    margin: '0 15px 0 auto',
    width: '65px'
  };
  const modalQuote = {
    position: 'relative',
    top: '0px',
    width: '10%'
  };
  const modalTextStyle = {
    color: '#a9adb8'
  }
  const modalTxtPos = {
    margin: '30px 0px 0px 3%',
    display: 'inline-block'
  };



  

  return (
    <div className="modal show fade bd-example-modal-lg" onClick={closeAnimation} style={modalBGStyle}>
      <div className="modal-dialog animate__animated modal-lg" >
        <div className="modal-content" style={modalContentStyle}>
          <div className="modal-header" style={modalHeaderStyle}>
            <h4 className="modal-title" style={modalTitleStyle}>{``}</h4>
            <button
              type="button"
              className="btn-close"
              style={modalContentStyle}
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            {/* <div className="st-quote" style={modalQuote}>
              <img src="/images/icon/quote.png" alt="quote"/>
            </div> */}
            <div className="profile">
                <img src={img} style={modalBodyImg}/>
                <div>
                  <p className="modal-subtitle" style={modalTitleStyle}>{`${title}`}</p>
                  <p className="modal-subtitle" style={modalBodyStyle}>{`${designation}`}</p>
                </div>
            </div>
            <div style={modalTxtPos}>
              
                <p className="wordballoon leftarrow" style={modalTextStyle}>{text}</p> 
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
