document.getElementById("ButSub").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const but2 = document.getElementById("ButSub")

function desa(){
    if (window.scrollTo > 100){
        document.styleSheets.display = "none"
    }else{
        
    }
}


// let HoverImg1 = document.getElementById("I1")

// HoverImg1.addEventListener("click",()=>{
//     alert("mamass")
// })

let HoverImg1 = document.getElementById("I1")
let HoverImg2 = document.getElementById("I2")
let HoverImg3 = document.getElementById("I3")

HoverImg1.addEventListener("mouseover",()=>{
HoverImg1.setAttribute("src","./img/Productos/n2larga.png")
})
HoverImg1.addEventListener("mouseout",()=>{
HoverImg1.src = "./img/Productos/n1.png"
})
HoverImg2.addEventListener("mouseover",()=>{
HoverImg2.src = "./img/Productos/competacon.png"
})
HoverImg2.addEventListener("mouseout",()=>{
HoverImg2.src = "./img/Productos/completaSin.png"
})
HoverImg3.addEventListener("mouseover",()=>{
HoverImg3.src = "./img/Productos/kitsinfondo.png"
})
HoverImg3.addEventListener("mouseout",()=>{
HoverImg3.src = "./img/Productos/kitsinfondo.png"
})

//HAMBUERGUESA MAIN

let hamburguer = document.getElementById("togglerLable")
let contenidohamb = document.getElementById("mainHamburguer")
let logo = document.getElementById("logoN")

hamburguer.addEventListener("click",()=>{
contenidohamb.style.display = contenidohamb.style.display === 'flex' ? 'none' : 'flex'
logo.style.display = logo.style.display === 'flex' ? 'none' : 'flex'

})

document.addEventListener("DOMContentLoaded", function() {
    const carruselout = document.querySelectorAll(".Aboutwe");

    carruselout.addEventListener("mouseover", () => {
        carruselout.style.animationPlayState = "paused";
        console.log("si funciona")
    });

    carruselout.addEventListener("mouseout", () => {
        carruselout.style.animationPlayState = "running";
        console.log("salida")
    });
});

