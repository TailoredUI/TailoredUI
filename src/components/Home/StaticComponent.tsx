import Accordian from "../StaticComponents/Accordian";
import Avatar from "../StaticComponents/Avator";
import Button from "../StaticComponents/Button";
import Card from "../StaticComponents/Card";
import Hr from "../StaticComponents/Hr";
import Navbar from "../StaticComponents/Navbar";
import Radio from "../StaticComponents/Radio";
import uiImage from "../../assets/images/coreui-components.png";
import dashImage from "../../assets/images/dashboard-components.png";
import StaticUIImage from "../../assets/images/StaticUIImage";
import Pagination from "../StaticComponents/Pagination";

const StaticComponent = () => (
  <div className="w-full h-[40rem] sm:h-[70vh] relative z-0 flex gap-4 justify-end">
    <div className="hidden lg:flex sm:w-1/3 h-full ml-4 2xl:mx-32 rounded-lg text-gray-500 flex-col items-center justify-between p-2 overflow-hidden">
      <div className="rounded-lg flex flex-col gap-2">
        <div>
          <img
            src={uiImage}
            alt="ui image"
            className="rounded-md w-full object-cover"
          />
        </div>
        <div className="uppercase rounded-md bg-white font-semibold text-center text-sm xl:text-xl py-2">
          UI COMPONENTS
        </div>
      </div>
      <div className="rounded-lg flex flex-col gap-2">
        <div>
          <img
            src={dashImage}
            alt="dashboard image"
            className="rounded-md w-full object-cover"
          />
        </div>
        <div className="uppercase rounded-md bg-white font-semibold text-center text-sm xl:text-xl py-2">
          DASHBOARD COMPONENTS
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-[#FFFFFF1F] w-full sm:w-[80%] xl:w-full mx-2">
      <Navbar />
      <Accordian />
      <Card />
      <Radio />
      <Button />
      <Avatar />
      <Pagination className="absolute bottom-8 xs:bottom-[4rem] right-4"/>
      <Hr className="absolute top-20 right-[35rem] w-64 hidden 2xl:block" />
      <Hr className="absolute top-[12rem] right-[30rem] w-52 rotate-90 hidden sm:block" />
      <Hr className="absolute top-56 right-[32rem] w-28 hidden sm:block" />
      <Hr className="absolute top-[28rem] right-[8rem] w-[29rem] rotate-90 hidden sm:block" />
      <Hr className="absolute bottom-[9rem] right-[4rem] w-96 hidden sm:block" />
      <div className="relative w-full h-full">
        <StaticUIImage />
      </div>
    </div>
  </div>
);

export default StaticComponent;
