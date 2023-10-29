const solto = "my-4 absolute w-screen"
const fixo = "bg-white mb-4 pt-4 inset-x-0 top-0 fixed w-screen z-50"
document.addEventListener("scroll", (event) => {
    let barra = document.getElementById("barra")
    if (window.scrollY >= 300) { 
        // verifica se ja ta fixo
        barra.classList.value = fixo
     }
     else {
        barra.classList.value = solto
     }
})
