import SortingSidebar from "../components/sorting/SortingSidebar";
import SortingTopbar from "../components/sorting/SortingTopbar";
import SortingVisualizer from "../components/sorting/SortingVisualizer";
import "./BubbleSortPage.css";

const BubbleSortPage = () => {
  return (
    <div className="bsp-layout">
      <SortingSidebar />
      <div className="bsp-main">
        <SortingTopbar />
        <SortingVisualizer />
      </div>
    </div>
  );
};

export default BubbleSortPage;
