import React, { useEffect } from "react";
import { getRealTime } from "../utils/helperFunctions";

const DateTime = () => {
    const [getTime, setGetTime] = React.useState(getRealTime());

    useEffect(() => {
        setGetTime(getRealTime());
    }, [])

    return (
        <div className="w-[100%] mt-2 flex flex-col justify-center items-center h-fit gap-0">
            <p className="text-white antialiased font-medium text-[22px]">
                {getTime.date}
            </p>
            <p className="text-white antialiased font-medium text-[70px] leading-tight ml-2">
                {getTime.time}
            </p>
        </div>
    );
};

export default DateTime;
