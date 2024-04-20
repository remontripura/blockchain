import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div>
      <div className="w-full mt-[95px]">
        <div>
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
              className="w-full h-full py-2 outline-none px-5 rounded-l-md border-r border-[#3D3D3D]"
              placeholder="Search for a token by name, symbol, or address"
            />
            <div className="relative w-[200px]">
              <div className="flex items-center h-full">
                <select className="block appearance-none  cursor-pointer  px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline w-full h-full  rounded-r-md">
                  <option>Biz</option>
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
      </div>
    </div>
  );
};

export default Search;
