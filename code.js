let cos = document.querySelectorAll(".numbers")
let showScreen = document.querySelector(".showScreen")
let equ = document.querySelector(".calculate").addEventListener("click",calculate)
let clear = document.querySelector(".ac").addEventListener("click",clearAll)
let c = document.querySelector(".clear-last").addEventListener("click",clearLast)

cos.forEach(function show(item){
    item.addEventListener("click",showDisplay)
})

function showDisplay(event){
    const x = event.target.innerHTML
    if(showScreen.innerHTML == 0){
        return showScreen.innerHTML = x;
    }
    return showScreen.innerHTML += x;
}

function calculate(){
    let phrase = showScreen.innerHTML
    showScreen.innerHTML =  eval(phrase)
}
 
function clearAll (){
    showScreen.innerHTML = 0;
}