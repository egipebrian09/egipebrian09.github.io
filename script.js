 function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }

  function toggleMode() {
    document.body.classList.toggle('light');
  }

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const cards = document.querySelectorAll('.card');

  function reveal() {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        card.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();

  window.addEventListener('load', () => {
    document.getElementById('hero-title').style.opacity = 1;
    document.getElementById('hero-title').style.transform = 'translateY(0)';

    document.getElementById('hero-sub').style.opacity = 1;
    document.getElementById('hero-sub').style.transform = 'translateY(0)';
  });