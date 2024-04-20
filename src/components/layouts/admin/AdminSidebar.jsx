import { Link, NavLink, useLocation } from "react-router-dom";
import vector0 from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector1 from "../../../assets/icon/dashboard-icon/vector1.svg";
import chart0 from "../../../assets/icon/dashboard-icon/chart0.svg";
import chart1 from "../../../assets/icon/dashboard-icon/chart1.svg";
import icon from "../../../assets/icon/logo.png";
import { useEffect } from "react";

const menuItem = [
  {
    img0: chart0,
    img1: chart1,
    title: "All blog",
    pathname: "all-blog",
  },
  {
    img0: vector0,
    img1: vector1,
    title: "Add-Blog",
    pathname: "blog-post",
  },
  {
    img0: vector0,
    img1: vector1,
    title: "Add-Category",
    pathname: "add-category",
  },
  {
    img0: vector0,
    img1: vector1,
    title: "Home",
    pathname: "/",
  },
 
];

const Sidebar = ({ show, setShow }) => {
  const location = useLocation();

  const handleToggle = () => {
    setShow(!show);
  };
  useEffect(() => {
    setShow(false);
  }, [location.pathname]);
  return (
    <aside
      className={`bg-[#aaaaaa] h-screen  col-span-3 top-0 overflow-auto`}
    >
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 md:hidden right-0"
          onClick={handleToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="flex justify-center font-semibold text-[20px] md:my-12 my-4">
        <Link to="/">
          {" "}
          <img src={icon} alt="" />
        </Link>
      </div>
      <nav className="flex flex-col px-3">
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={item.pathname}
            className={({ isActive }) =>
              `w-full py-3 pl-2 transition-all border-t-2 pr-5 ${
                isActive ? " text-[#4f4cf4] font-semibold" : ""
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
