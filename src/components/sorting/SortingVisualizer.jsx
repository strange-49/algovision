import { useState, useEffect, useRef, useCallback } from "react";
import AlgorithmInfoPanel from "./AlgorithmInfoPanel";
import "./SortingVisualizer.css";

// ─── Color scheme ───────────────────────────────────────────────────────────
const BAR_COLORS = {
  unsorted: { bg: "#E2E8F0", border: "#CBD5E1" },
  current: { bg: "#6366F1", border: "#4F46E5" },
  comparing: { bg: "#F472B6", border: "#EC4899" },
  swapped: { bg: "#FBBF24", border: "#F59E0B" },
  sorted: { bg: "#34D399", border: "#10B981" },
};

const SPEED_MAP = { Slow: 900, Medium: 400, Fast: 120 };

// ─── Generate all bubble sort steps ─────────────────────────────────────────
function generateBubbleSortSteps(inputArr) {
  const arr = [...inputArr];
  const steps = [];
  const n = arr.length;
  let totalSteps = 0;

  // count total steps first for display
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      totalSteps++;
    }
  }

  const workArr = [...inputArr];
  let stepNum = 0;

  // Initial state
  steps.push({
    array: [...workArr],
    current: -1,
    comparing: -1,
    swapped: [],
    sortedFrom: n, // none sorted yet
    stepNum: 0,
    total: totalSteps,
    pass: 0,
    totalPasses: n - 1,
    swapHappened: false,
    explanation: "Initial array. Press Play to start Bubble Sort.",
    comparison: "",
  });

  let sortedFrom = n;

  for (let i = 0; i < n - 1; i++) {
    let swappedInPass = false;
    for (let j = 0; j < n - i - 1; j++) {
      stepNum++;
      const willSwap = workArr[j] > workArr[j + 1];

      // Comparing step
      steps.push({
        array: [...workArr],
        current: j,
        comparing: j + 1,
        swapped: [],
        sortedFrom,
        stepNum,
        total: totalSteps,
        pass: i + 1,
        totalPasses: n - 1,
        swapHappened: false,
        explanation: willSwap
          ? `Comparing ${workArr[j]} and ${workArr[j + 1]}. Since ${workArr[j]} > ${workArr[j + 1]}, we swap them.`
          : `We are comparing ${workArr[j]} and ${workArr[j + 1]}. Since ${workArr[j]} is less than ${workArr[j + 1]}, no swap is needed. We move to the next pair in the array.`,
        comparison: willSwap
          ? `${workArr[j]} > ${workArr[j + 1]} → Swap`
          : `${workArr[j]} < ${workArr[j + 1]} → No swap`,
        compResult: willSwap ? "swap" : "noswap",
      });

      if (willSwap) {
        [workArr[j], workArr[j + 1]] = [workArr[j + 1], workArr[j]];
        swappedInPass = true;
        sortedFrom = n - i - 1;

        // Post-swap step
        steps.push({
          array: [...workArr],
          current: j,
          comparing: j + 1,
          swapped: [j, j + 1],
          sortedFrom,
          stepNum,
          total: totalSteps,
          pass: i + 1,
          totalPasses: n - 1,
          swapHappened: true,
          explanation: `Swapped ${workArr[j + 1]} and ${workArr[j]}. The larger element bubbles up.`,
          comparison: `${workArr[j + 1]} ↔ ${workArr[j]} swapped`,
          compResult: "swap",
        });
      }
    }
    sortedFrom = n - i - 1;

    if (!swappedInPass) {
      // Early termination
      steps.push({
        array: [...workArr],
        current: -1,
        comparing: -1,
        swapped: [],
        sortedFrom: 0,
        stepNum,
        total: totalSteps,
        pass: i + 1,
        totalPasses: n - 1,
        swapHappened: false,
        explanation:
          "No swaps in this pass — array is already sorted! Early termination.",
        comparison: "",
        compResult: "done",
      });
      break;
    }
  }

  // Final sorted state
  steps.push({
    array: [...workArr],
    current: -1,
    comparing: -1,
    swapped: [],
    sortedFrom: 0,
    stepNum,
    total: totalSteps,
    pass: n - 1,
    totalPasses: n - 1,
    swapHappened: false,
    explanation: "Array is fully sorted! All elements are in ascending order.",
    comparison: "",
    compResult: "done",
  });

  return steps;
}

