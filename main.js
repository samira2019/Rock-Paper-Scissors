 var output = document.getElementById('game');
 // User choice
 var userChoice = prompt("choose between  rock, paper or scissors?");
 if (! userChoice) {
     // User choice is undefined
     output.innerHTML += "<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>";
 }
  else {
     // Display user choice
     output.innerHTML += "<p>Player 1:" + " " + userChoice + "</p>";
 }

 // Computer choice
 var computerChoice = Math.floor(Math.random()*10);
 if (computerChoice < 3) {
     computerChoice = "rock";
 } else if(computerChoice <= 6) {
     computerChoice = "paper";
 } else {
     computerChoice = "scissors";
 }
 // Display computer choice
 output.innerHTML += ("<br> <p>Computer:" + " " + computerChoice + "</p>");
 // Compare user choice vs computer choice
 var compare = function(choice1,choice2) {
     if (choice1 === choice2) {
         return "It's a tie!";
     }
     if (choice1 === "rock") {
         if (choice2 === "scissors") {
             // rock wins
             return "You win!";
         } else {
             // paper wins
             return "You lose! Try again.";
         }
     }
     if (choice1 === "paper") {
         if (choice2 === "rock") {
             // paper wins
             return "You win!";
         } else {
             // scissors wins
             return "You lose! Try again.";
         }
     }
     if (choice1 === "scissors") {
         if (choice2 === "rock") {
             // rock wins
             return "You lose! Try again.";
         } else {
             // scissors wins
             return "You win!";
         }
     }
 };
 // Run the compare function
 var results = compare(userChoice,computerChoice);
 // Display results
 output.innerHTML += ("<br> <hr> <br>" + results);