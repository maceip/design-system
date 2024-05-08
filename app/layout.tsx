import  {type Metadata, type Viewport  } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fontMono, fontSans } from '../lib/fonts'
import '../app/globals.css'
import { Providers } from '../components/providers'

import { cn } from '@/lib/utils'
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: undefined,
  title: {
    default: `design`,
    template: `design`
  },
  description: `nft`,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
  
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
      
          <Providers attribute="class" defaultTheme="system" enableSystem>
            {children}
           
          </Providers>
      </body>
    </html>
  )
}