import { useState } from "react";
import Home from "./pages/Home";
import BubbleSortPage from "./pages/BubbleSortPage";

function App() {
  const [page, setPage] = useState("home");

  if (page === "bubble") return <BubbleSortPage />;

  return (
    <div>
      <Home />
      {/* Temp button for testing — wire this to your router later */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#4F46E5",
          borderRadius: 10,
          padding: "10px 18px",
          boxShadow: "0 4px 20px rgba(79,70,229,0.4)",
        }}
      >
        <button
          onClick={() => setPage("bubble")}
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: "0.85rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          → Open Bubble Sort Visualizer
        </button>
      </div>
    </div>
  );
}

export default App;
