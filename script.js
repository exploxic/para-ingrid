/* navegación secciones */

let current=0
const screens=document.querySelectorAll(".screen")

function next(){
    screens[current].classList.remove("active")
    current++
    if(current>=screens.length) current=screens.length-1
    screens[current].classList.add("active")
}

/* poder */

function activarPoder(){
    let pl=document.getElementById("powerLevel")
    let p=0
    let i=setInterval(()=>{
        p+=Math.floor(Math.random()*8000)
        pl.innerHTML="Poder: "+p
        if(p>9000){
    pl.innerHTML="¡¡SU PENDEJES ES DE MÁS DE 9000!! 🔥 (tqm xd)"
    clearInterval(i)


        }
    },200)
}

/* partículas */

for(let i=0;i<40;i++){
    let s=document.createElement("span")
    s.style.left=Math.random()*100+"vw"
    s.style.animationDuration=(3+Math.random()*4)+"s"
    document.getElementById("particles").appendChild(s)
}

/* ===== MINIJUEGO ===== */

let puntos=0
let tiempo=20
let jugando=false
let moverLoop,reloj

const target=document.getElementById("target")
const arena=document.getElementById("arena")

function mover(){
    const w=arena.clientWidth-50
    const h=arena.clientHeight-50
    target.style.left=Math.random()*w+"px"
    target.style.top=Math.random()*h+"px"
}

target.onclick=()=>{
    if(!jugando) return
    puntos++
    score.innerText=puntos
    mover()
}

function iniciarJuego(){
    puntos=0
    tiempo=20
    jugando=true
    score.innerText=0
    time.innerText=tiempo
    resultado.innerHTML=""

    mover()

    clearInterval(moverLoop)
    moverLoop=setInterval(mover,900)

    clearInterval(reloj)
    reloj=setInterval(()=>{
        tiempo--
        time.innerText=tiempo
        if(tiempo<=0) fin()
    },1000)
}

function fin(){
    jugando=false
    clearInterval(moverLoop)
    clearInterval(reloj)

    if(puntos<10) resultado.innerHTML="Nivel humano 🙂"
    else if(puntos<20) resultado.innerHTML="Nivel guerrera 💥"
    else if(puntos<35) resultado.innerHTML="Nivel súper saiyajin ⚡"
    else resultado.innerHTML="Nivel god xd 👑🔥"
}

iniciarJuego()
