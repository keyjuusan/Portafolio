const navBar = document.querySelector(".contenedor");
let posicioninicial = window.pageYOffset;

window.addEventListener("scroll", ()=>{
    let desplazamientoActual = window.pageYOffset;
    if(posicioninicial >= desplazamientoActual){
        navBar.style.transform = "translateY(0)";
    }else{
        navBar.style.transform = "translateY(-68px)";
    }
    posicioninicial = desplazamientoActual;
    
});
