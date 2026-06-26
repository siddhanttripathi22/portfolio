import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <div className="flex items-end gap-4 mb-2">
        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight">
          Projects
        </h1>
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            borderRadius: "2px",
          }}
          className="w-16 mb-3"
        />
      </div>

      <p className="text-gray-400 text-sm mb-10 uppercase tracking-widest font-medium">
        Featured Work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto">

        {/* Project 1 */}
        <ProjectCard
          title="Protocol Upgrade Monitor"
          main="End-to-end AI dashboard with real-time blockchain analytics, time-series forecasting & live API integrations"
          demoUrl="#"
          githubUrl="https://github.com/siddhanttripathi22/protocol-upgrade-monitor"
          techStack={[
            "Python",
            "Streamlit",
            "FastAPI",
            "Prophet",
            "Etherscan API",
            "CoinGecko API",
            "Twitter API",
            "Snapshot API"
          ]}
          techDescription="Full-stack AI analytics dashboard integrating multiple APIs with predictive forecasting."
        />

        {/* Project 2 */}
        <ProjectCard
          title="Local ChatGPT App"
          main="Full-stack LLM chat app with streaming responses & local inference"
          demoUrl="#"
          githubUrl="https://github.com/siddhanttripathi22/ChatGPT-style-Chat-App-"
          techStack={[
            "React.js",
            "Node.js",
            "Ollama",
            "PostgreSQL",
            "LLM Integration"
          ]}
          techDescription="Chat app with local LLM inference and persistent chat history."
        />

        {/* Project 3 */}
        <ProjectCard
          title="Inventory Management System"
          main="Enterprise-grade inventory system built at Indian Oil"
          demoUrl="#"
          githubUrl="#"
          techStack={[
            "React.js",
            "Node.js",
            "Redux",
            "MySQL",
            "JWT Auth"
          ]}
          techDescription="Used by field supervisors for inventory tracking and validation."
        />

        {/* Project 4 */}
        <ProjectCard
          title="Pokédex App"
          main="Pokémon database with search & filtering"
          demoUrl="https://pokedex-web-gamma.vercel.app"
          githubUrl="https://github.com/siddhanttripathi22/pokedex_web"
          techStack={["React.js", "PokéAPI", "CSS3"]}
          techDescription="Interactive Pokédex with 800+ Pokémon data."
        />

        {/* Project 5 */}
        <ProjectCard
          title="Billing App"
          main="Collaborative billing app with PWA support"
          demoUrl="https://billing-app-ebon.vercel.app/"
          githubUrl="https://github.com/siddhanttripathi22/Billing-App"
          techStack={["React.js", "Redux", "PWA", "Tailwind"]}
          techDescription="Offline-enabled billing system with real-time collaboration."
        />

        {/* ✅ Project 6 — AI Job Copilot */}
        <ProjectCard
          title="AI Job Copilot"
          main="AI-powered job search assistant that analyzes resumes and matches jobs"
          demoUrl="https://ai-job-copilot.vercel.app"
          githubUrl="https://github.com/siddhanttripathi22/AI-Job-Copilot"
          techStack={[
            "React.js",
            "Node.js",
            "OpenAI API",
            "LangChain",
            "Express.js",
            "MongoDB",
            "JWT Auth"
          ]}
          techDescription="AI system that parses resumes, extracts skills using NLP, matches jobs, and generates cover letters + interview prep using LLMs."
        />

      </div>
    </div>
  );
};

export default Projects;
