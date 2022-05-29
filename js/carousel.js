window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel_indicadores',
        arrows: {
            prev: '.carousel_anterior',
            next: '.carousel_siguiente'
        },
        responsive: [{
            // tamaños mayores a >= 775px
            breakpoint: 775,
            settings: {
                slidesToShow: 2, //items a mostrar
                slidesToScroll: 2, // cuantos al hacerle click
                draggable: true,
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // tamaños mayores a >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                draggable: true,
                itemWidth: 150,
                duration: 0.25
            }
        }]
    });
});