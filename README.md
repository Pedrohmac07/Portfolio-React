# Pedro Machado's Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Pedrohmac07/Portfolio-React)

This is the repository for my personal portfolio website, designed to showcase my skills and projects. It is a modern, single-page application built with Next.js, React, and TypeScript, featuring a host of interactive animations and visual effects.

## ✨ Features

- **Interactive Particle Background:** A dynamic WebGL particle background created with `ogl` that reacts to mouse movement.
- **Scroll-Triggered Animations:** Content sections elegantly fade and slide into view on scroll, powered by `Framer Motion`.
- **Dynamic "About Me" Section:** Features an interactive text effect (`TextPressure`) that responds to cursor proximity and a scrolling logo wall (`LogoLoop`) of technologies I've worked with.
- **Tabbed Project Showcase:** My projects are neatly organized into "Front-End" and "Back-End" categories, with data dynamically loaded from a local JSON file.
- **3D Profile Card:** A visually striking profile card with a tilt effect that responds to mouse movement, creating a 3D illusion.
- **Typed Introduction:** An engaging headline with an auto-typing animation using `react-typed`.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animation & Visuals:**
    - Framer Motion (for layout and scroll animations)
    - OGL & tsparticles (for WebGL particle effects)
    - React Typed (for typing animations)
- **Icons:** FontAwesome, React Icons, Lucide React
- **Analytics:** Vercel Speed Insights

# Click [Here](https://portfolio-react-lovat-nine.vercel.app/) to see my portfolio 🚀

## 📂 Project Structure

-   `src/app/page.tsx`: The main page component that assembles all sections of the portfolio.
-   `src/components/`: Core UI components for the Home, About, and Projects sections.
    -   `HomeInfo.tsx`: The initial landing view with the typed introduction and social links.
    -   `AboutMeInfo.tsx`: The section detailing my skills and passion, including the technology logo loop.
    -   `TabsProjects.tsx`: The component that displays projects in a switchable tab view.
-   `src/particles/`: Components responsible for the portfolio's background visuals and animations.
    -   `particlesbackground.tsx`: The WebGL-based interactive particle background.
    -   `Framer-Motion.tsx`: A wrapper component for scroll-based animations.
-   `src/utils/`: Reusable, specialized components that add unique interactivity.
    -   `ProfileCard.tsx`: The interactive 3D-tilting profile card.
    -   `LogoLoop.tsx`: The horizontally scrolling logo display.
    -   `TextPressure.tsx`: The interactive text that changes based on cursor position.
-   `src/data/projects.json`: A static data file containing information about my personal projects.
