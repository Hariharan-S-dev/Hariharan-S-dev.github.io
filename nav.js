const hamburger = document.getElementById('hamburger');
const navLinks   = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
// Close on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});
