 
import { ZoneProvider } from '@/context/ZoneContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Payload CMS Customization Guide',
  description: 'Interactive guide for customizing Payload CMS admin panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ZoneProvider>
        {children}
        </ZoneProvider>
        </body>
    </html>
  )
}

