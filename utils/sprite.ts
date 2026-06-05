const frameCount = 147;
const totalDuration = 3000; // duração total em ms -- altere aqui

const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`;

const frames = [];
let loadedCount = 0;

const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const image = new Image();
    image.src = currentFrame(i);
    image.onload = () => {
      loadedCount++;
      // if (loadedCount === frameCount) onReady();
    };
    frames[i] = image;
  }
};

if (import.meta.client) {
  preloadImages();
}

export const playSequence = (img: HTMLImageElement) => {
  const frameDuration = totalDuration / frameCount;
  let currentIndex = 1;
  let lastTime = null;
  let elapsed = 0;

  img.src = frames[1].src;

  const tick = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    elapsed += timestamp - lastTime;
    lastTime = timestamp;

    const frameIndex = Math.min(frameCount, Math.floor((elapsed / totalDuration) * frameCount) + 1);

    if (frameIndex !== currentIndex) {
      currentIndex = frameIndex;
      img.src = frames[currentIndex].src;
    }

    if (elapsed < totalDuration) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};
