import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://developer-portfolio-delta-seven.vercel.app'),
  title: 'Saad Qamar Alvi | Full-Stack Developer & IT Undergraduate',
  description: 'Portfolio of Saad Qamar Alvi showcasing Next.js, React, serverless APIs, and modern web application development.',
  openGraph: {
    title: 'Saad Qamar Alvi | Developer Portfolio',
    description: 'Explore web apps, serverless integration, and projects built by Saad Qamar Alvi.',
    url: 'https://developer-portfolio-delta-seven.vercel.app',
    siteName: 'Saad Qamar Alvi Portfolio',
    images: [
      {
        url: '/og-image.PNG',
        width: 1200,
        height: 630,
        alt: 'Saad Qamar Alvi Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Qamar Alvi | Full-Stack Developer & IT Undergraduate',
    description: 'Portfolio of Saad Qamar Alvi showcasing Next.js, React, serverless APIs, and modern web application development.',
    images: ['/og-image.PNG'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}