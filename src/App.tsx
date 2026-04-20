/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Studio from './pages/Studio';
import About from './pages/About';
import Journal from './pages/Journal';
import ReachUs from './pages/ReachUs';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rAFId: number;

    const checkTime = () => {
      if (!video) return;
      const currentTime = video.currentTime;
      const duration = video.duration;

      if (duration > 0) {
        // Absolute Seamless Logic: Smooth Crossfade within the same element
        const FADE_DURATION = 0.6; // slightly longer for smoother transition
        
        if (currentTime < FADE_DURATION) {
          setVideoOpacity(currentTime / FADE_DURATION);
        } else if (duration - currentTime < FADE_DURATION) {
          setVideoOpacity(Math.max(0, (duration - currentTime) / FADE_DURATION));
        } else {
          setVideoOpacity(1);
        }

        // Proactive loop trigger: trigger reset slightly before actual end to avoid gap
        if (duration - currentTime < 0.1) {
          video.currentTime = 0;
          video.play().catch(console.error);
        }
      }

      rAFId = requestAnimationFrame(checkTime);
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
      video.play().catch(console.error);
      rAFId = requestAnimationFrame(checkTime);
    };

    // Events for smoothing and progressive loading
    video.addEventListener('canplaythrough', handleCanPlay);
    
    // Fallback play trigger
    const initialTimeout = setTimeout(() => {
      setIsVideoReady(true);
    }, 3000); // 3s fallback to show content if video is slow

    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.load(); // Force progressive loading
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      clearTimeout(initialTimeout);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <div className={`relative min-h-screen w-full bg-background font-sans text-foreground transition-opacity duration-1000 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Global Background Video Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ 
            opacity: videoOpacity,
            transform: 'scale(1.05)', // slight zoom to ensure coverage and hide potential edge artifacts
            filter: 'brightness(0.9)' // subtle cinematic dimming
          }}
        />
        {/* Deep cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="studio">
          <Studio />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="journal">
          <Journal />
        </div>
        <div id="reach-us">
          <ReachUs />
        </div>
      </div>
    </div>
  );
}
