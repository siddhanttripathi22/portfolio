import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleEmailClick = () => {
    window.open('mailto:siddhanttripathi22@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/siddhant-tripathi-48b4a61b8/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/siddhanttripathi22', '_blank');
  };

  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li 
          className="flex gap-1 items-center cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={handleEmailClick}
        >
          <MdOutlineEmail size={20} />
          siddhanttripathi22@gmail.com
        </li>
        <li 
          className="flex gap-1 items-center cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={handleLinkedInClick}
        >
          <CiLinkedin />
          https://www.linkedin.com/in/siddhant-tripathi-48b4a61b8/
        </li>
        <li 
          className="flex gap-1 items-center cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={handleGitHubClick}
        >
          <FaGithub />
          https://github.com/siddhanttripathi22
        </li>
      </ul>
    </div>
  );
};

export default Footer;