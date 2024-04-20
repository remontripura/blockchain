import { Link, NavLink, useLocation } from "react-router-dom";
// import vector from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector0 from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector1 from "../../../assets/icon/dashboard-icon/vector1.svg";
import minus from "../../../assets/icon/dashboard-icon/minus-circle0.svg";
import minus1 from "../../../assets/icon/dashboard-icon/minus-circle1.svg";
import add0 from "../../../assets/icon/dashboard-icon/add0.svg";
import add1 from "../../../assets/icon/dashboard-icon/add1.svg";
import chart0 from "../../../assets/icon/dashboard-icon/chart0.svg";
import chart1 from "../../../assets/icon/dashboard-icon/chart1.svg";
import fileimport from "../../../assets/icon/dashboard-icon/file-import0.svg";
import fileimport1 from "../../../assets/icon/dashboard-icon/file-import1.svg";
import handHoldingMedical from "../../../assets/icon/dashboard-icon/hand-holding-medical0.svg";
import handHoldingMedical1 from "../../../assets/icon/dashboard-icon/hand-holding-medical1.svg";
import paperPlane from "../../../assets/icon/dashboard-icon/paper-plane0.svg";
import paperPlane1 from "../../../assets/icon/dashboard-icon/paper-plane1.svg";
import refresh from "../../../assets/icon/dashboard-icon/refresh0.svg";
import refresh1 from "../../../assets/icon/dashboard-icon/refresh1.svg";
import shuffle from "../../../assets/icon/dashboard-icon/shuffle0.svg";
import shuffle1 from "../../../assets/icon/dashboard-icon/shuffle1.svg";
import logo from "../../../assets/icon/logo2.svg"

const menuItem = [
  {
    img0: vector0,
    img1: vector1,
    title: "dashboard",
    pathname: "dashboard-home",
  },
  {
    img0: chart0,
    img1: chart1,
    title: "explore",
    pathname: "explore",
  },
  {
    img0: add0,
    img1: add1,
    title: "Buy",
    pathname: "buy",
  },
  {
    img0: minus,
    img1: minus1,
    title: "Sell",
    pathname: "sell",
  },
  {
    img0: refresh,
    img1: refresh1,
    title: "Swap",
    pathname: "swap",
  },
  {
    img0: shuffle,
    img1: shuffle1,
    title: "Bridge",
    pathname: "bridge",
  },
  {
    img0: handHoldingMedical,
    img1: handHoldingMedical1,
    title: "Stake",
    pathname: "stake",
  },
  {
    img0: paperPlane,
    img1: paperPlane1,
    title: "Send & Receve",
    pathname: "send",
  },
  {
    img0: fileimport,
    img1: fileimport1,
    title: "import token",
    pathname: "import-token",
  },
];

const Sidebar = ({ show }) => {

  const location = useLocation();

  return (
    <aside className="bg-light-gray h-screen col-span-3 md:sticky md:top-0 left-0 overflow-auto w-[243px]">
      <div className="flex justify-end pr-5 pt-3 lg:hidden ">
        {show ? (
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
        )}
      </div>
      <div className="text-3xl font-semibold text-slate-500 flex justify-center my-[30px]">
     <Link to="/">   <img src={logo} alt="" /></Link>
      </div>
      <nav className="flex flex-col gap-3 border-r-2">
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={`/dashboard/${item.pathname}`}
            className={({ isActive }) =>
              `w-full py-3 rounded pl-6 transition-all ${
                isActive ? "bg-blue-800 text-[#FFFFFF]" : ""
              }`
            }
          >
            <span className="flex gap-3 items-center">
              <img
                src={
                  location.pathname === `/dashboard/${item.pathname}`
                    ? item.img0
                    : item.img1
                }
                alt=""
              />
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
