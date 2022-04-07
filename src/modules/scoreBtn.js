/* eslint-disable import/extensions */
import addScore from './addScore.js';
import { scoreList } from './scoreList.js';

const scoreForm = document.querySelector('#addScore');
const scoreName = scoreForm.querySelectorAll('input')[0];
const scoreVal = scoreForm.querySelectorAll('input')[1];

const formButton = () => {
  scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (scoreName.value !== '' && scoreVal.value >= 0) {
      addScore(scoreName.value, scoreVal.value);
      scoreList.add(scoreName.value, scoreVal.value);
      scoreName.value = '';
      scoreVal.value = '';
    }
  });
};

export default formButton;

// TODO: Change scoreVal to type text [numbers | > 0]