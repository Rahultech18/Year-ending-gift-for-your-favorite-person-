const video = document.getElementById("reelVideo");
const touchArea = document.getElementById("touchArea");
const soundIcon = document.getElementById("soundIcon");

let audioUnlocked = false;

// Autoplay always (muted allowed)
video.play().catch(() => {});

// Touch anywhere on screen
touchArea.addEventListener("click", () => {
  if (!audioUnlocked) {
    video.muted = false;
    audioUnlocked = true;
    soundIcon.textContent = "🔊";
  } else {
    video.muted = !video.muted;
    soundIcon.textContent = video.muted ? "🔇" : "🔊";
  }
  video.play();
});

// Re-play when orientation changes
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    video.play();
  }, 300);
});