function mostrarDetalles(valvulaId) {
    // Obtén el elemento de la pestaña de detalles según el ID de la válvula
    var detallesElement = document.getElementById(valvulaId + '-detalles');

    // Muestra la pestaña de detalles
    detallesElement.style.display = 'block';

    // Cierra la pestaña de detalles después de 5 segundos (puedes ajustar este tiempo)
    setTimeout(function () {
        detallesElement.style.display = 'none';
    }, 5000);
}

function mostrarDetalles(valvulaId) {
    var popup = document.getElementById(valvulaId + '-popup');
    popup.style.display = 'flex';
}

function cerrarPopup(valvulaPopupId) {
    var popup = document.getElementById(valvulaPopupId);
    popup.style.display = 'none';
}
