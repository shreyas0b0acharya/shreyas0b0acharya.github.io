export const Button = ({ className = "", type, children }) => (
    <button
      type={type}
      className={`bg-transparent
                  text-black dark:text-white 
                  ring-1
                  ring-black dark:ring-themeColor
                  dark:hover:bg-themeColor hover:bg-black 
                  hover:text-white dark:hover:text-black 
                  font-semibold py-1 px-2 rounded-lg transition
                  ${className}`}
    >
      {children}
    </button>
  );
  