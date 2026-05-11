import "./SortingSidebar.css";

const navItems = [
  { icon: "🏠", label: "Home", active: false },
  { icon: "📊", label: "Visualize", active: true },
  { icon: "📚", label: "Subjects", active: false },
  { icon: "💻", label: "Playground", active: false },
  { icon: "⚖️", label: "Compare", active: false },
  { icon: "🔖", label: "Bookmarks", active: false },
  { icon: "🕐", label: "History", active: false },
  { icon: "👤", label: "Profile", active: false },
  { icon: "⚙️", label: "Settings", active: false },
];

const SortingSidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="#4F46E5" />
            <path
              d="M7 14L11 10L15 14L21 8"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="21" cy="20" r="3" fill="white" opacity="0.7" />
          </svg>
        </div>
        <span className="sidebar-logo-text">
          <span style={{ color: "#0F172A" }}>Algo</span>
          <span style={{ color: "#4F46E5" }}>Vision</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`sidebar-nav-item ${item.active ? "sidebar-nav-item--active" : ""}`}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom promo card */}
      <div className="sidebar-promo">
        <div className="sidebar-promo-visual">
          <svg width="60" height="48" viewBox="0 0 60 48" fill="none">
            <rect
              x="4"
              y="6"
              width="52"
              height="34"
              rx="5"
              fill="#EEF2FF"
              stroke="#C7D2FE"
              strokeWidth="1.5"
            />
            <rect x="8" y="10" width="44" height="6" rx="2" fill="#C7D2FE" />
            <rect
              x="8"
              y="20"
              width="10"
              height="14"
              rx="1.5"
              fill="#6366F1"
              opacity="0.4"
            />
            <rect
              x="22"
              y="16"
              width="10"
              height="18"
              rx="1.5"
              fill="#6366F1"
              opacity="0.7"
            />
            <rect
              x="36"
              y="12"
              width="10"
              height="22"
              rx="1.5"
              fill="#4F46E5"
            />
            <circle cx="48" cy="8" r="8" fill="#4F46E5" />
            <circle cx="48" cy="8" r="5" fill="white" opacity="0.3" />
            <path d="M45 8 L48 5 L51 8 L48 11 Z" fill="white" />
          </svg>
        </div>
        <p className="sidebar-promo-title">Master Sorting!</p>
        <p className="sidebar-promo-desc">
          Visualize, understand and master sorting algorithms.
        </p>
        <a href="#" className="sidebar-promo-btn">
          Explore More
        </a>
      </div>
    </aside>
  );
};

export default SortingSidebar;
