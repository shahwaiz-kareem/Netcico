import Header from '@/components/root/layout/Header';
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/root/layout/Sidebar'
import Bottombar from '@/components/root/layout/Bottombar';
import TopLoader from '@/components/root/layout/TopLoader';

const inter = Inter({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Netcico.com || The treasure of information',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className + " overflow-x-hidden"} >
        <Header />
        <TopLoader />
        <main className='flex flex-row'>
          <Sidebar />
          <section className='flex min-h-screen flex-1 flex-col items-center   pb-10 pt-28 max-md:pb-32 '>
            <div className='w-full  '>
              {children}
            </div>
          </section>
        </main>
        <Bottombar />
      </body>
    </html>
  )
}

// lg:w-[91vw] xl:w-[93vw] 2xl:w-[99-vw]  
