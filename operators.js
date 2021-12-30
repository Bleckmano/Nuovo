// Javascript Operators

// Basics Operators

// let inbox = 10;

// console.log(inbox * 2);
// console.log(inbox / 2);
// console.log(inbox - 2);
// console.log(inbox + 2);
// console.log(inbox ** 2);

// inbox ++; 

// inbox --;

// inbox += 20;

function giveChange(change) {
    var two = 0;
    var five = 0;
    var ten = 0;
    var changeToGo = change;

    while (changeToGo >= 11) {
        changeToGo -= 10;
        ten += 1;
    }

    while (changeToGo >= 7 && changeToGo <= 11) {
        changeToGo -= 5;
        five += 1;
    }

    while (changeToGo >= 2 && changeToGo <= 6) {
        if (changeToGo == 5) {
            changeToGo -= 5;
            five += 1;
        } else {
            changeToGo -= 2;
            two += 1;
        }
    }

    if (change < 2) {
        return null;
    }

    return {
        two: two,
        five: five,
        ten: ten
    };
}