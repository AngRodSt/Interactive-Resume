# 🌟 Interactive 3D Resume

A modern, interactive 3D resume built with Next.js and Three.js, showcasing professional experience through an immersive web experience.
👉 Live demo: Explore the tool in action. https://interactive-resume-beige.vercel.app/

## Features

- **Interactive 3D Experience**: Navigate through different sections with smooth 3D animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 15 and React 19 for maximum speed
- **Modern Design**: Professional blue/amber color scheme with glassmorphism effects
- **Downloadable CV**: Direct PDF download functionality
- **Portfolio Integration**: Links to live projects and GitHub repositories
- **Professional Sections**: Home, About, Projects, Experience, and Contact

## Tech Stack

### Frontend

- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript 5** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework

### 3D Graphics

- **Three.js 0.179.1** - 3D graphics library
- **@react-three/fiber 9.3.0** - React renderer for Three.js
- **@react-three/drei 10.7.3** - Helper components for React Three Fiber

### Styling & Effects

- **Framer Motion** - Smooth animations and transitions
- **Glassmorphism Effects** - Modern UI design patterns
- **Custom Particle System** - Interactive background effects

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── sections/           # Modular section components
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── Card3D.tsx          # Main 3D card component
│   ├── ParticleField.tsx   # Background particle effects
│   └── ProjectCard.tsx     # Individual project cards
public/
├── CV-Sthefany-Angeles-2025.pdf
└── [assets]               # Images and icons
```

## Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Quick Start

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Update your information in the relevant section components:

- `src/components/sections/HomeSection.tsx` - Name, title, and tech stack
- `src/components/sections/AboutSection.tsx` - Personal background and philosophy
- `src/components/sections/ContactSection.tsx` - Contact information

### Projects

Modify the projects array in `src/components/sections/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    status: "Project Status",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    demoUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/your-repo",
  },
  // Add more projects...
];
```
## 👤 Author

**Sthefany Angeles Rodriguez**

- Portfolio: [angrodstportfolio.vercel.app](https://angrodstportfolio.vercel.app/)
- LinkedIn: [linkedin.com/in/sthefany-angeles](https://www.linkedin.com/in/sthefany-%C3%A1ngeles-rodr%C3%ADguez-6348642ba/)
- GitHub: [@AngRodSt](https://github.com/AngRodSt)
- Email: sthefanyangeles00@gmail.com

⭐ If you found this project helpful, please give it a star on GitHub!

Made with ❤️ and lots of ☕ by Sthefany Angeles

```
