export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Sunnyset</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your Next.js + Plasmic project!
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Plasmic Connected!</h2>
          <p className="text-gray-600 mb-4">
            Your Plasmic project is connected and ready to use.
          </p>
          <div className="text-left text-sm text-gray-600 space-y-2">
            <p>✅ Plasmic project ID: <code className="bg-gray-100 px-1 rounded">6wgXRmFVoEBe3b4mcFGm99</code></p>
            <p>✅ API token configured</p>
            <p>✅ Dynamic routing working</p>
          </div>
          <div className="mt-6">
            <a 
              href="/test" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mr-4"
            >
              Test Dynamic Route
            </a>
            <a 
              href="/about" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Test Another Route
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
