import { Feature197 } from "@/components/ui/accordion-feature-section"

const demoData = {
  features: [
    {
      id: 1,
      title: "Ready-to-Use UI Blocks",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description:
        "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
    },
    {
      id: 2,
      title: "Tailwind CSS & TypeScript",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      description:
        "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
    },
    {
      id: 3,
      title: "Dark Mode & Customization",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      description:
        "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
    },
    {
      id: 4,
      title: "Accessibility First",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&h=600&fit=crop",
      description:
        "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
    },
    {
      id: 5,
      title: "Modern Development Stack",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=600&fit=crop",
      description:
        "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
    },
  ],
};

function Feature197Demo() {
  return <Feature197 {...demoData} />;
}

export { Feature197Demo };