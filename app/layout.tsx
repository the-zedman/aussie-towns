import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discover Australia\'s Hidden Towns | AussieTowns.info',
  description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration. Perfect for road trippers, locals, and adventure seekers.',
  keywords: 'Australian towns, regional Australia, small towns, road trips, travel guide, local businesses, tourist attractions',
  authors: [{ name: 'AussieTowns.info' }],
  creator: 'AussieTowns.info',
  publisher: 'AussieTowns.info',
  metadataBase: new URL('https://aussietowns.info'),
  alternates: {
    canonical: 'https://aussietowns.info',
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Aussie Towns Info',
  },
  openGraph: {
    title: 'Discover Australia\'s Hidden Towns | AussieTowns.info',
    description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration.',
    url: 'https://aussietowns.info',
    siteName: 'AussieTowns.info',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'AussieTowns.info - Discover Australia\'s Hidden Towns',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  )
}

