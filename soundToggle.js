let isSoundOn = true;

function toggleSound() {
    const audio = document.getElementById('background-music');
    const soundIcon = document.getElementById('sound-icon');
    
    if (isSoundOn) {
        audio.pause();
        soundIcon.src = 'pics/sound_off_icon.png';
        isSoundOn = false;
    } else {
        audio.play().catch(error => {
            console.log("Не удалось воспроизвести звук, требуется действие пользователя.");
        });
        audio.volume = 0.35;
        soundIcon.src = 'pics/sound_on_icon.png';
        isSoundOn = true;
    }
}

window.onload = function() {
    const soundButton = document.querySelector('.sound-toggle');
    soundButton.onclick = toggleSound;

    const audio = document.getElementById('background-music');
    audio.volume = 0.1;
    audio.play().catch(error => {
        console.log("Не удалось воспроизвести звук, требуется действие пользователя.");
    });
};
