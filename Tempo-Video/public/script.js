function calculateFinalTime() {
    const originalTime = document.getElementById('originalTime').value;
    const speed = document.getElementById('speed').value;

    if (originalTime && speed) {
        const finalTime = originalTime / speed;
        document.getElementById('result').innerText = `Tempo Final do Vídeo: ${finalTime.toFixed(2)} minutos`;
    } else {
        document.getElementById('result').innerText = 'Por favor, preencha todos os campos.';
    }
}