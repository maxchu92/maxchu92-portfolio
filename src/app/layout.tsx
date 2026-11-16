import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0c',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Max Chu - CTO @ FatHopes Energy | Portfolio',
    default: 'Max Chu - CTO @ FatHopes Energy | Portfolio',
  },
  description:
    "Explore Max Chu's portfolio showcasing expertise in software development, React, Next.js, and innovative web solutions. Let's build something amazing!",
  keywords: [
    'Max',
    'Chu',
    'head',
    'Research',
    'Development',
    'Technology',
    'Manager',
    'CTO',
    'chief',
    'officer',
    'web',
    'front-end',
    'Lead',
    'full-stack',
    'Developer',
    'software',
    'mobile',
    'app',
    'website',
    'portfolio',
    'React.js',
    'Next.js',
    'dart',
    'flutter',
    'javascript',
    'css',
    'tailwind',
    'bootstrap',
    'asp',
    '.net',
    'C#',
    'vb',
    'winform',
    'wpf',
    'web solutions',
  ],
  authors: [{ name: 'Max Chu' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Max Chu - CTO @ FatHopes Energy | Portfolio`,
    description:
      "Dive into Max Chu's world of web development, featuring cutting-edge projects in React, Next.js, Flutter, and more.",
    url: 'https://maxchu92-portfolio.vercel.app/',
    siteName: 'Max Chu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Max Chu - CTO @ FatHopes Energy | Portfolio`,
    description:
      "Check out Max Chu's portfolio for impressive web development projects in React and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
