var RNumber = Math.floor(Math.random() * 10) + 1;

for (Attempts = 0; UserAnswer != RNumber; Attempts += 1){
    var UserAnswer = prompt('I think of a number between 1-10, what is it?');
}

document.write('<p> Your guess is Correct! </p>');
document.write('<p> ' + RNumber + ' is the correct answer </p>');
document.write('<p> It took you ' + Attempts + ' attempts to guess correctly </p>');