import React from "react";
import { 
  FaCss3, 
  FaFigma, 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaVuejs
} from "react-icons/fa";
import { 
  SiRedis, 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiRedux, 
  SiTailwindcss 
} from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* Frontend Technologies */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="HTML5">
            <FaHtml5 color="#E34F26" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              HTML5
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="CSS3">
            <FaCss3 color="#1572B6" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              CSS3
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="JavaScript">
            <FaJs color="#F7DF1E" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              JavaScript
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="React.js">
            <FaReact color="#61DAFB" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              React.js
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Tailwind CSS">
            <SiTailwindcss color="#06B6D4" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Tailwind CSS
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Redux Toolkit">
            <SiRedux color="#764ABC" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Redux Toolkit
            </div>
          </span>

          {/* Backend Technologies */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Node.js">
            <FaNodeJs color="#339933" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Node.js
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Express.js">
            <SiExpress color="#FFFFFF" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Express.js
            </div>
          </span>

          {/* Databases */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="MySQL">
            <SiMysql color="#4479A1" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              MySQL
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="MongoDB">
            <SiMongodb color="#47A248" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              MongoDB
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Redis">
            <FaVuejs color="#DC382D" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Vue Js
            </div>
          </span>

          {/* Programming Languages */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Java">
            <FaJava color="#ED8B00" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Java
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Python">
            <FaPython color="#3776AB" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Python
            </div>
          </span>

          {/* Version Control & Tools */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Git">
            <FaGitAlt color="#F05032" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Git
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="GitHub">
            <FaGithub color="#FFFFFF" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              GitHub
            </div>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Figma">
            <FaFigma color="#F24E1E" size={50} />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Figma
            </div>
          </span>

          {/* Data Structures (using a generic icon) */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition-colors duration-300 cursor-pointer relative group" title="Data Structures">
            <div className="text-white text-lg font-bold w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              DS
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Data Structures
            </div>
          </span>
          </div>

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Oasis Infobyte</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Dec 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer Intern</li>
                <li>- Developed web applications using React.js and Node.js</li>
                <li>- Collaborated on full-stack projects with modern technologies</li>
              </ul>
            </span>
          </div>
          
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Indian Oil Corp Ltd</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Building enterprise applications with React and Node.js</li>
                <li>- Managing databases and implementing backend solutions</li>
              </ul>
            </span>
          </div>
          
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Machine Learning Training, Internshal</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2024 - March 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Trainee</li>
                <li>- Learned Python for data analysis and ML algorithms</li>
                <li>- Implemented machine learning models and data structures</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;