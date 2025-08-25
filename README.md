# Sunnyset

A modern Next.js 14 website with Plasmic integration, built with TypeScript and TailwindCSS.

## 🚀 Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety and better development experience
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Plasmic Integration** - Visual page builder with code components
- **Responsive Design** - Mobile-first approach
- **Static Export** - Ready for Cloudflare Pages deployment
- **Hot Reload** - Fast development with instant updates

## 🏗️ Architecture

```
                   [ Tasarımcılar ]
               Figma  Vibe coding UI
                       │
            ┌──────────┴──────────┐
            │                     │
        [Plasmic]            [Builder.io]
   görsel editor               görsel editor
   code components            custom components
            │                     │
            └──────────┬──────────┘
                       │  Git senkron  API çekme
                       ▼
                  [ GitHub Repo ]
                 main  dev  feature
                       ▲
                       │  push  pull request
             [Cursor IDE  senin kodun]
          Next.js  Nuxt  Prisma  Supabase client

                       │
                       │  otomatik build  deploy
                       ▼
               [ Cloudflare Pages  Workers ]
                 CDN  edge functions  SSL
                       │
        ┌──────────────┼───────────────────┐
        │              │                   │
        ▼              ▼                   ▼
   [Kullanıcı]   [Supabase Postgres]   [Harici APIler]
  tarayıcıdan     veritabanı  Auth        Adobe  Google
  domainine gelir  RLS  pgvector          Microsoft Graph
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React 19** - Latest React version

### Visual Design
- **Plasmic** - Visual page builder
- **Figma** - Design collaboration
- **Builder.io** - Alternative visual editor

### Development Tools
- **Cursor IDE** - AI-powered code editor
- **Git** - Version control
- **GitHub** - Code repository and collaboration

### Deployment & Infrastructure
- **Cloudflare Pages** - Static site hosting
- **Cloudflare Workers** - Edge functions
- **CDN** - Content delivery network
- **SSL** - Secure connections

### Backend & Services
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Row Level Security (RLS)
  - pgvector for AI/ML
  - Authentication
- **External APIs** - Adobe, Google, Microsoft Graph

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Git**
- **Plasmic account** (for visual editing)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ecanbaykurt/Sunnyset.git
cd Sunnyset
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
PLASMIC_PROJECT_ID=your_project_id_here
PLASMIC_PUBLIC_TOKEN=your_public_token_here
```

### 4. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Sunnyset/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── [...slug]/
│   │       └── page.tsx        # Dynamic Plasmic pages
│   └── plasmic-init.ts         # Plasmic configuration
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── .env.local.example          # Environment template
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # TailwindCSS configuration
└── README.md                   # This file
```

## 🎨 Development Workflow

### Option 1: Code-First Development
1. **Edit in Cursor IDE**
   - Modify `src/app/page.tsx` for homepage
   - Create new pages in `src/app/`
   - Update styles in `src/app/globals.css`

2. **Test Changes**
   - Save files for hot reload
   - View changes at `http://localhost:3000`
   - Use browser dev tools for debugging

### Option 2: Visual Design with Plasmic
1. **Open Plasmic**
   - Click "Open Plasmic" on homepage
   - Or visit [plasmic.app](https://plasmic.app)

2. **Design Pages**
   - Drag and drop components
   - Customize styles and layouts
   - Add interactions and animations

3. **Sync with Code**
   - Pages automatically sync to your site
   - Access via `/page-name` URLs
   - Code components available for customization

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Plasmic Integration

### Configuration
The project is configured to work with Plasmic through:
- `src/plasmic-init.ts` - Plasmic loader configuration
- Dynamic routing in `src/app/[...slug]/page.tsx`
- Environment variables for project credentials

### Features
- **Visual Page Builder** - Design pages without code
- **Code Components** - Custom React components
- **Real-time Sync** - Changes appear instantly
- **Version Control** - Track design changes
- **Team Collaboration** - Multiple designers can work together

### Getting Started with Plasmic
1. Visit [plasmic.app](https://plasmic.app)
2. Create or join a project
3. Update your `.env.local` with project credentials
4. Start designing pages visually

## ☁️ Cloudflare Pages Deployment

### Automatic Deployment
1. **Connect Repository**
   - Link your GitHub repository to Cloudflare Pages
   - Enable automatic deployments

2. **Build Configuration**
   - **Build command:** `npm run build`
   - **Output directory:** `out`
   - **Node.js version:** 18 or higher

3. **Environment Variables**
   - Add `PLASMIC_PROJECT_ID` and `PLASMIC_PUBLIC_TOKEN`
   - Configure any other required environment variables

### Manual Deployment
```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 🔧 Configuration

### Next.js Configuration
- **Static Export** - Enabled for Cloudflare Pages
- **Trailing Slash** - Enabled for consistent URLs
- **Image Optimization** - Disabled for static export

### TailwindCSS Configuration
- **Custom Colors** - Extend with your brand colors
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Add your own utility classes

### Plasmic Configuration
- **Project ID** - Your Plasmic project identifier
- **API Token** - Authentication token for API access
- **Preview Mode** - Enabled for development

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow React best practices
- Use TailwindCSS for styling

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

## 🔍 Troubleshooting

### Common Issues

**Port 3000 is in use**
```bash
# Kill existing Node.js processes
taskkill //f //im node.exe
# Or use a different port
npm run dev -- -p 3001
```

**Plasmic connection issues**
- Verify your project ID and token in `.env.local`
- Check your internet connection
- Ensure your Plasmic project is accessible

**Build errors**
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check`

### Getting Help
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Plasmic help center](https://docs.plasmic.app)
- Review [TailwindCSS documentation](https://tailwindcss.com/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Plasmic team** for the visual development platform
- **TailwindCSS team** for the utility-first CSS framework
- **Cloudflare** for the hosting platform

---

**Built with ❤️ using Next.js, TypeScript, TailwindCSS, and Plasmic**
