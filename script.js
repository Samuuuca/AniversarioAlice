window.onload = date()


const scrollObserver = new IntersectionObserver((entradas) => {

    entradas.forEach((entre) => {
        console.log('entrou')
        if(entre.isIntersecting){
            entre.target.classList.add('show')
        }
        else{
            entre.target.classList.remove('show')
        }
    })
})

const section = document.querySelectorAll('.hidden')

section.forEach((el) => scrollObserver.observe(el))

function date(){

    const dateBD = document.getElementById('dateBD')
    const divlock = document.getElementById('lock')
    var musica = new Audio('music/10convert.com_amigo hoje é o seu aniversário_WyUaUdTpXhE.mp3')
    const confete = document.querySelector('.foto')
    console.log(musica)
    
      
    let a = 'Dec 18, 2022 00:00:00'
  
    let date = new Date(a).getTime()
      console.log(date, dateBD);
  
    let x = setInterval(() => {
      
        let now = new Date().getTime()
        
        let diferença = date - now 
    
        let day = Math.floor( diferença / ( 1000 * 60 * 60 * 24 ))
        let horas = Math.floor((diferença % ( 1000 * 60 * 60 * 24 )) / ( 100 * 60 * 60))
        let minutos = Math.floor((diferença % ( 1000 * 60 * 60 )) / ( 1000 * 60 ))
        let segundos = Math.floor((diferença % ( 1000 * 60)) / 1000)
    
        let format = `${day}d ${horas}h ${minutos}m ${segundos}s`.replace('-', '', '3') 
        
        if (date <= now ) {
            dateBD.innerText = 'Role para baixo'
            musica.play()
            divlock.style.display = 'block'
            confete.style.display = 'block'
        }
        else{
            dateBD.innerText = format
        }
    }, 1000);
  }