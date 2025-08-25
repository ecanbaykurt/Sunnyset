export default function SafevisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">Sunnyset</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/safevision" className="text-green-600 font-semibold">Safevision</a>
              <a href="/neighbor-analyse" className="text-gray-600 hover:text-gray-900 transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</a>
            </div>
            <div className="flex space-x-4">
              <a href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Safevision
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced safety monitoring and vision technology for secure environments. 
              Real-time surveillance with AI-powered threat detection.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">AI Vision Detection</h3>
              <p className="text-gray-600 text-center">
                Advanced computer vision algorithms for real-time object and threat detection
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Secure Monitoring</h3>
              <p className="text-gray-600 text-center">
                24/7 surveillance with encrypted data transmission and secure storage
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Analytics Dashboard</h3>
              <p className="text-gray-600 text-center">
                Comprehensive analytics and reporting for security insights and trends
              </p>
            </div>
          </div>

          {/* Live Monitoring Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Live Monitoring</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Camera Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Front Door</span>
                      <span className="text-green-600 font-semibold">● Online</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Backyard</span>
                      <span className="text-green-600 font-semibold">● Online</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Garage</span>
                      <span className="text-green-600 font-semibold">● Online</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Alerts</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500">●</span>
                      <span className="text-sm text-gray-600">Motion detected - Front Door (2 min ago)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">●</span>
                      <span className="text-sm text-gray-600">Unusual activity - Backyard (15 min ago)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">📹</div>
                  <p className="text-gray-300">Live Camera Feed</p>
                  <p className="text-sm text-gray-400">Real-time monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Environment?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started with Safevision today and experience next-generation security monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/dashboard" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold"
              >
                Access Dashboard
              </a>
              <a 
                href="/neighbor-analyse" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-all transform hover:scale-105 font-semibold"
              >
                Neighbor Analysis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Safevision</h3>
            <p className="text-gray-400 mb-6">
              Advanced security monitoring powered by AI vision technology
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/safevision" className="text-green-400 hover:text-green-300 transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-gray-400 hover:text-white transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
