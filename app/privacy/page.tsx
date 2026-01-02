import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection | AussieTowns.info',
  description: 'Privacy policy for AussieTowns.info. Learn how we collect, use, and protect your personal information when you visit our Australian travel guide website.',
  alternates: {
    canonical: 'https://aussietowns.info/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Data Protection | AussieTowns.info',
    description: 'Privacy policy for AussieTowns.info. Learn how we collect, use, and protect your personal information when you visit our Australian travel guide website.',
    url: 'https://aussietowns.info/privacy',
    type: 'website',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'AussieTowns.info - Privacy Policy',
      },
    ],
    // @ts-ignore - og:logo is not in Next.js types but is a valid Open Graph property
    logo: '/logo.png',
  },
}

export default function Privacy() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Introduction
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    AussieTowns.info (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aussietowns.info.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                        Automatically Collected Information
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        When you visit AussieTowns.info, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                        Usage Data
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We may collect information about how you access and use the website (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    How We Use Your Information
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    We use the collected information for various purposes:
                  </p>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-base sm:text-lg text-gray-700">
                    <li>To provide and maintain our website</li>
                    <li>To analyse how our website is used</li>
                    <li>To monitor the usage of our website</li>
                    <li>To detect, prevent, and address technical issues</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Third-Party Services
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our website may use third-party services for analytics and other purposes. These third parties may use cookies or similar technologies to collect information about your use of our website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Contact Us
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-primary hover:text-primary/80 underline">contact page</Link>.
                  </p>
                </section>
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
            '@type': 'WebPage',
            name: 'Privacy Policy - AussieTowns.info',
            url: 'https://aussietowns.info/privacy',
            description: 'Privacy policy for AussieTowns.info. Learn how we collect, use, and protect your personal information.',
            inLanguage: 'en-AU',
            about: {
              '@type': 'Thing',
              name: 'Privacy Policy',
            },
          }),
        }}
      />
    </>
  )
}

