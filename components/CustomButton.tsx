import { button } from "motion/react-client";
import React from "react";

const CustomButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`border-0 outline-none bg-blue-600 text-white py-2 px-3 rounded-lg text-sm ${className} cursor-pointer hover:bg-blue-600/80 duration-100 ease-in-out delay-100`}
      type="button"
    >
      {text}
    </button>
  );
};

export default CustomButton;
