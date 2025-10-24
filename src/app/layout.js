import { Open_Sans, Poppins, Abril_Fatface } from 'next/font/google'
import dynamic from 'next/dynamic'
import Providers from '@/providers/Providers'
import './globals.css'

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['serif'],
  variable: '--font-openSans',
})

export const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  fallback: ['serif'],
  variable: '--font-abrilFatface',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  fallback: ['serif'],
  variable: '--font-poppins',
})

const Header = dynamic(() => import('./components/ui/Header'))
const Footer = dynamic(() => import('./components/ui/Footer'))
const DownbarMobile = dynamic(() => import('./components/ui/DownbarMobile'))

export const metadata = {
  title: 'All For Her',
  description:
    'The best content for the strongest women. Desgined & developed by Media Moob',
  version: '1.2.0',
  openGraph: {
    title: 'All For Her',
    description:
      'The best content for the strongest women. Desgined & developed by Media Moob',
    url: '',
    siteName: 'AllForHer',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${abrilFatface.variable} ${poppins.variable} relative w-screen overflow-scroll overflow-x-hidden scroll-smooth flex flex-col items-center bg-black font-poppins`}
      >
        <Header />
        <Providers>{children}</Providers>
        <DownbarMobile />
        <Footer />
      </body>
    </html>
  )
}
