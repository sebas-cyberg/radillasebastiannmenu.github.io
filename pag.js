// Obtenemos los botones por su ID
const personalButton = document.getElementById("personal");
const empresaButton = document.getElementById("empresa");
const cuerphButton = document.getElementById("cuerpoh");
const cuborButton = document.getElementById("cubor");

// Funciones para redirigir a las páginas web correspondientes al hacer clic en los botones
personalButton.addEventListener("click", function() {
    window.location.href = "https://radillasebastian.000webhostapp.com/Personal/";
});

empresaButton.addEventListener("click", function() {
    window.location.href = "https://radillasebastian.000webhostapp.com/Empresa/";
});

cuerphButton.addEventListener("click", function() {
    window.location.href = "https://radillasebastian.000webhostapp.com/digestivo/";
});

cuborButton.addEventListener("click", function() {
    window.location.href = "https://radillasebastian.000webhostapp.com/Cubo/";
});
