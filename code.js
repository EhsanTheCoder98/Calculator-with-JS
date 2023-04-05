let displayBox = document.querySelector(".showScreen")
let list = document.querySelectorAll(".numbers")

function showDisplay(event){
    const x = event.target.innerText
    if(displayBox.innerHTML == 0){
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate (){
    let result = displayBox.innerText;
    displayBox.innerText = eval(result)
}

function allClear (){
    displayBox.innerText = 0;
}

function clear (){
    let text = displayBox.innerText;
    if(text.length === 1){
        displayBox.innerText = 0;
    }else{
        displayBox.innerText = text.substring(0, text.length-1);
    }
}

document.querySelector(".calculate").addEventListener("click",calculate)
document.querySelector(".ac").addEventListener("click",allClear)
document.querySelector(".clear-last").addEventListener("click",clear)
list.forEach(item => {
    item.addEventListener("click",showDisplay)
})