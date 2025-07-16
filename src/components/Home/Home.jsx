import React, { useState } from "react";
import { MdOutlineEmail, MdPhone, MdClose } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import avatarImg from "../../assets/7358602-removebg-preview.webp";

const Home = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleCloseModal = () => {
    setShowContactModal(false);
  };

  const handleEmailClick = () => {
    window.open('mailto:siddhanttripathi22@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+1234567890', '_blank'); 
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/siddhant-tripathi-48b4a61b8/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/siddhanttripathi22', '_blank');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen bg-gray-900 gap-4 md:gap-6 lg:gap-8">
    <div className="w-full md:w-1/2 md:pr-6 lg:pr-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold flex leading-normal tracking-tighter mb-4">
          Hello, I'm Siddhant
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl tracking-tight mb-6">
          Bringing ideas to life through modern frontend technologies — I'm Siddhant Tripathi, and I love building on the web & app.
        </p>
        <button 
          onClick={handleContactClick}
          className="mt-2 sm:mt-4 md:mt-5 text-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-full sm:w-auto"
        >
          Contact Me
        </button>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
       <img 
        className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] object-contain rounded-2xl shadow-2xl" 

          src={avatarImg} 
          alt="Siddhant Tripathi" 
        />
      </div>

      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
          <div className="bg-white text-black rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10 p-1"
            >
              <MdClose size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              {/* Modal Header */}
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#465697] pr-8">
                Let's Connect!
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Choose your preferred way to reach out:
              </p>

              {/* Contact Options */}
              <div className="space-y-3 sm:space-y-4">
                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <MdOutlineEmail size={18} className="text-[#465697] sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base">Email</p>
                      <p className="text-xs sm:text-sm text-gray-600 break-all">
                        siddhanttripathi22@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={handleEmailClick}
                      className="px-3 py-1 bg-[#465697] text-white rounded text-xs sm:text-sm hover:opacity-85 flex-1 sm:flex-none"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => copyToClipboard('siddhanttripathi22@gmail.com')}
                      className="px-3 py-1 border border-[#465697] text-[#465697] rounded text-xs sm:text-sm hover:bg-gray-50 flex-1 sm:flex-none"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <MdPhone size={18} className="text-[#465697] sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base">Phone</p>
                      <p className="text-xs sm:text-sm text-gray-600">+91 XXXXXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={handlePhoneClick}
                      className="px-3 py-1 bg-[#465697] text-white rounded text-xs sm:text-sm hover:opacity-85 flex-1 sm:flex-none"
                    >
                      Call
                    </button>
                    <button
                      onClick={() => copyToClipboard('+91 XXXXXXXXXX')}
                      className="px-3 py-1 border border-[#465697] text-[#465697] rounded text-xs sm:text-sm hover:bg-gray-50 flex-1 sm:flex-none"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <CiLinkedin size={18} className="text-[#465697] sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base">LinkedIn</p>
                      <p className="text-xs sm:text-sm text-gray-600">Professional Profile</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLinkedInClick}
                    className="px-3 py-1 bg-[#465697] text-white rounded text-xs sm:text-sm hover:opacity-85 w-full sm:w-auto"
                  >
                    Visit
                  </button>
                </div>

                {/* GitHub */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <FaGithub size={18} className="text-[#465697] sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base">GitHub</p>
                      <p className="text-xs sm:text-sm text-gray-600">View My Projects</p>
                    </div>
                  </div>
                  <button
                    onClick={handleGitHubClick}
                    className="px-3 py-1 bg-[#465697] text-white rounded text-xs sm:text-sm hover:opacity-85 w-full sm:w-auto"
                  >
                    Visit
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 sm:mt-6 pt-4 border-t">
                <p className="text-xs sm:text-sm text-gray-600 mb-3">Quick Actions:</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 py-2 sm:py-2 bg-[#465697] text-white rounded hover:opacity-85 font-semibold text-sm sm:text-base"
                  >
                    Send Email
                  </button>
                  <button
                    onClick={handlePhoneClick}
                    className="flex-1 py-2 sm:py-2 border border-[#465697] text-[#465697] rounded hover:bg-gray-50 font-semibold text-sm sm:text-base"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;