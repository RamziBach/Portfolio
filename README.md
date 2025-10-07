# 🐉 Ramzi Bach - Portfolio

My modern, NextJS, TailwindCSS, shadcn portfolio website.

**[🌐 Live website](https://ramzibach.dev)**

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Icons**: Lucide React + Simple Icons
- **Font**: Geist (Variable fonts)
- **Deployment**: Vercel

## Project Structure

```
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles and CSS variables
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Home page
├── components/                 # Reusable UI components
│   ├── ui/                     # shadcn/ui base components
│   ├── about.tsx               # About section with hover cards
│   ├── experience.tsx          # Work experience with tabs
│   ├── footer.tsx              # Footer with rich text links
│   ├── header.tsx              # Navigation with social links
│   ├── hero.tsx                # Hero section with live clock
│   ├── language-switcher.tsx   # i18n language toggle
│   ├── live-clock.tsx          # Real-time Montreal clock
│   └── mode-toggle.tsx         # Dark/light theme toggle
├── i18n/                       # Internationalization config
│   └── request.ts              # next-intl configuration
├── lib/                        # Utility functions
│   └── utils.ts                # shadcn utilities
├── messages/                   # Translation files
│   ├── en.json                 # English translations
│   └── fr.json                 # French translations
└── middleware.ts               # Locale detection middleware
```

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/RamziBach/Portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
