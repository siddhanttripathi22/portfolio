import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "@remixicon/react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () =>
    window.open("mailto:siddhanttripathi22@gmail.com", "_blank");

  const handleLinkedInClick = () =>
    window.open("https://www.linkedin.com/in/siddhant-tripathi-dev", "_blank", "noopener,noreferrer");

  const handleGitHubClick = () =>
    window.open("https://github.com/siddhanttripathi22", "_blank", "noopener,noreferrer");

  const copyEmail = () => {
    navigator.clipboard.writeText("siddhanttripathi22@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: <CiLinkedin size={20} />,
      label: "LinkedIn",
      handle: "siddhant-tripathi-dev",
      onClick: handleLinkedInClick,
    },
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      handle: "siddhanttripathi22",
      onClick: handleGitHubClick,
    },
    {
      icon: <MdOutlineEmail size={20} />,
      label: "Email",
      handle: "siddhanttripathi22@gmail.com",
      onClick: handleEmailClick,
    },
  ];

  return (
    <footer
      id="Footer"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
      className="text-white px-6 md:px-20 py-16"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

        {/* Left — Heading */}
        <div className="max-w-md">
          <div className="flex items-end gap-3 mb-3">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Contact
            </h2>
            <div
              className="w-12 mb-2"
              style={{
                height: "3px",
                background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                borderRadius: "2px",
              }}
            />
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            I'm actively looking for Full Stack & AI Developer roles. Feel free to reach out — I respond fast!
          </p>

          {/* Open to Work badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full mt-5 w-fit text-sm font-medium"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#a5b4fc",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#6366f1" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "#6366f1" }}
              />
            </span>
            Open to Work
          </div>
        </div>

        {/* Right — Social Links */}
        <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-72">
          {socialLinks.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onClick={s.onClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                e.currentTarget.style.background = "rgba(99,102,241,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: "#a5b4fc" }}>{s.icon}</span>
                <div>
                  <p className="text-white text-sm font-medium">{s.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 truncate max-w-[200px]">{s.handle}</p>
                </div>
              </div>
              <RiExternalLinkLine
                size={16}
                className="text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Email CTA */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl mb-10"
        style={{
          background: "rgba(99,102,241,0.07)",
          border: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        <div>
          <p className="text-white font-semibold text-base">Drop me an email</p>
          <p className="text-gray-400 text-sm mt-0.5">siddhanttripathi22@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleEmailClick}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
            style={{
              background: "rgba(99,102,241,0.8)",
              color: "#fff",
            }}
          >
            <MdOutlineEmail size={16} />
            Send Email
          </button>
          <button
            onClick={copyEmail}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
            style={{
              background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.1)"}`,
              color: copied ? "#34d399" : "#9ca3af",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-gray-600 text-sm">
          © 2025 Siddhant Tripathi. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm">
          Built with React.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
