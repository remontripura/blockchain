import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useForm } from "react-hook-form";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const monthName = monthNames[todayMonth];
  const todayYear = today.getFullYear();

  const handleToggle = () => {
    setShow(!show);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="grid grid-cols-12 overflow-hidden ">
        <div className={`col-span-3 md:block hidden bg-white z-30 sticky overflow-y-auto`}>
          <AdminSidebar setShow={setShow} show={show} />
        </div>
        <div
          className={`col-span-6 ${
            show !== true
              ? " top-0 -left-40 duration-200 transition-all ease-in"
              : "left-0  duration-200 transition-all ease-in w-1/2"
          } bg-[#fff] z-30  ease-in fixed md:hidden `}
        >
          <AdminSidebar setShow={setShow} show={show} />
        </div>

        <div
          className={`md:col-span-9 col-span-12 md:sticky top-0 left-0 overflow-y-auto `}
        >
          <div className="py-3 shadow my-2 rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mx-2">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="md:block hidden text-[20px] font-semibold">
                    Dashboard
                  </h3>
                  <h3 className="md:hidden block" onClick={handleToggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  </h3>
                </div>
                <div className="flex-1 md:text-center text-start">
                  <p className="font-semibold">{`${todayDate} ${monthName} ${todayYear}`}</p>
                </div>
                <div className="flex-1 flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                  <button
                    className="bg-red-500 px-6 py-2 rounded font-semibold text-[#fff] ml-5"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
