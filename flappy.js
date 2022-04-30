let cvs = document.getElementById('canvas')
let ctx = cvs.getContext('2d')

let bird = new Image()
let bg = new Image()
let fg = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bird.src = 'img/bird.png'
bg.src = 'img/bg.png'
fg.src = 'img/fg.png'
pipeUp.src = 'img/pipeUp.png'
pipeBottom.src = 'img/pipeBottom.png'

let xPos = 10
let yPos = 150
let grav = 1.5

const moveUp =(e)=>{

    if(e.code == 'Space') yPos -= 38
}
document.addEventListener('keydown', moveUp)

let pipe = []
pipe[0]={
    x:cvs.width,
    y:0
}

let otstup = 100

let score = 0
const draw=()=>{
    ctx.drawImage(bg, 0,0)
    ctx.drawImage(bird, xPos, yPos)
    yPos += grav


    for(let i=0; i<pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y+ pipeUp.height + otstup)
        pipe[i].x --

        if(xPos+bird.width >= pipe[i].x &&
            xPos<=pipe[i].x + pipeUp.width &&
            (
                yPos<=pipe[i].y + pipeUp.height ||
                yPos+bird.height >= pipe[i].y + pipeUp.height +otstup
            ) ||
            yPos + bird.height >= cvs.height - fg.height
            ) {
                location.reload()
            }


        if(pipe[i].x == 125){
            pipe.push({
                x:cvs.width,
                y: Math.floor(Math.random() * pipeUp.height)- pipeUp.height
            })
        }

        if(pipe[i].x == 5){
            score++
        }
    }

    ctx.drawImage(fg,0, cvs.height-fg.height)

    ctx.fillStyle = '#000'
    ctx.font = '24px Verdana'
    ctx.fillText('Score: '+score, 10, cvs.height - 20)

    requestAnimationFrame(draw)

}

let btn = document.getElementsByClassName('knopka')
    document.addEventListener('click',draw)
pipeBottom.onload = function () {
    document.getElementsByClassName('knopka').onclick = function () {
        this.disabled = "disabled";
    }
}