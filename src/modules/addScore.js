const scoreHTML = document.querySelector('#scoreList');

export const gameScores = [];

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
export const createScore = async (user, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1X4L9BvajAtPoRbnJWAH/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charaset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      gameScores.push({ user, score });
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
  return null || { user, score };
};

const getScores = async () => {
  let allScores = null;
  try {
    const response = await fetch(endpoints.scores);
    if (response.ok) {
      // get game ID
      const data = await response.json();
      allScores = data.result;
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
  return null || allScores;
};

export { getScores };

const addScore = async (name, value) => {
  const scoreElement = document.createElement('li');

  scoreElement.innerHTML = `${name} : ${value}`;
  scoreHTML.appendChild(scoreElement);
};

export default addScore;
