(function(){
    
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;

    /* tenia de error no haber agregado el id a <main> debia ser <main id="main"> porque arriba llamo un id main o no hacer seleccion por clase si no dejarlo empty */
    let breakpoint = main.offsetTop - navbarHeight;

    let windowPos;

    let isFixed = false;
    function updatePos (){
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();

        if(windowPos >= breakpoint && !isFixed) {
            /* esta seccion cierra la navbar si esa open */
            navbar.classList.remove('open');

            /* posiciona la navbar en un breakpoint que es la seccion de portafolio
               ayudando a que se mantenga fija en un puinto y el style suma el margin top para que navbar se mantenga sticky */
            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top" + navbarHeight + 'px';
            isFixed = true;
        } else if (windowPos < breakpoint && isFixed) {
            /* esta seccion evita que la barra de navegacion se mueva antes del breakpoint
            quitando la clase navbar-fixed y se reinicia el margin top de main*/
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);
})()