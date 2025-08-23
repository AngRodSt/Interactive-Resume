export default function ContactSection() {
  return (
    <div className="w-[760px] h-[480px] p-8 bg-gradient-to-br from-slate-800/95 via-blue-900/95 to-slate-900/95 backdrop-blur-sm text-white border border-blue-400/30 rounded-xl overflow-hidden">
      <h2 className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
        Let&apos;s Connect
      </h2>
      <div className="grid grid-cols-2 gap-6 h-[400px]">
        <div className="space-y-4">
          <div className="p-5 bg-blue-900/30 rounded-xl border border-blue-400/20 h-full">
            <h3 className="font-bold text-lg text-blue-300 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:sthefanyangeles00@gmail.com" className="block">
                  <p className="text-blue-200 font-medium text-sm">Email</p>
                  <p className="text-slate-100 text-xs">
                    sthefanyangeles00@gmail.com
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/sthefany-%C3%A1ngeles-rodr%C3%ADguez-6348642ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-blue-200 font-medium text-sm">LinkedIn</p>
                  <p className="text-slate-100 text-xs">
                    linkedin.com/in/sthefany-angeles
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    />
                  </svg>
                </div>
                <a
                  href="https://github.com/AngRodSt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-blue-200 font-medium text-sm">GitHub</p>
                  <p className="text-slate-100 text-xs">github.com/AngRodSt</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-r from-blue-600/20 to-amber-600/20 rounded-xl border border-blue-400/30 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                Ready to Collaborate?
              </h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4">
                I&apos;m always excited to work on innovative projects and
                collaborate with talented teams. Let&apos;s build something
                amazing together!
              </p>
              <div className="bg-blue-800/30 rounded-lg p-3 mb-4">
                <p className="text-blue-200 font-medium text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Open to new opportunities
                </p>
                <p className="text-blue-200 font-medium text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Available for remote work
                </p>
                <p className="text-blue-200 font-medium text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  Quick response guaranteed
                </p>
              </div>

              {/* Download CV Button in Contact */}
              <a
                href="/CV-Sthefany-Angeles-2025.pdf"
                download="CV-Sthefany-Angeles-2025.pdf"
                className="inline-flex items-center gap-2 px-3 py-2 bg-blue-700/50 hover:bg-blue-600/60 text-blue-200 hover:text-white font-medium rounded-lg transition-all duration-300 border border-blue-400/30 text-xs"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
