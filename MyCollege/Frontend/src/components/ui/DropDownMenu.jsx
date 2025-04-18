// import { useState } from "react";

export const DropDownMenu = ({ options = [], legend, value, onChange, ...rest }) => {
  // Removed local state (semester), now using props directly

  return (
    <fieldset className="font-sans px-[2%] py-[5px] rounded-lg border dark:border-themeColor border-black mb-2">
      <legend className="font-sans text-black dark:text-themeColor text-sm">{legend}</legend>
      <select
        className="w-[100%] px-2 font-sans border-0
        focus:outline-none dark:text-white bg-white dark:bg-black focus:bg-transparent
       "
        value={value} // Use the passed value prop
        onChange={(e) => onChange(e.target.value)} // Call onChange from props
        required
        {...rest}
      >
        <option value="" disabled hidden></option>
        {options.map((option, index) => (
          <option value={option[0]} key={index}>
            {option[1]}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
