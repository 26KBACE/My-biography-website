// Typed.js for animated roles
document.addEventListener('DOMContentLoaded', function () {
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Forex Trader',
        'Data Analyst',
        'Cybersecurity Enthusiast',
        'Mentor',
        'Web Designer'
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1800,
      loop: true
    });
  }

  // AOS for section animation
  if (window.AOS) AOS.init({ once: true });

  // glightbox for gallery
  if (window.GLightbox) GLightbox({ selector: '.glightbox' });

  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
    // Remember user's preference
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }

  // Filterable projects
  document.querySelectorAll('.project-filter').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.project-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project').forEach(proj => {
        if (filter === 'all' || proj.dataset.type === filter) {
          proj.removeAttribute('hidden');
        } else {
          proj.setAttribute('hidden', 'hidden');
        }
      });
    });
  });

  // Contact form validation and feedback
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "#e74c3c";
        return;
      }
      formStatus.textContent = "Sending...";
      formStatus.style.color = "#2980b9";
      // Simulate sending
      setTimeout(() => {
        formStatus.textContent = "Thank you! Your message was sent.";
        formStatus.style.color = "#27ae60";
        contactForm.reset();
      }, 1400);
    });
  }
});
