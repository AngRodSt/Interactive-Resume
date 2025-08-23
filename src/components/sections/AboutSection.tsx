export default function AboutSection() {
  return (
    <div className="w-[760px] h-[480px] p-8 bg-gradient-to-br from-slate-800/95 via-blue-900/95 to-slate-900/95 backdrop-blur-sm text-white border border-blue-400/30 rounded-xl overflow-hidden">
      <h2 className="font-bold text-3xl mb-8 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-6 text-slate-100 leading-relaxed overflow-y-auto max-h-[380px]">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Professional Background
            </h3>
            <p className="text-sm mb-4">
              I am a passionate full-stack developer from the Dominican Republic
              with a deep enthusiasm for technology and innovation. My journey
              in programming began with a curiosity about how digital solutions
              can transform everyday challenges into opportunities for growth
              and efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              AI & Innovation
            </h3>
            <p className="text-sm mb-4">
              My fascination with artificial intelligence has led me to explore
              various AI technologies and their practical applications in web
              development. I am constantly experimenting with AI APIs, machine
              learning models, and intelligent automation to create smarter,
              more intuitive user experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              </svg>
              Development Philosophy
            </h3>
            <p className="text-sm mb-4">
              I am a strong advocate for clean, maintainable code and modern
              development practices. I prioritize code quality, performance
              optimization, and user experience in every project I undertake. My
              approach combines technical excellence with creative
              problem-solving.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              Personal Interests
            </h3>
            <p className="text-sm mb-4">
              Beyond coding, I am passionate about exploring emerging
              technologies, contributing to open-source projects, and sharing
              knowledge with the developer community. I enjoy participating in
              tech meetups, online forums, and collaborative coding sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
