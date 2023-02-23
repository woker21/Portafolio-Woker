const reloj = document.getElementById("reloj");
const hora = document.getElementById("horas");
const minuto = document.getElementById("minutos");


function actualizarReloj() {
    var fecha = new Date();

    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    hora.innerHTML = formatoHora(horas) + ":";
    minuto.innerHTML = formatoHora(minutos);
}

function formatoHora(hora) {
    if (hora < 10) {
    hora = "0" + hora;
    }
    return hora;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);
