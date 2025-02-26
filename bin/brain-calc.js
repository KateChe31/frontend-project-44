import playGame from '../src/index.js';

const getRandomExpression = () => {
    const num1 =  Math.floor(Math.random() * 100) + 1;
    const num2 =  Math.floor(Math.random() * 100) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const expression = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
        case '+':
        correctAnswer = num1 + num2;
        break;
        case '-':
        correctAnswer = num1 - num2;
        break;
        case '*':
        correctAnswer = num1 * num2;
        break;
    }
    return { question: expression, correctAnswer };
};

const playGameCalc = () => {
    const gameQuestion = 'What is the result of the expression?';
    playGame(getRandomExpression, gameQuestion);
  };

playGameCalc();