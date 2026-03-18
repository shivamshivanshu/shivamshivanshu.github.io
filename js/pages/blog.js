const content = {
  postsDir: 'content/blog',
  posts: [
    {
      slug: 'hello-world',
      title: 'Hello World — Why I Started This Blog',
      date: '2026-03-15',
      summary: 'A brief introduction to who I am, what I work on, and why I decided to start writing about low-latency systems programming.',
    },
  ],
};

export function renderBlog() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="section">
      <h2 class="section-title">Blog</h2>
      <div class="blog-list">
        ${content.posts.map(post => `
          <a href="#/blog/${post.slug}" class="card blog-card">
            <span class="blog-date">${post.date}</span>
            <h3 class="card-title">${post.title}</h3>
            <p class="card-description">${post.summary}</p>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}

export function renderBlogPost(slug) {
  const post = content.posts.find(p => p.slug === slug);
  if (!post) {
    const div = document.createElement('div');
    div.innerHTML = `<p>Post not found.</p><a href="#/blog" class="blog-back">&larr; Back to blog</a>`;
    return div;
  }

  const container = document.createElement('div');
  container.classList.add('blog-post');
  container.innerHTML = `
    <a href="#/blog" class="blog-back">&larr; Back to blog</a>
    <h1>${post.title}</h1>
    <p class="blog-post-meta">${post.date}</p>
    <div class="blog-content"><p>Loading...</p></div>
  `;

  const contentDiv = container.querySelector('.blog-content');

  fetch(`${content.postsDir}/${slug}.md`)
    .then(res => {
      if (!res.ok) throw new Error('Post not found');
      return res.text();
    })
    .then(md => {
      if (typeof marked !== 'undefined') {
        contentDiv.innerHTML = marked.parse(md);
      } else {
        contentDiv.innerHTML = `<pre>${md}</pre>`;
      }
    })
    .catch(() => {
      contentDiv.innerHTML = '<p>Failed to load post content.</p>';
    });

  return container;
}
