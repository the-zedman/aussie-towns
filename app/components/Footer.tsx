export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* As featured on section */}
          <div className="flex justify-center">
            <div className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-800/50">
              <p className="text-xs sm:text-sm text-gray-400 mb-1 text-center">As featured on</p>
              <a 
                href="https://www.pitchmypage.com" 
                rel="dofollow"
                className="text-sm sm:text-base text-white hover:text-primary transition-colors font-medium"
              >
                Pitch My Page
              </a>
            </div>
          </div>
          
          {/* Main footer content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-sm sm:text-base">
              Copyright © {new Date().getFullYear()} AussieTowns.info
            </p>
            <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

