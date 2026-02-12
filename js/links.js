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
        { name: "Spotify", url: "https://spotify.com" },
        { name: "Twitch", url: "https://www.twitch.tv" },
        { name: "YouTube Music", url: "https://music.youtube.com" },
        { name: "YouTube", url: "https://www.youtube.com" },
        { name: "Pinterest", url: "https://www.pinterest.com/" },
        { name: "Inoriginal", url: "https://inoriginal.net/" }
    ]
};

function createLinks() {
    // Чистим и заполняем Tools
    const toolsContainer = document.getElementById('tools-links');
    if (toolsContainer) {
        toolsContainer.innerHTML = '';
        linkCategories.tools.forEach(link => {
            toolsContainer.appendChild(createLinkElement(link));
        });
    }

    // Чистим и заполняем Social
    const socialContainer = document.getElementById('social-links');
    if (socialContainer) {
        socialContainer.innerHTML = '';
        linkCategories.social.forEach(link => {
            socialContainer.appendChild(createLinkElement(link));
        });
    }

    // Чистим и заполняем Content
    const contentContainer = document.getElementById('content-links');
    if (contentContainer) {
        contentContainer.innerHTML = '';
        linkCategories.content.forEach(link => {
            contentContainer.appendChild(createLinkElement(link));
        });
    }
}

function createLinkElement(link) {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'btn';
    a.textContent = link.name;
    
    // Добавляем обработку клика для анимации загрузки
    a.addEventListener('click', handleLinkClick);
    return a;
}

function handleLinkClick(e) {
    e.preventDefault();
    const href = e.currentTarget.href;
    const loader = document.getElementById('loader');
    
    if (loader) {
        loader.classList.remove('hidden');
    }
    
    setTimeout(() => {
        window.location.href = href;
    }, 300);
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', createLinks);
