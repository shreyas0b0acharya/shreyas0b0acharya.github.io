export const DropDownMenu = ({ options = [], legend, value, onChange, ...rest }) => {
  return (
    <fieldset className="font-sans px-[2%] py-[5px] rounded-lg border dark:border-themeColor border-black mb-2">
      <legend className="font-sans text-black dark:text-themeColor text-sm">{legend}</legend>
      <select
        className="w-[100%] px-2 font-sans border-0
        focus:outline-none dark:text-white bg-white dark:bg-black focus:bg-transparent"
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        required
        {...rest} // Spread any additional props
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