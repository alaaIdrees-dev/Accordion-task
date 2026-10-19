const accordion = document.querySelector('.accordion');
const items = Array.from(accordion.querySelectorAll('.accordion-item'));

/* Close every item and reset its ARIA state */
function closeAll() {
  items.forEach((item) => {
    item.classList.remove('active');
    item.querySelector('.accordion-content').style.maxHeight = null;
    item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
  });
}

/* Toggle one item at a time */
items.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    closeAll();

    if (!isOpen) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      header.setAttribute('aria-expanded', 'true');
    }
  });
});

/* Click anywhere outside the accordion -> close all */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.accordion')) {
    closeAll();
  }
});

/* Optional: close all with the Escape key */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAll();
  }
});