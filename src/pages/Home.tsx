import FeatureSection from '../components/Home/FeatureSection'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="flex flex-col md:gap-y-6">
      <HeroSection />
      <FeatureSection />
    </div>
  )
}

export default Home
