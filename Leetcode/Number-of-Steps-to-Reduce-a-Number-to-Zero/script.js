var numberOfSteps  = function(num) {
    // variable to hold number of steps
    // while loop that goes as long as num is greater than 0
    // if statement that determines if num is even then divide by 2
    // if statement that determines if num is odd then substract by 1
    // add one to number of steps
    // return number of steps
    let steps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num/2;
        } else {
            num--;
        }
        steps++;
    }
    return steps;  
};

console.log(numberOfSteps(20), 'Number of steps to get to zero');