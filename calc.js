// operator input
let operator = prompt('Choose any of \n 1 for Addition \n 2 for subtraction \n 3 for Multiplication \n 4 for Division');
// program for simple calculator and operands input.
if (operator == "1"){
    let num_1 = parseFloat(prompt('Addition \nEnter First Number: '));
    let num_2 = parseFloat(prompt('Enter Second Number: '));
    alert("The sum of the two numbers is " + (num_1 + num_2));
    alert("Thanks for using our basic calculator. \nReload to do more calculations.")
} else if(operator == "2") {
    let num_1 = parseFloat(prompt('Subtraction \nEnter First Number: '));
    let num_2 = parseFloat(prompt('Enter Second Number: '));
    alert("The difference of the two numbers is " + (num_1 - num_2));
    alert("Thanks for using our basic calculator. \nReload to do more calculations.")
} else if(operator == "3") {
    let num_1 = parseFloat(prompt('Multiplication \nEnter First Number: '));
    let num_2 = parseFloat(prompt('Enter Second Number: '));
    alert("The product of the two numbers is " + (num_1 * num_2));
    alert("Thanks for using our basic calculator. \nReload to do more calculations.")
} else if(operator == "4") {
    let num_1 = parseFloat(prompt('Division \nEnter First Number: '));
    let num_2 = parseFloat(prompt('Enter Second Number: '));
    alert("The quotient of the two numbers is " + (num_1 / num_2));
    alert("Thanks for using our basic calculator. \nReload to do more calculations.")
}else {
    alert("Invalid Operator. \nReload page to try again.")
}