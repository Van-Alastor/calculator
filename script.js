let content = document.querySelector("#display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let point = document.querySelector(".point")
let equal = document.querySelector(".equal");

let operators = document.querySelectorAll(".operator");
let numbersButton = document.querySelectorAll(".numbers");;



function operation () {

    let a = 0;
    let b = 0;
    let c = "";
    

    let status = 0;
    let status2 = 0;


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

        return num1 / num2;    

    }


    numbersButton.forEach((numbers) => {

        
        numbers.addEventListener("click" , () => {

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
        })
    
    })


    operators.forEach((operator) => {

        operator.addEventListener("click" , () => {

            status++;
            status2 = 1;

            display.textContent = operator.id;
            
            return c = operator.id;
        })
        
    })

    point.addEventListener("click" , () => {

        let text = display.textContent;

        if(text.includes(".") == false) {
            display.textContent += point.id;
        }

    })

    equal.addEventListener("click" , () => {

        if ( c == "+") {
            display.textContent = add(a, b), a = parseFloat(display.textContent), b = "";
        }
        else if ( c == "*") {
            display.textContent = multiply(a, b),  a = parseFloat(display.textContent), b = 1;
        }
        else if ( c == "/") {
            display.textContent = divide(a, b), a = parseFloat(display.textContent), b = 1;
        }
        else if ( c == "-") {
            display.textContent = substract(a, b),  a = parseFloat(display.textContent), b = "";
        }
        
        status2 = 0;
    })

    del.addEventListener("click" , () => {

        let visual = display.textContent;

        visual.toString();

        textNum = visual.length - 1;

        display.textContent = visual.substring(0, textNum);

        


    })


    clear.addEventListener("click" , () => {

        display.textContent = "";
        
        status = 0;
        
    })
}

operation ();

    

    

   




