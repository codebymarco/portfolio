import "../../styles/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-box">
        <span>1998</span>
        <span>the big bang</span> <div className="ph"></div>
      </div>
      <div className="li"></div>
      <div className="timeline-box">
        <span>9 months later</span> <span>born a virgin</span>
        <div className="ph"></div>
      </div>
      <div className="li"></div>
      <div className="timeline-box">
        <span>192 months later</span> <span>still a virgin</span>
        <div className="ph"></div>
      </div>
      <div className="li"></div>
      <div className="timeline-box">
      <span>2017</span> <span>carpenter</span>
      <div className="ph"></div>
      </div>
      <div className="li"></div>
      <div className="timeline-box">
        <span>2023</span> <span>coder</span>
        <div className="ph"></div>
      </div>
    </div>
  );
};

export default Timeline;
