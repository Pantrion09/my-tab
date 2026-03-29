const linkCategories = {
    tools: [
        { name: "Manga", url: "https://com-x.life/home/" },
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
        { name: "Github", url: "https://github.com" }, 
        { name: "Spotify", url: "https://open.spotify.com" },
        { name: "Twitch", url: "https://www.twitch.tv" },
        { name: "YouTube Music", url: "https://music.youtube.com" },
        { name: "YouTube", url: "https://www.youtube.com" },
        { name: "Pinterest", url: "https://www.pinterest.com/" },
        { name: "Inoriginal", url: "https://inoriginal.net/" }
    ],
    content: [
        { name: "TheVerge", url: "https://www.theverge.com/" },
        { name: "XDA", url: "https://www.xda-developers.com/" },
        { name: "1600.lol", url: "https://1600.lol/" },
        { name: "LoFi", url: "https://lofimusic.app/" },
        { name: "OnePrep", url: "https://www.oneprep.xyz/question-bank/" },
        { name: "Desmos", url: "https://www.desmos.com/calculator?lang=ru" } 
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
                
                // ХАК: Вместо обычного клика используем top.location
                // Это гарантирует, что сайт откроется ВМЕСТО таба,
                // и браузер не будет ругаться на безопасность (Zen).
                a.onclick = function(e) {
                    e.preventDefault();
                    window.top.location.href = this.href;
                };
                
                container.appendChild(a);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', createLinks);
