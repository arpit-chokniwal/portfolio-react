'use client';
import HomeScreen from "@/components/HomeScreens/HomeScreen";
import LockScreen from "@/components/LockScreen/Lock";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";


export default function Home() {
  const [shouldShowLockScreen, setShouldShowLockScreen] = useState(true);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
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
      <div className="bg-lock-background bg-cover z-10 flex flex-col w-[305px] h-[610px] border-[10px] border-black rounded-[50px] gap-3">
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
}
