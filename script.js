let content = document.querySelector("#display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let point = document.querySelector(".point")
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
let numbersButton = document.querySelectorAll(".numbers");;

let a = "";
let b = "";
let c = "";
let status1 = false;
let status2 = false;
let stopNumbers = false;

function add(num1, num2) {
    return num1 + num2;  
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return display.textContent = "You can't divide by zero";
    }
    return num1 / num2;
}

numbersButton.forEach((numbers) => {
    numbers.addEventListener("click" , () => {
        if (stopNumbers == false) {
            if (status1 == false) {
                display.textContent += numbers.id;
                a = parseFloat(display.textContent);
            } 
            else if (status1 == true) {
                if (status2 == true) {
                    status2 = false;
                    display.textContent = "";
            }
            display.textContent += numbers.id;
            b = parseFloat(display.textContent);
            }
        }
    })
    
})

operators.forEach((operator) => {
    operator.addEventListener("click" , () => {
        if (!(a === "") && !(isNaN(a))) {
            status1 = true;
            status2 = true;
            stopNumbers = false;
            display.textContent = operator.id; 
            c = operator.id;
        }
    })
})

point.addEventListener("click" , () => {
    let text = display.textContent;
    let symbols = /[\-\+\/\*]/;

    if (!text.includes(".") && !(a === "") && !(isNaN(a)) && !(isNaN(b)) && stopNumbers == false) {
        if (symbols.test(text) == true) {
            return;
        }
        display.textContent += ".";
    }
})

equal.addEventListener("click" , () => {
    if (!(isNaN(a)) && !(isNaN(b)) && !(a === "") && !(b === "")) {
        if ( c == "+") {
            display.textContent = add(a, b);
            stopNumbers = true;
        }
        else if ( c == "*") {
            display.textContent = multiply(a, b);
            stopNumbers = true;
        }
        else if ( c == "/") {
            display.textContent = divide(a, b);
            stopNumbers = true;
        }
        else if ( c == "-") {
            display.textContent = substract(a, b);
            stopNumbers = true;
        }
        status2 = false;
        a = parseFloat(display.textContent)
        c = "";
    } 
})

del.addEventListener("click" , () => {
    let visual = display.textContent;
    visual.toString();
    textNum = visual.length - 1;

    if (stopNumbers == false && !(isNaN(a)) && !(isNaN(b))) {
        display.textContent = visual.substring(0, textNum);
    }  
    if (status1 == false) {
        a = parseFloat(display.textContent);
    } 
    else if (status1 == true) {
        b = parseFloat(display.textContent);
    }
})

clear.addEventListener("click" , () => {
    display.textContent = ""; 
    status1 = false;
    a = "";
    b = "";
    c = "";
    stopNumbers = false; 
})




