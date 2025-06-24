import React from 'react'
import img1 from "../assets/admin.png"
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ErrorOutlineOutlined, HelpOutlineOutlined, LiveHelpOutlined, LogoutOutlined, Person, PersonOutlineOutlined } from '@mui/icons-material';
const Header = () => {
  const [isevent,setisevent]=useState(false);
  const [profile,setprofile]=useState(false);
  const [notification,setnotification]=useState(false);
  const openprofile = async ()=>{
        setprofile(!profile)
    }
  
  return (
    <div className="bg-white   px-5 py-3 flex flex-row justify-between md:justify-between">
    <div className='gap-5 flex md:flex sm:hidden items-center justify-center'>
   <h1 className="text-[#000000] font-poppins text-center text-[41px] font-bold selector hidden md:flex">Efandex</h1>

    </div>
    <div className='flex gap-7 md:justify-end md:items-center  sm:justify-between md:w-full sm:w-full'>
     
      
       <div className='flex gap-7 '>
       <div  className=' cursor-pointer p-[6.25px] justify-center items-center text-center'>
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <path d="M12.0201 2.91C8.71009 2.91 6.02009 5.6 6.02009 8.91V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91C18.0201 5.61 15.3201 2.91 12.0201 2.91Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
       </div>
       <div className='w-28 h-10 rounded-full bg-[#E4E4E7] items-center text-center justify-center px-[6.25px] py-[5.42px] flex gap-1'>
      <div className='w-[30px] h-[30px]  p-[6.25px] justify-center items-center text-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/> </svg>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <h3 className='text-sm text-[#081F2C] font-normal font-["inter"] leading-5'>EN</h3>
     <div className='w-[1px] h-4 text-[#081F2C]  bg-[#B2BABE] items-center justify-center'></div>
     <h3 className='text-sm font-normal text-[#081F2C] font-["inter"] leading-5'>USD</h3>
    </div>
       </div>

       <div className='flex gap-2 mx-[14px] w-[68px] h-[40px]  border-[3px] border-[#000000] rounded-full justify-center items-center '>
       <div onClick={()=>openprofile()} className='rounded-full w-[32px] h-[32px]'>
        <img className="w-[32px] h-[32px] " src={img1}/>
    </div>
        <div className='justify-center item-center cursor-pointer' onClick={()=>openprofile()}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M5.00357 5.83332C4.90958 5.83388 4.8164 5.81548 4.72938 5.7792C4.64237 5.74292 4.56322 5.68946 4.49649 5.62188L0.21126 1.24733C0.144319 1.17955 0.0911866 1.09891 0.0549274 1.01006C0.0186682 0.921216 0 0.82592 0 0.729671C0 0.633422 0.0186682 0.538125 0.0549274 0.449279C0.0911866 0.360432 0.144319 0.279793 0.21126 0.212015C0.345075 0.0762205 0.526092 0 0.714775 0C0.903457 0 1.08447 0.0762205 1.21829 0.212015L5.00357 4.07621L8.78171 0.212015C8.91553 0.0762205 9.09654 0 9.28523 0C9.47391 0 9.65493 0.0762205 9.78874 0.212015C9.85568 0.279793 9.90881 0.360432 9.94507 0.449279C9.98133 0.538125 10 0.633422 10 0.729671C10 0.82592 9.98133 0.921216 9.94507 1.01006C9.90881 1.09891 9.85568 1.17955 9.78874 1.24733L5.50351 5.62188C5.37049 5.75658 5.19094 5.83252 5.00357 5.83332Z" fill="#7E8299"/>
</svg></div>
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
    </div>
  )
}

export default Header