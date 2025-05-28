// MAINTAINANCE MODE
window.onload = function() {
  var banner = document.createElement("div");
  // Add a keyframes style for blinking
  var style = document.createElement('style');
  style.innerHTML = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .blinking {
      animation: blink 3s infinite;
    }
  `;
  document.head.appendChild(style);

  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.backgroundColor = "#FF0000";
  banner.style.color = "#333";
  banner.style.textAlign = "center";
  banner.style.padding = "15px";
  banner.style.zIndex = "1000";
  banner.style.fontWeight = "bold";
  banner.style.textTransform = "uppercase";
  banner.className = "blinking"; // Add the blinking class
  banner.innerText = "The website is currently being updated. Some features may not work as expected.";
  document.body.appendChild(banner);
};

// Binary Background Animation
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeMatrixCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrixCanvas();
window.addEventListener('resize', resizeMatrixCanvas);

// Use only '0' and '1'
const binary = ['0', '1'];

const fontSize = 20;
const columns = () => Math.floor(window.innerWidth / fontSize);
let drops = Array(columns()).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(15, 17, 23, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px Share Tech Mono, monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = binary[Math.floor(Math.random() * 2)];
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

// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function(event) {
    navMenu.classList.toggle('active');
    event.stopPropagation(); // Prevent click from bubbling up
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (
      navMenu.classList.contains('active') &&
      !navMenu.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      navMenu.classList.remove('active');
    }
  });
}
