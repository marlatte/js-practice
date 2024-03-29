/*
CHALLENGE:
---------
10 people are sitting in a circle. They have to count up to 100, each person saying a number. 
However, each time they reach a multiple of 7, they switch directions (like an UNO reverse card),
and each time they reach a multiple of 11, they skip the next person (like an UNO skip card).
Who says the number 100?
*/
/*
PROGRAM CounterGame (userInput)
    person = 1
    index = 1
    countUp = true

    WHILE (index <= userInput)
        IF (index divisible by 7)
            countUp = !countUp
        END IF

        IF (countUp = true)
            person++
        ELSE 
            person--
        END IF/ELSE

        IF (person > 10)
            person = 1
        ELSE IF (person < 1)
            person = 10
        END IF/ELSE

        IF (index divisible by 11)
            IF (countUp = true)
                person++
            ELSE 
                person--
            END IF/ELSE
        END IF

        index++
        PRINT "The index is: (index)."
        PRINT "The person is (person)."
    END WHILE
    PRINT "The person to say (userInput) is (person)."
END */

function CounterGame(userInput) {
    let person = 1,
        index = 1,
        countUp = true;

    while (index <= userInput) {
        if (person > 10) {
            person = 1;
        } else if (person < 1) {
            person = 10;
        };

        console.log(`Person ${person} says number ${index}.`);

        if (index % 7 === 0) {
            countUp = !countUp;
        };
    
        if (countUp === true) {    
            person++;
        } else {
            person--;
        };
    
        if (index % 11 === 0) {
            if (countUp === true) {
                person++;
            } else {
                person--;
            };
        };
    
        index++;  
    };
};

CounterGame(prompt("Upper limit?", ""))