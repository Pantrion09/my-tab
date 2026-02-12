const linkCategories = {
    tools: [
        { name: "ChatGPT", url: "https://chatgpt.com/" },
        { name: "Gemini", url: "https://gemini.google.com//" },
        { name: "Deepseek", url: "https://chat.deepseek.com/" },
        { name: "Yandex Translate", url: "https://translate.yandex.ru//" },
        { name: "GGTW", url: "https://ggntw.com/steam//" },
        { name: "HdRezka", url: "https://hdrezka.co//" },
        { name: "RuTracker", url: "https://rutracker.org//" },
        { name: "VSthemes", url: "https://vsthemes.org//" }
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
        { name: "Inoriginal", url: "https://inoriginal.net//" }
    ]
};
function createLinks() {
    const toolsContainer = document.getElementById('tools-links');
    linkCategories.tools.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'btn';
        linkElement.textContent = link.name;
        linkElement.addEventListener('click', handleLinkClick);
        toolsContainer.appendChild(linkElement);
    });
    
    const socialContainer = document.getElementById('social-links');
    linkCategories.social.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'btn';
        linkElement.textContent = link.name;
        linkElement.addEventListener('click', handleLinkClick);
        socialContainer.appendChild(linkElement);
    });
    
    const contentContainer = document.getElementById('content-links');
    linkCategories.content.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'btn';
        linkElement.textContent = link.name;
        linkElement.addEventListener('click', handleLinkClick);
        contentContainer.appendChild(linkElement);
    });
}

function handleLinkClick(e) {
    e.preventDefault();
    
    showLoader();
    
    setTimeout(() => {
        window.location.href = this.href;
    }, 300);
}

function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createLinks();
});
