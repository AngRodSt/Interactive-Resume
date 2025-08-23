export default function ExperienceSection() {
  const experiences = [
    {
      position: "Full Stack Developer – App Explore",
      company: "Explore Atlas LLC",
      period: "Mar 2025 - Present",
      description:
        "Built comprehensive travel discovery mobile application from wireframes to deployment using React Native, Expo, and Firebase backend integration.",
      achievements: [
        "Optimized API calls & state management, improving UI performance significantly",
        "Achieved >85% test coverage with automated CI/CD pipelines implementation",
        "Integrated OpenAI API for intelligent travel recommendations",
      ],
    },
    {
      position: "Desktop App Developer – RentCarApp",
      company: "Freelance Project",
      period: "Sep 2024 - Dec 2024",
      description:
        "Developed comprehensive C# .NET desktop application for car rental business management including client, vehicle, and booking administration.",
      achievements: [
        "Designed efficient MySQL database schemas for optimal data management",
        "Implemented automated rate calculation and report generation systems",
        "Created intuitive user interface for seamless business operations",
      ],
    },
    {
      position: "Technical Support Specialist",
      company: "Impresora Diseño e Arte",
      period: "Feb 2023 - May 2023",
      description:
        "Provided comprehensive technical support for design and printing equipment, ensuring optimal operational efficiency and minimal downtime.",
      achievements: [
        "Reduced equipment downtime through proactive maintenance protocols",
        "Troubleshot complex technical issues for design and printing systems",
        "Trained staff on proper equipment usage and maintenance procedures",
      ],
    },
  ];

  return (
    <div className="w-[760px] h-[480px] p-8 bg-gradient-to-br from-slate-800/95 via-blue-900/95 to-slate-900/95 backdrop-blur-sm text-white border border-blue-400/30 rounded-xl overflow-hidden">
      <h2 className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
        Professional Experience
      </h2>
      <div className="space-y-5 overflow-y-auto max-h-[390px] pr-2 pb-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-5 bg-blue-900/30 rounded-xl border border-blue-400/20 hover:bg-blue-900/50 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-xl text-blue-300">
                  {exp.position}
                </h3>
                <p className="text-blue-200 text-base font-medium">
                  {exp.company}
                </p>
              </div>
              <span className="text-amber-400 font-bold text-sm whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-100 text-sm mb-3 leading-relaxed">
              {exp.description}
            </p>
            <div className="grid grid-cols-1 gap-2 text-xs text-blue-300">
              {exp.achievements.map((achievement, achievementIndex) => (
                <div key={achievementIndex}>• {achievement}</div>
              ))}
            </div>
          </div>
        ))}

        {/* Spacer at the end */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}
