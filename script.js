const messages = [
    "You are the sunshine that lights up my life! ☀️",
    "Every moment with you is a treasure. 💖",
    "I may be far, but my heart is always with you! 💕",
    "Sejal, you are the reason I smile every day! 😊",
    "Loving you is the best thing that ever happened to me. ❤️",
    "Every heartbeat of mine whispers your name. 💓",
    "The distance may separate us, but our love keeps us connected. 💞",
    "Thinking of you makes my day brighter! 🌟",
    "I love you more than words can express! 😘",
    "You are my dream come true! 💫"
];

function generateMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("loveMessage").textContent = messages[randomIndex];
}

// Music Controls
let music = document.getElementById("loveSong");
let musicButton = document.getElementById("musicButton");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸ Pause Music ⏸";
    } else {
        music.pause();
        musicButton.textContent = "🎶 Play Music 🎶";
    }
}
