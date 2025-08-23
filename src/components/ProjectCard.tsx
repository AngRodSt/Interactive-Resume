interface ProjectCardProps {
  project: {
    title: string;
    status: string;
    statusColor: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    isPrivate?: boolean;
    privateMessage?: string;
    isMobileOnly?: boolean;
    mobileMessage?: string;
    credentials?: {
      email: string;
      password: string;
    };
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColorClasses = () => {
    // All status tags will be amber
    return "bg-amber-500/30 text-amber-200";
  };

  return (
    <div className="p-5 bg-blue-900/30 rounded-xl border border-blue-400/20 hover:bg-blue-900/50 transition-all">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-blue-300">{project.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${getStatusColorClasses()}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-slate-100 text-sm mb-3">{project.description}</p>

      <div className="flex gap-1 flex-wrap mb-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-amber-500/20 text-amber-200 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Special messages for private/mobile apps */}
      {project.isPrivate && project.privateMessage && (
        <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-2 mt-2">
          <p className="text-xs text-orange-300">
            <span className="font-bold">{project.privateMessage}</span>
          </p>
        </div>
      )}

      {project.isMobileOnly && project.mobileMessage && (
        <div className="bg-gray-500/20 border border-gray-400/30 rounded-lg p-2 mt-2">
          <p className="text-xs text-gray-300">
            <span className="font-bold">{project.mobileMessage}</span>
          </p>
        </div>
      )}

      {/* Credentials for projects that need them */}
      {project.credentials && (
        <div className="bg-black/30 rounded-lg p-2 mb-2">
          <p className="text-xs text-cyan-300 font-bold">Test credentials:</p>
          <p className="text-xs">
            📧 {project.credentials.email} | 🔑 {project.credentials.password}
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div className={`flex gap-2 ${project.isMobileOnly ? "mt-2" : ""}`}>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-600/50 hover:bg-blue-600/70 px-2 py-1 rounded transition-all flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-slate-600/50 hover:bg-slate-600/70 px-2 py-1 rounded transition-all flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
