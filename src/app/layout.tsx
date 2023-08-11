import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const proxima = localFont({
  src: [
    {
      path: '../../public/fonts/Proxima Nova Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Proxima Nova Semibold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Proxima Nova Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-proxima',
});

export const metadata: Metadata = {
  title: 'Alwin John - Frontend Engineer | UX Engineer',
  description: 'Alwin John is a Frontend Engineer and UX Engineer based in Bangalore, India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${proxima.variable} font-sans`}>
      <body >{children}</body>
    </html>
  );
}
