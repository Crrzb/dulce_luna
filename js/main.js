

let dropdown_menu = document.getElementById("dropdown_menu");
let icon_menu = document.getElementById("icon_menu");


function click_menu(){
    dropdown_menu.classList.toggle("visually-hidden");

    icon_menu.classList.toggle("fa-sharp");
    icon_menu.classList.toggle("fa-solid");
    icon_menu.classList.toggle("fa-2x");
    icon_menu.classList.toggle("fa-bars");

    icon_menu.classList.toggle("fa-solid");
    icon_menu.classList.toggle("fa-xmark");
    icon_menu.classList.toggle("fa-2x");
}

let opciones_menu = document.getElementsByClassName("opciones_menu");
for(const opcion of opciones_menu){
    opcion.addEventListener("mouseover",() => border_to_black(opcion),false);
    opcion.addEventListener("mouseout",()=>border_to_light(opcion),false);
}

function border_to_black(element){
    element.classList.remove("border-light");
    element.classList.add("border-dark");
}

function border_to_light(element){
    element.classList.remove("border-dark");
    element.classList.add("border-light");
}