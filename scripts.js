function flipCard(card) {
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
    }
}

function closeFullscreen() {
    const fullscreenDiv = document.getElementById('fullscreen');
    fullscreenDiv.classList.add('hidden');
    fullscreenDiv.querySelector('img').src = ''
}

function zoomImage(event) {
    const imgSrc = event.target.src;
    const fullscreenDiv = document.getElementById('fullscreen');
    fullscreenDiv.querySelector('img').src = imgSrc
    fullscreenDiv.classList.remove('hidden');
}
