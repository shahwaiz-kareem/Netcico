import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/dashboard/layout/Header.jsx';
import Sidebar from '@/components/dashboard/layout/Sidebar.jsx';
import { ThemeProvider } from '@/context/ThemeContext';
// const inter = Inter({ subsets: ['latin'], weight: '400' })
const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={" overflow-x-hidden  bg-[#0c0c0c]"} >
        <main>
          <ThemeProvider>
            <div className="flex flex-col  h-screen">
              <Header />
              <div className="flex flex-1  overflow-hidden">
                <Sidebar />
                <article className="flex flex-1 py-2 h-full overflow-y-auto paragraph px-4">
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
