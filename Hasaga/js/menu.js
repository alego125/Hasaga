function menuAbrir(){
    let icon = document.getElementById('menu');
        icon.classList.toggle('open_menu');
    let menu = document.getElementById('ul');
        menu.classList.toggle('menu_abrir');
}

const abrir_galeria1 = ()=>{
    let galeriaAbierta = document.getElementById('galeria');
        galeriaAbierta.classList.toggle('galeria-open');
    let cambiarBoton1 = document.getElementById('boton1');
        cambiarBoton1.classList.toggle('btn_ocultar');
    let cambiarBoton2 = document.getElementById('boton2');
        cambiarBoton2.classList.toggle('btn_mostrar');
}

const abrir_galeria2 = ()=>{
    let galeriaAbierta = document.getElementById('galeria2');
        galeriaAbierta.classList.toggle('galeria-open2');
    let cambiarBoton3 = document.getElementById('boton3');
        cambiarBoton3.classList.toggle('btn_ocultar2');
    let cambiarBoton4 = document.getElementById('boton4');
        cambiarBoton4.classList.toggle('btn_mostrar2');
}

const abrir_galeria3 = ()=>{
    let galeriaAbierta = document.getElementById('galeria3');
        galeriaAbierta.classList.toggle('galeria-open3');
    let cambiarBoton3 = document.getElementById('boton5');
        cambiarBoton3.classList.toggle('btn_ocultar3');
    let cambiarBoton4 = document.getElementById('boton6');
        cambiarBoton4.classList.toggle('btn_mostrar3');
}

const abrir_galeria4 = ()=>{
    let galeriaAbierta4 = document.getElementById('galeria4');
        galeriaAbierta4.classList.toggle('mostrar-galeria');
}

const abrirPaquetes = ()=>{
    let paquete = document.getElementById("paquete");
        paquete.classList.toggle("abrir_paquete");
}

const abrirPaquetes2 = ()=>{
    let paquete = document.getElementById("paquete2");
        paquete.classList.toggle("abrir_paquete2");
}
const abrirPaquetes3 = ()=>{
    let paquete = document.getElementById("paquete3");
        paquete.classList.toggle("abrir_paquete3");
}
