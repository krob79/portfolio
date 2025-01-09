import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {
  const { title, duration, subTitle, text} = element;

  //switched the positions of subtitle and title - like the layout better
  //instead of highlighting repeating job titles...
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{subTitle}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle">{title}</h4>
      <div className="st-resume-timeline-text"><p>{text}</p></div>
    </div>
  )
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
