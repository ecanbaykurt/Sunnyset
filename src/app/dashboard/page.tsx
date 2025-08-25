export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              <a href="/neighbor-analyse" className="text-gray-600 hover:text-gray-900 transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-blue-600 font-semibold">Dashboard</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John Doe</h1>
          <p className="text-gray-600">Here's what's happening with your security system today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Cameras</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📹</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">● All Online</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alerts Today</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-orange-600 text-sm font-medium">2 New</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Safety Score</p>
                <p className="text-2xl font-bold text-gray-900">96%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">+2% from yesterday</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900">67%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💾</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-purple-600 text-sm font-medium">2.1TB / 3.2TB</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  JD
                </div>
                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-600">Security Administrator</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">📧</span>
                  <span className="text-gray-700">john.doe@sunnyset.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">📱</span>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">📍</span>
                  <span className="text-gray-700">Property #124</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">👥</span>
                  <span className="text-gray-700">Admin Access</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🔧</span>
                    <span className="text-gray-700">System Settings</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📊</span>
                    <span className="text-gray-700">Generate Report</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">👥</span>
                    <span className="text-gray-700">Manage Users</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🔔</span>
                    <span className="text-gray-700">Notification Settings</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Motion detected at Front Door</p>
                    <p className="text-sm text-gray-600">2 minutes ago • Camera #1</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Unusual activity pattern detected</p>
                    <p className="text-sm text-gray-600">15 minutes ago • AI Analysis</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Review</button>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">System backup completed</p>
                    <p className="text-sm text-gray-600">1 hour ago • Automated</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Details</button>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Camera Status</h4>
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
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Side Entrance</span>
                      <span className="text-green-600 font-semibold">● Online</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">System Health</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">CPU Usage</span>
                      <span className="text-blue-600 font-semibold">23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Memory</span>
                      <span className="text-blue-600 font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Network</span>
                      <span className="text-green-600 font-semibold">Stable</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Last Update</span>
                      <span className="text-gray-600">2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Analytics</h3>
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <p className="text-gray-600">Activity Chart</p>
                  <p className="text-sm text-gray-500">Last 7 days activity overview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
            <p className="text-gray-400 mb-6">
              Comprehensive security management and monitoring platform
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/safevision" className="text-gray-400 hover:text-white transition-colors">Safevision</a>
              <a href="/neighbor-analyse" className="text-gray-400 hover:text-white transition-colors">Neighbor Analyse</a>
              <a href="/dashboard" className="text-blue-400 hover:text-blue-300 transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
