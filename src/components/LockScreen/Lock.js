import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DateTime from "./DateTime";
import SlideToUnlock from "./SlideToUnlock";

const LockScreen = ({ setShouldShowLockScreen }) => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="h-[100%] flex flex-col justify-between"
        >
            <div></div>
            <div>
                <DateTime />
            </div>
            <div className="flex flex-col gap-4 h-fit justify-center items-center">
                {width > 700 ? (
                    <SlideToUnlock setShouldShowLockScreen={setShouldShowLockScreen} />
                ) : (
                    <div className="w-[80%] h-[40px] mb-[3px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl" onClick={() => setShouldShowLockScreen(false)}>
                        <p className="text-white text-lg text-center mr-3">
                            Click To Unlock
                        </p>
                    </div>
                )}

                <div className="w-[35%] h-[4px] mb-[3px] justify-center items-center bg-white rounded-sm"></div>
            </div>
        </motion.div>
    );
};

export default LockScreen;
