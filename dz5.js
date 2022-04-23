const circles= document.querySelectorAll(".circle")
console.log(circles)
let activelight= 0

setInterval(() => {
    changelight();
}, 1500);

function changelight() {
    circles[activelight].className = 'circle';
    activelight++;

 if(activelight > 2) {
     activelight=0
 }

    const cuurentlight = circles[activelight];
    cuurentlight.classList.add(cuurentlight.getAttribute("color"))

}

