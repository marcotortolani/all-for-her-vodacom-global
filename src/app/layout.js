import dynamic from 'next/dynamic'
import Providers from '@/providers/Providers'
// import ChatBot from "./components/ChatBot"
import './globals.css'

const Header = dynamic(() => import('./components/ui/Header'))
const Footer = dynamic(() => import('./components/ui/Footer'))
const DownbarMobile = dynamic(() => import('./components/ui/DownbarMobile'))

export const metadata = {
  title: 'EPA Mujer',
  description:
    'Portal de contenido para mujeres. Diseñado y desarrollado por Media Moob',
  version: '1.1.5',
  openGraph: {
    title: 'EPA Mujer',
    description:
      'Portal de contenido para mujeres. Diseñado y desarrollado por Media Moob',
    url: 'http://ve.digitel.epa.club/',
    siteName: 'EpaMujer',
    locale: 'es_ES',
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
        {/* <ChatBot /> */}
        <Footer />
      </body>
    </html>
  )
}
