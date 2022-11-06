document.getElementById('fecha').valueAsDate = new Date();

function generar() {
    let costo = document.getElementById('costo').value;
    let porcentaje = document.getElementById('porcentaje').value;
    document.getElementById('porcentaje calculado').innerHTML = costo / 100 * porcentaje + ' Gs';
}

function limpiar() {
    document.getElementById('miformulario').reset();
}

