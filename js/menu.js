let ordenar_btn = document.getElementById("ordenar_btn");
ordenar_btn.onclick = ordenar_pastel;

function ordenar_pastel() {


    let queso_mango = document.getElementById("queso_mango");
    let queso_fresa = document.getElementById("queso_fresa");
    let caketopper = document.getElementById("caketopper");
    let oblea = document.getElementById("oblea");
    let macarrones = document.getElementById("macarrones");
    let flores = document.getElementById("flores");
    let chocolates = document.getElementById("chocolates");
    let pastel = document.getElementById("pastel_selector").value;
    let pan = document.getElementById("pan_selector").value;
    let cobertura = document.getElementById("cobertura_selector").value;
    let relleno = document.getElementById("relleno_selector").value;
    let comentario = document.getElementById("nota").value;
    let fecha = document.getElementById("fecha").value;
    let mensaje_error = document.getElementById("mensaje_error");
    

    let extras = "*Extras*: ";

    queso_mango.checked ? extras = extras + "%0A" + queso_mango.value : 0;
    queso_fresa.checked ? extras = extras + "%0A" + queso_fresa.value : 0;
    caketopper.checked ? extras = extras + "%0A" + caketopper.value : 0;
    oblea.checked ? extras = extras + "%0A" + oblea.value : 0;
    macarrones.checked ? extras = extras + "%0A" + macarrones.value : 0;
    flores.checked ? extras = extras + "%0A" + flores.value : 0;
    chocolates.checked ? extras = extras + "%0A" + chocolates.value : 0;


    



    const nota_inicio = "Hola, me gustaria ordenarte este pastel: %0A%0A"
    const nota_pedido = '*Tamaño*: ' + pastel + '%0A*Pan*: ' + pan + '%0A*Cobertura*: ' + cobertura +
        '%0A*Relleno*: ' + relleno + '%0A%0A';
    const comentario_pedido = "%0A%0A*Nota*: " + comentario + ".";
    const fecha_entrega = "%0A%0A*Fecha de entrega*: "+ fecha;

    const nota = nota_inicio + nota_pedido + extras + comentario_pedido + fecha_entrega;

    if(!confirm("Se abrira Whatsapp para enviar tu pedido!")){
        mensaje_error.classList.toggle("visually-hidden");
    }else{
        window.location.href = "https://wa.me/528110313978?text=" + nota;
        mensaje_error.classList.toggle("visually-hidden");
    }

    
}
