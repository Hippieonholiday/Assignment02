let num = prompt("Enter a number between 1 and 100");

if (num >= 60 && num <= 69) {
    alert("You recieved a D");
} else if (num >= 70 && num <= 79) {
    alert("You recieved a C");
} else if (num >= 80 && num <= 89) {
    alert("You recieved a B");
} else if (num >= 90 && num <= 100) {
    alert("You recieved a A");
} else if (num < 60 && num >=1 ) {
    alert("You recieved a F");
} else if (num <= 0 || num >= 101) {
    alert ("the number must be between 1 and 100");
}
