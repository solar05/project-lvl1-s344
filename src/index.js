import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';

const rules = {
  brainEvenRule: 'Answer "yes" if number even otherwise answer "no".\n',
  brainCalcRule: 'What is the result of the expression?\n',
  brainGcdRule: 'Find the greatest common divisor of given numbers.\n',
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
const congrats = name => `Congratulations, ${name}!`;

const game = (fun, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const data = fun();
    if (data.compare) {
      console.log('Correct!');
    } else {
      const looseMessage = `'${data.userAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'.  \nLet's try again, ${userName}!`;
      return console.log(looseMessage);
    }
  }
  return console.log(congrats(userName));
};

console.log('Welcome to the Brain Games!');


const brainEven = () => {
  console.log(rules.brainEvenRule);
  const userName = getUserName();
  game(even, userName);
};

const brainCalc = () => {
  console.log(rules.brainCalcRule);
  const userName = getUserName();
  game(calc, userName);
};

const brainGcd = () => {
  console.log(rules.brainGcdRule);
  const userName = getUserName();
  game(gcd, userName);
};

export { brainEven, brainCalc, brainGcd };
