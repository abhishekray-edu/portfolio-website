// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    // Sticky header
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('sticky', window.scrollY > 5);
    });

    // Scroll reveal animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
});
