// Modal image viewer
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  };
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});
