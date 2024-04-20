import { useState } from "react";
import Search from "./Search";
import CustomToken from "./CustomToken";

const ImportToken = () => {
  const [show, setShow] = useState("1");
  return (
    <div
      className={`max-w-[868px] mx-auto p-5 mt-12 mb-12  rounded-xl  h-full ${
        show == 1 ? "bg-[#E7F5FF] md:h-[80vh]" : "bg-[#F4F4F4] md:h-[85vh]"
      }`}
    >
      <div className="flex justify-center mb-12">
        <h2 className="text-6 font-semibold">Import Token</h2>
      </div>
      <div>
        <ul className="flex gap-2 items-center bg-[#fff] w-fit px-1 py-1 rounded-full">
          <li
            onClick={() => setShow("1")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 1 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Search
          </li>
          <li
            onClick={() => setShow("2")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 2 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Custom Token
          </li>
        </ul>
      </div>
      <div>
        {show == 1 && <Search />}
        {show == 2 && <CustomToken />}
      </div>
    </div>
  );
};

export default ImportToken;
