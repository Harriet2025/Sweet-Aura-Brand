import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Élégance Parfum',
  description: 'Luxury Perfume & Beauty Ecommerce',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream font-body text-gray-900">
        {children}
      </body>
    </html>
  );
}
