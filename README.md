# ContentKing - Content Management Studio

A modern content management application built with React, TypeScript, and Contentstack CMS. ContentKing provides a beautiful and intuitive interface for managing your content with real-time preview capabilities.

## Features

- **Contentstack Integration**: Seamless integration with Contentstack CMS
- **Live Preview**: Real-time content preview with Contentstack Live Preview SDK
- **Modern UI**: Beautiful, responsive interface built with shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Content Types**: Support for various content types including hero sections, features, team members, and more

## Getting Started

**Use your preferred IDE**

To set up ContentKing locally, you'll need Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd pixelpage-studio-main

# Step 3: Install dependencies
npm install

# Step 4: Configure environment variables (see Configuration section below)
cp .env.example .env.local
# Edit .env.local with your Contentstack credentials

# Step 5: Start the development server
npm run dev
```

## Configuration

Before running the application, you need to configure your Contentstack credentials. Create a `.env.local` file in the root directory with the following variables:

```env
VITE_CONTENTSTACK_API_KEY=your_api_key_here
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
VITE_CONTENTSTACK_ENVIRONMENT=your_environment_here
VITE_CONTENTSTACK_REGION=us
VITE_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here
```

### Getting Contentstack Credentials

1. Log in to your [Contentstack account](https://app.contentstack.com/)
2. Navigate to your stack
3. Go to Settings > Tokens to get your API Key and Delivery Token
4. Go to Settings > Environments to confirm your environment name
5. For Live Preview, go to Settings > Live Preview to get your Preview Token

## Technology Stack

This project is built with modern web technologies:

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components

### Content Management
- **Contentstack** - Headless CMS for content management
- **Contentstack Live Preview SDK** - Real-time content preview
- **Contentstack Delivery SDK** - Content delivery and fetching

### Additional Libraries
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible component primitives

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Content Types

ContentKing supports various content types configured in Contentstack:

- **Global Settings** - Site-wide configuration
- **Navigation** - Menu and navigation items
- **Hero Sections** - Landing page hero content
- **Feature Cards** - Product/service features
- **Core Products** - Main product information
- **Statistics** - Numerical data and metrics
- **Role Cards** - Team roles and positions
- **Value Cards** - Company values and principles
- **Team Members** - Staff profiles
- **Job Openings** - Career opportunities
- **Footer** - Site footer content

## Deployment

This project can be deployed to any static hosting service:

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting service
3. **Configure environment variables** on your hosting platform

Popular hosting options:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [AWS S3 + CloudFront](https://aws.amazon.com/)
- [GitHub Pages](https://pages.github.com/)
