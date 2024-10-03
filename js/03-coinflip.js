

let coinFlip = Math.round(Math.random() * 100 + 1);
let choice = prompt ("heads or tails");

switch (choice) {
    case "heads":
        if (coinFlip < 50) {
            alert ("The flip was heads and you chose heads...you win!");
        } else if (coinFlip > 50) {
            alert ("The flip was tails but you chose heads...you lose!");
        } break;
    case "tails":
        if (coinFlip > 50) {
            alert ("The flip was tails and you chose tails...you win!");
        } else if (coinFlip < 50) {
            alert ("The flip was heads but you chose tails...you lose!");
        } break;
    default:
        alert ("Invalid choice, please refresh and try again");
}