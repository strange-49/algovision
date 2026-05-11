import "./VisualizerCard.css";

const VisualizerCard = ({ title, children, status }) => {
  return (
    <div className="viz-card">
      <div className="viz-card-header">
        <span className="viz-card-title">{title}</span>
      </div>
      <div className="viz-card-body">{children}</div>
      {status && (
        <div className="viz-card-footer">
          <span className="viz-card-status">{status}</span>
        </div>
      )}
    </div>
  );
};

export default VisualizerCard;
