// import { useState } from "react";

export const Input = ({ legend, type, placeholder, ...rest}) => {


  return (
    <fieldset className=" font-sans px-[2%] py-[5px] rounded-lg border dark:border-themeColor border-black mb-2">
      <legend  className="font-sans text-black dark:text-themeColor text-sm">{legend}</legend>
      <input
        className=" w-[100%] px-2 font-sans border-0  focus:outline-none dark:text-white bg-transparent focus:bg-transparent"
        type={type}
        placeholder={placeholder}
        required
        {...rest}
      />
    </fieldset>
  );
};
