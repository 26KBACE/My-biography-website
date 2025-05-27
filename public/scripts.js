// ======= Matrix "Hacker" Animated Background =======
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth, height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(10,10,10,0.18)';
  ctx.fillRect(0, 0, width, height);
  ctx.font = fontSize + "px 'Share Tech Mono', monospace";
  ctx.fillStyle = "#39ff14";
  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
    if (drops[i] * fontSize > height && Math.random() > 0.95) drops[i] = 0;
  }
}
setInterval(drawMatrix, 45);
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
// ======= End Matrix Background =======

// ======= Mobile Navbar Toggle =======
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navToggle.setAttribute(
    'aria-expanded',
    navMenu.classList.contains('show') ? 'true' : 'false'
  );
});
// ======= End Navbar Toggle =======

// ======= Animated Typing Effect =======
const hackerStrings = [
  "root@brian:~$ Welcome to my digital lab...",
  "root@brian:~$ Ethical Hacker. Builder. Mentor.",
  "root@brian:~$ Explore my projects, tools, and blog.",
  "root@brian:~$ Contact securely below."
];
let typeIndex = 0, charIndex = 0, isDeleting = false;
const typeTarget = document.querySelector('.hacker-type');
function typeEffect() {
  if (!typeTarget) return;
  let current = hackerStrings[typeIndex];
  if (!isDeleting) {
    typeTarget.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
    } else {
      setTimeout(typeEffect, 55);
    }
  } else {
    typeTarget.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % hackerStrings.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 26);
    }
  }
}
typeEffect();
// ======= End Typing Effect =======

// ======= Accessible skip nav (optional for voice/keyboard) =======
const skipLink = document.createElement('a');
skipLink.href = "#main";
skipLink.className = "skip-link";
skipLink.textContent = "Skip to main content";
document.body.prepend(skipLink);

// ======= Contact Form anti-spam (simple honeypot for bots) =======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // You can add a hidden input here named "website" or similar.
    // If filled, block submission (bots usually fill all fields).
    const honeypot = document.getElementById('website');
    if (honeypot && honeypot.value) {
      e.preventDefault();
      alert('Spam detected. Submission blocked.');
    }
  });
}
