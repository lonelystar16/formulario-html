$(document).ready(function () {

    // Cambiar de color el div con clase "cambiame"
    $("moverArriba").click(function () {
        $(".cambiame").animate({ top: '250px' });
    });




}); // Cierre de la función ready