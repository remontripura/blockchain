// import React, { useEffect, useRef, useState } from "react";
// import Container from "../../shared/Container";
// import icon from "../../../assets/icon/logo.png";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { IoMdMenu, IoIosClose } from "react-icons/io";

// const NavItem1 = (
//   <>
//     <NavLink
//       to="/"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } `
//       }
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/Developers"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         }  btn`
//       }
//     >
//       Developers
//     </NavLink>
//     <NavLink
//       to="/ecosystem"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Ecosystem
//     </NavLink>
//     <NavLink
//       to="/commiunity"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Community
//     </NavLink>
//     <NavLink
//       to="/blog"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Blog
//     </NavLink>
//     <NavLink
//       to="/free-biz-home"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Free-Biz
//     </NavLink>
//   </>
// );
// const NavItem2 = (
//   <>
//     <NavLink to="/" className="text-[#000] hover:text-blue-600 ">
//       Home
//     </NavLink>
//     <NavLink to="/Developers" className="text-[#000] hover:text-blue-600 ">
//       Developers
//     </NavLink>
//     <NavLink to="/ecosystem" className="text-[#000] hover:text-blue-600 ">
//       Ecosystem
//     </NavLink>
//     <NavLink to="/commiunity" className="text-[#000] hover:text-blue-600 ">
//       Community
//     </NavLink>
//     <NavLink to="/blog" className="text-[#000] hover:text-blue-600 ">
//       Blog
//     </NavLink>
//     <NavLink to="/free-biz-home" className="text-[#000] hover:text-blue-600 ">
//       Free-Biz
//     </NavLink>
//   </>
// );

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const location = useLocation();
//   useEffect(() => window.scrollTo(0, 10));
//   const handleToggleMenu = () => {
//     setMenu(!menu);
//   };
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMenu(false);
//   }, [location.pathname]);
//   return (
//     <div
//       className={`${
//         isScrolled == true
//           ? "bg-[#2F76DE] duration-500 py-1"
//           : "transition-all duration-500 py-2 bg-[#2F76DE]"
//       } w-full fixed top-0 left-0 z-10`}
//     >
//       <Container>
//         <nav className="w-full flex justify-between items-center relative px-5">
//           <div>
//             <Link to="/">
//               <img className="w-32" src={icon} alt="" />
//             </Link>
//           </div>
//           <div className="lg:flex md:flex hidden">
//             <div className="flex gap-5 text-[16px]">{NavItem1}</div>
//           </div>
//           <div className="">
//             <Link to="/dashboard/dashboard-home">
//               <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
//                 Start Building
//               </button>
//             </Link>
//             <button onClick={handleToggleMenu} className="flex md:hidden">
//               {menu ? "" : <IoMdMenu className="text-[40px] text-[#fff]" />}
//             </button>
//           </div>
//         </nav>
//         <div
//           className={`absolute top-0 ${
//             menu
//               ? "right-0 duration-200 md:hidden block"
//               : "-right-40 duration-200"
//           }`}
//         >
//           <div className=" bg-[#00000014] h-screen sticky overflow-y-auto flex justify-end">
//             <div className=" bg-[#fff]">
//               <div className="flex justify-start mr-5">
//                 <button onClick={handleToggleMenu} className="flex md:hidden">
//                   {menu == true ? (
//                     <IoIosClose className="text-[50px] text-[#000]" />
//                   ) : (
//                     ""
//                   )}
//                 </button>
//               </div>
//               <nav className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
//                 {NavItem2}
//               </nav>
//               <div className="my-4 flex justify-center">
//                 <Link to="/dashboard/dashboard-home">
//                   <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
//                     Start Building
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useRef, useState } from "react";
// import Container from "../../shared/Container";
// import icon from "../../../assets/icon/logo.png";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { IoMdMenu, IoIosClose } from "react-icons/io";

// const NavItem1 = (
//   <>
//     <NavLink
//       to="/"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } `
//       }
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/Developers"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         }  btn`
//       }
//     >
//       Developers
//     </NavLink>
//     <NavLink
//       to="/ecosystem"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Ecosystem
//     </NavLink>
//     <NavLink
//       to="/commiunity"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Community
//     </NavLink>
//     <NavLink
//       to="/blog"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Blog
//     </NavLink>
//     <NavLink
//       to="/free-biz-home"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
//             : "text-[#DDDDDD] hover:text-[#fff]"
//         } btn`
//       }
//     >
//       Free-Biz
//     </NavLink>
//   </>
// );
// const NavItem2 = (
//   <>
//     <NavLink to="/" className="text-[#000] hover:text-blue-600 ">
//       Home
//     </NavLink>
//     <NavLink to="/Developers" className="text-[#000] hover:text-blue-600 ">
//       Developers
//     </NavLink>
//     <NavLink to="/ecosystem" className="text-[#000] hover:text-blue-600 ">
//       Ecosystem
//     </NavLink>
//     <NavLink to="/commiunity" className="text-[#000] hover:text-blue-600 ">
//       Community
//     </NavLink>
//     <NavLink to="/blog" className="text-[#000] hover:text-blue-600 ">
//       Blog
//     </NavLink>
//     <NavLink to="/free-biz-home" className="text-[#000] hover:text-blue-600 ">
//       Free-Biz
//     </NavLink>
//   </>
// );

