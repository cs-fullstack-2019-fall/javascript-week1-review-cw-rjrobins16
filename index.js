//## Problem 1
//
// Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit.
// If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones.
// If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.

var counter =prompt("Enter '1' for count down and '2' for count up. Enter 'q' to quit.");

var counterInt = parseInt(counter);

while (counter !== 'q'){

    if (counterInt===1)
    {
        var CountDownto = parseInt(prompt("Enter a number to count down to."));

        for (x = 0; CountDownto < x; CountDownto = CountDownto--)
        {

        console.log(x)}
    }

    else if (counterInt===2){
        var y=0;
        var CountupTo= parseInt(prompt("Enter a number to count up to."));
        while (y<CountupTo)
        {
            console.log(y);
            y=CountupTo+1;
        }

    }
    }
//var counter = prompt("Enter a negative number to count down to.");




