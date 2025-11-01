// Simple thank-you message for now
document.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Beyond Canvas! 💖");
});
// 🖼️ Gallery Filter Function
function filterSelection(category) {
  let items = document.getElementsByClassName("art-item");
  if (category === "all") category = "";
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = items[i].className.indexOf(category) > -1 ? "block" : "none";
  }

  let buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
} 
// 🌸 Scroll Animation
const fadeEls = document.querySelectorAll('.fade-in');

function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
