import './Review.scss';
import PropTypes from 'prop-types';

const SingleReview = ({element, getData}) => {
  const {imgLink,title,designation,shortText,text} = element;

  return (
    <>
      <div className={`st-testimonial st-style1 `} data--duration="0.8s" data--delay="0.2s">
        <div className="st-testimonial-text" onClick={() => getData(imgLink,title,designation,text)}>
          <div className="st-snippet"><div>{shortText}<p className="st-testimonial-moreLink">more...</p></div></div>
          <div className="st-quote"><img src="/images/icon/quote.png" alt="quote" /></div>
        </div>
        <div className="st-testimonial-info">
          <div className="st-testimonial-img" onClick={() => getData(imgLink,title,designation,text)}><img src={imgLink} alt="client1" /></div>
          <div className="st-testimonial-meta">
            <h4 className="st-testimonial-name">{title}</h4>
            <div className="st-testimonial-designation">{designation}</div>
          </div>
        </div>
      </div>
    </>
  )
}
SingleReview.propTypes = {
  element: PropTypes.object
}

export default SingleReview;
