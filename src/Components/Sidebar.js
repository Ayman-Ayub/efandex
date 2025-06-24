import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
export default function Sidebar() {
  const [drop, setdrop] = useState(false);
const location = useLocation();
const isDashboardActive = location.pathname === "/" || location.pathname === "/dashboard";
  return (
    <>
      <div class=" selector  bg-[#FFF] justify-between w-[266px] md:w-fit sm:w-fit lg:w-fit h-screen">
        <div class=" py-4 flex flex-col   px-3  justify-between ">
          <ul class="space-y-[12.5px]   justify-center ">
            <li onClick={() => setdrop(false)}>
              <NavLink className=" md:hidden  sm:hidden flex items-center text-center justify-center pt-10 gap-2 p-2.5 text-base font-normal text-gray-900 rounded-lg dark:text-white"  >
             
<h1 className="text-[#000000] font-poppins text-center text-[41px] font-bold selector md:hidden  sm:hidden">Efandex</h1>
              </NavLink>
            </li>

             <div className='gap-5 py-4 flex md:hidden sm:hidden items-center w-full justify-center'>
    <div className=' w-[218px] px-2 h-[56px] md:hidden sm:hidden gap-2 shadow-[#0000001a] shadow-md bg-[#F5F5F5] items-center flex '>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#2A2A2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 22L20 20" stroke="#2A2A2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <input type="text" placeholder='Search...' className=' w-[150px] sm:hidden text-base font-poppins font-normal placeholder:text-["#0A1828"] text-["#2A2A2E"] bg-[#F5F5F5] focus:outline-none focus:ring-0 focus:border-none'/>
    </div>
    </div>

            <li onClick={() => setdrop(false)}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                   isDashboardActive
                    ? "flex items-center ml-2   selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2  selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21" fill="none">
  <path d="M1 10.6937C1 8.51972 1 7.43272 1.49324 6.5316C1.98648 5.6305 2.8876 5.07123 4.68983 3.95272L6.58983 2.77353C8.49492 1.59118 9.44749 1 10.5 1C11.5525 1 12.5051 1.59118 14.4102 2.77353L16.3102 3.95271C18.1124 5.07123 19.0135 5.6305 19.5068 6.5316C20 7.43272 20 8.51972 20 10.6937V12.1388C20 15.8445 20 17.6975 18.887 18.8487C17.7741 20 15.9826 20 12.4 20H8.6C5.01732 20 3.22599 20 2.11299 18.8487C1 17.6975 1 15.8445 1 12.1388V10.6937Z" stroke="currentColor" stroke-width="1.5"/>
  <path d="M13.2143 16.3809H7.78574" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#ffffff]  font-poppins text-base font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] font-poppins text-base font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Dashboard</h1>
 

              </NavLink>
            </li>

            <li>
            <NavLink
                 to="/e"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2   selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,216V104a8,8,0,0,0-8-8H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="68" y1="72" x2="96" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="136" x2="108" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="68" y1="176" x2="96" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="180" y1="176" x2="188" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="180" y1="136" x2="188" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
</div>
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Properties</h1>
 

              </NavLink>
            </li>

           
                
            <li onClick={() => setdrop(false)}>
            <NavLink
                to="/a"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2  selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
                <div className="w-7 h-7">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="140" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path ewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M70.4,216a64.1,64.1,0,0,1,115.2,0"   stroke-width="24"/><path d="M204.5,116.6A60.1,60.1,0,0,1,244,140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M167.1,70.2A32,32,0,1,1,204,115" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M52,115A32,32,0,1,1,88.9,70.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M12,140a60.1,60.1,0,0,1,39.5-23.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
</div>
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base  font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">User Managament</h1>
 

              </NavLink>
            </li>
             <li>
            <NavLink
                to="/b"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2  selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
          <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 7.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V7.4C10 7.73137 9.73137 8 9.4 8H3.6C3.26863 8 3 7.73137 3 7.4Z" stroke="currentColor" stroke-width="1.5"/> <path d="M14 20.4V16.6C14 16.2686 14.2686 16 14.6 16H20.4C20.7314 16 21 16.2686 21 16.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z" stroke="currentColor" stroke-width="1.5"/> <path d="M14 12.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V12.4C21 12.7314 20.7314 13 20.4 13H14.6C14.2686 13 14 12.7314 14 12.4Z" stroke="currentColor" stroke-width="1.5"/> <path d="M3 20.4V11.6C3 11.2686 3.26863 11 3.6 11H9.4C9.73137 11 10 11.2686 10 11.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/> </svg>
          </div>
          <h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Bookings</h1>
 

              </NavLink>
            </li>

             <li>
            <NavLink
                to="/c"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2   selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-candle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="4" y="6" width="4" height="5" rx="1" /> <line x1="6" y1="4" x2="6" y2="6" /> <line x1="6" y1="11" x2="6" y2="20" /> <rect x="10" y="14" width="4" height="5" rx="1" /> <line x1="12" y1="4" x2="12" y2="14" /> <line x1="12" y1="19" x2="12" y2="20" /> <rect x="16" y="5" width="4" height="6" rx="1" /> <line x1="18" y1="4" x2="18" y2="5" /> <line x1="18" y1="11" x2="18" y2="20" /> </svg></div>
           <h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Dispute Center</h1>
 

              </NavLink>
            </li>

             <li>
            <NavLink
                to="/d"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2  selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2  selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505 3 3 0 0 0 5.348 0 9.99 9.99 0 0 1 4.335 2.505 3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503 0 .865-.11 1.703-.316 2.504a3 3 0 0 0-2.675 4.629 9.99 9.99 0 0 1-4.335 2.505 3 3 0 0 0-5.348 0 9.99 9.99 0 0 1-4.335-2.505 3 3 0 0 0-2.675-4.63C2.11 13.704 2 12.866 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25 8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524 7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274 7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25 8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </g> </svg>
          </div>
             <h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Settings</h1>
 

              </NavLink>
            </li>
            <li>
            <NavLink
                to="/d"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2   selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#000000] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-[#000000] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
           </div>
             <h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Privacy policy</h1>
 

              </NavLink>
            </li>
              <li>
            <NavLink
                to="/d"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#ffffff] text-base font-normal rounded-lg bg-[#EA4335] "
                    : "flex items-center ml-2 selector gap-3 px-2.5 py-4 text-[#fff] text-base font-normal  rounded-lg bg-[#EA4335] hover:text-[#ffffff]"
                }
              >
             <div className="w-7 h-7">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" id="mainIconPathAttribute"></path> <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" id="mainIconPathAttribute"></path> </svg>
           </div>
             <h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#fff] text-base font-poppins font-normal md:hidden sm:hidden "
                    : " text-[#fff] text-base font-poppins font-normal md:hidden sm:hidden"
                } class=" md:hidden sm:hidden">Logout</h1>
 

              </NavLink>
            </li>
           
          </ul>
          
        </div>
      </div>
    </>
  );
}
