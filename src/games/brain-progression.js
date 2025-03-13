import playGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const playGameProgression = () => {
  const gameQuestion = 'What number is missing in the progression?';
  playGame(getQuestionAndAnswer, gameQuestion);
};

export default playGameProgression;
