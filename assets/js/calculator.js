
// Creation et initialisation des variables
var button_input = document.querySelectorAll(".button");
var display_numberback = document.querySelectorAll(".number");
var display_number = document.querySelector("#in-number");
var calc = document.querySelector("#in-calc");
var has_calc = false
var has_point = false;
var saved_number;

// Reverse iterate



window.onload = function () {




};





function add_number(button_number) {

// Verifie que le nombre de caractère est pas dépasser
    if (display_number.innerHTML.length < 12) {
        // Verifie si un un chiffre est ajouter
        if (button_number != "." && has_point == false) {
            // Verifie si le chiffre est 0 si il y en a deja 1
            if(display_number.innerHTML.charAt(0) != "0" ||display_number.innerHTML.charAt(0) != 0  )
            {
                display_number.innerHTML += button_number;
            }

        }
        // Verifie si est . est ajouter
        else if (button_number == "." && has_point == false) {
            display_number.innerHTML += button_number;
            has_point = true;
        } else if (button_number != "." && has_point == true) {
            display_number.innerHTML += button_number;
        }
    } else {
        console.log("Limite de caractère atteinte")
    }



}
// Sauvegarde le chiffre quand une opération de calcul est entrée
function save_firstNumber() {

    if (!has_calc) {
        saved_number = display_number.innerHTML;
        has_calc = true;
        console.log(saved_number);
    }

}
// Fonction gerant les addition
function addition() {

    if (display_number.innerHTML != "") {
        calc.innerHTML = "+";
        save_firstNumber();
        display_number.innerHTML = "";
    }


}
// Fonction gérant les soustraction
function soustraction() {

    if (display_number.innerHTML != "") {
        calc.innerHTML = "-";
        save_firstNumber();
        display_number.innerHTML = "";
    }

}
// Gestion du bouton calcul
function equal() {
    if (has_calc && calc.innerHTML == "+") {
        display_number.innerHTML = +saved_number + +display_number.innerHTML;
    } else if (has_calc && calc.innerHTML == "-") {
        display_number.innerHTML = +saved_number - +display_number.innerHTML;
    } else if (has_calc && calc.innerHTML == "*") {
        display_number.innerHTML = +saved_number * +display_number.innerHTML;
    }
    else if (has_calc && calc.innerHTML == "/") {
        display_number.innerHTML = +saved_number / +display_number.innerHTML;
    }


    has_calc = false
    calc.innerHTML = "";
    has_point = display_number.innerHTML.includes(".");

}
// Fonction gérant les multiplication
function times() {

    if (display_number.innerHTML != "") {
        calc.innerHTML = "*";
        save_firstNumber();
        display_number.innerHTML = "";
    }


}
// Fonction gérant les division
function divide() {

    if (display_number.innerHTML != "") {
        calc.innerHTML = "/";
        save_firstNumber();
        display_number.innerHTML = "";
    }


}
// vide l'ecran
function clear_number() {

    display_number.innerHTML = "";
    calc.innerHTML = "";
    has_calc = false;
    has_point = false;
}

// Ajout d'event listener

button_input[0].addEventListener("click", function () {
    add_number(7);
    // console.log("7");
})
button_input[1].addEventListener("click", function () {
    add_number(8);
    // console.log("8");
})
button_input[2].addEventListener("click", function () {
    add_number(9);
    // console.log("9");
})
button_input[3].addEventListener("click", function () {
    clear_number();
    console.log("Clear");
})
button_input[4].addEventListener("click", function () {
    add_number(4);
    // console.log("4");
})
button_input[5].addEventListener("click", function () {
    add_number(5);
    // console.log("5");
})
button_input[6].addEventListener("click", function () {
    add_number(6);
    // console.log("6");
})
button_input[7].addEventListener("click", function () {
    addition();
})
button_input[8].addEventListener("click", function () {
    soustraction()
    // console.log("-");
})
button_input[9].addEventListener("click", function () {
    add_number(1);
    // console.log("1");
})
button_input[10].addEventListener("click", function () {
    add_number(2);
    // console.log("2");
})
button_input[11].addEventListener("click", function () {
    add_number(3);
    // console.log("3");
})
button_input[12].addEventListener("click", function () {
    times();
    // console.log("times");
})
button_input[13].addEventListener("click", function () {
    divide()
    // console.log("divide");
})
button_input[14].addEventListener("click", function () {
    add_number(0);
    // console.log("0");
})
button_input[15].addEventListener("click", function () {
    add_number(".");
    // console.log(".");
})
button_input[16].addEventListener("click", function () {
    equal();
    // console.log("=");
})











