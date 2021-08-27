const hamburguer = document.querySelector('#hamburguer')
hamburguer.addEventListener('click', toggleMenu)
hamburguer.addEventListener('touchstart', toggleMenu)




function toggleMenu (event) {
    
    
    if (event.type === 'touchstart') { 
        event.preventDefault()
    }


    const container = document.querySelector('.containerT')
    container.classList.toggle('active')
}