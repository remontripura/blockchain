import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../../../assets/icon/logo2.svg"

const Header = ({ show, setShow }) => {
  const toggleMenu = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div
      className="w-full lg:px-[35px] md:px-5 px-3 py-[20px] flex justify-between items-center bg-[#FFFFFF] "
      style={{ boxShadow: "-1px 59px 26px -27px rgba(0,0,0,0.05)" }}
    >
      <div className="flex items-center gap-2">
        <div onClick={toggleMenu} className="lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <img className="md:hidden block w-[150px]" src={logo} alt="" />
        <h2 className="font-bold text-[24px] hidden md:block">Dashboard</h2>
      </div>
      <div className="flex items-center gap-5">
        <form className="relative flex">
          <input
            type="text"
            className="border border-slate-300 outline-0 outline-slate-500 px-[19px] py-[12px] w-[259px] rounded-lg"
            placeholder="Serarch for a token"
          />
          <GoSearch className="absolute right-[17px] top-0 bottom-0 my-auto text-3xl" />
        </form>
        <div className="size-[45px] border border-slate-500 rounded-full p-2">
          <IoMdNotificationsOutline className="w-full size-[24px]" />
        </div>
        <div>
          <img
            src="https://i.ibb.co/tY4pRrS/user2.jpg"
            alt=""
            className="rounded-full size-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
