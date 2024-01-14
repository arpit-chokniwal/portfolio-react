import React from "react";
import { motion } from "framer-motion";
import DateTime from "./DateTime";
import SlideToUnlock from "./SlideToUnlock";

const LockScreen = ({ setShouldShowLockScreen }) => {
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
                <SlideToUnlock setShouldShowLockScreen={setShouldShowLockScreen} />
                <div className="w-[35%] h-[4px] mb-[3px] justify-center items-center bg-white rounded-sm"></div>
            </div>
        </motion.div>
    );
};

export default LockScreen;
