import { redirect } from 'next/navigation';

export default function HomePage() {
  // For now, just show a welcome message
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Sunnyset</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your Next.js + Plasmic project!
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            This is the root page. To use Plasmic:
          </p>
          <ol className="text-left text-sm text-gray-600 space-y-2">
            <li>1. Create a Plasmic project at <a href="https://plasmic.app" className="text-blue-600 hover:underline">plasmic.app</a></li>
            <li>2. Get your Project ID and Public Token</li>
            <li>3. Update <code className="bg-gray-100 px-1 rounded">.env.local</code> with your credentials</li>
            <li>4. Restart the development server</li>
          </ol>
          <div className="mt-6">
            <a 
              href="/test" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Test Dynamic Route
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
