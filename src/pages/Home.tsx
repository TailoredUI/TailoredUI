import FeatureSection from '../components/Home/FeatureSection'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="flex flex-col md:py-16 lg:py-0 md:gap-16 lg:gap-y-0">
      <HeroSection />
      <FeatureSection />
    </div>
  )
}

export default Home
