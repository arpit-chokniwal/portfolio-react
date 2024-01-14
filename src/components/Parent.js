import React from 'react'
import { IoBatteryFull } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";


const Parent = () => {
    return (
        <div className='flex w-[305px] h-[75vh] max-h-[610px] border-[10px] bg-red-400 border-black rounded-[50px] justify-center items-start'>
            {/* top bar */}
            <div className='flex justify-center items-center h-[54px] w-[90%] mt-[5px] gap-[4px]'>
                {/* Camera */}
                <div className='h-[30px] w-[30%]'></div>
                <div className='h-[30px] w-[35%] bg-black rounded-2xl'></div>
                <div className='h-[30px] w-[30%] ml-2 flex justify-center items-center gap-2'>
                    <MdOutlineSignalCellularAlt className='text-white' size={20} />
                    <FaWifi className='text-white' size={20} />
                    <IoBatteryFull className='text-white' size={23} />
                </div>
            </div>
        </div>
    )
}

export default Parent