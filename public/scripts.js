// ======= Matrix-style hacker animated background (scrolling binary 0s and 1s) =======
const canvas = document.getElementById('matrix-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth, height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  const fontSize = 18;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(10,10,10,0.17)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + "px 'Share Tech Mono', monospace";
    ctx.fillStyle = "#39ff14";
    for (let i = 0; i < drops.length; i++) {
      // Only 0s and 1s for binary effect
      const text = Math.random() > 0.5 ? '1' : '0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
      if (drops[i] * fontSize > height && Math.random() > 0.95) drops[i] = 0;
    }
  }
  setInterval(drawMatrix, 44);
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

// ======= Responsive mobile nav toggle =======
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// ======= Keyboard accessibility: close menu with ESC =======
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  }
});

// ======= Contact form honeypot anti-spam (add a hidden field named "website" in HTML to use this) =======
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const honeypot = document.getElementById('website');
    if (honeypot && honeypot.value) {
      e.preventDefault();
      alert('Spam detected. Submission blocked.');
    }
  });
}
