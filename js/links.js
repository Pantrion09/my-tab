const linkCategories = {
    tools: [
        { name: "ChatGPT", url: "https://chatgpt.com/" },
        { name: "Gemini", url: "https://gemini.google.com/" },
        { name: "Deepseek", url: "https://chat.deepseek.com/" },
        { name: "Yandex Translate", url: "https://translate.yandex.ru/" },
        { name: "GGTW", url: "https://ggntw.com/steam/" },
        { name: "HdRezka", url: "https://hdrezka.co/" },
        { name: "RuTracker", url: "https://rutracker.org/" },
        { name: "VSthemes", url: "https://vsthemes.org/" }
    ],
    social: [
        { name: "Reddit", url: "https://www.reddit.com" },
        { name: "Github", url: "https://github.com" }
    ],
    content: [
        { name: "Spotify", url: "https://open.spotify.com" },
        { name: "Twitch", url: "https://www.twitch.tv" },
        { name: "YouTube Music", url: "https://music.youtube.com" },
        { name: "YouTube", url: "https://www.youtube.com" },
        { name: "Pinterest", url: "https://www.pinterest.com/" },
        { name: "Inoriginal", url: "https://inoriginal.net/" }
    ]
};

function createLinks() {
    Object.keys(linkCategories).forEach(category => {
        const container = document.getElementById(`${category}-links`);
        if (container) {
            container.innerHTML = '';
            linkCategories[category].forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.className = 'btn';
                a.textContent = link.name;
                
                // Это гарантирует, что ссылка откроется в новой вкладке 
                // и защита YouTube/Zen не сработает
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                
                container.appendChild(a);
            });
        }
    });
}

// Запуск отрисовки ссылок сразу после загрузки страницы
document.addEventListener('DOMContentLoaded', createLinks);
