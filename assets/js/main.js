(function(){
    /* Usar identificador cuando se usa queryselector
       Identificadores = # for id's and . for classes also empty for taglines */ 
    let navbar = document.querySelector('#navbar');
    let hamburguer = document.querySelector('#hamburguer');
     
    hamburguer.addEventListener('click', () => {
    navbar.classList.toggle('open');
    /* Toggle añadir clase y removerla con la funcion 
    llamada classList que crea una clase */ 
    });
})()