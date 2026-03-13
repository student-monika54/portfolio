# Portfolio Website

A modern, responsive portfolio website built with **React** and **Vite**. Features a clean design with smooth animations, project showcase, and contact information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Modern UI**: Clean design with gradients and subtle animations
- **Project Showcase**: Display your projects with images and descriptions
- **Contact Section**: Easy way for visitors to reach out
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS** - Custom styling with CSS variables
- **ESLint** - Code linting

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project folder
2. **Install dependencies**:
   ```bash
   npm install
   ```
   If you encounter peer dependency issues, use:
   ```bash
   npm install --legacy-peer-deps
   ```

## 🏃‍♂️ Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Production Build
Build the app for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## 🎨 Customization

### Personal Information
Edit `src/App.jsx` to update:
- Your name and tagline
- About section content
- Skills list
- Project information
- Contact details and social links

### Styling
Modify `src/App.css` to customize:
- Color scheme (update CSS variables in `:root`)
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

### Projects
Update the `projects` array in `src/App.jsx` with your actual projects:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['Tech1', 'Tech2'],
    link: 'https://your-project-link.com',
    image: 'https://your-image-url.com'
  },
  // Add more projects...
]
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite • 2026
