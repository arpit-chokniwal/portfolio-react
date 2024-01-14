import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LockScreen from "./components/LockScreen/Lock.js";
import HomeScreen from "./components/HomeScreens/HomeScreen.js";

const App = () => {
  const [shouldShowLockScreen, setShouldShowLockScreen] = useState(true);
  return (
    <div className="flex w-full h-[100vh] bg-red-300 justify-center items-center select-none ">
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

export default App;
