function flipCard(card) {
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
    }
}

function zoomImage(event) {
    const imgSrc = event.target.src;
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');
    fullscreenDiv.innerHTML = `<img src="${imgSrc}" alt="Fullscreen Image">`;
    fullscreenDiv.onclick = function() {
        document.body.removeChild(fullscreenDiv);
    };
    document.body.appendChild(fullscreenDiv);
}
