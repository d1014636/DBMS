function createImage() {
    var img = document.createElement('img');
    img.src = '/media/icon.png';
    return img;
}

function createLine() {
    var line = document.createElement('div');
    for (var i = 0; i < Math.ceil(window.innerWidth / 210); i++) {
        line.appendChild(createImage());
    }
    return line;
}

(function renderBG() {
    document.querySelectorAll('#bg>*').forEach(line => {
        line.remove();
    })
    for (var i = 0; i < Math.ceil((window.innerHeight + 34.2 * window.innerWidth) / 162.5); i++) {
        document.getElementById('bg').appendChild(createLine());
    }
})();