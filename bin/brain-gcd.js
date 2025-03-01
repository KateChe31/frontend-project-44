import playGame from '../src/index.js';

const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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

playGameGCD();