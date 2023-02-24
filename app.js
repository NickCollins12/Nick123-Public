
var modal = document.getElementById("modal");
var cancel = document.getElementsByClassName("close")[0];
var btn = document.getElementById("btn");

btn.onclick = function()
    {modal.style.height= "100%";}
cancel.onclick = function()
    {modal.style.height= "0%";}


loadEventListeners()

function loadEventListeners() {
    addEventListener('resize', reduceBoxes)
}

function reduceBoxes() {
    if (innerWidth <= 960) {
        const boxes = document.querySelectorAll('.boxes')
    
        for (let i = 3; i < boxes.length; i++) {
            boxes[i].style.display = 'none'
        }
    } else {
        const boxes = document.querySelectorAll('.boxes')
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = 'block'
    }}
}
