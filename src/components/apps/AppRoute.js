import React from "react";
import HomeScreen from "../HomeScreens/HomeScreen";
import Mail from "./Mail/Mail";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Notes from "./Notes/Notes";
import LockScreen from "../LockScreen/Lock";
import { PageNames } from "../utils/constants";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const AppRoute = ({ pageName, setPageName }) => {
    const ComponentToReturn = {
        [PageNames.HOME]: <HomeScreen setPageName={setPageName} />,
        [PageNames.MAIL]: <Mail />,
        [PageNames.PROJECT]: <Projects />,
        [PageNames.EXPERIENCE]: <Experience />,
        [PageNames.EDUCATION]: <Education />,
        [PageNames.NOTES]: <Notes />,
        [PageNames.LOCK]: <LockScreen setPageName={setPageName} />,
    };

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
    };

    return (
        <div className="h-full w-full flex flex-col justify-between items-center px-2">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.7 }}
                className="w-full flex flex-col gap-2 justify-start items-start -mt-4"
            >
                <div className="w-full flex justify-start items-center gap-2">
                    <IoIosArrowBack
                        size={20}
                        className="text-black cursor-pointer"
                        onClick={() => setPageName(PageNames.HOME)}
                    />
                    <p className="text-black">{pageName}</p>
                </div>
                <div className="bg-black h-fit w-full overflow-hidden flex justify-start items-start">
                    {ComponentToReturn[pageName]}
                </div>
            </motion.div>

            <div className="w-[35%] h-[4px] mb-[3px] justify-center items-center bg-black rounded-sm"></div>
        </div>
    );
};

export default AppRoute;
