import { easeOut, motion } from 'framer-motion'

// import FeatureImage from "../../assets/images/FeatureImage";
// import HeroImage from "../../assets/images/HeroImage";
import ReactIcon from '../../assets/images/icons/React.icon'
import TailwindIcon from '../../assets/images/icons/Tailwind.icon'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-6rem)] items-center">
      {/* <HeroImage className="absolute bottom-0 right-0 h-full opacity-30 lg:w-full lg:h-max sm:opacity-100" /> */}
      {/* <FeatureImage className="absolute -top-44 right-0 h-[100vh] w-full object-cover -z-10 opacity-100 rotate-180 hidden sm:block" /> */}

      {/* <div className="z-0 mx-4 mb-16 mt-[9rem] overflow-hidden xs:mt-[4.7rem] sm:mx-8 sm:mt-[10rem] md:mb-0 xl:mx-64"> */}

      <motion.div
        className="z-0 mb-0 mt-0 overflow-hidden md:mb-0"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
      >
        <h1 className="mb-4 w-full text-3xl font-bold xs:text-5xl sm:w-[70%] sm:text-[4rem] lg:mt-0">
          Craft Tailored UI Experiences Seamlessly!
        </h1>
        <h4 className="text-md mt-8 w-full text-left xs:text-[1.2rem] sm:w-1/2">
          <strong>TailoredUI</strong>&nbsp;
          <span className="text-[#9fbcff]">
            empowers you to shape your web interfaces effortlessly using React
            and Tailwind. Design, customize, and visualize your components in
            real-time. Unleash your creativity and bring your UI visions to life
            with TailoredUI.
          </span>
        </h4>

        <h4 className="mt-8 text-sm xs:text-[1.2rem]">
          Ready to tailor your web experience? Let&apos;s start crafting!
        </h4>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/components">
            <button className="z-10 min-w-[12rem] rounded-md bg-blue-500 px-4 py-2">
              Explore Components
            </button>
          </Link>
          <Link to="/docs">
            <button className="z-10 min-w-[12rem] rounded-md border px-4 py-2">
              Get Started
            </button>
          </Link>
        </div>
        <div className="mt-4 flex justify-center gap-4 xs:mt-8 sm:justify-normal">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 1.2 }}
            className="h-10 w-10 rounded-full bg-white p-2 xs:h-12 xs:w-12"
          >
            <ReactIcon />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 1.2 }}
            className="h-10 w-10 rounded-full bg-white p-2 xs:h-12 xs:w-12"
          >
            <TailwindIcon />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
