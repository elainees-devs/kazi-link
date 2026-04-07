
# KaziLink Job Board (React + TypeScript + Vite)

KaziLink is a modern job board web application built with React, TypeScript, Vite, and Tailwind CSS. It allows users to browse, filter, and apply for jobs with a beautiful and responsive UI.

## Features

- Job listings with filtering, sorting, and pagination
- Job details page with analytics
- Application form with drag-and-drop file upload (resume & cover letter, PDF/DOCX, Zod validation)
- Responsive layout and navigation bar (mobile-friendly)
- Search bar for jobs
- Sample data for jobs, categories, and analytics

## Dependencies

| Package | Version | Purpose |
| ------- | ------- | ------- |
| react | ^19.2.4 | Core UI library |
| react-dom | ^19.2.4 | DOM rendering for React |
| react-router-dom | ^7.14.0 | Routing for React apps |
| react-dropzone | ^15.0.0 | Drag-and-drop file uploads |
| axios | ^1.14.0 | HTTP requests |
| zod | ^4.3.6 | Schema validation |
| typescript | ~6.0.2 | TypeScript language support |
| @types/react | ^19.2.14 | TypeScript types for React |
| @types/react-dom | ^19.2.3 | TypeScript types for React DOM |
| @types/react-router-dom | ^5.3.3 | TypeScript types for React Router |
| @types/axios | ^0.9.36 | TypeScript types for Axios |
| @types/react-icons | ^2.2.7 | TypeScript types for React Icons |
| vite | ^8.0.4 | Frontend build tool |
| @vitejs/plugin-react | ^6.0.1 | Vite plugin for React |
| tailwindcss | ^3.4.19 | Utility-first CSS framework |
| postcss | ^8.5.8 | CSS processing |
| autoprefixer | ^10.4.27 | CSS vendor prefixing |
| eslint | ^9.39.4 | Linting |
| eslint-plugin-react-hooks | ^7.0.1 | Linting for React hooks |
| eslint-plugin-react-refresh | ^0.5.2 | Linting for React Fast Refresh |
| @eslint/js | ^9.39.4 | ESLint JS config |
| typescript-eslint | ^8.58.0 | TypeScript linting |
| globals | ^17.4.0 | Global variables for ESLint |
| react-icons | ^5.6.0 | Icon library for React |

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Installation

```bash
git clone <repo-url>
cd client
npm install
# or yarn
```

### Running the App

```bash
npm run dev
# or yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/pages/` — Main pages (Home, Jobs, JobDetails, Apply)
- `src/components/` — Reusable UI components (JobList, JobCard, Loader, Pagination, SearchBar, FilterBar, SortDropdown, FileUploadZone, etc.)
- `src/data/` — Sample data for jobs, categories, analytics
- `src/types/` — TypeScript interfaces
- `src/constants.ts` — Enums and constants

## Main UI Features

- **Home:** Shows 6 jobs, filter/sort controls, and "Explore All Jobs" button
- **Jobs:** All jobs with filter/sort/pagination, total jobs count in orange
- **Job Details:** Centered card with job info and analytics
- **Apply:** Centered form, drag-and-drop file upload for resume/cover letter (optional)


## License

MIT @ Elaine Muhombe
   
```
