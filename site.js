const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.project-card')];

// The complete collection is readable and navigable without JavaScript.
filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  for (const control of filters.querySelectorAll('button')) {
    control.setAttribute('aria-pressed', String(control === button));
  }
  for (const card of cards) {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  }
});
