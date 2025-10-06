# 🐉 Ramzi Bach - Portfolio

A modern, responsive portfolio website showcasing my work as a Front-End Web Developer. Built with cutting-edge technologies and featuring multilingual support, this portfolio represents my journey in web development and content creation.

![Portfolio Screenshot](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC)

## ✨ Features

### 🌍 **Internationalization (i18n)**

- **English & French** support with seamless language switching
- Cookie-based locale persistence
- Rich text support for complex components with embedded links
- Professional translations for all content

### 🎨 **Modern UI/UX**

- **Dark/Light mode** toggle with system preference detection
- Responsive design optimized for all devices
- **shadcn/ui** components with consistent styling
- Smooth animations and hover effects
- **NextTopLoader** for elegant page transitions

## 🏗 Architecture

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + CSS Modules
- **UI Components**: shadcn/ui
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Icons**: Lucide React + Simple Icons
- **Font**: Geist (Variable fonts)
- **Deployment**: Vercel

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui base components
│   ├── about.tsx          # About section with hover cards
│   ├── experience.tsx     # Work experience with tabs
│   ├── footer.tsx         # Footer with rich text links
│   ├── header.tsx         # Navigation with social links
│   ├── hero.tsx           # Hero section with live clock
│   ├── language-switcher.tsx # i18n language toggle
│   ├── live-clock.tsx     # Real-time Montreal clock
│   └── mode-toggle.tsx    # Dark/light theme toggle
├── i18n/                  # Internationalization config
│   └── request.ts         # next-intl configuration
├── lib/                   # Utility functions
│   └── utils.ts           # shadcn utilities
├── messages/              # Translation files
│   ├── en.json            # English translations
│   └── fr.json            # French translations
└── middleware.ts          # Locale detection middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

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

## 🌐 Internationalization

This portfolio supports English and French with the following features:

- **Automatic language detection** based on browser preferences
- **Cookie persistence** for language preference
- **Rich text support** for components with embedded links
- **Complete translations** for all user-facing content

### Adding New Languages

1. Create a new translation file in `messages/[locale].json`
2. Add the locale to the middleware configuration
3. Update the language switcher component

## 🎨 Customization

### Theme Colors

Modify CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: oklch(0.21 0.034 264.665);
  --secondary: oklch(0.967 0.003 264.542);
  /* ... other colors */
}
```

### Components

All components are modular and can be easily customized:

- **UI Components**: Located in `components/ui/`
- **Section Components**: Located in `components/`
- **Styling**: TailwindCSS classes with CSS variables

## 📱 Responsive Design

- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: xs (475px), sm, md, lg, xl, 2xl
- **Optimized layouts** for all screen sizes
- **Touch-friendly** interactions on mobile devices

## 🔧 Performance Optimizations

- **Next.js Image** component for optimized images
- **Font optimization** with variable fonts
- **Code splitting** with dynamic imports
- **Skeleton loading** states to prevent layout shift
- **Efficient re-renders** with React best practices

## 🚀 Deployment

This project is optimized for deployment on **Vercel**:

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if any)
3. **Deploy** with automatic builds on push

### Other Deployment Options

- **Netlify**: Works out of the box
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

**Ramzi Bach** - Front-End Web Developer

- 📧 Email: [ramzibach.dev@gmail.com](mailto:ramzibach.dev@gmail.com)
- 🐙 GitHub: [RamziBach](https://github.com/RamziBach)
- 🎥 YouTube: [Slaying The Dragon](https://youtube.com/@slayingthedragon)
- 💼 Platform: [SlayingTheDragon.io](https://slayingthedragon.io)

---

**Built with ❤️ in Montreal, Canada 🍁**
