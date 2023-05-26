const range = document.querySelectorAll(".range-slider input");
progress = document.querySelector("range-slider .progress");
let gap= 10;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach( input=>{
    input.addEventListener("input",e=>{
        let minrange = parseInt(range[0].value);
        if(maxrange- minrange <gap){
            if(e.target.className === "range-min"){
                range[0].value = maxrange-gap;
            }
            else{
                range[1].value = minrange+gap;
            }
        }
        else{
            progress.style.left = (minrange / range[0].max) * 100 + "%";
            progress.style.left = (maxrange / range[1].max) * 100 + "%";
            input[0].value = minrange;
            input[1].value = maxrange;
        }
    })
})