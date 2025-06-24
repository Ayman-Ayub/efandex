import React from 'react'
import img1 from "../assets/admin.png"
import img2 from "../assets/admin.png"
import img3 from "../assets/admin.png"
import img4 from "../assets/admin.png"
import { ArrowForward, ArrowRight, DeleteOutline, DriveFileRenameOutline, DriveFileRenameOutlineOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, MoreVertOutlined } from '@mui/icons-material';
import { useState } from 'react'



const staticdata = [
        {
          id: 1,
          name:"Sophia Gregory",
          status:<div className='text-[#28c76f] py-2 font-["Inter"] text-xs font-semibold px-2 bg-[#28c76f1f] flex items-center justify-center gap-1 rounded-full w-fit'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 512 512"
    fill="#28c76f"
  >
    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
  </svg>
  <h1>Completed</h1>
</div>,
 price: "$633.00",
          capacity:  "60 (Seated)",
           duration: "24 May - 8 May 2024",
           

        },
        {
          id: 1,
          name:"Jack Paul",
          status:<div className='text-[#F9A221] py-2 font-["Inter"] text-xs font-semibold px-2 bg-[#DCB21E33] flex items-center justify-center rounded-full w-fit'>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 16 16"
  fill="#F9A221"
>
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
</svg>
<h1>In Progress</h1>
</div>,
 price: "$633.00",
          capacity:  "60 (Seated)",
           duration: "24 May - 8 May 2024",
           

        },
         {
          id: 1,
          name:"Mr Aalexandar",
         status:<div className='text-[#EA4335] py-2 font-["Inter"] text-xs font-semibold pl-2 pr-4 bg-[#EA433533] flex items-center justify-center rounded-full w-fit'>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 16 16"
  fill="#EA4335"
>
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
</svg>
 <h1>Cancelled</h1>
</div>,
 price: "$633.00",
          capacity:  "60 (Seated)",
           duration: "24 May - 8 May 2024",
           

        },
         {
          id: 1,
          name:"Arnold Archer",
         status:<div className='text-[#28c76f] py-2 font-["Inter"] text-xs font-semibold px-2 bg-[#28c76f1f] flex items-center justify-center gap-1 rounded-full w-fit'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 512 512"
    fill="#28c76f"
  >
    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
  </svg>
  <h1>Completed</h1>
</div>,
  price: "$633.00",
          capacity:  "60 (Seated)",
           duration: "24 May - 8 May 2024",
           

        },
           
      ];
