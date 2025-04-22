export const Button = ({ className = "", type = "button", children, onClick }) => (
  <button
    onClick={onClick}
    type={type}
    className={`
      text-black dark:text-white 
      ring-1 ring-black dark:ring-themeColor
      hover:bg-black dark:hover:bg-themeColor 
      hover:text-white dark:hover:text-black 
      font-semibold py-1 px-2 
      rounded-lg transition-all duration-3000 ease
      ${className}`}
  >
    {children}
  </button>
);