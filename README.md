# NK Associates — Global Offshore Accounting Website

A modern, production-ready, multi-page corporate website for **NK Associates International** ("*Things you hate, let's us calculate*"), built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router**.

NK Associates provides dedicated offshore accounting, bookkeeping, and CPA firm back-office support from its central delivery hub in India to CPA practices, accounting firms, and growing businesses worldwide across the **United States, United Kingdom, Canada, Australia, UAE / Middle East, Europe, and Singapore**.

---

## 🚀 Key Features & Highlights

- **Multi-Page Architecture**: High-conversion pages (`/`, `/services`, `/how-it-works`, `/security`, `/about`, `/faq`, `/contact`) with smooth client-side routing.
- **Single Source of Truth**: All site copy, services, contact details, FAQs, regional standards, and placeholders are centralized in `/src/data/content.js` for quick client editing.
- **Brand Identity**: Clean white & sky-blue corporate theme (`#0EA5E9` sky blue, `#1974BB` logo blue, `#0A1E36` deep navy) extracted directly from `logo-nk.png`.
- **Illustrated Hero Dashboard**: Interactive operational card with SVG financial charts, live reconciliation progress bar, and SLA counters.
- **12 Comprehensive Core Services**: Bank reconciliations, AP/AR, month-end close, US GAAP/IFRS financial statements, historical catch-up, tax workpaper preparation, audit schedules, and dedicated offshore pods.
- **Global Time-Zone & Framework Coverage**: Dedicated coverage tabs for US GAAP, UK FRS 102, Australian AASB/BAS, UAE Corporate Tax/VAT, and Singapore SFRS.
- **2–4 Week Risk-Free Pilot Focus**: Prominent conversion offer allowing CPA firms to test accuracy and communication with 1–2 client ledgers before signing long-term retainers.
- **Security & White-Label Confidentiality**: Fiduciary-grade data governance: bilateral NDA, MFA enforcement, role-based least privilege, enterprise password vaults, and zero local data storage.
- **Production Form Validation**: Contact form with client-side validation, error handling, loading spinners, and Formspree/EmailJS integration readiness.
- **Floating WhatsApp Widget**: Persistent bottom-right quick chat button for instant client inquiries.
- **SEO & Performance Ready**: Dynamic `<head>` meta tags per route via `react-helmet-async`, Open Graph previews, `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (installed via npm with custom brand tokens) + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Routing**: React Router v6 (`react-router-dom`)
- **Animations**: Framer Motion & Tailwind transitions (respects `prefers-reduced-motion`)
- **SEO**: `react-helmet-async`

---

## 📁 Project Structure

```text
nk-associates-globel/
├── public/
│   ├── _redirects            # Netlify SPA redirect rules
│   ├── favicon.png           # Company favicon extracted from logo
│   ├── logo-nk.png           # Company logo
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # XML sitemap with all routes
├── src/
│   ├── assets/
│   │   └── logo-nk.png       # Source asset
│   ├── components/
│   │   ├── common/
│   │   │   ├── ContactForm.jsx     # Validated consultation & pilot form
│   │   │   ├── CtaBanner.jsx       # Reusable bottom conversion banner
│   │   │   ├── SectionHeading.jsx  # Consistent section typography
│   │   │   └── SeoMeta.jsx         # React Helmet Async meta wrapper
│   │   ├── home/
│   │   │   ├── EngagementModels.jsx# 3 transparent pricing/engagement tiers
│   │   │   ├── FaqAccordion.jsx    # Smooth FAQ accordion (10 questions)
│   │   │   ├── HeroDashboard.jsx   # SVG charts & operational metrics visual
│   │   │   ├── HeroSection.jsx     # Hero headline, dual CTAs, trust chips
│   │   │   ├── ProcessTimeline.jsx # 4-step pilot & onboarding journey
│   │   │   ├── RegionsServed.jsx   # Interactive global regions & timezones
│   │   │   ├── SecurityPillars.jsx # 6 security & data confidentiality cards
│   │   │   ├── ServicesGrid.jsx    # 12-service grid with category filters
│   │   │   ├── Testimonials.jsx    # Clearly marked client quote placeholders
│   │   │   ├── TrustStrip.jsx      # Accounting software badges (QBO, Xero, Bill.com...)
│   │   │   └── WhiteLabelBanner.jsx# White-label partnership model breakdown
│   │   └── layout/
│   │       ├── FloatingWhatsApp.jsx# Bottom-right quick WhatsApp launcher
│   │       ├── Footer.jsx          # Clean container with un-distorted logo & links
│   │       ├── Navbar.jsx          # Sticky navbar with logo & consultation CTA
│   │       └── ScrollToTop.jsx     # Resets scroll position on route change
│   ├── data/
│   │   └── content.js        # SINGLE SOURCE OF TRUTH for all website text & data
│   ├── pages/
│   │   ├── AboutPage.jsx       # Company story, values, delivery hub & team
│   │   ├── ContactPage.jsx     # Form, Calendly link, phone, email & address
│   │   ├── FaqPage.jsx         # Categorized FAQ directory with search
│   │   ├── HomePage.jsx        # Complete high-conversion homepage
│   │   ├── HowItWorksPage.jsx  # 4-step onboarding, QC & communication channels
│   │   ├── SecurityPage.jsx    # Deep dive into data governance & confidentiality
│   │   └── ServicesPage.jsx    # Full 12 services with deliverables & tools
│   ├── App.jsx               # Routes setup & layout shell
│   ├── index.css             # Tailwind directives & fine grid patterns
│   └── main.jsx              # React DOM render with HelmetProvider & BrowserRouter
├── .env.example              # Environment variables template
├── index.html                # HTML entry with font preconnect & SEO meta
├── package.json              # NPM dependencies & scripts
├── postcss.config.js         # PostCSS config
├── tailwind.config.js        # Brand color tokens & custom shadows
├── vercel.json               # Vercel SPA routing rewrite rules
├── vite.config.js            # Vite build configuration
└── README.md                 # Documentation
```

---

## 💻 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20.x recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Install dependencies
npm install
```

