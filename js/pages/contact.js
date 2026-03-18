const content = {
  email: 'shivamshivanshu15@gmail.com',
  github: 'https://github.com/shivamshivanshu',
  linkedin: 'https://linkedin.com/in/shivamshivanshu',
};

export function renderContact() {
  const items = [
    content.email && { label: 'Email', value: content.email, href: `mailto:${content.email}` },
    content.github && { label: 'GitHub', value: content.github.replace('https://', ''), href: content.github },
    content.linkedin && { label: 'LinkedIn', value: content.linkedin.replace('https://', ''), href: content.linkedin },
  ].filter(Boolean);

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="section">
      <h2 class="section-title">Get in Touch</h2>
      <p>I'm always open to discussing new opportunities, interesting projects, or just chatting about low-latency systems.</p>
      <div class="contact-links">
        ${items.map(item => `
          <a href="${item.href}" class="contact-item" target="_blank" rel="noopener">
            <span class="contact-label">${item.label}</span>
            <span class="contact-value">${item.value}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}
