# Repository Tour

## 🎯 What This Repository Does

Alleja Admin is a modern web-based administrative interface built with Next.js 15. This is a freshly initialized project that serves as the foundation for an admin dashboard, currently containing the default Next.js starter template with TypeScript and Tailwind CSS integration.

**Key responsibilities:**
- Provide a modern React-based admin interface
- Serve as the frontend foundation for the Alleja project's administrative functions
- Deliver a responsive, type-safe web application with modern styling capabilities

---

## 🏗️ Architecture Overview

### System Context
```
[Admin Users] → [Alleja Admin (Next.js)] → [Future Backend APIs]
                        ↓
                   [Static Assets & UI Components]
```

### Key Components
- **Next.js App Router** - Modern React framework with file-based routing and server components
- **TypeScript Integration** - Type-safe development with strict configuration
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Font Optimization** - Geist font family integration for modern typography

### Data Flow
1. User accesses the admin interface through the browser
2. Next.js serves the React application with server-side rendering
3. Tailwind CSS provides responsive styling and theming
4. TypeScript ensures type safety throughout the application
5. Static assets are optimized and served through Next.js

---

## 📁 Project Structure [Partial Directory Tree]

```
alleja-admin/
├── src/                    # Main application source code
│   └── app/               # Next.js App Router directory
│       ├── favicon.ico    # Application favicon
│       ├── globals.css    # Global styles and Tailwind imports
│       ├── layout.tsx     # Root layout component with fonts and metadata
│       └── page.tsx       # Home page component
├── public/                # Static assets served directly
│   ├── file.svg          # File icon for UI
│   ├── globe.svg         # Globe icon for UI
│   ├── next.svg          # Next.js logo
│   ├── vercel.svg        # Vercel logo
│   └── window.svg        # Window icon for UI
├── .next/                 # Next.js build output (auto-generated)
├── node_modules/          # Dependencies (auto-generated)
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration for Tailwind
└── tsconfig.json          # TypeScript configuration
```

### Key Files to Know

| File | Purpose | When You'd Touch It |
|------|---------|---------------------|
| `src/app/page.tsx` | Main homepage component | Adding new content to the landing page |
| `src/app/layout.tsx` | Root layout with fonts and metadata | Changing site-wide layout, fonts, or metadata |
| `src/app/globals.css` | Global styles and Tailwind imports | Adding global styles or CSS variables |
| `package.json` | Dependencies and scripts | Adding new libraries or changing build scripts |
| `next.config.ts` | Next.js configuration | Configuring build settings, redirects, or optimizations |
| `tsconfig.json` | TypeScript configuration | Changing TypeScript compiler settings |
| `eslint.config.mjs` | Code linting rules | Modifying code quality standards |

---

## 🔧 Technology Stack

### Core Technologies
- **Language:** TypeScript (^5) - Provides type safety and enhanced developer experience
- **Framework:** Next.js (15.5.2) - Modern React framework with App Router, SSR, and optimization features
- **Runtime:** React (19.1.0) - Latest React with concurrent features and improved performance
- **Styling:** Tailwind CSS (^4) - Utility-first CSS framework for rapid UI development

### Key Libraries
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind CSS processing
- **next/font/google** - Optimized Google Fonts integration (Geist Sans & Mono)
- **next/image** - Optimized image component with automatic optimization

### Development Tools
- **ESLint (^9)** - Code linting with Next.js specific rules
- **TypeScript** - Static type checking and enhanced IDE support
- **Turbopack** - Fast bundler for development (enabled in dev script)
- **PostCSS** - CSS processing for Tailwind CSS

---

## 🔄 Common Workflows

### Development Workflow
1. Run `npm run dev` to start the development server with Turbopack
2. Edit files in `src/app/` directory
3. Changes are automatically reflected with hot reloading
4. TypeScript provides real-time type checking

**Code path:** `src/app/page.tsx` → `Next.js App Router` → `Browser`

### Build and Deployment Workflow
1. Run `npm run build` to create production build with Turbopack
2. Run `npm start` to serve the production build locally
3. Deploy to Vercel or other hosting platforms

**Code path:** `Source Code` → `Turbopack Build` → `Static Files` → `Hosting Platform`

---

## 🚨 Things to Be Careful About

### 🔒 Security Considerations
- **Client-side rendering** - Ensure sensitive data is not exposed in client-side code
- **Environment variables** - Use Next.js environment variable conventions for configuration
- **Image optimization** - Leverage Next.js Image component for security and performance

### ⚡ Performance Considerations
- **Turbopack enabled** - Development and build processes use Turbopack for faster compilation
- **Font optimization** - Geist fonts are preloaded and optimized through next/font
- **App Router** - Uses modern React features like Server Components for better performance

### 🎨 Styling Considerations
- **Tailwind CSS v4** - Uses the latest version with new features and syntax
- **Dark mode support** - CSS variables are configured for light/dark theme switching
- **Responsive design** - Tailwind utilities provide mobile-first responsive design

*Updated at: 2025-01-27 12:00:00 UTC*