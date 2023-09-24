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
    <html lang="en" className=''>
      <body className={inter.className}>
        <main className="min-h-screen w-full min-w-[340px] max-w-6xl  mx-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