### 3. Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Building for Production
```bash
npm run build
```
This outputs an optimized production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Edit Website Content

All text on this website is centralized in:
👉 `src/data/content.js`

To update any content:
1. Open `src/data/content.js`.
2. Locate the relevant section:
   - **Company details**: `siteContent.company` (Name, tagline, year)
   - **Contact info**: `siteContent.contact` (Email, phone, WhatsApp number, address)
   - **Hero copy**: `siteContent.hero` (Headlines, sub-headlines, CTAs)
   - **Services**: `siteContent.services` (12 services, descriptions, deliverables)
   - **How It Works**: `siteContent.processSteps` (Timeline steps and durations)
   - **Global Regions**: `siteContent.regions` (Time zones, compliance standards, software)
   - **FAQs**: `siteContent.faqs` (Add, edit, or reorder questions and answers)
   - **Testimonials**: `siteContent.testimonials` (Replace placeholders with real reviews)
   - **Team Members**: `siteContent.about.teamStructure` (Add real names and credentials)
3. Save the file. The website updates automatically in development mode!

---

## 🔌 Connecting the Contact Form & Calendar

### Option A: Formspree (Recommended & Simplest)
1. Register a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/mqkvnxyz`).
3. Create a `.env` file in the project root:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. Restart your Vite dev server (`npm run dev`). When submitted, inquiries will go straight to your email.

### Option B: EmailJS
If you prefer EmailJS, install `emailjs-com` and update `src/components/common/ContactForm.jsx` with your Service ID, Template ID, and Public Key.

### Connecting Calendly
In `src/data/content.js`, update `contact.calendlyUrl`:
```js
calendlyUrl: "https://calendly.com/your-firm/15min-consultation",
```
This automatically updates every "Book a 15-Min Call" button across the entire site.

### Updating WhatsApp
In `src/data/content.js`, update:
```js
whatsappNumber: "919876543210", // Country code + digits (no spaces or plus)
whatsappDisplay: "+91 98765 43210",
```

---

## 🚀 Deployment Guide

### Deploying to Vercel
1. Push this repository to GitHub / GitLab.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
*(Note: `vercel.json` is already included to ensure client-side routing works properly for all pages).*

### Deploying to Netlify
1. Go to [Netlify](https://www.netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your GitHub repository.
3. Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.
*(Note: `public/_redirects` is already included to support SPA routing).*

---

## 📋 Client Placeholders Checklist

Before launching to the public, check and update these marked placeholders in `src/data/content.js`:

| Section | Field | Placeholder Location in `content.js` |
| :--- | :--- | :--- |
| Contact | Email Address | `contact.email` |
| Contact | Telephone Number | `contact.phone` |
| Contact | WhatsApp Number | `contact.whatsappNumber` & `contact.whatsappDisplay` |
| Contact | Physical Office Address | `contact.address` |
| Contact | Calendly Booking URL | `contact.calendlyUrl` |
| Home | Testimonial Quotes | `testimonials` (Replace sample templates with real client quotes) |
| About | Leadership Team Names & Bios | `about.teamStructure` (Replace template names with actual founders/leads) |
| About | Social Media Links | `socialLinks.linkedin`, `twitter`, `facebook` |

---

## 📄 License & Copyright

© 2026 NK Associates International. All rights reserved.
# NK-Associates-global
