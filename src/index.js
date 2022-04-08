/* eslint-disable import/extensions */
import './style.css';
import formButton from './modules/scoreBtn.js';
// eslint-disable-next-line no-unused-vars
import {
  getScores,
} from './modules/addScore.js';
import refresh from './modules/scoreList';

// createScore('HAve', 77);
getScores();
formButton();
refresh();