import React, { useEffect, useState } from "react";
import { MainComp } from "../layouts/mainComp";
import { RegisterForm } from "../components/UserRegisterComps/registerForm";
import { CollegeNews } from "./collegeNews";

export const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const status = JSON.parse(localStorage.getItem("loggedIn"));
        setIsLoggedIn(status);
    }, []); // Runs once on page load

    return (
        <MainComp>
          {isLoggedIn ? null : <RegisterForm/>}

          <CollegeNews></CollegeNews>
        </MainComp>
    );
};
