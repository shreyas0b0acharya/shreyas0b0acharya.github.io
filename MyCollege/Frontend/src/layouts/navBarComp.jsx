import { NavBar} from "../components/navBar"
import { Route,Routes } from "react-router-dom";


import {News} from "../pages/news";
import {About} from "../pages/about";
import { TimeTable } from "../pages/timeTable";
import { Home } from "../pages/home";
import { Notes } from "../pages/notes";
import { MyProfile } from "../pages/profile";



export const NavBarComp = () => {
  return (
    <>
      <NavBar />
      {/* links for navbar texts */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        
      </Routes>
    </>
  );
}
