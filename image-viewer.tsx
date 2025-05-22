export default function ImageViewer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Imported Images Viewer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Royal Spark Logo */}
          <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-[0_0_30px_4px_rgba(168,85,247,0.1)] transition-all">
            <div className="flex flex-col items-center">
              <div className="bg-zinc-900 p-8 rounded-lg mb-4 flex items-center justify-center">
                <img src="/royal-spark-logo.png" alt="Royal Spark Logo" className="max-w-full h-auto max-h-64" />
              </div>
              <h2 className="text-xl font-semibold">royal-spark-logo.png</h2>
              <p className="text-zinc-400 text-sm mt-2">Logo image used throughout the site</p>
            </div>
          </div>

          {/* Drone Thumbnail */}
          <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-[0_0_30px_4px_rgba(168,85,247,0.1)] transition-all">
            <div className="flex flex-col items-center">
              <div className="bg-zinc-900 p-8 rounded-lg mb-4 flex items-center justify-center">
                <img src="/drone-thumbnail.jpg" alt="Drone Thumbnail" className="max-w-full h-auto max-h-64" />
              </div>
              <h2 className="text-xl font-semibold">drone-thumbnail.jpg</h2>
              <p className="text-zinc-400 text-sm mt-2">Thumbnail image used in the podcast section</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600 transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
