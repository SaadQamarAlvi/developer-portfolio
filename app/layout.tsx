import type { Metadata } from 'next';
import './globals.css'; // Make sure your global styles are imported here

export const metadata: Metadata = {
  metadataBase: new URL('https://saadqamaralvi.vercel.app'),
  
  title: {
    default: 'Saad Qamar Alvi | IT Student & Software Developer',
    template: '%s | Saad Qamar Alvi',
  },
  description: 'Personal portfolio of Saad Qamar Alvi — IT undergraduate showcasing projects in Next.js, C++, databases, and web automation.',
  
  openGraph: {
    title: 'Saad Qamar Alvi | IT Student & Software Developer',
    description: 'Explore my software projects, technical skills, and development portfolio.',
    url: 'https://saadqamaralvi.vercel.app',
    siteName: 'Saad Qamar Alvi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Qamar Alvi | IT Student & Software Developer',
    description: 'Explore my software projects, technical skills, and development portfolio.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}