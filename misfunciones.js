/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method canvasGail-Dibujo del cálculo de riesgo;
 * @param
 * @return
 */
function mostrar_ocultar(biopsia) {
    if (biopsia === "val_mostrar") {
        document.getElementById("divMO").style.display = "block";
    } else if (biopsia === "val_ocultar") {
        document.getElementById("divMO").style.display = "none";
    }

    function canvasGail() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle = "#eee6d0";
        var xMax = canvas.width;
        context.arc(xMax / 2, yMax / 2, 25, 0, 2 * Math.PI)
        context.stroke();
        context.fillStyle = "#842A61F2";
        context.fill();
    }
}