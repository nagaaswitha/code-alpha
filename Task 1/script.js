const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
  gallery.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < gallery.children.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
});

