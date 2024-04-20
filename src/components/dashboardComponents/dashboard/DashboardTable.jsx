import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import bizToken from "../../../assets/dashboardImg/BizToken.svg";
import download from "../../../assets/dashboardImg/inbox-in.svg";
import arrow from "../../../assets/icon/dashboard-icon/angle-down.svg";
import Token from "./Token";
import Nft from "./Nft";
import Transactions from "./Transactions";

const DashboardTable = () => {
  const [show, setShow] = useState("1");
  const [wallet, setWallet] = useState("");
  const [token, setToken] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ wallet, token });
  };
  return (
    <div className="lg:ml-[35px] md:mx-5 mx-3 mt-10 bg-[#E7F5FF] pt-[41px] rounded-2xl px-[29px]">
      <div>
        <ul className="flex gap-2 items-center bg-[#fff] w-fit px-1 py-1 rounded-full">
          <li
            onClick={() => setShow("1")}
            className={`cursor-pointer px-[20px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 1 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Tokens
          </li>
          <li
            onClick={() => setShow("2")}
            className={`cursor-pointer px-[20px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 2 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            NFTs
          </li>
          <li
            onClick={() => setShow("3")}
            className={`cursor-pointer px-[20px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 3 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Transactions
          </li>
        </ul>
      </div>
      <div className="mt-[15px]">
        <form onSubmit={onsubmit}>
          <div className="flex justify-start items-center gap-3">
            <div className="relative w-[199px] bg-[#fff] rounded-3xl border border-[#BDBDBD]">
              <select
                id="wallet"
                onChange={(e) => setWallet(e.target.value)}
                className="select-form-style w-full"
              >
                <option>User Wallet Address</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="select-icon-style">
                <img className="size-5 mt-[4px]" src={arrow} alt="" />
              </div>
            </div>
            <div className="relative w-[229px] bg-[#fff] rounded-3xl  border border-[#BDBDBD]">
              <img
                src={bizToken}
                alt=""
                className="absolute bottom-0 top-0 my-auto left-3 size-[24px]"
              />
              <select
                id="token"
                onChange={(e) => setToken(e.target.value)}
                className="select-form-style pl-10 w-full"
              >
                <option>BizToken Network</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="select-icon-style">
                <img className="size-5 mt-[4px]" src={arrow} alt="" />
              </div>
            </div>
            <div className="relative w-[193px] bg-[#fff] rounded-3xl  border border-[#BDBDBD]">
              <img
                src={download}
                alt=""
                className="absolute bottom-0 top-0 my-auto left-3 size-[20px]"
              />
              <div className="select-form-style pl-10">
                <span> Download Balance</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 pb-10 mb-10">
        {show == 1 && <Token />}
        {show == 2 && <Nft />}
        {show == 3 && <Transactions />}
      </div>
    </div>
  );
};

export default DashboardTable;
