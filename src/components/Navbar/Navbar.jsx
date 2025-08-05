import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line, RiDownloadLine } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  
  const handleResumeDownload = () => {
    
    const resumeUrl = "https://drive.google.com/file/d/1M6ErnBafdNNSSFVMl4Wx0RP2VkeeWzhf/view?usp=sharing "; 
    
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Siddhant_resume.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-300">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-300">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-300">
            Projects
          </li>
        </a>
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-300 cursor-pointer flex items-center gap-1 justify-center md:justify-start"
          onClick={handleResumeDownload}
        >
          <RiDownloadLine size={16} />
          Resume
        </li>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-300">
            Contact
          </li>
        </a>
      </ul>
      
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
