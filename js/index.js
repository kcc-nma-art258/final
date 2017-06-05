var userChoice = ["Burnt Pan", "Torn Notebook", "Toy Knife"];
var scores = [0, 0, 0,];

function playerChoice(id) {
   var choice1 =  userChoice[id];
   var choice2 = randNum();

//massage for .rectangle
document.getElementById("message").innerHTML="*\ You chose the " + choice1 + ". Sans and Papyrus chose the " + choice2 + "\."

//message for flavor text
document.getElementById("flavor").innerHTML=compare(choice1, choice2);
    displayScores();
}

function randNum() {
    var randNum = [Math.floor(Math.random() * userChoice.length)]
    var computerChoice = userChoice[randNum];
    return computerChoice;
}

function compare(choice1, choice2) {
    if (choice1 == choice2) {
        scores[0]++;
        scores[3]++;
        return ("A DRAW?! PICK AGAIN\, HUMAN!");

    } else if (choice1 == "Torn Notebook") {
        if (choice2 == "Burnt Pan") {
            scores[1]++;
            scores[3]++;
            return ("YOU WON!? I, THE GREAT PAPYRUS HAS BEEN DEFEATED!");
        } else if (choice2 == "Toy Knife") {
            scores[2]++;
            scores[3]++;
            return ("*\ geeettttttt dunked on!");}

    } else if (choice1 == "Toy Knife") {
        if (choice2 == "Burnt Pan") {
            scores[2]++;
            scores[3]++;
            return ("YOU LOSE! YOU CAN NOT DEFEAT ME, HUMAN!");
        } else if (choice2 == "Torn Notebook") {
            scores[1]++;
            scores[3]++;
            return ("*\ wow, kid. you really WON me over.");}

    }  else if (choice1 == "Burnt Pan") {
        if (choice2 == "Toy Knife") {
            scores[1]++;
            scores[3]++;
            return ("*\ i guess you won. you really BURNT me good.");
        } else {
            scores[2]++;
            scores[3]++;
            return ("YOU LOST! NYEH HEH HEH!");}
      }
}

function displayScores() {
    document.getElementById("win").innerHTML = "Win: " + scores[1];
      document.getElementById("lose").innerHTML = "Lose: " + scores[2];
      document.getElementById("tie").innerHTML = "Tie: " + scores[0];
}
