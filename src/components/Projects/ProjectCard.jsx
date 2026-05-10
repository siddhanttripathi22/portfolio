import React, { useState } from "react";
import { RiGithubFill, RiCloseLine, RiCodeSSlashLine, RiExternalLinkLine } from "@remixicon/react";

const ProjectCard = ({
  title,
  main,
  demoUrl,
  githubUrl,
  techStack = [],
  techDescription = "This project was built using modern technologies to ensure optimal performance and user experience.",
  badge = null,
}) => {
  const [showTechStack, setShowTechStack] = useState(false);

  const formatUrl = (url) => {
    if (!url || url === "#") return null;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  const handleSourceCode = () => {
    const url = formatUrl(githubUrl);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDemo = () => {
    const url = formatUrl(demoUrl);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const hasLive = formatUrl(demoUrl);
  const hasGithub = formatUrl(githubUrl);

  return (
    <>
      <div
        className="flex flex-col w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
          }}
        />

        <div className="p-5 flex flex-col flex-1">
          {/* Badge (optional) */}
          {badge && (
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium w-fit mb-3"
              style={{
                background: "rgba(6,182,212,0.12)",
                border: "1px solid rgba(6,182,212,0.3)",
                color: "#06b6d4",
              }}
            >
              {badge}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">
            {main}
          </p>

          {/* Tech Stack button */}
          {techStack.length > 0 && (
            <button
              onClick={() => setShowTechStack(true)}
              className="flex items-center gap-2 text-xs font-semibold w-fit mb-4 px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
              }}
            >
              <RiCodeSSlashLine size={13} />
              Tech Stack
            </button>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={handleDemo}
              disabled={!hasLive}
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: hasLive ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
            >
              <RiExternalLinkLine size={14} />
              Live
            </button>

            <button
              onClick={handleSourceCode}
              disabled={!hasGithub}
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            >
              <RiGithubFill size={14} />
              Source Code
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack Modal */}
      {showTechStack && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowTechStack(false); }}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-6 max-h-[85vh] overflow-y-auto"
            style={{
              background: "#0c0e19",
              border: "1px solid rgba(99,102,241,0.3)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowTechStack(false)}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <RiCloseLine size={22} />
            </button>

            {/* Modal header */}
            <div
              className="w-8 h-1 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg,#6366f1,#06b6d4)" }}
            />
            <h3 className="text-xl font-bold text-white mb-1 pr-8">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{techDescription}</p>

            {/* Tech grid */}
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6366f1" }}>
              Technologies Used
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium text-white"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#6366f1,#06b6d4)" }}
                  />
                  {tech}
                </div>
              ))}
            </div>

            {/* Modal footer buttons */}
            <div
              className="flex gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {hasGithub && (
                <button
                  onClick={() => { handleSourceCode(); setShowTechStack(false); }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85"
                  style={{ background: "rgba(99,102,241,0.8)" }}
                >
                  <RiGithubFill size={15} />
                  View Code
                </button>
              )}
              {hasLive && (
                <button
                  onClick={() => { handleDemo(); setShowTechStack(false); }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <RiExternalLinkLine size={15} />
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
