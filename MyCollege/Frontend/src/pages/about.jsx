// Importing React and necessary components/libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'; 
import { SiTailwindcss, SiMysql } from 'react-icons/si'; 
import Photo from "../photos/Photo.jpg"; 
import { Card } from "../components/ui/card"; 
import Footer from "../layouts/footer";

// About component
export const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen py-10 px-5">
      <Card className="max-w-4xl mx-auto bg-white dark:bg-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-themeColor">
          About This Application
        </h1>

        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-6">
          <span className="font-semibold text-indigo-700">MyCollege</span> is a college utility platform developed to make daily student tasks easier and centralized.
          From accessing timetables, staying updated with the latest college news, requesting study materials, to viewing celebrations and using an in-browser compiler — this app simplifies it all.
          It’s designed to be responsive, easy to use, and helpful for both students and faculty.
        </p>

        <div className="text-center mb-8">
          <img
            src={Photo}
            alt="Shreyu Acharya"
            className="w-24 h-auto rounded-2xl mx-auto object-cover border-4 border-themeColor shadow-xl mb-4 hover:scale-105 transition-all duration-300"
          />
          <p className="dark:text-gray-200 text-xl font-medium text-gray-700">
            Created by <span className="font-semibold">Shreyas B Acharya</span>
          </p>
          <p className="dark:text-gray-200 text-sm text-gray-500">
            USN: 4SM23CS088 | CSE | 2nd Year, 4th Semester | SJMIT, Chitradurga
          </p>
          <p className="dark:text-gray-200 text-sm text-gray-500">
            Email: <a href="mailto:shreyasb19386@gmail.com" className="text-blue-500">shreyasb19386@gmail.com</a>
          </p>
        </div>


        <h2 className="dark:text-gray-200 text-3xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
          {/* Tech icons with labels */}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faReact} size="3x" className="text-blue-500" />
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">React</p>
          </a>

          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-green-500" />
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">Node.js</p>
          </a>

          <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-500" />
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">HTML5</p>
          </a>

          <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-600" />
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">CSS3</p>
          </a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-500" />
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">JavaScript</p>
          </a>

          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-blue-500 text-5xl flex justify-center">
              <SiTailwindcss />
            </div>
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">TailwindCSS</p>
          </a>

          <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-blue-500 text-5xl flex justify-center">
              <SiMysql />
            </div>
            <p className="dark:text-gray-200 text-sm text-gray-600 mt-2">MySQL</p>
          </a>
        </div>


        <div className="mt-8">
          <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="dark:text-gray-200 text-gray-600">
            Feel free to get in touch for any inquiries or contributions!
          </p>
          <p className="dark:text-gray-200 text-sm text-gray-500 mt-2">
            Email: <a href="mailto:shreyasb19386@gmail.com" className="text-blue-500">shreyasb19386@gmail.com</a>
          </p>
        </div>
      </Card>

      <Footer />
    </div>
  );
};
