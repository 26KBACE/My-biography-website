// Matrix Background Animation
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeMatrixCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrixCanvas();

window.addEventListener('resize', resizeMatrixCanvas);

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
const letters = katakana.split('');

const fontSize = 20;
const columns = () => Math.floor(window.innerWidth / fontSize);
let drops = Array(columns()).fill(1);

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

// Close nav on link click (mobile UX)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900) {
      navMenu.classList.remove('active');
    }
  });
});

// Contact form (optional enhancement) - feedback for user
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic UX feedback, you can replace with AJAX if needed
    contactForm.innerHTML = '<p style="color:#00ff41;font-weight:bold;">Thank you for your message! I will get back to you soon.</p>';
  });
}

// Ensure footer stays visible even if content is short
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const body = document.body;
  if (footer && body.offsetHeight < window.innerHeight) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.right = '0';
  }
});
