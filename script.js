 const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        items.forEach(other => {
          other.classList.remove('active');
          other.querySelector('.accordion-content').style.maxHeight = null;
          other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });