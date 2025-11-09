/**
 * Hero section video support
 * Handles video playback, fallback, and accessibility
 */

class HeroVideoManager {
  constructor() {
    this.videos = document.querySelectorAll('.hero__video');
    this.init();
  }

  init() {
    this.videos.forEach(video => {
      this.setupVideo(video);
    });
  }

  setupVideo(video) {
    // Handle video playback in case autoplay fails
    video.addEventListener('play', () => {
      // Video started playing successfully
    });

    video.addEventListener('pause', () => {
      // Video paused
    });

    // Add error handling for video loading failures
    video.addEventListener('error', () => {
      console.warn('Hero video failed to load');
      // The poster image will still display
    });

    // Ensure video respects prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.removeAttribute('autoplay');
      video.currentTime = 0;
      video.pause();
    }
  }
}

// Initialize hero videos when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeroVideoManager();
  });
} else {
  new HeroVideoManager();
}
