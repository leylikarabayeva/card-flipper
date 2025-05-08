const card = document.getElementById('card');
const backImage = document.getElementById('backImage');

let isFlipped = false;
let backImages = [];
for (let i = 1; i <= 10; i++) {
  backImages.push(`images/back${i}.jpg`);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(backImages);
let currentIndex = 0;

card.addEventListener('click', () => {
  card.style.transform = `rotateY(${isFlipped ? 0 : 180}deg)`;
  if (!isFlipped) {
    // show new back image
    backImage.src = backImages[currentIndex];
    currentIndex++;
    if (currentIndex >= backImages.length) {
      shuffle(backImages);
      currentIndex = 0;
    }
  }
  isFlipped = !isFlipped;
});
