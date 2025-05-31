"use client"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-300/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-5 h-5 bg-blue-300/20 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Floating lines */}
      <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
