import React from "react";
import { motion } from "framer-motion";
import { Apps, BottomAppBar } from "../utils/constants";

const HomeScreen = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="h-[100%] flex flex-col justify-between items-center gap-[4px]"
        >
            {/* Apps */}
            <div className="flex flex-wrap w-[90%] gap-5 items-center">
                {Apps.map((item) => {
                    return (
                        <div
                            className="flex flex-col justify-center items-center"
                            key={item.key}
                        >
                            <div
                                className="w-[45px] h-[45px] rounded-xl overflow-hidden cursor-pointer "
                                onClick={item.onClick}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="object-cover w-full  h-full"
                                />
                            </div>
                            {/* Title */}
                            <p className="text-white text-center text-[11px] mt-[2px]">
                                {item.title}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Apps */}
            <div className="flex flex-col gap-4 h-fit justify-center items-center">
                <div className="w-[100%] h-[60px] mb-[3px] flex gap-5 justify-center items-center rounded-full">
                    {BottomAppBar.map((item) => {
                        return (
                            <div
                                key={item.key}
                                className="w-[45px] h-[45px] rounded-xl overflow-hidden cursor-pointer "
                                onClick={item.onClick}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="w-[35%] h-[4px] mb-[3px] justify-center items-center bg-white rounded-sm"></div>
            </div>
        </motion.div>
    );
};

export default HomeScreen;
