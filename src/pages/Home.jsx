import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TopicsSection from "../components/TopicsSection";
import CTASection from "../components/CTASection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TopicsSection />
      <CTASection />
    </div>
  );
};

export default Home;
