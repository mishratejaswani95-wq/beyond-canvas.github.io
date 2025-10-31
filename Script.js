// Fade-up animation when sections scroll into view
const fadeElems = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElems.forEach(elem => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      elem.classList.add('show');
    }
  });
});
