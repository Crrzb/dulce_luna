

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