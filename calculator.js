"use strict";

let form = document.getElementById('form');
    console.log(form)
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        calc();
    })
    
function calc() {
    
    var first_value;
    first_value = Number(document.getElementById("first_value").value);
    console.log(first_value);
    var second_value;
    second_value = Number(document.getElementById("second_value").value);
    console.log(second_value);
    var operator = document.getElementById("operator").value;
    var result;
    if (second_value !== NaN && first_value !== NaN) {
        if (operator == "+") {
            result = first_value + second_value;
            document.getElementById("result").value = result;
            console.log(result);
        }
        else if (operator == "-") {
            result = first_value - second_value;
            console.log(result);
            document.getElementById("result").value = result;
        }
        else if (operator == "*") {
            result = first_value * second_value;
            console.log(result);
            document.getElementById("result").value = result;
        }
        else if (operator == "/") {
            result = first_value / second_value;
            console.log(result);
            document.getElementById("result").value = result;
        }
        else if (operator == "**") {
            result = Math.pow(first_value, second_value);
            console.log(result);
            document.getElementById("result").value = result;
        }
        else if (operator == "//") {
            result = first_value % second_value;
            console.log(result);
            document.getElementById("result").value = result;
        }
        document.getElementById("first_value").value = "";
        document.getElementById("second_value").value = "";
        document.getElementById("operator").value = '';
    }
    else {
        result = 0;
        document.getElementById("result").value = result;
        document.getElementById("operator").value = '';
    }
}
