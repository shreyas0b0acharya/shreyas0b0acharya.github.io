import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { NavigatorText } from "../components/ui/navigatorText";

export default function Footer() {

  return (

    

    <footer className="bg-gray-100  text-gray-800 dark:text-gray-100 dark:bg-gray-900 py-8 z-99 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold tracking-wide">...</h1>
            <p className="text-sm mt-1">Built with ❤️ by Shreyas B.Acharya</p>
            <p className="text-xs mt-1">© 2025 All rights reserved</p>
          </div>

          {/* Center nav */}
          <div className="flex space-x-6 text-sm font-medium">
            <NavigatorText navigateTo="/About">About</NavigatorText>
            <NavigatorText navigateTo="/MyProfile">Profile</NavigatorText>
            <NavigatorText navigateTo="/News">News</NavigatorText>
          </div>

          {/* Right social */}
          <div className="flex space-x-5 text-3xl">
            <a href="https://github.com/shreyas0b0acharya" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://youtube.com/@hushmodeTECHIE" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/shreyas_b_acharya/profilecard/?igsh=ajFrbWprZGxwOGZi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shreyas-b-acharya-a0ab74328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
