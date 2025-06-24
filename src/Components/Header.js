import React from 'react'
import img1 from "../assets/admin.png"
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { ErrorOutlineOutlined, HelpOutlineOutlined, LiveHelpOutlined, LogoutOutlined, Person, PersonOutlineOutlined } from '@mui/icons-material';
const Header = () => {
  const [drop, setdrop] = useState(false);
  const [profile,setprofile]=useState(false);
  
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const isDashboardActive = location.pathname === "/" || location.pathname === "/dashboard";
   
  const openprofile = async ()=>{
        setprofile(!profile)
    }
  
  return (
    <div className="bg-white sm:px-2  px-5 py-3 flex flex-row justify-between md:justify-between">
    <div className='gap-5 flex md:flex sm:hidden items-center justify-center'>
   <h1 className="text-[#000000] font-poppins text-center text-[41px] font-bold selector hidden md:flex">Efandex</h1>

    </div>
    <div className='flex gap-7 md:justify-end md:items-center  sm:justify-between md:w-full sm:w-full'>
     
      
       <div className='flex gap-7 sm:items-center sm:justify-between sm:w-full'>
         <div className="hidden sm:flex   justify-center items-center" onClick={() => setShowDropdown(!showDropdown)}>
        {showDropdown ? <svg  xmlns="http://www.w3.org/2000/svg" width="20"
  height="20" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"/> </g> </svg>
        :
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 256 256"
>
  <rect width="256" height="256" fill="none" />
  <circle cx="128" cy="64" r="16" fill="#98A2B3"/>
  <circle cx="128" cy="128" r="16" fill="#98A2B3"/>
  <circle cx="128" cy="192" r="16" fill="#98A2B3"/>
</svg>
}
        </div>
       <div  className='sm:hidden cursor-pointer p-[6.25px] justify-center items-center text-center'>
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <path d="M12.0201 2.91C8.71009 2.91 6.02009 5.6 6.02009 8.91V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91C18.0201 5.61 15.3201 2.91 12.0201 2.91Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
       </div>
        <h1 className="text-[#000000] font-poppins text-center text-[28px] font-bold selector hidden sm:flex">Efandex</h1>

       <div className='w-28 h-10 sm:hidden rounded-full bg-[#E4E4E7] items-center text-center justify-center px-[6.25px] py-[5.42px] flex gap-1'>
      <div className='w-[30px] h-[30px]  p-[6.25px] justify-center items-center text-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/> </svg>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <h3 className='text-sm text-[#081F2C] font-normal font-["inter"] leading-5'>EN</h3>
     <div className='w-[1px] h-4 text-[#081F2C]  bg-[#B2BABE] items-center justify-center'></div>
     <h3 className='text-sm font-normal text-[#081F2C] font-["inter"] leading-5'>USD</h3>
    </div>
       </div>
       <div className='flex gap-2 sm:items-center sm:justify-end'>
<div  className='hidden sm:flex cursor-pointer  justify-center items-center text-center'>
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <path d="M12.0201 2.91C8.71009 2.91 6.02009 5.6 6.02009 8.91V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91C18.0201 5.61 15.3201 2.91 12.0201 2.91Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
       </div>
       <div className='flex gap-2 mx-[14px] sm:mx-1 w-[68px] h-[40px]  border-[3px] border-[#000000] rounded-full justify-center items-center '>
       <div onClick={()=>openprofile()} className='rounded-full w-[32px] h-[32px]'>
        <img className="w-[32px] h-[32px] " src={img1}/>
    </div>
        <div className='justify-center item-center cursor-pointer' onClick={()=>openprofile()}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M5.00357 5.83332C4.90958 5.83388 4.8164 5.81548 4.72938 5.7792C4.64237 5.74292 4.56322 5.68946 4.49649 5.62188L0.21126 1.24733C0.144319 1.17955 0.0911866 1.09891 0.0549274 1.01006C0.0186682 0.921216 0 0.82592 0 0.729671C0 0.633422 0.0186682 0.538125 0.0549274 0.449279C0.0911866 0.360432 0.144319 0.279793 0.21126 0.212015C0.345075 0.0762205 0.526092 0 0.714775 0C0.903457 0 1.08447 0.0762205 1.21829 0.212015L5.00357 4.07621L8.78171 0.212015C8.91553 0.0762205 9.09654 0 9.28523 0C9.47391 0 9.65493 0.0762205 9.78874 0.212015C9.85568 0.279793 9.90881 0.360432 9.94507 0.449279C9.98133 0.538125 10 0.633422 10 0.729671C10 0.82592 9.98133 0.921216 9.94507 1.01006C9.90881 1.09891 9.85568 1.17955 9.78874 1.24733L5.50351 5.62188C5.37049 5.75658 5.19094 5.83252 5.00357 5.83332Z" fill="#7E8299"/>
</svg></div>
       </div>
       </div>
       
       </div>
    </div>
   

     

      {profile && (
      <div class={`absolute top-[54px] w-[279px]  cursor-pointer  right-10  sm:mr-9   mr-10 my-4 text-base list-none bg-[#FFF] shadow-[#0000001a] shadow-lg divide-y-0 sm:divide-y rounded-lg  dark:bg-gray-700 divide-gray-600" id="user-dropdown`}>
       <div className='flex gap-2 px-[30px] py-5  items-center' >
       <div className='rounded-full w-[70px] h-[70px]'>
        <img className="w-[70px] h-[70px] " src={img1}/>
    </div>
        <div className='flex flex-col'>
          <h1 className='text-[#181C32] font-["inter"] text-lg font-semibold '>John Doe</h1>
          <p className='text-[#A1A5B7] font-["inter"] text-base font-normal '>Admin</p>
       </div>
      
       </div>
        <ul class="py-2 px-2 " aria-labelledby="user-menu-button">
        
        <li>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center selector gap-3 p-2.5 text-[#178582] text-base font-normal rounded-lg border-2 border-[#178582] border-line "
                    : "flex items-center selector gap-3 p-2.5 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-gray-200 border-dashed"
                }
              >
             
              <PersonOutlineOutlined className={({ isActive }) =>
                  isActive
                    ? "w-[22px] h-[22px] text-[#178582] ":"w-[22px] h-[22px] text-[#0A1828]"}/>
               
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-normal md:hidden sm:hidden"
                }>Profile</h1>
 

              </NavLink>
            </li>
         
            <li>
            <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center selector gap-3 p-2.5 text-[#178582] text-base font-normal rounded-lg border-2 border-[#178582] border-line "
                    : "flex items-center selector gap-3 p-2.5 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-gray-200 border-dashed"
                }
              >
             
              <HelpOutlineOutlined className={({ isActive }) =>
                  isActive
                    ? "w-[22px] h-[22px] text-[#178582] ":"w-[22px] h-[22px] text-[#0A1828]"}/>
               
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-normal md:hidden sm:hidden"
                }>Help</h1>
 

              </NavLink>
            </li>

            <li>
            <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center selector gap-3 p-2.5 text-[#178582] text-base font-normal rounded-lg border-2 border-[#178582] border-line "
                    : "flex items-center selector gap-3 p-2.5 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-gray-200 border-dashed"
                }
              >
             
              <ErrorOutlineOutlined className={({ isActive }) =>
                  isActive
                    ? "w-[22px] h-[22px] text-[#178582] ":"w-[22px] h-[22px] text-[#0A1828]"}/>
               
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-normal md:hidden sm:hidden"
                }>Faqs</h1>
 

              </NavLink>
            </li>
            <li>
            <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center selector gap-3 p-2.5 text-[#178582] text-base font-normal rounded-lg border-2 border-[#178582] border-line "
                    : "flex items-center selector gap-3 p-2.5 text-[#0A1828] text-base font-normal  rounded-lg hover:bg-gray-200 border-dashed"
                }
              >
             
              <LogoutOutlined className={({ isActive }) =>
                  isActive
                    ? "w-[22px] h-[22px] text-[#178582] ":"w-[22px] h-[22px] text-[#0A1828]"}/>
               
<h1 className={({ isActive }) =>
                  isActive
                    ? " text-[#178582] text-base font-normal md:hidden sm:hidden "
                    : " text-[#0A1828] text-base font-normal md:hidden sm:hidden"
                }>Sign Out</h1>
 

              </NavLink>
            </li>
          
        </ul>
       
       
      </div>
      )}


        {/* this is for sm screen */}
              {showDropdown && (
              <div class=" py-4 sm:flex sm:fixed sm:left-0 sm:top-16 sm:flex-col bg-white  px-3  justify-between hidden">
                <ul class="space-y-[12.5px]   justify-center ">
                
                  <li>
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
      
                    </NavLink>
                  </li>
                 
                </ul>
                </div>
              )}
    </div>
  )
}

export default Header