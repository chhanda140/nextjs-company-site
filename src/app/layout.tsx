// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Company',
  description: 'Company website built without Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>

        <main className="container">
          {children}
        </main>

        <footer>
          © {new Date().getFullYear()} My Company
        </footer>
      </body>
    </html>
  );
}
