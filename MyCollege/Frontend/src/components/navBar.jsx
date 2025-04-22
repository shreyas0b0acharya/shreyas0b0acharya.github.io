
import React, { useState } from "react";
import { ThemeButton } from "./theme";
import { NavItem } from "./navItems";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// NavBar component
export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // Used for navigation on click
  const navigate = useNavigate();

  return (
    <nav
      className="
        h-auto
        bg-white dark:bg-black bg-opacity-50 
        shadow border-b border-b-gray-300 dark:border-b-gray-700
        px-4 py-2 sm:flex sm:justify-between
      "
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-black dark:text-white text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/About")}
        >
          My College
        </h1>
        <div className="flex gap-4">
          
          {/* Theme button visible only when menu is open on mobile */}
          <div className={`${isOpen ? "flex" : "hidden"}`}>
            <ThemeButton />
          </div>

          {/* Menu open/close icon (hamburger / close) */}
          <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
            {isOpen ? <X className="dark:text-white" /> : <Menu className="dark:text-white" />}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`
          flex flex-col sm:flex-row sm:items-center 
          gap-4 sm:gap-6 mt-2 sm:mt-0 p-1
          ${isOpen ? "block" : "hidden"} sm:flex
        `}
      >
        <NavItem path="About" name="About" />
        <NavItem path="Home" name="Home" />
        <NavItem path="News" name="News" />
        <NavItem path="TimeTable" name="Time Table" />
        <NavItem path="Notes" name="Notes" />
        <NavItem path="MyProfile" name="My Profile" />

        {/* Theme button visible only on desktop */}
        <div className="hidden sm:block">
          <ThemeButton />
        </div>
      </ul>
    </nav>
  );
};
