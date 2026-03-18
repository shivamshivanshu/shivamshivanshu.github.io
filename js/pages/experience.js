const content = [
  {
    company: 'IMC Trading',
    role: 'Software Developer',
    period: 'July 2024 — Present',
    bullets: [],
  },
  {
    company: 'Texas Instruments',
    role: 'Embedded Software Developer',
    period: 'August 2023 — July 2024',
    bullets: [],
  },
];

export function renderExperience() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        ${content.map(job => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="timeline-role">${job.role}</div>
              <div class="timeline-company">${job.company}</div>
            </div>
            <div class="timeline-period">${job.period}</div>
            ${job.bullets.length ? `<ul class="timeline-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}
