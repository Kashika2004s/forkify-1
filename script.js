document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const overlay = card.querySelector('.card-overlay');
    const heading = card.querySelector('.card-overlay-heading');

    overlay.addEventListener('mouseover', function() {
      heading.classList.add('show-text');
    });

    overlay.addEventListener('mouseout', function() {
      heading.classList.remove('show-text');
    });
  });
});
