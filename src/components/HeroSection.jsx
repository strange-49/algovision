import "./HeroSection.css";

const BubbleSortVisualizer = () => {
  const bars = [
    { val: 29, color: "#6366F1", idx: 0 },
    { val: 10, color: "#34D399", idx: 1 },
    { val: 14, color: "#34D399", idx: 2 },
    { val: 37, color: "#6366F1", idx: 3 },
    { val: 13, color: "#F472B6", idx: 4 },
    { val: 22, color: "#6366F1", idx: 5 },
    { val: 8, color: "#FBBF24", idx: 6 },
    { val: 33, color: "#A78BFA", idx: 7 },
    { val: 17, color: "#2DD4BF", idx: 8 },
    { val: 26, color: "#6366F1", idx: 9 },
  ];
  const maxVal = 40;

  return (
    <div className="visualizer-card">
      <div className="vc-header">
        <span className="vc-title">Bubble Sort</span>
        <div className="vc-speed">
          <span>Speed</span>
          <div className="speed-track">
            <div className="speed-thumb" style={{ left: "55%" }} />
          </div>
          <span>Medium</span>
        </div>
      </div>

      <div className="vc-array-label">
        <span>Array</span>
        <div className="vc-array-vals">
          {bars.map((b, i) => (
            <span key={i}>{b.val}</span>
          ))}
        </div>
      </div>

      <div className="vc-bars">
        {bars.map((b) => (
          <div className="vc-bar-wrap" key={b.idx}>
            <span className="vc-bar-label">{b.val}</span>
            <div
              className="vc-bar"
              style={{
                height: `${(b.val / maxVal) * 140}px`,
                background: b.color,
              }}
            />
            <span className="vc-bar-idx">{b.idx}</span>
          </div>
        ))}
      </div>

      <div className="vc-footer">
        <span className="vc-status">Comparing 37 and 13</span>
        <div className="vc-controls">
          <button>⏮</button>
          <button className="vc-pause">⏸</button>
          <button>⏭</button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Decorative background dots */}
      <div className="hero-dots hero-dots-tl" />
      <div className="hero-dots hero-dots-br" />

      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-heading">
            <span>Visualize.</span>
            <span>Understand.</span>
            <span className="hero-accent">Master.</span>
          </h1>
          <p className="hero-desc">
            AlgoVision helps students visualize algorithms and core CS subjects
            with interactive animations and step-by-step explanations for better
            understanding.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              <span className="btn-play">▶</span> Explore Visualizations
            </button>
            <button className="btn-outline">
              <span className="btn-code">&lt;/&gt;</span> Try Playground
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              {["#6366F1", "#F472B6", "#34D399"].map((c, i) => (
                <div
                  key={i}
                  className="trust-avatar"
                  style={{ background: c, marginLeft: i > 0 ? "-8px" : 0 }}
                />
              ))}
            </div>
            <span className="trust-text">Trusted by 10K+ students</span>
            <div className="trust-stars">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#F59E0B" }}>
                  {s}
                </span>
              ))}
              <span className="trust-rating">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Right: Visualizer Card */}
        <div className="hero-right">
          <div className="hero-blob" />
          <div className="hero-plant">🪴</div>
          <BubbleSortVisualizer />
          <div className="hero-books">📚</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
