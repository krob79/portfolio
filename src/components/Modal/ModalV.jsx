import './Modal.scss';

const ModalV = ({ vid, vidposter, title, subTitle, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };

  const modalVideoStyle = {
    width: '100%'
  };

  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <video autoPlay="true" loop muted playsinline poster={vidposter} style={modalVideoStyle}>
                <source src={vid} type="video/mp4" />
                <img src={vidposter} />
              </video>
              {/* <img src={img} /> */}
            </div>
            <p className="modal-subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalV;
