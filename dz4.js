let advantage = document.getElementById('plus')
let track = document.getElementById('minus')
let soccer = document.getElementById('score')
let num = 0;
advantage.onclick = () => {
    num++
    soccer.innerText = num
}
track.onclick = () => {
    num--
    if ( num < 1){
        num = 0
    }
   soccer.innerText = num
}
