import FeatureImage from "../../assets/images/FeatureImage";
import HeroImage from "../../assets/images/HeroImage";
import ReactIcon from "../../assets/images/icons/React.icon";
import TailwindIcon from "../../assets/images/icons/Tailwind.icon";

const HeroSection = () => {
  return (
    <div className="mt-[4.7rem] md:mt-[10.5rem] mx-4 sm:mx-8 xl:mx-64 h-[84vh] ">
      <div>
        <HeroImage />
        <FeatureImage className="absolute bottom-0 right-0 h-full 2xl:w-[105dvw] -z-10 opacity-50 hidden sm:block" />
      </div>
      <div className="">
        <h1 className="font-bold text-5xl sm:text-[4rem] w-full sm:w-[70%] mb-4 mt-40 lg:mt-0">
          Craft Tailored UI Experiences Seamlessly!
        </h1>
        <h4 className="w-full sm:w-1/2 text-[1.2rem] text-left mt-8">
          <strong>TailorUI</strong>{" "}
          <span className="text-[#9fbcff]">
            empowers you to shape your web interfaces effortlessly using React
            and Tailwind. Design, customize, and visualize your components in
            real-time. Unleash your creativity and bring your UI visions to life
            with TailorUI.
          </span>
        </h4>

        <h4 className="text-[1.2rem] mt-8">
          Ready to tailor your web experience? Let's start crafting!
        </h4>
        <div className="mt-8 flex gap-4 flex-col sm:flex-row">
          <button className="px-4 py-2 rounded-md min-w-[12rem] bg-blue-500">
            Explore Components
          </button>
          <button className="px-4 py-2 rounded-md min-w-[12rem] border">
            Get Started
          </button>
        </div>
        <div className="mt-8 flex gap-4 justify-center sm:justify-normal">
          <div className="p-2 rounded-full bg-white w-12 h-12">
            <ReactIcon />
          </div>
          <div className="p-2 rounded-full bg-white w-12 h-12">
            <TailwindIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
