# Akib Hossain Dipu — Visual Graphic Designer Portfolio

A modern, high-performance creative portfolio website built with **Vite**, **React**, **Tailwind CSS**, and **Lucide Icons**, optimized for **GitHub Pages**.

---

## 🎨 Features
- **Hero & Headline Showcase:** Eye-catching creative typography with live availability badge.
- **Dynamic Category Filtering:** Filter designs across *Commercial & Posters*, *YouTube Thumbnails*, *Social Media*, and *Reels*.
- **Interactive Lightbox Modal:** Fullscreen high-resolution inspection with keyboard navigation (`Left`, `Right`, `Escape`).
- **Project Case Studies:** Client name, year, software tools, and strategic description for each piece.
- **Experience Timeline & Skills Matrix:** Clean breakdown of career history and software competencies.
- **Interactive CV / Resume Modal:** Instant browser review with one-click print or save as PDF.
- **Direct Contact System:** Formatted client inquiry generator and one-click email copying.
- **GitHub Actions Auto-Deploy:** Automated deployment to GitHub Pages on push.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to the project folder
cd portfolio-app

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

---

## 🌐 Deploy to GitHub Pages in 2 Easy Steps

### Option A: Using Git (Automated)
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. Go to **Settings > Pages** on your GitHub repository.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Your website will be live in ~1 minute at `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`!

### Option B: Drag & Drop (No Git CLI Needed)
1. Run `npm run build` locally.
2. Go to GitHub in your browser, create a new public repository (e.g., `portfolio`).
3. Drag and drop all files from the `dist/` folder into your repository.
4. Go to **Settings > Pages**, choose **Deploy from a branch > main > / (root)**, and save!

---

## ✏️ How to Add or Change Projects & Bio
All content is centralized in a single file:
`src/data/portfolioData.js`

To add a new project, simply place your image into `public/portfolio/` and add an entry:
```javascript
{
  id: "my-new-project",
  title: "Brand Poster Design",
  category: "commercial",
  tag: "Commercial Poster",
  client: "Client Name",
  year: "2024",
  image: "portfolio/my-image.png",
  description: "Description of the design project...",
  tools: ["Photoshop", "Illustrator"]
}
```
