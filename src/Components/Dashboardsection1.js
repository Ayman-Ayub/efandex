import React from 'react'
import img from "../assets/Vector (3).svg"
import img1 from "../assets/graph1.svg"
import img2 from "../assets/graph2.svg"
import img3 from "../assets/graph3.svg"
const dataobject = [{ ind: 1,
    icon: <div className='bg-[#7367f01f] w-[46px] h-[46px] rounded-full align-middle text-center justify-center items-center'><h1 className='text-center py-[14px] justify-center items-center text-[#7466F0] font-["Lexend"] text-sm font-medium'>KWD</h1></div>,
  name: "Active Users", number: "3632", data: <div className='flex flex-row gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 2.92432H8.61572V0.924316H12.6157H13.6157V1.92432V5.92432H11.6157V4.50687L8.31796 7.80462L7.61086 8.51173L6.90375 7.80462L4.79451 5.69539L1.41422 9.0757L0 7.66149L4.0874 3.57407L4.79451 2.86696L5.50162 3.57407L7.61086 5.6833L10.3698 2.92432Z" fill="#50CD89"/>
</svg> <p className='text-[#50CD89] font-["Inter"] text-sm font-extrabold'>7.2%</p></div>,
map:<div className='flex flex-col '><img src={img1}/></div> }, 
  { ind: 2, icon:<div className='bg-[#7367f01f] w-[46px] h-[46px] rounded-full align-middle text-center justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <circle cx="23" cy="23" r="23" fill="#FF9F43" fill-opacity="0.12"/>
  <path d="M12.0676 21.3402L15.1726 22.3394V26.2887C15.1726 27.383 15.8379 28.3347 16.8138 28.6677L19.076 29.3814C20.4067 29.8097 21.7374 30 23.0681 30C24.3988 30 25.7738 29.8097 27.1045 29.3814L29.3223 28.6677C30.2982 28.3347 30.9635 27.383 30.9635 26.2887V22.2918L33.8911 21.3402C34.5564 21.1499 35 20.4837 35 19.77C35 19.0087 34.5564 18.3902 33.8911 18.1998L24.6649 15.2498C23.556 14.9167 22.4027 14.9167 21.3382 15.2498L12.112 18.1998C11.4466 18.3902 11.003 19.0563 11.003 19.77C10.9587 20.5313 11.4023 21.1499 12.0676 21.3402ZM29.1893 26.2887C29.1893 26.5741 29.0562 26.7645 28.7901 26.8596L26.5722 27.5734C24.2657 28.2871 21.8261 28.2871 19.5639 27.5734L17.3017 26.8596C17.0799 26.7645 16.9025 26.5741 16.9025 26.2887V22.9104L21.2938 24.2902C21.8261 24.4806 22.4027 24.5282 22.9793 24.5282C23.556 24.5282 24.0883 24.433 24.6649 24.2902L29.2336 22.8628V26.2887H29.1893ZM21.8261 17.0579C22.5801 16.82 23.3786 16.82 24.177 17.0579L32.7378 19.77L24.177 22.4822C23.4229 22.7201 22.6245 22.7201 21.8261 22.4822L13.2209 19.77L21.8261 17.0579Z" fill="#FF9920" stroke="#FF9920" stroke-width="0.4"/>
</svg></div>,
name: "Total Properties", number: "10k+", data: <div className='flex flex-row gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 2.92432H8.61572V0.924316H12.6157H13.6157V1.92432V5.92432H11.6157V4.50687L8.31796 7.80462L7.61086 8.51173L6.90375 7.80462L4.79451 5.69539L1.41422 9.0757L0 7.66149L4.0874 3.57407L4.79451 2.86696L5.50162 3.57407L7.61086 5.6833L10.3698 2.92432Z" fill="#50CD89"/>
</svg> <p className='text-[#50CD89] font-["Inter"] text-sm font-extrabold'>7.2%</p></div>,
map:<div className='flex flex-col '><img src={img2}/></div>  },
 { ind: 1,
    icon: <div className='bg-[#1785821f]  w-[46px] h-[46px] rounded-full align-middle text-center justify-center items-center'><div className='px-[13px] py-[11px]'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
    <path d="M2.51662 4.6393L5.26849 5.85053C4.72292 6.65688 4.43813 7.58332 4.43813 8.55437C4.43813 11.2102 6.59639 13.3925 9.27621 13.3925C11.956 13.3925 14.1143 11.2342 14.1143 8.55437C14.1143 7.60391 13.8295 6.65688 13.3079 5.87455L15.727 4.73537V9.3367L14.9927 10.9014C14.9447 11.0215 14.9447 11.1381 15.0167 11.2342C15.0888 11.3303 15.2054 11.3989 15.3255 11.3989H16.7255C16.8456 11.3989 16.9622 11.3509 17.0103 11.2342C17.0823 11.1381 17.0823 11.0215 17.0343 10.9014L16.3927 9.3367V4.42656C16.3927 4.23784 16.3686 4.09373 16.0358 3.95304C15.9637 3.92903 9.44091 1.03647 9.44091 1.03647C9.34827 0.988431 9.25562 0.988431 9.15955 1.03304L2.51662 3.97706C2.39995 4.0251 2.30388 4.16578 2.30388 4.3099C2.30388 4.45058 2.37594 4.57067 2.51662 4.6393ZM13.3834 8.55437C13.3834 10.8327 11.534 12.6822 9.25562 12.6822C6.97726 12.6822 5.12781 10.8327 5.12781 8.55437C5.12781 7.67597 5.4126 6.8456 5.91014 6.13533L9.13553 7.58332C9.18357 7.60734 9.2316 7.60734 9.27621 7.60734C9.32425 7.60734 9.37228 7.60734 9.41689 7.58332L12.5942 6.15935C13.1227 6.86962 13.3834 7.69999 13.3834 8.55437ZM15.8745 10.6886L16.0392 10.3318L16.1799 10.6886H15.8745ZM9.30366 1.74674L15.0682 4.3099L9.30366 6.87305L3.53913 4.3099L9.30366 1.74674Z" fill="#178582" stroke="#178582" stroke-width="0.4"/>
    <path d="M9.39631 14.2469C4.77096 14.2469 1 18.0178 1 22.6432C1 22.8319 1.1647 23 1.35685 23H17.4392C17.6279 23 17.796 22.8353 17.796 22.6432C17.796 18.0213 14.0217 14.2469 9.39631 14.2469ZM1.73429 22.2898C1.92301 18.21 5.29251 14.9606 9.42033 14.9606C13.5481 14.9606 16.8936 18.234 17.0823 22.2898H1.73429Z" fill="#178582" stroke="#178582" stroke-width="0.8"/>
  </svg></div></div>,
  name: "Total Revenue", number: "$900K", data: <div className='flex flex-row gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#F23985"/>
</svg> <p className='text-[#F23985] font-["Inter"] text-sm font-extrabold'>7.2%</p></div> ,
map:<div className='flex flex-col justify-end'><img src={img3}/></div>},
  ];
