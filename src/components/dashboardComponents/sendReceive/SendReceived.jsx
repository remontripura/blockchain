import { useState } from "react";
import Send from "./Send";
import Received from "./Received";

const SendReceived = () => {
  const [show, setShow] = useState("1");
  return (
    <div className="max-w-[654px] mx-auto p-3 mt-12 mb-10 bg-[#E7F5FF] rounded-xl">
      <div>
        <ul className="flex gap-2 items-center bg-[#fff] w-fit px-1 py-1 rounded-full">
          <li
            onClick={() => setShow("1")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 1 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Send
          </li>
          <li
            onClick={() => setShow("2")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 2 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Receive
          </li>
        </ul>
      </div>
      {show == 1 && <Send />}
      {show == 2 && <Received />}
    </div>
  );
};

export default SendReceived;
