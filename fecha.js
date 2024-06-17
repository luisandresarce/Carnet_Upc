function fecha() {
    var hoy = new Date();
    var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    var nombreDia = dias[hoy.getDay()];
    var diaMes = hoy.getDate();
    var mes = meses[hoy.getMonth()];
    var anio = hoy.getFullYear();
    return `${nombreDia}, ${diaMes} ${mes} ${anio}`;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fechaHoy').textContent = fecha();
});
