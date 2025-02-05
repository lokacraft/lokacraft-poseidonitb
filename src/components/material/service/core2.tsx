import React from 'react'
import { GoPencil } from "react-icons/go";
import { MdElectricalServices } from "react-icons/md";
import { MdOutlinePlumbing } from "react-icons/md";
import { TbSofa } from "react-icons/tb";
import { LuAirVent } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { BsBricks } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";

function Core2() {
  return (
    
      <div id='partner' className='mt-[60px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <div className="w-[90%] mx-auto flex flex-col space-y-3 items-center z-20  leading-[50px]">
            <span className="text-4xl font-extrabold">Lorem, ipsum dolor.</span>
            
      </div>
      <div className="w-full lg:w-[80%] mx-auto mt-[80px] lg:rounded-2xl flex items-center justify-center flex-wrap py-5">
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <GoPencil className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quia assumenda voluptatum.
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <MdElectricalServices className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates atque aliquam?
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <MdOutlinePlumbing className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit excepturi ad repellendus.
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <TbSofa className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum consequatur placeat?
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <LuAirVent className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quis nesciunt aliquid.
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <GrUserWorker className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sunt cupiditate incidunt?
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <BsBricks className='text-3xl text-white' />

            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eius eligendi cum!
            </p>
        </div>
        {/* card */}
        <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
            <div className='bg-[#012169] rounded-full w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                <MdOutlineManageAccounts className='text-3xl text-white' />
            </div>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-sm font-light text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat facilis temporibus?
            </p>
        </div>
      </div>
</div>
  )
}

export default Core2