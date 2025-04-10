function mudarCor() {
    const cores = ["FF5733", "#33FF57", "#3357FF", "#F7FF33", "#FF33A6"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor =corAleatoria;
}


