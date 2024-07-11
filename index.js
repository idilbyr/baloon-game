let count=0;
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(count);

function increment(){
    count++;
    countEL.innerText=count;
}

function save(){
    let countStr= count+ " - ";
    saveEl.textContent+=countStr;
    countEL.textContent=0;
    count=0;
}
