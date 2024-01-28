import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import FeatureCard from './FeatureCard'
import featureContent from '../../assets/content/feature.content'
import {
  Feature1Icon,
  Feature2Icon,
  Feature3Icon,
  Feature4Icon,
  Feature5Icon,
  Feature6Icon,
} from '../../assets/images/icons/feature.icons'
// import FeatureImage from "../../assets/images/FeatureImage";

const featureIcons: React.ReactNode[] = [
  <Feature1Icon key={1} />,
  <Feature2Icon key={2} />,
  <Feature3Icon key={3} />,
  <Feature4Icon key={4} />,
  <Feature5Icon key={5} />,
  <Feature6Icon key={6} />,
]

const FeatureSection = () => {
  const titleRef = useRef(null)
  const cardContainerRef = useRef(null)
  const isInView = useInView(titleRef, { once: true })
  const isCardContainerInView = useInView(cardContainerRef, { once: true })

  return (
    <section className="relative">
      {/* <div className="bg-slate-400 h-16 w-full absolute left-0" /> */}
      <div className="mx-4 mb-16 h-max overflow-hidden sm:mx-8 xl:mx-64">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className={`my-8 mt-16 text-2xl font-bold uppercase transition-all duration-[800ms] ease-[cubic-bezier(.41,.15,.68,1.2)] xs:mt-0 sm:mt-20 sm:text-5xl md:mt-0 ${
              isInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-24 opacity-0'
            }`}
          >
            Tailor Your Experience
          </h1>
          <p
            className={`text-md w-full transition-all delay-300 duration-[800ms] ease-[cubic-bezier(.41,.15,.68,1.2)] sm:text-lg lg:w-2/3 ${
              isInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-24 opacity-0'
            }`}
          >
            Craft unique user interfaces with TailoredUI&apos;s powerful
            features. TailoredUI brings a set of robust features to enhance your
            development process and make UI customization a breeze.
          </p>
        </div>
        <div
          ref={cardContainerRef}
          className="grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2 2xl:grid-cols-3"
        >
          {featureContent.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              desc={feature.desc}
              className={`transition-all delay-500 duration-[1500ms] ease-out ${
                isCardContainerInView
                  ? index % 2 === 0
                    ? 'translate-x-0 opacity-100 md:translate-x-0'
                    : 'translate-x-0 opacity-100'
                  : index % 2 === 0
                    ? '-translate-x-full opacity-0 md:-translate-x-full'
                    : 'translate-x-full opacity-0 md:translate-x-full'
              } ${
                !isCardContainerInView
                  ? (index === 0 && ' 2xl:-translate-y-full') ||
                    (index === 1 && '2xl:-translate-y-full') ||
                    (index === 2 &&
                      '2xl:translate-x-full 2xl:-translate-y-full') ||
                    (index === 3 &&
                      '2xl:-translate-x-full 2xl:translate-y-full') ||
                    (index === 4 && '2xl:translate-y-full') ||
                    (index === 5 && '2xl:translate-x-full 2xl:translate-y-full')
                  : 'opacity-100 2xl:translate-x-0 2xl:translate-y-0'
              }`}
            >
              {featureIcons[index]}
            </FeatureCard>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 2.0, ease: 'easeOut' }}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left"
        >
          <h4 className="text-lg font-bold sm:w-2/3">
            Ready to unlock the full potential of TailoredUI? Start tailoring
            your UI today!
          </h4>
          <button className="ml-4 rounded-md bg-blue-500 px-8 py-2 text-white">
            Get Started
          </button>
        </motion.div>
        {/* <FeatureImage className="absolute top-0 right-0 h-[100vh] 2xl:w-[105dvw] opacity-50 -z-10 rotate-180 hidden sm:block" /> */}
      </div>
    </section>
  )
}

export default FeatureSection
