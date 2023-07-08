function calc() {
  let first_value: number;

  first_value = Number(document.getElementById("first_value").value);
  console.log(first_value);

  let second_value: number;

  second_value = Number(document.getElementById("second_value").value);
  console.log(second_value);

  let operator: string = document.getElementById("operator").value;

  let result: number;
  if (first_value !== 0 && second_value !== 0) {
    if (operator == "+") {
      result = first_value + second_value;
      document.getElementById("result").value = result;
      console.log(result);
    } else if (operator == "-") {
      result = first_value - second_value;
      console.log(result);
      document.getElementById("result").value = result;
    } else if (operator == "*") {
      result = first_value * second_value;
      console.log(result);
      document.getElementById("result").value = result;
    } else if (operator == "/") {
      result = first_value / second_value;
      console.log(result);
      document.getElementById("result").value = result;
    } else if (operator == "**") {
      result = first_value ** second_value;
      console.log(result);
      document.getElementById("result").value = result;
    } else if (operator == "//") {
      result = first_value % second_value;
      console.log(result);
      document.getElementById("result").value = result;
    }

    document.getElementById("first_value").value = "";
    document.getElementById("second_value").value = "";
    document.getElementById("operator").value =''
  } else {
    result = 0;
    document.getElementById("result").value = result;
    document.getElementById("operator").value = ''
  }
}

export {};
