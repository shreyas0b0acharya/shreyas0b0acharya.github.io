

// Input component 
export const Input = ({ legendClassName, className, legend, type, placeholder, ...rest }) => {
  return (
    <fieldset
      className={`font-sans px-[2%] py-[5px] rounded-lg border dark:border-themeColor border-black mb-2 ${legendClassName}`}
    >
      {/* Label for the input field */}
      <legend className={`font-sans text-black dark:text-themeColor text-sm ${legendClassName}`}>
        {legend}
      </legend>

      {/* input field */}
      <input
        className={`w-full px-2 font-sans border-0 focus:outline-none dark:text-white bg-transparent focus:bg-transparent ${className}`}
        type={type}
        placeholder={placeholder}
        required
        {...rest} // spread other props 
      />
    </fieldset>
  );
};

// TextArea component 
export const TextArea = ({ legendClassName, className, legend, type, placeholder, ...rest }) => {
  return (
    <fieldset
      className={`font-sans px-[2%] py-[5px] rounded-lg border dark:border-themeColor border-black mb-2 ${legendClassName}`}
    >
      {/* Textarea field*/}
      <textarea
        className={`w-full px-2 font-sans border-0 focus:outline-none dark:text-white bg-transparent focus:bg-transparent ${className}`}
        placeholder={placeholder}
        required
        {...rest}
      />
    </fieldset>
  );
};
