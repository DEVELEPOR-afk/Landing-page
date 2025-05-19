# TradingMentor Landing Page

A modern, responsive landing page for a trading mentorship program built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Optimized performance with Next.js
- Beautiful gradient effects and transitions
- Contact form for user inquiries
- Interactive pricing tiers section

## Tech Stack

- Next.js 13
- React 18
- Tailwind CSS
- Framer Motion
- PostCSS
- ESLint

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trading-mentorship.git
cd trading-mentorship
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
trading-mentorship/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   └── components/
│       └── sections/
│           ├── Hero.js
│           ├── About.js
│           ├── Tiers.js
│           ├── Register.js
│           ├── Contact.js
│           └── Footer.js
├── public/
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

- Colors and gradients can be modified in `tailwind.config.js`
- Global styles and components can be customized in `globals.css`
- Section content can be edited in their respective component files

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
