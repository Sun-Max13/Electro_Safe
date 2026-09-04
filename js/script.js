const buscador = document.getElementById("buscador");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        const texto = buscador.value.toLowerCase();

        const normativas = document.querySelectorAll(".normativa");

        normativas.forEach(function (normativa) {

            const contenido = normativa.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                normativa.style.display = "block";
            } else {
                normativa.style.display = "none";
            }

        });

    });

}