function muestra_oculta(contenido) {
    let div = document.getElementById(contenido);
    if (div.style.display == "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}