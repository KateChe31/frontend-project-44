import playGame from '../index.js';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGCD(num1, num2));
  return { question, correctAnswer };
};
const playGameGCD = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  playGame(getQuestionAndAnswer, gameQuestion);
};

export default playGameGCD;
