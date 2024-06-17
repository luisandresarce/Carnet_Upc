function actualizarHora() {
    const elementoReloj = document.getElementById('reloj');
    const fechaActual = new Date();
    
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    // Añade un cero inicial si el número es menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Formato de 24 horas
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    elementoReloj.textContent = horaFormateada;
}

// Actualiza el reloj cada segundo
setInterval(actualizarHora, 1000);

// Inicia el reloj inmediatamente al cargar la página
actualizarHora();