// ─── Bar component ───────────────────────────────────────────────────────────
const Bar = ({ value, index, state, maxVal }) => {
  const heightPct = Math.max(8, (value / maxVal) * 100);
  const color = BAR_COLORS[state] || BAR_COLORS.unsorted;

  return (
    <div className="sv-bar-wrap">
      <span className="sv-bar-val">{value}</span>
      <div
        className="sv-bar"
        style={{
          height: `${heightPct}%`,
          background: color.bg,
          border: `2px solid ${color.border}`,
          transition:
            "height 0.25s ease, background 0.2s ease, border-color 0.2s ease",
        }}
      />
      <span className="sv-bar-idx">{index}</span>
    </div>
  );
};

// ─── Main Visualizer ─────────────────────────────────────────────────────────
const DEFAULT_INPUT = "29, 10, 14, 37, 13, 22, 8, 33, 17, 26";

const SortingVisualizer = () => {
  const [inputVal, setInputVal] = useState(DEFAULT_INPUT);
  const [inputError, setInputError] = useState("");
  const [speed, setSpeed] = useState("Medium");
  const [steps, setSteps] = useState([]);
  const [stepIdx, setStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const timerRef = useRef(null);

  const parseInput = useCallback((val) => {
    const parts = val
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const nums = parts.map(Number);
    if (nums.some(isNaN) || nums.length < 2) return null;
    if (nums.length > 15) return null;
    return nums;
  }, []);

  const initSteps = useCallback((arr) => {
    const s = generateBubbleSortSteps(arr);
    setSteps(s);
    setStepIdx(0);
    setIsPlaying(false);
    clearInterval(timerRef.current);
  }, []);

  // Initialize with default
  useEffect(() => {
    const arr = parseInput(DEFAULT_INPUT);
    if (arr) initSteps(arr);
  }, []);

  // Auto-play
  useEffect(() => {
    clearInterval(timerRef.current);
    if (isPlaying && steps.length > 0) {
      timerRef.current = setInterval(() => {
        setStepIdx((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            clearInterval(timerRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, SPEED_MAP[speed]);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, speed, steps]);

  const handleGenerate = () => {
    const arr = parseInput(inputVal);
    if (!arr) {
      setInputError("Enter 2–15 valid numbers separated by commas.");
      return;
    }
    setInputError("");
    initSteps(arr);
  };

  const handleReset = () => {
    const arr = parseInput(inputVal);
    if (arr) initSteps(arr);
  };

  const handlePlayPause = () => setIsPlaying((p) => !p);

  const handlePrev = () => {
    setIsPlaying(false);
    setStepIdx((p) => Math.max(0, p - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setStepIdx((p) => Math.min(steps.length - 1, p + 1));
  };

  const handleSpeedChange = (e) => {
    const pct = Number(e.target.value);
    if (pct < 33) setSpeed("Slow");
    else if (pct < 66) setSpeed("Medium");
    else setSpeed("Fast");
  };

  const speedPct = speed === "Slow" ? 15 : speed === "Medium" ? 50 : 85;

  const cur = steps[stepIdx] || null;
  const arr = cur ? cur.array : [];
  const maxVal = arr.length ? Math.max(...arr) : 1;

  const getBarState = (idx) => {
    if (!cur) return "unsorted";
    if (cur.sortedFrom !== undefined && idx >= cur.sortedFrom) return "sorted";
    if (cur.swapped && cur.swapped.includes(idx)) return "swapped";
    if (idx === cur.comparing) return "comparing";
    if (idx === cur.current) return "current";
    return "unsorted";
  };

  const progressPct =
    steps.length > 1 ? (stepIdx / (steps.length - 1)) * 100 : 0;

  return (
    <div className="sv-outer">
      <div className="sv-center">
        {/* Page title */}
        <div className="sv-page-title">
          <h1>Sorting Visualization</h1>
          <p>Visualize how sorting algorithms work step by step.</p>
        </div>

        {/* Controls row */}
        <div className="sv-controls-card">
          <div className="sv-ctrl-group">
            <label className="sv-ctrl-label">Algorithm</label>
            <div className="sv-select-wrap">
              <select
                className="sv-select"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
              >
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
                <option>Insertion Sort</option>
              </select>
              <span className="sv-select-arrow">▾</span>
            </div>
          </div>

          <div className="sv-ctrl-group sv-ctrl-array">
            <label className="sv-ctrl-label">Array Input</label>
            <div>
              <input
                className={`sv-input ${inputError ? "sv-input--error" : ""}`}
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  setInputError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="e.g. 29, 10, 14, 37, 13"
              />
              {inputError && <div className="sv-input-error">{inputError}</div>}
              <div className="sv-input-hint">
                Enter numbers separated by commas (max 15)
              </div>
            </div>
          </div>

          <div className="sv-ctrl-group">
            <label className="sv-ctrl-label">Speed</label>
            <div className="sv-speed-wrap">
              <input
                type="range"
                min="0"
                max="100"
                value={speedPct}
                onChange={handleSpeedChange}
                className="sv-speed-slider"
              />
              <span className="sv-speed-label">{speed}</span>
            </div>
          </div>

          <div className="sv-ctrl-btns">
            <button className="sv-btn-generate" onClick={handleGenerate}>
              <span>⟳</span> Generate
            </button>
            <button className="sv-btn-reset" onClick={handleReset}>
              <span>↺</span> Reset
            </button>
          </div>
        </div>

        {/* Bars chart */}
        <div className="sv-chart-card">
          <div className="sv-bars-area">
            {arr.map((val, i) => (
              <Bar
                key={i}
                value={val}
                index={i}
                state={getBarState(i)}
                maxVal={maxVal}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="sv-legend">
            {Object.entries(BAR_COLORS).map(([key, col]) => (
              <div className="sv-legend-item" key={key}>
                <div
                  className="sv-legend-dot"
                  style={{
                    background: col.bg,
                    border: `2px solid ${col.border}`,
                  }}
                />
                <span>
                  {key.charAt(0).toUpperCase() + key.slice(1)} Element
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step info + controls */}
        <div className="sv-step-card">
          <div className="sv-step-left">
            <div className="sv-step-counter">
              <span className="sv-step-label">Step </span>
              <span className="sv-step-num">{cur ? cur.stepNum : 0}</span>
              <span className="sv-step-div"> / </span>
              <span className="sv-step-total">{cur ? cur.total : 0}</span>
            </div>
            {cur && (
              <div className="sv-step-comparison">
                {cur.compResult === "swap" && (
                  <span className="sv-comp-swap">{cur.comparison}</span>
                )}
                {cur.compResult === "noswap" && (
                  <span className="sv-comp-noswap">{cur.comparison}</span>
                )}
                {cur.compResult === "done" && (
                  <span className="sv-comp-done">✓ Sorted!</span>
                )}
              </div>
            )}
            {cur && (
              <div className="sv-pass-info">
                <span>
                  Pass {cur.pass} of {cur.totalPasses}
                </span>
                <div className="sv-pass-bar-wrap">
                  <div
                    className="sv-pass-bar"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="sv-step-controls">
            <button
              className="sv-ctrl-btn"
              onClick={handlePrev}
              disabled={stepIdx === 0}
            >
              ⏮
            </button>
            <button
              className="sv-ctrl-btn sv-ctrl-btn--play"
              onClick={handlePlayPause}
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            <button
              className="sv-ctrl-btn"
              onClick={handleNext}
              disabled={stepIdx >= steps.length - 1}
            >
              ⏭
            </button>
          </div>
        </div>

        {/* Explanation + Pseudocode */}
        {cur && (
          <div className="sv-bottom-row">
            <div className="sv-explanation-card">
              <h3 className="sv-card-title">Step Explanation</h3>
              <p className="sv-explanation-text">{cur.explanation}</p>
            </div>

            <div className="sv-pseudocode-card">
              <h3 className="sv-card-title">Pseudocode</h3>
              <pre className="sv-pseudo">
                {`for i = 0 to n-2
  for j = 0 to n-i-2
    if arr[j] > arr[j+1]
      `}
                <span className="sv-pseudo-highlight">
                  swap(arr[j], arr[j+1])
                </span>
                {`
  end inner loop
end outer loop`}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Right panel */}
      <AlgorithmInfoPanel />
    </div>
  );
};

export default SortingVisualizer;
