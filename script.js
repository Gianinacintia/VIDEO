const disc = document.getElementById('disc');
const music = document.getElementById('music');
const effectsContainer = document.getElementById('effects-container');

disc.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        disc.classList.add('rotating');
        startEffects();
    } else {
        music.pause();
        disc.classList.remove('rotating');
        stopEffects();
    }
});

function createEffect() {
    const effect = document.createElement('div');
    effect.classList.add('effect');
    effect.style.left = Math.random() * 100 + 'vw';
    effect.style.top = Math.random() * 100 + 'vh';
    effect.innerText = ['❤️', '😊', '🌟', '🎉','🌻'][Math.floor(Math.random() * 5)];
    effectsContainer.appendChild(effect);

    setTimeout(() => {
        effectsContainer.removeChild(effect);
    }, 5000);
}

let effectsInterval;

function startEffects() {
    effectsInterval = setInterval(createEffect, 500);
}

function stopEffects() {
    clearInterval(effectsInterval);
}
