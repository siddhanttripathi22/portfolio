import React from "react";
import ProjectCard from "./ProjectCard";
import pokedexImg from "../../assets/pokedex-banner.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      
      
      <div className="py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto">
          
          <ProjectCard 
            bannerImg="/pokedex-banner.png"
            title="Pokédex App" 
            main="A comprehensive Pokémon database application with search and filter functionality"
            demoUrl="pokedex-web-gamma.vercel.app"
            githubUrl="https://github.com/siddhanttripathi22/pokedex_web"
            techStack={["React", "JavaScript", "CSS3", "Pokemon API", "Responsive Design"]}
            techDescription="This React Pokedex app is a comprehensive and user-friendly tool for Pokémon enthusiasts. Powered by React, this app provides an immersive experience where users can explore, search, and discover information about different Pokémon species. With an intuitive interface and a wide range of features, the React Pokedex app is the ultimate companion for Pokémon fans"
          />
          
          <ProjectCard 
            bannerImg="C:\Users\hp\OneDrive\Desktop\Portfolio_siddh\portfolio_siddhant\src\assets\ecommerce-banner.png"
            title="E-Commerce Web App" 
            main="Real-time messaging application with user authentication and chat rooms"
            demoUrl="https://e-commerce-kp.vercel.app/"
            githubUrl="https://github.com/siddhanttripathi22/mern_e_commerce"
            techStack={["React", "Node.js", "Authentication", "MongoDB", "Express", "JWT","Redux Toolkit","Payment Gateway","Css"]}
            techDescription="A full-stack chat application using Socket.io for real-time communication. Features include user authentication, multiple chat rooms, and message history storage."
          />
          
          <ProjectCard 
            title="Inngest Ai" 
            main="In Process......."
            demoUrl="#"
            githubUrl="#"
            techStack={["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"]}
            techDescription="Modern e-commerce platform with secure payment processing, inventory management, and admin dashboard. Built with Next.js for optimal performance and SEO."
          />
          
          <ProjectCard 
            title="Billing App" 
            main="Collaborative Billing App  with real-time updates and team features"
            demoUrl="https://billing-app-ebon.vercel.app/"
            githubUrl="https://github.com/siddhanttripathi22/Billing-App"
            techStack={["React js", "Tailwindcss", "Redux", "PWA", "Local Storage"]}
            techDescription="A modern billing app with real-time collaboration features, offline support, and intuitive drag-and-drop interface."
          />
          
          <ProjectCard 
            title="Weather Dashboard" 
            main="Interactive weather application with location-based forecasts and analytics"
            demoUrl="my-weather-app-sepia.vercel.app"
            githubUrl="https://github.com/siddhanttripathi22/My-Weather-App"
            techStack={["React", "Chart.js", "Weather API", "Geolocation", "Local Storage"]}
            techDescription="A comprehensive weather dashboard featuring current conditions, 7-day forecasts, interactive charts, and location-based weather tracking."
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;