# SoftSell – Software License Resale Platform (Frontend)

SoftSell is a modern, responsive landing page designed for a platform that allows users to sell their unused software licenses. Built using **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**, it features smooth animations, dark mode support, get value of their software  and a clean user experience.

---

## 🚀 Features Implemented

- **Responsive Layout**: Fully mobile-friendly grid layout using Tailwind CSS.
- **Dark Mode Toggle**: Toggle between light and dark themes using the `useState` hook.
- **Animated Hero Section**: Hero text animates in on page load using Framer Motion.
- **Random Quote Generator**: Simulates a dynamic quote for a license value between $500–$2000.
- **How It Works Section**: Animated, responsive 3-step explanation using Framer Motion.
- **Why Choose Us Section**: Grid layout of platform benefits with light/dark theming.
- **Client Testimonials**: Stylized testimonial cards with responsive layout.
- **Contact Form**: Validated form with `alert` feedback on submission (client-side only).
- **Accessible Icons**: Icons from `lucide-react` with `aria-label` for accessibility.
- **Tailwind Utility-First Styling**: Used throughout for consistency and speed.

---

## 🎨 Design Choices

- **Tailwind CSS**: Chosen for its utility-first approach, allowing rapid prototyping and clean, consistent styles.
- **Framer Motion**: Used selectively for lightweight, appealing animations on key UI elements (hero text, hover cards).
- **Dark Mode**: Implemented with a single state toggle, allowing easy theme switching with visual feedback (Sun/Moon icons).
- **Grid System**: Mobile-first design using responsive grids to ensure usability on all device sizes.
- **Minimalism**: Clean UI with intentional white space, rounded components, and subtle shadows for a professional SaaS look.

---

## ⏱️ Time Spent

| Task                                | Time Estimate |
|-------------------------------------|---------------|
| Project setup & component structure | 30 mins       |
| Dark mode implementation            | 20 mins       |
| Hero & quote logic                  | 30 mins       |
| Animated cards (How It Works)       | 30 mins       |
| Benefits & testimonials section     | 30 mins       |
| Contact form with validation        | 25 mins       |
| Styling & responsiveness tuning     | 45 mins       |
| README documentation                | 15 mins       |
| **Total Time Spent**                | **~3 hours 45 mins** |

---

## 📁 Folder Structure

/src
└── App.js / SoftSell.js # Main component
└── index.js # Entry point
└── assets/ # (Optional) images/icons



---

## 📌 Notes

- No backend integration yet; form submission and quote generation are simulated client-side.
- Easily extendable to support license uploads, real valuation APIs, or backend integration.

---

## 📷 Preview

https://github.com/deveshgoel27/SoftwareSell/blob/fe49d6851ceb68ed141b69e989197cbb5e62bb30/SoftSell.png

---

## 📄 License

MIT License. Free to use and modify.
