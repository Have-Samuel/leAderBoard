/* eslint-disable import/extensions */
import './style.css';
import formButton from './modules/scoreBtn.js';
// eslint-disable-next-line no-unused-vars
import { createGame, gameScores, createScore } from './modules/addScore.js';

createGame();
createScore('HAve', 77);
formButton();