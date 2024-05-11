import Accordian from '../StaticComponents/Accordian'
import Avatar from '../StaticComponents/Avatar'
import Button from '../StaticComponents/Button'
import Card from '../StaticComponents/Card'
import Hr from '../StaticComponents/Hr'
import Navbar from '../StaticComponents/Navbar'
import Radio from '../StaticComponents/Toggle'
// import uiImage from "../../assets/images/coreui-components.png";
// import dashImage from "../../assets/images/dashboard-components.png";
import StaticUIImage from '../../assets/images/StaticUIImage'
import Pagination from '../StaticComponents/Pagination'

const StaticComponent = () => (
  <div className="relative z-0 flex h-[40rem] w-full justify-end gap-4 sm:h-[70vh]">
    {/* <div className="hidden lg:flex sm:w-1/3 h-full ml-4 2xl:mx-32 rounded-lg text-gray-500 flex-col items-center justify-between p-2 overflow-hidden">
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
    </div> */}
    <div className="mx-2 w-full rounded-lg bg-[#FFFFFF1F] sm:w-[80%] xl:w-full">
      <Navbar />
      <Accordian />
      <Card />
      <Radio />
      <Button />
      <Avatar />
      <Pagination className="absolute bottom-8 right-4 xs:bottom-[4rem]" />
      <Hr className="absolute right-[35rem] top-20 hidden w-64 2xl:block" />
      <Hr className="absolute right-[30rem] top-[12rem] hidden w-52 rotate-90 sm:block" />
      <Hr className="absolute right-[32rem] top-56 hidden w-28 sm:block" />
      <Hr className="absolute right-[8rem] top-[28rem] hidden w-[29rem] rotate-90 sm:block" />
      <Hr className="absolute bottom-[9rem] right-[4rem] hidden w-96 sm:block" />
      <div className="relative h-full w-full">
        <StaticUIImage />
      </div>
    </div>
  </div>
)

export default StaticComponent
