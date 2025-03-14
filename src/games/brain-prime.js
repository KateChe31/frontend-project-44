import playGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playGamePrime = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(getQuestionAndAnswer, gameQuestion);
};

export default playGamePrime;
