import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import MultiProvider from '@/components/multi-provider';
//import profile from '@/data/profile.json';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Max Chu - R&D Manager | Portfolio',
    default: 'Max Chu - R&D Manager | Portfolio',
  },
  description:
    "Explore Max Chu's portfolio showcasing expertise in software development, React, Next.js, and innovative web solutions. Let's build something amazing!",
  keywords: [
    'Max',
    'Chu',
    'Research',
    'Development',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  openGraph: {
    title: `Max Chu - R&D Manager | Portfolio`,
    description:
      "Dive into Max Chu's world of web development, featuring cutting-edge projects in React, Next.js, Flutter, and more.",
    url: 'https://maxchu92-portfolio.vercel.app/',
    siteName: 'Max Chu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Max Chu - R&D Manager | Portfolio`,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased min-h-screen`}>
        <MultiProvider>{children}</MultiProvider>
        <Analytics />
      </body>
    </html>
  );
}