// const Navbar = () => {
//   const [menu, setMenu] = useState(true);
//   const location = useLocation();
//   useEffect(() => window.scrollTo(0, 10));
//   const handleToggleMenu = () => {
//     setMenu(!menu);
//   };
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMenu(false);
//   }, [location.pathname]);
//   return (
//     <div
//       className={`${
//         isScrolled == true
//           ? "bg-[#2F76DE] duration-500 py-1"
//           : "transition-all duration-500 py-2 bg-[#2F76DE]"
//       } w-full fixed top-0 left-0 z-[1]`}
//     >
//       <Container>
//         <nav className="w-full flex justify-between items-center relative px-5">
//           <div>
//             <Link to="/">
//               <img className="w-32" src={icon} alt="" />
//             </Link>
//           </div>
//           <div className="lg:flex md:flex hidden">
//             <div className="flex gap-5 text-[16px]">{NavItem1}</div>
//           </div>
//           <div className="">
//             <Link to="/dashboard/dashboard-home">
//               <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
//                 Start Building
//               </button>
//             </Link>
//             <button onClick={handleToggleMenu} className="flex md:hidden">
//               {menu ? (
//                 <IoIosClose className="text-[50px] text-[#000]" />
//               ) : (
//                 <IoMdMenu className="text-[40px] text-[#fff]" />
//               )}
//             </button>
//           </div>
//         </nav>
//         <div
//           className={`absolute  ${
//             menu
//               ? "top-14 right-0 left-0 duration-1000 md:hidden block"
//               : "-top-96 duration-1000 right-0 left-0 -z-10"
//           }`}
//         >
//           <div className=" bg-[#00000014] w-full sticky overflow-y-auto ">
//             <div className="">
//               <button onClick={handleToggleMenu} className="flex md:hidden">
//                 {menu == true ? "" : ""}
//               </button>
//             </div>
//             <nav className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
//               {NavItem2}
//             </nav>
//             <div className="my-4 flex justify-center">
//               <Link to="/dashboard/dashboard-home">
//                 <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
//                   Start Building
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import Container from "../../shared/Container";
import icon from "../../../assets/icon/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavItem1 = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } `
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Developers"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }  btn`
      }
    >
      Developers
    </NavLink>
    <NavLink
      to="/ecosystem"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Ecosystem
    </NavLink>
    <NavLink
      to="/commiunity"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Community
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Blog
    </NavLink>
    <NavLink
      to="/free-biz-home"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Free-Biz
    </NavLink>
  </>
);
const NavItem2 = (
  <>
    <NavLink to="/" className="text-[#000] hover:text-blue-600 ">
      Home
    </NavLink>
    <NavLink to="/Developers" className="text-[#000] hover:text-blue-600 ">
      Developers
    </NavLink>
    <NavLink to="/ecosystem" className="text-[#000] hover:text-blue-600 ">
      Ecosystem
    </NavLink>
    <NavLink to="/commiunity" className="text-[#000] hover:text-blue-600 ">
      Community
    </NavLink>
    <NavLink to="/blog" className="text-[#000] hover:text-blue-600 ">
      Blog
    </NavLink>
    <NavLink to="/free-biz-home" className="text-[#000] hover:text-blue-600 ">
      Free-Biz
    </NavLink>
  </>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 10));
  const handleToggleMenu = () => {
    setMenu(!menu);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);
  return (
    <div
      className={`${
        isScrolled == true
          ? "bg-[#2F76DE] duration-500 py-1"
          : "transition-all duration-500 py-2 bg-[#2F76DE]"
      } w-full fixed z-[999]`}
    >
      <Container>
        <div className="px-3 flex items-center justify-between relative ">
          <Link to="/">
            <img className="w-32" src={icon} alt="" />
          </Link>
          <div
            className={`flex flex-col items-center gap-5 bg-[#fff] absolute  right-0 left-0 md:hidden ${
              menu
                ? "-top-3 py-8 transition-all  duration-300 ease-in "
                : "-top-80  transition-all duration-300 ease-in "
            }`}
          >
            <div className="w-full flex justify-end">
              <button
                onClick={handleToggleMenu}
                className=" md:hidden flex justify-end  mx-10"
              >
                {menu ? (
                  <IoIosClose className="text-[50px] text-[#000] size-10" />
                ) : (
                  ""
                )}
              </button>
            </div>
            {NavItem2}
          </div>
          <div className="md:flex gap-5 text-[16px] hidden">{NavItem1}</div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu} className="flex md:hidden">
              {menu ? (
                ""
              ) : (
                <IoMdMenu className="text-[40px] text-[#fff] size-10" />
              )}
            </button>
          </div>
          <div className="md:block hidden">
            <div className="my-4 flex justify-center">
              <Link to="/dashboard/dashboard-home">
                <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
                  Start Building
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
