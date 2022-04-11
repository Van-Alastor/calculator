let content = document.querySelector("#display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let point = document.querySelector(".point")
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
let numbersButton = document.querySelectorAll(".numbers");;

let a = "";
let b = 0;
let c = "";
let status1 = 0;
let status2 = 0;
let stopNumbers = 0;

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
        if (stopNumbers < 1) {
            if (status1 == 0) {
                display.textContent += numbers.id;
                a = parseFloat(display.textContent);
            } 
            else if (status1 > 0) {
                if (status2 == 1) {
                    display.textContent = "";
                    status2++;
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
            status1++;
            status2 = 1;
            stopNumbers = 0;
            display.textContent = operator.id; 
            c = operator.id;
        }
    })
})

point.addEventListener("click" , () => {
    let text = display.textContent;

    if (!text.includes(".") && !(a === "") && !(isNaN(a)) && !(isNaN(b)) && stopNumbers < 1) {
        if (text.includes("+") || text.includes("*") || text.includes("-") || text.includes("/") || text.includes("a")) {
            return;
        }
        display.textContent += ".";
    }
})

    equal.addEventListener("click" , () => {
        if (!(isNaN(a)) && !(isNaN(b)) && !(a === "") && !(b === "")) {
            if ( c == "+") {
                display.textContent = add(a, b);
                stopNumbers++;
            }
            else if ( c == "*") {
                display.textContent = multiply(a, b);
                stopNumbers++;
            }
            else if ( c == "/") {
                display.textContent = divide(a, b);
                stopNumbers++;
            }
            else if ( c == "-") {
                display.textContent = substract(a, b);
                stopNumbers++;
            }
        status2 = 0;
        a = parseFloat(display.textContent)
        c = "";
    } 
})

del.addEventListener("click" , () => {
    let visual = display.textContent;
    visual.toString();
    textNum = visual.length - 1;

    if (stopNumbers == 0 && !(isNaN(a)) && !(isNaN(b))) {
        display.textContent = visual.substring(0, textNum);
    }  
    if (status1 == 0) {
        a = parseFloat(display.textContent);
    } 
    else if (status1 > 0) {
        b = parseFloat(display.textContent);
    }
})

clear.addEventListener("click" , () => {
    display.textContent = ""; 
    status1 = 0;
    a = "";
    b = "";
    c = "";
    stopNumbers = 0; 
})




