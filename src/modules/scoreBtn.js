/* eslint-disable import/extensions */
import { createScore } from './addScore.js';

const scoreForm = document.querySelector('form');
const scoreName = scoreForm.querySelectorAll('input')[0];
const scoreVal = scoreForm.querySelectorAll('input')[1];

const formButton = () => {
  scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (scoreName.value !== '' && scoreVal.value >= 0) {
      createScore(scoreName.value, scoreVal.value);
      scoreName.value = '';
      scoreVal.value = '';
    }
  });
};

export default formButton;