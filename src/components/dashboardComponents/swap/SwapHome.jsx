import { IoIosArrowDown } from "react-icons/io";
import toggleImg from "../../../assets/icon/dashboard-icon/Group 16.svg";
import pmlogo from "../../../assets/icon/dashboard-icon/pmlogo.svg";
import BizToken from "../../../assets/icon/dashboard-icon/BizToken.svg";
import arrow from "../../../assets/icon/dashboard-icon/angle-down.svg";
import bizToken from "../../../assets/dashboardImg/BizToken.svg";
const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];
const SwapHome = () => {
  return (
    <div className="lg:ml-[35px] md:mx-5 mx-3 mb-10 flex lg:flex-row flex-col gap-5">
      <div className="md:max-w-[654px] w-full mt-[56px] mb-10 md:mx-auto bg-[#E7F5FF] flex flex-col items-center md:p-[43px] py-[43px] rounded-lg">
        {/* ----------------------------from section 1---------------------------------- */}

        <div className="flex flex-col items-center gap-5 w-full">
          <div className="relative md:w-[390px] w-full  bg-[#fff] rounded-3xl  border border-[#BDBDBD]">
            <img
              src={bizToken}
              alt=""
              className="absolute bottom-0 top-0 my-auto left-3 size-[24px]"
            />
            <select id="token" className="select-form-style pl-12 w-full">
              <option>Biz Token Network</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="select-icon-style">
              <img className="size-5 mt-[4px]" src={arrow} alt="" />
            </div>
          </div>
          <div className="relative md:w-[390px] w-full  bg-[#fff] rounded-3xl  border border-[#BDBDBD]">
            <img
              src={bizToken}
              alt=""
              className="absolute bottom-0 top-0 my-auto left-3 size-[24px]"
            />
            <select id="token" className="select-form-style pl-12 w-full">
              <option>Biz Token Network</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="select-icon-style">
              <img className="size-5 mt-[4px]" src={arrow} alt="" />
            </div>
          </div>
        </div>
        {/* ----------------------------from section 2---------------------------------- */}
        <div className="flex flex-col items-end gap-10 mt-[35px]">
          <div className="w-full">
            <h3 className="text-[18px] font-semibold mb-6">Swap form</h3>
            <div>
              <div className="md:w-[563px] w-full bg-[#fff] flex items-center  rounded-lg border border-[#2F76DE]">
                <div className="relative md:w-[200px] w-[150px]">
                  <div className="flex items-center ml-3">
                    <div>
                      <img className="size-[30px]" src={BizToken} alt="" />
                    </div>
                    <select className="block appearance-none  px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline w-full cursor-pointer">
                      <option>Biz</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div className="pointer-events-none absolute top-0 bottom-0 my-auto right-2 flex items-center px-2 text-gray-700">
                    <img className="size-4 mt-[4px]" src={arrow} alt="" />
                  </div>
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full h-full py-2 outline-none px-5 rounded-r-lg border-l border-black"
                  placeholder="00"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-end">
              <img className=" cursor-pointer" src={toggleImg} alt="" />
            </div>
            <h3 className="text-[18px] font-semibold mb-6">Swap to</h3>
            <div>
              <div className="md:w-[563px] w-full bg-[#fff] flex items-center  rounded-lg border border-[#2F76DE]">
                <div className="relative w-[200px]">
                  <div className="flex items-center ml-3">
                    <div>
                      <img className="size-[30px]" src={pmlogo} alt="" />
                    </div>
                    <select className="block appearance-none  px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline w-full text-[#343434] font-semibold text-[18px] cursor-pointer">
                      <option>Pmind</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div className="pointer-events-none absolute top-0 bottom-0 my-auto right-2 flex items-center px-2 text-gray-700">
                    <img className="size-4 mt-[4px]" src={arrow} alt="" />
                  </div>
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full h-full py-2 outline-none px-5 rounded-r-lg border-l border-black"
                  placeholder="00"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------from section 3---------------------------------- */}
        <div className="w-full mt-4">
          <p className="text-[14px] font-medium">
            MIND verified on 17 sources.{" "}
            <span className="font-light text-[12px]">
              Always confirm the token address on a{" "}
            </span>
          </p>
        </div>
        <div className="w-full mt-4 flex flex-col items-center">
          <div className="relative w-[208px]  mb-5 ">
            <select className="block appearance-none bg-[#E7F5FF] pr-8 pl-3 leading-tight focus:outline-none focus:shadow-outline rounded-3xl w-full text-[#343434] cursor-pointer">
              <option>Advance Option</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <IoIosArrowDown className="fill-current size-6 text-black" />
            </div>
          </div>
          <button className="w-full text-[18px] font-bold text-[#fff] py-3 rounded-xl bg-[#2F76DE] mt-3">
            Get Qoutes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapHome;
