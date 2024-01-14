import React, { useState, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const SlideToUnlock = ({ setShouldShowLockScreen }) => {
    const [sliderLeft, setSliderLeft] = useState(0);
    const sliderRef = useRef();
    const containerRef = useRef();

    const onDrag = (e) => {
        if (e.clientX === 0) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newLeft = e.clientX - containerRect.left - sliderRef.current.offsetWidth / 2;
        const maxLeft = containerRect.width - sliderRef.current.offsetWidth;
        if (newLeft > 100) {
            setShouldShowLockScreen(false);
            setSliderLeft(0)
        } else {
            setSliderLeft(Math.max(0, Math.min(newLeft, maxLeft)));
        }
    };

    return (
        <div className="relative w-full max-w-lg px-4 mx-auto mt-5">
            <div ref={containerRef} className="relative w-full bg-gray-300 h-14 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div
                    ref={sliderRef}
                    className="absolute left-0 top-0 w-14 h-14 user-select-none bg-white rounded-full shadow cursor-pointer transition duration-300 ease-in-out flex justify-center items-center"
                    draggable
                    onDrag={onDrag}
                    style={{ left: `${sliderLeft}px` }}
                >
                    <FaArrowRightLong size={24} className='text-gray-400' />
                </div>
            </div>
            <div className="absolute w-full top-0 flex items-center justify-center h-14 pointer-events-none">
                <span className="text-white text-lg text-center mr-3">Slide to Unlock </span>
            </div>
        </div>
    );
};

export default SlideToUnlock;
