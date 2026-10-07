# Soumesh Mazumdar Sourav - Personal Portfolio

A clean, modern, grounded, and full-stack personal portfolio website designed for **Soumesh Mazumdar Sourav** (Computer Science & Engineering Student | Aspiring Cybersecurity Professional).

Built with **React**, **Vite**, **Tailwind CSS**, an interactive **HTML5 Canvas network/node animation**, and an **Express Backend API** for contact messages.

---

## 📞 Contact Information

- **LinkedIn:** [https://www.linkedin.com/in/soumesh-mazumdar-b341133a8](https://www.linkedin.com/in/soumesh-mazumdar-b341133a8)
- **WhatsApp / Phone:** `+880 1631-204621` ([Chat on WhatsApp](https://wa.me/8801631204621))
- **Email:** `souravmazumdar45@gmail.com`
- **GitHub:** [infectedsourav (Soumesh Mazumdar Sourav)](https://github.com/infectedsourav)
- **Location:** Bangladesh

---

## 🚀 Features

- **Cybersecurity & Developer Aesthetic**: Deep navy/black palette (`#070b14`), blue & indigo accents, glassmorphic header, clean thin borders, and crisp typography (**Inter** & **JetBrains Mono**).
- **Interactive Network Background**: Custom HTML5 Canvas connecting nodes with dynamic distance lines and subtle cursor repulsion/connection.
- **Interconnected Full-Stack Architecture**:
  - **Frontend**: Responsive React app with real-time API integration.
  - **Backend**: Express API server (`POST /api/contact`) validating and persisting messages to `server/messages.json`.
  - **Hybrid / Fail-Safe**: If deployed to static hosting (like GitHub Pages) where the backend is not hosted, the contact form automatically provides seamless 1-click fallback to direct Email (mailto) and WhatsApp!
- **Featured Projects**: Includes *HealNSight* (Privacy-focused Telemedicine Platform) alongside structured project cards with technology tags and direct links.
- **Categorized Skills**: Programming, Web Development, Cybersecurity, and Developer Tools (no arbitrary percentage bars).
- **Learning & Development Timeline**: Clearly showcases learning progression (Linux, Networking, Nmap, Web Security, React, Django) and CSE fundamentals.
- **Direct Connect & Inquiries**: WhatsApp instant chat, copyable phone number, copyable Gmail, direct mail composer, and full contact form.
- **GitHub Pages Ready**: Configured with relative base path (`base: './'`) and an included GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Backend API**: [Express](https://expressjs.com/) + [CORS](https://www.npmjs.com/package/cors)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom WhatsApp, GitHub, & LinkedIn SVGs
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

---

## 📁 Project Structure

```
├── public/
│   ├── profile.jpg              # Your real photo
│   └── profile.svg              # Minimalist developer avatar backup
├── server/
│   ├── server.js                # Express API server (/api/contact & /api/health)
│   └── messages.json            # Persistent message storage
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky responsive header with active state
│   │   ├── Hero.jsx             # Hero section with headline and profile card
│   │   ├── NetworkBackground.jsx# Interactive canvas particle/network animation
│   │   ├── About.jsx            # Natural intro & education stats
│   │   ├── Projects.jsx         # Featured & categorized project showcase
│   │   ├── Skills.jsx           # Categorized competencies (no arbitrary %)
│   │   ├── Learning.jsx         # Early-career development timeline
│   │   ├── Contact.jsx          # Inquiry form & copyable contact details
│   │   ├── Footer.jsx           # Footer with social links & back-to-top
│   │   └── SocialIcons.jsx      # Pixel-perfect GitHub, LinkedIn & WhatsApp icons
│   ├── data/
│   │   └── portfolioData.js     # Single configuration file for all portfolio data
│   ├── App.jsx                  # Main application structure
│   ├── index.css                # Global styles, fonts, and dark theme
│   └── main.jsx                 # React DOM root entry
├── .github/workflows/
│   └── deploy.yml               # Automated GitHub Pages deployment
├── vite.config.js               # Vite config with relative base & API proxy
└── package.json
```

---

## 💻 Running Locally

### 1. Run both Frontend and Backend together (Full-Stack mode):
```bash
npm run dev:all
```
- Frontend will run on: `http://localhost:5173/`
- Backend API will run on: `http://localhost:5000/`
- Vite automatically proxies `/api/*` to the backend!

### 2. Run only Frontend:
```bash
npm run dev
```

### 3. Run only Backend:
```bash
npm run server
```

### 4. Build for Production:
```bash
npm run build
```

---

## 🌐 Linking with GitHub (infectedsourav)

To push this project to your GitHub account:

1. Create a new repository on your GitHub account: [https://github.com/new](https://github.com/new)
   (e.g., name it `sourav-portfolio` or `portfolio`)

2. In your terminal, run:
```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "feat: complete modern portfolio for Soumesh Mazumdar Sourav"

# Set main branch
git branch -M main

# Add your GitHub remote repository
git remote add origin https://github.com/infectedsourav/<YOUR-REPO-NAME>.git

# Push to GitHub
git push -u origin main
```

3. To enable GitHub Pages:
   - Go to your repository **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**
   - The included workflow will automatically build and publish your portfolio!
