/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method mostrar_ocultar-Muestra opciones si el paciente tiene biopsia previa;
 * @param {string} biopsia-Si posee biopsia previa despliega dos opciones;
 * @return
 */

function mostrar_ocultar(biopsia) {
    if (biopsia === "Si") {
        document.getElementById("Si").style.display = "none";
    } else if (biopsia === "No") {
        document.getElementById("No").style.display = "block";
    }
    /**
     * Cálculo de riesgo según modelo probabilístico de Gail.
     * @method ca-Muestra opciones si el paciente tiene biopsia previa;
     * @param {string} biopsia-Si posee biopsia previa despliega dos opciones;
     * @return
     */

    function canvasGail () {
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