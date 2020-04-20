// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) 
// and returns the dollar amount for the tip. Based on:

// > good -> 20%
// >
// > fair -> 15%
// >
// > bad -> 10%

function tipCalc(bill, service) {
    if (service == "good") {
        tip = bill * .20;
        console.log("Your tip is $" + tip + ".");
    }
    else if (service == "fair") {
        tip = bill * .15;
        console.log("Your tip is $" + tip + ".");
    }
    else if (service == "bad") {
        tip = bill * .10;
        console.log("Your tip is $" + tip + ".");
    }
    else {
        console.log('No tip for you! Womp-womp!');
    }
}

tipCalc(100, "good")
tipCalc(100, "fair")
tipCalc(100, "bad")
tipCalc(100, "meh")