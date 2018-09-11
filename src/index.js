import readlineSync from 'readline-sync';
import even from './even';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}.`);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}.`);
  let game = even();
  for (let i = 0; i < 2; i += 1) {
    if (game.compare) {
      console.log('Correct!');
      game = even();
    } else {
      const looseMessage = `'${game.userAnswer}' is wrong answer ;(. Correct answer was '${game.answer}'.  \nLet's try again, ${getUserName}!`;
      return console.log(looseMessage);
    }
  }
  return console.log(`Congratulations, ${getUserName}`);
};

export { brainGames, brainEven };
