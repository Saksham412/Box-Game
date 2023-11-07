let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let movingBox = document.getElementById("movingBox")

easy.addEventListener("click",() =>{
    movingBox.style.animationDuration = '5s';
    movingBox.style.animationPlayState = "running";
    easy.style.background = 'grey';
    medium.style.background = 'rgb(202, 225, 176)';
    hard.style.background = 'rgb(202, 225, 176)';
})
medium.addEventListener("click",() =>{
    movingBox.style.animationDuration = '3s';
    movingBox.style.animationPlayState = "running";
    medium.style.background = 'grey';
    easy.style.background = 'rgb(202, 225, 176)';
    hard.style.background = 'rgb(202, 225, 176)';
})
hard.addEventListener("click",() =>{
    movingBox.style.animationDuration = '2s';
    movingBox.style.animationPlayState = "running";
    hard.style.background = 'grey';
    medium.style.background = 'rgb(202, 225, 176)';
    easy.style.background = 'rgb(202, 225, 176)';
})

let start = document.getElementById("start")
let stop = document.getElementById("stop")

stop.addEventListener("click", () => {
    movingBox.style.animationPlayState = "paused";
})
start.addEventListener("click", () => {
    movingBox.style.animationPlayState = "running";
})