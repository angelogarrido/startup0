function login() {
    var role = document.getElementById('role').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar el rol y realizar la autenticación (aquí deberías hacer una autenticación segura en un entorno real)
    if (role === 'cliente') {
        // Lógica de autenticación para clientes
        console.log('Autenticando como Cliente...');
    } else if (role === 'interprete') {
        // Lógica de autenticación para intérpretes
        console.log('Autenticando como Intérprete...');
    } else {
        // Manejar otro caso si es necesario
        console.log('Rol no reconocido...');
    }
}

function mostrarResena() {
    document.getElementById("resena").style.display = "block";
    document.getElementById("resena").style.opacity = "1";
}

function ocultarResena() {
    document.getElementById("resena").style.display = "none";
    document.getElementById("resena").style.opacity = "0";
}


$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false, // Evitar que se detenga cuando la ventana pierde el enfoque
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


