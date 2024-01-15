import React from "react";
import { motion } from "framer-motion";
import { IoBatteryFull } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { getRealTime } from "./utils/helperFunctions";

const NavBar = ({ shouldShowTime, whiteTheme }) => {
    return (
        <div className="flex justify-center items-center h-[54px] w-[95%] ml-[2%] mt-[5px] gap-[4px]">
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="h-[30px] w-[32%]"
            >
                {shouldShowTime && (
                    <p
                        className={`text-center mt-1 ${whiteTheme ? "text-white" : "text-black"
                            }`}
                    >
                        {" "}
                        {getRealTime()?.time || "00:00"}{" "}
                    </p>
                )}
            </motion.div>
            <div className="h-[30px] w-[35%] bg-black rounded-2xl"></div>
            <div className="h-[30px] w-[30%] ml-2 flex justify-center items-center gap-2">
                <MdOutlineSignalCellularAlt
                    className={`${whiteTheme ? "text-white" : "text-black"}`}
                    size={20}
                />
                <FaWifi
                    className={`${whiteTheme ? "text-white" : "text-black"}`}
                    size={20}
                />
                <IoBatteryFull
                    className={`${whiteTheme ? "text-white" : "text-black"}`}
                    size={23}
                />
            </div>
        </div>
    );
};

export default NavBar;
