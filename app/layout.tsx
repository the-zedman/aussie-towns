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
  openGraph: {
    title: 'Discover Australia\'s Hidden Towns | AussieTowns.info',
    description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration.',
    url: 'https://aussietowns.info',
    siteName: 'AussieTowns.info',
    locale: 'en_AU',
    type: 'website',
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

