// menu.js - единое меню для всех страниц
function loadMenu() {
    var menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    var menuHTML = `
        <nav style="display: flex; justify-content: center; gap: 30px; padding: 15px 20px; background: var(--menu-bg, rgba(10, 10, 21, 0.9)); border-bottom: 2px solid #c9a84c; margin-bottom: 20px; flex-wrap: wrap;">
            <a href="/OplotGuild/" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'index.html' || currentPage === '' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">🏠 Главная</a>
            <a href="/OplotGuild/rules.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'rules.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">📜 Правила</a>
            <a href="/OplotGuild/links.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'links.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">🔗 Ссылки</a>
            <a href="/OplotGuild/music.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'music.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">🎵 Музыка</a>
            <a href="/OplotGuild/builds.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'builds.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">⚓ Билды 🔒</a>
            <a href="/OplotGuild/tips.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'tips.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">📖 Советы 🔒</a>
            <a href="/OplotGuild/officer.html" style="color: var(--link-color, #e0d6b0); text-decoration: none; font-size: 1.1rem; padding: 5px 15px; border-radius: 5px; transition: 0.3s; ${currentPage === 'officer.html' ? 'border-bottom: 2px solid #c9a84c; color: #c9a84c;' : ''}">👑 Офицерская</a>
            <button id="theme-toggle" style="background: none; border: 1px solid #c9a84c; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; font-size: 1.2rem; color: var(--link-color, #e0d6b0); transition: 0.3s;">🌙</button>
        </nav>
    `;

    menuContainer.innerHTML = menuHTML;

    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            var body = document.body;
            var currentTheme = body.getAttribute('data-theme') || 'dark';
            var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        });
    }

    var savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
} else {
    loadMenu();
}
