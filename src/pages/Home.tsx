import FeatureSection from "../components/Home/FeatureSection";
import Footer from "../components/Home/FooterSection";
import HeroSection from "../components/Home/HeroSection";
import StaticComponent from "../components/Home/StaticComponent";

const Home = () => {
  return (
    <>
      <HeroSection />
      <StaticComponent />
      <FeatureSection />
      <Footer />
    </>
  );
};

export default Home;
