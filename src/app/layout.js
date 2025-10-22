import dynamic from 'next/dynamic'
import Providers from '@/providers/Providers'
import './globals.css'

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
      <body className=" relative w-screen overflow-scroll overflow-x-hidden scroll-smooth flex flex-col items-center bg-EpaBackground">
        <Header />
        <Providers>{children}</Providers>
        <DownbarMobile />
        <Footer />
      </body>
    </html>
  )
}
