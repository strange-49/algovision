import "./TopicCard.css";

const TopicCard = ({ icon, title, description, color, bgColor }) => {
  return (
    <div className="topic-card">
      <div className="topic-icon" style={{ background: bgColor }}>
        {icon}
      </div>
      <h3 className="topic-title">{title}</h3>
      <p className="topic-desc">{description}</p>
      <a href="#" className="topic-link" style={{ color }}>
        Explore <span className="topic-arrow">→</span>
      </a>
    </div>
  );
};

export default TopicCard;
