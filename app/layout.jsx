import './globals.css'
import { Rubik } from 'next/font/google'
import {Providers} from "./providers";

// components
import Navbar from './components/Navbar3'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'amsa-app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={rubik.className}>
        <Providers>
        <Navbar />
        {children}
        </Providers>
        

      </body>
    </html>
  )
}
