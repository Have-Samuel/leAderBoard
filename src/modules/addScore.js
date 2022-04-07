
const scoreHTML = document.querySelector('#scoreList');

export const createGame = async () => {
  let gameId = null;
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'HaveGame',
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    return error.message;
  }
  return gameId;
};

// Create a game
// to get an ID, save that ID
// create a URL endpoint with that ID
const createScore = async (user, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LUaUfqXVzn1hoUXCyr49/scores', {
      method: 'POST',
      body: { User: user, Score: score },
      headers: {
        'Content-type': 'application/json; charaset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      game.scores.push({ user, score });
    }
  } catch (error) {
    return error.massage;
  }
  return null || { user, score };
};

const addScore = async (name, value) => {
  const scoreElement = document.createElement('li');

  scoreElement.innerHTML = `${name} : ${value}`;
  scoreHTML.appendChild(scoreElement);
};

export default addScore;
