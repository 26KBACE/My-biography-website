// ========== Matrix Rain Background ==========
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let matrixCols, matrixDrops, fontSize;

function resizeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = 18;
    matrixCols = Math.floor(canvas.width / fontSize);
    matrixDrops = Array(matrixCols).fill(1);
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

function drawMatrix() {
    ctx.fillStyle = 'rgba(17,17,17,0.17)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px 'Share Tech Mono', monospace";
    ctx.fillStyle = "#33ff66";
    for(let i = 0; i < matrixCols; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random()*96);
        ctx.fillText(text, i * fontSize, matrixDrops[i] * fontSize);
        if (Math.random() > 0.975) matrixDrops[i] = 0;
        matrixDrops[i]++;
        if(matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.95)
            matrixDrops[i] = 0;
    }
}
setInterval(drawMatrix, 44);

// ========== Typing Effect for Hero ==========
const heroStrings = [
    "Welcome to Brian Mong'are's Terminal Portfolio.",
    "God-centered Innovator | Forex Trader | Data Analyst | Cybersecurity Enthusiast",
    "Empowering through truth, technology, and mentorship.",
    "Type 'help' to explore my story, skills, and projects."
];
let heroIndex = 0, charIndex = 0, typing = true;

function typeHero() {
    const target = document.getElementById('typed-hero');
    if (!target) return;
    if (typing) {
        if (charIndex <= heroStrings[heroIndex].length) {
            target.textContent = heroStrings[heroIndex].slice(0, charIndex++);
            setTimeout(typeHero, 38);
        } else {
            typing = false;
            setTimeout(typeHero, 1200);
        }
    } else {
        charIndex = 0;
        heroIndex = (heroIndex + 1) % heroStrings.length;
        typing = true;
        setTimeout(typeHero, 500);
    }
}
typeHero();

// ========== Dark/Light Mode Toggle ==========
const darkToggle = document.getElementById('darkToggle');
darkToggle.onclick = function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    // Adjust matrix color
    if(document.body.classList.contains('light-mode')) {
        ctx.fillStyle = 'rgba(244,246,250,0.12)';
    } else {
        ctx.fillStyle = 'rgba(17,17,17,0.17)';
    }
};

// ========== Section Reveal on Scroll ==========
function revealSections() {
    document.querySelectorAll('.reveal').forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 90) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// ========== Responsive Nav (optional, minimal JS) ==========
const navToggle = document.getElementById('nav-toggle');
if(navToggle) {
    navToggle.onclick = function() {
        document.getElementById('navbarNav').classList.toggle('show');
    };
}

// ========== Smooth Scroll (optional) ==========
document.querySelectorAll('a.nav-link').forEach(link => {
    link.onclick = function(e) {
        if(this.hash && document.querySelector(this.hash)) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
});
