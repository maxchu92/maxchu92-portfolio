import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import MultiProvider from '@/components/multi-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Max Chu - Full Stack Developer | Portfolio',
    default: 'Max Chu - Full Stack Developer | Portfolio',
  },
  description:
    "Explore Max Chu's portfolio showcasing expertise in software development, React, Next.js, and innovative web solutions. Let's build something amazing!",
  keywords: [
    'Max Chu',
    'full-stack developer',
    'portfolio',
    'React.js',
    'Next.js',
    'web development',
    'front-end developer',
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
    title: 'Max Chu - Full-stack Developer Portfolio',
    description:
      "Dive into Max Chu's world of web development, featuring cutting-edge projects in React, Next.js, and more.",
    url: 'https://your-portfolio-url.com', // Replace with your domain
    siteName: 'Max Chu Portfolio',
    images: [
      {
        url: 'https://your-portfolio-url.com/og-image.jpg', // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: 'Max Chu Portfolio Cover Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Chu - Full-stack Developer Portfolio',
    description:
      "Check out Max Chu's portfolio for impressive web development projects in React and Next.js.",
    images: [
      'https://your-portfolio-url.com/twitter-image.jpg', // Replace with your Twitter image URL
    ],
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
      </body>
    </html>
  );
}
