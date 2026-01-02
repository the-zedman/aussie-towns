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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-red-600 relative border border-blue-600">
                <div className="absolute inset-0 bg-blue-600" style={{ clipPath: 'polygon(0 0, 0 50%, 50% 0)' }}></div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <span className="text-primary">Aussie</span> Towns Info
              </h1>
            </div>
            <div className="w-full sm:w-auto max-w-md">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search towns, businesses, attractions..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Info Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">100% Australian Owned</span> • Founded by James Robinson, Blue Mountains NSW • 
            Your comprehensive directory of regional towns, local businesses, accommodation, and attractions
          </p>
        </div>

        {/* Browse by State */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'NT', 'ACT'].map((state) => (
              <a
                key={state}
                href={`#${state.toLowerCase()}`}
                className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-4 text-center transition-colors"
              >
                <div className="font-bold text-lg text-gray-900">{state}</div>
                <div className="text-xs text-gray-500 mt-1">View Towns</div>
              </a>
            ))}
          </div>
        </section>

        {/* Directory Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Directory Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { name: 'Towns & Regions', icon: '🏘️', count: '1,200+' },
              { name: 'Local History', icon: '📚', count: '500+' },
              { name: 'Tourist Attractions', icon: '🎯', count: '800+' },
              { name: 'Local Businesses', icon: '🏪', count: '2,500+' },
              { name: 'Accommodation', icon: '🛏️', count: '1,800+' },
              { name: 'Cafes & Restaurants', icon: '☕', count: '1,200+' },
              { name: 'Events & Festivals', icon: '🎪', count: '400+' },
              { name: 'Rifle Ranges', icon: '🎯', count: '150+' },
              { name: 'Fishing Spots', icon: '🎣', count: '600+' },
              { name: 'Camp Sites', icon: '🏕️', count: '900+' },
            ].map((category) => (
              <a
                key={category.name}
                href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-gray-200 hover:border-primary rounded-lg p-4 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm text-gray-900 mb-1">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} listings</div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Towns */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Featured Towns</h2>
            <a href="#all-towns" className="text-primary hover:underline text-sm font-semibold">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Katoomba', state: 'NSW', desc: 'Gateway to the Blue Mountains, home of the Three Sisters', image: '/three-sisters-and-mt-solitary-katoomba-nsw.jpg' },
              { name: 'Broken Hill', state: 'NSW', desc: 'Historic mining town in the outback', image: '' },
              { name: 'Port Fairy', state: 'VIC', desc: 'Charming coastal town with rich maritime history', image: '' },
              { name: 'Longreach', state: 'QLD', desc: 'Outback Queensland, home of the Stockman\'s Hall of Fame', image: '' },
              { name: 'Albany', state: 'WA', desc: 'Historic whaling town on the south coast', image: '' },
              { name: 'Coober Pedy', state: 'SA', desc: 'Opal mining capital, famous for underground homes', image: '' },
            ].map((town) => (
              <a
                key={town.name}
                href={`#${town.name.toLowerCase()}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {town.image ? (
                  <div className="h-48 bg-gray-200 relative">
                    <Image
                      src={town.image}
                      alt={town.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">🏘️</span>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{town.name}</h3>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{town.state}</span>
                  </div>
                  <p className="text-sm text-gray-600">{town.desc}</p>
                  <div className="mt-3 flex gap-2 text-xs text-gray-500">
                    <span>Attractions</span>
                    <span>•</span>
                    <span>Businesses</span>
                    <span>•</span>
                    <span>Accommodation</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Categories Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Explore</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#towns" className="text-gray-600 hover:text-primary">Browse All Towns</a></li>
                  <li><a href="#attractions" className="text-gray-600 hover:text-primary">Tourist Attractions</a></li>
                  <li><a href="#history" className="text-gray-600 hover:text-primary">Local History</a></li>
                  <li><a href="#events" className="text-gray-600 hover:text-primary">Events & Festivals</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#businesses" className="text-gray-600 hover:text-primary">Local Businesses</a></li>
                  <li><a href="#accommodation" className="text-gray-600 hover:text-primary">Accommodation</a></li>
                  <li><a href="#dining" className="text-gray-600 hover:text-primary">Cafes & Restaurants</a></li>
                  <li><a href="#entertainment" className="text-gray-600 hover:text-primary">Entertainment</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Compact */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">About Aussie Towns Info</h2>
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-3">
              Aussie Towns Info is a comprehensive travel guide and directory, featuring detailed overviews of small and regional towns, 
              including history, tourist attractions, local businesses, accommodation, cafes, restaurants, bars, clubs, entertainment, 
              events, festivals, art, rifle ranges, gun clubs, hunting clubs, fishing spots, camp sites, boating locations, and caravan parks.
            </p>
            <p className="mb-3">
              Perfect for road trippers and locals wanting to explore Australia's diverse towns and regions and discover those amazing hidden gems!
            </p>
            <p>
              The site is family friendly, and considers not only individuals or couples, but those with families. 
              It's the go-to resource for those going travelling, road-tripping, camping, boating, fishing, hunting, fossicking, and exploring our wonderful countryside.
            </p>
            <p className="mt-3 text-sm">
              <strong>100% Australian Owned</strong> • Founded by James Robinson, a True Blue Aussie born and bred in Australia, 
              who lives in the amazing rugged bushland of the upper Blue Mountains, just west of Sydney.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
