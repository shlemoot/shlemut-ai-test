/* ═══════════════════════════════════════════════════════════════
   CINEMATIC SCROLL CONTROLLER — Bugatti-style
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  function initCinematic(root) {
    const sticky = root.querySelector('.cinematic-sticky');
    const video = root.querySelector('.cine-video');
    const progressFill = root.querySelector('.cine-progress-fill');
    const overlays = root.querySelectorAll('.cine-overlay');
    const scrollHint = root.querySelector('.cine-scroll-hint');

    if (!sticky) return;

    // Pre-load video if present
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.pause();
    }

    let targetProgress = 0;
    let currentProgress = 0;
    let ticking = false;
    let hintHidden = false;

    function computeProgress() {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = root.offsetHeight - vh;
      const scrolled = -rect.top;
      let p = scrolled / total;
      p = Math.max(0, Math.min(1, p));
      return p;
    }

    function onScroll() {
      targetProgress = computeProgress();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    }

    function tick() {
      // Smooth lerp
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) < 0.0005) {
        currentProgress = targetProgress;
        ticking = false;
      } else {
        currentProgress += diff * 0.12;
        ticking = true;
      }

      // Video scrubbing
      if (video && video.duration && !isNaN(video.duration)) {
        try {
          video.currentTime = video.duration * currentProgress;
        } catch (e) { /* seeking in progress */ }
      }

      // Progress bar
      if (progressFill) {
        progressFill.style.width = (currentProgress * 100).toFixed(2) + '%';
      }

      // Hide scroll hint once scrolling starts
      if (scrollHint && !hintHidden && currentProgress > 0.05) {
        hintHidden = true;
        sticky.classList.add('cine-sticky-hide');
      }
      if (scrollHint && hintHidden && currentProgress < 0.02) {
        hintHidden = false;
        sticky.classList.remove('cine-sticky-hide');
      }

      // Show the active overlay
      overlays.forEach(o => {
        const start = parseFloat(o.dataset.start);
        const end = parseFloat(o.dataset.end);
        const active = currentProgress >= start && currentProgress <= end;
        if (active) o.classList.add('active');
        else o.classList.remove('active');
      });

      if (ticking) requestAnimationFrame(tick);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  function initAll() {
    document.querySelectorAll('.cinematic').forEach(initCinematic);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
