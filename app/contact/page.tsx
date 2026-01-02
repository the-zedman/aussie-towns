import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with AussieTowns.info',
  description: 'Contact AussieTowns.info for questions, suggestions, or to report issues about Australian regional towns and travel information. We welcome your feedback.',
  alternates: {
    canonical: 'https://aussietowns.info/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch with AussieTowns.info',
    description: 'Contact AussieTowns.info for questions, suggestions, or to report issues about Australian regional towns and travel information.',
    url: 'https://aussietowns.info/contact',
    type: 'website',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'AussieTowns.info - Contact Us',
      },
    ],
    // @ts-ignore - og:logo is not in Next.js types but is a valid Open Graph property
    logo: '/logo.png',
  },
}

export default function Contact() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed">
                We&apos;d love to hear from you! If you have questions, suggestions, or want to share information about Australian regional towns, please get in touch.
              </p>
              
              <div className="mt-8 sm:mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How to Reach Us
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      General Enquiries
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      For general questions, suggestions, or feedback about AussieTowns.info, please use the contact form below or email us directly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      Town Information
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      If you have information to share about a regional or small town in Australia, we&apos;d love to hear from you. Your local knowledge helps make AussieTowns.info more comprehensive and accurate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      Reporting Issues
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Found an error or issue on our site? Please let us know so we can fix it promptly.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                <p className="text-base sm:text-lg text-gray-600">
                  <strong>Note:</strong> Contact form coming soon. For now, please check back regularly as we continue to build out AussieTowns.info.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 text-center">
            <Link 
              href="/" 
              className="text-primary hover:text-primary/80 font-semibold text-base sm:text-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Us - AussieTowns.info',
            url: 'https://aussietowns.info/contact',
            description: 'Contact AussieTowns.info for questions, suggestions, or to report issues about Australian regional towns and travel information.',
            inLanguage: 'en-AU',
            mainEntity: {
              '@type': 'Organization',
              name: 'AussieTowns.info',
              url: 'https://aussietowns.info',
            },
          }),
        }}
      />
    </>
  )
}

