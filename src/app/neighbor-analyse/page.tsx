export default function NeighborAnalysePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">Sunnyset</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/safevision" className="text-gray-600 hover:text-gray-900 transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-purple-600 font-semibold">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</a>
            </div>
            <div className="flex space-x-4">
              <a href="/dashboard" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
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
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Neighbor Analyse
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive neighborhood analysis and monitoring. Track patterns, 
              identify trends, and maintain community safety through data-driven insights.
            </p>
          </div>

          {/* Analysis Overview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Total Properties</h3>
                <span className="text-2xl">🏠</span>
              </div>
              <p className="text-3xl font-bold text-purple-600">247</p>
              <p className="text-sm text-gray-600 mt-2">Monitored locations</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-3xl font-bold text-orange-600">12</p>
              <p className="text-sm text-gray-600 mt-2">Last 24 hours</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Safety Score</h3>
                <span className="text-2xl">🛡️</span>
              </div>
              <p className="text-3xl font-bold text-green-600">94%</p>
              <p className="text-sm text-gray-600 mt-2">Community safety</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-3xl font-bold text-blue-600">2.3s</p>
              <p className="text-sm text-gray-600 mt-2">Average response</p>
            </div>
          </div>

          {/* Analysis Dashboard */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Activity Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Suspicious activity detected</p>
                    <p className="text-sm text-gray-600">Property #124 - 15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Unusual vehicle pattern</p>
                    <p className="text-sm text-gray-600">Street A - 1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Security check completed</p>
                    <p className="text-sm text-gray-600">All properties - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">New property registered</p>
                    <p className="text-sm text-gray-600">Property #248 - 3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heat Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Heat Map</h2>
              <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600">Interactive Neighborhood Map</p>
                  <p className="text-sm text-gray-500">Real-time activity visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detailed Analysis</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                <p className="text-gray-600">
                  AI-powered pattern analysis to identify unusual behaviors and potential threats
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Machine learning algorithms predict potential security incidents before they occur
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Insights</h3>
                <p className="text-gray-600">
                  Comprehensive reporting and analytics for informed decision-making
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Analyze Your Neighborhood?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get detailed insights and comprehensive analysis for your community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/dashboard" 
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 font-semibold"
              >
                Access Full Dashboard
              </a>
              <a 
                href="/safevision" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-all transform hover:scale-105 font-semibold"
              >
                View Safevision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Neighbor Analyse</h3>
            <p className="text-gray-400 mb-6">
              Data-driven neighborhood monitoring and analysis platform
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/safevision" className="text-gray-400 hover:text-white transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-purple-400 hover:text-purple-300 transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
