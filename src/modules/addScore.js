/* eslint-disable no-undef */

export const gameScores = [];

export const createScore = async (user, score) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f1aLqYvqeieZ1T9uXHhF/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charaset=UTF-8',
        },
      },
    );
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
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f1aLqYvqeieZ1T9uXHhF/scores/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charaset=UTF-8',
        },
      },
    );
    if (response.ok) {
      const List = document.querySelector('#scoreList');
      const getData = await response.json().then((response) => response.result);
      getData.forEach((element) => {
        const newlist = document.createElement('li');
        newlist.innerHTML = `Name: ${element.user}, Score: ${element.score}`;
        List.appendChild(newlist);
      });
    }
  } catch (error) {
    return error.message;
  }
  return null || { user, score };
};
