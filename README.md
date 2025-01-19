# Bridge23 Home Page

A modern, responsive landing page for Bridge23 built with Next.js 14 and shadcn/ui components.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide Icons](https://lucide.dev)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Light/Dark mode support
- ⚡ Fast page loads with Next.js 14
- 🧩 Reusable components
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bridge-23/BRIDGE23-HOME-NEW.git
cd BRIDGE23-HOME-NEW
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── lib/                 # Utility functions
├── public/             # Static assets
├── styles/             # Additional styles
└── types/              # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.
