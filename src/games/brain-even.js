import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playGameEven = () => { 
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".'; 
  playGame(getQuestionAndAnswer, gameQuestion);
};
            
export default playGameEven;
