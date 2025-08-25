# Sunnyset

A Next.js 14 project with TypeScript, App Router, TailwindCSS, and Plasmic integration.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Plasmic** for visual page building
- **Cloudflare Pages** deployment ready

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Plasmic account and project

## Environment Setup

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your Plasmic credentials:
```env
PLASMIC_PROJECT_ID=your_project_id_here
PLASMIC_PUBLIC_TOKEN=your_public_token_here
```

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Plasmic Integration

This project uses Plasmic for visual page building. The dynamic routing system automatically renders Plasmic pages based on the URL slug.

### Key Files:
- `src/plasmic-init.ts` - Plasmic configuration
- `src/app/[...slug]/page.tsx` - Dynamic page rendering

## Deployment on Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18 or higher

3. Add environment variables in Cloudflare Pages dashboard:
   - `PLASMIC_PROJECT_ID`
   - `PLASMIC_PUBLIC_TOKEN`

4. Deploy!

## Project Structure

```
src/
├── app/
│   ├── [...slug]/
│   │   └── page.tsx          # Dynamic Plasmic page rendering
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── plasmic-init.ts           # Plasmic configuration
└── ...
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Plasmic Documentation](https://docs.plasmic.app/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
