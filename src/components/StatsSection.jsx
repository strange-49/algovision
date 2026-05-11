import "./StatsSection.css";

const stats = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="4"
          height="20"
          rx="1"
          fill="#6366F1"
          opacity="0.3"
        />
        <rect
          x="8"
          y="8"
          width="4"
          height="14"
          rx="1"
          fill="#6366F1"
          opacity="0.6"
        />
        <rect x="14" y="5" width="4" height="17" rx="1" fill="#6366F1" />
        <circle cx="20" cy="4" r="2" fill="#A78BFA" />
        <path
          d="M2 20 L20 4"
          stroke="#A78BFA"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </svg>
    ),
    iconBg: "#EEF2FF",
    value: "50+",
    label: "Algorithms",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#10B981"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <circle cx="12" cy="12" r="6" fill="#ECFDF5" />
        <path
          d="M12 6 L12 12 L16 14"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" fill="#10B981" />
      </svg>
    ),
    iconBg: "#ECFDF5",
    value: "100+",
    label: "Visualizations",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F59E0B" opacity="0.4" />
        <path
          d="M2 17l10 5 10-5"
          stroke="#F59E0B"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="#F59E0B"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    iconBg: "#FFFBEB",
    value: "20+",
    label: "CS Subjects",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="#EC4899"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="17"
          cy="9"
          r="3"
          stroke="#EC4899"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M1 21c0-4 3.6-7 8-7s8 3 8 7"
          stroke="#EC4899"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M17 12c2.5 0 5 1.5 5 5"
          stroke="#EC4899"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
    ),
    iconBg: "#FDF2F8",
    value: "10K+",
    label: "Students",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          fill="#06B6D4"
          opacity="0.3"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "#ECFEFF",
    value: "Interactive",
    label: "Learning Experience",
    highlight: true,
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div
            className={`stat-card ${s.highlight ? "stat-highlight" : ""}`}
            key={i}
          >
            <div className="stat-icon" style={{ background: s.iconBg }}>
              {s.icon}
            </div>
            <div className="stat-text">
              <span
                className={`stat-value ${s.highlight ? "stat-value-blue" : ""}`}
              >
                {s.value}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
