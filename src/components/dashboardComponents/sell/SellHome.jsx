import { useState } from "react";
import bizToken from "../../../assets/dashboardImg/BizToken.svg";
import file from "../../../assets/icon/dashboard-icon/wallet.svg";
import arrow from "../../../assets/icon/dashboard-icon/angle-down.svg";
import icon from "../../../assets/icon/dashboard-icon/image.png";
import { GoArrowUpRight } from "react-icons/go";
import Buy from "./Buy";
import Sell from "./Sell";

const SellHome = () => {
  const [show, setShow] = useState("2");
  return (
    <div className="lg:ml-[35px] md:mx-5 mx-3 mb-10 flex lg:flex-row flex-col gap-5">
      <div className=" mt-10  pt-[41px] pb-10 bg-[#E7F5FF] rounded-2xl px-[29px] h-fit lg:w-[640px] w-full">
        <div>
          <ul className="flex gap-2 items-center bg-[#fff] w-fit px-1 py-1 rounded-full">
            <li
              onClick={() => setShow("1")}
              className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
                show == 1 ? "bg-[#3077DF] text-[#fff]" : ""
              }`}
            >
              Buy
            </li>
            <li
              onClick={() => setShow("2")}
              className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
                show == 2 ? "bg-[#3077DF] text-[#fff]" : ""
              }`}
            >
              Sell
            </li>
          </ul>
        </div>
        <div className="mt-[15px]">
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="relative md:w-[199px] w-full bg-[#fff] rounded-2xl">
              <select id="wallet" className="select-form-style w-full">
                <option>User Wallet Address</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="select-icon-style">
                <img className="size-5 mt-[4px]" src={arrow} alt="" />
              </div>
            </div>
            <div className="relative md:w-[172px] w-full bg-[#fff] rounded-2xl">
              <select className="select-form-style w-full">
                <option>Select Country</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="select-icon-style">
                <img className="size-5 mt-[4px]" src={arrow} alt="" />
              </div>
            </div>
            <div className="relative md:w-[172px] w-full bg-[#fff] rounded-2xl">
              <select className="select-form-style w-full">
                <option>Select Currency</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="select-icon-style">
                <img className="size-5 mt-[4px]" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        {show == 1 && <Buy />}
        {show == 2 && <Sell />}
        <div className="bg-[#fff] px-[29px] py-[19px] rounded-full flex justify-between items-center">
          <div className="flex items-center gap-[22px]">
            <img className="size-[40px]" src={bizToken} alt="" />
            <div>
              <h3 className="font-semibold text-[18px]">Biz Token</h3>
              <p className="font-medium text-[12px]">Biz Minnet</p>
            </div>
          </div>
          <div className="flex items-center gap-10 ">
            <div className="flex items-center gap-2">
              <img src={file} alt="" />
              <p>12Mind</p>
            </div>
            <img className="size-8 cursor-pointer" src={arrow} alt="" />
          </div>
        </div>
        <div className="bg-[#fff] px-[29px] py-[19px] rounded-full flex justify-between items-center mt-5">
          <div className="flex items-center gap-[22px]">
            <img className="size-[40px]" src={bizToken} alt="" />
            <div>
              <h3 className="font-semibold text-[18px]">Biz Token</h3>
              <p className="font-medium text-[12px]">Biz Minnet</p>
            </div>
          </div>
          <div className="flex items-center gap-10 ">
            <div className="flex items-center gap-2">
              <img src={file} alt="" />
              <p>12Mind</p>
            </div>
            <img className="size-8 cursor-pointer" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-[474px]  w-full  mt-10  pt-[41px] pb-10 bg-[#E7F5FF] rounded-2xl px-[29px]">
        <div className="text-center">
          <h3 className="font-bold text-[18px] mb-5">
            How do you want to buy your crypto?
          </h3>
          <p className="font-normal text-[14px]">
            Compare rates from these providers. Quotes are sorted by overall
            price.
          </p>
        </div>
        <div className="mt-[65px] flex flex-col gap-5">
          <div className="flex justify-between bg-[#fff] items-center px-[25px] py-3 rounded-full border border-slate-400">
            <div>
              <img className="w-[62px] h-[19px]" src={icon} alt="" />
            </div>
            <div className="flex items-center gap-[22px]">
              <div>
                <h3 className="font-bold text-[18px]">0.045186 ETH</h3>
                <p className="font-normal text-[14px] text-[#909090]">
                  ≈ €97.69 EUR
                </p>
              </div>
              <div>
                <GoArrowUpRight className="text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#fff] items-center px-[25px] py-3 rounded-full border border-slate-400">
            <div>
              <img className="w-[62px] h-[19px]" src={icon} alt="" />
            </div>
            <div className="flex items-center gap-[22px]">
              <div>
                <h3 className="font-bold text-[18px]">0.045186 ETH</h3>
                <p className="font-normal text-[14px] text-[#909090]">
                  ≈ €97.69 EUR
                </p>
              </div>
              <div>
                <GoArrowUpRight className="text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#fff] items-center px-[25px] py-3 rounded-full border border-slate-400">
            <div>
              <img className="w-[62px] h-[19px]" src={icon} alt="" />
            </div>
            <div className="flex items-center gap-[22px]">
              <div>
                <h3 className="font-bold text-[18px]">0.045186 ETH</h3>
                <p className="font-normal text-[14px] text-[#909090]">
                  ≈ €97.69 EUR
                </p>
              </div>
              <div>
                <GoArrowUpRight className="text-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellHome;
