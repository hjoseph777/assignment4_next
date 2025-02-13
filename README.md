# Next.js Portfolio Project Assignment I

A modern, responsive portfolio website built with Next.js, featuring theme switching and dynamic routing.

## 🚀 Live Demo
Visit the live site: [https://hjoseph777.github.io/assignment1/](https://hjoseph777.github.io/assignment1/)

## 📁 Project Structure

### Root Directory
```
assignment1/
├── pages/              # Main route pages
├── src/
│   ├── components/     # Reusable UI components
│   └── styles/        # Styling files
├── public/            # Static assets
└── contexts/          # React Context providers
```

### Pages Directory (`/pages`)
Contains the main route pages of the application. Each file corresponds to a route.

- `index.tsx` - Home page
- `about.tsx` - About page
- `contact.tsx` - Contact page
- `_app.tsx` - App wrapper with global providers
- `_document.tsx` - Custom document component

View code: [https://github.com/hjoseph777/assignment1/tree/main/pages](https://github.com/hjoseph777/assignment1/tree/main/pages)

### Components (`/src/components`)
Reusable UI components used throughout the application.

- `Layout.tsx` - Main layout wrapper
- `NavBar.tsx` - Navigation component
- `Footer.tsx` - Footer component
- `ThemeToggle.tsx` - Theme switching button

View code: [https://github.com/hjoseph777/assignment1/tree/main/src/components](https://github.com/hjoseph777/assignment1/tree/main/src/components)

### Styles (`/src/styles`)
Manages the application's styling and theming.

- `globals.css` - Global styles and CSS variables
- `Layout.module.css` - Layout-specific styles
- `Page.module.css` - Page-specific styles
- `theme.ts` - Theme configuration

View code: [https://github.com/hjoseph777/assignment1/tree/main/src/styles](https://github.com/hjoseph777/assignment1/tree/main/src/styles)

## 🎨 Features

- Responsive design
- Dark/Light theme switching
- Modern glass-morphism effects
- Dynamic page transitions
- Modular CSS with CSS Modules
- Type-safe with TypeScript

## 🛠️ Technologies

- Next.js 15.1.7
- React 19.0.0
- TypeScript
- CSS Modules
- Tailwind CSS
- React Icons

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hjoseph777/assignment1.git
```

2. Install dependencies:
```bash
cd assignment1
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
npm run build
```

## 🌐 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## 📝 License

MIT License - feel free to use this project as a template for your own portfolio!

