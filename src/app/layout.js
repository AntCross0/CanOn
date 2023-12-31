import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Can on',
  description: 'Share media about your pets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen h-full w-full min-w-[340px] max-w-6xl mx-auto'>
      <body className={inter.className}>
        <main className="min-h-screen h-full w-full min-w-[340px] max-w-6xl  mx-auto overflow-hidden">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
