import { IoIosArrowDown } from "react-icons/io";

const CustomToken = () => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold my-10">Add custom token</h2>
      <div className="w-full">
        <div className="space-y-3">
          <label htmlFor="token">Token contract address</label>
          <div className="w-full bg-[#fff] flex  items-center  rounded-md border border-[#2F76DE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              id="name"
              className="w-full h-full py-3 outline-none px-5 rounded-l-md border-r border-[#3D3D3D]"
              placeholder="Token contract address"
            />
            <div className="relative w-[250px]">
              <div className="flex items-center h-full">
                <select className="block appearance-none  px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline w-full h-full  rounded-r-md cursor-pointer text-[18px] font-semibold">
                  <option>Select Network</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 top-1 flex items-center px-2 text-gray-700">
                <IoIosArrowDown className="fill-current size-6 text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between gap-3 mt-5">
          <div className="w-full space-y-3">
            <label htmlFor="token">Token Symble</label>
            <input
              type="text"
              id="name"
              className=" appearance-none px-4 py-3 shadow leading-tight focus:outline-none focus:shadow-outline w-full rounded-md"
              placeholder="Token Symble"
            />
          </div>
          <div className="w-full  space-y-3">
            <label htmlFor="token">Token Decimals</label>
            <input
              type="text"
              id="name"
              className=" appearance-none px-4 py-3 shadow leading-tight focus:outline-none focus:shadow-outline w-full rounded-md"
              placeholder="Token Decimals"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="w-[70%] mx-auto text-[18px] font-bold text-[#fff] py-3 rounded-lg bg-[#2F76DE] mt-3"
          >
            Add custom token
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomToken;
