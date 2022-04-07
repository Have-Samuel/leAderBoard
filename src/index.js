/* eslint-disable import/extensions */
import './style.css';
import formButton from './modules/scoreBtn.js';
// eslint-disable-next-line no-unused-vars
import {
  getScores,
} from './modules/addScore.js';

// createScore('HAve', 77);
getScores();
formButton();