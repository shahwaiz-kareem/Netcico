import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/dashboard/layout/Header.jsx';
import Sidebar from '@/components/dashboard/layout/Sidebar.jsx';
import { ThemeProvider } from '@/context/ThemeContext';
const inter = Inter({ subsets: ['latin'], weight: '400' })
const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className + " overflow-x-hidden"} >
        <main>
          <ThemeProvider>
            <div className="flex flex-col h-screen">
              <Header />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <article className="flex flex-1  overflow-y-auto paragraph px-4">
                  {children}
                </article>
              </div>
            </div>
          </ThemeProvider >
        </main>
      </body>
    </html>
  )
}

export default RootLayout
