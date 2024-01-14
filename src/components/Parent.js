import React, { useState } from "react";
import LockScreen from "./LockScreen/Lock";
import HomeScreen from "./HomeScreens/HomeScreen.js";
import NavBar from "./NavBar.js";

const Parent = () => {
    const [shouldShowLockScreen, setShouldShowLockScreen] = useState(true);
    return (
        <div className="flex justify-center items-center relative select-none">
            <div>
                <div className="relative bottom-[20vh] h-[16px] left-[2px] z-0 w-[4px] rounded-md bg-black">
                    {" "}
                </div>
                {/* Volume up down */}
                <div className="relative bottom-[17vh] h-[55px] left-[2px] z-0 w-[4px] rounded-md bg-black">
                    {" "}
                </div>
                <div className="relative bottom-[16vh] h-[55px] left-[2px] z-0 w-[4px] rounded-md bg-black">
                    {" "}
                </div>
            </div>
            <div className="bg-lock-background bg-cover z-10 flex flex-col w-[305px] h-[75vh] max-h-[610px] border-[10px] border-black rounded-[50px] gap-3">
                <div>
                    <NavBar shouldShowTime={!shouldShowLockScreen} />
                </div>
                {shouldShowLockScreen ? (
                    <LockScreen setShouldShowLockScreen={setShouldShowLockScreen} />
                ) : (
                    <HomeScreen />
                )}
            </div>
            <div className="relative bottom-[17vh] h-[58px] right-[2px] z-0 w-[4px] rounded-md bg-black">
                {" "}
            </div>
        </div>
    );
};

export default Parent;
