import React, { useState, useEffect } from "react";
import { MdOutlineEmail, MdPhone, MdClose } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "@remixicon/react";
import avatarImg from "../../assets/7358602-removebg-preview.webp";

// Typing animation hook
const useTypingEffect = (words, typingSpeed = 80, pauseDuration = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, typingSpeed / 2);
    } else {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseDuration]);

  return displayed;
};

const Home = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copied, setCopied] = useState("");

  const roles = [
    "Full Stack Developer",
    "AI-Integrated Developer",
    "React + Node.js Engineer",
    "Open to Work 🚀",
  ];

  const typedRole = useTypingEffect(roles);

  const handleEmailClick = () =>
    window.open("mailto:siddhanttripathi22@gmail.com", "_blank");

  const handlePhoneClick = () =>
    window.open("tel:+919580827580", "_blank");

  const handleLinkedInClick = () =>
    window.open("https://www.linkedin.com/in/siddhant-tripathi-dev", "_blank", "noopener,noreferrer");

  const handleGitHubClick = () =>
    window.open("https://github.com/siddhanttripathi22", "_blank", "noopener,noreferrer");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const contacts = [
    {
      icon: <MdOutlineEmail size={20} />,
      label: "Email",
      value: "siddhanttripathi22@gmail.com",
      copyKey: "email",
      onAction: handleEmailClick,
      actionLabel: "Send",
      canCopy: true,
    },
    {
      icon: <MdPhone size={20} />,
      label: "Phone",
      value: "+91 9580827580",
      copyKey: "phone",
      onAction: handlePhoneClick,
      actionLabel: "Call",
      canCopy: true,
    },
    {
      icon: <CiLinkedin size={20} />,
      label: "LinkedIn",
      value: "siddhant-tripathi-dev",
      copyKey: null,
      onAction: handleLinkedInClick,
      actionLabel: "Visit",
      canCopy: false,
    },
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      value: "siddhanttripathi22",
      copyKey: null,
      onAction: handleGitHubClick,
      actionLabel: "Visit",
      canCopy: false,
    },
  ];

  return (
    <>
      <div className="text-white flex flex-col md:flex-row w-full justify-between items-center px-6 py-16 md:px-20 md:py-0 md:min-h-[90vh] gap-10 md:gap-8">
        
        {/* LEFT — Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start">

          {/* Open to Work badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
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
            Open to Work — Actively looking for opportunities
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
          >
            Hello, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a5b4fc, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Siddhant
            </span>
          </h1>

          {/* Typing role */}
          <div className="flex items-center gap-2 mb-5 h-8">
            <span className="text-lg sm:text-xl text-gray-300 font-medium">
              {typedRole}
            </span>
            <span
              className="inline-block w-0.5 h-6 animate-pulse"
              style={{ background: "#6366f1" }}
            />
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            Full Stack Developer with experience at{" "}
            <span className="text-white font-medium">Indian Oil Corporation</span> — building
            enterprise apps with React, Node.js & integrating AI with LLMs, RAG & FastAPI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
              }}
            >
              Contact Me
            </button>

            <button
              onClick={handleGitHubClick}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            >
              <FaGithub size={16} />
              GitHub
            </button>

            <button
              onClick={handleLinkedInClick}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            >
              <CiLinkedin size={18} />
              LinkedIn
            </button>
          </div>
        </div>

        {/* RIGHT — Avatar */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="relative rounded-3xl p-1"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(6,182,212,0.3))",
            }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "#0f1117" }}
            >
              <img
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
                src={avatarImg}
                alt="Siddhant Tripathi"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowContactModal(false); }}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
            style={{
              background: "#13151f",
              border: "1px solid rgba(99,102,241,0.3)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <MdClose size={22} />
            </button>

            {/* Header */}
            <div
              className="w-8 h-1 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg,#6366f1,#06b6d4)" }}
            />
            <h2 className="text-2xl font-bold text-white mb-1 pr-8">Let's Connect!</h2>
            <p className="text-sm text-gray-400 mb-6">
              Choose your preferred way to reach out:
            </p>

            {/* Contact Rows */}
            <div className="flex flex-col gap-3">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between p-4 rounded-xl transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                >
                  <div className="flex items-center gap-3">
                    <span style={{ color: "#a5b4fc" }}>{c.icon}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{c.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{c.value}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={c.onAction}
                      className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-85"
                      style={{
                        background: "rgba(99,102,241,0.8)",
                        color: "#fff",
                      }}
                    >
                      <RiExternalLinkLine size={12} />
                      {c.actionLabel}
                    </button>
                    {c.canCopy && (
                      <button
                        onClick={() => copyToClipboard(c.value, c.copyKey)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                        style={{
                          background: copied === c.copyKey ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.06)",
                          border: `1px solid ${copied === c.copyKey ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.1)"}`,
                          color: copied === c.copyKey ? "#34d399" : "#9ca3af",
                        }}
                      >
                        {copied === c.copyKey ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div
              className="flex gap-3 mt-6 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <button
                onClick={handleEmailClick}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85"
                style={{ background: "rgba(99,102,241,0.8)" }}
              >
                Send Email
              </button>
              <button
                onClick={handleLinkedInClick}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#d1d5db",
                }}
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
