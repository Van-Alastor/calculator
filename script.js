let content = document.querySelector("#display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let point = document.querySelector(".point")
let equal = document.querySelector(".equal");

let operators = document.querySelectorAll(".operator");
let numbersButton = document.querySelectorAll(".numbers");;



function operation () {

    let a = "";
    let b = 0;
    let c = "";
    

    let status = 0;
    let status2 = 0;
    let stop = 0;



    function add (num1, num2) {

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

            if (stop < 1) {

                if (status == 0) {

                    display.textContent += numbers.id;

                   return a = parseFloat(display.textContent);

                } 
                else if (status > 0) {

                    if (status2 == 1) {

                        display.textContent = "";
                        status2++;
                    }

                    display.textContent += numbers.id;
                    return b = parseFloat(display.textContent);
                }
            }
        })
    
    })


    operators.forEach((operator) => {

        operator.addEventListener("click" , () => {

            if (!(a === "") && !(isNaN(a))) {
                status++;
                status2 = 1;
                stop = 0;

                display.textContent = operator.id;
                
                return c = operator.id;
            }
        })
        
    })

    point.addEventListener("click" , () => {

        let text = display.textContent;

        if(!text.includes(".") && !(a === "") && !(isNaN(a)) && !(isNaN(b)) && stop < 1) {
           if(text.includes("+") || text.includes("*") || text.includes("-") || text.includes("/") || text.includes("a")) {
               return null;
           }
           display.textContent += point.id;
        }

    })

    equal.addEventListener("click" , () => {

        if (!(isNaN(a)) && !(isNaN(b)) && !(a === "") && !(b === "")) {
            if ( c == "+") {
                display.textContent = add(a, b);
                stop++;
            }
            else if ( c == "*") {
                display.textContent = multiply(a, b);
                stop++;
            }
            else if ( c == "/") {
                display.textContent = divide(a, b);
                stop++;
            }
            else if ( c == "-") {
                display.textContent = substract(a, b);
                stop++;
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

        if(stop == 0 && !(isNaN(a)) && !(isNaN(b))) {
            display.textContent = visual.substring(0, textNum);
        }
        
        if (status == 0) {
           return a = parseFloat(display.textContent);

        } 
        else if (status > 0) {
            return b = parseFloat(display.textContent);
        }

    })


    clear.addEventListener("click" , () => {

        display.textContent = "";
        
        status = 0;

        a = "";

        b = "";

        c = "";

        stop = 0;
        
    })
}

operation ();

