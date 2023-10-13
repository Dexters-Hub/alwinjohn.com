import Nav from '@/components/Nav/Nav';
import './globals.css';

import localFont from 'next/font/local';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alwinjohn.com'),
  title: {
    default: 'Alwin John | Frontend Engineer',
    template: '%s | Alwin John',
  },
  description: 'Alwin John is a Frontend Engineer and UX Engineer based in Bangalore, India. He is a GitHub Campus Expert`22. He is passionate about building great user experiences and solving problems.',
};



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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${proxima.variable} font-sans`}>
      <body>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
