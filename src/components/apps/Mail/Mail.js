import { PageNames } from "@/components/utils/constants";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const Mail = ({ setShouldShowNav, setPageName }) => {
  useEffect(() => {
    setShouldShowNav(false);
  }, []);
  const [message, setMessage] = React.useState("Hey 👋 Arpit...");
  const [subject, setSubject] = React.useState("I'm interested in working with you");

  return (
    <div className="h-full w-full flex flex-col justify-between ">
      <div className="h-full w-full flex flex-col gap-2 -mt-4">
        <div className="flex w-full h-fit p-2 gap-2 justify-between items-center">
          <IoIosArrowBack
            size={25}
            className="text-blue-500 cursor-pointer"
            onClick={() => setPageName(PageNames.HOME)}
          />

          <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
              src="/profile.jpeg"
              alt="profile"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full"
            />
            <div>
              <p className="text-gray-600 text-[12px] font-mono">Arpit</p>
            </div>
          </div>

          <div>
            <a href={`mailto:arpitchokniwal09@gmail.com?subject=${subject}&body=${message}`}>
              <IoSendSharp size={18} className="text-blue-500 " />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">

          {/* Subject */}
          <div className="flex gap-2 w-full border-b-[1px] border-gray-200 py-1 ">
            <p className="text-gray-600 text-[14px]">Subject:</p>
            <input
              className="w-full outline-none text-[15px] text-gray-700 mb-1"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="flex gap-2 w-full border-b-[1px] border-gray-200 py-1 ">
            <p className="text-gray-600 text-[14px]">Message:</p>
            <input
              className="w-full outline-none text-[15px] text-gray-700 mb-1 "
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="h-fit w-full flex flex-wrap justify-center text-center items-center mt-[310px]">
        <p className="text-black font-bold text-[12px] flex flex-wrap justify-center">
          Want to connect over phone, Call on
          <a href="tel:+919587029050">
            <span className="text-blue-500">9587029050</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Mail;
