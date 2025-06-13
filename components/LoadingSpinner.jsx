export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-orange-100 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-orange-600 rounded-full spinner"></div>
        </div>
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-600 rounded-full puffer" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-orange-600 rounded-full puffer" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-orange-600 rounded-full puffer" style={{ animationDelay: "0.4s" }}></div>
        </div>
        <p className="mt-6 text-orange-700 font-medium text-lg">Loading MegaWines...</p>
      </div>
    </div>
  )
}
