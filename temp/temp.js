document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference in localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${currentTheme}-theme`);
    themeIcon.textContent = currentTheme === 'light' ? '🌞' : '🌜';

    themeToggle.addEventListener('click', () => {
        // Toggle between light and dark theme
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.textContent = '🌜'; // Moon icon for dark theme
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.textContent = '🌞'; // Sun icon for light theme
            localStorage.setItem('theme', 'light');
        }
    });
});
