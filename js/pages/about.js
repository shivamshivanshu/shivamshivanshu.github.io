const content = {
  bio: [
    'I\'m a software developer working on low-latency systems for options trading in modern cpp. I spend my days building and optimizing execution infrastructure — order management, market data processing, and the plumbing that connects strategy to exchange.',
    'I hold an undergraduate degree in Electrical Engineering from Indian Institute of Technology Kanpur. I enjoy working close to the metal, where understanding hardware and data layout directly impacts performance.',
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Modern C++', 'Python3', 'Java', 'SQL', 'Bash', 'Haskell', 'Lua'],
    },
    {
      category: 'Debugging & Tools',
      items: ['GDB', 'perf', 'Valgrind', 'Flamegraphs', 'Sanitizers'],
    },
    {
      category: 'Systems & Infra',
      items: ['Linux', 'Docker', 'Git', 'Bazel', 'CMake', 'POSIX'],
    },
    {
      category: 'Networking & Data',
      items: ['TCP/IP', 'UDP', 'Multicast', 'Kafka'],
    },
    {
      category: 'Embedded & Security',
      items: ['Bare Metal C', 'MCU Firmware', 'Cryptography', 'X.509 PKI'],
    },
  ],
};

export function renderAbout() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="section">
      <h2 class="section-title">About Me</h2>
      ${content.bio.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="section">
      <h2 class="section-title">Skills & Tech</h2>
      ${content.skills.map(group => `
        <div class="skills-group">
          <h3>${group.category}</h3>
          <div class="skills-list">
            ${group.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  return div;
}
