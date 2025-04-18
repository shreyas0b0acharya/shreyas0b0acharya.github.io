
import { NavLink } from "react-router-dom";
export const NavItem = ({path,name}) => (
  
  
  <NavLink to={`/${path}`}>
            <li className="text-[12px] font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">{name}</li>
  </NavLink>
);