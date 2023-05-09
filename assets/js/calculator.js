
// Creation et initialisation des variables
var button_input = document.querySelectorAll(".button");


var display_numberback = document.querySelectorAll(".number");
var display_number = document.querySelectorAll(".in-number");
var processed_number = "";


for (let index = display_number.length; index != 0; index--) {
    console.log(display_number[index].innerHTML);
    processed_number += display_number[index].innerHTML;
    
}


window.onload = function(){

    console.log(processed_number);
    display_number[0].innerHTML = 0;


};

function cliked_number()
{


}



// Ajout d'event listener

button_input[0].addEventListener("click",function(){

    console.log("7");
})
button_input[1].addEventListener("click",function(){
    console.log("8");
})
button_input[2].addEventListener("click",function(){
    console.log("9");
})
button_input[3].addEventListener("click",function(){
    console.log("C");
})
button_input[4].addEventListener("click",function(){
    console.log("4");
})
button_input[5].addEventListener("click",function(){
    console.log("5");
})
button_input[6].addEventListener("click",function(){
    console.log("6");
})
button_input[7].addEventListener("click",function(){
    console.log("+");
})
button_input[8].addEventListener("click",function(){
    console.log("-");
})
button_input[9].addEventListener("click",function(){
    console.log("1");
})
button_input[10].addEventListener("click",function(){
    console.log("2");
})
button_input[11].addEventListener("click",function(){
    console.log("3");
})
button_input[12].addEventListener("click",function(){
    console.log("times");
})
button_input[13].addEventListener("click",function(){
    console.log("divide");
})
button_input[14].addEventListener("click",function(){
    console.log("0");
})
button_input[15].addEventListener("click",function(){
    console.log(".");
})
button_input[16].addEventListener("click",function(){
    console.log("=");
})











