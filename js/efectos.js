$(document).ready(function(){

    // ----------------------------------------------------
    // INICIO: PARTE 1 - ANIMACIONES INICIALES Y SCROLL SUAVE
    // ----------------------------------------------------

    // Scroll Suave para los Elementos del Menú
    $('.menu a').on('click', function(e){
        e.preventDefault();
        
        var targetId = $(this).attr('href');
        var targetElement = $(targetId).offset().top;

        $('html, body').animate({
            scrollTop: targetElement - 40 // Restamos 40px para margen superior
        }, 1000); // Duración de 1 segundo
    });

    // Efecto Animación Menú (Carga Inicial)
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    // Efecto Animación Header Textos (Carga Inicial)
    if ($(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // ----------------------------------------------------
    // INICIO: PARTE 2 - EFECTO PARALLAX EN SCROLL
    // ----------------------------------------------------
    
    // Esta función se ejecuta CADA VEZ que el usuario hace scroll
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        
        // El Parallax solo se activa en pantallas grandes (más de 800px)
        if(windowWidth > 800){
            var scroll = $(window).scrollTop(); // Cantidad de scroll en píxeles

            // 1. Mueve el texto de la cabecera más lento que el scroll
            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });

            // 2. Mueve la sección Acerca de Nosotros hacia arriba (LA LÍNEA QUE BUSCAS)
            // Esto anula el 'top: 500px' del CSS y la coloca en su lugar
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)' // <--- ESTA ES LA LÍNEA
            });
        }
    });
    
    // ----------------------------------------------------

});