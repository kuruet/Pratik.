# Pratik Bhure - Portfolio Website

## Overview

This is a personal portfolio website for Pratik Bhure, a MERN Stack Developer. The project is a single-page application built with vanilla HTML, CSS, and JavaScript, featuring a modern, responsive design with smooth animations and transitions. The site showcases professional work experience, technical skills, project portfolio, and contact information through an intuitive user interface with a fixed sidebar navigation and mobile-responsive hamburger menu.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5 for semantic markup
- Vanilla CSS3 with CSS custom properties for theming
- Vanilla JavaScript (ES6+) for interactivity
- No external frameworks or build tools

**Design System:**
- CSS custom properties (CSS variables) for consistent theming
- Color scheme: Dark theme with warm accent colors
  - Primary background: `#0a0a0a` (near-black)
  - Secondary background: `#111111`
  - Primary text: `#ffffff` (white)
  - Secondary text: `#bbbbbb` (light gray)
  - Accent color: `#f9b234` (warm yellow/orange)
- Typography: Poppins font family from Google Fonts
- Maximum content width: 1200px with centered layout
- Consistent spacing and border radius (12-20px)

**Navigation Pattern:**
- Desktop: Fixed vertical sidebar (280px width) with icon-based navigation
- Mobile: Hidden sidebar with hamburger menu toggle overlay
- Smooth scroll behavior for section navigation
- Active state tracking based on viewport scroll position

**Layout Structure:**
- Single-page application with section-based navigation
- Key sections: Home (Hero), About, Skills, Portfolio, Experience, Contact
- Sidebar remains fixed while main content scrolls
- Mobile breakpoint: 768px

**Interaction Patterns:**
- Scroll-linked navigation with active state highlighting
- Intersection Observer API for detecting visible sections
- Modal system for portfolio item details
- Smooth scroll animations between sections
- Click-outside detection for mobile menu closure

**Responsive Strategy:**
- Mobile-first considerations with desktop enhancements
- Sidebar transforms to overlay menu on mobile devices
- Touch-friendly targets and spacing on mobile
- Viewport-based layout adjustments

### Code Organization

**File Structure:**
```
/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styling and responsive rules
├── js/
│   └── script.js       # All interactive functionality
└── assets/
    └── images/         # Profile photos, project images, icons
```

**JavaScript Architecture:**
- Event-driven architecture using native DOM APIs
- Event delegation for performance
- Modular functionality through function encapsulation
- DOMContentLoaded initialization pattern
- Query selectors for DOM element references

**CSS Architecture:**
- Root-level CSS custom properties for global theming
- Consistent naming conventions for classes
- Mobile-responsive media queries
- Transition and animation properties for smooth UX
- Box-shadow and hover effects for depth

## External Dependencies

### Third-Party Services

**Google Fonts:**
- Purpose: Typography (Poppins font family)
- Integration: CDN link in HTML head
- Weights used: 300, 400, 500, 600, 700

**Font Awesome:**
- Purpose: Icon library for navigation and UI elements
- Integration: CDN link (version 6.4.0)
- Usage: Navigation icons, social media icons, UI indicators

### Browser APIs

**Intersection Observer API:**
- Purpose: Detecting visible sections for navigation state updates
- Used for: Active menu item highlighting based on scroll position

**Smooth Scroll Behavior:**
- Purpose: Animated scrolling between sections
- Implementation: CSS `scroll-behavior: smooth` with JavaScript fallback

### Asset Requirements

**Images:**
- Profile photo for hero section
- Project screenshots for portfolio section
- Company logos for experience section (if applicable)
- All images should be optimized for web performance

**No Backend Dependencies:**
- Static site with no server-side processing
- Contact form may require future integration with form submission service
- No database or authentication system required