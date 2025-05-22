"use client"

import { useState, useRef } from "react"

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div className="podcast-card">
      <div className="podcast-thumbnail-container">
        <img src="/drone-thumbnail.jpg" alt="sUAS Drone" className="podcast-thumbnail" />
        <button className="podcast-play-button" onClick={togglePlay}>
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
            className="podcast-play-icon"
          >
            {isPlaying ? (
              <>
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </>
            ) : (
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            )}
          </svg>
          <span className="sr-only">Play podcast</span>
        </button>
      </div>
      <div className="podcast-content">
        <h3 className="podcast-title">S1E1 Layered sUAS Defense</h3>
        <p className="podcast-description">
          Exploring defense strategies against small unmanned aircraft systems and their implementation.
        </p>
        <div className="podcast-meta">
          <span className="podcast-duration">
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            38:25
          </span>
          <span className="podcast-date">
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            May 2, 2025
          </span>
        </div>
        <div className="podcast-player">
          <audio
            ref={audioRef}
            src="https://mxqlhlocxthndqatwloi.supabase.co/storage/v1/object/public/podcasts//Layered%20sUAS%20Defense.mp3"
            preload="metadata"
            controls
            onEnded={handleAudioEnded}
          ></audio>
        </div>
      </div>
    </div>
  )
}
