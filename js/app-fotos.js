let contenedor_fotos = document.getElementById("contenedor-fotos");
agregar_fotos("pastel");



function cargar_fotos(){
    
}













function agregar_fotos(nombre_pastel){

    let nombre = nombre_pastel;

    let column = document.createElement("div");
    column.classList.add("col-4","my-2");

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "8rem";

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = "img/pasteles/"+nombre+".jpg";
    img.alt = "pastel";

    let card_body = document.createElement("div");
    card_body.classList.add("card-body");

    let card_title = document.createElement("h5");
    card_title.classList.add("card-title");
    card_title.textContent = "Pastel";

    card_body.append(card_title);
    card.append(img);
    card.append(card_body);

    column.append(card);
    contenedor_fotos.append(column);




}