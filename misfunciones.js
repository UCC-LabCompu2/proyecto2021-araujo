/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method mostrar_ocultar-Muestra opciones si el paciente tiene biopsia previa;
 * @return
 */
alert('esta funcionando')
function cargarForm (){
    let antecedente, mut, e, raza,biopsia, cuantas, hda, menarca, paridad,
        ahf, urlComp;
    antecedente=document.getElementById("previo")[0].value;
    mut=document.getElementById("mutación")[0].value;
    e=document.getElementById("Edad").value;
    raza=document.getElementById("raza")[0].value;
    biopsia=document.getElementById("biopsia")[0].value;
    cuantas=document.getElementById("cuantas") [0].value;
    hda=document.getElementById("hda")[0].value;
    menarca=document.getElementById("menarca") [0].value;
    paridad=document.getElementById("paridad")[0].value;
    ahf=document.getElementById("ahf")[0].value;
    urlComp = "Resultados.html#" + antecedente + "#" + mut + "#" + e +"#" + raza + "#" + biopsia + "#" + cuantas +"#" + hda +"#"+ menarca + "#" + paridad + "#" + ahf;
    window.open (urlComp);
}

function mostrar_resultado(){
    let urlComp, pre, mu, e, ra,bio,cuan,h, me,pa, ah;
    urlComp = window.location.href.split("/")[5];
    pre = urlComp.split("#")[1];
    mu= urlComp.split ("#")[2];
    e = urlComp.split ("#")[3];
    ra = urlComp.split("#")[4];
    bio = urlComp.split ("#")[5];
    cuan = urlComp.split("#")[6];
    h = urlComp.split("#")[7];
    me = urlComp.split("#")[8];
    pa = urlComp.split("#")[9];
    ah = urlComp.split("#")[10];
    document.getElementById("form").value = pre + "" + mu +"" + e +""+ ra +""+ bio +""+ cuan +""+ h +""+ me +""+ pa +""+ ah;
}

/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method ca-Muestra opciones si el paciente tiene biopsia previa;
 * @param {string} biopsia-Si posee biopsia previa despliega dos opciones;
 * @return
 */



function mostrar_ocultar(previa) {
    if (previa === "Si") {
        document.getElementById("Si").style.display = "none";
    } else if (previa === "No") {
        document.getElementById("No").style.display = "block";
    }
}
/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method canvasGail, muestra el resultado probabilístico en un gráfico;
 * @return gráfico
 */

    function canvasGail () {
        var canvas = document.getElementById("canvasGail");
        var context = canvas.getContext("2d");
        var yMax = canvas.height;
        var xMax = canvas.width;
        context.fillStyle = "#eee6d0";
        context.arc(xMax / 10, yMax / 10, 80, 0, 4* Math.PI);
        context.stroke();
        context.fillStyle = "#842A61F2";
        context.fill();
    }
