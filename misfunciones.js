/**
 * Cálculo de riesgo según modelo probabilístico de Gail.
 * @method Función para evaluar criterio de elegibilidad a realizar el cálculo de riesgo;
 */
function antecedenteCa() {
        alert("No se puede realizar el cálculo.Buscar otra herramienta");
    }

 /**
 *Cálculo de riesgo según modelo probabilístico de Gail.
* @method Función para evaluar criterio de elegibilidad a realizar el cálculo de riesgo.
*/
 function antecedenteMut(){
     alert("Otra herramienta es más apropiada.Elegir IBIS model o BOADICEA");
    }


        function cargarForm() {
            var ed, raza, biopsia, cuantas, hda, menarca, paridad,
                ahf, urlComp;
            ed= document.getElementById("Edad").value;
            raza = document.getElementById("raza")[0].value;
            biopsia = document.getElementsByName("biopsia")[0].value;
            cuantas = document.getElementById("cuantas") [0].value;
            hda = document.getElementById("hda")[0].value;
            menarca = document.getElementById("menarca") [0].value;
            paridad = document.getElementById("paridad")[0].value;
            ahf = document.getElementById("ahf")[0].value;
            urlComp = "Resultados.html#" +  ed + "#" + raza + "#" + biopsia + "#" + cuantas + "#" + hda + "#" + menarca + "#" + paridad + "#" + ahf;
            window.open(urlComp);
        }

        function mostrar_resultado() {
            var urlComp,eda, ra, bio, cuan, h, me, pa, ah;
            urlComp = window.location.href.split("/")[5];
            eda = urlComp.split("#")[1];
            ra = urlComp.split("#")[2];
            bio = urlComp.split("#")[3];
            cuan = urlComp.split("#")[4];
            h = urlComp.split("#")[5];
            me = urlComp.split("#")[6];
            pa = urlComp.split("#")[7];
            ah = urlComp.split("#")[8];
            document.getElementById("form").value = eda + "" + ra + "" + bio + "" + cuan + "" + h + "" + me + "" + pa + "" + ah;
        }

        /**
         * Cálculo de riesgo según modelo probabilístico de Gail.
         * @method ca-Muestra opciones si el paciente tiene biopsia previa;
         * @param {string} bio-Si posee biopsia previa despliega dos opciones;
         * @return
         */



        function mostrar_ocultar(bio) {
            if (bio === "val_mostrar") {
                document.getElementById("biop").style.display = "block";
            } else if (bio === "val_ocultar") {
                document.getElementById("biop").style.display = "none";
            }
        }

        /**
         * Cálculo de riesgo según modelo probabilístico de Gail.
         * @method canvasGail, muestra el resultado probabilístico en un gráfico;
         * @return gráfico
         */

        function canvasGail() {
            var canvas = document.getElementById("canvasGail");
            var context = canvas.getContext("2d");
            var yMax = canvas.height;
            var xMax = canvas.width;
            context.fillStyle = "#eee6d0";
            context.arc(xMax / 2, yMax / 2, 200, 0, 4 * Math.PI);
            context.stroke();
            context.fillStyle = "#842A61F2";
            context.fill();
        }

/**
 * Càlculo de riesgo segùn el modelo de Gail.
 * @method Calcular Función para evaluar el calculo de riesgo;
 */

 function paridad_ahf() {
        var paridad, me20, pp20_24,pp25_29,ninguno,ppm30;
        paridad = document.getElementById("paridad").value;
        if (paridad===me20){
            document.getElementById("none").value = Number(1);
        document.getElementById("un").value = Number(2.61);
        document.getElementById("mas").value = Number(6.8);
    }else if (paridad===pp20_24) {
            document.getElementById("none").value = Number(1.24);
            document.getElementById("un").value = Number(2.68);
            document.getElementById("mas").value = Number(5.78);
        }
        else if(paridad===pp25_29||paridad===ninguno){
            document.getElementById("none").value = Number(1.55);
            document.getElementById("un").value = Number(2.76);
            document.getElementById("mas").value = Number(4.91);
        }else if(paridad===ppm30){
            document.getElementById("none").value = Number(1.93);
            document.getElementById("un").value = Number(2.83);
            document.getElementById("mas").value = Number(4.17);

        }


    }


 function biopsia() {
        var bs, bn, cuan, hiperplasia;
        bs = document.getElementById("bi_si").value;
        bn = document.getElementById("bi_no").value;
        cuan = document.getElementById("cuantas").value;
        hiperplasia = document.getElementById("hda").value;
        if (bn) {
            document.getElementById("bi_no").value = Number(1);
        } else if (bs || cuan || hiperplasia) {
            document.getElementById("c1").value = Number(1.7);
            document.getElementById("c2").value = Number(2.88);
            document.getElementById("hs").value = Number(0.93);
            document.getElementById("hn").value = Number(1.82);
            document.getElementById("des").value = Number(1);
        }

        function CalMe() {
            var M1, M2, M3, me;
            me = document.getElementById("menarca").value;
            if (me === M1) {
                document.getElementById("m1").value = Number(1.21);
            } else if (me === M2) {
                document.getElementById("m2").value = Number(1.10);
            } else if (me === M3) {
                document.getElementById("m3").value = Number(1);
            }
        }
 }