const Dashboardsection2 = () => {
    const [isevent,setisevent]=useState(false);
  const [addteacher,setaddteacher]=useState(false);
  const openteacher = async ()=>{
        setaddteacher(!addteacher)
    }
    const event = async ()=>{
        setisevent(!isevent)
    }
  return (
    <div className='mx-[17px] my-[18px] bg-[#fff] rounded-xl'>
    <div className='flex flex-row sm:flex sm:flex-col sm:gap-3 sm:items-start justify-between items-center px-[19px] py-[19px]'>
      <h1 className='font-poppins text-[#101828] text-lg font-medium leading-7'>Recent Bookings</h1>
    <div className='flex flex-row items-center gap-2 md:hidden'>
    <div className='rounded-lg px-4 h-10 w-[427px] sm:w-[280px] shadow-[#0000001a] shadow-md bg-[#F2F2F2] items-center justify-between flex '>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#898E95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 22L20 20" stroke="#898E95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <input type="text" placeholder='Search here...' className='mx-2 my-2  text-sm font-["Inter"] font-normal text-["898e95"] bg-[#F2F2F2] focus:outline-none focus:ring-0 focus:border-none'/>
   <div className='bg-[#ECECEC] sm:hidden p-1 rounded-md flex gap-2 justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#898E95" class="bi bi-command" viewBox="0 0 16 16"> <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z"/> </svg>
    <h className="font-poppins font-normal text-sm text-[#898e95]">F</h>
   </div>
    </div> 
   
    </div>
    <div className='flex gap-3 sm:gap-2 items-center'>
    <div onClick={()=>openteacher()} className='bg-[#fff] border-2 border-[#D0D5DD] rounded-[8px] cursor-pointer justify-center items-center flex flex-row gap-3  h-[45px] w-[118px]'>
    
<h1 className='text-[#000] font-["Gilroy"] text-sm font-semibold'>Today</h1>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16"> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/> <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/> </svg>

    </div>
     <div onClick={()=>openteacher()} className='bg-[#000000] border-2 border-[#000] rounded-[8px] cursor-pointer justify-center items-center flex flex-row gap-3  h-[45px] w-[118px]'>
    
<h1 className='text-[#fff] font-["Gilroy"] text-sm font-semibold'>Export</h1>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-send" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/> </svg>
    </div>
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
    </div>
    </div>
    <div class="  my-[19px]  ">
    
    <div class="overflow-x-auto     font-lexend   my-5 font-dm ">
          <table class="font-dm w-full text-sm text-left text-gray-500  bg-white border ">
            <thead class=" font-['Inter']  text-xs  uppercase bg-[#EAECF0] font-normal text-[#818181]  rounded-t-xl  border-b">
              <tr className="text-center">
                <th scope="col" className='pl-[30px] py-[13px] sm:w-40'>
                <div className="flex gap-2 items-center">
                 <h1>Name</h1>
                 </div>
                </th>
                <th scope="col">
                <div className="flex gap-2 items-center sm:w-36">
                 <h1>Status</h1>
                 </div>
                </th>
                <th scope="col">
                <div className="flex gap-2 items-center sm:w-36" >
                 <h1>Price</h1>
                </div>
                </th>
                <th scope="col" >
                <div className="flex gap-2 items-center sm:w-36">
                 <h1>Capacity</h1>
                 </div>
                </th>
                <th scope="col" >
                <div className="flex gap-1 items-center sm:w-36 ">
                 <h1>Duration</h1>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/> </svg>
                 </div>
                  </th>
                <th scope="col" >
                <div className="flex gap-2 items-center justify-center sm:justify-start sm:w-40">
                 <h1>Actions</h1>
                 </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {staticdata.map((val, ind) => (
                <tr class="font-['Inter'] h-[72px] hover:bg-[#f6f6f6] border-b justify-between items-center  py-4 font-normal text-xs text-[#667085]">
                  <th
                    scope="row"
                    className="pl-[30px] py-[13px] sm:w-[200px] cursor-pointer items-center text-sm font-['Inter'] font-medium whitespace-nowrap text-[#101828]"
                  >
                  {val.name}
                  </th>
                  <td className=" cursor-pointer ">
                    <div className="flex gap-2 items-center text-[#667085]">
                     
                     {val.status}
                    </div>
                  </td>
                  <td class=" cursor-pointer ">
                    {val.price}
                  </td>
                  <td class=" cursor-pointer ">
                  {val.capacity}
                  </td>
                 
                  <td class="items-center">
                   {val.duration}  </td>
                  <td>
                    <div className=" items-center justify-center sm:justify-start flex gap-2 sm:gap-1 cursor-pointer">
                      <p className='text-[#000000] font-["Inter"] font-medium text-xs'>View Booking Details </p>
                   <svg xmlns="http://www.w3.org/2000/svg"  className='text-[#000] w-4 h-4' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            </div>
           
            <div className='mx-[18px]   pb-[38px] flex flex-row justify-between items-center'>
                            <div className='w-[88px] h-[36px] bg-[#Ffffff] border-[#D0D5DD] rounded-lg border-2 items-center  text-center justify-center flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> </svg>
                          <h1 className='text-[#344054] font-["Inter"] font-medium text-sm'>Previous</h1>
                </div>
                  <div className='flex'>
                  <div className='flex gap-4 sm:hidden'>
                   <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#000] text-[15px] font-["Inter"] font-bold py-[1px]'>1</h1></div>
                    <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>2</h1></div>
                   <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>3</h1></div>
                   <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>...</h1></div>
                     <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>8</h1></div>
                   <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>9</h1></div>
                   <div className='w-[23px] h-[23px]  text-center justify-center '>
                    <h1 className='text-[#667085] text-[15px] font-["Inter"] font-bold py-[1px]'>10</h1></div>
                  </div>
                   
                   
                </div>

                <div className='w-[88px] h-[36px] bg-[#Ffffff] rounded-lg border-2 border-[#D0D5DD] items-center  text-center justify-center flex'>
                  <h1 className='text-[#344054] font-["Inter"] font-medium text-sm'>Next</h1>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg></div>
            </div>
            
            

     
    </div>
  )
}

export default Dashboardsection2