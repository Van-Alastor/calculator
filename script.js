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

                    console.log(a);

                    if (display.textContent == "+") {

                        display.textContent = "";
                    }
                    else if (display.textContent == "-") {
                        display.textContent = "";
                    }
                    else if (display.textContent == "/") {
                        display.textContent = "";
                    }
                    else if (display.textContent == "*") {
                        display.textContent = "";
                    }

                    display.textContent += numbers.id;

                    return b = parseFloat(display.textContent);
                }
        })
    
    })


    operators.forEach((operator) => {

        operator.addEventListener("click" , () => {

            status++

            display.textContent = operator.id;
            
            return c = operator.id;
        })
        
    })

    equal.addEventListener("click" , () => {
        
        console.log(b);

        if ( c == "+") {
            display.textContent = add(a, b);
        }
        else if ( c == "*") {
            display.textContent = multiply(a, b);
        }
        else if ( c == "/") {
            display.textContent = divide(a, b);
        }
        else if ( c == "-") {
            display.textContent = substract(a, b);
        }
       
        return  a = parseFloat(display.textContent), b = "";
        
    })

    del.addEventListener("click" , () => {

        display.textContent = display.textContent;
        
        
    })


    clear.addEventListener("click" , () => {

        display.textContent = "";
        
        status = 0;
        
    })
}

operation ();

    

    

   




