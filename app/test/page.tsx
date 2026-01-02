import Image from 'next/image'
import type { Metadata } from 'next'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Test Landing Page - Aussie Towns Info Design',
  description: 'Test page for designing the new primary landing page for Aussie Towns Info - comprehensive travel guide for Australian regional towns.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://aussietowns.info/test',
  },
  openGraph: {
    title: 'Test Landing Page - Aussie Towns Info Design',
    description: 'Test page for designing the new primary landing page for Aussie Towns Info - comprehensive travel guide for Australian regional towns.',
    url: 'https://aussietowns.info/test',
    siteName: 'AussieTowns.info',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Aussie Towns Info - Test Landing Page',
      },
    ],
    // @ts-ignore - og:logo is not in Next.js types but is a valid Open Graph property
    logo: '/logo.png',
  },
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Australian Flag Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYXVzIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDAwOTYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2F1cykiLz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="text-center">
            {/* Australian Flag & Made Logo */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-16 h-10 sm:w-24 sm:h-14 bg-red-600 relative border-2 border-blue-600 rounded shadow-lg">
                <div className="absolute inset-0 bg-blue-600" style={{ clipPath: 'polygon(0 0, 0 50%, 50% 0)' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-0 left-0 w-1/2 h-1/2">
                  <div className="absolute top-2 left-2 w-1 h-3 sm:w-1.5 sm:h-4 bg-white"></div>
                  <div className="absolute top-2 left-2 w-3 h-1 sm:w-4 sm:h-1.5 bg-white"></div>
                </div>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm">AU</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-primary">Aussie</span> Towns Info
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mb-2 sm:mb-3">
              Your True Blue Guide to Australia's Hidden Gems
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              Comprehensive travel guide and directory featuring detailed overviews of small and regional towns, 
              including history, tourist attractions, local businesses, accommodation, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#explore" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Explore Towns
              </a>
              <a 
                href="#about" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fair Dinkum <span className="text-primary">Aussie</span> Owned
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Aussie Towns Info is 100% Australian owned. Founded by James Robinson, a True Blue Aussie 
              born and bred in Australia, who lives in the amazing rugged bushland of the upper Blue Mountains, 
              just west of Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border-2 border-amber-200 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🇦🇺</span>
                  <span>Our Mission</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Perfect for road trippers and locals wanting to explore Australia's diverse towns and regions 
                  and discover those amazing hidden gems! We're all about mateship, getting a "Fair Go", and 
                  celebrating the adventurous larrikin spirit.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏕️</span>
                  <span>Family Friendly</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  The site is family friendly, and considers not only individuals or couples, but those with families. 
                  We believe in connection to the land and outdoors, resourcefulness, and not being afraid of some hard yakka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="explore" className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Local <span className="text-primary">Link</span> To
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to explore Australia's amazing countryside
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '🏘️', title: 'Local Towns & Regions', desc: 'Discover hidden gems across Australia' },
              { icon: '📚', title: 'Local History', desc: 'Rich stories and heritage' },
              { icon: '🎯', title: 'Tourist Attractions', desc: 'Must-see sights and experiences' },
              { icon: '🏪', title: 'Local Businesses', desc: 'Services and facilities' },
              { icon: '🛏️', title: 'Accommodation', desc: 'Where to stay' },
              { icon: '☕', title: 'Cafes & Restaurants', desc: 'Food, drinks, and entertainment' },
              { icon: '🎪', title: 'Events & Festivals', desc: 'Entertainment and art' },
              { icon: '🎯', title: 'Rifle Ranges & Gun Clubs', desc: 'Hunting and shooting' },
              { icon: '🎣', title: 'Fishing & Camping', desc: 'Outdoor adventures' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl border-2 border-gray-200 hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              For the <span className="text-primary">Adventurous</span> Spirit
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white p-8 sm:p-10 rounded-xl border-2 border-primary shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <ul className="space-y-4 text-lg sm:text-xl text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚗</span>
                  <span>Travelling & Road-Tripping</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🏕️</span>
                  <span>Camping & Boating</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎣</span>
                  <span>Fishing & Hunting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💎</span>
                  <span>Fossicking & Exploring</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-xl border-2 border-accent shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">At Its Core</h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                The website is a directory with a modern Australiana theme, highlighting and promoting 
                all things Australian and the ethos of the adventurous larrikin.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                It's the go-to resource for those going travelling, road-tripping, camping, boating, 
                fishing, hunting, fossicking, and exploring our wonderful countryside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Explore?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-95">
            Discover Australia's hidden gems and experience the True Blue Aussie spirit
          </p>
          <a 
            href="#explore" 
            className="inline-block bg-white text-primary px-10 py-5 rounded-lg font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Adventure
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

