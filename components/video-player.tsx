"use client"

export default function VideoPlayer() {
  const handlePlayClick = () => {
    // For demo purposes, just show an alert
    alert("Video play functionality would go here")
  }

  return (
    <div className="hero-video">
      <div className="video-container">
        <img src="/placeholder.svg?height=720&width=1280" alt="Royal Spark Innovation" className="video-placeholder" />
        <div className="video-overlay"></div>
        <button className="play-button" onClick={handlePlayClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span className="sr-only">Play video</span>
        </button>
      </div>
    </div>
  )
}
