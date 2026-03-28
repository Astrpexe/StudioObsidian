import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Studio Obsidian | Premium Conversion-Driven Web Design',
    template: '%s | Studio Obsidian'
  },
  description: 'High-performance, mobile-first web design and engineering. We build websites that load in milliseconds and convert visitors into customers.',
  keywords: ['web design', 'web development', 'performance optimization', 'conversion rate optimization', 'next.js', 'tailwind css', 'obsidian standard'],
  authors: [{ name: 'Studio Obsidian' }],
  creator: 'Studio Obsidian',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studioobsidian.com',
    title: 'Studio Obsidian | Premium Conversion-Driven Web Design',
    description: 'High-performance, mobile-first web design and engineering. We build websites that load in milliseconds and convert visitors into customers.',
    siteName: 'Studio Obsidian',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Obsidian | Premium Conversion-Driven Web Design',
    description: 'High-performance, mobile-first web design and engineering.',
    creator: '@studioobsidian',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <body className="font-body bg-background text-on-surface selection:bg-[#ffffff]/30 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
