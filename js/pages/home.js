const content = {
  greeting: 'Hi, my name is',
  name: 'Shivam Shivanshu.',
  subtitle: 'I build low-latency trading systems. Focused on high-performance C++, kernel bypass networking, and squeezing every cycle out of modern hardware.',
  cta: [
    { label: 'View Experience', route: '#/experience', style: 'primary' },
    { label: 'Get in Touch', route: '#/contact', style: 'outline' },
  ],
};

export function renderHome() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="hero">
      <p class="hero-greeting">${content.greeting}</p>
      <h1>${content.name}</h1>
      <p class="hero-subtitle">${content.subtitle}</p>
      <div class="hero-cta">
        ${content.cta.map(c => `<a href="${c.route}" class="btn btn-${c.style}">${c.label}</a>`).join('')}
      </div>
    </div>
  `;
  return div;
}
