import TopicCard from "./TopicCard";
import "./TopicsSection.css";

const SortingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect
      x="3"
      y="14"
      width="5"
      height="11"
      rx="1.5"
      fill="#6366F1"
      opacity="0.4"
    />
    <rect
      x="10"
      y="9"
      width="5"
      height="16"
      rx="1.5"
      fill="#6366F1"
      opacity="0.7"
    />
    <rect x="17" y="5" width="5" height="20" rx="1.5" fill="#6366F1" />
    <circle cx="21" cy="4" r="2" fill="#A78BFA" />
  </svg>
);

const GraphIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="8" r="3" fill="#10B981" />
    <circle cx="5" cy="20" r="3" fill="#10B981" opacity="0.6" />
    <circle cx="23" cy="20" r="3" fill="#10B981" opacity="0.6" />
    <circle cx="14" cy="22" r="2.5" fill="#10B981" opacity="0.4" />
    <line x1="14" y1="11" x2="5" y2="17" stroke="#10B981" strokeWidth="1.5" />
    <line x1="14" y1="11" x2="23" y2="17" stroke="#10B981" strokeWidth="1.5" />
    <line
      x1="5"
      y1="20"
      x2="14"
      y2="20"
      stroke="#10B981"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <line
      x1="23"
      y1="20"
      x2="14"
      y2="20"
      stroke="#10B981"
      strokeWidth="1.5"
      opacity="0.6"
    />
  </svg>
);

const DSIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect
      x="3"
      y="10"
      width="10"
      height="8"
      rx="2"
      fill="#6366F1"
      opacity="0.5"
    />
    <rect
      x="15"
      y="10"
      width="10"
      height="8"
      rx="2"
      fill="#6366F1"
      opacity="0.8"
    />
    <rect x="9" y="3" width="10" height="7" rx="2" fill="#6366F1" />
    <rect
      x="9"
      y="18"
      width="10"
      height="7"
      rx="2"
      fill="#6366F1"
      opacity="0.3"
    />
  </svg>
);

const CoreCSIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect
      x="3"
      y="4"
      width="22"
      height="16"
      rx="3"
      fill="#F1F5F9"
      stroke="#6366F1"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="4"
      width="22"
      height="6"
      rx="3"
      fill="#6366F1"
      opacity="0.15"
    />
    <circle cx="7" cy="7" r="1.5" fill="#EF4444" />
    <circle cx="11" cy="7" r="1.5" fill="#F59E0B" />
    <circle cx="15" cy="7" r="1.5" fill="#10B981" />
    <path
      d="M7 15h6M7 18h4"
      stroke="#6366F1"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 14l2 2-2 2"
      stroke="#6366F1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="8"
      y="22"
      width="12"
      height="2"
      rx="1"
      fill="#6366F1"
      opacity="0.3"
    />
  </svg>
);

const PlaygroundIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="24" height="24" rx="6" fill="#FEF3C7" />
    <circle cx="14" cy="14" r="5" fill="#F59E0B" opacity="0.4" />
    <path d="M11 11 L19 14 L11 17 Z" fill="#F59E0B" />
  </svg>
);

const topics = [
  {
    icon: <SortingIcon />,
    title: "Sorting Algorithms",
    description:
      "Visualize sorting techniques like Bubble Sort, Merge Sort, Quick Sort and more.",
    color: "#6366F1",
    bgColor: "#EEF2FF",
  },
  {
    icon: <GraphIcon />,
    title: "Graph Algorithms",
    description:
      "Explore traversal, shortest path, MST, topological sort and more.",
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  {
    icon: <DSIcon />,
    title: "Data Structures",
    description:
      "Understand arrays, stacks, queues, trees, hash tables and more with visuals.",
    color: "#6366F1",
    bgColor: "#EEF2FF",
  },
  {
    icon: <CoreCSIcon />,
    title: "CS Core Subjects",
    description:
      "Dive into OS, DBMS, CN, OOPs, TOC and other important subjects.",
    color: "#6366F1",
    bgColor: "#EEF2FF",
  },
  {
    icon: <PlaygroundIcon />,
    title: "Playground",
    description:
      "Write code, test ideas and see the output with live visualization.",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
];

const TopicsSection = () => {
  return (
    <section className="topics-section">
      <div className="topics-inner">
        <div className="topics-header">
          <h2 className="topics-title">Explore Core CS Topics</h2>
          <a href="#" className="topics-view-all">
            View All →
          </a>
        </div>
        <div className="topics-grid">
          {topics.map((topic, i) => (
            <TopicCard key={i} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
