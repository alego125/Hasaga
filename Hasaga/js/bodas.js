document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {img: '/img/16.jpg'},
        {img: '/img/17.jpg'},
        {img: '/img/18.jpg'},
        {img: '/img/19.jpg'},
        {img: '/img/20.jpg'},
        {img: '/img/21.jpg'},
        {img: '/img/22.jpg'},
        {img: '/img/1.jpg'},
        {img: '/img/2.jpg'},
        {img: '/img/3.jpg'},
        {img: '/img/4.jpg'},
        {img: '/img/5.jpg'},
        {img: '/img/6.jpg'},
        {img: '/img/7.jpg'},
        {img: '/img/8.jpg'}

    ];
    let contador = 0;
    const contenedor = document.querySelector('.slideshow3');
    const overlay = document.querySelector('.overlay3');
    const galeria_imagenes =  document.querySelectorAll('.galeria3 img');
    const img_slideshow = document.querySelector('.slideshow3 img');

    contenedor.addEventListener('click', function (event){
        let atras = contenedor.querySelector('.atras3'),
            adelante = contenedor.querySelector('.adelante3'),
            img = contenedor.querySelector('img'),
            tgt = event.target;
        if (tgt == atras){
            if (contador > 0){
                img.src = imagenes[contador - 1].img;
                contador--;
            }else {
                img.src = imagenes[imagenes.length - 1].img;
                contador = imagenes.length - 1;
            }
        }else if (tgt == adelante){
            if (contador < imagenes.length - 1){
                img.src = imagenes[contador + 1]. img;
                contador++;
            }else{
                img.src = imagenes[0].img;
                contador = 0;
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar;
            img_slideshow.src = imagenes[imagen_seleccionada].img;
            contador = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        })
    })

    document.querySelector('.btn_cerrar3').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    })
})