import { config } from './config.js';
import { Router } from './router.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderExperience } from './pages/experience.js';
import { renderProjects } from './pages/projects.js';
import { renderBlog, renderBlogPost } from './pages/blog.js';
import { renderContact } from './pages/contact.js';

const app = document.getElementById('app');

function renderNav() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="#/" class="nav-logo">${config.site.name}</a>
      <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links">
        ${config.nav.map(item => {
          if (item.external) {
            return `<a href="${item.href}" target="_blank" rel="noopener">${item.label}</a>`;
          }
          return `<a href="${item.route}">${item.label}</a>`;
        }).join('')}
      </div>
    </div>
  `;

  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  return nav;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.textContent = config.footer.text;
  return footer;
}

function updateActiveLink() {
  const hash = window.location.hash || '#/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (a.getAttribute('target') === '_blank') return;
    if (hash === href || (href !== '#/' && hash.startsWith(href))) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

function setPage(title, renderFn, ...args) {
  document.title = title
    ? `${title} — ${config.site.name}`
    : `${config.site.name} — ${config.site.tagline}`;
  const main = app.querySelector('main');
  main.innerHTML = '';
  const content = renderFn(...args);
  if (typeof content === 'string') {
    main.innerHTML = content;
  } else if (content instanceof Node) {
    main.appendChild(content);
  } else if (content instanceof Promise) {
    content.then(resolved => {
      main.innerHTML = '';
      if (typeof resolved === 'string') {
        main.innerHTML = resolved;
      } else if (resolved instanceof Node) {
        main.appendChild(resolved);
      }
    });
  }
  updateActiveLink();
  window.scrollTo(0, 0);
}

function init() {
  app.appendChild(renderNav());

  const main = document.createElement('main');
  app.appendChild(main);

  app.appendChild(renderFooter());

  const router = new Router([
    Router.route(/^\/$/, () => setPage(null, renderHome)),
    Router.route(/^\/about$/, () => setPage('About', renderAbout)),
    Router.route(/^\/experience$/, () => setPage('Experience', renderExperience)),
    Router.route(/^\/projects$/, () => setPage('Projects', renderProjects)),
    Router.route(/^\/blog$/, () => setPage('Blog', renderBlog)),
    Router.route(/^\/blog\/(.+)$/, (match) => setPage('Blog', renderBlogPost, match[1])),
    Router.route(/^\/contact$/, () => setPage('Contact', renderContact)),
  ]);

  router.start();
}

init();
