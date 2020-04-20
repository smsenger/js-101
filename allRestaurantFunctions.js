function tipAmount(bill, service) {
    if (service == "good") {
        tip = bill * .20;
        return tip;
    }
    else if (service == "fair") {
        tip = bill * .15;
        return tip;
    }
    else if (service == "bad") {
        tip = bill * .10;
        return tip;
    }
}

console.log(tipAmount(100, "good"));


function totalAmount(bill, service) {
    if (service == "good") {
        return tipAmount(bill, service) + bill;
    }
    else if (service == "fair") {
        return tipAmount(bill, service) + bill;
    }
    else if (service == "bad") {
        return tipAmount(bill, service) + bill;
    }
}

console.log(totalAmount(100, "fair"));



function splitAmount(bill, service, people) {
    return totalAmount(bill, service)/people;
} 


console.log(splitAmount(100, "bad", 4));