let playerScore = 0, computerScore = 0, tiesCount = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];

  const winConditions = { rock: "scissors", paper: "rock", scissors: "paper" };

  const result = userChoice === botChoice ? 
    { text: `It's a draw! Both chose <code>${userChoice.toUpperCase()}</code>`, class: "draw" } : 
    (winConditions[userChoice] === botChoice ? 
      { text: `You won! You chose <code>${userChoice.toUpperCase()}</code> and the computer chose <code>${botChoice.toUpperCase()}</code>.`, class: "win" } : 
      { text: `You lost! You chose <code>${userChoice.toUpperCase()}</code> and the computer chose <code>${botChoice.toUpperCase()}</code>.`, class: "lose" });

  if (result.class === "draw") tiesCount++;
  else if (result.class === "win") playerScore++;
  else computerScore++;

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("tiesCount").textContent = tiesCount;

  const status = document.getElementById("status");
  status.innerHTML = result.text;
  status.className = result.class;

  updateBattlefield(userChoice, botChoice, result.class);
}

function updateBattlefield(playerChoice, botChoice, resultClass) {
  const battlefield = document.getElementById("battlefield");
  battlefield.innerHTML = `
    <div class="battle-item ${resultClass === 'win' ? 'win-animation' : ''}">
      <img src="images/${playerChoice}.png" alt="${playerChoice}">
    </div>
    <div class="battle-item ${resultClass === 'lose' ? 'win-animation' : ''}">
      <img src="images/${botChoice}.png" alt="${botChoice}">
    </div>
  `;
}
