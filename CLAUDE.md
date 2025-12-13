# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Abdiel Ortega built with Next.js 13.4.3 (App Router), TypeScript, and Tailwind CSS. The portfolio showcases skills, projects, and contact information for a frontend developer with 5 years of experience.

Deployed URL: https://portfolio-abdieljortega.vercel.app/

## Development Commands

### Running the Application
```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Create production build
npm start         # Run production server
npm run lint      # Run ESLint
```

### Formatting
The project uses Prettier with Tailwind CSS plugin:
```bash
npx prettier --write .
```

## Architecture & Structure

### Next.js App Router Structure
The project uses Next.js 13's App Router (not Pages Router):
- `app/layout.tsx` - Root layout with NavHeader, footer, and global metadata
- `app/page.tsx` - Single-page portfolio with all sections (#home, #about, #skills, #projects, #contact)
- `app/components/` - Shared React components
- `app/globals.css` - Global styles with Tailwind directives and custom CSS

### Single-Page Application
The entire portfolio is a single-page application in `app/page.tsx` with anchor-based navigation:
- **#home** - Hero section with photo, title, and social links
- **#about** - Brief bio section
- **#skills** - Grid of technology cards (JavaScript, React, Node.js, Vue, Redux, etc.)
- **#projects** - Grid of project cards with hover effects
- **#contact** - Contact information and social media links

All navigation is handled via `<a href="#section">` tags that link to section IDs.

### Component Patterns
- **Client Components**: Components using hooks (useState) must have `"use client"` directive at the top (e.g., `NavHeader.jsx`)
- **Server Components**: Default for app router components without state/browser APIs
- **Mixed File Extensions**: Mix of `.tsx` (TypeScript) and `.jsx` (JavaScript) files - maintain existing file extension when editing

### Styling Approach
The project uses a hybrid styling approach:
1. **Tailwind CSS** - Primary styling system with utility classes
2. **Custom CSS Classes** - Defined in `globals.css`:
   - `.backgroundRadial` - Radial gradient background for hero/contact sections
   - `.mainNav` - 95% width constraint for navigation
   - `.mainTitle` - Large gradient text effect for "Abdiel" title
3. **Responsive Design** - Mobile-first with `sm:` breakpoint for desktop layouts
4. **Dark Mode Variables** - CSS variables defined for dark mode support (though not actively toggled)

### Assets & Public Files
- SVG icons and images stored in `/public/` directory
- Next.js Image component used for optimized image loading
- Omega logo (`omega-logo.svg`) used as favicon and branding element

## Key Technical Details

### Navigation Component
`NavHeader.jsx` implements a responsive navigation:
- Desktop: Horizontal menu always visible
- Mobile: Hamburger menu with animated max-height transition
- Uses `useState` to manage menu open/close state
- Custom `BurgerIconMenu` and `CloseMenu` components for icons

### Styling Conventions
- Extensive use of Tailwind utility classes for responsive layouts
- Gradient backgrounds created with Tailwind's `bg-gradient-to-br` utilities
- Custom color palette focused on sky blue theme (`bg-sky-600`, `text-sky-700`)
- Shadow and hover effects for interactive elements (`hover:scale-110`, `hover:bg-slate-800/70`)

### Metadata & SEO
Root layout includes comprehensive metadata:
- Title: "Abdiel's Portfolio"
- Meta description with keywords (Frontend developer, React.js, JavaScript, etc.)
- Robots: index, follow
- Canonical URL
- Custom favicon (omega-logo.svg)

## Development Guidelines

### When Making Changes
- Preserve the single-page layout structure when adding/modifying sections
- Maintain responsive design patterns with mobile-first approach
- Keep the sky blue color theme consistent (`bg-sky-500`, `bg-sky-600`, `text-sky-700`)
- Use Tailwind utilities first before adding custom CSS
- Ensure `"use client"` directive is present when using React hooks or browser APIs
- Use Next.js `<Image>` component for all images with proper alt text

### Component File Extensions
- Use `.tsx` for new TypeScript components
- Use `.jsx` for existing JavaScript components (don't migrate unless requested)
- Maintain consistency with existing component's extension when editing

### Responsive Breakpoints
- Mobile: default (no prefix)
- Desktop: `sm:` prefix (640px and up)
- Most layouts use flexbox column on mobile, row on desktop
