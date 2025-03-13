import readlineSync from 'readline-sync';
import greetings from './cli.js';

const playGame = (getQuestionAndAnswer, gameQuestion, roundsCount = 3) => {
  const userName = greetings();
  console.log(gameQuestion);
  let correctAnswers = 0;

  while (correctAnswers < roundsCount) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
