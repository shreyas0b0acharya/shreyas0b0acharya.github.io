import { useState } from "react";
import { Sun, Moon } from "lucide-react";



export const ThemeButton = () => {

  const [darkTheme, setTheme] = useState(false);

  function changeTheme(){
    if(darkTheme ===false){
      setTheme(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
      
    }else{
      setTheme(false);
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
        <div onClick={changeTheme} className="cursor-pointer">
        {darkTheme ? <Sun className="dark:text-white" /> : <Moon className="dark:text-white" />}
        </div>
  );
  
}
