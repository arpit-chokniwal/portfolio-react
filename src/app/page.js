"use client";
import HomeScreen from "@/components/HomeScreens/HomeScreen";
import LockScreen from "@/components/LockScreen/Lock";
import NavBar from "@/components/NavBar";
import AppRoute from "@/components/apps/AppRoute";
import { PageNames } from "@/components/utils/constants";
import React, { useState } from "react";

export default function Home() {
  const [pageName, setPageName] = useState(PageNames.LOCK);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      {/* Left Side Buttons */}
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

      {/* Main body */}
      <div
        className={` ${pageName === PageNames.LOCK || pageName === PageNames.HOME
            ? "bg-lock-background"
            : "bg-white"
          } bg-cover z-10 flex flex-col w-[305px] h-[610px] border-[10px] border-black rounded-[50px] gap-1`}
      >
        <div>
          <NavBar
            shouldShowTime={pageName != PageNames.LOCK}
            whiteTheme={
              pageName === PageNames.LOCK || pageName === PageNames.HOME
            }
          />
        </div>

        {pageName === PageNames.LOCK ? (
          <LockScreen setPageName={setPageName} />
        ) : pageName === PageNames.HOME ? (
          <HomeScreen setPageName={setPageName} />
        ) : (
          <AppRoute pageName={pageName} setPageName={setPageName} />
        )}
      </div>

      {/* Right Side Button */}
      <div className="relative bottom-[17vh] h-[58px] right-[2px] z-0 w-[4px] rounded-md bg-black">
        {" "}
      </div>
    </div>
  );
}
