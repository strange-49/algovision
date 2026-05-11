import "./AlgorithmInfoPanel.css";

const AlgorithmInfoPanel = () => {
  return (
    <aside className="aip-panel">
      {/* Algorithm Info */}
      <div className="aip-section">
        <div className="aip-section-header">
          <h3 className="aip-section-title">Algorithm Info</h3>
          <span className="aip-info-icon">ⓘ</span>
        </div>
        <p className="aip-description">
          Bubble Sort repeatedly steps through the list, compares adjacent
          elements and swaps them if they are in the wrong order.
        </p>

        <div className="aip-complexity-table">
          {[
            { label: "Best Case:", value: "O(n)" },
            { label: "Average Case:", value: "O(n²)" },
            { label: "Worst Case:", value: "O(n²)" },
            { label: "Space Complexity:", value: "O(1)" },
            { label: "Type:", value: "Comparison Sort" },
            { label: "Stable:", value: "Yes" },
          ].map(({ label, value }) => (
            <div className="aip-row" key={label}>
              <span className="aip-row-dot">•</span>
              <span className="aip-row-label">{label}</span>
              <span className="aip-row-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="aip-divider" />

      {/* How It Works */}
      <div className="aip-section">
        <h3 className="aip-section-title">How It Works</h3>
        <div className="aip-steps">
          {[
            "Compare adjacent elements.",
            "Swap if they are in wrong order.",
            "Move to the next pair.",
            "Repeat for the entire array.",
            "Repeat passes until sorted.",
          ].map((step, i) => (
            <div className="aip-step" key={i}>
              <div className="aip-step-num">{i + 1}</div>
              <span className="aip-step-text">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="aip-divider" />

      {/* Example trace */}
      <div className="aip-section">
        <h3 className="aip-section-title">Example</h3>
        <div className="aip-example">
          <div className="aip-example-row">
            <span className="aip-example-label">Initial:</span>
            <span className="aip-example-arr">[5, 1, 4, 2, 8]</span>
          </div>
          <div className="aip-example-row">
            <span className="aip-example-label">Pass 1:</span>
            <span className="aip-example-arr">[1, 4, 2, 5, 8]</span>
          </div>
          <div className="aip-example-row">
            <span className="aip-example-label">Pass 2:</span>
            <span className="aip-example-arr">[1, 2, 4, 5, 8]</span>
          </div>
          <div className="aip-example-row">
            <span className="aip-example-label">Pass 3:</span>
            <span className="aip-example-arr">
              [1, 2, 4, 5, 8]
              <span className="aip-sorted-badge">Sorted!</span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AlgorithmInfoPanel;
