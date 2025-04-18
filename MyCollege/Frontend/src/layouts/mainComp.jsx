import { Aside } from "./asideComp";
import Footer from "./footer";

export const MainComp = ({ children, className }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-row"> {/* Main content section */}
        {/* Main content */}
        <div className={`${className} dark:bg-black flex flex-col mx-auto w-full`}>
          {children}
        </div>

        {/* Aside section */}
        <Aside />
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};
