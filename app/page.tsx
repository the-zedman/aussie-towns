import Image from 'next/image'
import type { Metadata } from 'next'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Discover Australia\'s Hidden Towns | AussieTowns.info',
  description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration. Perfect for road trippers, locals, and adventure seekers.',
  alternates: {
    canonical: 'https://aussietowns.info',
  },
  openGraph: {
    title: 'Discover Australia\'s Hidden Towns | AussieTowns.info',
    description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration.',
    url: 'https://aussietowns.info',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'AussieTowns.info - Discover Australia\'s Hidden Towns',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/three-sisters-and-mt-solitary-katoomba-nsw.jpg"
              alt="Three Sisters and Mount Solitary rock formation in Katoomba, Blue Mountains, NSW, Australia"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Discover Australia&apos;s Hidden Towns
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Your ultimate guide to regional and small towns – history, attractions, local businesses, and road trip inspiration
            </p>
            <button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg sm:text-xl transition-colors duration-200 shadow-lg transform hover:scale-105"
              aria-label="Explore Towns Coming Soon"
            >
              Explore Towns Coming Soon
            </button>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Perfect for road trippers, locals, and adventure seekers finding Australia&apos;s hidden gems.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              What is Aussie Towns Info?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed">
                AussieTowns.info is a comprehensive travel guide and directory, featuring detailed overviews of small and regional towns, including history, tourist attractions, local businesses, accommodation, and population info.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                A brand new directory celebrating Australia&apos;s diverse regional towns. From outback gems to coastal havens – history, sights, stats, and more.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                Perfect for road trippers and locals wanting to explore Australia&apos;s diverse towns and regions and discover those amazing hidden gems!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AussieTowns.info',
            url: 'https://aussietowns.info',
            description: 'Your ultimate guide to regional and small towns across Australia – history, attractions, local businesses, and road trip inspiration.',
            inLanguage: 'en-AU',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://aussietowns.info/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  )
}

