import "./SortingTopbar.css";

const SortingTopbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-breadcrumb">
        <a href="#">Visualize</a>
        <span className="topbar-sep">›</span>
        <a href="#">Sorting Algorithms</a>
        <span className="topbar-sep">›</span>
        <span className="topbar-current">Bubble Sort</span>
      </div>

      <div className="topbar-right">
        <button className="topbar-theme">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64748B"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
        <div className="topbar-user">
          <div className="topbar-avatar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="#4F46E5" opacity="0.3" />
              <path
                d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                stroke="#4F46E5"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <span className="topbar-username">Hi, Student</span>
          <span className="topbar-chevron">▾</span>
        </div>
      </div>
    </header>
  );
};

export default SortingTopbar;
