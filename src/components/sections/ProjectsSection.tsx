import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI MicroCopy Writer",
      status: "AI-Powered",
      statusColor: "amber",
      description:
        "Experimental AI-powered microcopywriter using Hugging Face and Google's Gemma-2-2b-it model. Generates marketing text variations in real-time, showcasing AI integration in Next.js applications.",
      technologies: ["Next.js", "Hugging Face", "Gemma AI"],
      demoUrl: "https://ai-micro-copywriter.vercel.app/",
      githubUrl: "https://github.com/AngRodSt/AI-Micro-Copywriter/",
    },
    {
      title: "ALIBYME",
      status: "In Progress",
      statusColor: "orange",
      description:
        "Advanced anime discovery platform powered by AniList GraphQL API. Features AI-powered recommendations, interactive carousels, studio exploration, and comprehensive search functionality.",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind"],
      demoUrl: "https://alibyme.vercel.app/",
      githubUrl: "https://github.com/AngRodSt/ALIBYME",
    },
    {
      title: "Explore Travel App",
      status: "Mobile App",
      statusColor: "blue",
      description:
        "Innovative travel discovery mobile app with interactive maps, AI-powered travel planning, and personalized itinerary creation with real-time weather integration.",
      technologies: ["React Native", "Expo", "OpenAI API", "Firebase"],
      isPrivate: true,
      privateMessage: "🔒 Private Repository - Mobile App in Development",
    },
    {
      title: "AgroClima Vega",
      status: "IoT + Web",
      statusColor: "green",
      description:
        "Precision agriculture solution combining IoT hardware (Arduino) with web dashboard. Provides 24/7 agricultural monitoring with intelligent analysis and automated alerts.",
      technologies: ["React", "Arduino", "Chart.js", "Leaflet"],
      demoUrl: "https://agro-clima-vega.vercel.app",
      githubUrl: "https://github.com/AngRodSt/AgroClima-Vega",
    },
    {
      title: "AngRod Designs",
      status: "E-commerce",
      statusColor: "amber",
      description:
        "Dynamic web application for 3D design and printing services. Integrates e-commerce powered by Shopify API and custom service request system.",
      technologies: ["Next.js", "Shopify API", "MongoDB", "Tailwind"],
      demoUrl: "https://ang-rod-designs.vercel.app",
      githubUrl: "https://github.com/AngRodSt/AngRod-Designs",
    },
    {
      title: "WorldsxMap",
      status: "Interactive",
      statusColor: "cyan",
      description:
        "Interactive world map where each country is clickable and customizable. Users can select countries, change colors, and attach personalized notes.",
      technologies: ["Next.js", "Express", "MongoDB", "Tailwind"],
      demoUrl: "https://worldsxmapv2.vercel.app/",
      githubUrl: "https://github.com/AngRodSt/World-Map-Frontend-V.2",
      credentials: {
        email: "correo@correo.com",
        password: "123456",
      },
    },
    {
      title: "Tank Filler IoT Controller",
      status: "Mobile IoT",
      statusColor: "blue",
      description:
        "IoT mobile app for remote water tank monitoring and control. Features real-time Firebase integration, animated water level indicators, and manual/automatic pump control.",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/AngRodSt/Tank-Filler-Application",
      isMobileOnly: true,
      mobileMessage: "📱 Mobile App - No disponible en web",
    },
    {
      title: "Veterinary Patients Manager",
      status: "Full Stack",
      statusColor: "green",
      description:
        "Complete management system for veterinary clinics. Enables veterinarians to register, update, and manage appointments efficiently with secure authentication.",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      demoUrl: "https://apvveterinarymanager.netlify.app/",
      githubUrl: "https://github.com/AngRodSt/APV-Frontend",
    },
  ];

  return (
    <div className="w-[760px] h-[480px] p-8 bg-gradient-to-br from-slate-800/95 via-blue-900/95 to-slate-900/95 backdrop-blur-sm text-white border border-blue-400/30 rounded-xl overflow-hidden">
      <h2 className="font-bold text-3xl mb-8 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[380px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        {/* Spacer at the end */}
        <div className="h-6"></div>
      </div>
    </div>
  );
}
