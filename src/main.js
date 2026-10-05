const whatsappNumber = '5579998708819';
const serviceIcons = [
  '<path d="m3 12 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>',
  '<path d="M3 5h18v16H3zM3 10h18M3 15h18M9 5v5m6 0v5m-6 0v6"/>',
  '<rect x="3" y="4" width="15" height="6" rx="1"/><path d="M18 7h3v7h-9v3m-2 0h4v5h-4z"/>',
  '<path d="M12 3s-7 8-7 12a7 7 0 0 0 14 0c0-4-7-12-7-12Z M9 15a3 3 0 0 0 3 3"/>',
];
document.querySelectorAll('.line-icon').forEach((element, index) => {
  element.innerHTML = `<svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${serviceIcons[index]}</svg>`;
});
const whatsappUrl = message => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const equipment = [
  { name: 'Andaime', category: 'estrutura', image: 'andaime.png', description: 'Estrutura de apoio para os trabalhos da sua obra.' },
  { name: 'Betoneira', category: 'estrutura', image: 'betoneira.png', description: 'Uma aliada no preparo de concreto e argamassa.' },
  { name: 'Serra mármore', category: 'ferramentas', image: 'serra.png', description: 'Para cortes em materiais e etapas de acabamento.' },
  { name: 'Furadeira', category: 'ferramentas', image: 'furadeira.png', description: 'Praticidade para perfurações e instalações.' },
  { name: 'Plaina elétrica', category: 'ferramentas', image: 'plaina.png', description: 'Para ajustes e acabamento de peças de madeira.' },
];
let selectedFilter = 'todos';
const search = document.querySelector('#equipment-search');
const grid = document.querySelector('#equipment-grid');
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function renderEquipment() {
  const query = normalize(search.value.trim());
  const items = equipment.filter(item => (selectedFilter === 'todos' || item.category === selectedFilter) && normalize(`${item.name} ${item.description}`).includes(query));
  grid.replaceChildren(...items.map(item => {
    const card = document.createElement('article');
    card.className = 'equipment-card';
    card.innerHTML = `<div class="equipment-image"><img src="/assets/${item.image}" alt="${item.name}" loading="lazy" width="220" height="190"></div><div class="equipment-info"><small>${item.category === 'estrutura' ? 'Para sua obra' : 'Para o acabamento'}</small><h3>${item.name}</h3><p>${item.description}</p><button type="button" aria-label="Consultar ${item.name}">Consultar equipamento <span aria-hidden="true">↗</span></button></div>`;
    card.querySelector('button').addEventListener('click', () => window.open(whatsappUrl(`Olá, ESM! Gostaria de consultar o equipamento ${item.name}. Quais são as condições e a disponibilidade?`), '_blank', 'noopener,noreferrer'));
    return card;
  }));
  document.querySelector('.empty-state').hidden = items.length > 0;
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  renderEquipment();
}));
search.addEventListener('input', renderEquipment);
renderEquipment();
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service-select').value = link.dataset.service;
}));
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name').trim();
  const location = data.get('location').trim();
  const message = data.get('message').trim();
  const status = document.querySelector('#form-status');
  if (!name || !location || !message) {
    status.textContent = 'Preencha seu nome, a localização e os detalhes da ideia.';
    return;
  }
  const url = whatsappUrl(`Olá, ESM! Gostaria de solicitar um orçamento.\n\nNome: ${name}\nLocal: ${location}\nServiço: ${data.get('service')}\n\nMinha ideia: ${message}`);
  window.open(url, '_blank', 'noopener,noreferrer');
  status.replaceChildren(document.createTextNode('Sua mensagem está pronta. '));
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Abrir conversa no WhatsApp';
  status.append(link);
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  const sectionsObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  }), { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => sectionsObserver.observe(section));
}
