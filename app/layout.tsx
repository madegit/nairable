import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

const inter = Sora ({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nairable - Limitless Possibilities for Every Business',
  description: 'Discover innovative product design, web development, branding, and digital marketing solutions tailored to elevate your business.',
  icons: {
    icon: '/favicon.ico', // Ensure you have this favicon file in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
