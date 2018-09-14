import readlineSync from 'readline-sync';


const getUserName = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
const congrats = name => `Congratulations, ${name}!`;

const gameCore = (game, rule) => {
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const userName = getUserName();
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      const looseMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.  \nLet's try again, ${userName}!`;
      return console.log(looseMessage);
    }
  }
  return console.log(congrats(userName));
};

export default gameCore;
