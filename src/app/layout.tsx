import Aside from './components/Aside'
import Header from './components/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MercaLibre Challenge',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='grid grid-rows-homeLayout min-h-screen'>
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-mainLayout'>
          <Aside />
          {children}
        </main>
      </body>
    </html>
  )
}
