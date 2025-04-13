import { ThemeButton } from "./theme";
import { NavItem } from "./navItems";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="
      h-auto
      bg-white dark:bg-black bg-opacity-50 
      shadow border-b border-b-gray-300 dark:border-b-gray-700
      px-4 py-2 sm:flex sm:justify-between 
    ">
      <div className="flex justify-between items-center">
        <h1 className="text-black dark:text-white text-2xl font-bold">
          My College
        </h1>

        {/* Toggle icon visible only on mobile */}
        <div className="flex gap-4 ">
        <div className={`${isOpen ? "flex" : "hidden"}`}>
          <ThemeButton />
        </div>
          <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
            {isOpen ? <X className="dark:text-white" /> : <Menu className="dark:text-white" />}
          </div>
        </div>
        
      </div>

      {/* Navigation links */}
      <ul className={`
        flex flex-col sm:flex-row sm:items-center 
        gap-4 sm:gap-6 mt-2 sm:mt-0 p-1
        ${isOpen ? "block" : "hidden"} sm:flex 
      `}>
        <NavItem path="About" name="About"  />
        <NavItem path="Home" name="Home"/>
        <NavItem path="News" name="News"/>
        <NavItem path="SignUp" name="SignUp"/>
        <NavItem path="TimeTable" name="Time Table"/>
        <NavItem path="Notes" name="Notes"/>
        
        <div className={`${isOpen ? "hidden" : "hidden"} sm:block`}>
          <ThemeButton />
        </div>
      </ul>
    </nav>
  );
};
