# Bridge23 Home Page

A modern, responsive landing page for Bridge23 built with Next.js 14 and shadcn/ui components.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive with separate mobile/desktop navigation
- 🌙 Light/Dark mode support
- ⚡ Fast page loads with Next.js 14
- 🧩 Reusable shadcn/ui components
- 🎯 SEO optimized with meta tags
- 🔄 Smooth transitions and animations
- 🛡️ Error boundaries for better error handling
- 📧 Newsletter subscription feature
- 🔗 Social media integration

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
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with error boundary
│   ├── page.tsx         # Home page
│   ├── pricing/         # Pricing page
│   ├── terms/           # Terms page
│   ├── privacy/         # Privacy page
│   └── globals.css      # Global styles
├── components/          
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components (Navigation, Footer)
│   │   └── navigation/ # Desktop and Mobile navigation
│   ├── sections/       # Page sections
│   │   ├── hero/       # Hero section components
│   │   └── features/   # Features section
│   └── features/       # Feature-specific components
├── public/             # Static assets
│   ├── social/         # Social media icons
│   ├── features/       # Feature images
│   └── integrations/   # Integration logos
├── types/              # TypeScript types
└── lib/               # Utility functions
```

## Development Rules

1. **Components:**
   - Use shadcn/ui for UI components
   - Create separate mobile/desktop versions for complex components
   - Implement error boundaries for error handling

2. **Styling:**
   - Use Tailwind CSS for styling
   - Follow mobile-first approach
   - Maintain consistent spacing and colors

3. **State Management:**
   - Use React hooks for local state
   - Implement proper error handling
   - Add loading states where necessary

4. **Performance:**
   - Optimize images using next/image
   - Implement proper SEO meta tags
   - Use proper lazy loading

5. **Code Organization:**
   - Keep components modular and reusable
   - Follow consistent naming conventions
   - Maintain proper file structure

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
