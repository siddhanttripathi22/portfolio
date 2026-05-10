import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";

const roles = [
  {
    icon: "⚡",
    title: "Full Stack Developer",
    subtitle: "React · Node.js · Express · MySQL · MongoDB",
    description:
      "Building enterprise-grade web applications at Indian Oil Corp — end-to-end, from pixel-perfect UIs to scalable backend APIs and database architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    color: "#6366f1",
  },
  {
    icon: "🤖",
    title: "Full Stack + AI Developer",
    subtitle: "Python · FastAPI · LLMs · RAG · Agents",
    description:
      "Integrating AI into full-stack products — building RAG pipelines, LLM-powered features, and intelligent agents using OpenAI, LangChain, and vector databases.",
    tags: ["Python", "FastAPI", "LangChain", "OpenAI", "ChromaDB", "CrewAI"],
    color: "#06b6d4",
  },
];

const stats = [
  { value: "1", label: "Years Experience" },
  { value: "5+", label: "Live Projects" },
  { value: "1", label: "PSU Company" },
  { value: "12+", label: "Tech Stack" },
];

const About = () => {
  return (
    <section
      id="About"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(6,182,212,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      className="text-white overflow-hidden mx-0 md:mx-20 rounded-2xl p-8 md:p-14"
    >
      {/* Header */}
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About</h2>
        <div style={{ height: "3px", background: "linear-gradient(90deg, #6366f1, #06b6d4)", borderRadius: "2px" }} className="w-16 mb-3" />
      </div>

      <div className="md:flex gap-12 items-start">
        {/* Left — Image + Stats */}
        <div className="flex flex-col items-center gap-6 mb-10 md:mb-0">
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px" }} className="p-4">
            <img className="h-56 md:h-72 object-contain" src={AboutImg} alt="Siddhant" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {stats.map((s) => (
              <div
                key={s.label}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}
                className="p-3 text-center"
              >
                <div className="text-2xl font-bold" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Role Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {roles.map((role) => (
            <div
              key={role.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${role.color}30`,
                borderLeft: `3px solid ${role.color}`,
                borderRadius: "16px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="p-6 hover:scale-[1.01]"
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 32px ${role.color}18`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{role.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold">{role.title}</h3>
              </div>
              <p className="text-xs mb-3" style={{ color: role.color }}>{role.subtitle}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{role.description}</p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ background: `${role.color}15`, border: `1px solid ${role.color}30`, color: role.color, borderRadius: "6px" }}
                    className="text-xs px-2.5 py-1 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Current Status Badge */}
          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "12px" }} className="p-4 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm text-green-400 font-medium">
              Currently Looking for a Change
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
