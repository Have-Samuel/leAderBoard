/* eslint-disable no-undef */

export const gameScores = [];

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
      const List = document.querySelector('#scoreList');
      const newlist = document.createElement('li');
      newlist.innerHTML = `Name: ${user}, Score: ${score}`;
      List.appendChild(newlist);
    }
  } catch (error) {
    return error.message;
  }
  return null || { user, score };
};

export const getScores = async (user, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1X4L9BvajAtPoRbnJWAH/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charaset=UTF-8',
      },
    });
    if (response.ok) {
      const List = document.querySelector('#scoreList');
      const newlist = document.createElement('li');
      newlist.innerHTML = `Name: ${user}, Score: ${score}`;
      List.appendChild(newlist);
    }
  } catch (error) {
    return error.message;
  }
  return null || { user, score };
};
