import React from "react";
import SignalAndTop from "../SignalAndTop";
import DateTime from "./DateTime";

const LockScreen = () => {
    return (
        <div className="bg-lock-background bg-cover flex flex-col w-[305px] h-[75vh] max-h-[610px] border-[10px] bg-red-400 border-black rounded-[50px] gap-3 ">
            <SignalAndTop />
            <DateTime />
        </div>
    );
};

export default LockScreen;
