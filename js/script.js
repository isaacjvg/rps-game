let playerScore = 0, computerScore = 0, tiesCount = 0;

function play(userChoice) {
  // Generate a random choice for the computer
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];

  // Define win conditions for the player
  const winConditions = { rock: "scissors", paper: "rock", scissors: "paper" };

  // Determine the result of the game
  const result = userChoice === botChoice ? 
    { text: `It's a draw! Both chose <code>${userChoice.toUpperCase()}</code>`, class: "draw" } : 
    (winConditions[userChoice] === botChoice ? 
      { text: `You won! You chose <code>${userChoice.toUpperCase()}</code> and the computer chose <code>${botChoice.toUpperCase()}</code>.`, class: "win" } : 
      { text: `You lost! You chose <code>${userChoice.toUpperCase()}</code> and the computer chose <code>${botChoice.toUpperCase()}</code>.`, class: "lose" });

  // Update scores based on the result
  if (result.class === "draw") tiesCount++;
  else if (result.class === "win") playerScore++;
  else computerScore++;

  // Update the UI with the result and scores
  const status = document.getElementById("status");
  status.innerHTML = result.text;
  status.className = result.class;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("tiesCount").textContent = tiesCount;
}

