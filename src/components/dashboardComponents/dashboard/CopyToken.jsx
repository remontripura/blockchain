import { FaCopy } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import bizToken from "../../../assets/dashboardImg/BizToken.svg";
const CopyToken = () => {
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
    <div className="lg:ml-[35px] md:mx-5 mx-3 mt-10 pt-[41px] rounded-2xl">
      <div className="md:w-full w-fit md:py-[55px] md:pl-[81px] md:pr-[134px] p-3 bg-gradient-to-bl from-[#539BFF] to-[#2F76DE] rounded-lg">
        <div className="flex justify-between items-center gap-2">
          <div>
            <h3 className="font-medium text-[18px] text-[#fff]">All Account</h3>
            <h3 className="font-semibole text-[24px] text-[#fff]">$5,756</h3>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[10px] text-[#ffffffa7]">My Account</p>
              <p className="text-[13px] text-[#fff]">0x17345a........f37054</p>
            </div>
            <CopyToClipboard text={`${copyText}`} onCopy={handleCopy}>
              <FaCopy className="text-[25px] text-[#fff] hover:text-[#d0d0d0] cursor-pointer" />
            </CopyToClipboard>
          </div>
          <div>
            <p className="text-[10px] text-[#ffffffa7] border-b border-[#ffffffa7]">
              Present Network
            </p>
            <div className="flex items-center gap-3 mt-1">
              <img className="size-[18px]" src={bizToken} alt="" />
              <span className="text-[#fff]">biz Token Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyToken;
