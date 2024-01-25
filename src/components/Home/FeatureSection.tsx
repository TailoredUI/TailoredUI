import FeatureCard from "./FeatureCard";
import featureContent from "../../assets/content/feature.content";
import {
  Feature1Icon,
  Feature2Icon,
  Feature3Icon,
  Feature4Icon,
  Feature5Icon,
  Feature6Icon,
} from "../../assets/images/icons/feature.icons";
// import FeatureImage from "../../assets/images/FeatureImage";

const featureIcons: React.ReactNode[] = [
  <Feature1Icon />,
  <Feature2Icon />,
  <Feature3Icon />,
  <Feature4Icon />,
  <Feature5Icon />,
  <Feature6Icon />,
];

const FeatureSection = () => {
  return (
    <div className="relative">
      {/* <div className="bg-slate-400 h-16 w-full absolute left-0" /> */}
      <div className="mx-4 sm:mx-8 xl:mx-64 h-max mb-16">
        <div className="text-center flex flex-col items-center mb-16">
          <h1 className="uppercase font-bold text-2xl sm:text-5xl mb-8 mt-32">
            Tailor Your Experience
          </h1>
          <p className="w-full sm:w-1/2 text-md sm:text-lg">
            Craft unique user interfaces with TailorUI's powerful features.
            TailorUI brings a set of robust features to enhance your development
            process and make UI customization a breeze.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {featureContent.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} desc={feature.desc}>
              {featureIcons[index]}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center text-center sm:text-left">
          <h4 className="font-bold text-lg sm:w-2/3">
            Ready to unlock the full potential of TailorUI? Start tailoring your
            UI today!
          </h4>
          <button className="bg-blue-500 text-white px-8 py-2 ml-4 rounded-md">
            Get Started
          </button>
        </div>
        {/* <FeatureImage className="absolute top-0 right-0 h-[100vh] 2xl:w-[105dvw] opacity-50 -z-10 rotate-180 hidden sm:block" /> */}
      </div>
    </div>
  );
};

export default FeatureSection;
