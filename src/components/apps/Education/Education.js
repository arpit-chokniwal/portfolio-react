import { EducationContent } from "@/components/utils/constants";
import React from "react";

const Education = () => {
  return (
    <div className="h-[450px] w-full overflow-x-scroll scroll-smooth overflow-scroll mt-2">
      {EducationContent.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full bg-gradient-to-br from-blue-600 to-purple-700 p-4 text-white rounded-xl flex flex-col mb-2 gap-2"
          >
            <div className="w-full flex justify-between items-center">
              <div>{item.icon}</div>
              <p className="font-bold text-[14px]">{item.degree}</p>
            </div>
            <div>
              <p className="font-semibold text-[16px]">{item.institute}</p>
              <p className="font-medium text-[12px]">{item.location}</p>
            </div>
            <div>
              {item.CGPA && (
                <p className="font-bold font-mono text-[16px]">
                  CGPA - {item.CGPA}
                </p>
              )}
              {item.Percentage && (
                <p className="font-bold text-[16px]">
                  Percentage - {item.Percentage}%
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
