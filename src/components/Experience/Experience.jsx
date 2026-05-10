import React, { useState } from "react";
import {
  FaCss3, FaHtml5, FaJs, FaReact,
  FaNodeJs, FaGithub, FaPython, FaGitAlt, FaVuejs
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiExpress, SiRedux,
  SiTailwindcss, SiFastapi, SiOpenai, SiLangchain
} from "react-icons/si";

const techCategories = [
  {
    label: "Frontend",
    color: "#6366f1",
    skills: [
      { icon: <FaHtml5 color="#E34F26" size={32} />, name: "HTML5" },
      { icon: <FaCss3 color="#1572B6" size={32} />, name: "CSS3" },
      { icon: <FaJs color="#F7DF1E" size={32} />, name: "JavaScript" },
      { icon: <FaReact color="#61DAFB" size={32} />, name: "React.js" },
      { icon: <FaVuejs color="#42b883" size={32} />, name: "Vue.js" },
      { icon: <SiRedux color="#764ABC" size={32} />, name: "Redux" },
      { icon: <SiTailwindcss color="#06B6D4" size={32} />, name: "Tailwind" },
    ],
  },
  {
    label: "Backend & DB",
    color: "#10b981",
    skills: [
      { icon: <FaNodeJs color="#339933" size={32} />, name: "Node.js" },
      { icon: <SiExpress color="#FFFFFF" size={32} />, name: "Express.js" },
      { icon: <SiMysql color="#4479A1" size={32} />, name: "MySQL" },
      { icon: <SiMongodb color="#47A248" size={32} />, name: "MongoDB" },
    ],
  },
  {
    label: "Languages & Tools",
    color: "#f59e0b",
    skills: [
      { icon: <FaPython color="#3776AB" size={32} />, name: "Python" },
      { icon: <FaGitAlt color="#F05032" size={32} />, name: "Git" },
      { icon: <FaGithub color="#FFFFFF" size={32} />, name: "GitHub" },
    ],
  },
  {
    label: "AI / ML",
    color: "#06b6d4",
    isLearning: true,
    skills: [
      { icon: <SiFastapi color="#009688" size={32} />, name: "FastAPI" },
      { icon: <FaPython color="#3776AB" size={32} />, name: "LangChain" },
      { icon: <SiOpenai color="#FFFFFF" size={32} />, name: "OpenAI API" },
      {
        icon: (
          <div className="w-8 h-8 flex items-center justify-center rounded font-bold text-xs"
            style={{ background: "linear-gradient(135deg,#6366f1,#06b6d4)", color: "#fff" }}>
            RAG
          </div>
        ),
        name: "RAG",
      },
    ],
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Indian Oil Corporation Ltd",
    period: "Sept 2024 – Apr 2025",
    type: "Full-time",
    color: "#10b981",
    badge: "✅ Completed",
    bullets: [
      "Built enterprise-grade internal web applications serving 500+ employees using React.js and Node.js",
      "Designed and optimized MySQL & MongoDB schemas, reducing average query time by ~35%",
      "Developed RESTful APIs integrating 3+ backend microservices for seamless data flow",
      "Collaborated with cross-functional teams to deliver production features on deadline",
    ],
    tags: ["React.js", "Node.js", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    role: "Software Engineer Intern",
    company: "Oasis Infobyte",
    period: "Sept 2023 – Dec 2023",
    type: "Internship",
    color: "#6366f1",
    badge: "✅ Completed",
    bullets: [
      "Developed 3+ production-ready web apps using React.js and Node.js in a 4-month internship",
      "Built reusable UI components reducing development time by 20% across projects",
      "Collaborated on full-stack features end-to-end — from UI to database layer",
    ],
    tags: ["React.js", "Node.js", "JavaScript", "CSS3"],
  },
  {
    role: "Machine Learning Trainee",
    company: "Internshala Trainings",
    period: "Jan 2024 – March 2024",
    type: "Training",
    color: "#f59e0b",
    badge: "📜 Certified",
    bullets: [
      "Completed Python-based ML training covering supervised & unsupervised learning algorithms",
      "Built and evaluated 5+ ML models: regression, classification, and clustering",
      "Applied data preprocessing, feature engineering, and cross-validation techniques",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML Algorithms"],
  },
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="Experience" className="px-4 py-16 md:px-20 md:py-24">
      <div className="flex items-end gap-4 mb-6">
        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight">Experience</h1>
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            borderRadius: "2px",
          }}
          className="w-16 mb-3"
        />
      </div>

      {/* Open to Work Banner */}
      <div
        className="flex items-center gap-3 mb-12 px-4 py-3 rounded-xl w-fit"
        style={{
          background: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.3)",
        }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#6366f1" }}></span>
          <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#6366f1" }}></span>
        </span>
        <p className="text-sm font-medium" style={{ color: "#a5b4fc" }}>
          Open to Work — Actively looking for Full Stack / Full Stack + AI roles
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* LEFT — Tech Stack */}
        <div className="lg:w-2/5">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium">Tech Stack</p>
          <div className="flex flex-col gap-6">
            {techCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: cat.color }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                  {cat.isLearning && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "rgba(6,182,212,0.12)",
                        border: "1px solid rgba(6,182,212,0.3)",
                        color: "#06b6d4",
                      }}
                    >
                      Learning
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative flex items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cat.color + "60";
                        e.currentTarget.style.background = cat.color + "12";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {skill.icon}
                      {/* Tooltip */}
                      <div
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                        style={{ background: "rgba(0,0,0,0.85)" }}
                      >
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Experience Timeline */}
        <div className="lg:w-3/5 flex flex-col gap-0">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium">Work History</p>

          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-4 group">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setActiveExp(idx)}
                  className="w-4 h-4 rounded-full mt-1 flex-shrink-0 transition-all duration-200 z-10"
                  style={{
                    background: activeExp === idx ? exp.color : "rgba(255,255,255,0.2)",
                    boxShadow: activeExp === idx ? `0 0 12px ${exp.color}80` : "none",
                    border: `2px solid ${exp.color}`,
                  }}
                />
                {idx < experiences.length - 1 && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{ background: "rgba(255,255,255,0.1)", minHeight: "24px" }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="mb-6 flex-1 rounded-xl p-5 cursor-pointer transition-all duration-200"
                style={{
                  background: activeExp === idx
                    ? `rgba(${exp.color === "#10b981" ? "16,185,129" : exp.color === "#6366f1" ? "99,102,241" : "245,158,11"},0.08)`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeExp === idx ? exp.color + "40" : "rgba(255,255,255,0.07)"}`,
                  borderLeft: `3px solid ${exp.color}`,
                }}
                onClick={() => setActiveExp(idx)}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-white font-semibold text-base md:text-lg leading-tight">
                        {exp.role}
                      </h2>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: exp.color + "20",
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">{exp.period}</p>
                    <p className="text-xs mt-0.5">{exp.badge}</p>
                  </div>
                </div>

                {/* Bullets — show when active */}
                <ul
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: activeExp === idx ? "300px" : "0px", opacity: activeExp === idx ? 1 : 0 }}
                >
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300 leading-relaxed mt-2">
                      <span style={{ color: exp.color }} className="mt-1 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                        style={{
                          background: exp.color + "15",
                          border: `1px solid ${exp.color}25`,
                          color: exp.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </ul>

                {/* Collapsed hint */}
                {activeExp !== idx && (
                  <p className="text-xs text-gray-500 mt-1">Click to expand ↓</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
