import { Aside } from "./asideComp";

export const MainComp = ({ children, className }) => {
  return (
    <div className="flex flex-row "> {/* Set a height for the parent */}
      {/* Main content */}
      <div className={`${className} flex flex-col mx-auto w-full`}>
        {children}
      </div>

      {/* Vertical border/divider */}
      {/* <div className="w-px bg-gray-500 mx-4 self-stretch"></div> */}

      {/* Aside section */}
      <Aside />
    </div>
  );
};