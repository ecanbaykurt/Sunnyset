export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Sunnyset</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/safevision" className="text-gray-600 hover:text-gray-900 transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-gray-600 hover:text-gray-900 transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</a>
            </div>
            <div className="flex space-x-4">
              <a href="/test" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sunnyset
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your modern Next.js + Plasmic website. Build beautiful pages visually and deploy with confidence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/safevision" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Safevision
            </a>
            <a 
              href="/neighbor-analyse" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Neighbor Analyse
            </a>
            <a 
              href="/dashboard" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-all transform hover:scale-105"
            >
              Dashboard
            </a>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-green-500 text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Plasmic Connected</h3>
              <p className="text-sm text-gray-600">Visual page builder ready</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-blue-500 text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Next.js 14</h3>
              <p className="text-sm text-gray-600">Latest React framework</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-purple-500 text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">TailwindCSS</h3>
              <p className="text-sm text-gray-600">Modern styling system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sunnyset?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies for the best development experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Development</h3>
              <p className="text-gray-600">Hot reload, TypeScript, and modern tooling for rapid development</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Design</h3>
              <p className="text-gray-600">Design pages visually with Plasmic's drag-and-drop interface</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-gray-600">Mobile-first design that looks great on all devices</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Optimized for speed with Next.js and static generation</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Type Safe</h3>
              <p className="text-gray-600">Full TypeScript support for better code quality</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy Ready</h3>
              <p className="text-gray-600">Ready to deploy on Cloudflare Pages or any platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start building your website with Plasmic or customize the code directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/safevision" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold"
            >
              Safevision
            </a>
            <a 
              href="/neighbor-analyse" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold"
            >
              Neighbor Analyse
            </a>
            <a 
              href="/dashboard" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 font-semibold"
            >
              Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Sunnyset</h3>
            <p className="text-gray-400 mb-6">
              Built with Next.js 14, TypeScript, TailwindCSS, and Plasmic
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/safevision" className="text-gray-400 hover:text-white transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-gray-400 hover:text-white transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
