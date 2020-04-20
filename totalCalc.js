
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total 
// as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function tipCalc(bill, service) {
    if (service == "good") {
        tip = bill * .20;
        total = bill + tip;
        console.log("Your total is $" + total + ".");
    }
    else if (service == "fair") {
        tip = bill * .15;
        total = bill + tip;
        console.log("Your total is $" + total + ".");
    }
    else if (service == "bad") {
        tip = bill * .10;
        total = bill + tip;
        console.log("Your total is $" + total + ".");
    }
    else {
        console.log('No tip for you! Womp-womp!');
    }
}

tipCalc(100, "good")
tipCalc(100, "fair")
tipCalc(100, "bad")
tipCalc(100, "meh")