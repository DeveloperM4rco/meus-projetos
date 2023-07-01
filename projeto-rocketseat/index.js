function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'assets/eu-lightmode.jpg')
    } else {
        // se não tiver light mode, adiciona a outra imagem
        img.setAttribute('src', 'assets/eu.jpg')
    }
}