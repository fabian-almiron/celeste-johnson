'use client'

import { useCallback, useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function AboutIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleOverlayClick = useCallback(() => {
    void videoRef.current?.play()
  }, [])

  return (
    <div className="aspect-[1668/2276] rounded-sm overflow-hidden bg-muted lg:sticky lg:top-28 relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label="Celeste Johnson smiling outdoors, with the Wasatch Back landscape behind her"
      >
        <source src="/images/about-celeste.mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <button
          type="button"
          onClick={handleOverlayClick}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Play video of Celeste Johnson"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform hover:scale-105">
            <Play className="ml-0.5 h-8 w-8 shrink-0" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  )
}
