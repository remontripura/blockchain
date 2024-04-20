import { IoIosArrowDown } from "react-icons/io";
import qr from "../../../assets/dashboardImg/qr.png";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
const Received = () => {
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState("aaaaaaaaaaaaaaaaaa");
  const handleCopy = () => {
    setCopied(true);
    console.log(copied);
    if (copied == false) {
      alert("text copid");
    }
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className=" md:w-[563px] md:mx-auto mx-3 w-full flex flex-col justify-center items-center">
      <div className="w-full space-y-2 mx-auto mt-[76px]">
        <label
          htmlFor="wallet"
          className="text-[18px] text-[#343434] font-semibold"
        >
          Received To
        </label>
        <div className="relative">
          <select className="block appearance-none bg-white border border-[#2F76DE] px-4 py-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-2xl w-full text-[18px] font-semibold cursor-pointer">
            <option>User Wallet Address</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
            <IoIosArrowDown className="fill-current size-6 text-[#343434]" />
          </div>
        </div>
      </div>
      <div className="my-5">
        <img className="wize-[358px]" src={qr} alt="" />
      </div>
      <div className="w-full mt-5">
        <div
          type="submit"
          className="w-full mx-auto text-[18px] font-bold text-[#fff] py-3 rounded-lg bg-[#2F76DE] mt-3 flex justify-center items-center"
        >
          <div className="flex gap-2">
          <CopyToClipboard text={`${copyText}`} onCopy={handleCopy}>
            <FaCopy className="text-[25px] text-[#fff] hover:text-[#d0d0d0] cursor-pointer" />
          </CopyToClipboard>
          <span>Copy Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Received;
