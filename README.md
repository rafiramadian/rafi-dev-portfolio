# Rafi Ramadian - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Fast Performance**: Optimized for speed and SEO
- **TypeScript**: Type-safe code for better development experience
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Easy to Deploy**: Ready for deployment on Vercel, Netlify, or GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── lib/
    └── (utilities)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rafiramadian/rafi-dev-portfolio.git
cd rafi-dev-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and title
   - Description
   - Social media links

2. **About Section** (`src/components/About.tsx`):
   - Personal story
   - Background information

3. **Projects Section** (`src/components/Projects.tsx`):
   - Project details
   - Technologies used
   - Live demo and GitHub links

4. **Skills Section** (`src/components/Skills.tsx`):
   - Technical skills
   - Skill levels

5. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media links

### Colors and Styling

The project uses Tailwind CSS. You can customize colors by modifying the classes in the components or by extending the Tailwind configuration.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `out`

### GitHub Pages

1. Add this to your `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
}
```

2. Run `npm run build` to generate static files
3. Deploy the `out` folder to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rafiramadian/rafi-dev-portfolio/issues).

## 📧 Contact

Rafi Ramadian - [rafi@example.com](mailto:rafi@example.com)

Project Link: [https://github.com/rafiramadian/rafi-dev-portfolio](https://github.com/rafiramadian/rafi-dev-portfolio)

Live Demo: [https://rafiramadian.vercel.app](https://rafiramadian.vercel.app)

---

⭐ Star this repo if you find it helpful!
