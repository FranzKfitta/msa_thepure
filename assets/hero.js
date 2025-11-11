/**
 * Hero section video support
 * Handles video playback, fallback, and accessibility
 */

class HeroVideoManager {
  constructor() {
    this.videos = document.querySelectorAll('.hero__video');
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    this.videos.forEach(video => {
      this.setupVideo(video);
    });

    // Listen for changes in prefers-reduced-motion
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
      this.prefersReducedMotion = event.matches;
      this.videos.forEach(video => this.handleReducedMotion(video));
    });
  }

  setupVideo(video) {
    // Handle prefers-reduced-motion on initial setup
    if (this.prefersReducedMotion) {
      this.handleReducedMotion(video);
    }

    // Handle video loading states
    video.addEventListener('loadstart', () => {
      this.handleVideoLoadStart(video);
    });

    video.addEventListener('canplay', () => {
      this.handleVideoCanPlay(video);
    });

    // Add error handling for video loading failures
    video.addEventListener('error', () => {
      this.handleVideoError(video);
    });

    // Ensure proper playback in various environments
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay failed, which is expected in many browsers
        // The poster image will still display
      });
    }
  }

  handleReducedMotion(video) {
    if (this.prefersReducedMotion) {
      video.removeAttribute('autoplay');
      video.removeAttribute('loop');
      video.pause();
      video.currentTime = 0;
    } else {
      // Restore autoplay if motion preference is re-enabled
      if (!video.hasAttribute('autoplay')) {
        video.setAttribute('autoplay', '');
      }
      if (!video.hasAttribute('loop')) {
        video.setAttribute('loop', '');
      }
    }
  }

  handleVideoLoadStart(video) {
    video.parentElement?.classList.add('hero--loading');
  }

  handleVideoCanPlay(video) {
    video.parentElement?.classList.remove('hero--loading');
    video.parentElement?.classList.add('hero--video-ready');
  }

  handleVideoError(video) {
    video.parentElement?.classList.add('hero--video-error');
    video.parentElement?.classList.remove('hero--loading');
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
