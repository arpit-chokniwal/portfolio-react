import { NotesContents, PageNames } from "@/components/utils/constants";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosMic } from "react-icons/io";
import { MdFolderOpen } from "react-icons/md";

const Notes = ({ setShouldShowNav, setPageName }) => {
  useEffect(() => {
    setShouldShowNav(false);
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-between gap-2">
      <div className="flex w-full h-fit gap-2 justify-start items-center">
        <IoIosArrowBack
          size={25}
          className="text-black cursor-pointer"
          onClick={() => setPageName(PageNames.HOME)}
        />
        <p>Folders</p>
      </div>

      <div className="h-fit flex flex-col justify-center items-start gap-1">
        <p className="text-[22px] font-bold">ALL iCloud</p>
        <div className="flex gap-2 justify-between px-2 items-center w-full h-[30px] bg-gray-200 rounded-xl ">
          <IoIosSearch size={20} className="text-gray-700" />
          <input
            className="bg-gray-200 outline-none w-full text-[14px] text-gray-800 font-light"
            placeholder="Search Notes"
          />
          <IoIosMic size={23} className="text-gray-700" />
        </div>
      </div>

      <div>
        <p className="text-[22px] font-bold">Notes</p>
        <div className="max-h-[350px] w-full bg-[#F2F2F7] rounded-2xl overflow-scroll">
          {NotesContents.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-4 flex flex-col justify-between items-start border-b-2 border-white cursor-pointer gap-1"
                onClick={item.onClick}
              >
                <p className="text-[18px] font-medium">{item.label}</p>

                <div className="flex justify-between items-center gap-2">
                  <p className="text-[13px] font-light text-gray-600">
                    {item.lastEdited}
                  </p>
                  {item.tags.map((tag, index) => {
                    return (
                      <p
                        key={index + tag}
                        className="text-[13px] font-light text-gray-600"
                      >
                        #{tag}
                      </p>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center gap-2">
                  <MdFolderOpen size={16} className="text-gray-400" />
                  <p className="text-[13px] font-light text-gray-600">Notes</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
