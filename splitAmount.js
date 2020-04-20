// Write a function splitAmount that takes the bill amount and the level of service, 
// and the number of people to split the bill between. It will return the final amount for each person.

// ```js
// splitAmount(100, 'good', 5);
// // 24

// splitAmount(40, 'fair', 2);
// // 23


function tipCalc(bill, service, split) {
    if (service == "good") {
        tip = bill * .20;
        total = bill + tip;
        each = total/split;
        console.log("Each will pay $" + each + ".");
    }
    else if (service == "fair") {
        tip = bill * .15;
        total = bill + tip;
        each = total/split;
        console.log("Each will pay $" + each + ".");
    }
    else if (service == "bad") {
        tip = bill * .10;
        total = bill + tip;
        each = total/split;
        console.log("Each will pay $" + each + ".");
    }
    else {
        console.log('No tip for you! Womp-womp!');
    }
}

tipCalc(100, "good", 2)
tipCalc(100, "fair", 2)
tipCalc(100, "bad", 2)
tipCalc(100, "meh")