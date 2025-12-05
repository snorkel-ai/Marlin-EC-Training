# Marlin EC Training v1

A modern React landing page for the Terminus EC Training platform.

## Features

- 🎨 Clean, modern UI with light theme
- 📱 Fully responsive design
- ⚡ Built with React + Vite for fast development
- 🚀 Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/snorkel-ai/Marlin-EC-Training.git
cd Marlin-EC-Training

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
4. Push to the `main` branch to trigger automatic deployment

Once deployed, your site will be available at:
`https://snorkel-ai.github.io/Terminus-EC-Training/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then upload the dist folder to your hosting provider
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **GitHub Actions** - CI/CD pipeline

## License

All rights reserved © 2025 Terminus EC Training