const Dashboardsection1 = () => {
  return (
    <div className='mx-[36px] md:mx-2 my-[18px]'>
 <div className="grid px-[18px] py-[24px] justify-between sm:items-center sm:justify-center grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6  rounded-md  md:gap-5  ">
 {dataobject.map((val, ind) => (
              <div
                 key={ind}
                className=" flex flex-row rounded-lg bg-[#fff]  w-[346px] h-[178px] xl:w-full md:w-full sm:w-full sm:items-center sm:justify-center   shadow-md  "
              >
                 <div className='w-[346px] px-4'>
                 
                  <div className="px-2 py-4 w-full">
                    <div className='w-full flex flex-row justify-between'>
                 <div className="w-full"> 
  <div className="border border-[#E1E3EA] w-[99px] h-[29px] px-2 flex items-center justify-between gap-2 rounded-[5px]">
  <h1 className='text-[#344054] font-["Inter"] text-[10px] font-semibold'>
    Last Month
  </h1>
  <div className="flex items-center justify-center h-full">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
   </div>
</div>



</div>
<div className='flex flex-row gap-1 justify-center text-center items-center'>
  <img className='w-[13px] h-[13px]' src={img}/>
   <p className='text-[#24BC73] font-poppins text-sm font-normal'>30.5626%</p></div>

</div>

                  <div className='w-full flex justify-between  mt-[26px] sm:mt-[20px]'>
                   <div className='flex flex-col gap-1 '>
                    <h1 className=" text-base sm:text-sm font-poppins justify-start items-start text-start  font-medium   text-[#042124]">
                     {val.name}
                    </h1>
                   <div className='flex flex-col gap-2'>
                    <p class="text-[#000000]  justify-start items-start text-start font-['Inter'] text-[26px] sm:text-[20px] font-bold  ">
                      {val.number}
                    </p>
                     <p class="text-[#6E6B7B] sm:text-xs font-['Inter'] text-sm font-medium  ">
                      Overall last month
                    </p>
                   
                    </div>
                  </div>
                  <div className='mt-2 flex justify-end'>
                    {val.map}
                  </div>
                  </div>
                </div>
                </div>
                </div>
             
              ))}
        </div>
    </div>
  )
}

export default Dashboardsection1