import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travexy',
  description: 'Travexy app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='overflow-hidden relative'>
        {children}  
        </main>
        <Footer />
      </body>
    </html>
  )
}
