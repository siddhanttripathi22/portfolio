import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <div className="flex items-end gap-4 mb-2">
        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight">Projects</h1>
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

        {/* ✅ Project 1 — AI Dashboard (Resume) */}
        <ProjectCard
          title="Protocol Upgrade Monitor"
          main="End-to-end AI dashboard with real-time blockchain analytics, time-series forecasting & live API integrations"
          demoUrl="#"
          githubUrl="https://github.com/siddhanttripathi22/protocol-upgrade-monitor"
          techStack={[
            "Python", "Streamlit", "FastAPI", "Prophet",
            "Etherscan API", "CoinGecko API", "Twitter v2 API", "Snapshot.org API"
          ]}
          techDescription="Full-stack AI analytics dashboard integrating 4 live APIs (Etherscan, CoinGecko, Twitter v2, Snapshot.org). Applied Facebook Prophet for 7-day predictive liquidity alerts. Modular architecture with caching reduced cold-start data load by ~60%."
        />

        {/* ✅ Project 2 — Local ChatGPT (Resume) */}
        <ProjectCard
          title="Local ChatGPT App"
          main="Full-stack LLM chat app with streaming responses, session history & on-device inference — zero API cost"
          demoUrl="#"
          githubUrl="https://github.com/siddhanttripathi22/ChatGPT-style-Chat-App-"
          techStack={[
            "React.js", "Node.js", "Ollama", "PostgreSQL",
            "LLM Integration", "Streaming API", "REST APIs"
          ]}
          techDescription="Full-stack AI chat application with React.js frontend, Node.js API layer, Ollama for on-device LLM inference, and PostgreSQL for persistent multi-session chat history. Streaming responses with session isolation — zero external API cost and zero data privacy exposure."
        />

        {/* ✅ Project 3 — Inventory (Resume, Indian Oil) */}
        <ProjectCard
          title="Inventory Management System"
          main="Enterprise-grade inventory & task tracking system for field supervisors — built at Indian Oil Corporation Ltd"
          demoUrl="#"
          githubUrl="#"
          techStack={[
            "React.js", "Node.js", "Redux", "REST APIs",
            "MySQL", "Geolocation API", "JWT Auth"
          ]}
          techDescription="Delivered full-stack inventory tracking modules used by 50+ field supervisors across depot locations. Multi-layer data validation achieving >99% form submission reliability in UAT. Includes real-time geolocation tracking and vendor validation via secure API integrations."
        />

        {/* ✅ Project 4 — Pokédex (Kept) */}
        <ProjectCard
          title="Pokédex App"
          main="Comprehensive Pokémon database with search, filter, and detailed stats for 800+ Pokémon"
          demoUrl="https://pokedex-web-gamma.vercel.app"
          githubUrl="https://github.com/siddhanttripathi22/pokedex_web"
          techStack={[
            "React.js", "JavaScript", "CSS3",
            "PokéAPI", "Responsive Design", "Local Storage"
          ]}
          techDescription="A comprehensive React-based Pokédex pulling live data from the PokéAPI. Features include search, type-based filtering, and detailed stat pages for 800+ Pokémon — fully responsive across mobile and desktop."
        />

        {/* ✅ Project 5 — Billing App (Kept) */}
        <ProjectCard
          title="Billing App"
          main="Collaborative billing app with real-time updates, offline PWA support, and team management features"
          demoUrl="https://billing-app-ebon.vercel.app/"
          githubUrl="https://github.com/siddhanttripathi22/Billing-App"
          techStack={[
            "React.js", "Tailwind CSS", "Redux",
            "PWA", "Local Storage", "Responsive Design"
          ]}
          techDescription="A modern billing application with real-time collaboration features and offline support via PWA. Includes invoice generation, team management, and an intuitive UI built with React and Redux."
        />

      </div>
    </div>
  );
};

export default Projects;
