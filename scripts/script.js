let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();





let result = '';
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Lose';
    } else if (computerMove === 'paper') {
      result = 'Win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }

  }
  else if (playerMove === 'paper') {


    if (computerMove === 'rock') {
      result = 'Win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'Lose';
    }

  } else if (playerMove === 'rock') {


    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'Lose';
    } else if (computerMove === 'scissors') {
      result = 'Win';
    }
  }

  if (result == 'Win') {
    score.wins += 1;
  } else if (result == 'Lose') {
    score.losses += 1;
  } else if (result == 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = `<img src="./images/${result}.png" alt="" class= "win-lose"><p style="display: inline; " class="win-lose-text">You ${result}</p> `;
  document.querySelector('.js-moves').innerHTML = `<div class="container">
      <div class="row">
        <div class="col-6">
          <div class="p-3 "><img src="./images/${playerMove}.svg"  alt="" ></div>
        </div>
        <div class="col-6">
          <div class="p-3 "><img src="./images/${computerMove}.svg"   alt=""></div>
        </div>
      </div>
    </div>`;
  const modal = new bootstrap.Modal(document.getElementById('resultModal'));
  modal.show();

  /*alert(`You choose ${playerMove}. Computer choose ${computerMove}. ${result}
Win :${score.wins}, Lose:${score.losses}, Tie:${score.ties}`);*/
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `<p type="" class="btn btn-primary position-relative badges-inline" style="margin-right:30px; font-size: 30px; width:100px;">
          Win
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${score.wins}

          </span>
        </p>
        <p type="" class="btn btn-secondary position-relative badges-inline" style="margin-right:30px; font-size: 30px; width:100px;">
          Loss
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${score.losses}

          </span>
        </p>
        <p type="" class="btn btn-success position-relative badges-inline " style="width:100px;  font-size: 30px;">
          Tie
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${score.ties}

          </span>
        </p>`;
};

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}