# AION Technologies (AIMS) - Web Application

## Overview
This is a modern, responsive web application for **AION Technologies (P) Ltd.**, specifically representing the **AION Institute of Management Studies (AIMS)**. The platform is designed to showcase the institute's programs, admissions, faculty, placement opportunities, and research initiatives.

## Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Forms/Validation:** React Hook Form & Zod

## Application Structure
- `/src/components/layout/`: Core layout components (`Navbar`, `Footer`).
- `/src/pages/`: Main views (e.g., `Home`).
- `/src/assets/`: Static assets including the institute logo (`logo.png`).
- `/src/components/`: Reusable UI components (e.g., `ProgramCard`, `RecruitersMarquee`, `AwardsSection`).

## Development Context & AI Agent Instructions
This section serves as context for AI assistants and developers continuing the development of this project:

1. **Logo & Branding:** 
   - The application uses a custom user-provided logo (`src/assets/logo.png`). 
   - The logo was specifically requested by the user to replace a generated placeholder. Do **not** replace or modify `src/assets/logo.png` with a generic generated SVG or image.

2. **Styling Guidelines:**
   - Adhere strictly to Tailwind CSS utility classes.
   - Maintain the established color scheme (deep blues, professional academic theme).

3. **Routing:**
   - The app uses `react-router-dom`. Any new pages should be added to the routing configuration in `App.tsx` (or `main.tsx`).

4. **Animations:**
   - Use `motion/react` for scroll animations, page transitions, and interactive elements.

5. **GitHub Integration Note (For AI Studio Users):**
   - The user experienced issues with the native AI Studio GitHub integration (missing/glitching permissions and the GitHub option not appearing in the Integrations tab).
   - If exporting this project, the recommended workaround is to use the **"Export as ZIP"** option from the AI Studio settings menu and manually push the code to a GitHub repository.

## Getting Started
To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```
