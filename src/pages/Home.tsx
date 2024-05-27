import FeatureSection from '../components/Home/FeatureSection'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="flex flex-col md:gap-16 md:py-16 lg:gap-y-0 lg:py-0">
      <HeroSection />
      <FeatureSection />
    </div>
  )
}

export default Home
