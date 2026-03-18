const content = [
  {
    title: 'shivamshivanshu.github.io',
    description: 'This portfolio site. Vanilla JS, hash-based routing, no build step.',
    tech: ['JavaScript', 'CSS', 'GitHub Pages'],
    links: { github: 'https://github.com/shivamshivanshu/shivamshivanshu.github.io' },
  },
];

export function renderProjects() {
  const div = document.createElement('div');

  if (content.length === 0) {
    div.innerHTML = `
      <div class="section">
        <h2 class="section-title">Projects</h2>
        <p>Coming soon.</p>
      </div>
    `;
    return div;
  }

  div.innerHTML = `
    <div class="section">
      <h2 class="section-title">Projects</h2>
      <div class="grid grid-2">
        ${content.map(proj => `
          <div class="card">
            <h3 class="card-title">${proj.title}</h3>
            <p class="card-description">${proj.description}</p>
            <div class="card-tags">
              ${proj.tech.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="card-links">
              ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
              ${proj.links.demo ? `<a href="${proj.links.demo}" target="_blank" rel="noopener">Live Demo</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}
