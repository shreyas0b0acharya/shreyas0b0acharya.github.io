import { NavBar} from "../components/navBar"
import { Route,Routes } from "react-router-dom";


import {News} from "../pages/news";
import {About} from "../pages/about";
import {SignUp} from "../pages/signUp"
import { TimeTable } from "../pages/timeTable";
import { Home } from "../pages/home";
import { Notes } from "../pages/notes";



export const NavBarComp = () => {
  return (
    <>
      <NavBar />
      {/* links for navbar texts */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/Notes" element={<Notes />} />
        
      </Routes>
    </>
  );
}
