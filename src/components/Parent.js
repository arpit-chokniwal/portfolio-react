import React from 'react'
import SignalAndTop from './SignalAndTop'


const Parent = () => {
    function getRealTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
        const hoursFormatted = hours < 10 ? '0' + hours : hours;
        const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString('en-US', optionsDate);
        const time = `${hoursFormatted}:${minutesFormatted}`;
        return {
            date: date,
            time: time
        };
    }

    const [getTime] = React.useState(getRealTime())

    return (
        <div className="bg-lock-background bg-cover flex flex-col w-[305px] h-[75vh] max-h-[610px] border-[10px] bg-red-400 border-black rounded-[50px] gap-3 ">
            <div>
                <SignalAndTop />
            </div>

            <div className="w-[100%] flex flex-col justify-center items-center text-center h-fit gap-0">
                <p className='text-white antialiased font-medium text-[20px] leading-none text-center'>{getTime.date}</p>
                <p className='text-white antialiased font-medium text-[72px] leading-tight text-center'>{getTime.time}</p>
            </div>

        </div>
    )
}

export default Parent