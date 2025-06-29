import React, { useState } from "react";
import { RiGithubFill, RiCloseLine, RiCodeSSlashLine } from "@remixicon/react";
//import bannerImg from "../../assets/photo-C8q0KQHG.png";

const ProjectCard = ({ 
  title, 
  main, 
  demoUrl, 
  githubUrl, 
  techStack = [],
  techDescription = "This project was built using modern technologies to ensure optimal performance and user experience."
}) => {
  const [showTechStack, setShowTechStack] = useState(false);

  
  const formatUrl = (url) => {
    if (!url) return '';
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    return `https://${url}`;
  };

  const handleSourceCode = () => {
    if (githubUrl) {
      const formattedUrl = formatUrl(githubUrl);
      window.open(formattedUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDemo = () => {
    if (demoUrl) {
      const formattedUrl = formatUrl(demoUrl);
      window.open(formattedUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl relative">
        
        
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        
        <p className="px-4 text-sm md:text-md leading-tight py-2">
          {main}
        </p>

        
        {techStack.length > 0 && (
          <div className="px-4 py-2">
            <button 
              onClick={() => setShowTechStack(true)}
              className="text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-blue-600 flex items-center gap-2"
            >
              <RiCodeSSlashLine size={14} />
              Used Tech Stack
            </button>
          </div>
        )}
        
        <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
          <button 
            onClick={handleDemo}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Live
          </button>
          
          <button 
            onClick={handleSourceCode}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] flex items-center gap-2"
          >
            <RiGithubFill size={16} />
            Source Code
          </button>
        </div>
      </div>

      {/* Tech Stack Modal */}
      {showTechStack && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0e19] rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative border border-gray-700">
            <button 
              onClick={() => setShowTechStack(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <RiCloseLine size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4 pr-8">
              {title} - Tech Stack
            </h3>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {techDescription}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-[#1a1d2e] p-3 rounded-lg border border-gray-700 hover:border-[#465697] transition-colors"
                  >
                    <span className="text-white font-medium text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700 flex gap-3">
              {githubUrl && (
                <button 
                  onClick={handleSourceCode}
                  className="flex-1 bg-[#465697] text-white py-2 px-4 rounded-lg hover:opacity-85 transition-opacity flex items-center justify-center gap-2"
                >
                  <RiGithubFill size={16} />
                  View Code
                </button>
              )}
              {demoUrl && (
                <button 
                  onClick={handleDemo}
                  className="flex-1 bg-[#2d4a22] text-white py-2 px-4 rounded-lg hover:opacity-85 transition-opacity"
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;