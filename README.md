# Vasant Valley School - Modern Web Redesign

![Vasant Valley Hero](https://static.vasantvalley.org/wp-content/uploads/2021/04/image-vasant2.png)

A sleek, premium, and fully responsive redesign of the Vasant Valley School website, built as a technical evaluation task for an internship selection process. 

This project completely reimagines the school's digital presence, moving away from legacy web structures to a modern, dynamic, and highly interactive user experience powered by React and Framer Motion.

## 🌟 Key Features

* **Premium UI/UX Architecture:** Custom CSS grids, elegant typography (Cormorant Garamond & Montserrat), and a rich crimson/cream/onyx color palette designed to evoke institutional prestige.
* **Fluid Animations:** Powered by `framer-motion`, featuring page transitions, staggered grid reveals, and smooth interactive hover states.
* **Custom Interactive Elements:** A bespoke, dynamic red-dot custom cursor (automatically disabled on touch devices) that adds a unique layer of interaction.
* **Fully Responsive:** Meticulously crafted CSS media queries ensuring seamless scaling from 4K desktop displays down to mobile smartphones.
* **Dynamic Content Hubs:** Architected dedicated, scrollable grid hubs for structured data (Programmes, News & Events, Campus Infrastructure).
* **Modern Navigation:** Responsive mega-footer and an animated, full-screen mobile hamburger overlay menu.

## 🛠️ Tech Stack

* **Framework:** React 19 (via Vite)
* **Routing:** React Router v7
* **Styling:** Pure Vanilla CSS (Custom Design System & Variables)
* **Animation:** Framer Motion

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/StrawHatViking/DETTROIN-INT-Uday-Website.git
cd DETTROIN-INT-Uday-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). 

1. Push your code to a GitHub repository.
2. Import the repository in your Vercel Dashboard.
3. Vercel will automatically detect the Vite framework and apply the correct build settings (`npm run build`).
4. Deploy!

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, CustomCursor)
├── pages/               # Route components (Home, Academics, Admissions, etc.)
├── App.jsx              # Main application root and routing logic
├── index.css            # Global design system, variables, and responsive resets
└── main.jsx             # React entry point
```

## 📝 License

This project was developed for evaluation purposes. All structural images and logos are the property of Vasant Valley School.
