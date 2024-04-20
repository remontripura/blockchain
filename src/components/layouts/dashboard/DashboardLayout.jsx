import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../../dashboardComponents/dashboard/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="max-w-[1440px] mx-auto flex justify-start">
      <div className=" relative">
        <div className="w-full lg:block hidden">
          <Sidebar />
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <div
            className={`${
              show == true ? "left-0 top-0" : "-left-[243px] top-0"
            } w-[243px] h-full bg-[#fff] absolute z-50 duration-150 rounded-r-md`}
          >
            <Sidebar show={show} />
          </div>
        </div>
      </div>
      <div className="w-[1090px]">
        <Header show={show} setShow={setShow} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
