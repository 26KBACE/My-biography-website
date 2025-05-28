// Matrix Background Animation with 0s and 1s only
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeMatrixCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrixCanvas();

window.addEventListener('resize', resizeMatrixCanvas);

const digits = '01';
const letters = digits.split('');

const fontSize = 20;
function getColumns() {
  return Math.floor(window.innerWidth / fontSize);
}
let drops = Array(getColumns()).fill(1);

window.addEventListener('resize', () => {
  drops = Array(getColumns()).fill(1);
});

function drawMatrix() {
  ctx.fillStyle = 'rgba(15, 17, 23, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px Share Tech Mono, monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#00ff41';
    ctx.shadowColor = '#00ff41';
    ctx.shadowBlur = Math.random() < 0.06 ? 10 : 0;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  ctx.shadowBlur = 0;
}

setInterval(drawMatrix, 50);

// Navbar toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900) {
      navMenu.classList.remove('active');
    }
  });
});

// Contact form UX feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.innerHTML = '<p style="color:#00ff41;font-weight:bold;">Thank you for your message! I will get back to you soon.</p>';
  });
}
