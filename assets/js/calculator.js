
// Creation et initialisation des variables
var button_input = document.querySelectorAll(".button");
var display_numberback = document.querySelectorAll(".number");
var display_number = document.querySelector("#in-number");
var processed_number = "";
var has_point = false;

// Reverse iterate



window.onload = function () {

    console.log(display_number.innerHTML)
    display_number.innerHTML = "";


};





function add_number(button_number) {


    if (button_number != "." && has_point == false) {
        display_number.innerHTML += button_number;
    }
    else if(button_number == "." && has_point == false){
        display_number.innerHTML += button_number;
        has_point = true;
    }else if(button_number != "." && has_point == true){
        display_number.innerHTML += button_number;
    }


    console.log(+display_number.innerHTML)
}




// Ajout d'event listener

button_input[0].addEventListener("click", function () {
    add_number(7);
    // console.log("7");
})
button_input[1].addEventListener("click", function () {
    add_number(8);
    console.log("8");
})
button_input[2].addEventListener("click", function () {
    add_number(9);
    console.log("9");
})
button_input[3].addEventListener("click", function () {
    console.log("C");
})
button_input[4].addEventListener("click", function () {
    add_number(4);
    console.log("4");
})
button_input[5].addEventListener("click", function () {
    add_number(5);
    console.log("5");
})
button_input[6].addEventListener("click", function () {
    add_number(6);
    console.log("6");
})
button_input[7].addEventListener("click", function () {
    console.log("+");
})
button_input[8].addEventListener("click", function () {
    console.log("-");
})
button_input[9].addEventListener("click", function () {
    add_number(1);
    console.log("1");
})
button_input[10].addEventListener("click", function () {
    add_number(2);
    console.log("2");
})
button_input[11].addEventListener("click", function () {
    add_number(3);
    console.log("3");
})
button_input[12].addEventListener("click", function () {
    console.log("times");
})
button_input[13].addEventListener("click", function () {
    console.log("divide");
})
button_input[14].addEventListener("click", function () {
    console.log("0");
})
button_input[15].addEventListener("click", function () {
    add_number(".");
    console.log(".");
})
button_input[16].addEventListener("click", function () {
    console.log("=");
})











